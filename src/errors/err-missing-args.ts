/**
 * @file Errors - ERR_MISSING_ARGS
 * @module errnode/errors/ERR_MISSING_ARGS
 * @see https://github.com/nodejs/node/blob/v22.8.0/lib/internal/errors.js#L1565-L1579
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import { formatList } from '#src/utils'
import { ok } from 'devlop'

/**
 * `ERR_MISSING_ARGS` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_missing_args
 *
 * @extends {NodeError<codes.ERR_MISSING_ARGS>}
 * @extends {TypeError}
 */
interface ErrMissingArgs extends NodeError<codes.ERR_MISSING_ARGS>, TypeError {}

/**
 * `ERR_MISSING_ARGS` message arguments.
 */
type Args = [name: string | string[], ...names: (string | string[])[]]

/**
 * `ERR_MISSING_ARGS` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrMissingArgs}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrMissingArgs,Args>}
 */
interface ErrMissingArgsConstructor
  extends NodeErrorConstructor<ErrMissingArgs, Args> {
  /**
   * Create a new `ERR_MISSING_ARGS` error.
   *
   * @see {@linkcode ErrMissingArgs}
   *
   * @param {string} name
   *  Name of missing argument
   * @param {(string | string[])[]} names
   *  List of missing arguments
   * @return {ErrMissingArgs}
   */
  new (name: string, ...names: (string | string[])[]): ErrMissingArgs
}

/**
 * `ERR_MISSING_ARGS` model.
 *
 * Thrown when a required argument of a Node.js API was not passed.
 *
 * @see {@linkcode ErrMissingArgsConstructor}
 *
 * @type {ErrMissingArgsConstructor}
 *
 * @class
 */
const ERR_MISSING_ARGS: ErrMissingArgsConstructor = E(
  codes.ERR_MISSING_ARGS,
  TypeError,
  /**
   * @param {(string | string[])[]} names
   *  List of missing arguments
   * @return {string}
   *  Error message
   */
  function message(...names: (string | string[])[]): string {
    ok(names.length, 'At least one arg needs to be specified')

    /**
     * Wrap a string in quotes.
     *
     * @param {string} a
     *  String to wrap
     * @return {string}
     *  Wrapped string
     */
    const wrap = (a: string): string => `"${a}"`

    /**
     * Error message.
     *
     * @var {string} message
     */
    let message: string = 'The '

    message += formatList(names.map(a => {
      /* c8 ignore next 2 */ return Array.isArray(a)
        ? a.map(wrap).join(' or ')
        : wrap(a)
    }))

    return `${message} argument${names.length > 1 ? 's' : ''} must be specified`
  }
)

export {
  ERR_MISSING_ARGS as default,
  type ErrMissingArgs,
  type Args as ErrMissingArgsArgs,
  type ErrMissingArgsConstructor
}
