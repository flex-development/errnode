/**
 * @file Errors - ERR_UNKNOWN_BUILTIN_MODULE
 * @module errnode/errors/ERR_UNKNOWN_BUILTIN_MODULE
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1815
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'

/**
 * `ERR_UNKNOWN_BUILTIN_MODULE` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_unknown_builtin_module
 *
 * @extends {NodeError<codes.ERR_UNKNOWN_BUILTIN_MODULE>}
 */
interface ErrUnknownBuiltinModule
  extends NodeError<codes.ERR_UNKNOWN_BUILTIN_MODULE> {}

/**
 * `ERR_UNKNOWN_BUILTIN_MODULE` message arguments.
 */
type Args = [name: string]

/**
 * `ERR_UNKNOWN_BUILTIN_MODULE` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrUnknownBuiltinModule}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrUnknownBuiltinModule,Args>}
 */
interface ErrUnknownBuiltinModuleConstructor
  extends NodeErrorConstructor<ErrUnknownBuiltinModule, Args> {
  /**
   * Create a new `ERR_UNKNOWN_BUILTIN_MODULE` error.
   *
   * @see {@linkcode ErrUnknownBuiltinModule}
   *
   * @param {string} name
   *  Name of unknown module
   * @return {ErrUnknownBuiltinModule}
   */
  new (name: string): ErrUnknownBuiltinModule
}

/**
 * `ERR_UNKNOWN_BUILTIN_MODULE` model.
 *
 * Thrown when an unknown [builtin module][1] is encountered.
 *
 * [1]: https://nodejs.org/api/module.html#modulebuiltinmodules
 *
 * @see {@linkcode ErrUnknownBuiltinModuleConstructor}
 *
 * @type {ErrUnknownBuiltinModuleConstructor}
 *
 * @class
 */
const ERR_UNKNOWN_BUILTIN_MODULE: ErrUnknownBuiltinModuleConstructor = E(
  codes.ERR_UNKNOWN_BUILTIN_MODULE,
  Error,
  'No such built-in module: %s'
)

export {
  ERR_UNKNOWN_BUILTIN_MODULE as default,
  type ErrUnknownBuiltinModule,
  type Args as ErrUnknownBuiltinModuleArgs,
  type ErrUnknownBuiltinModuleConstructor
}
