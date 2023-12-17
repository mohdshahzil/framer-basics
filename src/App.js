import React from "react";
import { motion, useScroll } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();
  const list = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const item = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <>
      <motion.path
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{
          pathLength: scrollYProgress,
        }}
        className="stroke-black stroke-2 fill-none fixed top-0 left-1/2 transform -translate-x-1/2"
      />
      <motion.ul initial="hidden" animate="visible" variants={list}>
        <motion.li variants={item}>Item 1</motion.li>
        <motion.li variants={item}>Item 2</motion.li>
        <motion.li variants={item}>Item 3</motion.li>
      </motion.ul>
      <div className="bg-amber-300 h-[1096px] text-6xl "> cars</div>
      <motion.div
        className="text-6xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        I am from the scroll trigger
      </motion.div>
      <motion.div
        className="text-6xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        I am from the scroll trigger
      </motion.div>
      <motion.div
        className="text-6xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        I am from the scroll trigger
      </motion.div>
      <motion.div
        className="text-6xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        I am from the scroll trigger
      </motion.div>
      <motion.div
        whileHover={{
          borderRadius: "50%",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "blue",
        }}
      />
      <svg width="100" height="100" viewBox="0 0 100 100">
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1 }}
        />
      </svg>
    </>
  );
};

export default App;
