module.exports = {

  parser: 'babel-eslint',

  env: {
    es6: true
  },

  ecmaFeatures: {
    arrowFunctions: true,
    binaryLiterals: false,
    blockBindings: true,
    classes: true,
    defaultParams: true,
    destructuring: true,
    forOf: true,
    generators: false,
    modules: true,
    objectLiteralComputedProperties: true,
    objectLiteralDuplicateProperties: false,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    octalLiterals: false,
    regexUFlag: false,
    regexYFlag: false,
    restParams: true,
    spread: true,
    superInFunctions: true,
    templateStrings: true,
    unicodeCodePointEscapes: false,
    globalReturn: false,
    jsx: true,
    experimentalObjectRestSpread: true
  },

  rules: {
    'arrow-body-style': [1, 'as-needed'],
    'arrow-parens': 0,
    'arrow-spacing': [2, {before: true, after: true}],
    'constructor-super': 2,
    'generator-star-spacing': [2, {before: true, after: false}],
    'no-arrow-condition': 2,
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-this-before-super': 2,
    'no-var': 2,
    'object-shorthand': [2, 'always'],
    'prefer-arrow-callback': 1,
    'prefer-const': 2,
    'prefer-reflect': 1,
    'prefer-spread': 2,
    'prefer-template': 1,
    'require-yield': 2
  },

  extends: [
    'jameslnewell/es5'
  ]

};
