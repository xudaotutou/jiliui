module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "vue/setup-compiler-macros": true
  },
  "extends": [
    // "plugin:vue/vue3-essential",
    // "standard-with-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:vue/vue3-recommended"
  ],
  "overrides": [
    {
      "files": ["*.vue"],
      "parser": "vue-eslint-parser"
    }
  ],
  "ignorePatterns": [],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": {
      "ts":"@typescript-eslint/parser"
    },
    "sourceType": "module",
  },
  "plugins": [
    "vue",
    "@typescript-eslint"
  ],
  "root": true,
  "rules": {
  }
}
