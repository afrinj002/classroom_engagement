// src/pages/ParentPage.jsx
import React from 'react';
import './PageStyles.css';

const studentName = 'Aarav Sharma';

const notifications = [
  'Attendance below 75% in Linear Algebra. Action: Submitted makeup assignments.',
  'Outstanding performance in Computer Programming.',
  'Low participation in Engineering Physics. Action: Joined remedial classes.',
  'Absent for 3 consecutive days. No action taken yet.',
  'Improved performance in Communication Skills.',
  'Frequent tardiness in Environmental Science. Action: Parent-Teacher meeting scheduled.',
];

const notificationTypes = ['warning', 'success', 'info', 'danger', 'success', 'info'];

const ParentPage = () => {
  return (
    <div className="page">
      <h1 className="page-title">👨‍👩‍👧 Parent Dashboard</h1>
      <h2 className="student-name">Child: {studentName}</h2>
      <div className="notifications">
        {notifications.map((msg, index) => (
          <div key={index} className={`notification ${notificationTypes[index]}`}>
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentPage;
