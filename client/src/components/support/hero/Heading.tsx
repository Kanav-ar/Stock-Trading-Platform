import type React from "react";

export default function Heading({children}:{children: React.ReactNode}) {
  return (
    <>
    <h1 className="text-4xl font-semibold my-2">{children}</h1>
    </>
  );
}