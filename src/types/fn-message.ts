/**
 * @file Type Definitions - MessageFn
 * @module errnode/types/MessageFn
 */

/**
 * Creates an error message.
 *
 * @template Args - Function parameters type
 *
 * @param {Args} args - Function parameters
 * @return {string} Error message
 */
type MessageFn<Args extends any[] = any[]> = (...args: Args) => string

export type { MessageFn as default }
