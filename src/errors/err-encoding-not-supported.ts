/**
 * @file Errors - ERR_ENCODING_NOT_SUPPORTED
 * @module errnode/errors/ERR_ENCODING_NOT_SUPPORTED
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1198-L1199
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'

/**
 * `ERR_ENCODING_NOT_SUPPORTED` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_encoding_not_supported
 *
 * @extends {NodeError<codes.ERR_ENCODING_NOT_SUPPORTED>}
 * @extends {RangeError}
 */
interface ErrEncodingNotSupported
  extends NodeError<codes.ERR_ENCODING_NOT_SUPPORTED>, RangeError {}

/**
 * `ERR_ENCODING_NOT_SUPPORTED` message arguments.
 */
type Args = [encoding: unknown]

/**
 * `ERR_ENCODING_NOT_SUPPORTED` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrEncodingNotSupported}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrEncodingNotSupported,Args>}
 */
interface ErrEncodingNotSupportedConstructor
  extends NodeErrorConstructor<ErrEncodingNotSupported, Args> {
  /**
   * Create a new `ERR_ENCODING_NOT_SUPPORTED` error.
   *
   * @see {@linkcode ErrEncodingNotSupported}
   *
   * @param {unknown} encoding
   *  The encoding that is not supported
   * @return {ErrEncodingNotSupported}
   */
  new (encoding: unknown): ErrEncodingNotSupported
}

/**
 * `ERR_ENCODING_NOT_SUPPORTED` model.
 *
 * Thrown when an encoding provided to the `TextDecoder()` API is not one of the
 * [WHATWG Supported Encodings][1].
 *
 * [1]: https://nodejs.org/api/util.html#whatwg-supported-encodings
 *
 * @see {@linkcode ErrEncodingNotSupportedConstructor}
 *
 * @type {ErrEncodingNotSupportedConstructor}
 *
 * @class
 */
const ERR_ENCODING_NOT_SUPPORTED: ErrEncodingNotSupportedConstructor = E(
  codes.ERR_ENCODING_NOT_SUPPORTED,
  RangeError,
  'The "%s" encoding is not supported'
)

export {
  ERR_ENCODING_NOT_SUPPORTED as default,
  type ErrEncodingNotSupported,
  type Args as ErrEncodingNotSupportedArgs,
  type ErrEncodingNotSupportedConstructor
}
