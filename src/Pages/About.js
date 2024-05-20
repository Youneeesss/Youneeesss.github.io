import React from 'react';
import './About.css';
import profileImage from './Image/IMG_0923.jpg'; // Update with the correct path to your image

function About() {
  return (
    <div id="about" className="section about">
      <h1 className="about-title"><span role="img" aria-label="user">👤</span> About <span className="highlight">Me</span></h1>
      <div className="about-content">
        <div className="about-image-container">
          <img src={profileImage} alt="Profile" className="about-image" />
        </div>
        <div className="about-text">
          <h2>I'm Younes Oumhamed</h2>
          <h3>Data Scientist & Software Engineer</h3>
          <p>
            I am a dedicated data scientist and software engineer currently pursuing a double degree with Centrale Nantes and the KTH Royal Institute of Technology.
            Passionate about leveraging technology to solve real-world problems, I have a strong foundation in data science, machine learning, and software engineering.
          </p>
          <p>
            Fluent in English, French, Amazigh, and Arabic with basic knowledge of Swedish, I thrive in collaborative, innovative environments.
          </p>
          <p>
            <strong>Email 1:</strong> <a href="mailto:oumhamed@kth.se">oumhamed@kth.se</a><br />
          </p>
          <a href="path/to/your/resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
    </div>
  );
}

export default About;
