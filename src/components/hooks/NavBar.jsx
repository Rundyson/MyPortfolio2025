import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'About Me', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]

const NavBar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isDesktopOpen, setIsDesktopOpen] = useState(false)

  return (
    <div className="relative flex justify-end items-center flex-1">
      {/* Desktop Menu */}
      <div
        className="hidden md:flex relative"
        onMouseEnter={() => setIsDesktopOpen(true)}
        onMouseLeave={() => setIsDesktopOpen(false)}
      >
        <div className="cursor-pointer font-medium px-4 py-2 rounded-md hover:bg-gray-300/60 dark:hover:bg-gray-400/40 transition-colors text-black dark:text-white">
          <Menu />
        </div>

        <ul
          className={`absolute top-full right-0 mt-2 w-44 rounded-md overflow-hidden shadow-lg transform transition-all duration-500 origin-top
            bg-lightGray dark:bg-matteBlack
            ${isDesktopOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}
          `}
        >
          {menuItems.map((item, index) => (
            <li
              key={item.name}
              className="px-4 py-2 cursor-pointer backdrop-blur-md bg-white/40 hover:bg-gray-300/80 dark:hover:bg-gray-300/40 transition-colors duration-300 text-black dark:text-white"
              style={{
                transitionDelay: isDesktopOpen ? `${index * 100}ms` : '0ms',
              }}
              onClick={() => {
                const el = document.querySelector(item.href)
                if (el) el.scrollIntoView({ behavior: 'smooth' })
                setIsDesktopOpen(false)
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Toggle */}
      <div
        className="cursor-pointer md:hidden ml-4 text-black dark:text-white z-50"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute top-full right-0 md:hidden flex flex-col font-medium transform transition-all duration-300 origin-top z-40 overflow-hidden
          bg-lightGray dark:bg-matteBlack
          ${isMobileOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}
        `}
      >
        {menuItems.map((item, index) => (
          <li
            key={item.name}
            className="py-4 px-6 border-b border-gray-300 dark:border-gray-700 cursor-pointer hover:bg-gray-300/40 dark:hover:bg-matteBlack/70 transition-colors duration-300 text-black dark:text-white"
            style={{
              transitionDelay: isMobileOpen ? `${index * 100}ms` : '0ms',
            }}
            onClick={() => {
              const el = document.querySelector(item.href)
              if (el) el.scrollIntoView({ behavior: 'smooth' })
              setIsMobileOpen(false)
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar
