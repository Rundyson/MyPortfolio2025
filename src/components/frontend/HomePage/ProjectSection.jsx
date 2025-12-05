import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import FigmaCard from './FigmaCard'
import { figma, projects } from '../../hooks/projectsList'
import Header from '../FrontEndPartials/Header'
import ThemeToggle from '../../hooks/ThemeToggle'
import { Link } from 'react-router-dom'
import Footer from '../FrontEndPartials/Footer'
import SideSocials from '../../hooks/SideSocials'
import { ArrowLeftFromLine } from 'lucide-react'
import BackgroundVideo from '../../hooks/BackgroundVideo'

const ProjectsSection = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY >= 100)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <SideSocials />
<BackgroundVideo/>
      <header
      data-aos="fade-down"
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    >
      <div
        className={`
          mx-auto grid grid-cols-3 justify-between center-all items-center px-4 transition-all duration-300
          ${isScrolled ? "h-16 max-w-[1200px] rounded-xl bg-white/40 dark:bg-gray-400/40 shadow-md backdrop-blur-md" : "h-24 max-w-full rounded-none"}
        `}
      >
       <div className="">
        <Link to ="/" className='dark:text-white hover:animate-pulse '><ArrowLeftFromLine /></Link>
       </div>
        <div className="flex justify-center w-full md:w-auto sm:justify-start">
          <img className="md:max-w-[150px] drop-shadow-md sm:max-w-[90px]" src="/images/my-logo.png" alt="Logo" />
        </div>

        
        <div className="ml-auto flex items-center gap-4">
          <ThemeToggle />
        
        </div>
      </div>
    </header>

      <div className="md:px-10 sm:px-4 mt-28 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
        {figma.map((project, index) => (
          <FigmaCard key={index} {...project} />
        ))}
      </div>

      <Footer />
    </>
  )
}

export default ProjectsSection
