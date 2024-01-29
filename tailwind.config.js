/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          'dark-blue': '#2b3945',
          'very-dark-blue-dark-mode': '#202c37',
          'very-dark-blue-light-mode': '#111517',
        },
        gray: {
          'dark-gray': '#858585',
          'very-light-gray': '#fafafa',
        },
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}

