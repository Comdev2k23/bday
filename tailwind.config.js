/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ['Poppins']
      },
      backgroundImage: {
        'pic1' : "url('./assets/pic1.png')"
      }
    },
  },
  plugins: [],
}

