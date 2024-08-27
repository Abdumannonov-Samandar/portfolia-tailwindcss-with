/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    boxShadow: {
      sshadow: '0 4px 15px 0 rgba(83, 176, 57, 0.75)',
      bshadow: '0 1px 30px 0 rgba(0, 0, 0, 0.75)', 
      red: '',
      boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    },
  },
  plugins: [],
}

