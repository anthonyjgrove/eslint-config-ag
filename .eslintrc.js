const globalExtends = ['eslint:recommended', 'prettier', 'airbnb-base', 'plugin:jest/recommended']
const globalPlugins = ['prettier', 'better-mutation', 'jest', 'import']
const globalRules = {
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
  'better-mutation/no-mutating-functions': 2,
  'better-mutation/no-mutating-methods': 2,
  'newline-before-return': 'error',
  'no-var': 2,
  'prefer-const': 2,
  'no-console': 2,
  camelcase: 0,
  curly: ['error', 'all'],
  'quote-props': ['error', 'as-needed'],
  'comma-dangle': ['error', 'never'],
  semi: ['error', 'never'],
  'max-len': ['error', { code: 150 }],
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: ['**/*.test.ts', '**/*.test.tsx', '**/*.test.js', '**/*.test.js']
    }
  ]
}

const typescriptExtends = [
  'plugin:import/typescript',
  'airbnb-typescript',
  'plugin:@typescript-eslint/recommended',
  'plugin:@typescript-eslint/recommended-requiring-type-checking'
]
const typescriptPlugins = ['@typescript-eslint']
const typescriptRules = {
  '@typescript-eslint/semi': ['error', 'never'],
  '@typescript-eslint/no-unused-vars': 'error',
  '@typescript-eslint/comma-dangle': ['error', 'never'],
  'no-unused-vars': 'off',
  'import/no-unresolved': 'error'
}
const typescriptSettings = {
  'import/parsers': {
    '@typescript-eslint/parser': ['.ts', '.tsx']
  },
  'import/resolver': {
    typescript: {
      alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      // use a glob pattern
      project: './tsconfig.json'
    }
  }
}

const reactExtends = ['airbnb', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:react/jsx-runtime']
const reactPlugins = ['react', 'react-hooks']
const reactRules = {
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
  'react-hooks/exhaustive-deps': 0
}

module.exports = {
  root: true,
  // "parser": "babel-eslint",
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  extends: globalExtends,
  plugins: globalPlugins,
  rules: globalRules,
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
  overrides: [
    {
      files: ['*.ts'], // Your TypeScript files extension
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'] // Specify it only for TypeScript files
      },
      settings: typescriptSettings,
      extends: [...globalExtends, ...typescriptExtends],
      plugins: [...globalPlugins, ...typescriptPlugins],
      rules: { ...typescriptRules, ...globalRules }
    },
    // React
    {
      files: ['*.tsx'], // Your TypeScript files extension
      parser: '@typescript-eslint/parser',
      settings: typescriptSettings,
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
        ecmaFeatures: {
          jsx: true
        }
      },
      extends: [...globalExtends, ...typescriptExtends, ...reactExtends],
      plugins: [...globalPlugins, ...typescriptPlugins, ...reactPlugins],
      rules: { ...globalRules, ...typescriptRules, ...reactRules }
    },
    {
      files: ['*.jsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      extends: [...globalExtends, ...reactExtends],
      plugins: [...globalPlugins, ...reactPlugins],
      rules: { ...globalRules, ...reactRules }
    }
  ]
}
