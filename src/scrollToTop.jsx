import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
   
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    handleScroll(); 

    return ()=>{} ;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
