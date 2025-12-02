import React, { useState, useEffect } from "react";
import NavBar from "../../hooks/NavBar";
import ThemeToggle from "../../hooks/ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY >= 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      data-aos="fade-down"
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    >
      <div
        className={`
          mx-auto flex items-center px-4 transition-all duration-300
          ${isScrolled ? "h-16 max-w-[1200px] rounded-xl bg-white/40 dark:bg-gray-400/40 shadow-md backdrop-blur-md" : "h-24 max-w-full rounded-none"}
        `}
      >
       
        <div className="flex justify-center w-full md:w-auto sm:justify-start">
          <img className="md:max-w-[150px] drop-shadow-md sm:max-w-[90px]" src="/images/my-logo.png" alt="Logo" />
        </div>

        
        <div className="ml-auto flex items-center gap-4">
          <ThemeToggle />
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
