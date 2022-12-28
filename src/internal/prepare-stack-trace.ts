/**
 * @file Internal - prepareStackTrace
 * @module create-node-error/internal/prepareStackTrace
 */

import type { NodeError } from '#src/types'

/**
 * Adds a stack trace to the given `error`.
 *
 * Does not preserve previously written traces.
 *
 * @template T - Error base type
 *
 * @param {NodeError<T>} error - Error to evaluate
 * @return {NodeError<T>} `error` with new stack trace
 */
function prepareStackTrace<T extends Error = Error>(
  error: NodeError<T>
): NodeError<T> {
  // add stack trace
  Error.captureStackTrace(error, prepareStackTrace)

  // make sure stack trace is formatted properly
  error.stack = error.stack!.replace(
    new RegExp(`^${error.name}: ${error.message}`),
    error.toString()
  )

  return error
}

export default prepareStackTrace
