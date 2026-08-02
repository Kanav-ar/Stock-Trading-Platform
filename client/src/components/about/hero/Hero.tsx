import AboutSection from "../common/AboutSection";
import { motion } from "motion/react";
export default function Hero() {
  return (
    <AboutSection
      title={
        <>
          Inspired by great products.
          <br />
          Built with curiosity.
        </>
      }
      glow={
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
          className="absolute top-24 md:top-28 lg:top-30 left-1/2 -z-10 h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
        />
      }
    >
      Hi, I'm Kanav, a Computer Science student and Full Stack Developer who
      enjoys understanding how thoughtfully designed software comes together.
      <br />
      <br />
      This project isn't just about recreating Zerodha's interface, it's about
      exploring the engineering decisions behind it, writing maintainable code,
      and creating an experience that feels polished from both a developer's and
      a user's perspective.
    </AboutSection>
  );
}
