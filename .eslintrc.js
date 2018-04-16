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
    'comma-dangle': ['error', 'never'],
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to']
    }],
    'jsx-a11y/media-has-caption': 0,
    'keyword-spacing': 0,
    'max-len': 0,
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-return-assign': 0,
    'object-curly-newline': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-filename-extension': 0,
    'react/no-did-update-set-state': 0,
    'react/no-unescaped-entities': 0,
    'space-before-function-paren': 0
  },
  globals: {
  }
};
