// src/pages/LoginPage.jsx
import React from 'react';
import './PageStyles.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="auth-card">
      <h2>Login</h2>
      <input type="text" placeholder="Email or Username" />
      <input type="password" placeholder="Password" />
      <button className="btn">Login</button>
      <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
    </div>
  );
};

export default LoginPage;
