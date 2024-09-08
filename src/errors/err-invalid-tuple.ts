/**
 * @file Errors - ERR_INVALID_TUPLE
 * @module errnode/errors/ERR_INVALID_TUPLE
 * @see https://github.com/nodejs/node/blob/v22.8.0/lib/internal/errors.js#L1530
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'

/**
 * `ERR_INVALID_TUPLE` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_invalid_tuple
 *
 * @extends {NodeError<codes.ERR_INVALID_TUPLE>}
 * @extends {TypeError}
 */
interface ErrInvalidTuple
  extends NodeError<codes.ERR_INVALID_TUPLE>, TypeError {}

/**
 * `ERR_INVALID_TUPLE` message arguments.
 */
type Args = [description: string, tuple: string]

/**
 * `ERR_INVALID_TUPLE` constructor.
 *
 * @see {@linkcode ErrInvalidTuple}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrInvalidTuple,Args>}
 */
interface ErrInvalidTupleConstructor
  extends NodeErrorConstructor<ErrInvalidTuple, Args> {
  /**
   * Create a new `ERR_INVALID_TUPLE` error.
   *
   * @see {@linkcode ErrInvalidTuple}
   *
   * @param {string} description
   *  Description of required tuple
   * @param {string} tuple
   *  String representation of tuple
   * @return {ErrInvalidTuple}
   */
  new (description: string, tuple: string): ErrInvalidTuple
}

/**
 * `ERR_INVALID_TUPLE` model.
 *
 * Thrown when an element in the iterable provided to the [WHATWG][whatwg]
 * [`URLSearchParams` constructor][constructor] did not represent a
 * `[name, value]` tuple.
 *
 * [constructor]: https://nodejs.org/api/url.html#new-urlsearchparamsiterable
 * [whatwg]: https://nodejs.org/api/url.html#the-whatwg-url-api
 *
 * @see {@linkcode ErrInvalidTupleConstructor}
 *
 * @type {ErrInvalidTupleConstructor}
 *
 * @class
 */
const ERR_INVALID_TUPLE: ErrInvalidTupleConstructor = E(
  codes.ERR_INVALID_TUPLE,
  TypeError,
  '%s must be an iterable %s tuple'
)

export {
  ERR_INVALID_TUPLE as default,
  type ErrInvalidTuple,
  type Args as ErrInvalidTupleArgs,
  type ErrInvalidTupleConstructor
}
