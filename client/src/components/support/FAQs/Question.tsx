import type React from "react";

type FAQ = {
  question: React.ReactNode;
  answer: React.ReactNode;
};

export default function Question({ question, answer }: FAQ) {
  return (
    <>
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-8  rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50">
          <span>{question}</span>

          <svg
            aria-hidden="true"
            className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <div className="p-4 bg-gray-100 px-8 py-4">
          <p className="text-gray-700">{answer}</p>
        </div>
      </details>
    </>
  );
}
