/**
 * @file Errors - ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED
 * @module errnode/errors/ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1168-L1169
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'

/**
 * `ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_import_assertion_type_unsupported
 *
 * @extends {NodeError<codes.ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED>}
 * @extends {TypeError}
 */
interface ErrImportAssertionTypeUnsupported
  extends NodeError<codes.ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED>, TypeError {}

/**
 * `ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED` message arguments.
 */
type Args = [type: string]

/**
 * `ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrImportAssertionTypeUnsupported}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrImportAssertionTypeUnsupported,Args>}
 */
interface ErrImportAssertionTypeUnsupportedConstructor
  extends NodeErrorConstructor<ErrImportAssertionTypeUnsupported, Args> {
  /**
   * Create a new `ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED` error.
   *
   * @see {@linkcode ErrImportAssertionTypeUnsupported}
   *
   * @param {string} type
   *  Unsupported import assertion type
   * @return {ErrImportAssertionTypeUnsupported}
   */
  new (type: string): ErrImportAssertionTypeUnsupported
}

/**
 * `ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED` model.
 *
 * Thrown when an import assertion is not supported by a version of Node.js.
 *
 * @see {@linkcode ErrImportAssertionTypeUnsupportedConstructor}
 *
 * @type {ErrImportAssertionTypeUnsupportedConstructor}
 *
 * @class
 */
const ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED:
  ErrImportAssertionTypeUnsupportedConstructor = E(
    codes.ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED,
    TypeError,
    'Import assertion type \'%s\' is unsupported'
  )

export {
  ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED as default,
  type ErrImportAssertionTypeUnsupported,
  type Args as ErrImportAssertionTypeUnsupportedArgs,
  type ErrImportAssertionTypeUnsupportedConstructor
}
