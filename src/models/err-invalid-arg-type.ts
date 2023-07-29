/**
 * @file Error Models - ERR_INVALID_ARG_TYPE
 * @module errnode/models/ERR_INVALID_ARG_TYPE
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1197-L1286
 */

import { ErrorCode } from '#src/enums'
import type { NodeErrorConstructor } from '#src/interfaces'
import formatList from '#src/internal/format-list'
import type { MessageFn, NodeError } from '#src/types'
import { createNodeError, determineSpecificType } from '#src/utils'
import {
  DOT,
  includes,
  isArray,
  lowercase,
  type OneOrMany
} from '@flex-development/tutils'

/**
 * `ERR_INVALID_ARG_TYPE` model.
 *
 * Thrown when an argument of the wrong type is passed to a Node.js API.
 *
 * @see https://nodejs.org/api/errors.html#err_invalid_arg_type
 *
 * @class
 *
 * @param {string} name - Name of invalid argument or property
 * @param {OneOrMany<string>} expected - Expected type(s)
 * @param {unknown} actual - Value supplied by user
 * @return {NodeError<TypeError>} New `TypeError` instance
 */
const ERR_INVALID_ARG_TYPE: NodeErrorConstructor<
  TypeError,
  MessageFn<[string, OneOrMany<string>, unknown]>
> = createNodeError(
  ErrorCode.ERR_INVALID_ARG_TYPE,
  TypeError,
  /**
   * Creates an [`ERR_INVALID_ARG_TYPE`][1] message.
   *
   * [1]: https://nodejs.org/api/errors.html#err_invalid_arg_type
   *
   * @param {string} name - Name of invalid argument or property
   * @param {OneOrMany<string>} expected - Expected type(s)
   * @param {unknown} actual - Value supplied by user
   * @return {string} Error message
   * @throws {TypeError} If `name` is not a string, `expected` is not a string,
   * or `expected` is not an array containing only string values
   */
  (name: string, expected: OneOrMany<string>, actual: unknown): string => {
    // ensure name is a string
    if (typeof name !== 'string') throw new TypeError("'name' must be a string")

    // ensure expected is an array
    if (!isArray(expected)) expected = [expected]

    /**
     * Primitive value names.
     *
     * Sorted by a rough estimate on most frequently used entries.
     *
     * @const {Set<string>} k_types
     */
    const k_types: Set<string> = new Set([
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
     * @var {string} msg
     */
    let msg: string = 'The '

    // stylize invalid argument name
    msg += name.endsWith(' argument')
      ? name
      : `'${name}' ${includes(name, DOT) ? 'property' : 'argument'}`

    // continue building error message
    msg += ' must be '

    /**
     * Names of expected class instances.
     *
     * @const {string[]} instances
     */
    const instances: string[] = []

    /**
     * Names of other expected types.
     *
     * @const {string[]} other
     */
    const other: string[] = []

    /**
     * Names of expected primitive types.
     *
     * @const {string[]} types
     */
    const types: string[] = []

    // get expected types
    for (const value of expected) {
      if (typeof value !== 'string') {
        throw new TypeError('`expected` must be a string or string[]')
      }

      if (k_types.has(value)) types.push(value.toLowerCase())
      else if (/^([A-Z][\da-z]*)+$/.exec(value)) instances.push(value)
      else other.push(value)
    }

    // special case: handle `object` in case other instances are allowed to
    // outline the differences between each other
    if (instances.length > 0) {
      /**
       * Position of `'object'` in {@linkcode types}.
       *
       * @const {number} pos
       */
      const pos: number = types.indexOf('object')

      // replace 'object' in types with 'Object' in instances
      if (pos !== -1) {
        types.splice(pos, 1)
        instances.push('Object')
      }
    }

    // add expected primitive types to error message
    if (types.length > 0) {
      msg += `${types.length > 1 ? 'one ' : ''}of type`
      msg += ` ${formatList(types, 'or')}`
      if (instances.length > 0 || other.length > 0) msg += ' or '
    }

    // add expected class instances to error message
    if (instances.length > 0) {
      msg += `an instance of ${formatList(instances, 'or')}`
      if (other.length > 0) msg += ' or '
    }

    // add other expected types to error message
    if (other.length > 0) {
      if (other.length > 1) {
        msg += `one of ${formatList(other, 'or')}`
      } else {
        /* c8 ignore next */
        if (lowercase(other[0]!) !== other[0]) msg += 'an '
        msg += `${other[0]}`
      }
    }

    return `${msg}. Received ${determineSpecificType(actual)}`
  }
)

export default ERR_INVALID_ARG_TYPE
