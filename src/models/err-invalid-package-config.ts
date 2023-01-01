/**
 * @file Error Models - ERR_INVALID_PACKAGE_CONFIG
 * @module errnode/models/ERR_INVALID_PACKAGE_CONFIG
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1327-L1330
 */

import { ErrorCode } from '#src/enums'
import type { MessageFn, NodeError, NodeErrorConstructor } from '#src/types'
import { createNodeError } from '#src/utils'

/**
 * `ERR_INVALID_PACKAGE_CONFIG` model.
 *
 * Thrown when a [`package.json`][1] file fails parsing.
 *
 * [1]: https://nodejs.org/api/packages.html#nodejs-packagejson-field-definitions
 *
 * @see https://nodejs.org/api/errors.html#err_invalid_package_config
 *
 * @class
 *
 * @param {string} id - Location of invalid `package.json` file
 * @param {string?} [base=''] - Id of module being imported. May also include
 * where module is being imported from
 * @param {string?} [reason=''] - Reason package config is invalid
 * @return {NodeError} `Error` instance
 */
const ERR_INVALID_PACKAGE_CONFIG: NodeErrorConstructor<
  ErrorConstructor,
  MessageFn<[string, string?, string?]>
> = createNodeError(
  ErrorCode.ERR_INVALID_PACKAGE_CONFIG,
  Error,
  /**
   * Creates an [`ERR_INVALID_PACKAGE_CONFIG`][1] message.
   *
   * [1]: https://nodejs.org/api/errors.html#err_invalid_package_config
   *
   * @param {string} id - Location of invalid `package.json` file
   * @param {string?} [base=''] - Id of module being imported. May also include
   * where module is being imported from
   * @param {string?} [reason=''] - Reason package config is invalid
   * @return {string} Error message
   */
  (id: string, base: string = '', reason: string = ''): string => {
    /**
     * Error message.
     *
     * @var {string} ret
     */
    let ret: string = `Invalid package config ${id}`

    // add import details
    if (base) ret += ` while importing ${base}`

    // add reason package config is invalid
    if (reason) ret += `. ${reason}`

    return ret
  }
)

export default ERR_INVALID_PACKAGE_CONFIG
