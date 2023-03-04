/** @type {import('tailwindcss').Config} */

const colors = require('./colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      ring: colors,
      fill: colors,
      fontFamily: {
        sans: ['Poppins'],
      },
    },
  },
  plugins: [],
};
