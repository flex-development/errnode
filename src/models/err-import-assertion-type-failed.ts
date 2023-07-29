/**
 * @file Error Models - ERR_IMPORT_ASSERTION_TYPE_FAILED
 * @module errnode/models/ERR_IMPORT_ASSERTION_TYPE_FAILED
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1164-L1165
 */

import { ErrorCode } from '#src/enums'
import type { NodeErrorConstructor } from '#src/interfaces'
import type { NodeError } from '#src/types'
import { createNodeError } from '#src/utils'
import type { Times } from '@flex-development/tutils'

/**
 * `ERR_IMPORT_ASSERTION_TYPE_FAILED` model.
 *
 * Thrown when an import assertion has failed, preventing the specified module
 * from being imported.
 *
 * @see https://nodejs.org/api/errors.html#err_import_assertion_type_failed
 *
 * @class
 *
 * @param {string} id - Id of module that cannot be imported
 * @param {string} type - Invalid import assertion type
 * @return {NodeError<TypeError>} New `TypeError` instance
 */
const ERR_IMPORT_ASSERTION_TYPE_FAILED: NodeErrorConstructor<
  TypeError,
  Times<2, string>
> = createNodeError(
  ErrorCode.ERR_IMPORT_ASSERTION_TYPE_FAILED,
  TypeError,
  "Module '%s' is not of type '%s'"
)

export default ERR_IMPORT_ASSERTION_TYPE_FAILED
