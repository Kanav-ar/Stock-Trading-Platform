import { type ReactNode } from "react";
import { Link } from "react-router";
import { BiLeftArrowAlt } from "react-icons/bi";
import ThemeBtn from "../common/ThemeBtn";

interface AuthCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function AuthCard({
  title,
  description,
  children,
}: AuthCardProps) {
  return (
    <div className="w-md sm:w-lg md:w-xl rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-[#0d1522]">
      <div className="flex px-6 pt-6 justify-between">
        <Link to={"/"}>
          <BiLeftArrowAlt className="text-3xl hover:cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105   dark:text-white" />
        </Link>
        <ThemeBtn />
      </div>
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
}
