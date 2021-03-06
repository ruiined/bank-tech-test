module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: "eslint:recommended",
  plugins: ["jest"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {},
};
