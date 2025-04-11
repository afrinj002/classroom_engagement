// classroom-engagement-app/src/pages/TeacherPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

const teacherCourses = [
  { id: 'cs301', name: 'Data Structures' },
  { id: 'cs401', name: 'Operating Systems' },
  { id: 'cs501', name: 'Database Systems' },
  { id: 'cs601', name: 'Machine Learning' },
];

const TeacherPage = () => {
  return (
    <div className="page">
      <h1 className="page-title">📘 Courses You Teach</h1>
      <div className="grid">
        {teacherCourses.map(course => (
          <Link key={course.id} to={`/teacher-course/${course.id}`} className="card">
            {course.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeacherPage;
