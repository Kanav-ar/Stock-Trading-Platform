import { motion } from "motion/react";

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Paragraph({
  children,
  className = "",
}: ParagraphProps) {
  return (
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
      className={`mx-auto mt-10 max-w-4xl text-lg leading-8 text-center ${className}`}
    >
      {children}
    </motion.p>
  );
}
