module.exports = {

  extends: [
    './es6.js'
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },

  plugins: [
    'react'
  ],

  settings: {
    react: {
      version: '15.0'
    }
  },

  rules: {

    'react/display-name': ['error', {ignoreTranspilerName: false}],
    'react/forbid-component-props': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-children-prop': 'error',
    'react/no-danger': 'off',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'warn',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error', //what about in the constructor?
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': ['error', {ignoreStateless: true}], //its useful breaking up components
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off', //setState() isn't bad for local state even when redux is used
    'react/no-string-refs': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': ['warn', {ignore: ['g-xs', 'g-sm', 'g-md', 'g-lg', 'g-xl']}],
    'react/no-unused-prop-types': 'error', //TODO: need to loosen?
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': ['warn', {ignorePureComponents: true}],
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/rules/sort-comp': 'off', //I'd like to enable this! but its pretty picky
    'react/sort-prop-types': 'off',
    'react/style-prop-object': 'off', //because it might not be an object on a custom element

    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'], //line or tag?
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-filename-extension': 'error', //too strict?
    'react/jsx-first-prop-new-line': ['error', 'multiline'], //too strict?
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-no-bind': ['warn', {ignoreRefs: true, allowArrowFunctions: true, allowBind: false}], //just a warning cause its a perf optimization //not working?
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': ['error', {allowAllCaps: true}],
    'react/jsx-sort-props': 'off',
    'react/jsx-space-before-closing': ['error', 'never'], //too strict?
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error'

  }

};
