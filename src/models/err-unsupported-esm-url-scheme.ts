/**
 * @file Error Models - ERR_UNSUPPORTED_ESM_URL_SCHEME
 * @module errnode/models/ERR_UNSUPPORTED_ESM_URL_SCHEME
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1698-L1706
 */

import { ErrorCode } from '#src/enums'
import formatList from '#src/internal/format-list'
import type { NodeError, NodeErrorConstructor } from '#src/types'
import { createNodeError } from '#src/utils'
import { DOT } from '@flex-development/tutils'
import type { URL } from 'node:url'

/**
 * `ERR_UNSUPPORTED_ESM_URL_SCHEME` model.
 *
 * Thrown when an unsupported URL scheme is used in an `import` statement. URL
 * schemes other than `file` and `data` are unsupported.
 *
 * @see https://nodejs.org/api/errors.html#err_unsupported_esm_url_scheme
 *
 * @class
 *
 * @param {URL} url - URL containing unsupported scheme
 * @param {string[]} supported - Supported URL schemes
 * @param {boolean?} [windows=false] - Windows operating system?
 * @return {NodeError} `Error` instance
 */
const ERR_UNSUPPORTED_ESM_URL_SCHEME: NodeErrorConstructor<
  ErrorConstructor,
  [URL, string[], boolean?]
> = createNodeError(
  ErrorCode.ERR_UNSUPPORTED_ESM_URL_SCHEME,
  Error,
  /**
   * Creates an [`ERR_UNSUPPORTED_ESM_URL_SCHEME`][1] message.
   *
   * [1]: https://nodejs.org/api/errors.html#err_unsupported_esm_url_scheme
   *
   * @param {URL} url - URL containing unsupported scheme
   * @param {string[]} supported - Supported URL schemes
   * @param {boolean?} [windows=false] - Windows operating system?
   * @return {string} Error message
   */
  (url: URL, supported: string[], windows: boolean = false): string => {
    /**
     * Supported URL schemes.
     *
     * @const {string} schemes
     */
    const schemes: string = formatList(supported)

    /**
     * Error message.
     *
     * @var {string} message
     */
    let message: string = `Only URLs with a scheme in: ${schemes} are supported by the default ESM loader`

    // add additional error details if operating system is windows
    if (windows && url.protocol.length === 2) {
      message += `${DOT} On Windows, absolute paths must be valid file:// URLs`
    }

    // add url scheme provided by user
    message += `${DOT} Received protocol '${url.protocol}'`

    return message
  }
)

export default ERR_UNSUPPORTED_ESM_URL_SCHEME
