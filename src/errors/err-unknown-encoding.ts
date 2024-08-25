/**
 * @file Errors - ERR_UNKNOWN_ENCODING
 * @module errnode/errors/ERR_UNKNOWN_ENCODING
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1817
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'

/**
 * `ERR_UNKNOWN_ENCODING` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_unknown_encoding
 *
 * @extends {NodeError<codes.ERR_UNKNOWN_ENCODING>}
 * @extends {TypeError}
 */
interface ErrUnknownEncoding
  extends NodeError<codes.ERR_UNKNOWN_ENCODING>, TypeError {}

/**
 * `ERR_UNKNOWN_ENCODING` message arguments.
 */
type Args = [encoding: string]

/**
 * `ERR_UNKNOWN_ENCODING` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrUnknownEncoding}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrUnknownEncoding,Args>}
 */
interface ErrUnknownEncodingConstructor
  extends NodeErrorConstructor<ErrUnknownEncoding, Args> {
  /**
   * Create a new `ERR_UNKNOWN_ENCODING` error.
   *
   * @see {@linkcode ErrUnknownEncoding}
   *
   * @param {string} encoding
   *  Invalid or unknown encoding
   * @return {ErrUnknownEncoding}
   */
  new (encoding: string): ErrUnknownEncoding
}

/**
 * `ERR_UNKNOWN_ENCODING` model.
 *
 * Thrown when an invalid or unknown encoding option is passed to a Node.js API.
 *
 * @see {@linkcode ErrUnknownEncodingConstructor}
 *
 * @type {ErrUnknownEncodingConstructor}
 *
 * @class
 */
const ERR_UNKNOWN_ENCODING: ErrUnknownEncodingConstructor = E(
  codes.ERR_UNKNOWN_ENCODING,
  TypeError,
  'Unknown encoding: %s'
)

export {
  ERR_UNKNOWN_ENCODING as default,
  type ErrUnknownEncoding,
  type Args as ErrUnknownEncodingArgs,
  type ErrUnknownEncodingConstructor
}
