/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#FF8A00',
        'primary-purple': '#8000FF',
        'primary-grey': '#E9E9E9',
        'primary-black': '#303030',
        'primary-white': '#FFFFFF',
        'primary-light-orange': '#FFA674',
        'primary-music-jazz': '#FF3D00'
      },
      fontFamily: {
        'monserrat': ['Montserrat']
      }
    },
  },
  plugins: [],
}
