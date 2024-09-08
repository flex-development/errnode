/**
 * @file Errors - ERR_INVALID_FILE_URL_PATH
 * @module errnode/errors/ERR_INVALID_FILE_URL_PATH
 * @see https://github.com/nodejs/node/blob/v22.8.0/lib/internal/errors.js#L1472
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'

/**
 * `ERR_INVALID_FILE_URL_PATH` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_invalid_file_url_path
 *
 * @extends {NodeError<codes.ERR_INVALID_FILE_URL_PATH>}
 * @extends {TypeError}
 */
interface ErrInvalidFileUrlPath
  extends NodeError<codes.ERR_INVALID_FILE_URL_PATH>, TypeError {}

/**
 * `ERR_INVALID_FILE_URL_PATH` message arguments.
 */
type Args = [reason: string]

/**
 * `ERR_INVALID_FILE_URL_PATH` constructor.
 *
 * @see {@linkcode ErrInvalidFileUrlPath}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrInvalidFileUrlPath,Args>}
 */
interface ErrInvalidFileUrlPathConstructor
  extends NodeErrorConstructor<ErrInvalidFileUrlPath, Args> {
  /**
   * Create a new `ERR_INVALID_FILE_URL_PATH` error.
   *
   * @see {@linkcode ErrInvalidFileUrlPath}
   *
   * @param {string} reason
   *  Reason for invalidity
   * @return {ErrInvalidFileUrlPath}
   */
  new (reason: string): ErrInvalidFileUrlPath
}

/**
 * `ERR_INVALID_FILE_URL_PATH` model.
 *
 * Thrown when a Node.js API that consumes `file:` URLs encountered a file URL
 * with an incompatible path.
 * The exact semantics for determining whether a path can be used is
 * platform-dependent.
 *
 * @see {@linkcode ErrInvalidFileUrlPathConstructor}
 *
 * @type {ErrInvalidFileUrlPathConstructor}
 *
 * @class
 */
const ERR_INVALID_FILE_URL_PATH: ErrInvalidFileUrlPathConstructor = E(
  codes.ERR_INVALID_FILE_URL_PATH,
  TypeError,
  'File URL path %s'
)

export {
  ERR_INVALID_FILE_URL_PATH as default,
  type ErrInvalidFileUrlPath,
  type Args as ErrInvalidFileUrlPathArgs,
  type ErrInvalidFileUrlPathConstructor
}
