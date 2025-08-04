import React, { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number; 
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, speed = 20, className }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <div className={className}>{displayedText}</div>;
};

export default TypewriterText;
