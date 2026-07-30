import { motion } from "motion/react";
type UnderlineProps = {
  width?: string;
  color?: string;
};
export default function Underline({width = "90px",color = "blue"}:UnderlineProps) {
  return (
    <>
     <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: width }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className={`mx-auto mt-7 h-1 rounded-full bg-${color}-600`}
        />
    </>
  );
}