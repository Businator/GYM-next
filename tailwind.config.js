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
        "hero-img": 'url("/image/hero.jpg")',
        "hero-gradient":
          "linear-gradient(90deg, rgba(23,23,23,1) 0%, rgba(0,0,0,0.2825552825552825) 50%, rgba(23,23,23,1) 100%)",
      },
      backgroundPosition: {
        "hero-position": "center top -300px;",
      },
      maxWidth: {
        container: "50rem",
      },
      boxShadow: {
        button: "0px 0px 60px 0px #D6FD51",
      },
      colors: {
        "acid-green": "#D6FD51",
      },
      borderRadius: {
        default: "15px",
      },
    },
  },
  plugins: [],
};
