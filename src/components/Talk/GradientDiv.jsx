import React, { useState } from "react";
import { motion } from "framer-motion";

const GradientDiv = () => {
  const [isHovered, setIsHovered] = useState(false);

  const blobVariants = {
    initial: {
      borderRadius: "50%",
      scale: 1,
      x: 0,
      y: 0,
    },
    hover: {
      borderRadius: ["50%", "40%", "60%", "30%", "50%"],
      scale: [1, 1.2, 1.4, 1.6, 1.8],
      x: [0, -20, 20, -30, 30],
      y: [0, -20, 20, -30, 30],
      transition: {
        duration: 2, // Longer duration for a more fluid effect
        ease: "easeInOut",
        repeat: Infinity, // Keep the animation going while hovering
        repeatType: "mirror",
      },
    },
  };

  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      <motion.div
        className="bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
        style={{
          width: 150,
          height: 150,
        }}
        variants={blobVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};

export default GradientDiv;
