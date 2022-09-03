/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [],
  theme: {
    extend: {
      gridTemplateRows: {
        12: "repeat(12, minmax(0, 1fr))",
      },
      gridRow: {
        "span-8": "span 8 / span 8",
        "span-10": "span 10 / span 10",
      },
      height:{
        '90%': '90%'
      },
      colors: {
        slyth: {
          50: "#e1e9e333",
          100: "#e1e9e3",
          200: "#a6beab",
          300: "#88a98f",
          400: "#6a9473",
          500: "#55765c",
          600: "#405845",
          700: "#2a3b2e",
          800: "#1e2a21",
          900: "#060907",
          gold: "#FEC402",
        },
      },
      fontFamily: {
        satisfy: "Satisfy, cursive",
      },
    },
  },
  plugins: [],
};
