import { useState, useEffect, type ReactNode } from "react";
import { ThemeContext } from "./themeContext";

const getInitialTheme = (): "light" | "dark" => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  
    localStorage.setItem("theme", theme);
  }, [theme]);
  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
} 
