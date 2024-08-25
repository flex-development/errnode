/**
 * @file Interfaces - NodeError
 * @module errnode/interfaces/NodeError
 */

import type { Code } from '#src/types'

/**
 * Node.js error.
 *
 * @see {@linkcode Code}
 *
 * @template {Code} [T=Code] - Error code
 *
 * @extends {Error}
 */
interface NodeError<T extends Code = Code> extends Error {
  /**
   * Node.js error code.
   */
  code: T

  /**
   * Get a string representation of the error.
   *
   * @return {string} String representation of error
   */
  toString(): string
}

export type { NodeError as default }
