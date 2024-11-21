/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4B9E73",
        secondary: "#C5E7D2",
        primaryBg: "#417765",
        secondaryBg: "##D8DBD8",
        textLighter: "#4b5563",
        warning: "#D75858",
      },
    },
  },
  plugins: [],
};
