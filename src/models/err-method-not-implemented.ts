/**
 * @file Error Models - ERR_METHOD_NOT_IMPLEMENTED
 * @module errnode/models/ERR_METHOD_NOT_IMPLEMENTED
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1442
 */

import { ErrorCode } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/types'
import { createNodeError } from '#src/utils'

/**
 * `ERR_METHOD_NOT_IMPLEMENTED` model.
 *
 * Thrown when a method is required but not implemented.
 *
 * @see https://nodejs.org/api/errors.html#err_method_not_implemented
 *
 * @class
 *
 * @param {string} method - Method that is not implemented
 * @return {NodeError} `Error` instance
 */
const ERR_METHOD_NOT_IMPLEMENTED: NodeErrorConstructor<
  ErrorConstructor,
  [string]
> = createNodeError(
  ErrorCode.ERR_METHOD_NOT_IMPLEMENTED,
  Error,
  'The %s method is not implemented'
)

export default ERR_METHOD_NOT_IMPLEMENTED
