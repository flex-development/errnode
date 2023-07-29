/**
 * @file Error Models - ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED
 * @module errnode/models/ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1168-L1169
 */

import { ErrorCode } from '#src/enums'
import type { NodeErrorConstructor } from '#src/interfaces'
import type { NodeError } from '#src/types'
import { createNodeError } from '#src/utils'
import type { Times } from '@flex-development/tutils'

/**
 * `ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED` model.
 *
 * Thrown when an import assertion is not supported by a version of Node.js.
 *
 * @see https://nodejs.org/api/errors.html#err_import_assertion_type_unsupported
 *
 * @class
 *
 * @param {string} type - Unsupported import assertion type
 * @return {NodeError<TypeError>} New `TypeError` instance
 */
const ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED: NodeErrorConstructor<
  TypeError,
  Times<1, string>
> = createNodeError(
  ErrorCode.ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED,
  TypeError,
  "Import assertion type '%s' is unsupported"
)

export default ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED
