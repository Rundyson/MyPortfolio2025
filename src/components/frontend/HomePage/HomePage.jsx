import React, { useEffect } from 'react'
import Header from '../FrontEndPartials/Header'
import Footer from '../FrontEndPartials/Footer'
import SideSocials from '../../hooks/SideSocials'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ThemeToggle from '../../hooks/ThemeToggle'
import AboutMe from './AboutMe'
import Home from './Home'

import Contacts from './Contacts'
import Services from './Services'

const HomePage = () => {
  window.addEventListener('scroll', () => AOS.refreshHard())
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out', once: false, mirror: true }) // Animation duration in ms
  }, [])

  return (
    <>
      <Header />
      <SideSocials />
      <Home id="home" />
      <AboutMe id="about" />
      <Services id="services" />
      <Contacts id="contact" />
      <Footer />
    </>
  )
}

export default HomePage
