/**
 * @file ESLint Configuration - Root
 * @module config/eslint
 * @see https://eslint.org/docs/user-guide/configuring
 */

/**
 * Root eslint configuration object.
 *
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...(await import('./eslint.base.config.mjs')).default,
  {
    ignores: [
      '!**/__fixtures__/**/dist/',
      '!**/__fixtures__/**/node_modules/',
      '!**/typings/**/dist/',
      '**/.yarn/',
      '**/CHANGELOG.md',
      '**/LICENSE.md',
      '**/RELEASE_NOTES.md',
      '**/coverage/',
      '**/dist/'
    ]
  },
  {
    files: ['example.mjs'],
    rules: {
      'jsdoc/require-file-overview': 0
    }
  },
  {
    files: ['src/internal/stack-trace.ts'],
    rules: {
      'promise/prefer-await-to-callbacks': 0
    }
  }
]
