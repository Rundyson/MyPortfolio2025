import React, { useState, useEffect } from 'react'
import NavBar from '../../hooks/NavBar'
import ThemeToggle from '../../hooks/ThemeToggle'

const Header = ({ setOverlay }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      data-aos="fade-down"
      className="sticky top-0 w-full z-50 transition-all duration-300 "
    >
      <div
        className={`
          mx-auto flex items-center px-4 transition-all duration-300
          max-w-[1200px]
          ${
            isScrolled
              ? 'h-16 rounded-xl bg-white/20 dark:bg-matteBlack/50 shadow-md backdrop-blur-md'
              : 'h-24'
          }
        `}
      >
     
        <div className="flex justify-center w-full sm:w-auto sm:justify-start">
          <img
            src="/images/my-logo.png"
            alt="Logo"
            className="max-w-[90px] sm:max-w-[150px] drop-shadow-md"
          />
        </div>

        <div className="ml-auto flex items-center gap-4">
          <ThemeToggle setOverlay={setOverlay} />
          <NavBar />
        </div>
      </div>
    </header>
  )
}

export default Header
