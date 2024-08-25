/**
 * @file Errors - ERR_INVALID_ARG_VALUE
 * @module errnode/errors/ERR_INVALID_ARG_VALUE
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1444-L1451
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import { DOT, truncate } from '@flex-development/tutils'
import { inspect } from 'node-inspect-extracted'

/**
 * `ERR_INVALID_ARG_VALUE` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_invalid_arg_value
 *
 * @extends {NodeError<codes.ERR_INVALID_ARG_VALUE>}
 * @extends {TypeError}
 */
interface ErrInvalidArgValue
  extends NodeError<codes.ERR_INVALID_ARG_VALUE>, TypeError {}

/**
 * `ERR_INVALID_ARG_VALUE` message arguments.
 */
type Args = [name: string, value: unknown, reason?: string | null | undefined]

/**
 * `ERR_INVALID_ARG_VALUE` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrInvalidArgValue}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrInvalidArgValue,Args>}
 */
interface ErrInvalidArgValueConstructor
  extends NodeErrorConstructor<ErrInvalidArgValue, Args> {
  /**
   * Create a new `ERR_INVALID_ARG_VALUE` error.
   *
   * @see {@linkcode ErrInvalidArgValue}
   *
   * @param {string} name
   *  Name of invalid argument or property
   * @param {unknown} value
   *  The invalid value
   * @param {string | null | undefined} [reason]
   *  Reason for invalidity
   * @return {ErrInvalidArgValue}
   */
  new (
    name: string,
    value: unknown,
    reason?: string | null | undefined
  ): ErrInvalidArgValue
}

/**
 * `ERR_INVALID_ARG_VALUE` model.
 *
 * Thrown when an invalid or unsupported value is passed for a given argument or
 * property.
 *
 * @see {@linkcode ErrInvalidArgValueConstructor}
 *
 * @type {ErrInvalidArgValueConstructor}
 *
 * @class
 */
const ERR_INVALID_ARG_VALUE: ErrInvalidArgValueConstructor = E(
  codes.ERR_INVALID_ARG_VALUE,
  TypeError,
  /**
   * @param {string} name
   *  Name of invalid argument or property
   * @param {unknown} value
   *  The invalid value
   * @param {string | null | undefined} [reason]
   *  Reason for invalidity
   * @return {string}
   *  Error message
   */
  function message(
    name: string,
    value: unknown,
    reason: string | null | undefined = null
  ): string {
    /**
     * Inspected {@linkcode value}.
     *
     * @var {string} inspected
     */
    let inspected: string = inspect(value)

    /**
     * Error message.
     *
     * @var {string} message
     */
    let message: string = 'The'

    message += ` ${name.includes(DOT) ? 'property' : 'argument'} '${name}'`

    if ((reason ??= 'is invalid')) {
      message += ` ${reason}`
      message = message.trim()
    }

    /* c8 ignore next 3 */ if (inspected.length > 128) {
      inspected = truncate(inspected, 128) + DOT.repeat(3)
    }

    message += `${DOT} Received ${inspected}`

    return message
  }
)

export {
  ERR_INVALID_ARG_VALUE as default,
  type ErrInvalidArgValue,
  type Args as ErrInvalidArgValueArgs,
  type ErrInvalidArgValueConstructor
}
