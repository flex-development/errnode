/**
 * @file Error Models - ERR_IMPORT_ASSERTION_TYPE_MISSING
 * @module errnode/models/ERR_IMPORT_ASSERTION_TYPE_MISSING
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1166-L1167
 */

import { ErrorCode } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/types'
import { createNodeError } from '#src/utils'

/**
 * `ERR_IMPORT_ASSERTION_TYPE_MISSING` model.
 *
 * Thrown when an import assertion is missing, preventing the specified module
 * from being imported.
 *
 * @see https://nodejs.org/api/errors.html#err_import_assertion_type_missing
 *
 * @class
 *
 * @param {string} id - Id of module that cannot be imported
 * @param {string} type - Required import assertion type
 * @return {NodeError<TypeError>} `TypeError` instance
 */
const ERR_IMPORT_ASSERTION_TYPE_MISSING: NodeErrorConstructor<
  TypeErrorConstructor,
  [string, string]
> = createNodeError(
  ErrorCode.ERR_IMPORT_ASSERTION_TYPE_MISSING,
  TypeError,
  "Module '%s' needs an import assertion of type '%s'"
)

export default ERR_IMPORT_ASSERTION_TYPE_MISSING
