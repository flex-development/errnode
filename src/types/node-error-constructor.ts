/**
 * @file Type Definitions - NodeErrorConstructor
 * @module errnode/types/NodeErrorConstructor
 */

import type { Omit } from '@flex-development/tutils'
import type MessageFn from './fn-message'
import type NodeError from './node-error'

/**
 * {@linkcode NodeErrorConstructor} arguments helper.
 *
 * [1]: https://nodejs.org/api/util.html#utilformatformat-args
 *
 * @template M - Error message type, [`util.format`][1] arguments type, or
 * custom message function parameters type
 */
type Args<M extends MessageFn | unknown[] | string> = M extends MessageFn
  ? Parameters<M>
  : M extends unknown[]
  ? M
  : any[]

/**
 * Node.js error constructor type.
 *
 * [1]: https://nodejs.org/api/util.html#utilformatformat-args
 *
 * @template B - Error base class type
 * @template M - Error message type, [`util.format`][1] arguments type, or
 * custom message function parameters type
 * @template T - Error base type
 *
 * @extends {Omit<B, 'prototype'>}
 */
type NodeErrorConstructor<
  B extends ErrorConstructor = ErrorConstructor,
  M extends MessageFn | unknown[] | string = MessageFn,
  T extends B['prototype'] = B['prototype']
> = Omit<B, 'prototype'> & {
  (...args: Args<M>): NodeError<T>
  new (...args: Args<M>): NodeError<T>
  readonly prototype: NodeError<T>
}

export type { NodeErrorConstructor as default }
