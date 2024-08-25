/**
 * @file Errors - ERR_INVALID_MODULE_SPECIFIER
 * @module errnode/errors/ERR_INVALID_MODULE_SPECIFIER
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1480-L1483
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'

/**
 * `ERR_INVALID_MODULE_SPECIFIER` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_invalid_module_specifier
 *
 * @extends {NodeError<codes.ERR_INVALID_MODULE_SPECIFIER>}
 * @extends {TypeError}
 */
interface ErrInvalidModuleSpecifier
  extends NodeError<codes.ERR_INVALID_MODULE_SPECIFIER>, TypeError {}

/**
 * `ERR_INVALID_MODULE_SPECIFIER` message arguments.
 */
type Args = [
  request: string,
  reason?: string | null | undefined,
  base?: URL | string | null | undefined
]

/**
 * `ERR_INVALID_MODULE_SPECIFIER` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrInvalidModuleSpecifier}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrInvalidModuleSpecifier,Args>}
 */
interface ErrInvalidModuleSpecifierConstructor
  extends NodeErrorConstructor<ErrInvalidModuleSpecifier, Args> {
  /**
   * Create a new `ERR_INVALID_MODULE_SPECIFIER` error.
   *
   * @see {@linkcode ErrInvalidModuleSpecifier}
   *
   * @param {string} request
   *  Invalid module specifier
   * @param {string | null | undefined} [reason]
   *  Reason `request` is invalid
   * @param {URL | string | null | undefined} [base]
   *  Id of module `request` was imported from
   * @return {ErrInvalidModuleSpecifier}
   */
  new (
    request: string,
    reason?: string | null | undefined,
    base?: URL | string | null | undefined
  ): ErrInvalidModuleSpecifier
}

/**
 * `ERR_INVALID_MODULE_SPECIFIER` model.
 *
 * Thrown when an imported module string is an invalid URL, package name, or
 * package subpath specifier.
 *
 * @see {@linkcode ErrInvalidModuleSpecifierConstructor}
 *
 * @type {ErrInvalidModuleSpecifierConstructor}
 *
 * @class
 */
const ERR_INVALID_MODULE_SPECIFIER: ErrInvalidModuleSpecifierConstructor = E(
  codes.ERR_INVALID_MODULE_SPECIFIER,
  TypeError,
  /**
   * @param {string} request
   *  Invalid module specifier
   * @param {string | null | undefined} [reason]
   *  Reason `request` is invalid
   * @param {URL | string | null | undefined} [base]
   *  Id of module `request` was imported from
   * @return {string}
   *  Error message
   */
  function message(
    request: string,
    reason: string | null | undefined = null,
    base: URL | string | null | undefined = null
  ): string {
    /**
     * Error message.
     *
     * @var {string} message
     */
    let message: string = `Invalid module '${request}'`

    if (reason) message += ' ' + reason
    if (base !== null) message += ` imported from ${String(base)}`

    return message
  }
)

export {
  ERR_INVALID_MODULE_SPECIFIER as default,
  type ErrInvalidModuleSpecifier,
  type Args as ErrInvalidModuleSpecifierArgs,
  type ErrInvalidModuleSpecifierConstructor
}
