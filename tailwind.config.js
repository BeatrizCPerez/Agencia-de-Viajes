/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'parallax': 'url("/maldivas.svg")',
        'parallax2': 'url("/img3.jpg")',
        'Japon': 'url("/Japon.jpg")',
        'paris': 'url("/paris.jpg")',
        'nuevayork': 'url("/nuevayork.jpg")'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}





