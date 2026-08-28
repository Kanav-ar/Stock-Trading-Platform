import { Moon, Sun } from "lucide-react";
import useTheme from "../../context/Theme/themeContext";

export default function ThemeBtn() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="p-2 rounded-full cursor-pointer hover:bg-gray-950/20 dark:text-white dark:hover:bg-white/20"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun strokeWidth={2.5} />
      ) : (
        <Moon strokeWidth={2.5} />
      )}
    </button>
  );
}
