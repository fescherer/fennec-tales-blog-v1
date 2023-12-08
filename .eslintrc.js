// .eslintrc.js
const process = require('node:process')

process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  // "parser": "@typescript-eslint/parser",
  extends: ['@antfu', 'next/core-web-vitals', 'plugin:tailwindcss/recommended'],
  plugins: ['react'],
  rules: {
    'tailwindcss/no-custom-classname': ['error', {
      whitelist: ['animate__.*'],
    }],

    '@typescript-eslint/brace-style': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', { tab: 2 }],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always', beforeClosing: 'never' }],

    'react/button-has-type': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/display-name': 'error',
    'react/jsx-fragments': 'error',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.jsx', '.tsx'] },
    ],
    'react/jsx-equals-spacing': 'off',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-boolean-value': 'error',
    'react/iframe-missing-sandbox': 'error',
    'react/hook-use-state': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-leaked-render': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-max-depth': ['error', { max: 4 }],
    'react/jsx-key': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': ['error'],
    'react/no-array-index-key': 'warn',
    'react/no-children-prop': 'warn',
    'react/no-danger': 'warn',
    'react/no-danger-with-children': 'warn',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'error',
    'react/no-namespace': 'warn',
    'react/no-render-return-value': 'warn',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/no-unused-prop-types': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'warn',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/jsx-max-props-per-line': ['error', { maximum: { single: 4, multi: 1 } }],
  },
  overrides: [
    {
      files: ['*.mdx'],
      extends: 'plugin:mdx/recommended',
      rules: {
        '@typescript-eslint/indent': 'off',
      },
    },
  ],
}
