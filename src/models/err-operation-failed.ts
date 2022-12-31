/**
 * @file Error Models - ERR_OPERATION_FAILED
 * @module errnode/models/ERR_OPERATION_FAILED
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1493
 */

import { ErrorCode } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/types'
import { createNodeError } from '#src/utils'

/**
 * `ERR_OPERATION_FAILED` model.
 *
 * Thrown when an operation has failed. Typically used to signal the general
 * failure of an asynchronous operation.
 *
 * @see https://nodejs.org/api/errors.html#err_operation_failed
 *
 * @class
 *
 * @param {string} reason - Reason for operation failure
 * @return {NodeError} `Error` instance
 */
const ERR_OPERATION_FAILED: NodeErrorConstructor<ErrorConstructor, [string]> =
  createNodeError(ErrorCode.ERR_OPERATION_FAILED, Error, 'Operation failed: %s')

export default ERR_OPERATION_FAILED
