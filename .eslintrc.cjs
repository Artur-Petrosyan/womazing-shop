module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-unused-vars': 'warn',
    'default-param-last': 'off',
    'linebreak-style': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-plusplus': 'off',
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'off',
    'no-multi-str': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
  },
};
