module.exports = {

  env: {
    es6: true,
    node: true
  },

  ecmaFeatures: {
    arrowFunctions: true,
    blockBindings: true,
    classes: true,
    destructuring: true,
    forOf: true,
    objectLiteralComputedProperties: true,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    restParams: true,
    spread: true,
    superInFunctions: true,
    templateStrings: true
  },

  rules: {
    'arrow-body-style': [1, 'as-needed'],
    'arrow-parens': 0,
    'arrow-spacing': [2, {before: true, after: true}],
    'constructor-super': 2,
    'generator-star-spacing': [2, {before: true, after: false}],
    'no-arrow-condition': 2,
    'no-class-assign': 2,
    'no-console': 0,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-this-before-super': 2,
    'no-var': 2,
    'object-shorthand': [2, 'always'],
    'prefer-arrow-callback': 1,
    'prefer-const': 2,
    'prefer-reflect': 0,
    'prefer-spread': 0,
    'prefer-template': 1,
    'require-yield': 2
  },

  extends: [
    'jameslnewell/es5'
  ]

};
