const css = require("../dist/Jlayout.cjs")['@global']
module.exports = require("tailwindcss/plugin")(function ({
  addUtilities
}) {
  console.log("hellowor")
  console.log(css)
  addUtilities(css);
})

