/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#DBD424",
        },
        dark: { base: "#2B2B2B", 200: "#1e1e1e" },
        white: { base: "#FBFBFB", darker: "#DFDFDF" },
      },
    },
  },
  plugins: [],
};
