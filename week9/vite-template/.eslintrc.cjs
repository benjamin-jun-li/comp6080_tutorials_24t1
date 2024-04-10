module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true, 
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-refresh', 'react'],
  rules: {
    'linebreak-style': 0, 
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    semi: 0,
    'comma-dangle': 0,
    'react/prop-types': 0,
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
