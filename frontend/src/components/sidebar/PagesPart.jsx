import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import api from '../../config/api';
import '../../assets/css/PagesPart.css';

const PagesPart = () => {
  const [user, setUser] = useState(null); // Store user data
  const [loading, setLoading] = useState(true); // Show loading state
  const [pagesState, setPagesState] = useState({
    isMainDropdownOpen: true, // Open the dropdown by default when user logs in
    authentication: false,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get(`${api.baseUrl}/api/users/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data); // Set user data after fetching
          // Check if user has authentication role or permissions to show menu
          setPagesState((prevState) => ({
            ...prevState,
            authentication: response.data?.role === 'Admin' || response.data?.role === 'SuperAdmin',
            isMainDropdownOpen: true, // Automatically open the dropdown upon login
          }));
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          if (error.response?.status === 401) {
            window.location.href = '/';
          }
        })
        .finally(() => {
          setLoading(false); // Stop loading after the data is fetched or error occurs
        });
    } else {
      setLoading(false);
    }
  }, []);

  const toggleMainPagesDropdown = () => {
    setPagesState((prevState) => ({
      ...prevState,
      isMainDropdownOpen: !prevState.isMainDropdownOpen, // Toggle the dropdown open/close
    }));
  };

  if (loading) return <div>Loading...</div>; // Show loading message until user data is loaded

  // Check for Admin or SuperAdmin
  const isAdminOrSuperAdmin = user?.role === 'Admin' || user?.role === 'SuperAdmin';

  return (
    <li className="sidebar-item">
      {/* Dropdown title that toggles the menu */}
      <span
        role="button"
        className={`sidebar-link-group-title has-sub ${pagesState.isMainDropdownOpen ? 'show' : ''}`}
        onClick={toggleMainPagesDropdown}
      >
        Menu
      </span>
      <ul className={`sidebar-link-group ${pagesState.isMainDropdownOpen ? 'd-block' : ''}`}>
        {/* Other pages available for all users */}
        <li className="sidebar-dropdown-item">
          <NavLink to="/products" className="sidebar-link">
            Products
          </NavLink>
        </li>
        <li className="sidebar-dropdown-item">
          <NavLink to="/requirements" className="sidebar-link">
            Requirements
          </NavLink>
        </li>
        <li className="sidebar-dropdown-item">
              <NavLink to="/my-configurations" className="sidebar-link">
                  My Configurations
                </NavLink>
                </li>

        {/* Check if user has roles that can access the Account menu */}
        {isAdminOrSuperAdmin && (
          <li className="sidebar-dropdown-item">
            <ul className={`sidebar-dropdown-menu ${pagesState.authentication ? 'd-block' : ''}`}>
              <li className="sidebar-dropdown-item">
                <NavLink to="/allUsers" className="sidebar-link">
                  User Details
                </NavLink>
              </li>
              <li className="sidebar-dropdown-item">
                <NavLink to="/manage-segments" className="sidebar-link">
                  Manage Segments
                </NavLink>
              </li>
              <li className="sidebar-dropdown-item">
                <NavLink to="/manage-calculations" className="sidebar-link">
                  Manage Calculations
                </NavLink>
              </li>
              <li className="sidebar-dropdown-item">
                <NavLink to="/manage-parameters" className="sidebar-link">
                  Manage Parameters
                </NavLink>
              </li>
            </ul>
          </li>
        )}
      </ul>
    </li>
  );
};

export default PagesPart;
