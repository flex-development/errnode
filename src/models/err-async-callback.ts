/**
 * @file Error Models - ERR_ASYNC_CALLBACK
 * @module errnode/models/ERR_ASYNC_CALLBACK
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L954
 */

import { ErrorCode } from '#src/enums'
import type { NodeErrorConstructor } from '#src/interfaces'
import type { NodeError } from '#src/types'
import { createNodeError } from '#src/utils'
import type { Times } from '@flex-development/tutils'

/**
 * `ERR_ASYNC_CALLBACK` model.
 *
 * Thrown when an attempt is made to register something that is not a function
 * as an `AsyncHooks` callback.
 *
 * @see https://nodejs.org/api/errors.html#err_async_callback
 *
 * @class
 *
 * @param {string} name - Name of argument that must be a function
 * @return {NodeError<TypeError>} New `TypeError` instance
 */
const ERR_ASYNC_CALLBACK: NodeErrorConstructor<
  TypeError,
  Times<1, string>
> = createNodeError(
  ErrorCode.ERR_ASYNC_CALLBACK,
  TypeError,
  '%s must be a function'
)

export default ERR_ASYNC_CALLBACK
