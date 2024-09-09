/**
 * @file Errors - ERR_UNKNOWN_FILE_EXTENSION
 * @module errnode/errors/ERR_UNKNOWN_FILE_EXTENSION
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1818
 */

import E from '#e'
import { codes } from '#src/enums'
import type {
  NodeError,
  NodeErrorConstructor,
  Stringifiable
} from '#src/interfaces'

/**
 * `ERR_UNKNOWN_FILE_EXTENSION` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_unknown_file_extension
 *
 * @extends {NodeError<codes.ERR_UNKNOWN_FILE_EXTENSION>}
 * @extends {TypeError}
 */
interface ErrUnknownFileExtension
  extends NodeError<codes.ERR_UNKNOWN_FILE_EXTENSION>, TypeError {}

/**
 * `ERR_UNKNOWN_FILE_EXTENSION` message arguments.
 *
 * @see {@linkcode Stringifiable}
 */
type Args = [ext: unknown, id: Stringifiable]

/**
 * `ERR_UNKNOWN_FILE_EXTENSION` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrUnknownFileExtension}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrUnknownFileExtension,Args>}
 */
interface ErrUnknownFileExtensionConstructor
  extends NodeErrorConstructor<ErrUnknownFileExtension, Args> {
  /**
   * Create a new `ERR_UNKNOWN_FILE_EXTENSION` error.
   *
   * @see {@linkcode ErrUnknownFileExtension}
   * @see {@linkcode Stringifiable}
   *
   * @param {unknown} ext
   *  Unknown or unsupported file extension
   * @param {Stringifiable} id
   *  Id of module containing `ext`
   * @return {ErrUnknownFileExtension}
   */
  new (ext: unknown, id: Stringifiable): ErrUnknownFileExtension
}

/**
 * `ERR_UNKNOWN_FILE_EXTENSION` model.
 *
 * Thrown when an attempt is made to load a module with an unknown or
 * unsupported file extension.
 *
 * @see {@linkcode ErrUnknownFileExtensionConstructor}
 *
 * @type {ErrUnknownFileExtensionConstructor}
 *
 * @class
 */
const ERR_UNKNOWN_FILE_EXTENSION: ErrUnknownFileExtensionConstructor = E(
  codes.ERR_UNKNOWN_FILE_EXTENSION,
  TypeError,
  'Unknown file extension "%s" for %s'
)

export {
  ERR_UNKNOWN_FILE_EXTENSION as default,
  type ErrUnknownFileExtension,
  type Args as ErrUnknownFileExtensionArgs,
  type ErrUnknownFileExtensionConstructor
}
