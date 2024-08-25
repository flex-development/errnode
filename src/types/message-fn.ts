/**
 * @file Type Aliases - MessageFn
 * @module errnode/types/MessageFn
 */

import type { NodeError } from '#src/interfaces'

/**
 * Build an error message.
 *
 * @template {NodeError} [T=NodeError]
 *  Node error
 * @template {ReadonlyArray<any>} [Args=any[]]
 *  Message arguments
 *
 * @this {T}
 *
 * @param {Args} args - Message arguments
 * @return {string} Error message
 */
type MessageFn<
  T extends NodeError = NodeError,
  Args extends readonly any[] = any[]
> = (this: T, ...args: Args) => string

export type { MessageFn as default }
