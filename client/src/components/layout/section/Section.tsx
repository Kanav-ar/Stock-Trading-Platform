import type { ReactNode } from "react";
import Container from "../container/Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`py-16 text-gray-700 dark:text-gray-100 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}