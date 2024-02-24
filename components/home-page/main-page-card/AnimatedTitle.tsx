"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  reveal: {
    opacity: 1,
  },
};

const AnimatedTitle = () => {
  const text =
    "Komplexní péče o tělo i duši pod jednou střechou v srdci hor... ";

  const splitText = text.split("");

  return (
    <>
      {splitText.map((letter, index) => (
        <motion.span
          variants={variants}
          initial="hidden"
          animate="reveal"
          transition={{ delay: 0.03 * index }}
          key={index}
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
};
export default AnimatedTitle;
