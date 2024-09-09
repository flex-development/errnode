/**
 * @file Errors - ERR_INVALID_THIS
 * @module errnode/errors/ERR_INVALID_THIS
 * @see https://github.com/nodejs/node/blob/v22.8.0/lib/internal/errors.js#L1529
 */

import E from '#e'
import { codes } from '#src/enums'
import type {
  NodeError,
  NodeErrorConstructor,
  Stringifiable
} from '#src/interfaces'

/**
 * `ERR_INVALID_THIS` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_invalid_this
 *
 * @extends {NodeError<codes.ERR_INVALID_THIS>}
 * @extends {TypeError}
 */
interface ErrInvalidThis extends NodeError<codes.ERR_INVALID_THIS>, TypeError {}

/**
 * `ERR_INVALID_THIS` message arguments.
 *
 * @see {@linkcode Stringifiable}
 */
type Args = [expected: Stringifiable]

/**
 * `ERR_INVALID_THIS` constructor.
 *
 * @see {@linkcode ErrInvalidThis}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrInvalidThis,Args>}
 */
interface ErrInvalidThisConstructor
  extends NodeErrorConstructor<ErrInvalidThis, Args> {
  /**
   * Create a new `ERR_INVALID_THIS` error.
   *
   * @see {@linkcode ErrInvalidThis}
   * @see {@linkcode Stringifiable}
   *
   * @param {Stringifiable} expected
   *  Expected type of `this`
   * @return {ErrInvalidThis}
   */
  new (expected: Stringifiable): ErrInvalidThis
}

/**
 * `ERR_INVALID_THIS` model.
 *
 * Thrown when a Node.js API function is called with an incompatible `this`
 * value.
 *
 * @see {@linkcode ErrInvalidThisConstructor}
 *
 * @type {ErrInvalidThisConstructor}
 *
 * @class
 */
const ERR_INVALID_THIS: ErrInvalidThisConstructor = E(
  codes.ERR_INVALID_THIS,
  TypeError,
  'Value of "this" must be of type %s'
)

export {
  ERR_INVALID_THIS as default,
  type ErrInvalidThis,
  type Args as ErrInvalidThisArgs,
  type ErrInvalidThisConstructor
}
