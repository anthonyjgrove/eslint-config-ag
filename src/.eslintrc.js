// generated file from .eslintrc.yml
module.exports = {
  root: true,
  parser: "babel-eslint",
  extends: [
    "plugin:react/recommended",
    "plugin:flowtype/recommended",
    "plugin:jest/recommended",
    "airbnb",
    "prettier",
    "prettier/flowtype",
    "prettier/react",
  ],
  plugins: ["react", "import", "jest", "flowtype", "prettier"],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    "jest/globals": true,
    mocha: true,
    shelljs: true,
    commonjs: true,
  },
  globals: {
    fetch: true,
    navigator: true,
    __DEV__: true,
    XMLHttpRequest: true,
    React$Element: true,
    Generator: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        useTabs: false,
        // Fit code within this line limit
        printWidth: 200,
        // Number of spaces it should use per tab
        tabWidth: 2,
        // If true, will use single instead of double quotes
        singleQuote: true,
        // Controls the printing of trailing commas wherever possible. Valid options:
        // "none" - No trailing commas
        // "es5"  - Trailing commas where valid in ES5 (objects, arrays, etc)
        // "all"  - Trailing commas wherever possible (function arguments)
        trailingComma: "none",
        // Controls the printing of spaces inside object literals
        bracketSpacing: true,
        // If true, puts the `>` of a multi-line jsx element at the end of
        // the last line instead of being alone on the next line
        jsxBracketSameLine: false,
        // Which parser to use. Valid options are 'flow' and 'babylon'
        // Whether to add a semicolon at the end of every line (semi: true),
        // or only at the beginning of lines that may introduce ASI failures (semi: false)
        semi: false,
      },
    ],
    "newline-before-return": "error",
    "no-use-before-define": [
      "error",
      {
        functions: false,
        classes: false,
        variables: true,
      },
    ],
    "no-unused-vars": 2,
    "react/no-unused-prop-types": 2,
    yoda: [
      "error",
      "never",
      {
        exceptRange: true,
      },
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    curly: ["error", "all"],
    "react/require-default-props": 0,
    "react/prop-types": 0,
    "jsx-a11y/href-no-hash": "off",
    "no-var": 2,
    "prefer-const": 2,
    "no-console": 2,
    "semi-spacing": 2,
    camelcase: 0,
    indent: ["error", 2],
  },
};
