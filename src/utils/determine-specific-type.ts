/**
 * @file Utilities - determineSpecificType
 * @module errnode/utils/determineSpecificType
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L988-L1041
 */

import { inspect } from 'node-inspect-extracted'

/**
 * Determine the specific type of a value for type-mismatch errors.
 *
 * @param {unknown} value - Value to check
 * @return {string} Specific type of `value`
 */
function determineSpecificType(value: unknown): string {
  /**
   * Type of {@linkcode value}.
   *
   * @const {string} type
   */
  const type: string = typeof value

  /**
   * Specific type.
   *
   * @var {string} specificType
   */
  let specificType: string = ''

  switch (type) {
    case 'object':
    case 'undefined':
      specificType = value?.constructor && 'name' in value.constructor
        ? `an instance of ${value.constructor.name}`
        : inspect(value, { depth: -1 })
      break
    case 'function':
      specificType = `type ${type} ${(<(...args: any[]) => any>value).name}`
      break
    case 'string':
      // @ts-expect-error `value` is a string (18046).
      value.length > 28 && (value = `${(<string>value).slice(0, 25)}...`)
      specificType = `type ${type} (${inspect(value)})`
      break
    default:
      specificType = `type ${type} (${inspect(value)})`
      break
  }

  return specificType
}

export default determineSpecificType
