import React from "react";
import { motion } from "framer-motion";
import { BsArrowDownCircle } from 'react-icons/bs'; // Import the arrow icon

const AnimatedTourIcon = ({ text, className }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const scrollToSection2 = () => {
    // Use JavaScript to scroll to the target section (section2)
    const section2 = document.getElementById("section2");
    if (section2) {
      section2.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "1.2rem" }}
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
          {word === "arrowIcon" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 6.5 }} // Delay for "arrowIcon"
              className={className}
            >
              <button
                className="mt-3 text-teal-600 text-2xl bounce"
                onClick={scrollToSection2} // Scroll to section2 on button click
              >
                <BsArrowDownCircle />
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 7.5 }} // Delay for "Explore" text
              className={className}
              dangerouslySetInnerHTML={{ __html: word }}
            />
          )}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTourIcon;
