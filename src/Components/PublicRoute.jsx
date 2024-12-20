// PublicRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Show loader while checking auth state
  }

  return user ? <Navigate to="/" /> : children;
};

export default PublicRoute;
