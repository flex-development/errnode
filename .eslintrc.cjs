/**
 * @file ESLint Configuration - Root
 * @module config/eslint
 * @see https://eslint.org/docs/user-guide/configuring
 */

/**
 * @type {import('eslint').Linter.Config}
 * @const config - ESLint configuration object
 */
const config = {
  extends: ['./.eslintrc.base.cjs'],
  overrides: [
    ...require('./.eslintrc.base.cjs').overrides,
    {
      files: ['scratch.ts'],
      rules: {
        'unicorn/no-hex-escape': 0,
        'unicorn/string-content': 0
      }
    },
    {
      files: ['src/internal/format-message.ts'],
      rules: {
        'unicorn/error-message': 0
      }
    }
  ],
  root: true
}

module.exports = config
