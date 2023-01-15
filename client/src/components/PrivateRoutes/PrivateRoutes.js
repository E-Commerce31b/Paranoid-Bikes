import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.js";

export default function PrivateRoutes({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
}
