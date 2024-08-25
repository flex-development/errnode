/**
 * @file Errors - ERR_MISSING_OPTION
 * @module errnode/errors/ERR_MISSING_OPTION
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1580
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'

/**
 * `ERR_MISSING_OPTION` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_missing_option
 *
 * @extends {NodeError<codes.ERR_MISSING_OPTION>}
 * @extends {TypeError}
 */
interface ErrMissingOption
  extends NodeError<codes.ERR_MISSING_OPTION>, TypeError {}

/**
 * `ERR_MISSING_OPTION` message arguments.
 */
type Args = [option: string]

/**
 * `ERR_MISSING_OPTION` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrMissingOption}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrMissingOption,Args>}
 */
interface ErrMissingOptionConstructor
  extends NodeErrorConstructor<ErrMissingOption, Args> {
  /**
   * Create a new `ERR_MISSING_OPTION` error.
   *
   * @see {@linkcode ErrMissingOption}
   *
   * @param {string} option
   *  Option name
   * @return {ErrMissingOption}
   */
  new (option: string): ErrMissingOption
}

/**
 * `ERR_MISSING_OPTION` model.
 *
 * Thrown when a required option is missing. For APIs that accept options
 * objects, some options might be mandatory.
 *
 * @see {@linkcode ErrMissingOptionConstructor}
 *
 * @type {ErrMissingOptionConstructor}
 *
 * @class
 */
const ERR_MISSING_OPTION: ErrMissingOptionConstructor = E(
  codes.ERR_MISSING_OPTION,
  TypeError,
  '%s is required'
)

export {
  ERR_MISSING_OPTION as default,
  type ErrMissingOption,
  type Args as ErrMissingOptionArgs,
  type ErrMissingOptionConstructor
}
