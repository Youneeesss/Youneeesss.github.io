import React from 'react';
import './EducationCard.css';

function EducationCard({ image, degree, institution, duration, status, coursework }) {
  return (
    <div className="education-card">
      <div className="education-image-container">
        <img src={image} alt={institution} className="education-image" />
      </div>
      <div className="education-content">
        <h3 className="education-degree">{degree}</h3>
        <p className="education-institution">{institution}</p>
        <p className="education-duration">{duration} | <span className="education-status">{status}</span></p>
        <p className="education-coursework"><strong>Relevant Coursework:</strong> {coursework.join(', ')}</p>
      </div>
    </div>
  );
}

export default EducationCard;
