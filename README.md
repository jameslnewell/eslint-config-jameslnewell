# eslint-config-jameslnewell

ESLint config for how I like to format code - readable with whitespace and semicolons.

> Note: [Why I enforce formatting](https://github.com/airbnb/javascript/issues/866)

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

### jameslnewell/node

Linting rules for node v4.

## Partial configurations

### jameslnewell/test

Relax rules with useful behaviour for testing.

### jameslnewell/debug

Relax rules with useful behaviour for debugging.

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

## TODO:

- assess new rules in http://eslint.org/blog/2016/02/eslint-v2.0.0-released and react/import plugins
    
## Change log

### 2.0.0

I bumped the major version because lots of people were using the preview.

- break: use webpack config for resolution of `imports` 
- break: moved `mocha` rules to the `test` configuration
- break: turned on a whole heap of new `import, `react` and `mocha` rules

### 1.0.0-preview.*

- break: migrate to `eslint` v2

### 0.5.1

- fix: moved `eslint-plugin-mocha` from `devDependencies` to `dependencies`

### 0.5.0

- add: added `eslint-plugin-mocha` to prevent `.only()` slipping through

