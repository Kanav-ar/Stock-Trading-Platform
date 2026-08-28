import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Signup", path: "/signup" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Pricing", path: "/pricing" },
    { name: "Support", path: "/support" },
  ];

  return (
    <div className="relative lg:hidden">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-gray-800 dark:text-white flex items-center cursor-pointer p-2 rounded-full hover:bg-gray-950/20 dark:hover:bg-white/20">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-13 w-52 rounded-xl border border-gray-200 bg-white p-3 shadow-lg dark:border-gray-700 dark:bg-gray-900">
          <div className="flex flex-col">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 transition ${
                    isActive
                      ? "bg-blue-50 font-semibold text-[#387ed1] dark:bg-gray-800"
                      : "text-gray-800 hover:bg-[#387ed1]/30 dark:text-gray-200 dark:hover:bg-[#387ed1]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
