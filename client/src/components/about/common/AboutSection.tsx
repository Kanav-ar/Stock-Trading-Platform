import type { ReactNode } from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

interface AboutSectionLayoutProps {
  title: ReactNode;
  children: ReactNode;
  glow?: ReactNode;
  className?: string;
}
export default function AboutSection({
  title,
  children,
  glow,
  className,
}: AboutSectionLayoutProps) {
  return (
    <>
      <div className={`relative overflow-hidden pt-16 ${className}`}>
        {glow}
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Heading>{title}</Heading>
          <Paragraph>{children}</Paragraph>
        </div>
      </div>
    </>
  );
}
