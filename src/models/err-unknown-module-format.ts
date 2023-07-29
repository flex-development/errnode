/**
 * @file Error Models - ERR_UNKNOWN_MODULE_FORMAT
 * @module errnode/models/ERR_UNKNOWN_MODULE_FORMAT
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1693-L1694
 */

import { ErrorCode } from '#src/enums'
import type { NodeErrorConstructor } from '#src/interfaces'
import type { NodeError } from '#src/types'
import { createNodeError } from '#src/utils'
import type { Times } from '@flex-development/tutils'

/**
 * `ERR_UNKNOWN_MODULE_FORMAT` model.
 *
 * Thrown when an attempt is made to load a module with an unknown or
 * unsupported format.
 *
 * @see https://nodejs.org/api/errors.html#err_unknown_module_format
 *
 * @class
 *
 * @param {string} format - Unknown or unsupported format
 * @param {string} id - Id of module with `format`
 * @return {NodeError<RangeError>} New `RangeError` instance
 */
const ERR_UNKNOWN_MODULE_FORMAT: NodeErrorConstructor<
  RangeError,
  Times<2, string>
> = createNodeError(
  ErrorCode.ERR_UNKNOWN_MODULE_FORMAT,
  RangeError,
  'Unknown module format: %s for URL %s'
)

export default ERR_UNKNOWN_MODULE_FORMAT
