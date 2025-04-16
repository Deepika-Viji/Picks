import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import api from '../../config/api';
import '../../assets/css/HeaderProfile.css';

const HeaderProfile = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const response = await axios.get(`${api.baseUrl}/api/users/me`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        setUser({
          username: response.data.username,
          role: response.data.role,
          tokenNumber: response.data.tokenNumber
        });
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        if (error.response?.status === 401) {
          logout();
        }
      }
    };

    fetchUserData();

    // Add event listener for storage changes
    const handleStorageChange = () => {
      if (!localStorage.getItem('token')) {
        setUser(null);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [logout]);

  const handleLogout = async () => {
    try {
      // Try to call the logout endpoint if it exists
      awaitaxios.post(`${api.baseUrl}/api/auth/logout`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      }).catch(() => {}); // Ignore errors if endpoint doesn't exist
    } finally {
      logout(); // Call the context logout
      
      Swal.fire({
        icon: 'success',
        title: 'Logged Out',
        text: 'You have been logged out.',
        timer: 1000,
        willClose: () => {
          // Force a full page reload to ensure all state is cleared
          window.location.href = '/';
        }
      });
    }
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="header-btn-box">
      <div className="profile-btn-wrapper">
        <button className="profile-btn" onClick={toggleDropdown}>
          <img src="src/assets/images/Usericon.png" alt="Profile" />
        </button>
        <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
          {user ? (
            <>
              <li>
                <div className="dropdown-txt text-center">
                  <p className="mb-0">{user.username}</p>
                  <span className="d-block role">{user.role}</span>
                  <span className="d-block token-number">{user.tokenNumber}</span>
                </div>
              </li>
              <li>
                <Link className="dropdown-item" to="/" onClick={handleLogout}>Logout</Link>
              </li>
            </>
          ) : (
            <li>
              <button className="login-btn" onClick={() => navigate('/')}>
                Login
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HeaderProfile;