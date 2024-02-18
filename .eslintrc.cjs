module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier'],
  ignorePatterns: ['build/'],
  // custom rules here
  rules: {
    camelcase: ['off'],
    '@typescript-eslint/camelcase': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
  },
}
