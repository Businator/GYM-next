/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 0px 60px 0px #D6FD51",
      },
      backgroundColor: {
        "acid-green": "#D6FD51",
      },
      backgroundImage: {
        hero: 'url("/image/hero.jpg")',
      },
    },
  },
  plugins: [],
};
