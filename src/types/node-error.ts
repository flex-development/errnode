/**
 * @file Type Definitions - NodeError
 * @module errnode/types/NodeError
 */

import type { ErrorCode } from '#src/enums'
import type { Assign, Get } from '@flex-development/tutils'

/**
 * Node.js error.
 *
 * @template T - Error base type
 *
 * @extends {T}
 */
type NodeError<T extends Error & { code?: ErrorCode } = Error> = Assign<
  T,
  {
    /**
     * Node.js error code.
     *
     * @see {@linkcode ErrorCode}
     */
    code: Get<T, 'code', ErrorCode>
  }
>

export type { NodeError as default }
