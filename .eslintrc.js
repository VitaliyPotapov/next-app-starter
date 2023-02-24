module.exports = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'prettier', // Make sure this is the last
  ],

  plugins: ['@typescript-eslint'],

  rules: {
    'no-console': 'error',
  },

  overrides: [
    {
      files: ['*.ts', ',*.tsx'],

      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier', // Make sure this is the last again
      ],

      // required for plugin:@typescript-eslint/recommended-requiring-type-checking
      // see: https://typescript-eslint.io/linting/typed-linting
      parserOptions: {
        project: './tsconfig.json',
      },

      rules: {
        // Recommended by typescript-eslint as ts handles no-undef better
        // See: https://typescript-eslint.io/linting/troubleshooting/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
        'no-undef': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        // allow require in *.config.js files
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
