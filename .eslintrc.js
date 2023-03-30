module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'prettier',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jest/recommended',
    'plugin:@next/next/recommended'
  ],
  plugins: ['react', 'import', 'jest', 'prettier', 'better-mutation', 'react-hooks', '@typescript-eslint'],
  settings: {},
  env: {
    es6: true,
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    'jest/globals': true,
    mocha: true,
    shelljs: true,
    commonjs: true
  },
  globals: {
    fetch: true,
    navigator: true,
    __DEV__: true,
    XMLHttpRequest: true,
    React$Element: true,
    Generator: true
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        useTabs: false,
        printWidth: 150,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        semi: false
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.ts', '**/*.test.tsx']
      }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'newline-before-return': 'error',
    'no-var': 2,
    'prefer-const': 2,
    'no-console': 2,
    camelcase: 0,
    curly: ['error', 'all'],
    'react/no-unused-prop-types': 2,
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'react/prop-types': 0,
    'react/sort-prop-types': 2,
    'react/display-name': 2,
    'react/destructuring-assignment': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-sort-props': 2,
    'react/sort-default-props': 2,
    'react/no-children-prop': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-find-dom-node': 2,
    'react/require-render-return': 2,
    'react/style-prop-object': 2,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 0,
    'better-mutation/no-mutating-functions': 2,
    'better-mutation/no-mutating-methods': 2,
    'quote-props': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    'max-len': ['error', { code: 150 }]
  }
}
