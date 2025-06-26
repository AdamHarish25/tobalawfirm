// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../CORE/AuthProvider'; // <-- Use our new hook

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  // If there's a user, show the page. Otherwise, go to login.
  return currentUser ? children : <Navigate to="/Login" />;
}

export default ProtectedRoute;