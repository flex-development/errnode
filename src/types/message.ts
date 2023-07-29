/**
 * @file Type Definitions - Message
 * @module errnode/types/Message
 */

import type MessageFn from './fn-message'

/**
 * Construct a type representing an error message string or a function that
 * returns an error message.
 *
 * [1]: https://nodejs.org/api/util.html#utilformatformat-args
 *
 * @template T - Message function, message string, or [`util.format`][1] args
 */
type Message<
  T extends MessageFn | string | readonly unknown[] = MessageFn | string
> = T extends MessageFn ? T : T extends string ? T : string

export type { Message as default }
