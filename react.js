module.exports = {

  parserOptions: {
    ecmaFeatures: {
      'jsx': true
    }
  },

  plugins: [
    'react'
  ],

  'settings': {
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.jsx',
          '.json'
        ]
      }
    }
  },

  rules:{
    'react/display-name': ['error', {ignoreTranspilerName: false}],
    'react/forbid-prop-types': 0,
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': 0,
    //'react/jsx-no-bind': 1, //not working?
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 2,
    'jsx-quotes': [2, 'prefer-double'],
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-danger': 0,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 2,
    'react/no-multi-comp': 2,
    'react/no-set-state': 0,
    'react/no-unknown-property': 1,
    'react/prefer-es6-class': 2,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 0,
    'react/require-extension': [1, {'extensions': ['.js', '.jsx']}],
    'react/self-closing-comp': 0,
    'react/sort-comp': 1,
    'react/wrap-multilines': 2,
    'no-extra-parens': [2, 'functions'] //conflicts with wrap-multilines
  },

  extends: [
    './es6.js'
  ]

};
