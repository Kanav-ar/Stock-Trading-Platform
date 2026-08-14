import { NavLink } from "react-router";
import { Moon, Sun } from "lucide-react";
import kiteLogoImg from "../assets/kitelogo.png";
import useTheme from "../context/Theme/themeContext";

const menuItems = [
  "Dashboard",
  "Orders",
  "Holdings",
  "Positions",
  "Funds",
  "Apps",
];

export default function Menu() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex h-full basis-[68%] items-center justify-between px-5 py-[10px]">
      <img src={kiteLogoImg} alt="logo" className="w-[50px]" />

      <div className="px-4">
        <div className="flex flex-1 items-center justify-evenly">
          <ul className="list-none">
            {menuItems.map((item) => (
              <li key={item} className="mr-[30px] inline-block">
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `text-[0.8rem] font-normal transition-colors duration-150 ${
                      isActive
                        ? "text-[#f56834]"
                        : "text-[#464646] dark:text-white hover:text-[#f56834]"
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          <hr className="h-[30px] border-l border-[#f3f2f2]" />

          <div className="ml-5 flex cursor-pointer items-center justify-evenly group">
            <div className="mr-2 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[rgb(252,229,252)] text-[0.7rem] font-normal text-[rgb(221,139,221)]">
              ZU
            </div>

            <p className="text-[0.8rem] font-light text-[#464646] dark:text-white transition-colors group-hover:text-[#df5b2b]">
              USERID
            </p>
          </div>
          <div className="flex items-center md:space-x-8 lg:space-x-10 space-x-4 lg:px-12 px-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}
