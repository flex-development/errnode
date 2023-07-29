/**
 * @file Error Models - ERR_UNKNOWN_BUILTIN_MODULE
 * @module errnode/models/ERR_UNKNOWN_BUILTIN_MODULE
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1683
 */

import { ErrorCode } from '#src/enums'
import type { NodeErrorConstructor } from '#src/interfaces'
import type { NodeError } from '#src/types'
import { createNodeError } from '#src/utils'
import type { Times } from '@flex-development/tutils'

/**
 * `ERR_UNKNOWN_BUILTIN_MODULE` model.
 *
 * Thrown when an unknown [builtin module][1] is encountered.
 *
 * [1]: https://nodejs.org/api/module.html#modulebuiltinmodules
 *
 * @see https://nodejs.org/api/errors.html#err_unknown_builtin_module
 *
 * @class
 *
 * @param {string} name - Module name
 * @return {NodeError} New `Error` instance
 */
const ERR_UNKNOWN_BUILTIN_MODULE: NodeErrorConstructor<
  Error,
  Times<1, string>
> = createNodeError(
  ErrorCode.ERR_UNKNOWN_BUILTIN_MODULE,
  Error,
  'No such built-in module: %s'
)

export default ERR_UNKNOWN_BUILTIN_MODULE
