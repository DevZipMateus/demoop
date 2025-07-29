
import React, { useEffect, useState } from 'react';

export const useParallax = () => {
  // Add safety check for React hooks availability
  if (!React || typeof React.useState !== 'function') {
    console.warn('React hooks not available, returning default parallax values');
    return {
      scrollY: 0,
      getParallaxStyle: () => ({ transform: 'translateY(0px)' }),
    };
  }

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener with throttling for performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  const getParallaxStyle = (speed: number = 0.5) => ({
    transform: `translateY(${scrollY * speed}px)`,
  });

  return {
    scrollY,
    getParallaxStyle,
  };
};
