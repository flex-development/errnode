/**
 * @file Error Models - ERR_MISSING_OPTION
 * @module errnode/models/ERR_MISSING_OPTION
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1469
 */

import { ErrorCode } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/types'
import { createNodeError } from '#src/utils'

/**
 * `ERR_MISSING_OPTION` model.
 *
 * Thrown when a required option is missing. For APIs that accept options
 * objects, some options might be mandatory.
 *
 * @see https://nodejs.org/api/errors.html#err_missing_option
 *
 * @class
 *
 * @param {string} option - Option name
 * @return {NodeError<TypeError>} `TypeError` instance
 */
const ERR_MISSING_OPTION: NodeErrorConstructor<TypeErrorConstructor, [string]> =
  createNodeError(ErrorCode.ERR_MISSING_OPTION, TypeError, '%s is required')

export default ERR_MISSING_OPTION
