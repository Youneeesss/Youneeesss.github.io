import React from 'react';

function Project({ title, description, technologies, github }) {
  return (
    <div className="project">
      <p className="project-title">{title}</p>
      <p>{description}</p>
      <p>Technologies: {technologies}</p>
      <p>GitHub: <a className="link" href={github}>{github}</a></p>
    </div>
  );
}

export default Project;
