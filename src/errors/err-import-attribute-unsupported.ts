/**
 * @file Errors - ERR_IMPORT_ATTRIBUTE_UNSUPPORTED
 * @module errnode/errors/ERR_IMPORT_ATTRIBUTE_UNSUPPORTED
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1344-L1345
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'

/**
 * `ERR_IMPORT_ATTRIBUTE_UNSUPPORTED` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_import_attribute_unsupported
 *
 * @extends {NodeError<codes.ERR_IMPORT_ATTRIBUTE_UNSUPPORTED>}
 * @extends {TypeError}
 */
interface ErrImportAttributeUnsupported
  extends NodeError<codes.ERR_IMPORT_ATTRIBUTE_UNSUPPORTED>, TypeError {}

/**
 * `ERR_IMPORT_ATTRIBUTE_UNSUPPORTED` message arguments.
 */
type Args = [key: string, value: string]

/**
 * `ERR_IMPORT_ATTRIBUTE_UNSUPPORTED` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrImportAttributeUnsupported}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrImportAttributeUnsupported,Args>}
 */
interface ErrImportAttributeUnsupportedConstructor
  extends NodeErrorConstructor<ErrImportAttributeUnsupported, Args> {
  /**
   * Create a new `ERR_IMPORT_ATTRIBUTE_UNSUPPORTED` error.
   *
   * @see {@linkcode ErrImportAttributeUnsupported}
   *
   * @param {string} key
   *  Import attribute key
   * @param {string} value
   *  Import attribute value
   * @return {ErrImportAttributeUnsupported}
   */
  new (key: string, value: string): ErrImportAttributeUnsupported
}

/**
 * `ERR_IMPORT_ATTRIBUTE_UNSUPPORTED` model.
 *
 * Thrown when an import attribute is not supported by a version of Node.js.
 *
 * @see {@linkcode ErrImportAttributeUnsupportedConstructor}
 *
 * @type {ErrImportAttributeUnsupportedConstructor}
 *
 * @class
 */
const ERR_IMPORT_ATTRIBUTE_UNSUPPORTED:
  ErrImportAttributeUnsupportedConstructor = E(
    codes.ERR_IMPORT_ATTRIBUTE_UNSUPPORTED,
    TypeError,
    'Import attribute "%s" with value "%s" is not supported'
  )

export {
  ERR_IMPORT_ATTRIBUTE_UNSUPPORTED as default,
  type ErrImportAttributeUnsupported,
  type Args as ErrImportAttributeUnsupportedArgs,
  type ErrImportAttributeUnsupportedConstructor
}
