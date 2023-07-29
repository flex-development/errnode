/**
 * @file Interfaces - NodeErrorConstructor
 * @module errnode/interfaces/NodeErrorConstructor
 */

import type { MessageFn, NodeError } from '#src/types'
import type { Fn } from '@flex-development/tutils'
import type CallSite from './call-site'

/**
 * {@linkcode NodeErrorConstructor} arguments helper.
 *
 * @internal
 *
 * @template M - Message function, message string, or `util.format` arguments
 */
type Args<M extends MessageFn | string | readonly unknown[]> =
  M extends MessageFn ? Parameters<M> : M extends readonly unknown[] ? M : any[]

/**
 * Node.js error constructor.
 *
 * [1]: https://nodejs.org/api/util.html#utilformatformat-args
 *
 * @template T - Error prototype
 * @template M - Message function, message string, or [`util.format`][1] args
 */
interface NodeErrorConstructor<
  T extends Error = Error,
  M extends MessageFn | string | readonly unknown[] = any[]
> {
  /**
   * Creates a new Node.js error.
   *
   * @param {Args<M>} args - Custom message function or `util.format` arguments
   * @return {NodeError<T>} Node.js error instance
   */
  new (...args: Args<M>): NodeError<T>

  /**
   * Create a `.stack` property on a target object.
   *
   * @see https://nodejs.org/api/errors.html#errorcapturestacktracetargetobject-constructoropt
   *
   * @param {Error} err - Target object
   * @param {Fn} ctor - Constructor to omit from stack trace
   * @return {void} Nothing when complete
   */
  captureStackTrace(err: Error, ctor?: Fn): void

  /**
   * Stack trace formatter.
   *
   * @see https://v8.dev/docs/stack-trace-api#customizing-stack-traces
   *
   * @template T - Error object type
   * @template F - Formatted stack trace type
   *
   * @param {T} err - Error to prepare stack trace for
   * @param {CallSite[]} traces - Structured representation of `err.stack`
   * @return {F} Formatted stack trace
   */
  prepareStackTrace?<T extends Error, F = any>(err: T, traces: CallSite[]): F

  /**
   * Node.js error prototype.
   *
   * @see {@linkcode NodeError}
   */
  readonly prototype: NodeError<T>

  /**
   * Number of stack frames collected by a stack trace.
   *
   * @see https://nodejs.org/api/errors.html#errorstacktracelimit
   */
  stackTraceLimit: number
}

export type { NodeErrorConstructor as default, Args }
