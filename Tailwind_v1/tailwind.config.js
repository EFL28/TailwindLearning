/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}", // depende de la estructura que eliges
    "./src/**/*.{html,js}" // en este caso hay dos carpetas: public / scr
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#672cf2',
        'bright-green': '#2cfc03'
      }
    },
  },
  plugins: [],
}

