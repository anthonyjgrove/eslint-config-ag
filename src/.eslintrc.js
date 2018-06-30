// generated file from .eslintrc.yml
module.exports =
{
  "root": true,
  "parser": "babel-eslint",
  "extends": [
    "plugin:react/recommended",
    "plugin:flowtype/recommended",
    "plugin:jest/recommended",
    "airbnb",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  "plugins": [
    "react",
    "import",
    "jest",
    "flowtype",
    "prettier",
    "better-mutation"
  ],
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": false
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jasmine": true,
    "jest": true,
    "jest/globals": true,
    "mocha": true,
    "shelljs": true,
    "commonjs": true
  },
  "globals": {
    "fetch": true,
    "navigator": true,
    "__DEV__": true,
    "XMLHttpRequest": true,
    "React$Element": true,
    "Generator": true
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "useTabs": false,
        "printWidth": 150,
        "tabWidth": 2,
        "singleQuote": true,
        "trailingComma": "none",
        "bracketSpacing": true,
        "jsxBracketSameLine": false,
        "semi": false
      }
    ],
    "newline-before-return": "error",
    "no-unused-vars": 2,
    "no-var": 2,
    "prefer-const": 2,
    "no-console": 2,
    "camelcase": 0,
    "curly": [
      "error",
      "all"
    ],
    "react/no-unused-prop-types": 2,
    "react/jsx-filename-extension": 0,
    "react/require-default-props": 0,
    "react/prop-types": 0,
    "better-mutation/no-mutating-functions": 2,
    "better-mutation/no-mutating-methods": 2
  }
}
