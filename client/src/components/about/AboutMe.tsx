import { motion } from "motion/react";

export default function AboutMe() {
  return (
    <>
      <motion.h1
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        Invest in everything
      </motion.h1>
    </>
  );
}
