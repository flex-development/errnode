/**
 * @file Type Definitions - NodeErrorConstructor
 * @module errnode/types/NodeErrorConstructor
 */

import type { Overwrite } from '@flex-development/tutils'
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
type Args<M extends any[] | MessageFn | string> = M extends MessageFn
  ? Parameters<M>
  : M extends any[]
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
 * @extends {Overwrite<B, B>}
 */
type NodeErrorConstructor<
  B extends ErrorConstructor = ErrorConstructor,
  M extends any[] | MessageFn | string = MessageFn,
  T extends B['prototype'] = B['prototype']
> = Overwrite<B, B> & {
  (...args: Args<M>): NodeError<T>
  new (...args: Args<M>): NodeError<T>
  readonly prototype: NodeError<T>
}

export type { NodeErrorConstructor as default }
