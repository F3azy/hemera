/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#DBD424",
        },
        dark: { base: "#2B2B2B", 200: "#1e1e1e", 300: "#1a1a1a" },
        white: { base: "#FBFBFB", darker: "#DFDFDF" },
      },
    },
  },
  plugins: [],
};
