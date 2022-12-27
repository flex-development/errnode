/**
 * @file Type Definitions - NodeError
 * @module create-node-error/types/NodeError
 */

import type { ErrorCode } from '#src/enums'

/**
 * Node.js error.
 *
 * @template T - Error base type
 *
 * @extends {T}
 */
type NodeError<T extends Error = Error> = T & {
  /**
   * Error code.
   */
  code: ErrorCode
}

export type { NodeError as default }
