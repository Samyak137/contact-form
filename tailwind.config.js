/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "hsl(148, 38%, 91%)", // your custom HSL color
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"], // Add Karla font with fallback to sans-serif
      },
    },
  },
  plugins: [],
};
