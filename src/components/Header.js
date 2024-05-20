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
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#education" className="nav-link">Education</a>
        <a href="#work" className="nav-link">Work</a>
        <a href="#projects" className="nav-link">Projects</a>
      </nav>
    </header>
  );
}

export default Header;
