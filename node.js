module.exports = {

  env: {
    node: true
  },

  parserOptions: {
    sourceType: 'script'
  },

  rules: {
    'import/no-commonjs': 0
  },

  extends: [
    './es6.js'
  ]

};
