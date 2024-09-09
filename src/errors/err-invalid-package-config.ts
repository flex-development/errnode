/**
 * @file Errors - ERR_INVALID_PACKAGE_CONFIG
 * @module errnode/errors/ERR_INVALID_PACKAGE_CONFIG
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1327-L1330
 */

import E from '#e'
import { codes } from '#src/enums'
import type {
  NodeError,
  NodeErrorConstructor,
  Stringifiable
} from '#src/interfaces'
import { DOT } from '@flex-development/tutils'

/**
 * `ERR_INVALID_PACKAGE_CONFIG` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_invalid_package_config
 *
 * @extends {NodeError<codes.ERR_INVALID_PACKAGE_CONFIG>}
 */
interface ErrInvalidPackageConfig
  extends NodeError<codes.ERR_INVALID_PACKAGE_CONFIG> {}

/**
 * `ERR_INVALID_PACKAGE_CONFIG` message arguments.
 *
 * @see {@linkcode Stringifiable}
 */
type Args = [
  id: Stringifiable,
  base?: Stringifiable | null | undefined,
  reason?: string | null | undefined
]

/**
 * `ERR_INVALID_PACKAGE_CONFIG` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrInvalidPackageConfig}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrInvalidPackageConfig,Args>}
 */
interface ErrInvalidPackageConfigConstructor
  extends NodeErrorConstructor<ErrInvalidPackageConfig, Args> {
  /**
   * Create a new `ERR_INVALID_PACKAGE_CONFIG` error.
   *
   * @see {@linkcode ErrInvalidPackageConfig}
   * @see {@linkcode Stringifiable}
   *
   * @param {Stringifiable} id
   *  Location of invalid `package.json` file
   * @param {Stringifiable | null | undefined} [base]
   *  Parent module id
   * @param {string | null | undefined} [reason]
   *  Reason for invalidity
   * @return {ErrInvalidPackageConfig}
   */
  new (
    id: Stringifiable,
    base?: Stringifiable | null | undefined,
    reason?: string | null | undefined
  ): ErrInvalidPackageConfig
}

/**
 * `ERR_INVALID_PACKAGE_CONFIG` model.
 *
 * Thrown when a [`package.json`][package] file fails parsing.
 *
 * [package]: https://nodejs.org/api/packages.html#nodejs-packagejson-field-definitions
 *
 * @see {@linkcode ErrInvalidPackageConfigConstructor}
 *
 * @type {ErrInvalidPackageConfigConstructor}
 *
 * @class
 */
const ERR_INVALID_PACKAGE_CONFIG: ErrInvalidPackageConfigConstructor = E(
  codes.ERR_INVALID_PACKAGE_CONFIG,
  Error,
  /**
   * @param {Stringifiable} id
   *  Location of invalid `package.json` file
   * @param {Stringifiable | null | undefined} [base]
   *  Parent module id
   * @param {string | null | undefined} [reason]
   *  Reason for invalidity
   * @return {string}
   *  Error message
   */
  function message(
    id: Stringifiable,
    base: Stringifiable | null | undefined = null,
    reason: string | null | undefined = null
  ): string {
    /**
     * Error message.
     *
     * @var {string} message
     */
    let message: string = `Invalid package config ${String(id)}`

    if (base !== null) message += ` while importing ${String(base)}`
    if (reason) message += `${DOT} ${reason}`

    return message
  }
)

export {
  ERR_INVALID_PACKAGE_CONFIG as default,
  type ErrInvalidPackageConfig,
  type Args as ErrInvalidPackageConfigArgs,
  type ErrInvalidPackageConfigConstructor
}
