/**
 * @file Error Models - ERR_PACKAGE_PATH_NOT_EXPORTED
 * @module errnode/models/ERR_PACKAGE_PATH_NOT_EXPORTED
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1518-L1524
 */

import { ErrorCode } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/types'
import { createNodeError } from '#src/utils'

/**
 * `ERR_PACKAGE_PATH_NOT_EXPORTED` model.
 *
 * Thrown when a `package.json` [`"exports"`][1] field does not export a
 * requested subpath.
 *
 * [1]: https://nodejs.org/api/packages.html#exports
 *
 * @see https://nodejs.org/api/errors.html#err_package_path_not_exported
 *
 * @class
 *
 * @param {string} dir - Directory containing `package.json` file
 * @param {string} subpath - Invalid subpath
 * @param {string?} [base=''] - Id of module `subpath` was imported from
 * @return {NodeError} `Error` instance
 */
const ERR_PACKAGE_PATH_NOT_EXPORTED: NodeErrorConstructor<
  ErrorConstructor,
  [string, string, string?]
> = createNodeError(
  ErrorCode.ERR_PACKAGE_PATH_NOT_EXPORTED,
  Error,
  /**
   * Creates an [`ERR_PACKAGE_PATH_NOT_EXPORTED`][1] message.
   *
   * [1]: https://nodejs.org/api/errors.html#err_package_path_not_exported
   *
   * @param {string} dir - Directory containing `package.json` file
   * @param {string} subpath - Invalid subpath
   * @param {string?} [base=''] - Id of module `subpath` was imported from
   * @return {string} Error message
   */
  (dir: string, subpath: string, base: string = ''): string => {
    /**
     * Error message.
     *
     * @var {string} message
     */
    let message: string =
      subpath === '.'
        ? "No 'exports' main defined in"
        : `Package subpath '${subpath}' is not defined by 'exports' in`

    // add package.json location
    message += ` ${dir}package.json`

    // add import location
    if (base) message += ` imported from ${base}`

    return message
  }
)

export default ERR_PACKAGE_PATH_NOT_EXPORTED