/**
 * @file Error Models - ERR_ARG_NOT_ITERABLE
 * @module errnode/models/ERR_ARG_NOT_ITERABLE
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L950
 */

import { ErrorCode } from '#src/enums'
import type { NodeErrorConstructor } from '#src/interfaces'
import type { NodeError } from '#src/types'
import { createNodeError } from '#src/utils'
import type { Times } from '@flex-development/tutils'

/**
 * `ERR_ARG_NOT_ITERABLE` model.
 *
 * Thrown when an iterable argument (i.e. a value that works with `for...of`
 * loops) is required, but not provided to a Node.js API.
 *
 * @see https://nodejs.org/api/errors.html#err_arg_not_iterable
 *
 * @class
 *
 * @param {string} name - Name of non-iterable argument
 * @return {NodeError<TypeError>} New `TypeError` instance
 */
const ERR_ARG_NOT_ITERABLE: NodeErrorConstructor<
  TypeError,
  Times<1, string>
> = createNodeError(
  ErrorCode.ERR_ARG_NOT_ITERABLE,
  TypeError,
  '%s must be iterable'
)

export default ERR_ARG_NOT_ITERABLE
