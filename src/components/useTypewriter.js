import { useState, useEffect } from 'react';

function useTypewriter(phrases, speed = 150, pause = 2000) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayText(prev => prev.slice(0, -1));
          setCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setIndex(prev => (prev + 1) % phrases.length);
        }
      } else {
        if (charIndex < phrases[index].length) {
          setDisplayText(prev => prev + phrases[index][charIndex]);
          setCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pause);
        }
      }
    };

    const typingSpeed = isDeleting ? speed / 2 : speed;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index, phrases, speed, pause]);

  return displayText;
}

export default useTypewriter;
