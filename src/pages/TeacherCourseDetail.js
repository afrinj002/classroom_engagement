import React from 'react';
import './PageStyles.css';

const lowPerformers = [
  'Ravi Kumar',
  'Ayesha Khan',
  'Meena Patel',
  'John Paul',
  'Wei Lin'
];

const otherStudents = [
  'Aditya Singh',
  'Sara Ali',
  'Nikhil Rao',
  'Priya Shah',
  'Zhang Yong'
];

const TeacherCourseDetail = () => {
  return (
    <div className="page">
      <h1 className="page-title">🎓 Course Monitoring</h1>

      <h2>⚠️ Low Performing Students</h2>
      <ul className="list">
        {lowPerformers.map((student, index) => (
          <li key={index} className="card">
            {student}
            <button className="action-btn">Take Action</button>
            <div className="card">
              <strong>Notification sent.</strong><br />
              Conversation started. Google Meet link: <a href="#">https://meet.google.com/abc-defg-hij</a>
            </div>
          </li>
        ))}
      </ul>

      <h2>📋 Other Students</h2>
      <ul className="list">
        {otherStudents.map((student, index) => (
          <li key={index} className="card">{student}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherCourseDetail;