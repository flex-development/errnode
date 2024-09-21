/**
 * @file Errors - ERR_INVALID_PACKAGE_TARGET
 * @module errnode/errors/ERR_INVALID_PACKAGE_TARGET
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1488-L1503
 */

import E from '#e'
import { codes } from '#src/enums'
import type {
  NodeError,
  NodeErrorConstructor,
  Stringifiable
} from '#src/interfaces'
import { DOT } from '@flex-development/tutils'
import { ok } from 'devlop'

/**
 * `ERR_INVALID_PACKAGE_TARGET` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_invalid_package_target
 *
 * @extends {NodeError<codes.ERR_INVALID_PACKAGE_TARGET>}
 */
interface ErrInvalidPackageTarget
  extends NodeError<codes.ERR_INVALID_PACKAGE_TARGET> {}

/**
 * `ERR_INVALID_PACKAGE_TARGET` message arguments.
 *
 * @see {@linkcode Stringifiable}
 */
type Args = [
  dir: Stringifiable,
  subpath: string,
  target: unknown,
  isImports?: boolean | null | undefined,
  base?: Stringifiable | null | undefined
]

/**
 * `ERR_INVALID_PACKAGE_TARGET` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrInvalidPackageTarget}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrInvalidPackageTarget,Args>}
 */
interface ErrInvalidPackageTargetConstructor
  extends NodeErrorConstructor<ErrInvalidPackageTarget, Args> {
  /**
   * Create a new `ERR_INVALID_PACKAGE_TARGET` error.
   *
   * @see {@linkcode ErrInvalidPackageTarget}
   * @see {@linkcode Stringifiable}
   *
   * @param {Stringifiable} dir
   *  Package directory module id
   * @param {string} subpath
   *  Package subpath
   * @param {unknown} target
   *  Invalid package target
   * @param {boolean | null | undefined} [isImports]
   *  Internal `subpath`?
   * @param {Stringifiable | null | undefined} [base]
   *  Parent module id
   * @return {ErrInvalidPackageTarget}
   */
  new (
    dir: Stringifiable,
    subpath: string,
    target: unknown,
    isImports?: boolean | null | undefined,
    base?: Stringifiable | null | undefined
  ): ErrInvalidPackageTarget
}

/**
 * `ERR_INVALID_PACKAGE_TARGET` model.
 *
 * Thrown when a `package.json` [`"exports"`][1] or [`"imports"`][2] field
 * contains an invalid target mapping value for the attempted module resolution.
 *
 * [1]: https://nodejs.org/api/packages.html#exports
 * [2]: https://nodejs.org/api/packages.html#imports
 *
 * @see {@linkcode ErrInvalidPackageTargetConstructor}
 *
 * @type {ErrInvalidPackageTargetConstructor}
 *
 * @class
 */
const ERR_INVALID_PACKAGE_TARGET: ErrInvalidPackageTargetConstructor = E(
  codes.ERR_INVALID_PACKAGE_TARGET,
  Error,
  /**
   * @param {Stringifiable} dir
   *  Package directory module id
   * @param {string} subpath
   *  Package subpath
   * @param {unknown} target
   *  Invalid package target
   * @param {boolean | null | undefined} [isImports]
   *  Internal `subpath`?
   * @param {Stringifiable | null | undefined} [base]
   *  Parent module id
   * @return {string}
   *  Error message
   */
  function message(
    dir: Stringifiable,
    subpath: string,
    target: unknown,
    isImports: boolean | null | undefined = false,
    base: Stringifiable | null | undefined = null
  ): string {
    ok(
      String(dir).endsWith('/'),
      'expected `dir` to end with trailing slash ("/")'
    )

    /**
     * Relative error?
     *
     * @const {boolean} relativeError
     */
    const relativeError: boolean = typeof target === 'string' &&
      isImports !== true &&
      target.length > 0 &&
      !target.startsWith(`${DOT}/`)

    /**
     * Error message.
     *
     * @var {string} message
     */
    let message: string = ''

    if (subpath === DOT) {
      ok(isImports !== true, 'expected `internal` to not be `true`')

      message += `Invalid "exports" main target ${JSON.stringify(target)}` +
        ` defined in the package config ${String(dir)}package.json`
    } else {
      message = `Invalid "${isImports ? 'imports' : 'exports'}" target` +
        ` ${JSON.stringify(target)} defined for '${subpath}' in the package` +
        ` config ${String(dir)}package.json`
    }

    if (base !== null) message += ` imported from ${String(base)}`
    if (relativeError) message += `; targets must start with "${DOT}/"`

    return message
  }
)

export {
  ERR_INVALID_PACKAGE_TARGET as default,
  type ErrInvalidPackageTarget,
  type Args as ErrInvalidPackageTargetArgs,
  type ErrInvalidPackageTargetConstructor
}
