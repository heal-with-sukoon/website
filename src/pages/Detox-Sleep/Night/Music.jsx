import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AudioPlayer from './AudioPlayer';

function Audio() {
  const sources = [
    "/Meditation/test.mp3",
    "/Meditation/test.mp3",
    "/Meditation/test.mp3"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === sources.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sources.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col md:flex-row bg-[#0D1E44] pb-20 md:pb-0">
      <div>
        <div className="text-xl text-white font-bold m-4 md:m-14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam velit reprehenderit aliquam ab quia voluptatibus, expedita laborum quasi, atque fugit sunt cum libero, fuga consectetur nobis quis quod exercitationem!
        </div>
        <div className="text-xl ml-4 text-white mr-4 md:ml-14 md:mr-20 md:block hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam velit reprehenderit aliquam ab quia voluptatibus, expedita laborum quasi, atque fugit sunt cum libero, fuga consectetur nobis quis quod exercitationem!
        </div>

        <div className="lg:block hidden flex items-center justify-center ml-20 md:ml-52 scale-100 md:scale-125 mt-20">
          <img
            src="/Meditation/Backward2.svg"
            alt="back"
            onClick={handlePrev}
            className="cursor-pointer absolute -left-7"
          />

          <div className="relative w-80">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute w-full h-full"
              >
                <AudioPlayer />
              </motion.div>
            </AnimatePresence>
          </div>

          <img
            src="/Meditation/Forward2.svg"
            alt="next"
            onClick={handleNext}
            className="absolute cursor-pointer mx-[340px] -pt-20"
          />
        </div>
      </div>

      <div className="flex justify-center items-center my-10 md:mr-36 md:my-32 relative">
        <div className="relative">
          <img
            src="/Meditation/men.svg"
            alt="women"
            className="relative scale-90 md:scale-150"
          />
          <img
            src="/Meditation/daisy.svg"
            alt="flower"
            className="absolute right-32 -bottom-28 md:right-44 scale-50 md:scale-100"
          />
          <img
            src="/Meditation/moon.svg"
            alt="sun"
            className="absolute -right-10 md:-right-36 -top-14 scale-50 md:scale-[.6]"
          />
        </div>
      </div>
      <div className="lg:hidden block flex items-center justify-center md:ml-44 scale-100 md:scale-125 -mt-8 mb-4 md:mt-0">
          <img
            src="/Meditation/Backward2.svg"
            alt="back"
            onClick={handlePrev}
            className="cursor-pointer mx-3 pt-10"
          />

          <div className="relative w-80">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute w-full h-full"
              >
                <AudioPlayer />
              </motion.div>
            </AnimatePresence>
          </div>

          <img
            src="/Meditation/Forward2.svg"
            alt="next"
            onClick={handleNext}
            className="cursor-pointer mx-3 pt-10"
          />
        </div>
    </div>
  );
}

export default Audio;
