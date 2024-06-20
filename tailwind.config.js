/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#DBD424",
        },
        dark: {},
        white: { base: "#FBFBFB" },
      },
    },
  },
  plugins: [],
};
