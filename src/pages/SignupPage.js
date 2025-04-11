// src/pages/SignupPage.jsx
import React from 'react';
import './PageStyles.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div className="auth-card">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="btn">Sign Up</button>
    </div>
  );
};

export default SignupPage;
