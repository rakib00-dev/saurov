/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      roboto: '"Roboto", serif',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['retro', 'dark'],
  },
};
