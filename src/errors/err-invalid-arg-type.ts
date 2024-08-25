/**
 * @file Errors - ERR_INVALID_ARG_TYPE
 * @module errnode/errors/ERR_INVALID_ARG_TYPE
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1373-L1443
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import { determineSpecificType } from '#src/utils'
import formatList from '#src/utils/format-list'
import { DOT } from '@flex-development/tutils'
import { ok } from 'devlop'

/**
 * `ERR_INVALID_ARG_TYPE` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_invalid_arg_type
 *
 * @extends {NodeError<codes.ERR_INVALID_ARG_TYPE>}
 * @extends {TypeError}
 */
interface ErrInvalidArgType
  extends NodeError<codes.ERR_INVALID_ARG_TYPE>, TypeError {}

/**
 * `ERR_INVALID_ARG_TYPE` message arguments.
 */
type Args = [
  name: string,
  expected: string | readonly string[],
  actual: unknown
]

/**
 * `ERR_INVALID_ARG_TYPE` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrInvalidArgType}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrInvalidArgType,Args>}
 */
interface ErrInvalidArgTypeConstructor
  extends NodeErrorConstructor<ErrInvalidArgType, Args> {
  /**
   * Create a new `ERR_INVALID_ARG_TYPE` error.
   *
   * @see {@linkcode ErrInvalidArgType}
   *
   * @param {string} name
   *  Name of invalid argument or property
   * @param {ReadonlyArray<string> | string} expected
   *  Expected type(s)
   * @param {unknown} actual
   *  Value supplied by user
   * @return {ErrInvalidArgType}
   */
  new (
    name: string,
    expected: string | readonly string[],
    actual: unknown
  ): ErrInvalidArgType
}

/**
 * `ERR_INVALID_ARG_TYPE` model.
 *
 * Thrown when an argument of the wrong type is passed to a Node.js API.
 *
 * @see {@linkcode ErrInvalidArgTypeConstructor}
 *
 * @type {ErrInvalidArgTypeConstructor}
 *
 * @class
 */
const ERR_INVALID_ARG_TYPE: ErrInvalidArgTypeConstructor = E(
  codes.ERR_INVALID_ARG_TYPE,
  TypeError,
  /**
   * @param {string} name
   *  Name of invalid argument or property
   * @param {ReadonlyArray<string> | string} expected
   *  Expected type(s)
   * @param {unknown} actual
   *  Value supplied by user
   * @return {string}
   *  Error message
   */
  function message(
    name: string,
    expected: string | readonly string[],
    actual: unknown
  ): string {
    ok(typeof name === 'string', '\'name\' must be a string')

    if (typeof expected === 'string') expected = [expected]

    /**
     * Primitive value names.
     *
     * Sorted by a rough estimate on most frequently used entries.
     *
     * @const {Set<string>} kTypes
     */
    const kTypes: Set<string> = new Set([
      'string',
      'function',
      'number',
      'object',
      'Function',
      'Object',
      'boolean',
      'bigint',
      'symbol'
    ])

    /**
     * Error message.
     *
     * @var {string} message
     */
    let message: string = 'The '

    // stylize invalid argument name
    message += name.endsWith(' argument')
      ? name
      : `'${name}' ${name.includes(DOT) ? 'property' : 'argument'}`

    // continue building error message
    message += ' must be '

    /**
     * List of expected class instances.
     *
     * @const {string[]} instances
     */
    const instances: string[] = []

    /**
     * List of other expected types.
     *
     * @const {string[]} other
     */
    const other: string[] = []

    /**
     * List of expected primitive types.
     *
     * @const {string[]} types
     */
    const types: string[] = []

    // get expected types
    for (const value of expected) {
      ok(typeof value === 'string', 'values in `expected` must be strings')

      if (kTypes.has(value)) {
        types.push(value.toLowerCase())
      } else if (/^([A-Z][\da-z]*)+$/.exec(value)) {
        instances.push(value)
      } else {
        ok(value !== 'object', '"object" should be written as "Object"')
        other.push(value)
      }
    }

    // special case: handle `object` in case other instances are allowed to
    // outline the differences between each other
    if (instances.length) {
      /**
       * Position of `'object'` in {@linkcode types}.
       *
       * @const {number} position
       */
      const position: number = types.indexOf('object')

      // replace 'object' in types with 'Object' in instances
      if (position !== -1) {
        types.splice(position, 1)
        instances.push('Object')
      }
    }

    // add expected primitive types to error message
    if (types.length) {
      message += `${types.length > 1 ? 'one ' : ''}of type `
      message += formatList(types, 'or')
      if (instances.length || other.length) message += ' or '
    }

    // add expected class instances to error message
    if (instances.length) {
      message += 'an instance of ' + formatList(instances, 'or')
      if (other.length) message += ' or '
    }

    // add other expected types to error message
    if (other.length) {
      if (other.length > 1) {
        message += `one of ${formatList(other, 'or')}`
      } else {
        /* c8 ignore next */
        if (other[0]!.toLowerCase() !== other[0]) message += 'an '
        message += `${other[0]}`
      }
    }

    return `${message}. Received ${determineSpecificType(actual)}`
  }
)

export {
  ERR_INVALID_ARG_TYPE as default,
  type ErrInvalidArgType,
  type Args as ErrInvalidArgTypeArgs,
  type ErrInvalidArgTypeConstructor
}
