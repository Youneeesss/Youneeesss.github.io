import React from "react";
import "./WorkCard.css";

function WorkCard({
  logo,
  role,
  company,
  duration,
  description,
  technologies,
}) {
  return (
    <div className="work-card">
      <div className="work-logo-container">
        <img src={logo} alt={`${company} logo`} className="work-logo" />
      </div>
      <div className="work-content">
        <h2 className="work-role">{role}</h2>
        <h3 className="work-company">{company}</h3>
        <p className="work-duration">{duration}</p>
        <p className="work-description-title">{description.title}</p>
        <ul className="work-description-points">
          {description.points.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="work-description-result">
          <strong>{description.result}</strong>
        </p>

        <div className="work-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="work-tech">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
