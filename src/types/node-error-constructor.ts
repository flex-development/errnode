/**
 * @file Type Definitions - NodeErrorConstructor
 * @module create-node-error/types/NodeErrorConstructor
 */

import type { Overwrite } from '@flex-development/tutils'
import type MessageFn from './fn-message'
import type NodeError from './node-error'

/**
 * Node.js error constructor type.
 *
 * @template B - Error constructor type
 * @template M - Error message type
 * @template T - Error base type
 *
 * @extends {Overwrite<B, B>}
 */
type NodeErrorConstructor<
  B extends ErrorConstructor = ErrorConstructor,
  M extends MessageFn | string = string,
  T extends B['prototype'] = B['prototype']
> = Overwrite<B, B> & {
  new (...args: M extends MessageFn ? Parameters<M> : any[]): NodeError<T>
  (...args: M extends MessageFn ? Parameters<M> : any[]): NodeError<T>
}

export type { NodeErrorConstructor as default }
