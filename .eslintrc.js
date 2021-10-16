const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc.json'), 'utf8'),
);

module.exports = {
  extends: ['prettier', 'next/core-web-vitals', 'plugin:jest-dom/recommended'],
  plugins: ['prettier', 'jest-dom'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'no-unused-vars': 2,
  },
};
