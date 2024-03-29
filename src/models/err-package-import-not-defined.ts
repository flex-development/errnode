/**
 * @file Error Models - ERR_PACKAGE_IMPORT_NOT_DEFINED
 * @module errnode/models/ERR_PACKAGE_IMPORT_NOT_DEFINED
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1514-L1516
 */

import { ErrorCode } from '#src/enums'
import type { NodeErrorConstructor } from '#src/interfaces'
import type { MessageFn, NodeError } from '#src/types'
import { createNodeError } from '#src/utils'

/**
 * `ERR_PACKAGE_IMPORT_NOT_DEFINED` model.
 *
 * Thrown when a `package.json` [`"imports"`][1] field does not define the given
 * package import specifier.
 *
 * [1]: https://nodejs.org/api/packages.html#imports
 *
 * @see https://nodejs.org/api/errors.html#err_package_import_not_defined
 *
 * @class
 *
 * @param {string} specifier - Invalid package import specifier
 * @param {string} base - Id of module `specifier` was imported from
 * @param {string?} [dir=''] - Id of directory containing `package.json`
 * @return {NodeError<TypeError>} New `TypeError` instance
 */
const ERR_PACKAGE_IMPORT_NOT_DEFINED: NodeErrorConstructor<
  TypeError,
  MessageFn<[string, string, string?]>
> = createNodeError(
  ErrorCode.ERR_PACKAGE_IMPORT_NOT_DEFINED,
  TypeError,
  /**
   * Creates a [`ERR_PACKAGE_IMPORT_NOT_DEFINED`][1] message.
   *
   * [1]: https://nodejs.org/api/errors.html#err_package_import_not_defined
   *
   * @param {string} specifier - Invalid package import specifier
   * @param {string} base - Id of module `specifier` was imported from
   * @param {string?} [dir=''] - Id of directory containing `package.json`
   * @return {string} Error message
   */
  (specifier: string, base: string, dir: string = ''): string => {
    /**
     * Error message.
     *
     * @var {string} message
     */
    let message: string = `Package import specifier '${specifier}' is not defined`

    // add package.json location
    if (dir) message += ` in package ${dir.replace(/\/$/, '')}/package.json`

    // add import location
    message += ` imported from ${base}`

    return message
  }
)

export default ERR_PACKAGE_IMPORT_NOT_DEFINED
