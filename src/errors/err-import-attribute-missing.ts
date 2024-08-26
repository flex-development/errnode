/**
 * @file Errors - ERR_IMPORT_ATTRIBUTE_MISSING
 * @module errnode/errors/ERR_IMPORT_ATTRIBUTE_MISSING
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1340-L1341
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'

/**
 * `ERR_IMPORT_ATTRIBUTE_MISSING` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_import_attribute_missing
 *
 * @extends {NodeError<codes.ERR_IMPORT_ATTRIBUTE_MISSING>}
 * @extends {TypeError}
 */
interface ErrImportAttributeMissing
  extends NodeError<codes.ERR_IMPORT_ATTRIBUTE_MISSING>, TypeError {}

/**
 * `ERR_IMPORT_ATTRIBUTE_MISSING` message arguments.
 */
type Args = [id: string, key: string, value: string]

/**
 * `ERR_IMPORT_ATTRIBUTE_MISSING` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrImportAttributeMissing}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrImportAttributeMissing,Args>}
 */
interface ErrImportAttributeMissingConstructor
  extends NodeErrorConstructor<ErrImportAttributeMissing, Args> {
  /**
   * Create a new `ERR_IMPORT_ATTRIBUTE_MISSING` error.
   *
   * @see {@linkcode ErrImportAttributeMissing}
   *
   * @param {string} id
   *  Module id
   * @param {string} key
   *  The required import attribute key
   * @param {string} value
   *  The required import attribute value
   * @return {ErrImportAttributeMissing}
   */
  new (id: string, key: string, value: string): ErrImportAttributeMissing
}

/**
 * `ERR_IMPORT_ATTRIBUTE_MISSING` model.
 *
 * Thrown when an import attribute is missing, thus preventing the specified
 * module from being imported.
 *
 * @see {@linkcode ErrImportAttributeMissingConstructor}
 *
 * @type {ErrImportAttributeMissingConstructor}
 *
 * @class
 */
const ERR_IMPORT_ATTRIBUTE_MISSING: ErrImportAttributeMissingConstructor = E(
  codes.ERR_IMPORT_ATTRIBUTE_MISSING,
  TypeError,
  'Module "%s" needs an import attribute of "%s: %s"'
)

export {
  ERR_IMPORT_ATTRIBUTE_MISSING as default,
  type ErrImportAttributeMissing,
  type Args as ErrImportAttributeMissingArgs,
  type ErrImportAttributeMissingConstructor
}
