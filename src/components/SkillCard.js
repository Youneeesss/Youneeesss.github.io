import React from 'react';
import './SkillCard.css';

function SkillCard({ icon: Icon, name }) {
  return (
    <div className="skill-card">
      <i className={`${Icon} skill-icon`} style={{paddingBottom: '10%'}}></i>
      <div className="skill-name">{name}</div>
    </div>
  );
}

export default SkillCard;
