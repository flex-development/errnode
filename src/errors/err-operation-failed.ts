/**
 * @file Errors - ERR_OPERATION_FAILED
 * @module errnode/errors/ERR_OPERATION_FAILED
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1607
 */

import E from '#e'
import { codes } from '#src/enums'
import type {
  NodeError,
  NodeErrorConstructor,
  Stringifiable
} from '#src/interfaces'

/**
 * `ERR_OPERATION_FAILED` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_operation_failed
 *
 * @extends {NodeError<codes.ERR_OPERATION_FAILED>}
 */
interface ErrOperationFailed extends NodeError<codes.ERR_OPERATION_FAILED> {}

/**
 * `ERR_OPERATION_FAILED` message arguments.
 *
 * @see {@linkcode Stringifiable}
 */
type Args = [reason: Stringifiable]

/**
 * `ERR_OPERATION_FAILED` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrOperationFailed}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrOperationFailed,Args>}
 */
interface ErrOperationFailedConstructor
  extends NodeErrorConstructor<ErrOperationFailed, Args> {
  /**
   * Create a new `ERR_OPERATION_FAILED` error.
   *
   * @see {@linkcode ErrOperationFailed}
   * @see {@linkcode Stringifiable}
   *
   * @param {Stringifiable} reason
   *  Reason for operation failure
   * @return {ErrOperationFailed}
   */
  new (reason: Stringifiable): ErrOperationFailed
}

/**
 * `ERR_OPERATION_FAILED` model.
 *
 * Thrown when an operation has failed. Typically used to signal the general
 * failure of an asynchronous operation.
 *
 * @see {@linkcode ErrOperationFailedConstructor}
 *
 * @type {ErrOperationFailedConstructor}
 *
 * @class
 */
const ERR_OPERATION_FAILED: ErrOperationFailedConstructor = E(
  codes.ERR_OPERATION_FAILED,
  Error,
  'Operation failed: %s'
)

export {
  ERR_OPERATION_FAILED as default,
  type ErrOperationFailed,
  type Args as ErrOperationFailedArgs,
  type ErrOperationFailedConstructor
}
