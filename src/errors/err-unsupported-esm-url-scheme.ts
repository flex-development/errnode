/**
 * @file Errors - ERR_UNSUPPORTED_ESM_URL_SCHEME
 * @module errnode/errors/ERR_UNSUPPORTED_ESM_URL_SCHEME
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1827-L1835
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import formatList from '#src/utils/format-list'

/**
 * `ERR_UNSUPPORTED_ESM_URL_SCHEME` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_unsupported_esm_url_scheme
 *
 * @extends {NodeError<codes.ERR_UNSUPPORTED_ESM_URL_SCHEME>}
 */
interface ErrUnsupportedEsmUrlScheme
  extends NodeError<codes.ERR_UNSUPPORTED_ESM_URL_SCHEME> {}

/**
 * `ERR_UNSUPPORTED_ESM_URL_SCHEME` message arguments.
 */
type Args = [
  url: URL,
  supported: readonly string[],
  windows?: boolean | null | undefined
]

/**
 * `ERR_UNSUPPORTED_ESM_URL_SCHEME` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrUnsupportedEsmUrlScheme}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrUnsupportedEsmUrlScheme,Args>}
 */
interface ErrUnsupportedEsmUrlSchemeConstructor
  extends NodeErrorConstructor<ErrUnsupportedEsmUrlScheme, Args> {
  /**
   * Create a new `ERR_UNSUPPORTED_ESM_URL_SCHEME` error.
   *
   * @see {@linkcode ErrUnsupportedEsmUrlScheme}
   *
   * @param {URL} url
   *  URL containing unsupported scheme
   * @param {ReadonlyArray<string>} supported
   *  Supported URL schemes
   * @param {boolean | null | undefined} [windows]
   *  Windows operating system?
   * @return {ErrUnsupportedEsmUrlScheme}
   */
  new (
    url: URL,
    supported: readonly string[],
    windows?: boolean | null | undefined
  ): ErrUnsupportedEsmUrlScheme
}

/**
 * `ERR_UNSUPPORTED_ESM_URL_SCHEME` model.
 *
 * Thrown when an unsupported URL scheme is used in an `import` statement. URL
 * schemes other than `file` and `data` are unsupported.
 *
 * @see {@linkcode ErrUnsupportedEsmUrlSchemeConstructor}
 *
 * @type {ErrUnsupportedEsmUrlSchemeConstructor}
 *
 * @class
 */
const ERR_UNSUPPORTED_ESM_URL_SCHEME: ErrUnsupportedEsmUrlSchemeConstructor = E(
  codes.ERR_UNSUPPORTED_ESM_URL_SCHEME,
  Error,
  /**
   * @param {URL} url
   *  URL containing unsupported scheme
   * @param {ReadonlyArray<string>} supported
   *  Supported URL schemes
   * @param {boolean | null | undefined} [windows]
   *  Windows operating system?
   * @return {string}
   *  Error message
   */
  function message(
    url: URL,
    supported: readonly string[],
    windows: boolean | null | undefined = null
  ): string {
    /**
     * Error message.
     *
     * @var {string} message
     */
    let message: string = `Only URLs with a scheme in: ${formatList(supported)}`

    message += ` are supported by the default ESM loader. `

    if (windows && url.protocol.length === 2) {
      message += 'On Windows, absolute paths must be valid file:// URLs. '
    }

    message += `Received protocol '${url.protocol}'`

    return message
  }
)

export {
  ERR_UNSUPPORTED_ESM_URL_SCHEME as default,
  type ErrUnsupportedEsmUrlScheme,
  type Args as ErrUnsupportedEsmUrlSchemeArgs,
  type ErrUnsupportedEsmUrlSchemeConstructor
}
