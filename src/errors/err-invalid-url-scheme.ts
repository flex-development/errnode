/**
 * @file Errors - ERR_INVALID_URL_SCHEME
 * @module errnode/errors/ERR_INVALID_URL_SCHEME
 * @see https://github.com/nodejs/node/blob/v22.8.0/lib/internal/errors.js#L1543-L1552
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import formatList from '#src/utils/format-list'
import { ok } from 'devlop'

/**
 * `ERR_INVALID_URL_SCHEME` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_invalid_url_scheme
 *
 * @extends {NodeError<codes.ERR_INVALID_URL_SCHEME>}
 * @extends {TypeError}
 */
interface ErrInvalidUrlScheme
  extends NodeError<codes.ERR_INVALID_URL_SCHEME>, TypeError {}

/**
 * `ERR_INVALID_URL_SCHEME` message arguments.
 */
type Args = [expected: string | readonly string[]]

/**
 * `ERR_INVALID_URL_SCHEME` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrInvalidUrlScheme}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrInvalidUrlScheme,Args>}
 */
interface ErrInvalidUrlSchemeConstructor
  extends NodeErrorConstructor<ErrInvalidUrlScheme, Args> {
  /**
   * Create a new `ERR_INVALID_URL_SCHEME` error.
   *
   * @see {@linkcode ErrInvalidUrlScheme}
   *
   * @param {ReadonlyArray<string> | string} expected
   *  Expected scheme or list of expected schemes
   * @return {ErrInvalidUrlScheme}
   */
  new (expected: string | readonly string[]): ErrInvalidUrlScheme
}

/**
 * `ERR_INVALID_URL_SCHEME` model.
 *
 * Thrown when an attempt is made to use a URL of an incompatible scheme
 * (protocol).
 *
 * @see {@linkcode ErrInvalidUrlSchemeConstructor}
 *
 * @type {ErrInvalidUrlSchemeConstructor}
 *
 * @class
 */
const ERR_INVALID_URL_SCHEME: ErrInvalidUrlSchemeConstructor = E(
  codes.ERR_INVALID_URL_SCHEME,
  TypeError,
  /**
   * @param {ReadonlyArray<string> | string} expected
   *  Expected scheme or list of expected schemes
   * @return {string}
   *  Error message
   */
  function message(expected: string | readonly string[]): string {
    ok(expected.length, 'expected `expected` to not be empty')

    /**
     * Error message.
     *
     * @var {string} message
     */
    let message: string = 'The URL must be '

    message += Array.isArray(expected) && expected.length > 1
      ? 'one of scheme'
      : 'of scheme'

    message += ` ${formatList(expected, 'or')}`

    return message
  }
)

export {
  ERR_INVALID_URL_SCHEME as default,
  type ErrInvalidUrlScheme,
  type Args as ErrInvalidUrlSchemeArgs,
  type ErrInvalidUrlSchemeConstructor
}
