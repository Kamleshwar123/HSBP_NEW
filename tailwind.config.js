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
      'white': '#ffffff',
      'white-fc': '#FCFCFC',
      'white-f2': '#F2F2F2',
      'white-eb': '#EBEBEB',
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
      'black-685':'#685F65',
      'black-605':'#605F5F',
      'black-949':'#949494',
      'placeholder': '#AFA9A9',
      'red-c80': '#C8052C',
      'border': '#CCC9C9',
      'blue': '#0B3ECF',
      'yellow': '#FFBD07',
      'green': '#23AA1E',
      'gray-e8e':'#E8E8E8',
      'gray-eee': '#EEEEEE',
      'gray-f3f':'#F3F3F3',
      'theme-opacity': 'rgba(146, 58, 112, 0.5)',
      'blue-274':'#2747E6',
      'blue-477':'#4775D1',
      'green-0b5': '#0B551C'
    },
    extend: {
      boxShadow: {
        '8F': '0px 8px 15px #0000008F',
        '4D': '0px 6px 15px #0000004D',
        '29': '20px 20px 15px #00000029',
        'pkg':'15px 16px 26px #00000029',
        'salon':'8px 8px 6px #00000029',
        'card': '10px 10px 0 2px #eed0db',
        'header': '2px -6px 20px 0px #b2a9a9',
        '66': '8px 3px 15px #00000066',
        'tab': '0px 6px 1px #949494',
        'tab-active': '0px 6px 1px #8b2e5d',
        'form': '-6px 5px 15px #00000066',
        'checkout': '0px 5px 15px #00000066',
        'beautician':'0px 6px 10px #00000029',
        '42': '0px 8px 22px #00000042',
        'filterbox':'10px 8px 15px #00000029'
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          paddingRight: "15px",
          paddingLeft: "15px",
          marginRight: 'auto',
          marginLeft: 'auto',
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
