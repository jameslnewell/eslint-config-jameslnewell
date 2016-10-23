module.exports = {

  plugins: [
    'mocha'
  ],

  rules: {

    'no-unused-expressions': 0, //cause chai's expect
    'max-nested-callbacks': 0, //cause mocha requires callbacks

    'mocha/no-exclusive-tests': 'error', //no .only()s!!!
    'mocha/no-skipped-tests': 'warn', //no .skip()s?
    'mocha/no-pending-tests': 'warn', //no .skip()s?
    'mocha/handle-done-callback': 'error',
    'mocha/no-synchronous-tests': 'off',
    'mocha/no-global-tests': 'error',
    'mocha/no-return-and-callback': 'error',
    'mocha/valid-test-description': ['off', 'mypattern$', ['it', 'specify', 'test', 'mytestname']], //todo: agree on a standard and enforce
    'mocha/valid-suite-description': ['off', '^[A-Z]'], //todo: agree on a standard and enforce
    'mocha/no-sibling-hooks': 'error',
    'mocha/no-mocha-arrows': 'off', //we use arrows when not setting timeout
    'mocha/no-hooks': 'off', //can't create fixtures for rewire?
    'mocha/no-hooks-for-single-case': 'off',
    'mocha/no-top-level-hooks': 'error',
    'mocha/no-identical-title': 'error'

  }

};

