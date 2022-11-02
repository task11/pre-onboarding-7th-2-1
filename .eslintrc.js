module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    semi: ['error', 'always'],
    'semi-spacing': ['error'],
    curly: ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'import/no-unresolved': ['error', { commonjs: true, amd: true }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'no-useless-escape': ['error'],
    'linebreak-style': [0, 'error', 'windows'],
    'react/destructuring-assignment': ['error', 'always'],
    'jsx-quotes': ['error', 'prefer-single'],
    'switch-colon-spacing': ['error'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'react/prop-types': 'off',
    'no-alert': 'off',
    'object-curly-newline': 'off',
    'class-methods-use-this': 'off',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/no-array-index-key': 'off'
  }
};
