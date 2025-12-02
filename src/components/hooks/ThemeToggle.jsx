import React from "react";
import { Moon, SunMedium } from "lucide-react";
import useTheme from "./useTheme";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2 rounded-full bg-gray-200 dark:bg-matteBlack 
                 transition-all duration-300 hover:scale-110 overflow-hidden"
    >
      {/* Sliding animation wrapper */}
      <span
        className={`absolute inset-0 flex items-center justify-center
                    transition-all duration-500
                    ${isDark ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}`}
      >
        <SunMedium className="w-6 h-6 text-yellow-400 transition-all duration-500" />
      </span>

      <span
        className={`absolute inset-0 flex items-center justify-center
                    transition-all duration-500
                    ${!isDark ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
      >
        <Moon className="w-6 h-6 text-matteBlack transition-all duration-500" />
      </span>
    </button>
  );
};

export default ThemeToggle;
