import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Card.css';

function Card({ image, title, details, githubLink }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-details">{details}</p>
        <a href={githubLink} className="card-button" target="_blank" rel="noopener noreferrer">
          <FaGithub /> View on GitHub
        </a>
      </div>
    </div>
  );
}

export default Card;
