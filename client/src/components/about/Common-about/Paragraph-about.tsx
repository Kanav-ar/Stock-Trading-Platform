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
      variants={{
        hidden: { opacity: 0, y: 25 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.p>
  );
}