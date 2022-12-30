/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'Poppins': ['Poppins']
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      '2xl': "1400px"
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'gradient': 'transparent linear-gradient(266deg, #993680 0%, #2F1A59 81%)',
      'white': '#ffffff',
      'white-fc': '#FCFCFC',
      'white-f2': '#F2F2F2',
      'black': '#000000',
      'body': '#3D363A',
      "pink": '#ffd1d1',
      'pink-light': '#FEC6C5',
      'theme': '#8B2E5D;',
      'theme-light': '#561334',
      'black-0f0': '#0F0D0E',
      'black-a8a': '#A8A3A6',
      'black-2a3': '#2A3133',
      'black-2e2':'#2E2E2E',
      'black-707':'#707070',
      'black-7d7': '#7D7D7D',
      'black-686': '#686868',
      'black-241': '#241E1E',
      'black-707': '#707070',
      'placeholder': '#AFA9A9',
      'red-c80': '#C8052C',
      'border': '#CCC9C9',
      'blue': '#0B3ECF',
      'yellow': '#FFBD07',
      'green': '#23AA1E',
      'gray-e8e':'#E8E8E8',
      'theme-opacity': 'rgba(146, 58, 112, 0.7)'
    },
    extend: {
      boxShadow: {
        '8F': '0px 8px 15px #0000008F',
        '4D': '0px 6px 15px #0000004D',
        '29': '20px 20px 15px #00000029',
        'pkg':'15px 16px 26px #00000029',
        'card': '10px 10px 0 2px #eed0db',
        'header': '2px -6px 20px 0px #b2a9a9'
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          paddingRight: "12px",
          paddingLeft: "12px",
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen 2xl': {
            maxWidth: '1320px',
          },
        }
      })
    }
  ]
}
