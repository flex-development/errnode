/**
 * @file Interfaces - ErrnoException
 * @module errnode/interfaces/ErrnoException
 */

import type { SystemErrorCode } from '#src/enums'

/**
 * Node.js exception model.
 *
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L615-L619
 *
 * @extends {Error}
 */
interface ErrnoException extends Error {
  /**
   * System error code.
   *
   * [1]: {@link ../enums/error-code-system.ts}
   *
   * @see [`SystemErrorCode`][1]
   */
  code: SystemErrorCode

  /**
   * Negative number which corresponds to an error code defined in [libuv Error
   * handling][1].
   *
   * On Windows, the error number provided by the system will be normalized by
   * libuv.
   *
   * [1]: https://docs.libuv.org/en/v1.x/errors.html
   * [2]: https://nodejs.org/api/util.html#utilgetsystemerrornameerr
   */
  errno: number

  /**
   * Error message.
   *
   * Always prefixed by {@linkcode syscall} and {@linkcode code}.
   *
   * @override
   */
  message: NonNullable<Error['message']>

  /**
   * Relevant invalid pathname (i.e. a file path when reporting a file system
   * error).
   */
  path?: string | undefined

  /**
   * Failed [syscall][1] description.
   *
   * [1]: https://man7.org/linux/man-pages/man2/syscalls.2.html
   */
  syscall: string
}

export type { ErrnoException as default }
