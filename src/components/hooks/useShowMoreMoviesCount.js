import { useEffect, useState } from 'react';
import { SCREEN_WIDTH_TO_MOVIES_IN_ROW_COUNT } from '../../utils/constants';

const useShowMoreMoviesCount = () => {
  const [showMoreCount, setShowMoreCount] = useState(5);

  useEffect(() => {
    let resizeTimeout;
    const handleResize = (event) => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const count = Object.entries(SCREEN_WIDTH_TO_MOVIES_IN_ROW_COUNT).find(([screenSize]) => screenSize > event.target.innerWidth);
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
