import { motion } from "motion/react";
import Underline from "./Common-about/Underline-about";
import Heading from "./Common-about/Heading-about";

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-16 pb-12">
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -20, 20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="
    absolute
    top-24 md:top-28 lg:top-30
    left-1/2
    -z-10
    h-48 w-48
    sm:h-56 sm:w-56
    md:h-64 md:w-64
    lg:h-72 lg:w-72
    -translate-x-1/2
    rounded-full
    bg-blue-500/10
    blur-3xl
  "
      />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <Heading>
          Inspired by great products.
          <br />
          Built with curiosity.
        </Heading>

        <Underline/>

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-gray-600 dark:text-gray-300"
        >
          Hi, I'm Kanav, a Full Stack Developer with a genuine curiosity for
          crafting modern web experiences. I believe great software is the
          result of continuous learning, deliberate problem solving, and
          attention to detail.
          <br />
          <br />
          Through this project, I set out to recreate the experience of a
          contemporary trading platform while applying production-grade
          development practices, scalable architecture, and a strong focus on
          usability and performance.
        </motion.p>
      </div>
    </div>
  );
}
