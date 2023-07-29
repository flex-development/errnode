/**
 * @file Utilities - createNodeError
 * @module errnode/utils/createNodeError
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L367-L404
 */

import type { ErrorCode } from '#src/enums'
import type { NodeErrorConstructor } from '#src/interfaces'
import type { Args } from '#src/interfaces/node-error-constructor'
import kIsNodeError from '#src/internal/k-is-node-error'
import type { ErrnodeConstructor, Message, MessageFn } from '#src/types'
import { cast, define, isString, regexp } from '@flex-development/tutils'
import { format } from 'node-inspect-extracted'

/**
 * Creates a Node.js error constructor.
 *
 * Constructor arguments are passed to [`util.format`][1] if the error `message`
 * is a string, or `message` itself if it is a function. Message functions will
 * also be called with the new Node.js error instance as `this`.
 *
 * [1]: https://nodejs.org/api/util.html#utilformatformat-args
 *
 * @see {@linkcode NodeErrorConstructor}
 * @see https://nodejs.org/api/util.html#utilformatformat-args
 *
 * @template B - Error base class type
 * @template M - Error message function or `util.format` arguments
 * @template T - Error prototype
 *
 * @param {ErrorCode} code - Node.js error code
 * @param {B} Base - Error base class
 * @param {Message<M>} message - Error message string or function
 * @return {NodeErrorConstructor<T, M>} `NodeError` constructor
 */
const createNodeError = <
  B extends ErrnodeConstructor,
  M extends MessageFn | string | readonly unknown[],
  T extends B['prototype']
>(
  code: ErrorCode,
  Base: B,
  message: Message<M>
): NodeErrorConstructor<T, M> => {
  // @ts-expect-error ts(2322)
  return class NodeError extends Base {
    /**
     * Node.js error code.
     *
     * @public
     * @instance
     * @member {ErrorCode}
     */
    public code!: ErrorCode

    /**
     * Creates a new Node.js error.
     *
     * @param {any[]} args - Error message function arguments
     */
    constructor(...args: any[]) {
      super()

      /**
       * Instance properties are defined in order of precedence.
       *
       * Precedence is determined by latter property definitions using the value
       * of former property definitions to generate a value.
       *
       * Instance property dependencies:
       *
       * - `message`: `code`
       * - `toString`: `code`, `message`, `name`
       * - `stack`: `toString`
       */

      // add error symbol
      define(this, kIsNodeError, {
        configurable: true,
        enumerable: false,
        value: true,
        writable: false
      })

      // add error code
      define(this, 'code', {
        configurable: true,
        enumerable: true,
        value: code,
        writable: true
      })

      // add error message
      define(this, 'message', {
        configurable: true,
        enumerable: false,
        value: NodeError.#message(code, message, cast(args), this),
        writable: true
      })

      // redefine toString method
      define(this, 'toString', {
        configurable: true,
        enumerable: false,
        /**
         * Returns a string representation of the error.
         *
         * @this {import('#src/types').NodeError}
         *
         * @return {string} String representation of error
         */
        value(this: NodeError): string {
          return `${this.name} [${this.code}]: ${this.message}`
        },
        writable: true
      })

      // add stack trace
      define(this, 'stack', {
        configurable: true,
        enumerable: true,
        value: NodeError.#prepareStackTrace(this),
        writable: true
      })
    }

    /**
     * Creates an error message string.
     *
     * @see https://nodejs.org/api/util.html#utilformatformat-args
     *
     * @private
     * @static
     *
     * @param {ErrorCode} code - Node.js error code
     * @param {Message<M>} message - Error message function or format string
     * @param {Args<M>} args - Custom message function arguments if `message` is
     * a function, or `util.format` arguments if `message` is a string
     * @param {Error} self - Error object used as `this` argument
     * @return {string} Formatted error message
     * @throws {Error} If `args` length is invalid
     */
    static #message(
      code: ErrorCode,
      message: Message<M>,
      args: Args<M>,
      self: Error
    ): string {
      /**
       * Invalid {@linkcode args} length error message.
       *
       * @var {string} error
       */
      let error: string = `${code};` + ' '

      // check args.length against expected message function arguments length
      // default parameters do not count when message is a function
      if (isString(message)) {
        /**
         * {@linkcode format} specifiers regex.
         *
         * @const {RegExp} regex
         */
        const regex: RegExp = /%[Odfijos]/g

        /**
         * Expected message length.
         *
         * @var {number} length
         */
        let length: number = 0

        // get expected message length
        while (regex.exec(message) !== null) length++

        // throw if incorrect number of arguments are passed to util.format
        if (length !== args.length) {
          error += `The arguments length (${args.length}) provided to \`util.format\` does not match the required length (${length}).`
          throw new Error(error, { cause: args })
        }
      } else if (!(message.length <= args.length)) {
        error += `The arguments length (${args.length}) provided to \`message\` does not match the required length (${message.length}).`
        throw new Error(error, { cause: args })
      }

      return Reflect.apply(
        isString(message) ? format : message,
        isString(message) ? null : self,
        isString(message) ? [message, ...args] : args
      )
    }

    /**
     * Adds a formatted stack trace to the given `error`.
     *
     * Previously written stack traces are not preserved.
     *
     * @see https://v8.dev/docs/stack-trace-api#customizing-stack-traces
     *
     * @private
     * @static
     *
     * @param {Error} error - Error object to prepare stack trace for
     * @return {string} Formatted stack trace
     */
    static #prepareStackTrace(error: Error): string {
      // create stack property
      Base.captureStackTrace(error, NodeError.#prepareStackTrace)

      // format stack trace
      return error.stack!.replace(
        new RegExp(`^${error.name}: ${regexp(error.message)}`),
        error.toString()
      )
    }
  }
}

export default createNodeError
