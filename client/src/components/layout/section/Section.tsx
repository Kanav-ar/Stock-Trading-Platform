import type { ReactNode } from "react";
import { motion } from "motion/react";
import Container from "../container/Container";
import { fadeUp } from "../../../animations/fadeup";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={`py-16 text-gray-700 dark:text-gray-100 ${className}`}
    >
      <Container>{children}</Container>
    </motion.section>
  );
}
