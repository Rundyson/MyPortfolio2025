import React from "react";

const Footer = () => {
  return (
    <footer
      
      className=" flex flex-col center-all transition-colors duration-500 bg-lightGray dark:bg-matteBlack/20 text-black dark:text-white"
    >
      <ul className="socials flex md:gap-8 sm:gap-1 border-b md:pb-6 sm:pb-0 md:pt-3 sm:pt-0">
        <li className="tooltip" data-tooltip="Facebook">
          <a
            href="https://www.facebook.com/mgapinitik.niRandy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/facebook.png" alt="Facebook" />
          </a>
        </li>
        <li className="tooltip" data-tooltip="Instagram">
          <a
            href="https://www.instagram.com/angtunay.nasi_randy?igsh=MWJ2ZTUxNGdhZnJvNQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/instagram.png" alt="Instagram" />
          </a>
        </li>
        <li className="tooltip" data-tooltip="X">
          <a
            href="https://x.com/Rndysn?t=ESOGk-dCMecvFfOYaqT0LQ&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/twitter.png" alt="X" />
          </a>
        </li>
        <li className="tooltip" data-tooltip="LinkedIn">
          <a
            href="https://www.linkedin.com/in/randyson-baful-643b88347/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/linkedin.png" alt="LinkedIn" />
          </a>
        </li>
        <li className="tooltip" data-tooltip="Telegram">
          <a
            href="https://t.me/BakaSiRandyson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/telegram.png" alt="Telegram" />
          </a>
        </li>
        <li className="tooltip" data-tooltip="Gmail">
          <a
            href="mailto:randysonbaful@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/mail.png" alt="Gmail" />
          </a>
        </li>
        <li className="tooltip" data-tooltip="GitHub">
          <a
            href="https://github.com/Rundyson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/github.png" alt="GitHub" />
          </a>
        </li>
        <li className="tooltip" data-tooltip="Discord">
          <a
            href="https://discord.gg/mFeBW2yX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/discord.png" alt="Discord" />
          </a>
        </li>
      </ul>

      <div className="center-all flex flex-col mt-0">
        <img className="md:max-w-[200px] sm:max-w-[90px] drop-shadow-md" src="/images/my-logo.png" alt="Logo" />
        <p className="md:text-sm sm:text-[10px]">
          Copyright © 2025 RUNDZDEVZONE - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
