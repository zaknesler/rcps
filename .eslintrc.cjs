/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  env: { node: true, browser: true, es6: true, commonjs: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'prettier',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react', 'prettier', '@typescript-eslint', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'import/default': 'error',
    'import/named': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          ['internal', 'parent', 'index'],
          'sibling',
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 'off',
    'react/no-unknown-property': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        arrowParens: 'avoid',
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        endOfLine: 'lf',
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
}

module.exports = config
