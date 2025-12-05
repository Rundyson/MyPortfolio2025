import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../FrontEndPartials/Header'
import Footer from '../FrontEndPartials/Footer'
import SideSocials from '../../hooks/SideSocials'
import AboutMe from './AboutMe'
import Home from './Home'
import Contacts from './Contacts'
import Services from './Services'
import BackgroundVideo from '../../hooks/BackgroundVideo'

const HomePage = () => {
  const [overlayColor, setOverlayColor] = useState("rgba(255,255,255,0.2)") // initial light mode overlay

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out', once: false, mirror: true })
  }, [])

  return (
    <>
      <BackgroundVideo overlayColor={overlayColor} />
      <SideSocials />

      {/* Pass setOverlayColor to Header */}
      <Header setOverlay={setOverlayColor} />

      <Home id="home" />
      <AboutMe id="about" />
      <Services id="services" />
      <Contacts id="contact" />
      <Footer />
    </>
  )
}

export default HomePage
