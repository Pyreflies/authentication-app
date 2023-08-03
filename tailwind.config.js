/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#77431C', // Your new primary color
          hover: '#6b3a18', // Color on hover
          focus: '#885425', // Color on focus
          active: '#6b3a18', // Color on active
        },
      },
    },
  },
  plugins: [require("daisyui")],
}

