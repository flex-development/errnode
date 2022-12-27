/**
 * @file Type Definitions - MessageFn
 * @module create-node-error/types/MessageFn
 */

/**
 * Formats an error message.
 *
 * @template Args - Function parameters
 *
 * @param {Args} args - Function parameters
 * @return {string} Formatted error message
 */
type MessageFn<Args extends any[] = any[]> = (...args: Args) => string

export type { MessageFn as default }
