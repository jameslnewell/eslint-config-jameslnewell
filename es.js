/*
  This file supports the latest language features
*/
module.exports = {

  extends: [
    './es6.js'
  ],

  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },

  rules: {
  }

};
