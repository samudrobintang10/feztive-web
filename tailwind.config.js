/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#FF8A00",
        "primary-purple": "#8000FF",
        "primary-grey": "#E9E9E9",
        "primary-black": "#303030",
        "primary-white": "#FFFFFF",
        "primary-light-orange": "#FFA674",
        "primary-music-jazz": "#FF3D00",
        "primary-blue": "#0066FF",
        "secondary-blue": "#74BCFF",
        "secondary-grey": "#DCDCDC",
        "secondary-purple": "#C78EFF",
        "tertiary-grey": "#AAAEBD",
        "tertiary-blue": "#1F81E2",
        "quarternary-grey": "#EEEEFF",
        "quinary-grey": "#63676F",
        "broken-white": "#FAFAFA",
      },
      fontFamily: {
        monserrat: ["Montserrat"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
