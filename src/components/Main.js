import React from 'react';
import SocialMedia from './SocialMedia';

function Main() {
  return (
    <main className="main">
      <div className="intro">
        <h1>Hi There, I'm <span className="highlight">Your Name</span></h1>
        <p>I am into <span className="highlight">Backend Development</span></p>
        <button className="btn">About Me</button>
      </div>
      <div className="avatar">
        <img src="" alt="Avatar" />
      </div>
      <SocialMedia />
    </main>
  );
}

export default Main;
