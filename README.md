# eslint-config-jameslnewell

ESLint config for how I like to format code - readable with whitespace and semicolons.

## Installation

    npm install --save eslint-config-jameslnewell

## Usage

In the root of your project, create a `.eslintrc` file with the following contents:

    {
        "env": {
          "browser": true, 
          "mocha": true
        },
        "extends": "jameslnewell"
    }
    
Now run `eslint` on your script files:

    eslint **/*.js

## Configurations

### jameslnewell/es5

Linting rules for ES5.

### jameslnewell/es6

Linting rules for ES6.

### jameslnewell/react

Linting rules for ES6 and react.

## Rules

- **semicolons**
- **2 spaces** - for indentation
- **Single quotes for strings** - except to avoid escaping
- **No unused variables** - this one catches *tons* of bugs!
- **Space after keywords** - `if (condition) { ... }`
- **No space after function name** - `function name(arg) { ... }`
- Always use `===` instead of `==` - but `obj == null` is allowed to check `null || undefined`.
- Always handle the node.js `err` function parameter
- Always prefix browser globals with `window` - except `document` and `navigator` are okay
  - Prevents accidental use of poorly-named browser globals like `open`, `length`,
    `event`, and `name`.
- And more...
    
## License

The MIT License (MIT)

Copyright (c) 2015 James Newell