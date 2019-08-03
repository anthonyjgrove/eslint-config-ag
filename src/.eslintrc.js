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
    "better-mutation",
    "react-hooks"
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
    "react/sort-prop-types": 2,
    "react/display-name": 2,
    "react/destructuring-assignment": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-sort-props": 2,
    "react/jsx-sort-default-props": 2,
    "react/no-children-prop": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-find-dom-node": 2,
    "react/require-render-return": 2,
    "react/style-prop-object": 2,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 0,
    "better-mutation/no-mutating-functions": 2,
    "better-mutation/no-mutating-methods": 2
  }
}
