import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({ children, allowedRoles }) => {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token'); // Get the token from localStorage

    if (!token) {
      setIsAuthorized(false); // If no token, user is unauthorized
      return;
    }

    // Decode JWT to extract the user role and check if token is expired
    const decodedToken = decodeJwt(token);

    if (!decodedToken) {
      localStorage.removeItem('token'); // Clear invalid token
      setIsAuthorized(false); // Unauthorized
      return;
    }

    console.log("Decoded Role:", decodedToken.role);
    
    if (!allowedRoles.includes(decodedToken.role) || decodedToken.exp * 1000 < Date.now()) {
      localStorage.removeItem('token'); // Remove expired or invalid token
      setIsAuthorized(false); // Unauthorized role or expired token
    } else {
      setIsAuthorized(true); // Authorized role and token is valid
    }
  }, [allowedRoles]);

  // Decode JWT function
  const decodeJwt = (token) => {
    try {
      const base64Url = token.split('.')[1];
      if (!base64Url) return null; // Ensure the token has three parts
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );

      return JSON.parse(jsonPayload); // Return decoded token object
    } catch (e) {
      console.error("Invalid token", e); // Log any decoding errors
      return null; // Return null for invalid token
    }
  };

  if (isAuthorized === null) {
    return <div>Loading...</div>; // Optional loading state while checking authorization
  }

  if (isAuthorized) {
    return children; // Authorized, render children
  }

  return <Navigate to="/unauthorized" />; // Unauthorized, redirect to the unauthorized page
};

export default AuthRoute;
