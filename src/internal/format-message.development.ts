/**
 * @file Internal - formatMessage
 * @module errnode/internal/formatMessage
 */

import type { NodeError } from '#src/interfaces'
import type { MessageFn } from '#src/types'
import { ok } from 'devlop'
import { format } from 'node-inspect-extracted'
import fm from './format-message'

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
  if (typeof message === 'string') {
    /**
     * Regular expression matching {@linkcode format} specifiers.
     *
     * @const {RegExp} specifiersRegex
     */
    const specifiersRegex: RegExp = /%[Odfijos]/g

    /**
     * Total number of specifiers in {@linkcode message}.
     *
     * @var {number} specifiers
     */
    let specifiers: number = 0

    while (specifiersRegex.exec(message) !== null) specifiers++

    ok(
      args.length === specifiers,
      `[${error.code}] The arguments length (${args.length}) provided to \`util.format\` does not match the required length (${specifiers}).`
    )
  } else {
    ok(
      message.length <= args.length, // default options do not count.
      `[${error.code}] The arguments length (${args.length}) provided to \`message\` does not match the required length (${message.length}).`
    )
  }

  return fm(error, message, args)
}

export default formatMessage
