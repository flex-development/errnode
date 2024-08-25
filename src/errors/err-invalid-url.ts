/**
 * @file Errors - ERR_INVALID_URL
 * @module errnode/errors/ERR_INVALID_URL
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1532-L1542
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'

/**
 * `ERR_INVALID_URL` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_invalid_url
 *
 * @extends {NodeError<codes.ERR_INVALID_URL>}
 * @extends {TypeError}
 */
interface ErrInvalidUrl extends NodeError<codes.ERR_INVALID_URL>, TypeError {
  /**
   * Base URL resolved against if `input` is not absolute.
   */
  base?: URL | string | null | undefined

  /**
   * URL that failed to parse.
   *
   * @example
   *  'http://[127.0.0.1\x00c8763]:8000/'
   */
  input: string
}

/**
 * `ERR_INVALID_URL` message arguments.
 */
type Args = [input: string, base?: URL | string | null | undefined]

/**
 * `ERR_INVALID_URL` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrInvalidUrl}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrInvalidUrl,Args>}
 */
interface ErrInvalidUrlConstructor
  extends NodeErrorConstructor<ErrInvalidUrl, Args> {
  /**
   * Create a new `ERR_INVALID_URL` error.
   *
   * @see {@linkcode ErrInvalidUrl}
   *
   * @param {string} input
   *  URL that failed to parse
   * @param {URL | string | null | undefined} [base]
   *  Base URL resolved against if `input` is not absolute
   * @return {ErrInvalidUrl}
   */
  new (input: string, base?: URL | string | null | undefined): ErrInvalidUrl
}

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
 * @see {@linkcode ErrInvalidUrlConstructor}
 *
 * @type {ErrInvalidUrlConstructor}
 *
 * @class
 */
const ERR_INVALID_URL: ErrInvalidUrlConstructor = E(
  codes.ERR_INVALID_URL,
  TypeError,
  /**
   * @this {ErrInvalidUrl}
   *
   * @param {string} input
   *  URL that failed to parse
   * @param {URL | string | null | undefined} [base]
   *  Base URL resolved against if `input` is not absolute
   * @return {string}
   *  Error message
   */
  function message(
    this: ErrInvalidUrl,
    input: string,
    base: URL | string | null | undefined = null
  ): string {
    this.input = input
    if (base !== null) this.base = base
    return 'Invalid URL'
  }
)

export {
  ERR_INVALID_URL as default,
  type ErrInvalidUrl,
  type Args as ErrInvalidUrlArgs,
  type ErrInvalidUrlConstructor
}
