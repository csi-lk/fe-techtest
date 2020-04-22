module.exports = {
  plugins: ['import', 'json', 'unicorn', 'sort-imports-es6-autofix', 'jest-dom'],
  extends: ['airbnb-base', 'plugin:unicorn/recommended', 'prettier', 'prettier/unicorn'],
  env: {
    jest: true,
    browser: true,
  },
}
