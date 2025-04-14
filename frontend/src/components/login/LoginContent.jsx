import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DigiContext } from '../../context/DigiContext';
import Swal from 'sweetalert2';
import Footer from '../footer/Footer';
import '../../assets/css/login.css';

const LoginContent = () => {
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { passwordVisible, togglePasswordVisibility } = useContext(DigiContext);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Skip verification and just redirect if token exists
      navigate('/products');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!loginIdentifier || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please fill in all fields',
      });
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        loginIdentifier, 
        password 
      });
      
      if (response.data.token) {
        // Store the token and set axios defaults
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userName', response.data.username);
        localStorage.setItem('userRole', response.data.role);
        
        // Add this line to set axios default headers
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        
        navigate('/products');
      }
    } catch (err) {
      console.error('Login error:', err);
      const errorMessage = err.response?.data?.message || 'Login failed. Please try again.';
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: errorMessage,
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
  };

  return (
    <div className="login-content main-content login-panel">
      <div className="login-body">
        <div className="d-flex justify-content-between align-items-center">
          <div></div>
          <div className="mx-auto">
            <img src="src/assets/images/riversilica-logo.png" alt="Logo" height="170" />
          </div>
          <div></div>
        </div>
        <div className="bottom">
          <h3 className="panel-title">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-15">
              <span className="input-group-text">
                <i className="fa-regular fa-user"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username or email address"
                name="loginIdentifier"
                value={loginIdentifier}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group mb-15">
              <span className="input-group-text">
                <i className="fa-regular fa-lock"></i>
              </span>
              <input
                type={passwordVisible ? 'text' : 'password'}
                className="form-control rounded-end"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
              <Link
                role="button"
                className="password-show"
                onClick={togglePasswordVisibility}
              >
                <i className={passwordVisible ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'}></i>
              </Link>
            </div>
            <div className="d-flex justify-content-between mb-30">
              <div className="form-check"></div>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 login-btn"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginContent;