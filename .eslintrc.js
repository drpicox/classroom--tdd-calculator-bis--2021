// DO NOT MODIFY THIS FILE
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    complexity: ["error", { max: 6 }],
    "max-depth": ["error", { max: 2 }],
    "max-params": ["error", { max: 3 }],
    "max-lines-per-function": ["error", { max: 20, IIFEs: true }],
    "max-nested-callbacks": ["error", { max: 1 }],
    "no-console": ["error"],
    "no-eval": "error",
    "no-implied-eval": "error",
  },
  parser: "babel-eslint",
};
