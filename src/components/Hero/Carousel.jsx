import React from 'react'
import { useState , useEffect } from 'react';

const images = [
  '/news/ms.jpg',
  '/news/ms.jpg',
  '/news/ms.jpg',
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel