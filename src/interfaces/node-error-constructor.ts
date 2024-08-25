/**
 * @file Interfaces - NodeErrorConstructor
 * @module errnode/interfaces/NodeErrorConstructor
 */

import type NodeError from './node-error'

/**
 * Node.js error constructor.
 *
 * @see {@linkcode NodeError}
 *
 * @template {NodeError} [T=NodeError]
 *  Node error
 * @template {ReadonlyArray<any>} [Args=any[]]
 *  Message arguments
 */
interface NodeErrorConstructor<
  T extends NodeError = NodeError,
  Args extends readonly any[] = any[]
> {
  /**
   * Create a new Node.js error.
   *
   * @param {Args} args
   *  Message arguments
   * @return {T}
   *  Node.js error instance
   */
  new (...args: Args): T

  /**
   * Create a new Node.js error.
   *
   * @param {Args} args
   *  Message arguments
   * @return {T}
   *  Node.js error instance
   */
  (...args: Args): T

  /**
   * Node.js error prototype.
   */
  readonly prototype: T
}

export type { NodeErrorConstructor as default }
