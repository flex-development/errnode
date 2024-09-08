/**
 * @file Errors - ERR_ARG_NOT_ITERABLE
 * @module errnode/errors/ERR_ARG_NOT_ITERABLE
 * @see https://github.com/nodejs/node/blob/v22.8.0/lib/internal/errors.js#L1122
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'

/**
 * `ERR_ARG_NOT_ITERABLE` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_arg_not_iterable
 *
 * @extends {NodeError<codes.ERR_ARG_NOT_ITERABLE>}
 * @extends {TypeError}
 */
interface ErrArgNotIterable
  extends NodeError<codes.ERR_ARG_NOT_ITERABLE>, TypeError {}

/**
 * `ERR_ARG_NOT_ITERABLE` message arguments.
 */
type Args = [arg: unknown]

/**
 * `ERR_ARG_NOT_ITERABLE` constructor.
 *
 * @see {@linkcode ErrArgNotIterable}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrArgNotIterable,Args>}
 */
interface ErrArgNotIterableConstructor
  extends NodeErrorConstructor<ErrArgNotIterable, Args> {
  /**
   * Create a new `ERR_ARG_NOT_ITERABLE` error.
   *
   * @see {@linkcode ErrArgNotIterable}
   *
   * @param {unknown} arg
   *  Description of non-iterable argument, or the non-iterable argument
   * @return {ErrArgNotIterable}
   */
  new (arg: unknown): ErrArgNotIterable
}

/**
 * `ERR_ARG_NOT_ITERABLE` model.
 *
 * Thrown when an iterable argument (i.e. a value that works with `for...of`
 * loops) is required, but not provided to a Node.js API.
 *
 * @see {@linkcode ErrArgNotIterableConstructor}
 *
 * @type {ErrArgNotIterableConstructor}
 *
 * @class
 */
const ERR_ARG_NOT_ITERABLE: ErrArgNotIterableConstructor = E(
  codes.ERR_ARG_NOT_ITERABLE,
  TypeError,
  '%s must be iterable'
)

export {
  ERR_ARG_NOT_ITERABLE as default,
  type ErrArgNotIterable,
  type Args as ErrArgNotIterableArgs,
  type ErrArgNotIterableConstructor
}
