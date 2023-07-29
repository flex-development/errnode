/**
 * @file Type Definitions - MessageFn
 * @module errnode/types/MessageFn
 */

import type { Fn } from '@flex-development/tutils'

/**
 * Error message generator.
 *
 * @template A - Function parameters type
 *
 * @return {string} Error message
 */
type MessageFn<A extends readonly unknown[] = any[]> = Fn<A, string>

export type { MessageFn as default }
