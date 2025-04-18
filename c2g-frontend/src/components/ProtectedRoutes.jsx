import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
// This component checks if the user is logged in by checking the local storage. If the user is logged in, it renders the children components; otherwise, it redirects to the login page. It uses React Router's Navigate component for redirection.
// The component is exported as the default export, allowing it to be used in other parts of the application.