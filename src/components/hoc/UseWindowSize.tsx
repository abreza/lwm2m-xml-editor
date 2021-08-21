import { useState, useEffect } from 'react';

const getWindowDimensions = (breakPointWidth: number) => {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    isMobile: width <= breakPointWidth,
    width,
    height,
  };
};

const UseWindowDimensions = (breakPointWidth: number = 600) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(breakPointWidth)
  );

  useEffect(() => {
    function handleResize() {
      const windowSize = getWindowDimensions(breakPointWidth);
      if (
        windowSize.width !== windowDimensions.width ||
        windowSize.height !== windowDimensions.height
      ) {
        setWindowDimensions(windowSize);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakPointWidth, windowDimensions]);

  return windowDimensions;
};

export default UseWindowDimensions;
