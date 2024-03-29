/**
 * @file Error Models - ERR_ILLEGAL_CONSTRUCTOR
 * @module errnode/models/ERR_ILLEGAL_CONSTRUCTOR
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1163
 */

import { ErrorCode } from '#src/enums'
import type { NodeErrorConstructor } from '#src/interfaces'
import type { NodeError } from '#src/types'
import { createNodeError } from '#src/utils'
import type { EmptyArray } from '@flex-development/tutils'

/**
 * `ERR_ILLEGAL_CONSTRUCTOR` model.
 *
 * Thrown when an attempt is made to construct an object using a non-public
 * constructor.
 *
 * @see https://nodejs.org/api/errors.html#err_illegal_constructor
 *
 * @class
 *
 * @return {NodeError<TypeError>} New `TypeError` instance
 */
const ERR_ILLEGAL_CONSTRUCTOR: NodeErrorConstructor<TypeError, EmptyArray> =
  createNodeError(
    ErrorCode.ERR_ILLEGAL_CONSTRUCTOR,
    TypeError,
    'Illegal constructor'
  )

export default ERR_ILLEGAL_CONSTRUCTOR
