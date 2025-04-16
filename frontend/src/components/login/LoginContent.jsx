import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DigiContext } from '../../context/DigiContext';
import Swal from 'sweetalert2';
import Footer from '../footer/Footer';
import '../../assets/css/login.css';
import api from '../../config/api';

const LoginContent = () => {
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { passwordVisible, togglePasswordVisibility } = useContext(DigiContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      verifyTokenAndRedirect(token);
    }
  }, [navigate]);

  const verifyTokenAndRedirect = async (token) => {
    try {
      const response = await axios.get(api.endpoints.auth.verify, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.data.valid) {  // Changed from response.data.success
        navigate('/products');
      } else {
        localStorage.removeItem('token');
      }
    } catch (error) {
      localStorage.removeItem('token');
      console.error('Token verification failed:', error);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!loginIdentifier.trim()) {
      newErrors.loginIdentifier = 'Username or email is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
  
    setLoading(true);
    setErrors({});
  
    try {
      // Create the request data object
      const requestData = {
        loginIdentifier: loginIdentifier.trim(),
        password: password.trim()
      };
  
      // Debug the request payload
      console.log('Sending login request with:', requestData);
  
      const response = await axios.post(
        `${api.baseUrl}${api.endpoints.auth.login}`,
        requestData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userName', response.data.user.username);
        localStorage.setItem('userRole', response.data.user.role);
        
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        navigate('/products', { replace: true });
      }
    } catch (err) {
      console.error('Login error:', err);
      console.log('Error response:', err.response?.data); // Add this for debugging
      
      let errorMessage = 'Login failed. Please try again.';
      
      if (err.response) {
        if (err.response.status === 400) {
          errorMessage = err.response.data.message || 'Invalid request format';
        } else if (err.response.status === 401) {
          errorMessage = 'Invalid credentials';
        } else if (err.response.data?.message) {
          errorMessage = err.response.data.message;
        }
      }
  
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: errorMessage,
        timer: 3000,
        showConfirmButton: false
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'loginIdentifier') {
      setLoginIdentifier(value);
    } else if (name === 'password') {
      setPassword(value);
    }
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="login-content main-content login-panel">
      <div className="login-body">
        <div className="d-flex justify-content-between align-items-center">
          <div></div>
          <div className="mx-auto">
            <img 
              src="src/assets/images/riversilica-logo.png" 
              alt="Logo" 
              height="170" 
              className="logo-img"
            />
          </div>
          <div></div>
        </div>
        <div className="bottom">
          <h3 className="panel-title">Login</h3>
          <form onSubmit={handleSubmit} noValidate>
            <div className="input-group mb-15">
              <span className="input-group-text">
                <i className="fa-regular fa-user"></i>
              </span>
              <input
                type="text"
                className={`form-control ${errors.loginIdentifier ? 'is-invalid' : ''}`}
                placeholder="Username or email address"
                name="loginIdentifier"
                value={loginIdentifier}
                onChange={handleInputChange}
                disabled={loading}
              />
              {errors.loginIdentifier && (
                <div className="invalid-feedback">{errors.loginIdentifier}</div>
              )}
            </div>
            <div className="input-group mb-15">
              <span className="input-group-text">
                <i className="fa-regular fa-lock"></i>
              </span>
              <input
                type={passwordVisible ? 'text' : 'password'}
                className={`form-control rounded-end ${errors.password ? 'is-invalid' : ''}`}
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
                disabled={loading}
              />
              <button
                type="button"
                className="password-show"
                onClick={togglePasswordVisibility}
                tabIndex="-1"
              >
                <i className={passwordVisible ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'}></i>
              </button>
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 login-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginContent;