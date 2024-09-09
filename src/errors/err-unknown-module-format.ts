/**
 * @file Errors - ERR_UNKNOWN_MODULE_FORMAT
 * @module errnode/errors/ERR_UNKNOWN_MODULE_FORMAT
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1819-L1820
 */

import E from '#e'
import { codes } from '#src/enums'
import type {
  NodeError,
  NodeErrorConstructor,
  Stringifiable
} from '#src/interfaces'

/**
 * `ERR_UNKNOWN_MODULE_FORMAT` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_unknown_module_format
 *
 * @extends {NodeError<codes.ERR_UNKNOWN_MODULE_FORMAT>}
 * @extends {RangeError}
 */
interface ErrUnknownModuleFormat
  extends NodeError<codes.ERR_UNKNOWN_MODULE_FORMAT>, RangeError {}

/**
 * `ERR_UNKNOWN_MODULE_FORMAT` message arguments.
 *
 * @see {@linkcode Stringifiable}
 */
type Args = [format: unknown, url: Stringifiable]

/**
 * `ERR_UNKNOWN_MODULE_FORMAT` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrUnknownModuleFormat}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrUnknownModuleFormat,Args>}
 */
interface ErrUnknownModuleFormatConstructor
  extends NodeErrorConstructor<ErrUnknownModuleFormat, Args> {
  /**
   * Create a new `ERR_UNKNOWN_MODULE_FORMAT` error.
   *
   * @see {@linkcode ErrUnknownModuleFormat}
   * @see {@linkcode Stringifiable}
   *
   * @param {unknown} format
   *  Unknown or unsupported format
   * @param {Stringifiable} url
   *  Module url
   * @return {ErrUnknownModuleFormat}
   */
  new (format: string, url: Stringifiable): ErrUnknownModuleFormat
}

/**
 * `ERR_UNKNOWN_MODULE_FORMAT` model.
 *
 * Thrown when an attempt is made to load a module with an unknown or
 * unsupported format.
 *
 * @see {@linkcode ErrUnknownModuleFormatConstructor}
 *
 * @type {ErrUnknownModuleFormatConstructor}
 *
 * @class
 */
const ERR_UNKNOWN_MODULE_FORMAT: ErrUnknownModuleFormatConstructor = E(
  codes.ERR_UNKNOWN_MODULE_FORMAT,
  RangeError,
  'Unknown module format: %s for URL %s'
)

export {
  ERR_UNKNOWN_MODULE_FORMAT as default,
  type ErrUnknownModuleFormat,
  type Args as ErrUnknownModuleFormatArgs,
  type ErrUnknownModuleFormatConstructor
}
