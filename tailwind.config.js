/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Orange': 'hsl(25, 97%, 53%)',
        'White': 'hsl(0, 0%, 100%)',
        'Light-Grey': 'hsl(217, 12%, 63%)',
        'Medium-Grey': 'hsl(216, 12%, 54%)',
        'Dark-Blue': 'hsl(213, 19%, 18%)',
        'Very-Dark-Blue': 'hsl(216, 12%, 8%)',
        'button-container': 'hsl(211, 19%, 24%)'
      },
      fontFamily:{
        'Overpass': ['Overpass', 'sans-serif']
      }
    },
  },
  plugins: [],
}