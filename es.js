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

  plugins: [
    'babel'
  ],

  rules: {

    //disable native rule and use babel rule to support the use 
    //of `this` with class properties
    'no-invalid-this': 'off',
    'babel/no-invalid-this': 'error'

  }

};
