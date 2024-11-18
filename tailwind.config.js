/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainText: '#17dbc4',
        secondaryText: 'white',
        mainBg: '#020e22',
        secondaryBg: '#020e22'
      },
      fontFamily: {
        title: ["PT Serif", 'sans-serif'],
        text: ["Poppins", 'sans-serif'],
      }
    },
  },
  plugins: [],
}