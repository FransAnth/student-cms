/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#739498",
        secondary: "#BBCED0",
        primaryBg: "#5E8085",
        secondaryBg: "#EFF7F8",
        sidebarHover: "#73949870",
        textLighter: "#4b5563",
        warning: "#C76D6D",
      },
    },
  },
  plugins: [],
};
