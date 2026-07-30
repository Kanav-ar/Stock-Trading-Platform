import { motion } from "motion/react";
import Underline from "./Common-about/Underline-about";
import Heading from "./Common-about/Heading-about";
import Paragraph from "./Common-about/Paragraph-about";

export default function Story() {
  return (
    <div className="relative overflow-hidden px-6 pt-16">
      <div
        className="
    absolute
    left-1/2
    -translate-x-1/2
    h-48 w-64
    sm:h-56 sm:w-72
    md:h-64 md:w-80
    lg:h-72 lg:w-[25rem]
    rounded-full
    bg-blue-500/10
    blur-3xl
    animate-pulse
  "
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        whileHover={{
          y: -4,
        }}
        className="relative mx-auto max-w-4xl"
      >
        <Heading>My Journey</Heading>

        <Underline />

        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.25,
                delayChildren: 0.4,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 space-y-7 text-center text-lg leading-9 text-gray-600 dark:text-gray-300"
        >
          <Paragraph>
            I started my journey with a curiosity for programming and gradually
            discovered my passion for building modern web applications.
          </Paragraph>
          <Paragraph>
            Since then, I've been learning modern technologies, solving Data
            Structures & Algorithms problems, and creating projects that push me
            to write clean, scalable, and maintainable code.
          </Paragraph>
          <Paragraph>
            This project reflects that journey. It's more than a UI clone, it's
            my attempt to build a production style application while learning
            industry best practices.
          </Paragraph>
        </motion.div>
      </motion.div>
    </div>
  );
}
