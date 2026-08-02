import type { ReactNode } from "react";

export default function StatInfo({
  title,
  description,
}: {
  title: string;
  description: ReactNode;
}) {
  return (
    <div className="">
      <h1 className="text-2xl font-semibold mb-4">{title}</h1>
      <p className="leading-loose">{description}</p>
    </div>
  );
}
