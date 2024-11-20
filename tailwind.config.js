/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#317196",
        secondary: "#f2b143",
        hoverColor: "#d6dcf0",
        white: "#f9fafa",
        secondaryText: "#4b5563",
        warning: "#FF0000",
      },
    },
  },
  plugins: [],
};
