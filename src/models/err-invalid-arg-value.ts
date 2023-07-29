/**
 * @file Error Models - ERR_INVALID_ARG_VALUE
 * @module errnode/models/ERR_INVALID_ARG_VALUE
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1287-L1294
 */

import { ErrorCode } from '#src/enums'
import type { NodeErrorConstructor } from '#src/interfaces'
import type { MessageFn, NodeError } from '#src/types'
import { createNodeError } from '#src/utils'
import { DOT, includes, truncate } from '@flex-development/tutils'
import { inspect } from 'node-inspect-extracted'

/**
 * `ERR_INVALID_ARG_VALUE` model.
 *
 * Thrown when an invalid or unsupported value is passed for a given argument or
 * property.
 *
 * @see https://nodejs.org/api/errors.html#err_invalid_arg_value
 *
 * @class
 *
 * @param {string} name - Name of invalid argument or property
 * @param {unknown} value - Value supplied by user
 * @param {string?} [reason='is invalid'] - Reason `value` is invalid
 * @return {NodeError<TypeError>} New `TypeError` instance
 */
const ERR_INVALID_ARG_VALUE: NodeErrorConstructor<
  TypeError,
  MessageFn<[string, unknown, string?]>
> = createNodeError(
  ErrorCode.ERR_INVALID_ARG_VALUE,
  TypeError,
  /**
   * Creates an [`ERR_INVALID_ARG_VALUE`][1] message.
   *
   * [1]: https://nodejs.org/api/errors.html#err_invalid_arg_value
   *
   * @param {string} name - Name of invalid argument or property
   * @param {unknown} value - Value supplied by user
   * @param {string?} [reason='is invalid'] - Reason `value` is invalid
   * @return {string} Error message
   */
  (name: string, value: unknown, reason: string = 'is invalid'): string => {
    /**
     * Inspected {@linkcode value}.
     *
     * @see https://nodejs.org/api/util.html#utilinspectobject-options
     *
     * @var {string} inspected
     */
    let inspected: string = inspect(value)

    /**
     * Error message.
     *
     * @var {string} ret
     */
    let ret: string = 'The'

    // trim inspected value
    if (inspected.length > 128) inspected = truncate(inspected, 131)

    // add stylized invalid argument or property name
    ret += ` ${includes(name, DOT) ? 'property' : 'argument'} '${name}'`

    // add reason for error
    if (reason) ret += ` ${reason}`

    // add inspected value
    ret += `${DOT} Received ${inspected}`

    return ret
  }
)

export default ERR_INVALID_ARG_VALUE
