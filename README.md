# eslint-config-jameslnewell

ESLint config for common gotch'yas for different JS environments.

> Note: I think formatting code is important ([find out why here](https://github.com/airbnb/javascript/issues/866)) but nowdays
I'm using [prettier](https://github.com/prettier/prettier) to take care of formatting code for  me.

## Installation

    npm install --save eslint-config-jameslnewell

## Usage

In the root of your project, create a `.eslintrc` file with the following contents:

```json
{
  "extends": "jameslnewell/<env>"
}
```

    
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

## Change log

### 3.0.0-preview.*

- break: removed all rules that enforced formatting
- break: switch `jameslnewell/test` from `mocha` to `jest`
- break: removed rules already configured in `eslint:recommended`

I bumped the major version because lots of people were using the preview.

### 2.0.0-preview.*

- break: use webpack config for resolution of `imports` 
- break: moved `mocha` rules to the `test` configuration
- break: turned on a whole heap of new `import, `react` and `mocha` rules
- break: using `babel-eslint` to support class properties

I bumped the major version because lots of people were using the preview.

### 1.0.0-preview.*

- break: migrate to `eslint` v2

### 0.5.1

- fix: moved `eslint-plugin-mocha` from `devDependencies` to `dependencies`

### 0.5.0

- add: added `eslint-plugin-mocha` to prevent `.only()` slipping through

