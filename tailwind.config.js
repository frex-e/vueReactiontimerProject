const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: colors
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
