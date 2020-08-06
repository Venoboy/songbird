module.exports = {
  'ecmaFeatures': {
    'jsx': true,
    modules: true,
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended'
  ],
  'rules': {
    'react/no-set-state': 'off'
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    // allowImportExportEverywhere: true,
  },
  'plugins': [
    'react'
  ]
};
