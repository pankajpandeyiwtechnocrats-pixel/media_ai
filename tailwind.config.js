/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPink: "#E91E63",
        brandPurple: "#9C27B0",
      },
      backgroundImage: {
        'pink-gradient': "linear-gradient(to right, #ec4899, #be185d)",
      }
    },
  },
  plugins: [],
}