const path = require("path");

module.exports = {
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@typescript-eslint/parser",
  //parserOptions: {
  //  tsconfigRootDir: __dirname,
  //  project: ["tsconfig.json"],
  //},
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "sort-imports": "error",
  },
};
