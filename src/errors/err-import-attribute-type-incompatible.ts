/**
 * @file Errors - ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE
 * @module errnode/errors/ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1342-L1343
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'

/**
 * `ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_import_attribute_type_incompatible
 *
 * @extends {NodeError<codes.ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE>}
 * @extends {TypeError}
 */
interface ErrImportAttributeTypeIncompatible
  extends NodeError<codes.ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE>, TypeError {}

/**
 * `ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE` message arguments.
 */
type Args = [id: string, type: string]

/**
 * `ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrImportAttributeTypeIncompatible}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrImportAttributeTypeIncompatible,Args>}
 */
interface ErrImportAttributeTypeIncompatibleConstructor
  extends NodeErrorConstructor<ErrImportAttributeTypeIncompatible, Args> {
  /**
   * Create a new `ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE` error.
   *
   * @see {@linkcode ErrImportAttributeTypeIncompatible}
   *
   * @param {string} id
   *  Module id
   * @param {string} type
   *  Specified type
   * @return {ErrImportAttributeTypeIncompatible}
   */
  new (id: string, type: string): ErrImportAttributeTypeIncompatible
}

/**
 * `ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE` model.
 *
 * Thrown when an import `type` attribute is provided, but the specified module
 * is of a different type.
 *
 * @see {@linkcode ErrImportAttributeTypeIncompatibleConstructor}
 *
 * @type {ErrImportAttributeTypeIncompatibleConstructor}
 *
 * @class
 */
const ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE:
  ErrImportAttributeTypeIncompatibleConstructor = E(
    codes.ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE,
    TypeError,
    'Module "%s" is not of type "%s"'
  )

export {
  ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE as default,
  type ErrImportAttributeTypeIncompatible,
  type Args as ErrImportAttributeTypeIncompatibleArgs,
  type ErrImportAttributeTypeIncompatibleConstructor
}
