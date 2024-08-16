import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiQwiklabs } from "react-icons/si";

function SocialMedia() {
  return (
    <div className="social-media">
      <a href="https://www.linkedin.com/in/youmhamed/" className="social-icon" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Youneeesss/" className="social-icon" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.cloudskillsboost.google/public_profiles/b1c21eac-9a9f-4edf-b534-4dc6f3fb9bc1" className="social-icon" target="_blank" rel="noopener noreferrer">
        <SiQwiklabs />
      </a>
    </div>
  );
}

export default SocialMedia;
