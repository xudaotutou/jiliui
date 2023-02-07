
const Jlayout = require('./components/layout/index.cjs')
module.exports = require("tailwindcss/plugin")(function ({
  addUtilities,
  matchUtilities
}) {
  addUtilities({
    ...Jlayout.css
  });
  matchUtilities({
    ...Jlayout.match_u
  }
  )
})

