/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      
      colors: {
        matteBlack: "#1a1a1a",
        lightGray: "#1111", // soft gray that makes white logos visible
      },
      fontFamily: {
        dmmono: ['"DM Mono"', "monospace"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
      },
       screens: {
      
      sm: "300px",
    
      md: "768px",
      
      lg: "1366px",
 
    },
    },
        screens: {
      'sm': '480px',   
      'md': '768px',   
      'lg': '1024px',  
    },
  },
  plugins: [],
};
