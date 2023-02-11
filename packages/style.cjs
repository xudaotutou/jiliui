const Jbase = require('./components/base/index.cjs')
const Jlayout = require('./components/layout/index.cjs')
const JBackToTop = require('./components/backToTop/index.cjs')
const JProgress = require('./components/progress/index.cjs')
module.exports = require("tailwindcss/plugin")(function ({
  addUtilities,
  matchUtilities,
  addBase,
  addComponents
}) {
  addBase(Jbase.add_base)
  addComponents(JBackToTop.add_c)
  addUtilities({
    ...Jlayout.css,
    ...JProgress.add_u
  });
  matchUtilities({
    ...Jlayout.match_u
  }
  )
})

