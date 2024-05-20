import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Education from './Pages/Education';
import Work from './Pages/Work';
import Projects from './Pages/Projects';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          const id = section.getAttribute('id');
          document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Education />
      <Work />
      <Projects />
    </div>
  );
}

export default App;
