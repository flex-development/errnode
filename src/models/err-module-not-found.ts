/**
 * @file Error Models - ERR_MODULE_NOT_FOUND
 * @module errnode/models/ERR_MODULE_NOT_FOUND
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1470-L1472
 */

import { ErrorCode } from '#src/enums'
import type { MessageFn, NodeError, NodeErrorConstructor } from '#src/types'
import { createNodeError } from '#src/utils'

/**
 * `ERR_MODULE_NOT_FOUND` model.
 *
 * Thrown when a module file cannot be resolved by the ECMAScript modules loader
 * while attempting an `import` operation or when loading a program entry point.
 *
 * @see https://nodejs.org/api/errors.html#err_module_not_found
 *
 * @class
 *
 * @param {string} id - Id of missing module
 * @param {string} base - Id of module `id` was imported from
 * @param {string?} [type='package'] - Module file type
 * @return {NodeError} `Error` instance
 */
const ERR_MODULE_NOT_FOUND: NodeErrorConstructor<
  ErrorConstructor,
  MessageFn<[string, string, string?]>
> = createNodeError(
  ErrorCode.ERR_MODULE_NOT_FOUND,
  Error,
  /**
   * Creates an [`ERR_MODULE_NOT_FOUND`][1] message.
   *
   * [1]: https://nodejs.org/api/errors.html#err_module_not_found
   *
   * @param {string} id - Id of missing module
   * @param {string} base - Id of module `id` was imported from
   * @param {string?} [type='package'] - Module file type
   * @return {string} Error message
   */
  (id: string, base: string, type: string = 'package'): string => {
    return `Cannot find ${type} '${id}' imported from ${base}`
  }
)

export default ERR_MODULE_NOT_FOUND
