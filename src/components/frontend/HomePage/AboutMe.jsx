import React from 'react'
import Slider from '../../hooks/Slider'
import SkillsCards from '../../hooks/SkillsCards'

const AboutMe = ({ id }) => {
  return (
    <section
      id={id}
      className=" bg-lightGray dark:bg-matteBlack/20 transition-colors duration-500 text-white"
    >
      <div className="seperate md:flex md:flex-row sm:flex sm:flex-col-reverse gap-5 container ">
        <div className="left md:w-1/2 sm:w-full md:border-r-2 sm:border-r-0 sm:border-t-2 md:border-t-0 md:pr-7 sm:px-6 flex flex-col gap-10">
          <div
            data-aos="fade-right"
            className="card md:mt-0 sm:mt-5 center-all flex flex-col bg-white/20 dark:bg-matteBlack/40 rounded-lg shadow-sm p-4"
          >
            <h4 className="text-lg font-semibold mb-3 text-white">
              Diploma and Certificates
            </h4>
            <img
              className="md:max-w-[400px] sm:max-w-[300px] border border-gray-300 dark:border-gray-500 rounded-md shadow-sm"
              src="/images/Diploma.jpg"
              alt="Diploma"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="card bg-white/20 dark:bg-matteBlack/40 rounded-lg shadow-sm p-4"
          >
            <Slider
              images={['/images/Internship.jpg', '/images/EdukCircle.jpg']}
              className="border border-gray-300  rounded-md shadow-sm sm:max-w-[200px] "
            />
          </div>
        </div>

        <div className="right md:w-1/2 sm:w-full center-all flex flex-col gap-5">
          <div
            data-aos="fade-up"
            className="bg-white/20 dark:bg-matteBlack/40  rounded-lg shadow-sm p-6 flex flex-col items-center gap-5 border border-gray-300 dark:border-gray-500 w-full"
          >
            <h2 className="text-2xl font-semibold text-white">About me</h2>

            <img
              className="md:max-w-[300px] sm:max-w-[200px]  rounded-full border border-gray-200 dark:border-gray-400 shadow-sm"
              src="/images/graduate.jpg"
              alt="Graduate"
            />

            <p className="italic text-center text-sm md:text-base sm:text-justify sm:text-xs">
              I’m Randyson D. Baful, a web developer with practical experience
              from an internship at Frontline Business Inc. and work at
              McDonald’s. These roles strengthened my teamwork, communication,
              and technical skills. I’m passionate about continuous learning,
              adapting quickly, and delivering effective solutions in dynamic
              environments.
            </p>
          </div>

          <h2 className="mt-4 mb-0 text-2xl font-semibold">Skills</h2>
          <SkillsCards />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
