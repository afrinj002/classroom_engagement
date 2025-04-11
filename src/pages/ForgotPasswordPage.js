// src/pages/ForgotPasswordPage.jsx
import React from 'react';
import './AuthStyles.css';

const ForgotPasswordPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Forgot Password</h2>
        <input type="email" placeholder="Enter your email" />
        <button className="btn">Reset Password</button>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
