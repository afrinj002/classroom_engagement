// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import StudentPage from './pages/StudentPage';
import CourseDetail from './pages/CourseDetail';
import TeacherPage from './pages/TeacherPage';
import TeacherCourseDetail from './pages/TeacherCourseDetail';
import './App.css';
import ParentPage from './pages/ParentPage';

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/student">Student</Link>
          <Link to="/teacher">Teacher</Link>
          <Link to="/parent">Parent</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/course/:courseId" element={<CourseDetail />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/teacher-course/:courseId" element={<TeacherCourseDetail />} />
          <Route path="/parent" element={<ParentPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
