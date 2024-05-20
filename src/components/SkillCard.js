import React from 'react';
import './SkillCard.css';

function SkillCard({ icon: Icon, name }) {
  return (
    <div className="skill-card">
      <Icon className="skill-icon" />
      <div className="skill-name">{name}</div>
    </div>
  );
}

export default SkillCard;
