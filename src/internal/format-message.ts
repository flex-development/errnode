/**
 * @file Internal - formatMessage
 * @module errnode/internal/formatMessage
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L440-L467
 */

import type { ErrorCode } from '#src/enums'
import type { MessageFn } from '#src/types'
import { format } from 'node-inspect-extracted'

/**
 * Formats an error message.
 *
 * [1]: https://nodejs.org/api/util.html#utilformatformat-args
 *
 * @see https://nodejs.org/api/util.html#utilformatformat-args
 *
 * @template M - Error message type
 *
 * @param {ErrorCode} code - Node.js error code
 * @param {MessageFn | string} msg - Error message or message function
 * @param {any[] | Parameters<M>} args - `msg` params if `msg` is a function;
 * [`util.format`][1] arguments if `msg` is a string
 * @param {Error} [self=new Error()] - Error used as `this` argument in `msg`
 * @return {string} Formatted error message
 * @throws {Error} If `args` length is invalid
 */
function formatMessage<M extends MessageFn | string = MessageFn | string>(
  code: ErrorCode,
  msg: M,
  args: M extends MessageFn ? Parameters<M> : any[],
  self: Error = new Error()
): string {
  /**
   * Invalid {@linkcode args} length error message.
   *
   * @var {string} error
   */
  let error: string = `${code};` + ' '

  /**
   * Expected message length.
   *
   * @var {number} length
   */
  let length: number = 0

  // try returning error message from function
  if (typeof msg === 'function') {
    // set expected message length to total number of function parameters
    length = msg.length

    // ensure expected message length. default parameters do not count
    if (!(length <= args.length)) {
      error += `The arguments length (${args.length}) provided to \`msg\` does not match the required length (${length}).`
      throw new Error(error)
    }

    // return result from message function
    return Reflect.apply(msg, self, args)
  }

  /**
   * {@linkcode format} specifiers regex.
   *
   * @const {RegExp} regex
   */
  const regex: RegExp = /%[Odfijos]/g

  // get expected message length
  while (regex.exec(msg) !== null) length++

  // ensure expected message length
  if (length !== args.length) {
    error += `The arguments length (${args.length}) provided to \`util.format\` does not match the required length (${length}).`
    throw new Error(error)
  }

  return Reflect.apply(format, null, [msg, ...args])
}

export default formatMessage
