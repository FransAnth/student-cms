/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B2A59B",
        secondary: "#FAEED1",
        primaryBg: "#607274",
        secondaryBg: "#fff",
        sidebarHover: "#A89F98",
        textLighter: "#4b5563",
        warning: "#D75858",
      },
    },
  },
  plugins: [],
};
