import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import '../../assets/css/Form.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const UserForm = () => {
  const { userId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    tokenNumber: '',  // Changed from phoneNumber to tokenNumber
    role: 'User',
    password: ''
  });

  const [originalEmail, setOriginalEmail] = useState('');
  const [originalUsername, setOriginalUsername] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false); // State for duplicate check

  // Handle token number change
  const handleTokenNumberChange = (e) => {
    const value = e.target.value;

    // Allow only alphanumeric characters and limit to 10 characters
    if (/[^a-zA-Z0-9]/.test(value) || value.length > 10) {
      return; // Ignore input if not alphanumeric or exceeds 10 characters
    }
    setFormData(prevData => ({
      ...prevData,
      tokenNumber: value
    }));
  };

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const userIdFromState = location.state ? location.state.userId : userId;

  useEffect(() => {
    if (userIdFromState) {
      setLoading(true);
      axios.get(`http://localhost:5000/api/users/${userIdFromState}`)
        .then(response => {
          setFormData({
            username: response.data.username,
            email: response.data.email,
            tokenNumber: response.data.tokenNumber,  // Use tokenNumber from backend data
            role: response.data.role,
            password: '' // Reset password on edit
          });
          setOriginalEmail(response.data.email);
          setOriginalUsername(response.data.username);
          setLoading(false);
        })
        .catch(err => {
          setError('Failed to fetch user data');
          setLoading(false);
          Swal.fire('Error', 'Failed to fetch user data', 'error');
        });
    }
  }, [userIdFromState]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const checkDuplicate = async () => {
    if (formData.username !== originalUsername || formData.email !== originalEmail) {
      try {
        const response = await axios.get('http://localhost:5000/api/users/check', {
          params: {
            username: formData.username,
            email: formData.email,
          },
        });
        if (response.data.exists) {
          setIsDuplicate(true);  // Set the state if a duplicate is found
          return true;
        }
        setIsDuplicate(false);  // Reset the state if no duplicate
        return false;
      } catch (error) {
        console.error('Error checking duplicates:', error);
        return false;
      }
    }
    return false; // No duplicate if email/username hasn't changed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate required fields
    if (!formData.username) {
      Swal.fire('Username Required', 'Please enter a username.', 'error');
      setLoading(false);
      return;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!userIdFromState && !formData.email) {
      Swal.fire('Email Required', 'Please enter an email.', 'error');
      setLoading(false);
      return;
    } else if (formData.email && !emailPattern.test(formData.email)) {
      Swal.fire('Invalid Email', 'Email must contain "@" and a valid domain such as ".com".', 'error');
      setLoading(false);
      return;
    }

    // Validate token number
    if (!formData.tokenNumber || formData.tokenNumber.length !== 10) {
      Swal.fire('Invalid Token Number', 'Token number must be exactly 10 alphanumeric characters.', 'error');
      setLoading(false);
      return;
    }

    // Validate role
    if (!formData.role) {
      Swal.fire('Role Required', 'Please select a role.', 'error');
      setLoading(false);
      return;
    }

    // Validate password
    if (!userIdFromState && !formData.password) {
      Swal.fire('Password Required', 'Please enter a password.', 'error');
      setLoading(false);
      return;
    }

    // Check for duplicates
    const isDuplicateUser = await checkDuplicate();
    if (isDuplicateUser) {
      Swal.fire('Duplicate Entry', 'Username or Email already exists.', 'error');
      setLoading(false);
      return;
    }

    try {
      const result = await Swal.fire({
        title: userIdFromState ? 'Update User?' : 'Create User?',
        text: userIdFromState ? 'Do you want to update this user?' : 'Do you want to create this user?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: userIdFromState ? 'Yes, update it!' : 'Yes, create it!',
        cancelButtonText: 'No, cancel!',
      });

      if (result.isConfirmed) {
        if (userIdFromState) {
          const updatedData = { ...formData };
          if (!updatedData.password) delete updatedData.password;

          await axios.put(`http://localhost:5000/api/users/${userIdFromState}`, updatedData);
          Swal.fire('Updated!', 'User has been updated.', 'success');
        } else {
          await axios.post('http://localhost:5000/api/users', formData);
          Swal.fire('Created!', 'User has been created.', 'success');
        }

        setTimeout(() => {
          navigate('/allusers');
        }, 2000);
      }
    } catch (err) {
      Swal.fire('Error', 'Failed to save user', 'error');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="user-form-container">
      <h2 className="heading">{userIdFromState ? 'Edit User' : 'Create New User'}</h2>

      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Token Number:</label>
          <input
            type="text"
            name="tokenNumber"
            value={formData.tokenNumber}
            onChange={handleTokenNumberChange} // Use the new handler here
            placeholder="Enter 10 alphanumeric characters"
            maxLength="10"
          />
        </div>

        <div className="form-group">
          <label>Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={{ color: 'black' }}
          >
            <option value="SuperAdmin">SuperAdmin</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>

        <div className="form-group">
          <label>Password:</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder={userIdFromState ? 'Leave blank to keep current password' : 'Enter password'}
            />
            <span
              className="password-toggle-icon"
              onClick={() => setShowPassword(prev => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            {userIdFromState ? 'Save Changes' : 'Create User'}
          </button>
          <button type="button" className="cancel-btn" onClick={() => navigate('/allusers')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
