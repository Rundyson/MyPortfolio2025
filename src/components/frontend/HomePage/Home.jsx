import { ArrowRightCircle } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({ id }) => {
  return (
    <section
      id={id}
      className="  transition-colors duration-500 text-black dark:text-white md:pt-24 sm:pt-28"
    >
      <div className="container flex gap-5">
        <div className="left w-1/2 center-all">
          <img
            data-aos="fade-right"
            data-aos-duration="2000"
            className=" md:mt-12 sm:mt-14 md:max-w-[800px] sm:max-w-[300px]"
            src="/images/me-1-no-bg.png"
            alt=""
          />
        </div>
        <div className="right w-1/2 center-all">
          <div className="details  flex flex-col items-start">
            <img
              data-aos="fade-left"
              className=" md:max-w-[400px] md:block sm:hidden drop-shadow-md"
              src="/images/my-logo.png"
              alt=""
            />
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              className="font-normal italic  md:text-3xl sm:text-xs text-white"
            >
              I’m Randyson De Guia Baful, building digital spaces where ideas
              come alive.
            </p>
            <Link to="projects" className="btn btn-call mt-5 font-bold">
              <p className="md:p-1 sm:p1">See my works </p>
              <ArrowRightCircle className="animate-ping md:block sm:hidden" />
            </Link>
          </div>
        </div>
      </div>
      <div className="sm:hidden md:block"></div>
    </section>
  )
}

export default Home