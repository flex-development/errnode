/**
 * @file Internal - formatMessage
 * @module errnode/internal/formatMessage
 */

import type { NodeError } from '#src/interfaces'
import type { MessageFn } from '#src/types'
import { format } from 'node-inspect-extracted'

/**
 * Format an error message.
 *
 * @see {@linkcode MessageFn}
 * @see {@linkcode NodeError}
 *
 * @internal
 *
 * @param {NodeError} error - Node error
 * @param {MessageFn | string} message - Error message string or function
 * @param {any[]} args - Error message arguments
 * @return {string} Error message
 */
function formatMessage(
  error: NodeError,
  message: MessageFn | string,
  args: any[]
): string {
  return typeof message === 'string'
    ? Reflect.apply(format, null, [message, ...args])
    : Reflect.apply(message, error, args)
}

export default formatMessage
