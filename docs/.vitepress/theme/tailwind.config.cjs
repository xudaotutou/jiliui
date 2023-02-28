/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './docs/.vitepress/**/*.js',
    './docs/.vitepress/**/*.vue',
    './docs/.vitepress/**/*.ts',
  ],
  options: {
    safelist: ['html', 'body'],
  },
  plugins:[
    require('jiliui/tw-style')
  ]
}