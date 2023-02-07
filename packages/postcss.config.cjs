module.exports = {
  plugins: 
  // [
  //   require("postcss-import"),
  //   require("postcss-nested")({
  //     bubble: ["screen"],
  //   }),
    // require("tailwindcss")("./packages/components/layout/tailwind.config.cjs"),
  //   require("autoprefixer"),
  // ],
  {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: "./packages/tailwind.config.cjs",
    autoprefixer: {},
  }
};