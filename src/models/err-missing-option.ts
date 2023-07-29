/**
 * @file Error Models - ERR_MISSING_OPTION
 * @module errnode/models/ERR_MISSING_OPTION
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1469
 */

import { ErrorCode } from '#src/enums'
import type { NodeErrorConstructor } from '#src/interfaces'
import type { NodeError } from '#src/types'
import { createNodeError } from '#src/utils'
import type { Times } from '@flex-development/tutils'

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
 * @return {NodeError<TypeError>} New `TypeError` instance
 */
const ERR_MISSING_OPTION: NodeErrorConstructor<
  TypeError,
  Times<1, string>
> = createNodeError(ErrorCode.ERR_MISSING_OPTION, TypeError, '%s is required')

export default ERR_MISSING_OPTION
