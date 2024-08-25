/**
 * @file Errors - ERR_IMPORT_ASSERTION_TYPE_FAILED
 * @module errnode/errors/ERR_IMPORT_ASSERTION_TYPE_FAILED
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1164-L1165
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'

/**
 * `ERR_IMPORT_ASSERTION_TYPE_FAILED` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_import_assertion_type_failed
 *
 * @extends {NodeError<codes.ERR_IMPORT_ASSERTION_TYPE_FAILED>}
 * @extends {TypeError}
 */
interface ErrImportAssertionTypeFailed
  extends NodeError<codes.ERR_IMPORT_ASSERTION_TYPE_FAILED>, TypeError {}

/**
 * `ERR_IMPORT_ASSERTION_TYPE_FAILED` message arguments.
 */
type Args = [id: string, type: string]

/**
 * `ERR_IMPORT_ASSERTION_TYPE_FAILED` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrImportAssertionTypeFailed}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrImportAssertionTypeFailed,Args>}
 */
interface ErrImportAssertionTypeFailedConstructor
  extends NodeErrorConstructor<ErrImportAssertionTypeFailed, Args> {
  /**
   * Create a new `ERR_IMPORT_ASSERTION_TYPE_FAILED` error.
   *
   * @see {@linkcode ErrImportAssertionTypeFailed}
   *
   * @param {string} id
   *  Id of module that cannot be imported
   * @param {string} type
   *  Invalid import assertion type
   * @return {ErrImportAssertionTypeFailed}
   */
  new (id: string, type: string): ErrImportAssertionTypeFailed
}

/**
 * `ERR_IMPORT_ASSERTION_TYPE_FAILED` model.
 *
 * Thrown when an import assertion has failed, preventing the specified module
 * from being imported.
 *
 * @see {@linkcode ErrImportAssertionTypeFailedConstructor}
 *
 * @type {ErrImportAssertionTypeFailedConstructor}
 *
 * @class
 */
const ERR_IMPORT_ASSERTION_TYPE_FAILED:
  ErrImportAssertionTypeFailedConstructor = E(
    codes.ERR_IMPORT_ASSERTION_TYPE_FAILED,
    TypeError,
    'Module \'%s\' is not of type \'%s\''
  )

export {
  ERR_IMPORT_ASSERTION_TYPE_FAILED as default,
  type ErrImportAssertionTypeFailed,
  type Args as ErrImportAssertionTypeFailedArgs,
  type ErrImportAssertionTypeFailedConstructor
}
