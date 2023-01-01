/**
 * @file Error Models - ERR_INVALID_PACKAGE_TARGET
 * @module errnode/models/ERR_INVALID_PACKAGE_TARGET
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1331-L1346
 */

import { ErrorCode } from '#src/enums'
import type { MessageFn, NodeError, NodeErrorConstructor } from '#src/types'
import { createNodeError } from '#src/utils'
import type pkg from '@flex-development/pkg-types'

/**
 * `ERR_INVALID_PACKAGE_TARGET` model.
 *
 * Thrown when a `package.json` [`"exports"`][1] or [`"imports"`][2] field
 * contains an invalid target mapping value for the attempted module resolution.
 *
 * [1]: https://nodejs.org/api/packages.html#exports
 * [2]: https://nodejs.org/api/packages.html#imports
 *
 * @see https://nodejs.org/api/errors.html#err_invalid_package_target
 *
 * @class
 *
 * @param {string} dir - Directory containing `package.json` file
 * @param {string} key - `exports` or `imports` key
 * @param {pkg.Exports} target - Invalid package target
 * @param {boolean?} [internal=false] - `target` is package [`imports`][2]?
 * @param {string?} [base=''] - Id of module package was imported from
 * @return {NodeError} `Error` instance
 */
const ERR_INVALID_PACKAGE_TARGET: NodeErrorConstructor<
  ErrorConstructor,
  MessageFn<[string, string, pkg.Exports, boolean?, string?]>
> = createNodeError(
  ErrorCode.ERR_INVALID_PACKAGE_TARGET,
  Error,
  /**
   * Creates a [`ERR_INVALID_PACKAGE_TARGET`][1] message.
   *
   * [1]: https://nodejs.org/api/errors.html#err_invalid_package_target
   * [2]: https://nodejs.org/api/packages.html#imports
   *
   * @param {string} dir - Directory containing `package.json` file
   * @param {string} key - `exports` or `imports` key
   * @param {pkg.Exports} target - Invalid package target
   * @param {boolean?} [internal=false] - `target` is package [`imports`][2]?
   * @param {string?} [base=''] - Id of module package was imported from
   * @return {string} Error message
   */
  (
    dir: string,
    key: string,
    target: pkg.Exports,
    internal: boolean = false,
    base: string = ''
  ): string => {
    /**
     * [`"exports"`][1] main target check.
     *
     * [1]: https://nodejs.org/api/packages.html#exports
     *
     * @see https://nodejs.org/api/packages.html#subpath-exports
     *
     * @const {boolean} main
     */
    const main: boolean = !internal && key === '.'

    /**
     * Error message.
     *
     * @var {string} ret
     */
    let ret: string = `Invalid "${internal ? 'imports' : 'exports'}"`

    // include if package target is main entry point
    if (main) ret += ' main'

    // add invalid package target
    ret += ` target ${JSON.stringify(target)} defined`

    // add key of invalid package target if target is not main entry point
    if (!main) ret += ` for '${key}'`

    // add package.json location
    ret += ` in the package config ${dir}package.json`

    // add import location
    if (base) ret += ` imported from ${base}`

    // add reason package target is invalid
    ret +=
      typeof target === 'string' && !internal && !target.startsWith('./')
        ? '; targets must start with "./"'
        : ''

    return ret
  }
)

export default ERR_INVALID_PACKAGE_TARGET
