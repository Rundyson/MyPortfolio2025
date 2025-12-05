import React from "react";
import { Moon, SunMedium } from "lucide-react";
import useTheme from "./useTheme";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-16 h-8 flex items-center rounded-full p-1 cursor-pointer
                 transition-colors duration-300
                 bg-gray-300 dark:bg-gray-700"
    >
      {/* Slider */}
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-black
                    shadow-md transform transition-transform duration-300
                    ${isDark ? "translate-x-8" : "translate-x-0"}`}
      >
        {/* Icon inside slider */}
        {isDark ? (
          <Moon className="w-4 h-4 text-yellow-400 m-1" />
        ) : (
          <SunMedium className="w-4 h-4 text-yellow-400 m-1" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
