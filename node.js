module.exports = {

  env: {
    node: true
  },

  parserOptions: {
    sourceType: 'script'
  },

  rules: {
    'import/no-commonjs': 'off'
  },

  extends: [
    './es6.js'
  ]

};
