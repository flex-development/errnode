/**
 * @file Errors - ERR_METHOD_NOT_IMPLEMENTED
 * @module errnode/errors/ERR_METHOD_NOT_IMPLEMENTED
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1564
 */

import E from '#e'
import { codes } from '#src/enums'
import type {
  NodeError,
  NodeErrorConstructor,
  Stringifiable
} from '#src/interfaces'

/**
 * `ERR_METHOD_NOT_IMPLEMENTED` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_method_not_implemented
 *
 * @extends {NodeError<codes.ERR_METHOD_NOT_IMPLEMENTED>}
 */
interface ErrMethodNotImplemented
  extends NodeError<codes.ERR_METHOD_NOT_IMPLEMENTED> {}

/**
 * `ERR_METHOD_NOT_IMPLEMENTED` message arguments.
 *
 * @see {@linkcode Stringifiable}
 */
type Args = [method: Stringifiable]

/**
 * `ERR_METHOD_NOT_IMPLEMENTED` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrMethodNotImplemented}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrMethodNotImplemented,Args>}
 */
interface ErrMethodNotImplementedConstructor
  extends NodeErrorConstructor<ErrMethodNotImplemented, Args> {
  /**
   * Create a new `ERR_METHOD_NOT_IMPLEMENTED` error.
   *
   * @see {@linkcode ErrMethodNotImplemented}
   * @see {@linkcode Stringifiable}
   *
   * @param {Stringifiable} method
   *  Method name
   * @return {ErrMethodNotImplemented}
   */
  new (method: Stringifiable): ErrMethodNotImplemented
}

/**
 * `ERR_METHOD_NOT_IMPLEMENTED` model.
 *
 * Thrown when a method is required but not implemented.
 *
 * @see {@linkcode ErrMethodNotImplementedConstructor}
 *
 * @type {ErrMethodNotImplementedConstructor}
 *
 * @class
 */
const ERR_METHOD_NOT_IMPLEMENTED: ErrMethodNotImplementedConstructor = E(
  codes.ERR_METHOD_NOT_IMPLEMENTED,
  Error,
  'The %s method is not implemented'
)

export {
  ERR_METHOD_NOT_IMPLEMENTED as default,
  type ErrMethodNotImplemented,
  type Args as ErrMethodNotImplementedArgs,
  type ErrMethodNotImplementedConstructor
}
