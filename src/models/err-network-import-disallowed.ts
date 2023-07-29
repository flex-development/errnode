/**
 * @file Error Models - ERR_NETWORK_IMPORT_DISALLOWED
 * @module errnode/models/ERR_NETWORK_IMPORT_DISALLOWED
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1485-L1486
 */

import { ErrorCode } from '#src/enums'
import type { NodeErrorConstructor } from '#src/interfaces'
import type { NodeError } from '#src/types'
import { createNodeError } from '#src/utils'
import type { Times } from '@flex-development/tutils'

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
 * @return {NodeError} New `Error` instance
 */
const ERR_NETWORK_IMPORT_DISALLOWED: NodeErrorConstructor<
  Error,
  Times<3, string>
> = createNodeError(
  ErrorCode.ERR_NETWORK_IMPORT_DISALLOWED,
  Error,
  "import of '%s' by %s is not supported: %s"
)

export default ERR_NETWORK_IMPORT_DISALLOWED
