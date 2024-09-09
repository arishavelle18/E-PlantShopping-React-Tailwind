/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brownColor: "#868662",
        blackColor: "rgba(0, 0, 0, 0.6)",
        lightGreenColor: "#ad7082",
        darkGreenColor: "#48663B",
        redColor: "rgb(255,0,0)",
      },
      backgroundImage: {
        "plantBg-Image": "url('/plant.jpg')",
      },
    },
  },
  plugins: [],
};
