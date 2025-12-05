import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../FrontEndPartials/Header'
import Footer from '../FrontEndPartials/Footer'
import SideSocials from '../../hooks/SideSocials'
import AboutMe from './AboutMe'
import Home from './Home'
import Contacts from './Contacts'
import Services from './Services'
import BackgroundVideo from '../../hooks/BackgroundVideo' // make sure path is correct

const HomePage = () => {
  // Refresh AOS on scroll
  window.addEventListener('scroll', () => AOS.refreshHard())

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out', once: false, mirror: true })
  }, [])

  return (
<>
      <SideSocials />
      <Header />
      <Home id="home" />
      <AboutMe id="about" />
      <Services id="services" />
      <Contacts id="contact" />
      <Footer />
</>
  )
}

export default HomePage
