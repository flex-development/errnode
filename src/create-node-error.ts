/**
 * @file createNodeError
 * @module errnode/createNodeError
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L367-L404
 */

import type { ErrorCode } from '#src/enums'
import formatMessage from '#src/internal/format-message'
import kIsNodeError from '#src/internal/k-is-node-error'
import prepareStackTrace from '#src/internal/prepare-stack-trace'
import type { MessageFn, NodeError, NodeErrorConstructor } from '#src/types'

/**
 * Creates a Node.js error constructor.
 *
 * @template B - Error base class type
 * @template M - Error message type
 * @template T - Error base type
 *
 * @constructs NodeError<T>
 *
 * @param {ErrorCode} code - Node.js error code
 * @param {B} Base - Error base class
 * @param {M} message - Error message or message function
 * @return {NodeErrorConstructor<B, M>} `NodeError` constructor
 */
function createNodeError<
  B extends ErrorConstructor = ErrorConstructor,
  M extends MessageFn | string = MessageFn | string,
  T extends B['prototype'] = B['prototype']
>(code: ErrorCode, Base: B, message: M): NodeErrorConstructor<B, M, T> {
  /**
   * Creates a Node.js error.
   *
   * [1]: https://nodejs.org/api/util.html#utilformatformat-args
   *
   * @class
   * @implements {NodeError<T>}
   *
   * @param {any[] | Parameters<M>} args - `message` params if `message` is a
   * function; [`util.format`][1] arguments if `message` is a string
   * @return {NodeError<T>} Node.js error instance
   */
  function NodeError(
    ...args: M extends MessageFn ? Parameters<M> : any[]
  ): NodeError<T> {
    /**
     * Node.js error instance.
     *
     * @const {NodeError<T>} error
     */
    const error: NodeError<T> = new Base() as NodeError<T>

    // define error symbol
    Object.defineProperty(error, kIsNodeError, {
      configurable: true,
      enumerable: false,
      value: true,
      writable: false
    })

    // define instance properties and methods
    Object.defineProperties(error, {
      code: {
        configurable: true,
        enumerable: false,
        value: code,
        writable: true
      },
      message: {
        configurable: true,
        enumerable: false,
        value: formatMessage(code, message, args, error),
        writable: true
      },
      toString: {
        configurable: true,
        enumerable: false,
        /**
         * Returns a string representation of the error.
         *
         * @this {NodeError<T>}
         *
         * @return {string} String representation of error
         */
        value(this: NodeError<T>): string {
          return `${this.name} [${this.code}]: ${this.message}`
        },
        writable: true
      }
    })

    // add stack trace
    prepareStackTrace(error)

    return error
  }

  return NodeError as NodeErrorConstructor<B, M, T>
}

export default createNodeError
