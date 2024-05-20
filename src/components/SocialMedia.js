import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function SocialMedia() {
  return (
    <div className="social-media">
      <a href="https://www.linkedin.com/in/youmhamed/" className="social-icon" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Youneeesss/" className="social-icon" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  );
}

export default SocialMedia;
