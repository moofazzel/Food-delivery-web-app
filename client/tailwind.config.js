/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",


  ],
  theme: {
    extend: {},
    screens: {
      xs: '480px',
      sm: '768px',
      md: '992px',
      lg: '1024px',
      xl: '1440px',
    },
    container: {
      center: true,
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    }
    ,

    colors: {
      primaryCol: "#DA3C3C",
      secondaryCol: "#C13030",
      textCol: "#191919"


    },
  },

  plugins: [],


}