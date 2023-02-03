/**
 * @file Error Models - ERR_INVALID_RETURN_VALUE
 * @module errnode/models/ERR_INVALID_RETURN_VALUE
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1367-L1372
 */

import { ErrorCode } from '#src/enums'
import type { MessageFn, NodeError, NodeErrorConstructor } from '#src/types'
import { createNodeError, determineSpecificType } from '#src/utils'

/**
 * `ERR_INVALID_RETURN_VALUE` model.
 *
 * Thrown when a function does not return an expected value type on execution,
 * such as when a function is expected to return a promise.
 *
 * @see https://nodejs.org/api/errors.html#err_invalid_return_value
 *
 * @class
 *
 * @param {string} expected - Expected return value type
 * @param {string} name - Name of function that returned invalid value type
 * @param {unknown} value - Value supplied by user
 * @return {NodeError<TypeError>} `TypeError` instance
 */
const ERR_INVALID_RETURN_VALUE: NodeErrorConstructor<
  TypeErrorConstructor,
  MessageFn<[string, string, unknown]>
> = createNodeError(
  ErrorCode.ERR_INVALID_RETURN_VALUE,
  TypeError,
  /**
   * Creates a [`ERR_INVALID_RETURN_VALUE`][1] message.
   *
   * [1]: https://nodejs.org/api/errors.html#err_invalid_return_value
   *
   * @param {string} expected - Expected return value type
   * @param {string} name - Name of function that returned invalid value type
   * @param {unknown} value - Value supplied by user
   * @return {string} Error message
   */
  (expected: string, name: string, value: unknown): string => {
    // prettier-ignore
    return `Expected ${expected} to be returned from the '${name}' function but got ${determineSpecificType(value)}.`
  }
)

export default ERR_INVALID_RETURN_VALUE
