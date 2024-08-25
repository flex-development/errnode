/**
 * @file Utilities - isNodeError
 * @module errnode/utils/isNodeError
 */

import kIsNodeError from '#k-is-node-error'
import type { NodeError } from '#src/interfaces'

/**
 * Check if `value` is a {@linkcode NodeError}.
 *
 * @param {unknown} value
 *  Value to check
 * @return {value is NodeError}
 *  `true` if `value` is `NodeError`, `false` otherwise
 */
function isNodeError(value: unknown): value is NodeError {
  return (
    typeof value === 'object' &&
    value !== null &&
    value instanceof Error &&
    kIsNodeError in value &&
    value[kIsNodeError] === true
  )
}

export default isNodeError
