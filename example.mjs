import { ERR_INVALID_ARG_TYPE, isNodeError } from '@flex-development/errnode'

/**
 * Ensure `value` is a string.
 *
 * @see {@linkcode ErrInvalidArgType}
 *
 * @param {unknown} value
 *  Value supplied by user
 * @param {string} name
 *  Name of invalid argument or property
 * @return {value is string}
 *  `true` if `value` is a string
 * @throws {import('@flex-development/errnode').ErrInvalidArgType}
 *  If `value` is not a string
 */
function validateString(value, name) {
  if (typeof value === 'string') return true
  throw new ERR_INVALID_ARG_TYPE(name, 'string', value)
}

try {
  validateString(null, 'path')
} catch (e) {
  console.log('isNodeError:', isNodeError(e))
  console.log('TypeError:', e instanceof TypeError, '\n')
  throw e
}
