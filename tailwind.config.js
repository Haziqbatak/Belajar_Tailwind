/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        'ubuntu' : ['"Ubuntu"', 'sans-serif'],
        'poppins' : ['"Poppins"', 'sans-serif']
      },
      fontSize: {
        '10xl': '10rem'
      }
    },
  },
  plugins: [],
}

