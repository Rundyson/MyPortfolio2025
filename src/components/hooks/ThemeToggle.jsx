import React from "react";
import useTheme from "./useTheme";
import { SunMedium, Moon } from "lucide-react";

const ThemeToggle = ({ setOverlay }) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const handleToggle = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);

  
    if (setOverlay) {
      setOverlay(
        newTheme === "dark" ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.2)"
      );
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="relative w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-500 bg-gray-300 dark:bg-gray-700"
    >
     
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-500 ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      ></span>

     
      {!isDark && (
        <SunMedium className="absolute left-1.5 w-5 h-5 text-yellow-400 transition-opacity duration-500" />
      )}

 
      {isDark && (
        <Moon className="absolute right-1.5 w-5 h-5 text-black transition-opacity duration-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
