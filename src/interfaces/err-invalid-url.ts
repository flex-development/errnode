/**
 * @file Interfaces - ErrInvalidUrl
 * @module errnode/interfaces/ErrInvalidUrl
 */

import type { ErrorCode } from '#src/enums'
import type { NodeError } from '#src/types'

/**
 * [`ERR_INVALID_URL`][1] schema.
 *
 * [1]: https://nodejs.org/api/errors.html#err_invalid_url
 *
 * @extends {NodeError<TypeError>}
 */
interface ErrInvalidUrl extends NodeError<TypeError> {
  /**
   * Error code.
   */
  code: ErrorCode.ERR_INVALID_URL

  /**
   * URL that failed to parse.
   *
   * @example
   *  'http://[127.0.0.1\x00c8763]:8000/'
   */
  input: string
}

export type { ErrInvalidUrl as default }
