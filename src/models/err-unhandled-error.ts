/**
 * @file Error Models - ERR_UNHANDLED_ERROR
 * @module errnode/models/ERR_UNHANDLED_ERROR
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1675-L1682
 */

import { ErrorCode } from '#src/enums'
import type { NodeErrorConstructor } from '#src/interfaces'
import type { MessageFn, NodeError } from '#src/types'
import { createNodeError } from '#src/utils'

/**
 * `ERR_UNHANDLED_ERROR` model.
 *
 * Thrown when an unhandled error occurs.
 *
 * @see https://nodejs.org/api/errors.html#err_unhandled_error
 *
 * @class
 *
 * @param {string?} [err=''] - Stringified error
 * @return {NodeError} New `Error` instance
 */
const ERR_UNHANDLED_ERROR: NodeErrorConstructor<
  Error,
  MessageFn<[string?]>
> = createNodeError(
  ErrorCode.ERR_UNHANDLED_ERROR,
  Error,
  /**
   * Creates an [`ERR_UNHANDLED_ERROR`][1] message.
   *
   * [1]: https://nodejs.org/api/errors.html#err_unhandled_error
   *
   * @param {string?} [err=''] - Stringified error
   * @return {string} Error message
   */
  (err: string = ''): string => {
    /**
     * Error message.
     *
     * @const {string} message
     */
    const message: string = 'Unhandled error.'

    return err.length > 0 ? `${message} (${err})` : message
  }
)

export default ERR_UNHANDLED_ERROR
