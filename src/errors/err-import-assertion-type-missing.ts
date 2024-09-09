/**
 * @file Errors - ERR_IMPORT_ASSERTION_TYPE_MISSING
 * @module errnode/errors/ERR_IMPORT_ASSERTION_TYPE_MISSING
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1166-L1167
 */

import E from '#e'
import { codes } from '#src/enums'
import type {
  NodeError,
  NodeErrorConstructor,
  Stringifiable
} from '#src/interfaces'

/**
 * `ERR_IMPORT_ASSERTION_TYPE_MISSING` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_import_assertion_type_missing
 *
 * @extends {NodeError<codes.ERR_IMPORT_ASSERTION_TYPE_MISSING>}
 * @extends {TypeError}
 */
interface ErrImportAssertionTypeMissing
  extends NodeError<codes.ERR_IMPORT_ASSERTION_TYPE_MISSING>, TypeError {}

/**
 * `ERR_IMPORT_ASSERTION_TYPE_MISSING` message arguments.
 *
 * @see {@linkcode Stringifiable}
 */
type Args = [id: Stringifiable, type: Stringifiable]

/**
 * `ERR_IMPORT_ASSERTION_TYPE_MISSING` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrImportAssertionTypeMissing}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrImportAssertionTypeMissing,Args>}
 */
interface ErrImportAssertionTypeMissingConstructor
  extends NodeErrorConstructor<ErrImportAssertionTypeMissing, Args> {
  /**
   * Create a new `ERR_IMPORT_ASSERTION_TYPE_MISSING` error.
   *
   * @see {@linkcode ErrImportAssertionTypeMissing}
   * @see {@linkcode Stringifiable}
   *
   * @param {Stringifiable} id
   *  Module id
   * @param {Stringifiable} type
   *  Required import assertion type
   * @return {ErrImportAssertionTypeMissing}
   */
  new (id: Stringifiable, type: Stringifiable): ErrImportAssertionTypeMissing
}

/**
 * `ERR_IMPORT_ASSERTION_TYPE_MISSING` model.
 *
 * Thrown when an import assertion is missing, thus preventing the specified
 * module from being imported.
 *
 * @see {@linkcode ErrImportAssertionTypeMissingConstructor}
 *
 * @type {ErrImportAssertionTypeMissingConstructor}
 *
 * @class
 */
const ERR_IMPORT_ASSERTION_TYPE_MISSING:
  ErrImportAssertionTypeMissingConstructor = E(
    codes.ERR_IMPORT_ASSERTION_TYPE_MISSING,
    TypeError,
    'Module \'%s\' needs an import assertion of type \'%s\''
  )

export {
  ERR_IMPORT_ASSERTION_TYPE_MISSING as default,
  type ErrImportAssertionTypeMissing,
  type Args as ErrImportAssertionTypeMissingArgs,
  type ErrImportAssertionTypeMissingConstructor
}
