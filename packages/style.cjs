const Jbase = require('./components/base/base.cjs')
const Jlayout = require('./components/layout/index.cjs')
const JBackToTop = require('./components/backToTop/index.cjs')
module.exports = require("tailwindcss/plugin")(function ({
  addUtilities,
  matchUtilities,
  addBase,
  addComponents
}) {
  addBase(Jbase.add_base)
  addComponents(JBackToTop.add_c)
  addUtilities({
    ...Jlayout.css
  });
  matchUtilities({
    ...Jlayout.match_u
  }
  )
})

