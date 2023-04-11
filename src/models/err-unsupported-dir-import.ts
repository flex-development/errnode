/**
 * @file Error Models - ERR_UNSUPPORTED_DIR_IMPORT
 * @module errnode/models/ERR_UNSUPPORTED_DIR_IMPORT
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1696-L1697
 */

import { ErrorCode } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/types'
import { createNodeError } from '#src/utils'

/**
 * `ERR_UNSUPPORTED_DIR_IMPORT` model.
 *
 * Thrown when a directory URL is `import`ed.
 *
 * @see https://nodejs.org/api/errors.html#err_unsupported_dir_import
 *
 * @class
 *
 * @param {string} id - Module id of directory
 * @param {string} base - Id of module `id` was imported from
 * @return {NodeError} `Error` instance
 */
const ERR_UNSUPPORTED_DIR_IMPORT: NodeErrorConstructor<
  ErrorConstructor,
  [string, string]
> = createNodeError(
  ErrorCode.ERR_UNSUPPORTED_DIR_IMPORT,
  Error,
  "Directory import '%s' is not supported resolving ES modules imported from %s"
)

export default ERR_UNSUPPORTED_DIR_IMPORT
