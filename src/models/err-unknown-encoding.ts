/**
 * @file Error Models - ERR_UNKNOWN_ENCODING
 * @module errnode/models/ERR_UNKNOWN_ENCODING
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1685
 */

import { ErrorCode } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/types'
import { createNodeError } from '#src/utils'

/**
 * `ERR_UNKNOWN_ENCODING` model.
 *
 * Thrown when an invalid or unknown encoding option is passed to a Node.js API.
 *
 * @see https://nodejs.org/api/errors.html#err_unknown_encoding
 *
 * @class
 *
 * @param {string} encoding - Invalid or unknown encoding
 * @return {NodeError<TypeError>} `TypeError` instance
 */
const ERR_UNKNOWN_ENCODING: NodeErrorConstructor<
  TypeErrorConstructor,
  [string]
> = createNodeError(
  ErrorCode.ERR_UNKNOWN_ENCODING,
  TypeError,
  'Unknown encoding: %s'
)

export default ERR_UNKNOWN_ENCODING
