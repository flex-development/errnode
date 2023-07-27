/**
 * @file Error Models - ERR_UNKNOWN_FILE_EXTENSION
 * @module errnode/models/ERR_UNKNOWN_FILE_EXTENSION
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1686-L1692
 */

import { ErrorCode } from '#src/enums'
import type { MessageFn, NodeError, NodeErrorConstructor } from '#src/types'
import { createNodeError } from '#src/utils'
import { DOT } from '@flex-development/tutils'

/**
 * `ERR_UNKNOWN_FILE_EXTENSION` model.
 *
 * Thrown when an attempt is made to load a module with an unknown or
 * unsupported file extension.
 *
 * @see https://nodejs.org/api/errors.html#err_unknown_file_extension
 *
 * @class
 *
 * @param {string} ext - Unknown or unsupported file extension
 * @param {string} id - Id of module containing `ext`
 * @param {string?} [suggestion=''] - Recommended fix
 * @return {NodeError<TypeError>} `TypeError` instance
 */
const ERR_UNKNOWN_FILE_EXTENSION: NodeErrorConstructor<
  TypeErrorConstructor,
  MessageFn<[string, string, string?]>
> = createNodeError(
  ErrorCode.ERR_UNKNOWN_FILE_EXTENSION,
  TypeError,
  /**
   * Creates an [`ERR_UNKNOWN_FILE_EXTENSION`][1] message.
   *
   * [1]: https://nodejs.org/api/errors.html#err_unknown_file_extension
   *
   * @param {string} ext - Unknown or unsupported file extension
   * @param {string} id - Id of module containing `ext`
   * @param {string?} [suggestion=''] - Recommended fix
   * @return {string} Error message
   */
  (ext: string, id: string, suggestion: string = ''): string => {
    /**
     * Error message.
     *
     * @var {string} message
     */
    let message: string = `Unknown file extension '${ext}' for ${id}`

    // add recommended fix
    if (suggestion) message += `${DOT} ${suggestion}`

    return message
  }
)

export default ERR_UNKNOWN_FILE_EXTENSION
