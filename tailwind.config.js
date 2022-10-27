/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "#1DA1F2",
          dark: "#0E4D78",
          light: "#ADE1F0",
        },
        gray: {
          dark:"#657786",
          light:"#AAB8C2",
          extraLight:"#E1E8ED",
          lightest:"#F5F8FA",
        },
        black:"#000"
      }
    },
  },
  plugins: [],
}