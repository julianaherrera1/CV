/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Apunta al archivo index.html
    "./src/**/*.{html,js}", // Si tienes archivos JS o HTML dentro de src (aunque no mencionas que los tengas, es una buena práctica)
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

