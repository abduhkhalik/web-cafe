/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "16px",
        center: true,
      },
      colors: {
        darkGreenA: "#8BAC3E",
        darkGreenB: "#A4B441",
        darkTeal: "#40A2B1",
        darkBlue: "#405EB6",
        darkPink: "#B23F74",
      },
    },
  },
  plugins: [],
};
