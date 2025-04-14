import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  // Extract token verification to a separate function
  const verifyToken = async (token) => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/verify', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data.user);
      setUserId(response.data.user._id);
      setAuthToken(token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return true;
    } catch (error) {
      console.error('Token verification failed:', error);
      logout();
      return false;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      verifyToken(token).finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (token, userData) => {
    localStorage.setItem('token', token);
    await verifyToken(token); // Wait for verification to complete
  };

  const logout = () => {
    // Clear all localStorage items
    localStorage.clear();
    
    // Clear session storage too
    sessionStorage.clear();
    
    // Reset all state
    setAuthToken(null);
    setUser(null);
    setUserId(null);
    
    // Remove axios auth header
    delete axios.defaults.headers.common['Authorization'];
    
    // Notify other tabs about the logout
    window.dispatchEvent(new Event('storage'));
  };

  const value = {
    authToken,
    user,
    userId,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};