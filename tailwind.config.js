/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  safelist: [
    'no-scrollbar', // Add your custom class here
  ],
  theme: {
    extend: {
      fontSize: {
        '56': "56px",
        '42' : "42px",
      }
    },
  },
  plugins: [],
}

