import React from "react";
import { Folder } from "lucide-react";

const services = [
  {
    name: "Frontend Development",
    description: "Building responsive websites using React, Tailwind CSS, HTML, CSS, and JavaScript.",
  },

  {
    name: "UI/UX Design",
    description: "Designing clean interfaces and experiences with Figma and Canva.",
  },

];

const Services = ({id}) => {
  return (
    <section id={id} className="py-12 bg-lightGray dark:bg-matteBlack/20 transition-colors duration-500 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative w-64 h-32 overflow-hidden rounded-lg bg-white/20 dark:bg-matteBlack/40
                       cursor-pointer transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
          >
    
            <div
              className="flex items-center gap-2 p-4 z-10 relative
                         transition-opacity duration-500 group-hover:opacity-0"
            >
              <Folder className="w-6 h-6 text-white" />
              <h3 className="text-lg font-semibold">{service.name}</h3>
            </div>

            <div
              className="absolute bottom-0 left-0 w-full h-full bg-white/30 dark:bg-matteBlack/50 p-4
                         transform translate-y-full group-hover:translate-y-0
                         transition-transform duration-500 ease-in-out shadow-inner rounded-b-lg flex items-center"
            >
              <p className="text-sm text-white">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
