module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  env: {
    browser: true,
    jest: true
  },
  rules: {
    'no-console': 'error',
    'no-restricted-syntax': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/no-deprecated': 'warn',
    'react/prop-types': 'warn',
    'react/require-default-props': 'warn',
    'react/sort-comp': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'prefer-object-spread': 'error',
    'prefer-template': 'off',
    'prettier/prettier': 'error'
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  }
}
