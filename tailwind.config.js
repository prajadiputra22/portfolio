/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#6366f1',
        second: '#111827'
      },
      screens: {
        '2xl' : '1320px'
      },
      fontFamily: {
        little: ['Montserrat', 'sans-serif'],
        upper: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

