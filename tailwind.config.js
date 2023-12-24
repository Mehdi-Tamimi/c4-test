/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tab': '744px',
        'des': '1280px'
      }
    },
  },
  plugins: [],
}

