import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login




/*

import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from '../ErrorBoundary';  
import axios from "axios";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password
  const [role, setRole] = useState("Admin"); // Default role set to Admin

  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://hospital-management-backend-3.onrender.com/api/v1/user/login",
        { email, password, confirmPassword, role }, // Send all fields
        {
          withCredentials: true, // Ensure credentials are sent with the request
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(res.data.message);
      setIsAuthenticated(true);

      // Save the token for 7 days
      const token = res.data.token;
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 7);
      localStorage.setItem("authToken", JSON.stringify({ token, expirationDate }));

      localStorage.setItem("isAuthenticated", "true"); // Store authentication status
      navigateTo("/"); // Redirect to home after login
      setEmail("");
      setPassword("");
      setConfirmPassword(""); // Reset confirm password
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <section className="admin-login-container">
      <img src="https://renovahospitals.com/images/Renova-Logo.png" alt="Renova Hospital Logo" className="admin-login-logo" />
      <h1 className="admin-login-title">WELCOME TO Renova Hospital</h1>
      <p className="admin-login-subtitle">Only Admins Are Allowed To Access These Resources!</p>
      <form onSubmit={handleLogin} className="admin-login-form">
        <input
          type="email" 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="admin-login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="admin-login-input"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="admin-login-input"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)} 
          className="admin-login-input"
        >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <div className="admin-login-button-container">
          <button type="submit" className="admin-login-button">Login</button>
        </div>
      </form>
    </section>
  );
};

export default Login;


*/