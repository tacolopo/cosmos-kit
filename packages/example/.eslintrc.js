module.exports = {
  plugins: ['@typescript-eslint', 'prettier'],
  root: true,
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'no-debugger': 2,
    'no-alert': 2,
    'no-await-in-loop': 0,
    'no-prototype-builtins': 0,
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: 'React|res|next|^_',
      },
    ],

    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-console': 1,
    'comma-dangle': 0,
    'jsx-quotes': [2, 'prefer-double'],
    'linebreak-style': ['error', 'unix'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        useTabs: false,
      },
    ],
  },
}