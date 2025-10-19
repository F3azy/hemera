/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#EDB63B",
          // darker: "#B9B202",
        },
      },
    },
  },
  plugins: [],
};
