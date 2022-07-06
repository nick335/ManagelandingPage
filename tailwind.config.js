/** @type {import('tailwindcss').Config} */;
const plugin = require('tailwindcss/plugin');
module.exports = {
  mode: 'jit',
  content: [
    "./src/components/Header.{js,jsx,ts,tsx}",
    "./src/components/HeroSection.{js,jsx,ts,tsx}",
    "./src/components/Nav.{js,jsx,ts,tsx}",
    "./src/components/Section1.{js,jsx,ts,tsx}",
    "./src/components/ManageDiv.{js,jsx,ts,tsx}",
    "./src/components/Section2.{js,jsx,ts,tsx}",
    "./src/components/FeedbackDiv.{js,jsx,ts,tsx}",
    "./src/components/Main.{js,jsx,ts,tsx}",
    "./src/components/Section3.{js,jsx,ts,tsx}",
    "./src/components/Footer.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'primary' : {
          DEFAULT: '#f25f3a',
          light: '#ffefeb',
        },
        'secondary' : {
          DEFAULT : '#242d52',
          light : '#9095a7',
          dark : '#1d1e25',
        },
        'light-gray' : '#fafafa',
        'dark-rgba' : 'rgba(0,0,0, 0.7)',
        'light-rgba' : 'rgba(0,0,0, 0.1)'
      },
      fontFamily: {
        'primary' : ['"Be Vietnam Pro"', 'sans-serif']
      },
      backgroundImage:{
        'primary-bg': "url('./images/bg-tablet-pattern.svg')",
        'secondary-bg' : "url('./images/bg-simplify-section-mobile.svg')",
        'simplify-bg' : "url('./images/bg-simplify-section-desktop.svg')"

      },
      backgroundSize: {
        '50%': '50%',
        '16': '4rem',
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      }
      )
    })
  ],
}
