module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  settings: {
    jsx: true
  },
  plugins: [
    'react'
  ],
  extends: 'airbnb',
  rules: {
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to']
    }],
    'jsx-a11y/media-has-caption': 0,
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
  },
  globals: {
  }
};
