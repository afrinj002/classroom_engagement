// src/pages/Home.jsx
import React from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import './PageStyles.css'; // Assuming you have a CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="intro-section">
        <h1>📊 Welcome to EduConnect</h1>
        <p>
          EduConnect is an intelligent classroom engagement system designed for Students, Teachers, and Parents. 
          Stay connected with real-time attendance, course progress, and engagement analytics.
        </p>
      </div>
      <div className="auth-section">
        <div className="auth-box">
          <LoginPage />
        </div>
        <div className="auth-box">
          <SignupPage />
        </div>
      </div>
    </div>
  );
};

export default Home;
