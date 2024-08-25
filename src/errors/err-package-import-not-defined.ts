/**
 * @file Errors - ERR_PACKAGE_IMPORT_NOT_DEFINED
 * @module errnode/errors/ERR_PACKAGE_IMPORT_NOT_DEFINED
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1628-L1631
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import { ok } from 'devlop'

/**
 * `ERR_PACKAGE_IMPORT_NOT_DEFINED` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_package_import_not_defined
 *
 * @extends {NodeError<codes.ERR_PACKAGE_IMPORT_NOT_DEFINED>}
 * @extends {TypeError}
 */
interface ErrPackageImportNotDefined
  extends NodeError<codes.ERR_PACKAGE_IMPORT_NOT_DEFINED>, TypeError {}

/**
 * `ERR_PACKAGE_IMPORT_NOT_DEFINED` message arguments.
 */
type Args = [
  specifier: string,
  dir?: string | null | undefined,
  base?: string | null | undefined
]

/**
 * `ERR_PACKAGE_IMPORT_NOT_DEFINED` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrPackageImportNotDefined}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrPackageImportNotDefined,Args>}
 */
interface ErrPackageImportNotDefinedConstructor
  extends NodeErrorConstructor<ErrPackageImportNotDefined, Args> {
  /**
   * Create a new `ERR_PACKAGE_IMPORT_NOT_DEFINED` error.
   *
   * @see {@linkcode ErrPackageImportNotDefined}
   *
   * @param {string} specifier
   *  Invalid package import specifier
   * @param {string | null | undefined} [dir]
   *  Id of package directory
   * @param {string | null | undefined} [base]
   *  Parent module path
   * @return {ErrPackageImportNotDefined}
   */
  new (
    specifier: string,
    dir?: string | null | undefined,
    base?: string | null | undefined
  ): ErrPackageImportNotDefined
}

/**
 * `ERR_PACKAGE_IMPORT_NOT_DEFINED` model.
 *
 * Thrown when a `package.json` [`"imports"`][imports] field does not define the
 * given package import specifier.
 *
 * [imports]: https://nodejs.org/api/packages.html#imports
 *
 * @see {@linkcode ErrPackageImportNotDefinedConstructor}
 *
 * @type {ErrPackageImportNotDefinedConstructor}
 *
 * @class
 */
const ERR_PACKAGE_IMPORT_NOT_DEFINED: ErrPackageImportNotDefinedConstructor = E(
  codes.ERR_PACKAGE_IMPORT_NOT_DEFINED,
  TypeError,
  /**
   * @param {string} specifier
   *  Invalid package import specifier
   * @param {string | null | undefined} [dir]
   *  Id of package directory
   * @param {string | null | undefined} [base]
   *  Parent module path
   * @return {string} Error message
   */
  function message(
    specifier: string,
    dir: string | null | undefined = null,
    base: string | null | undefined = null
  ): string {
    /**
     * Error message.
     *
     * @var {string} message
     */
    let message: string = `Package import specifier '${specifier}'`

    message += ' is not defined'

    if (dir) {
      ok(dir.endsWith('/'), 'expected `dir` to end with trailing slash ("/")')
      message += ` in package ${dir}package.json`
    }

    if (base) message += ` imported from ${base}`

    return message
  }
)

export {
  ERR_PACKAGE_IMPORT_NOT_DEFINED as default,
  type ErrPackageImportNotDefined,
  type Args as ErrPackageImportNotDefinedArgs,
  type ErrPackageImportNotDefinedConstructor
}
