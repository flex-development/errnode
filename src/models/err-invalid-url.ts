/**
 * @file Error Models - ERR_INVALID_URL
 * @module errnode/models/ERR_INVALID_URL
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1381-L1386
 */

import { ErrorCode } from '#src/enums'
import type { ErrInvalidUrl } from '#src/interfaces'
import type { MessageFn, NodeErrorConstructor } from '#src/types'
import { createNodeError } from '#src/utils'

/**
 * `ERR_INVALID_URL` model.
 *
 * Thrown when an invalid URL is passed to a [WHATWG][1] [`URL` constructor][2]
 * or [`url.parse()`][3] to be parsed.
 *
 * [1]: https://nodejs.org/api/url.html#the-whatwg-url-api
 * [2]: https://nodejs.org/api/url.html#new-urlinput-base
 * [3]: https://nodejs.org/api/url.html#urlparseurlstring-parsequerystring-slashesdenotehost
 *
 * @see https://nodejs.org/api/errors.html#err_invalid_url
 *
 * @class
 *
 * @param {string} input - URL that failed to parse
 * @return {ErrInvalidUrl} `TypeError` instance
 */
const ERR_INVALID_URL: NodeErrorConstructor<
  TypeErrorConstructor,
  MessageFn<[string]>,
  ErrInvalidUrl
> = createNodeError(
  ErrorCode.ERR_INVALID_URL,
  TypeError,
  /**
   * Creates an [`ERR_INVALID_URL`][1] message.
   *
   * [1]: https://nodejs.org/api/errors.html#err_invalid_url
   *
   * @this {ErrInvalidUrl}
   *
   * @param {string} input - URL that failed to parse
   * @return {string} Error message
   */
  function msg(this: ErrInvalidUrl, input: string): string {
    this.input = input
    return 'Invalid URL'
  }
)

export default ERR_INVALID_URL
