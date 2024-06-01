/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'workbench':['Workbench']
    },

    fontFamily: {
      'dancing':['Dancing Script']
    },

    fontFamily: {
      'roboto':['Roboto']
    },

    fontFamily: {
      'sofia':['Sofia']
    },
     
    extend: {
      colors: {
        primaryColor: '#010a5e',
      },


      rotate: {
        '170': '170deg',
      },

      keyframes: {
        move: {
          "50%": {transform: 'translateY(-1rem)'}
        }
      },

      animation: {
        'movingY': 'move 2s linear infinite'
      }
    },
  },











  

  container: {
    center: true,
  },

  plugins: [],
}



