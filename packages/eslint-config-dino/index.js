module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-sort-props': ['warn', {
      callbacksLast: true,
      reservedFirst: true,
    }],
    'prettier/prettier': 'error',
    'import/no-anonymous-default-export': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'prefer-const': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '(^_$)|(^__.*$)',
        varsIgnorePattern: '(^_$)|(^__.*$)',
        caughtErrorsIgnorePattern: '(^_$)|(^__.*$)',
      },
    ],
  },
};
