import { useEffect, useState } from 'react';

const useShowMoreMoviesCount = () => {
  const [showMoreCount, setShowMoreCount] = useState(5);

  const bindings = {
    768: 2,
    1280: 3,
    1570: 4,
    Infinity: 5
  };

  useEffect(() => {
    let resizeTimeout;
    const handleResize = (event) => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const count = Object.entries(bindings).find(([screenSize]) => screenSize > event.target.innerWidth);
        setShowMoreCount(count[1]);
      }, 50);
    };
    window.addEventListener('resize', handleResize);
    window.dispatchEvent(new Event('resize'));
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return showMoreCount;
};

export default useShowMoreMoviesCount;
