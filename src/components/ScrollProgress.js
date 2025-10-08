// src/components/ScrollProgress.js
import React, { useState, useEffect } from 'react';

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{
        width: `${scrollProgress}%`,
        position: 'fixed',
        top: 0,
        left: 0,
        height: '4px',
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        zIndex: 10000,
        transition: 'width 0.1s ease',
      }}
    />
  );
}

export default ScrollProgress;