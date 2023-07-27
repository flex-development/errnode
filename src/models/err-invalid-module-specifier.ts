/**
 * @file Error Models - ERR_INVALID_MODULE_SPECIFIER
 * @module errnode/models/ERR_INVALID_MODULE_SPECIFIER
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1323-L1326
 */

import { ErrorCode } from '#src/enums'
import type { MessageFn, NodeError, NodeErrorConstructor } from '#src/types'
import { createNodeError } from '#src/utils'
import { trimEnd } from '@flex-development/tutils'

/**
 * `ERR_INVALID_MODULE_SPECIFIER` model.
 *
 * Thrown when an imported module string is an invalid URL, package name, or
 * package subpath specifier.
 *
 * @see https://nodejs.org/api/errors.html#err_invalid_module_specifier
 *
 * @class
 *
 * @param {string} request - Invalid module specifier
 * @param {string?} [reason=''] - Reason `request` is invalid
 * @param {string?} [base=''] - Id of module `request` was imported from
 * @return {NodeError<TypeError>} `TypeError` instance
 */
const ERR_INVALID_MODULE_SPECIFIER: NodeErrorConstructor<
  TypeErrorConstructor,
  MessageFn<[string, string?, string?]>
> = createNodeError(
  ErrorCode.ERR_INVALID_MODULE_SPECIFIER,
  TypeError,
  /**
   * Creates an [`ERR_INVALID_MODULE_SPECIFIER`][1] message.
   *
   * [1]: https://nodejs.org/api/errors.html#err_invalid_module_specifier
   *
   * @param {string} request - Invalid module specifier
   * @param {string?} [reason=''] - Reason `request` is invalid
   * @param {string?} [base=''] - Id of module `request` was imported from
   * @return {string} Error message
   */
  (request: string, reason: string = '', base: string = ''): string => {
    /**
     * Error message.
     *
     * @var {string} ret
     */
    let ret: string = trimEnd(`Invalid module '${request}' ${reason}`)

    // add details regarding where error occurred
    if (base) ret += ` imported from ${base}`

    return ret
  }
)

export default ERR_INVALID_MODULE_SPECIFIER
