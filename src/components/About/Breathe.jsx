import React, { useEffect } from "react";
import { motion, useAnimation, useCycle } from "framer-motion";


const Breathe = () => {
  const circleWidth = window.innerWidth / 2;
  const controls = useAnimation();
  const [cycle, setCycle] = useCycle(0, 1);

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({
          opacity: 1,
          transition: { duration: 0.3 },
        });
        await controls.start({
          x: circleWidth / 6,
          y: circleWidth / 6,
          transition: { duration: 4 },
        });
        await controls.start({
          opacity: 0,
          transition: { duration: 0.3 },
        });
        await controls.start({
          x: 0,
          y: 0,
          transition: { duration: 4 },
        });
        setCycle();
      }
    };
    sequence();
  }, [controls, cycle, circleWidth, setCycle]);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white">
      <motion.div
        animate={controls}
        className="absolute flex items-center justify-center"
        style={{ width: circleWidth, height: circleWidth }}
      >
        <p className="text-lg font-semibold">Inhale</p>
      </motion.div>
      <motion.div
        animate={controls}
        className="absolute flex items-center justify-center"
        style={{ width: circleWidth, height: circleWidth, opacity: 0 }}
      >
        <p className="text-lg font-semibold">Exhale</p>
      </motion.div>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
        <motion.div
          key={item}
          animate={{
            rotateZ: [item * 45, item * 45 + 180],
            x: [0, circleWidth / 6],
            y: [0, circleWidth / 6],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 4,
            ease: "linear",
          }}
          className="absolute bg-purple-600 opacity-10"
          style={{
            width: circleWidth,
            height: circleWidth,
            borderRadius: "50%",
          }}
        ></motion.div>
      ))}
    </div>
  );
};

export default Breathe;
