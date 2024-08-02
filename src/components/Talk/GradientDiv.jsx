import React, { useState } from "react";
import { motion } from "framer-motion";

const GradientDiv = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      <motion.div
        className="relative bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
        style={{
          width: 150,
          height: 150,
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        animate={{
          scale: hover ? 1.5 : 1,
        }}
        transition={{
          duration: 0.6, // Smooth transition duration
          ease: "easeOut",
        }}
      />
    </div>
  );
};

export default GradientDiv;
