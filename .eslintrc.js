// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
   "ecmaVersion": 6,
   "sourceType": "module",
   "ecmaFeatures": {
     "jsx": true
   }
 },
  env: {
    "browser": true,
    "es6": true,
    "node": true
  },
  extends: [
    'standard',
    'prettier/react'
  ],
  plugins: ['react', 'jsx-a11y', 'import'],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/react-in-jsx-scope': 'off',
    "jsx-quotes": 2,
    "no-confusing-arrow": 0,
    'no-unused-vars': 0,
    'no-unused-expressions': 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }]
  }
}
