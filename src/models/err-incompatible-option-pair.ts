/**
 * @file Error Models - ERR_INCOMPATIBLE_OPTION_PAIR
 * @module errnode/models/ERR_INCOMPATIBLE_OPTION_PAIR
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1170-L1171
 */

import { ErrorCode } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/types'
import { createNodeError } from '#src/utils'

/**
 * `ERR_INCOMPATIBLE_OPTION_PAIR` model.
 *
 * Thrown when an option pair is incompatible with each other and cannot be used
 * at the same time.
 *
 * @see https://nodejs.org/api/errors.html#err_incompatible_option_pair
 *
 * @class
 *
 * @param {string} option1 - Option that cannot be used
 * @param {string} option2 - Option that is incompatible with `option1`
 * @return {NodeError<TypeError>} `TypeError` instance
 */
const ERR_INCOMPATIBLE_OPTION_PAIR: NodeErrorConstructor<
  TypeErrorConstructor,
  [string, string]
> = createNodeError(
  ErrorCode.ERR_INCOMPATIBLE_OPTION_PAIR,
  TypeError,
  "Option '%s' cannot be used in combination with option '%s'"
)

export default ERR_INCOMPATIBLE_OPTION_PAIR
