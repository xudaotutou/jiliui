const Jbase = require('./components/base/index.cjs')
const Jlayout = require('./components/layout/index.cjs')
const JBackToTop = require('./components/backToTop/index.cjs')
const JProgress = require('./components/progress/index.cjs')
const JRProgress = require('./components/rprogress/index.cjs')
const JTab = require('./components/tab/index.cjs')
module.exports = require("tailwindcss/plugin")(function ({
  addUtilities,
  matchUtilities,
  addBase,
  addComponents
}) {
  addBase(Jbase.add_base)
  addComponents({
    ...JBackToTop.add_c,
    ...JRProgress.add_c,
    ...JProgress.add_c,
    ...JTab.add_c
  })
  addUtilities({
    ...Jlayout.css
  })
  matchUtilities({
    ...Jlayout.match_u
  }
  )
})

