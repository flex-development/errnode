/**
 * @file Errors - ERR_UNSUPPORTED_DIR_IMPORT
 * @module errnode/errors/ERR_UNSUPPORTED_DIR_IMPORT
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1822-L1826
 */

import E from '#e'
import { codes } from '#src/enums'
import type {
  NodeError,
  NodeErrorConstructor,
  Stringifiable
} from '#src/interfaces'

/**
 * `ERR_UNSUPPORTED_DIR_IMPORT` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_unsupported_dir_import
 *
 * @extends {NodeError<codes.ERR_UNSUPPORTED_DIR_IMPORT>}
 */
interface ErrUnsupportedDirImport
  extends NodeError<codes.ERR_UNSUPPORTED_DIR_IMPORT> {}

/**
 * `ERR_UNSUPPORTED_DIR_IMPORT` message arguments.
 *
 * @see {@linkcode Stringifiable}
 */
type Args = [id: Stringifiable, base: Stringifiable]

/**
 * `ERR_UNSUPPORTED_DIR_IMPORT` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrUnsupportedDirImport}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrUnsupportedDirImport,Args>}
 */
interface ErrUnsupportedDirImportConstructor
  extends NodeErrorConstructor<ErrUnsupportedDirImport, Args> {
  /**
   * Create a new `ERR_UNSUPPORTED_DIR_IMPORT` error.
   *
   * @see {@linkcode ErrUnsupportedDirImport}
   * @see {@linkcode Stringifiable}
   *
   * @param {Stringifiable} id
   *  Directory id
   * @param {Stringifiable} base
   *  Parent module id
   * @return {ErrUnsupportedDirImport}
   */
  new (id: Stringifiable, base: Stringifiable): ErrUnsupportedDirImport
}

/**
 * `ERR_UNSUPPORTED_DIR_IMPORT` model.
 *
 * Thrown when a directory URL is `import`ed.
 *
 * @see {@linkcode ErrUnsupportedDirImportConstructor}
 *
 * @type {ErrUnsupportedDirImportConstructor}
 *
 * @class
 */
const ERR_UNSUPPORTED_DIR_IMPORT: ErrUnsupportedDirImportConstructor = E(
  codes.ERR_UNSUPPORTED_DIR_IMPORT,
  Error,
  'Directory import \'%s\' is not supported resolving ES modules imported from %s'
)

export {
  ERR_UNSUPPORTED_DIR_IMPORT as default,
  type ErrUnsupportedDirImport,
  type Args as ErrUnsupportedDirImportArgs,
  type ErrUnsupportedDirImportConstructor
}
