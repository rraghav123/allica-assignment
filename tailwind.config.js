export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgImage: "url('src/assets/backgroundImg.jpg')",
      },
      boxShadow: {
        customBoxShadow: "0px 0px 7px 1px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
