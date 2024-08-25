/**
 * @file Errors - ERR_INVALID_RETURN_VALUE
 * @module errnode/errors/ERR_INVALID_RETURN_VALUE
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1518-L1523
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import { determineSpecificType, formatList } from '#src/utils'

/**
 * `ERR_INVALID_RETURN_VALUE` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_invalid_return_value
 *
 * @extends {NodeError<codes.ERR_INVALID_RETURN_VALUE>}
 * @extends {TypeError}
 */
interface ErrInvalidReturnValue
  extends NodeError<codes.ERR_INVALID_RETURN_VALUE>, TypeError {}

/**
 * `ERR_INVALID_RETURN_VALUE` message arguments.
 */
type Args = [expected: string | readonly string[], name: string, value: unknown]

/**
 * `ERR_INVALID_RETURN_VALUE` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrInvalidReturnValue}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrInvalidReturnValue,Args>}
 */
interface ErrInvalidReturnValueConstructor
  extends NodeErrorConstructor<ErrInvalidReturnValue, Args> {
  /**
   * Create a new `ERR_INVALID_RETURN_VALUE` error.
   *
   * @see {@linkcode ErrInvalidReturnValue}
   *
   * @param {ReadonlyArray<string> | string} expected
   *  Expected type(s)
   * @param {string} name
   *  Name of function that returned invalid value type
   * @param {unknown} value
   *  Value supplied by user
   * @return {ErrInvalidReturnValue}
   */
  new (
    expected: string | readonly string[],
    name: string,
    value: unknown
  ): ErrInvalidReturnValue
}

/**
 * `ERR_INVALID_RETURN_VALUE` model.
 *
 * Thrown when a function does not return an expected value type on execution,
 * such as when a function is expected to return a promise.
 *
 * @see https://nodejs.org/api/errors.html#err_invalid_return_value
 *
 * @see {@linkcode ErrInvalidReturnValueConstructor}
 *
 * @type {ErrInvalidReturnValueConstructor}
 *
 * @class
 */
const ERR_INVALID_RETURN_VALUE: ErrInvalidReturnValueConstructor = E(
  codes.ERR_INVALID_RETURN_VALUE,
  TypeError,
  /**
   * @param {ReadonlyArray<string> | string} expected
   *  Expected type(s)
   * @param {string} name
   *  Name of function that returned invalid value type
   * @param {unknown} value
   *  Value supplied by user
   * @return {string}
   *  Error message
   */
  function message(
    expected: string | readonly string[],
    name: string,
    value: unknown
  ): string {
    return `Expected ${formatList(expected, 'or')} to be returned` +
      ` from the '${name}' function but got ${determineSpecificType(value)}.`
  }
)

export {
  ERR_INVALID_RETURN_VALUE as default,
  type ErrInvalidReturnValue,
  type Args as ErrInvalidReturnValueArgs,
  type ErrInvalidReturnValueConstructor
}
