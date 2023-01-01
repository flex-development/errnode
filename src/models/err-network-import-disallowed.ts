/**
 * @file Error Models - ERR_NETWORK_IMPORT_DISALLOWED
 * @module errnode/models/ERR_NETWORK_IMPORT_DISALLOWED
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1485-L1486
 */

import { ErrorCode } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/types'
import { createNodeError } from '#src/utils'

/**
 * `ERR_NETWORK_IMPORT_DISALLOWED` model.
 *
 * Thrown when a network module attempts to load another module that it is not
 * allowed to load.
 *
 * @see https://nodejs.org/api/errors.html#err_network_import_disallowed
 *
 * @class
 *
 * @param {string} specifier - Invalid module specifier
 * @param {string} base - Id of module `specifier` was imported from
 * @param {string} reason - Reason for error
 * @return {NodeError} `Error` instance
 */
const ERR_NETWORK_IMPORT_DISALLOWED: NodeErrorConstructor<
  ErrorConstructor,
  [string, string, string]
> = createNodeError(
  ErrorCode.ERR_NETWORK_IMPORT_DISALLOWED,
  Error,
  "import of '%s' by %s is not supported: %s"
)

export default ERR_NETWORK_IMPORT_DISALLOWED
