const path = require('path');
const reactPlugin = require('eslint-plugin-react');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const importPlugin = require('eslint-plugin-import');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const prettierPlugin = require('eslint-plugin-prettier');
const typescriptParser = require('@typescript-eslint/parser');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const typescriptSortKeysPlugin = require('eslint-plugin-typescript-sort-keys');
const cssModulesPlugin = require('eslint-plugin-css-modules');

module.exports = [
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'], // Проверяем файлы в папке src
    ignores: ['node_modules', 'dist'], // Игнорируем node_modules и dist
    languageOptions: {
      ecmaVersion: 'latest', // Последняя версия ECMAScript
      sourceType: 'module', // Модули ECMAScript
      parser: typescriptParser, // Парсер для TypeScript
      parserOptions: {
        project: './tsconfig.json', // Связь с TypeScript
        ecmaFeatures: {
          jsx: true, // Поддержка JSX
        },
      },
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': typescriptPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11yPlugin,
      prettier: prettierPlugin,
      'react-hooks': reactHooksPlugin,
      'typescript-sort-keys': typescriptSortKeysPlugin,
      'css-modules': cssModulesPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'css-modules': {
        basePath: './src', // Указываем корень проекта
      },
      'import/resolver': {
        // Настройка для Webpack
        webpack: {
          config: path.resolve(__dirname, 'webpack.config.js'),
        },
        // Настройка для TypeScript
        typescript: {
          project: path.resolve(__dirname, 'tsconfig.json'),
        },
      },
    },
    rules: {
      'prettier/prettier': 'error', // Проверка форматирования Prettier
      '@typescript-eslint/no-explicit-any': 'warn', // Предупреждение при использовании any
      'jsx-a11y/anchor-is-valid': 'off', // Не проверяем ссылки без href
      camelcase: 0,
      'comma-dangle': 0,
      'quote-props': 0,
      'prefer-const': 1,
      'dot-notation': 0,
      'no-shadow': 0,
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      'no-confusing-arrow': 0,
      'no-underscore-dangle': ['off', { allowAfterThis: false }],
      'newline-after-var': ['error', 'always'],
      'newline-per-chained-call': 0,
      'no-mixed-operators': 0,
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'no-useless-escape': 0,
      'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
      'max-classes-per-file': 0,
      'prefer-object-spread': 'warn',
      'import/no-unresolved': 0,
      'import/no-extraneous-dependencies': 0,
      'import/extensions': 0,
      'react/jsx-no-bind': 0,
      'react/no-did-mount-set-state': 1,
      'react/no-did-update-set-state': 1,
      'react/forbid-prop-types': 1,
      'react/jsx-no-target-blank': 1,
      'react/jsx-wrap-multilines': 0,
      'react/no-string-refs': 1,
      'react/no-unused-prop-types': 1,
      'react/destructuring-assignment': 0,
      'react/require-default-props': 0,
      'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: true }],
      'react/jsx-one-expression-per-line': 0,
      'react/static-property-placement': 0,
      'react/state-in-constructor': 0,
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/no-static-element-interactions': 0,
      'jsx-a11y/anchor-has-content': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/mouse-events-have-key-events': 0,
      'jsx-a11y/no-autofocus': 0,
      'jsx-a11y/label-has-associated-control': [
        2,
        {
          labelComponents: ['CustomInputLabel'],
          labelAttributes: ['label'],
          controlComponents: ['CustomInput'],
          depth: 3,
        },
      ],
      'jsx-a11y/label-has-for': [
        2,
        {
          components: ['Label'],
          required: {
            some: ['nesting', 'id'],
          },
          allowChildren: true,
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-props-no-spreading': 0,
      'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
      'react/prop-types': 0,
      'react/function-component-definition': [
        2,
        { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
      ],
      'react/no-unstable-nested-components': 'warn',
      'react/jsx-no-constructed-context-values': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/camelcase': 0,
      '@typescript-eslint/no-empty-function': 0,
      'no-use-before-define': 0,
      '@typescript-eslint/no-use-before-define': 1,
      'no-undef': 0,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'import/no-import-module-exports': 0,
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': 'error',
      'typescript-sort-keys/interface': [
        'error',
        'asc',
        { caseSensitive: true, natural: false, requiredFirst: true },
      ],
      'css-modules/no-unused-class': 'warn', // Предупреждение для неиспользуемых классов
      'css-modules/no-undef-class': 'error', // Ошибка для неопределенных классов
    },
  },
];
