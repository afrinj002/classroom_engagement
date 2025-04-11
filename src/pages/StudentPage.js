import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

const courses = [
  { id: 'cs101', name: 'Computer Programming' },
  { id: 'math201', name: 'Linear Algebra' },
  { id: 'phy111', name: 'Engineering Physics' },
  { id: 'mech210', name: 'Mechanics of Solids' },
  { id: 'ee102', name: 'Basic Electrical Engineering' },
  { id: 'env203', name: 'Environmental Science' },
  { id: 'hum100', name: 'Communication Skills' },
];

const history = [
  "Prof. A took action in Computer Programming",
  "Prof. B discussed Linear Algebra",
  "Prof. C scheduled a meet for Physics",
  "Prof. D suggested revision in Mechanics",
  "Prof. A monitored progress in Electrical",
  "Prof. B reviewed performance in Environment",
  "Prof. C had meeting on Communication Skills",
  "Prof. D initiated action in Computer Programming",
  "Prof. A followed up on Linear Algebra",
  "Prof. B guided on Physics",
  "Prof. C took session in Mechanics",
  "Prof. D shared report in Electrical",
  "Prof. A arranged extra class in Environment",
  "Prof. B tracked issues in Communication",
  "Prof. C mentored in Computer Programming",
  "Prof. D counseled in Linear Algebra",
  "Prof. A intervened in Physics",
  "Prof. B discussed with parents in Mechanics",
  "Prof. C emailed summary in Electrical",
  "Prof. D advised improvement in Environment"
];

const StudentPage = () => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="page">
      <h1 className="page-title">📚 Enrolled Courses</h1>
      <div className="grid">
        {courses.map(course => (
          <Link key={course.id} to={`/course/${course.id}`} className="card">
            {course.name}
          </Link>
        ))}
      </div>
      <button className="history-btn" onClick={() => setShowHistory(!showHistory)}>
        📜 View Action History (20)
      </button>

      {showHistory && (
        <div className="history-box">
          <h2>📖 Action History</h2>
          <ul>
            {history.map((item, index) => (
              <li key={index} className="history-item">{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StudentPage;