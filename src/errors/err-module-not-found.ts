/**
 * @file Errors - ERR_MODULE_NOT_FOUND
 * @module errnode/errors/ERR_MODULE_NOT_FOUND
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1581-L1587
 */

import E from '#e'
import { codes } from '#src/enums'
import type {
  NodeError,
  NodeErrorConstructor,
  Stringifiable
} from '#src/interfaces'

/**
 * `ERR_MODULE_NOT_FOUND` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_module_not_found
 *
 * @extends {NodeError<codes.ERR_MODULE_NOT_FOUND>}
 */
interface ErrModuleNotFound extends NodeError<codes.ERR_MODULE_NOT_FOUND> {
  /**
   * URL of missing module.
   */
  url?: string | null | undefined
}

/**
 * `ERR_MODULE_NOT_FOUND` message arguments.
 *
 * @see {@linkcode Stringifiable}
 */
type Args = [
  id: Stringifiable,
  base?: Stringifiable | null | undefined,
  url?: URL | string | null | undefined
]

/**
 * `ERR_MODULE_NOT_FOUND` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrModuleNotFound}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrModuleNotFound,Args>}
 */
interface ErrModuleNotFoundConstructor
  extends NodeErrorConstructor<ErrModuleNotFound, Args> {
  /**
   * Create a new `ERR_MODULE_NOT_FOUND` error.
   *
   * When creating an error for a missing package, `url` should be `null` or
   * `undefined`.
   *
   * @see {@linkcode ErrModuleNotFound}
   * @see {@linkcode Stringifiable}
   *
   * @param {Stringifiable} id
   *  Id of missing module
   * @param {Stringifiable | null | undefined} [base]
   *  Parent module id
   * @param {URL | string | null | undefined} [url]
   *  Module URL
   * @return {ErrModuleNotFound}
   */
  new (
    id: Stringifiable,
    base?: Stringifiable | null | undefined,
    url?: URL | string | null | undefined
  ): ErrModuleNotFound
}

/**
 * `ERR_MODULE_NOT_FOUND` model.
 *
 * Thrown when a module file cannot be resolved by the ECMAScript modules loader
 * while attempting an `import` operation or when loading a program entry point.
 *
 * @see {@linkcode ErrModuleNotFoundConstructor}
 *
 * @type {ErrModuleNotFoundConstructor}
 *
 * @class
 */
const ERR_MODULE_NOT_FOUND: ErrModuleNotFoundConstructor = E(
  codes.ERR_MODULE_NOT_FOUND,
  Error,
  /**
   * @this {ErrModuleNotFound}
   *
   * @param {Stringifiable} id
   *  Id of missing module
   * @param {Stringifiable | null | undefined} [base]
   *  Parent module id
   * @param {URL | string | null | undefined} [url]
   *  Module URL
   * @return {string}
   *  Error message
   */
  function message(
    this: ErrModuleNotFound,
    id: Stringifiable,
    base: Stringifiable | null | undefined = null,
    url: URL | string | null | undefined = null
  ): string {
    if (url !== null) this.url = String(url)

    /**
     * Error message.
     *
     * @var {string} message
     */
    let message: string = `Cannot find ${this.url ? 'module' : 'package'}`

    message += ` '${String(id)}'`
    if (base !== null) message += ` imported from ${String(base)}`

    return message
  }
)

export {
  ERR_MODULE_NOT_FOUND as default,
  type ErrModuleNotFound,
  type Args as ErrModuleNotFoundArgs,
  type ErrModuleNotFoundConstructor
}
