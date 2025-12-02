import React from 'react'
import { ExternalLink } from 'lucide-react'

const FigmaCard = ({ Ftitle, Fdescription, Ftech, FdemoLink, Fimage }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg">
      <img
        src={Fimage}
        alt={Ftitle}
        className="w-full object-cover transition-transform duration-500 hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
        <h2 className="text-xl font-semibold md:block sm:hidden">{Ftitle}</h2>
        <p className="text-sm opacity-90 mt-1 md:block sm:hidden">{Fdescription}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {Ftech.map((item, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-white/20 border border-white/30"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-5">
          <a
            href={FdemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium bg-white/20 text-white"
          >
            <ExternalLink size={18} /> Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default FigmaCard
