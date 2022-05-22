module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['svelte3'],
  overrides: [{files: ['*.svelte'], processor: 'svelte3/svelte3'}],
  rules: {
    'no-unused-vars': 'off'
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  }
}
