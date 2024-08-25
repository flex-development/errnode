/**
 * @file E
 * @module errnode/E
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L367-L404
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L547-L580
 */

import formatMessage from '#format-message'
import kIsNodeError from '#k-is-node-error'
import type {
  NodeError,
  NodeErrorConstructor,
  NodeError as NodeErrorObject
} from '#src/interfaces'
import type { Code, MessageFn } from '#src/types'
import { hideStackFrames } from '#src/utils'
import {
  captureLargerStackTrace,
  isErrorStackTraceLimitWritable
} from '#stack-trace'

/**
 * Create a Node.js error constructor.
 *
 * Constructor arguments are passed to [`format`][format] if the error `message`
 * is a string, or `message` itself if it is a function. Message functions are
 * also called with the new Node.js error instance as `this`.
 *
 * [format]: https://github.com/hildjj/node-inspect-extracted
 *
 * @see {@linkcode MessageFn}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @template {NodeErrorConstructor} T
 *  Error constructor
 *
 * @param {T['prototype']['code']} code
 *  Error code
 * @param {ErrorConstructor} Base
 *  Base class
 * @param {MessageFn<T['prototype'], Parameters<T>> | string} message
 *  Error message or function
 * @return {T}
 *  `NodeError` constructor
 */
function E<T extends NodeErrorConstructor>(
  code: T['prototype']['code'],
  Base: ErrorConstructor,
  message: MessageFn<T['prototype'], Parameters<T>> | string
): T

/**
 * Create a Node.js error constructor.
 *
 * Constructor arguments are passed to `message`. Message functions are also
 * called with the Node.js error instance as `this`.
 *
 * @see {@linkcode MessageFn}
 * @see {@linkcode NodeErrorConstructor}
 * @see {@linkcode NodeError}
 *
 * @template {NodeError} T
 *  Error type
 * @template {any[]} [Args=any[]]
 *  Message function args
 *
 * @param {T['code']} code
 *  Error code
 * @param {ErrorConstructor} Base
 *  Base class
 * @param {MessageFn<T, Args>} message
 *  Error message function
 * @return {NodeErrorConstructor<T, Args>}
 *  `NodeError` constructor
 */
function E<T extends NodeError, Args extends any[] = any[]>(
  code: T['code'],
  Base: ErrorConstructor,
  message: MessageFn<T, Args>
): NodeErrorConstructor<T, Args>

/**
 * Create a Node.js error constructor.
 *
 * Constructor arguments are passed to [`format`][format] if the error `message`
 * is a string, or `message` itself if it is a function. Message functions will
 * also be called with the new Node.js error instance as `this`.
 *
 * [format]: https://github.com/hildjj/node-inspect-extracted
 *
 * @see {@linkcode Code}
 * @see {@linkcode MessageFn}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @param {Code} code
 *  Error code
 * @param {ErrorConstructor} Base
 *  Base class
 * @param {MessageFn | string} message
 *  Error message string or function
 * @return {NodeErrorConstructor}
 *  `NodeError` constructor
 */
function E(
  code: Code,
  Base: ErrorConstructor,
  message: MessageFn | string
): NodeErrorConstructor {
  return NodeError as NodeErrorConstructor

  /**
   * Create a new Node.js error.
   *
   * @param {any[]} args
   *  Error message arguments
   * @return {NodeErrorObject}
   *  Node error object
   */
  function NodeError(...args: any[]): NodeErrorObject {
    /**
     * Node.js error.
     *
     * @var {NodeErrorObject} error
     */
    let error: NodeErrorObject

    if (isErrorStackTraceLimitWritable()) {
      const { stackTraceLimit } = Error
      Error.stackTraceLimit = 0
      // @ts-expect-error patched later.
      error = new Base()
      Error.stackTraceLimit = stackTraceLimit
    } /* c8 ignore next 3 */ else {
      // @ts-expect-error patched later.
      error = new Base()
    }

    // define non-enumerable properties
    Object.defineProperties(error, {
      [kIsNodeError]: {
        configurable: true,
        enumerable: false,
        value: true,
        writable: false
      },
      message: {
        configurable: true,
        enumerable: false,
        value: formatMessage(error, message, args),
        writable: true
      },
      toString: {
        configurable: true,
        enumerable: false,
        /**
         * Get a string representation of the error.
         *
         * @this {Error}
         *
         * @return {string}
         *  String representation of error
         */
        value: function toString(this: Error): string {
          return `${this.name} [${code}]: ${this.message}`
        },
        writable: true
      }
    })

    hideStackFrames(captureLargerStackTrace)(error)
    error.code = code

    return error
  }
}

export default E
