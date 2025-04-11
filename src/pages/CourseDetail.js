import React from 'react';
import { useParams } from 'react-router-dom';
import './PageStyles.css';

const courseContent = `This course covers lectures, assignments, and exams. Topics include Week 1 - Intro, Week 2 - Basics, Week 3 - Advanced Topics.`;
const attendancePercent = 72;

const CourseDetail = () => {
  const { courseId } = useParams();

  return (
    <div className="page">
      <h1 className="page-title">Course: {courseId}</h1>
      <div className="card">📖 <strong>Course Content:</strong><br />{courseContent}</div>
      <div className={`card ${attendancePercent >= 75 ? 'safe' : 'poor'}`}>
        📅 <strong>Attendance:</strong> {attendancePercent}% <span>({attendancePercent >= 75 ? 'Safe' : 'Poor'})</span>
      </div>
      <div className="chat-section">
        <h2>🤖 Course Chatbot</h2>
        <div className="chat-box">
          <p><strong>Student:</strong> What was taught in the last class?</p>
          <p><strong>Bot:</strong> Recap of Week 3 - Loops and Conditions.</p>
          <p><strong>Student:</strong> My attendance is 72%. How many classes to reach 75%?</p>
          <p><strong>Bot:</strong> You need to attend 3 more classes regularly to reach 75%.</p>
        </div>
        <input type="text" placeholder="Type your question..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default CourseDetail;