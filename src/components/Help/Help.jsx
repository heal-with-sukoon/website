import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function Help() {
  const cards = [
    { img: "/Help/me.svg", text: "Me" },
    { img: "/Help/friend.svg", text: "Friend" },
    { img: "/Help/family.svg", text: "Family Member" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
      <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start mb-4 lg:mb-0">
        <img
          src="/Brain/Brain.svg"
          alt="brain"
          className="p-4 lg:p-12 max-w-[90%] lg:max-w-none"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-start">
          <div className="text-4xl sm:text-4xl lg:text-6xl font-betofin text-center lg:text-left lg:pl-16">
            <div className="p-1">Who do you</div>
            <div className="p-1">think needs</div>
            <div className="p-1">help?</div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-around">
        <div className="relative w-64 sm:w-80 mb-16 sm:mb-32 lg:mb-0 lg:ml-8">
          <div className="relative h-80 sm:h-96 flex items-center justify-center">
            <AnimatePresence initial={false}>
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  className={`absolute inset-0 w-full h-full`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    scale: index === currentIndex ? 1 : 0.8,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link to={card.link} className="relative w-full h-full block">
                    <img
                      src={card.img}
                      className="w-full object-cover  rounded-box mt-0 sm:mt-0 lg:-mt-4 scale-100 sm:scale-110 lg:scale-110"
                      alt="Carousel item"
                    />
                    <div className="w-full absolute bottom-0 bg-[#E4FFFD] p-2 rounded-b text-center opacity-70">
                      <span className="text-black text-lg sm:text-xl font-extrabold">
                        {card.text}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 sm:-translate-x-full lg:-translate-x-[120%] z-10 focus:outline-none"
            >
              <img
                src="/Help/Barrow.svg"
                alt="Previous"
                className="w-10 sm:w-12 md:w-14 lg:w-16 cursor-pointer pointer-events-none"
              />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 sm:translate-x-full lg:translate-x-[120%] z-10 focus:outline-none"
            >
              <img
                src="/Help/Farrow.svg"
                alt="Next"
                className="w-10 sm:w-12 md:w-14 lg:w-16 cursor-pointer pointer-events-none"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;