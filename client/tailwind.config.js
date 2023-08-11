/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
    },
    // our colors theme
    colors: {
      'primary': '#c00a27',
      'secondary': '#f4b618',
      'white': '#ffffff',
      'black': '#3a3a3a',
      'gray': '#686464',
    },

    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },


  },
  plugins: [],
};
