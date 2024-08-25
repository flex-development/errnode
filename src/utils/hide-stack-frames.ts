/**
 * @file Utilities - hideStackFrames
 * @module errnode/utils/hideStackFrames
 */

import type { Fn } from '@flex-development/tutils'

/**
 * Remove unnecessary frames from Node.js core errors.
 *
 * @template {Fn} T
 *  Function to wrap
 *
 * @param {T} fn
 *  Function to wrap
 * @return {T}
 *  `fn`
 */
function hideStackFrames<T extends Fn>(fn: T): T {
  // rename functions that will be hidden.
  // this cuts off the stack trace at the outermost one.
  Object.defineProperty(fn, 'name', { value: '__node_internal_' + fn.name })
  return fn
}

export default hideStackFrames
