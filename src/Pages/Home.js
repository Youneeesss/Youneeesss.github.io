import React from 'react';
import SocialMedia from '../components/SocialMedia';
import useTypewriter from '../components/useTypewriter';
import Avatar from './Image/avatar.png';

const phrases = [
  'Data Science',
  'Machine Learning',
  'Data Engineering',
  'Software Engineering'
];

function Home() {
  const displayText = useTypewriter(phrases);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="section home">
      <div className="avatar">
        <img src={Avatar} alt="Avatar" />
      </div>
      <div className="intro">
        <h1>Hi There, I'm <span className="highlight">Younes Oumhamed</span></h1>
        <p>I am into <span className="highlight">{displayText}</span></p>
        <button className="btn" onClick={() => scrollToSection('about')}>About Me</button>
      </div>
      <SocialMedia />
    </div>
  );
}

export default Home;
