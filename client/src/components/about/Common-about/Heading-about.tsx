import { motion } from "motion/react";
import type React from "react";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  children,
  className = "",
}: HeadingProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-center text-5xl font-bold dark:text-white leading-16 ${className}`}
    >
      {children}
    </motion.h1>
  );
}
