/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
    safelist:[
    // coaching
    'bg-blue-500',
    'bg-yellow-700',
    'bg-green-700'
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        tennisGreen: '#E7F915',
      },
      fontFamily: {
        expand: ['Special Gothic Expanded One'],
        // ibmPlex: ['IBM Plex Sans'],
      },
      fontSize:{
        xxs: '0.625rem',
        md: '0.938rem'
      }

    },
  },
  plugins: [],
}

