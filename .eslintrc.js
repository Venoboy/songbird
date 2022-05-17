module.exports = {
  env: {
    browser: true,
    es6: true,
    amd: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/jsx-runtime",
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'react/no-set-state': 'off',
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    requireConfigFile: false,
    sourceType: 'module',
    // allowImportExportEverywhere: true,
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
