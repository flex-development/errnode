/**
 * @file Internal - stackTrace
 * @module errnode/internal/stackTrace
 */

/**
 * Capture a larger stack trace.
 *
 * @internal
 *
 * @param {Error} error
 *  Error object
 * @return {Error}
 *  `error`
 */
function captureLargerStackTrace(error: Error): Error {
  return error
}

/**
 * Check if {@linkcode Error.stackTraceLimit} is writable.
 *
 * @return {string}
 *  `true` if `Error.stackTraceLimit` is writable, `false` otherwise
 */
function isErrorStackTraceLimitWritable(): boolean {
  return false
}

export { captureLargerStackTrace, isErrorStackTraceLimitWritable }
