// SkillsCards.jsx
import React from "react";

const skills = [
  {
    name: "Frontend Development",
    description: "React, Tailwind CSS, HTML, CSS, JavaScript",
  },
  {
    name: "Design & UI",
    description: "Figma, Canva, modern UX/UI",
  },
];

const SkillsCards = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" className="flex flex-wrap gap-4 mt-2 justify-center ">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="group relative w-64 h-20 overflow-hidden rounded-lg bg-white/20 dark:bg-matteBlack/40 cursor-pointer
                     transition-all duration-300 hover:h-40"
        >
          <div className="p-4">
            <h3 className="text-lg font-bold">{skill.name}</h3>
            <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {skill.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsCards;
