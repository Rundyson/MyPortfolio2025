import React from 'react'

const socials = [
  {
    name: 'Randyson D. Baful',
    url: 'https://www.facebook.com/mgapinitik.niRandy',
    icon: '/images/facebook.png',
  },
  {
    name: 'Randyson De Guia',
    url: 'https://www.instagram.com/angtunay.nasi_randy?igsh=MWJ2ZTUxNGdhZnJvNQ==',
    icon: '/images/instagram.png',
  },
  {
    name: 'Rndysn',
    url: 'https://x.com/Rndysn?t=ESOGk-dCMecvFfOYaqT0LQ&s=09',
    icon: '/images/twitter.png',
  },
  {
    name: 'Randyson Baful',
    url: 'https://www.linkedin.com/in/randyson-baful-643b88347/',
    icon: '/images/linkedin.png',
  },
  {
    name: 'BakaSiRandyson',
    url: 'https://t.me/BakaSiRandyson',
    icon: '/images/telegram.png',
  },
  {
    name: 'randysonbaful@gmail.com',
    url: 'mailto:randysonbaful@gmail.com',
    icon: '/images/mail.png',
  },
  {
    name: 'Rundyson',
    url: 'https://github.com/Rundyson',
    icon: '/images/github.png',
  },
  {
    name: 'Randy',
    url: 'https://discord.gg/mFeBW2yX',
    icon: '/images/discord.png',
  },
]

const SideSocials = () => {
  return (
    <>
    
    <div
      className="fixed top-1/4 left-3 transform -translate-y-1/2 flex flex-col gap-5 z-50 sm:hidden md:block"
      data-aos="fade-right"
    >
  
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center w-12 hover:w-[280px] transition-all duration-300 overflow-hidden mb-2 rounded-r-md
                     bg-lightGray dark:bg-matteBlack/20 text-black dark:text-white hover:bg-gray-300/40 dark:hover:bg-matteBlack/70"
        >
          <img
            src={social.icon}
            alt={social.name}
            className="w-8 h-8 mx-1 flex-shrink-0 hover:animate-pulse"
          />
          <span className="whitespace-nowrap ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {social.name}
          </span>
        </a>
      ))}
    </div>
    </>
  )
}

export default SideSocials
