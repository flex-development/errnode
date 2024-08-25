/**
 * @file Errors - ERR_NETWORK_IMPORT_DISALLOWED
 * @module errnode/errors/ERR_NETWORK_IMPORT_DISALLOWED
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1485-L1486
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'

/**
 * `ERR_NETWORK_IMPORT_DISALLOWED` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_network_import_disallowed
 *
 * @extends {NodeError<codes.ERR_NETWORK_IMPORT_DISALLOWED>}
 */
interface ErrNetworkImportDisallowed
  extends NodeError<codes.ERR_NETWORK_IMPORT_DISALLOWED> {}

/**
 * `ERR_NETWORK_IMPORT_DISALLOWED` message arguments.
 */
type Args = [specifier: string, base: string, reason: string]

/**
 * `ERR_NETWORK_IMPORT_DISALLOWED` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrNetworkImportDisallowed}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrNetworkImportDisallowed,Args>}
 */
interface ErrNetworkImportDisallowedConstructor
  extends NodeErrorConstructor<ErrNetworkImportDisallowed, Args> {
  /**
   * Create a new `ERR_NETWORK_IMPORT_DISALLOWED` error.
   *
   * @see {@linkcode ErrNetworkImportDisallowed}
   *
   * @param {string} specifier
   *  Invalid module specifier
   * @param {string} base
   *  Id of module `specifier` was imported from
   * @param {string} reason
   *  Reason for error
   * @return {ErrNetworkImportDisallowed}
   */
  new (
    specifier: string,
    base: string,
    reason: string
  ): ErrNetworkImportDisallowed
}

/**
 * `ERR_NETWORK_IMPORT_DISALLOWED` model.
 *
 * Thrown when a network module attempts to load another module that it is not
 * allowed to load.
 *
 * @see {@linkcode ErrNetworkImportDisallowedConstructor}
 *
 * @type {ErrNetworkImportDisallowedConstructor}
 *
 * @class
 */
const ERR_NETWORK_IMPORT_DISALLOWED: ErrNetworkImportDisallowedConstructor = E(
  codes.ERR_NETWORK_IMPORT_DISALLOWED,
  Error,
  'import of \'%s\' by %s is not supported: %s'
)

export {
  ERR_NETWORK_IMPORT_DISALLOWED as default,
  type ErrNetworkImportDisallowed,
  type Args as ErrNetworkImportDisallowedArgs,
  type ErrNetworkImportDisallowedConstructor
}
