/**
 * @file Errors - ERR_INVALID_MODULE_SPECIFIER
 * @module errnode/errors/ERR_INVALID_MODULE_SPECIFIER
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1480-L1483
 */

import E from '#e'
import { codes } from '#src/enums'
import type {
  NodeError,
  NodeErrorConstructor,
  Stringifiable
} from '#src/interfaces'

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
 *
 * @see {@linkcode Stringifiable}
 */
type Args = [
  request: Stringifiable,
  reason?: string | null | undefined,
  base?: Stringifiable | null | undefined
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
   * @see {@linkcode Stringifiable}
   *
   * @param {Stringifiable} request
   *  Invalid module specifier
   * @param {string | null | undefined} [reason]
   *  Reason `request` is invalid
   * @param {Stringifiable | null | undefined} [base]
   *  Parent module id
   * @return {ErrInvalidModuleSpecifier}
   */
  new (
    request: Stringifiable,
    reason?: string | null | undefined,
    base?: Stringifiable | null | undefined
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
   * @param {Stringifiable} request
   *  Invalid module specifier
   * @param {string | null | undefined} [reason]
   *  Reason `request` is invalid
   * @param {Stringifiable | null | undefined} [base]
   *  Parent module id
   * @return {string}
   *  Error message
   */
  function message(
    request: Stringifiable,
    reason: string | null | undefined = null,
    base: Stringifiable | null | undefined = null
  ): string {
    /**
     * Error message.
     *
     * @var {string} message
     */
    let message: string = `Invalid module '${String(request)}'`

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
