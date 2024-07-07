import React from 'react';
import './Header.css';
import mylogo from '../Pages/Image/YO.webp'; 

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={mylogo} alt="Logo" />
        <span>Younes Oumhamed</span>
      </div>
      <nav>
        <a href={process.env.PUBLIC_URL + "#home"} className="nav-link">Home</a>
        <a href={process.env.PUBLIC_URL + "#about"} className="nav-link">About</a>
        <a href={process.env.PUBLIC_URL + "#skills"} className="nav-link">Skills</a>
        <a href={process.env.PUBLIC_URL + "#education"} className="nav-link">Education</a>
        <a href={process.env.PUBLIC_URL + "#work"} className="nav-link">Work</a>
        <a href={process.env.PUBLIC_URL + "#projects"} className="nav-link">Projects</a>
      </nav>
    </header>
  );
}

export default Header;
