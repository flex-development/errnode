/**
 * @file Errors - ERR_UNHANDLED_ERROR
 * @module errnode/errors/ERR_UNHANDLED_ERROR
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1807-L1814
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'

/**
 * `ERR_UNHANDLED_ERROR` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_unhandled_error
 *
 * @extends {NodeError<codes.ERR_UNHANDLED_ERROR>}
 */
interface ErrUnhandledError extends NodeError<codes.ERR_UNHANDLED_ERROR> {}

/**
 * `ERR_UNHANDLED_ERROR` message arguments.
 */
type Args = [err?: string | null | undefined]

/**
 * `ERR_UNHANDLED_ERROR` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrUnhandledError}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrUnhandledError,Args>}
 */
interface ErrUnhandledErrorConstructor
  extends NodeErrorConstructor<ErrUnhandledError, Args> {
  /**
   * Create a new `ERR_UNHANDLED_ERROR` error.
   *
   * @see {@linkcode ErrUnhandledError}
   *
   * @param {string | null | undefined} [err]
   *  Stringified error
   * @return {ErrUnhandledError}
   */
  new (err?: string | null | undefined): ErrUnhandledError
}

/**
 * `ERR_UNHANDLED_ERROR` model.
 *
 * Thrown when an unhandled error occurs.
 *
 * @see {@linkcode ErrUnhandledErrorConstructor}
 *
 * @type {ErrUnhandledErrorConstructor}
 *
 * @class
 */
const ERR_UNHANDLED_ERROR: ErrUnhandledErrorConstructor = E(
  codes.ERR_UNHANDLED_ERROR,
  Error,
  /**
   * @param {string | null | undefined} [err]
   *  Stringified error
   * @return {string} Error message
   */
  function message(err: string | null | undefined = null): string {
    /**
     * Error message.
     *
     * @const {string} message
     */
    const message: string = 'Unhandled error.'

    return err && err.length > 0 ? `${message} (${err})` : message
  }
)

export {
  ERR_UNHANDLED_ERROR as default,
  type ErrUnhandledError,
  type Args as ErrUnhandledErrorArgs,
  type ErrUnhandledErrorConstructor
}