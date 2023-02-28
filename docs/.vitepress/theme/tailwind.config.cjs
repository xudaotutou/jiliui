/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './docs/.vitepress/**/*.{js,vue,ts,html}'
  ],
  // options: {
  safelist: ['html', 'body','j-tab-content','j-tab-header','j-tab'],
  // },
  plugins: [
    require('../../../packages/style.cjs')
  ]
}