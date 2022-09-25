/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ijo-dark': '#94B49F',
        'ijo-light': '#CEE5D0',
        'coklat-light': '#FCF8E8',
        'coklat-dark': '#ECB390',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      }
    },
    
  },
  plugins: [],
}
