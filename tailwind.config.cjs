/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './packages/**/*.{vue,js,ts,jsx,tsx}',
    './examples/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  // plugins: [
  //   require('./packages/style.cjs')
  // ]
}
