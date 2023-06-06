const { error } = require("console");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin: {
        default: "0 auto",
      },
      backgroundColor: {
        "acid-green": "#D6FD51",
      },

      backgroundImage: {
        "hero-gradient":
          "linear-gradient(90deg, rgba(23,23,23,1) 0%, rgba(0,0,0,0.2825552825552825) 50%, rgba(23,23,23,1) 100%)",
      },
      backgroundPosition: {
        "hero-position": "center top -300px;",
      },
      maxWidth: {
        container: "65rem",
      },
      boxShadow: {
        button: "0px 0px 60px 0px #D6FD51",
        "button-error": "0px 0px 60px 0px rgba(255, 0, 0, 1)",
      },
      colors: {
        "acid-green": "#D6FD51",
        "dark-green": "#00ff16",
      },
      borderRadius: {
        default: "15px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
    },
  },
  plugins: [],
};
