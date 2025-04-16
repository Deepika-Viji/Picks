// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { DigiContext } from '../../context/DigiContext';
// import Footer from '../footer/Footer';
// import axios from 'axios';

// const LoginStatusContent = () => {
//   const { passwordVisible, togglePasswordVisibility } = useContext(DigiContext); // Toggle password visibility from context
//   const navigate = useNavigate(); // For redirecting the user after login

//   // Form state
//   const [loginIdentifier, setLoginIdentifier] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false); // Track success state for login
//   const [isLoading, setIsLoading] = useState(false); // Track loading state

//   // Handle input change to clear errors when user types
//   const handleInputChange = (e) => {
//     if (error) setError(''); // Clear error when user starts typing
//     if (success) setSuccess(false); // Clear success when user starts typing
//     const { name, value } = e.target;
//     if (name === 'loginIdentifier') {
//       setLoginIdentifier(value);
//     } else if (name === 'password') {
//       setPassword(value);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true); // Start loading when submitting

//     // Validate fields
//     if (!loginIdentifier || !password) {
//       setError('Please fill in all fields');
//       setIsLoading(false); // Stop loading if validation fails
//       return;
//     }

//     // Make the login API call
//     axios.post('http://localhost:5000/api/users/login', { loginIdentifier, password })
//       .then((result) => {
//         console.log(result); // Inspect response
//         if (result.data.token) {
//           localStorage.setItem('token', result.data.token);  // Save token in localStorage
//           setSuccess(true);  // Indicate successful login
//           navigate('/dashboard');  // Redirect to dashboard after login
//         }
//       })
//       .catch((err) => {
//         console.log(err); // Inspect error
//         const errorMessage = err.response?.data?.message || 'Invalid login credentials';
//         setError(errorMessage);
//       })
//       .finally(() => {
//         setIsLoading(false); // Stop loading after API call finishes
//       });
//   };

//   return (
//     <div className="main-content login-panel">
//       <div className="login-body">
//         <div className="top d-flex justify-content-between align-items-center">
//           <div className="logo">
//             <img src="src/assets/images/white-pixfix-logo.png" alt="Logo" />
//           </div>
//           <Link to="/"><i className="fa-duotone fa-house-chimney"></i></Link>
//         </div>

//         <div className="bottom">
//           <h3 className="panel-title">Sign in</h3>
//           <div className="login-status">
//             {success && (
//               <div className="msg-success alert alert-success py-2 px-3 rounded mb-20 fs-14">
//                 <i className="fa-regular fa-check me-2"></i> Login Successfully
//               </div>
//             )}
//             {error && (
//               <div className="msg-error alert alert-danger py-2 px-3 rounded mb-20 fs-14">
//                 <i className="fa-regular fa-circle-exclamation me-2"></i> {error}
//               </div>
//             )}
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div className="input-group mb-30">
//               <span className="input-group-text"><i className="fa-regular fa-user"></i></span>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="loginIdentifier"
//                 placeholder="Username or email address"
//                 value={loginIdentifier}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div className="input-group mb-20">
//               <span className="input-group-text"><i className="fa-regular fa-lock"></i></span>
//               <input
//                 type={passwordVisible ? 'text' : 'password'}
//                 className="form-control rounded-end"
//                 name="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={handleInputChange}
//               />
//               <span className="password-show" role="button" onClick={togglePasswordVisibility}>
//                 <i className={passwordVisible ? 'fa-duotone fa-eye-slash' : 'fa-duotone fa-eye'}></i>
//               </span>
//             </div>

//             <div className="d-flex justify-content-between mb-30">
//               <div className="form-check">
//                 <input className="form-check-input" type="checkbox" id="loginCheckbox" />
//                 <label className="form-check-label text-white">Remember Me</label>
//               </div>
//               <Link to="/resetPassword" className="text-white fs-14">Forgot Password?</Link>
//             </div>

//             <button
//               type="submit"
//               className={`btn btn-primary w-100 login-btn ${isLoading ? 'disabled' : ''}`}
//               disabled={isLoading} // Disable button during loading
//             >
//               {isLoading ? 'Signing in...' : 'Sign in'}
//             </button>
//           </form>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default LoginStatusContent;
