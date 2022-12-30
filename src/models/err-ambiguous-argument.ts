/**
 * @file Error Models - ERR_AMBIGUOUS_ARGUMENT
 * @module errnode/models/ERR_AMBIGUOUS_ARGUMENT
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L949
 */

import { ErrorCode } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/types'
import { createNodeError } from '#src/utils'

/**
 * `ERR_AMBIGUOUS_ARGUMENT` model.
 *
 * Thrown when a function argument is being used in a way that suggests that the
 * function signature may be misunderstood.
 *
 * @see https://nodejs.org/api/errors.html#err_ambiguous_argument
 *
 * @class
 *
 * @param {string} name - Name of ambiguous argument
 * @param {string} reason - Reason `name` is ambiguous
 * @return {NodeError<TypeError>} `TypeError` instance
 */
const ERR_AMBIGUOUS_ARGUMENT: NodeErrorConstructor<
  TypeErrorConstructor,
  [string, string]
> = createNodeError(
  ErrorCode.ERR_AMBIGUOUS_ARGUMENT,
  TypeError,
  "The '%s' argument is ambiguous. %s"
)

export default ERR_AMBIGUOUS_ARGUMENT
