import React from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = ({ text, className, delayChildren, style  }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delayChildren * i }, 
    }),
  };
  

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 70,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
      
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "5px", marginBottom: "2px" }}
          key={index}
        >
            <span className={className} dangerouslySetInnerHTML={{ __html: word }} />
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;