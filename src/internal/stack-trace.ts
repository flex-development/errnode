/**
 * @file Internal - stackTrace
 * @module errnode/internal/stackTrace
 */

import v8 from 'node:v8'

/**
 * User value for {@linkcode Error.stackTraceLimit}.
 *
 * @var {number} userStackTraceLimit
 */
let userStackTraceLimit: number

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
  /**
   * Boolean indicating {@linkcode Error.stackTraceLimit} is writable.
   *
   * @const {boolean} writableStackTraceLimit
   */
  const writableStackTraceLimit: boolean = isErrorStackTraceLimitWritable()

  if (writableStackTraceLimit) {
    userStackTraceLimit = Error.stackTraceLimit
    Error.stackTraceLimit = Number.POSITIVE_INFINITY
  }

  Error.captureStackTrace(error)

  if (writableStackTraceLimit) Error.stackTraceLimit = userStackTraceLimit

  return error
}

/**
 * Check if {@linkcode Error.stackTraceLimit} is writable.
 *
 * @internal
 *
 * @return {boolean}
 *  `true` if `Error.stackTraceLimit` is writable, `false` otherwise
 */
function isErrorStackTraceLimitWritable(): boolean {
  // do not touch `Error.stackTraceLimit` if v8 is building snapshot.
  // v8 would attempt to install it again during deserialization.
  /* c8 ignore next 3 */
  try {
    if (v8.startupSnapshot.isBuildingSnapshot()) return false
  } catch {}

  /**
   * Property descriptor for {@linkcode Error.stackTraceLimit}.
   *
   * @const {PropertyDescriptor | undefined} descriptor
   */
  const descriptor: PropertyDescriptor | undefined = Object
    .getOwnPropertyDescriptor(Error, 'stackTraceLimit')

  return descriptor
    ? (
        Object.prototype.hasOwnProperty.call(descriptor, 'writable') &&
        descriptor.writable !== undefined
      )
      /* c8 ignore next 2 */ ? descriptor.writable
      : descriptor.set !== undefined
    : Object.isExtensible(Error)
}

export { captureLargerStackTrace, isErrorStackTraceLimitWritable }
