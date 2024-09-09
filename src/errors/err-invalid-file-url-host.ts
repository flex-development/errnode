/**
 * @file Errors - ERR_INVALID_FILE_URL_HOST
 * @module errnode/errors/ERR_INVALID_FILE_URL_HOST
 * @see https://github.com/nodejs/node/blob/v22.8.0/lib/internal/errors.js#L1470-L1471
 */

import E from '#e'
import { codes } from '#src/enums'
import type {
  NodeError,
  NodeErrorConstructor,
  Stringifiable
} from '#src/interfaces'

/**
 * `ERR_INVALID_FILE_URL_HOST` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_invalid_file_url_host
 *
 * @extends {NodeError<codes.ERR_INVALID_FILE_URL_HOST>}
 * @extends {TypeError}
 */
interface ErrInvalidFileUrlHost
  extends NodeError<codes.ERR_INVALID_FILE_URL_HOST>, TypeError {}

/**
 * `ERR_INVALID_FILE_URL_HOST` message arguments.
 *
 * @see {@linkcode Stringifiable}
 */
type Args = [platform: Stringifiable]

/**
 * `ERR_INVALID_FILE_URL_HOST` constructor.
 *
 * @see {@linkcode ErrInvalidFileUrlHost}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrInvalidFileUrlHost,Args>}
 */
interface ErrInvalidFileUrlHostConstructor
  extends NodeErrorConstructor<ErrInvalidFileUrlHost, Args> {
  /**
   * Create a new `ERR_INVALID_FILE_URL_HOST` error.
   *
   * @see {@linkcode ErrInvalidFileUrlHost}
   * @see {@linkcode Stringifiable}
   *
   * @param {Stringifiable} platform
   *  Platform invalid host was encountered on
   * @return {ErrInvalidFileUrlHost}
   */
  new (platform: Stringifiable): ErrInvalidFileUrlHost
}

/**
 * `ERR_INVALID_FILE_URL_HOST` model.
 *
 * Thrown when a Node.js API that consumes `file:` URLs encountered a file URL
 * with an incompatible host.
 * This situation can only occur on Unix-like systems where only `localhost` or
 * an empty host is supported.
 *
 * @see {@linkcode ErrInvalidFileUrlHostConstructor}
 *
 * @type {ErrInvalidFileUrlHostConstructor}
 *
 * @class
 */
const ERR_INVALID_FILE_URL_HOST: ErrInvalidFileUrlHostConstructor = E(
  codes.ERR_INVALID_FILE_URL_HOST,
  TypeError,
  'File URL host must be "localhost" or empty on %s'
)

export {
  ERR_INVALID_FILE_URL_HOST as default,
  type ErrInvalidFileUrlHost,
  type Args as ErrInvalidFileUrlHostArgs,
  type ErrInvalidFileUrlHostConstructor
}
