/**
 * @file Utilities - determineSpecificType
 * @module errnode/utils/determineSpecificType
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L878-L896
 */

import {
  cast,
  isFunction,
  isNull,
  isObject,
  isUndefined,
  truncate,
  type Fn
} from '@flex-development/tutils'
import { inspect } from 'node-inspect-extracted'

/**
 * Determines the specific type of a value for type-mismatch errors.
 *
 * @param {unknown} value - Value to evaluate
 * @return {string} Specific type of `value`
 */
const determineSpecificType = (value: unknown): string => {
  /**
   * Specific type of `value`.
   *
   * @var {string} type
   */
  let type: string = ''

  switch (true) {
    case isFunction(value):
      type = `function ${cast<Fn>(value).name}`
      break
    case isObject(value):
    case isNull(value):
      type = value?.constructor?.name
        ? `an instance of ${value.constructor.name}`
        : inspect(value, { depth: -1 })
      break
    case isUndefined(value):
      type = typeof value
      break
    default:
      /**
       * String representation of {@linkcode value}.
       *
       * @var {string} inspected
       */
      let inspected: string = inspect(value, { colors: false })

      // truncate inspected value
      if (inspected.length > 28) inspected = truncate(inspected, 28)

      type = `type ${typeof value} (${inspected})`
      break
  }

  return type
}

export default determineSpecificType
