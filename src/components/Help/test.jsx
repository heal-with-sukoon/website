import React, { useState } from "react";
import { motion } from "framer-motion";

export const Box = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    { img: "/Help/me.svg", text: "Me" },
    { img: "/Help/friend.svg", text: "Friend" },
    { img: "/Help/family.svg", text: "Family Member" },
  ];

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-[554px] h-[569px] relative flex items-center justify-center">
      <button
        className="absolute left-0 bg-gray-200 p-2 rounded-full"
        onClick={prevCard}
      >
        Prev
      </button>
      <div className="relative w-[554px] h-[569px]">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`absolute w-[379px] h-[522px] rounded-[50px] bg-cover bg-center`}
            style={{
              backgroundImage: `url(${card.img})`,
              transform: `rotate(${index === 0 ? 8.01 : index === 1 ? 5.42 : -5.78}deg)`,
              zIndex: currentIndex === index ? 1 : 0,
              left: index === 0 ? '140px' : index === 1 ? '96px' : '25px',
              top: index === 0 ? '6px' : index === 1 ? '18px' : '6px',
            }}
            animate={{ opacity: currentIndex === index ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute w-full h-full flex items-center justify-center">
              <div className=" relative bg-[#e3fffd99] p-4 rounded text-center text-black text-2xl font-extrabold">
                {card.text}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <button
        className="absolute right-0 bg-gray-200 p-2 rounded-full"
        onClick={nextCard}
      >
        Next
      </button>
    </div>
  );
};
