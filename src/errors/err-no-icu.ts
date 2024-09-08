/**
 * @file Errors - ERR_NO_ICU
 * @module errnode/errors/ERR_NO_ICU
 * @see https://github.com/nodejs/node/blob/v22.8.0/lib/internal/errors.js#L1605-L1606
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'

/**
 * `ERR_NO_ICU` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_no_icu
 *
 * @extends {NodeError<codes.ERR_NO_ICU>}
 * @extends {TypeError}
 */
interface ErrNoIcu extends NodeError<codes.ERR_NO_ICU>, TypeError {}

/**
 * `ERR_NO_ICU` message arguments.
 */
type Args = [feature: string]

/**
 * `ERR_NO_ICU` constructor.
 *
 * @see {@linkcode ErrNoIcu}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrNoIcu,Args>}
 */
interface ErrNoIcuConstructor extends NodeErrorConstructor<ErrNoIcu, Args> {
  /**
   * Create a new `ERR_NO_ICU` error.
   *
   * @see {@linkcode ErrNoIcu}
   *
   * @param {string} feature
   *  Description of feature that requires ICU
   * @return {ErrNoIcu}
   */
  new (feature: string): ErrNoIcu
}

/**
 * `ERR_NO_ICU` model.
 *
 * Thrown when an attempt was made to use features that require [ICU][icu], but
 * Node.js was not compiled with ICU support.
 *
 * [icu]: https://nodejs.org/api/intl.html#internationalization-support
 *
 * @see {@linkcode ErrNoIcuConstructor}
 *
 * @type {ErrNoIcuConstructor}
 *
 * @class
 */
const ERR_NO_ICU: ErrNoIcuConstructor = E(
  codes.ERR_NO_ICU,
  TypeError,
  '%s is not supported on Node.js compiled without ICU'
)

export {
  ERR_NO_ICU as default,
  type ErrNoIcu,
  type Args as ErrNoIcuArgs,
  type ErrNoIcuConstructor
}
