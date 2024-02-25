/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'parallax': 'url("../src/img/img1.jpg")',
        'parallax2': 'url("../src/img/img3.jpg")',
        'Japon': 'url("../src/img/Japon.jpg")',
        'paris': 'url("../src/img/paris.jpg")',
        'nuevayork': 'url("../src/img/nuevayork.jpg")'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}





