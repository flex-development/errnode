/**
 * @file Interfaces - ErrnoException
 * @module errnode/interfaces/ErrnoException
 */

import type { SystemCode } from '#src/types'

/**
 * Node.js exception object model.
 *
 * @see {@linkcode SystemCode}
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L615-L619
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L716-L745
 *
 * @template {SystemCode} [T=SystemCode]
 *  System error code
 *
 * @extends {Error}
 */
interface ErrnoException<T extends SystemCode = SystemCode> extends Error {
  /**
   * System error code.
   */
  code: T

  /**
   * libuv error number.
   *
   * @see https://docs.libuv.org/en/v1.x/errors.html
   */
  errno: number

  /**
   * Error message.
   *
   * Always prefixed by {@linkcode syscall} and {@linkcode code}.
   *
   * @override
   */
  message: string

  /**
   * Relevant invalid pathname (i.e. a file path when reporting a file system
   * error).
   */
  path?: string | undefined

  /**
   * Failed [syscall][] description.
   *
   * [syscall]: https://man7.org/linux/man-pages/man2/syscalls.2.html
   */
  syscall: string
}

export type { ErrnoException as default }
