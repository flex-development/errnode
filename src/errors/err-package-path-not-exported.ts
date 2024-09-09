/**
 * @file Errors - ERR_PACKAGE_PATH_NOT_EXPORTED
 * @module errnode/errors/ERR_PACKAGE_PATH_NOT_EXPORTED
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1632-L1638
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
 * `ERR_PACKAGE_PATH_NOT_EXPORTED` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_package_path_not_exported
 *
 * @extends {NodeError<codes.ERR_PACKAGE_PATH_NOT_EXPORTED>}
 */
interface ErrPackagePathNotExported
  extends NodeError<codes.ERR_PACKAGE_PATH_NOT_EXPORTED> {}

/**
 * `ERR_PACKAGE_PATH_NOT_EXPORTED` message arguments.
 *
 * @see {@linkcode Stringifiable}
 */
type Args = [
  dir: Stringifiable,
  subpath: string,
  base?: Stringifiable | null | undefined
]

/**
 * `ERR_PACKAGE_PATH_NOT_EXPORTED` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrPackagePathNotExported}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrPackagePathNotExported,Args>}
 */
interface ErrPackagePathNotExportedConstructor
  extends NodeErrorConstructor<ErrPackagePathNotExported, Args> {
  /**
   * Create a new `ERR_PACKAGE_PATH_NOT_EXPORTED` error.
   *
   * @see {@linkcode ErrPackagePathNotExported}
   * @see {@linkcode Stringifiable}
   *
   * @param {Stringifiable} dir
   *  Package directory id
   * @param {string} subpath
   *  Requested subpath
   * @param {Stringifiable | null | undefined} [base]
   *  Parent module id
   * @return {ErrPackagePathNotExported}
   */
  new (
    dir: Stringifiable,
    subpath: string,
    base?: Stringifiable | null | undefined
  ): ErrPackagePathNotExported
}

/**
 * `ERR_PACKAGE_PATH_NOT_EXPORTED` model.
 *
 * Thrown when a `package.json` [`"exports"`][1] field does not export the
 * requested subpath.
 *
 * [1]: https://nodejs.org/api/packages.html#exports
 *
 * @see {@linkcode ErrPackagePathNotExportedConstructor}
 *
 * @type {ErrPackagePathNotExportedConstructor}
 *
 * @class
 */
const ERR_PACKAGE_PATH_NOT_EXPORTED: ErrPackagePathNotExportedConstructor = E(
  codes.ERR_PACKAGE_PATH_NOT_EXPORTED,
  Error,
  /**
   * @param {Stringifiable} dir
   *  Package directory id
   * @param {string} subpath
   *  Requested subpath
   * @param {Stringifiable | null | undefined} [base]
   *  Parent module id
   * @return {string} Error message
   */
  function message(
    dir: Stringifiable,
    subpath: string,
    base: Stringifiable | null | undefined = null
  ): string {
    ok(
      String(dir).endsWith('/'),
      'expected `dir` to end with trailing slash ("/")'
    )

    /**
     * Error message.
     *
     * @var {string} message
     */
    let message: string = subpath === DOT
      ? 'No \'exports\' main defined in'
      : `Package subpath '${subpath}' is not defined by 'exports' in`

    message += ` ${String(dir)}package.json`
    if (base !== null) message += ` imported from ${String(base)}`

    return message
  }
)

export {
  ERR_PACKAGE_PATH_NOT_EXPORTED as default,
  type ErrPackagePathNotExported,
  type Args as ErrPackagePathNotExportedArgs,
  type ErrPackagePathNotExportedConstructor
}
