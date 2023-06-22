/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
      colors: {
        "creame": "#DDCDC6",
      },
      listStyleImage: {
        checkmark: 'url("main.png")',
      },
  },
  plugins: [
    require('tailwindcss-dotted-background'),
  ],
}

