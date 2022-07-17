/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      width: {
        128: '38rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
