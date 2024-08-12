import React, { useState, useEffect } from 'react';
import "./Breathe.css";

function Breathe() {
  const [text, setText] = useState('Exhale');
 
  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => (prev === 'Inhale' ? 'Exhale' : 'Inhale'));
    }, 6500); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='relative scale-[.54] -ml-[69px] -mt-44 -mb-24 sm:mt-0 sm:ml-10 sm:scale-90 '>
      <div className="circle2">
        {text}
      </div>
      <div className="wrapper">
        <div className="circle blue"></div>
        <div className="circle green"></div>
        <div className="circle green"></div>
        <div className="circle green"></div>
        <div className="circle blue"></div>
        <div className="circle blue"></div>
        <div className="circle blue"></div>
        <div className="circle blue"></div>
      </div>
    </div>
  );
}

export default Breathe;
