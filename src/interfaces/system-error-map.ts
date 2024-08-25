/**
 * @file Interfaces - SystemErrorMap
 * @module errnode/interfaces/SystemErrorMap
 */

/**
 * Registry of system error codes.
 *
 * This interface can be augmented to register new system error codes.
 *
 * @see https://github.com/nodejs/node/blob/v19.3.0/deps/uv/include/uv.h#L72-L154
 *
 * @example
 *  declare module '@flex-development/errnode' {
 *    interface SystemErrorMap {
 *      ECUSTOM: true
 *    }
 *  }
 */
interface SystemErrorMap {
  E2BIG: true
  EACCES: true
  EADDRINUSE: true
  EADDRNOTAVAIL: true
  EAFNOSUPPORT: true
  EAGAIN: true
  EAI_ADDRFAMILY: true
  EAI_AGAIN: true
  EAI_BADFLAGS: true
  EAI_BADHINTS: true
  EAI_CANCELED: true
  EAI_FAIL: true
  EAI_FAMILY: true
  EAI_MEMORY: true
  EAI_NODATA: true
  EAI_NONAME: true
  EAI_OVERFLOW: true
  EAI_PROTOCOL: true
  EAI_SERVICE: true
  EAI_SOCKTYPE: true
  EALREADY: true
  EBADF: true
  EBADMSG: true
  EBUSY: true
  ECANCELED: true
  ECHARSET: true
  ECHILD: true
  ECONNABORTED: true
  ECONNREFUSED: true
  ECONNRESET: true
  EDEADLK: true
  EDESTADDRREQ: true
  EDOM: true
  EDQUOT: true
  EEXIST: true
  EFAULT: true
  EFBIG: true
  EFTYPE: true
  EHOSTDOWN: true
  EHOSTUNREACH: true
  EIDRM: true
  EILSEQ: true
  EINPROGRESS: true
  EINTR: true
  EINVAL: true
  EIO: true
  EISCONN: true
  EISDIR: true
  ELOOP: true
  EMFILE: true
  EMLINK: true
  EMSGSIZE: true
  EMULTIHOP: true
  ENAMETOOLONG: true
  ENETDOWN: true
  ENETRESET: true
  ENETUNREACH: true
  ENFILE: true
  ENOBUFS: true
  ENODATA: true
  ENODEV: true
  ENOENT: true
  ENOEXEC: true
  ENOLCK: true
  ENOLINK: true
  ENOMEM: true
  ENOMSG: true
  ENONET: true
  ENOPROTOOPT: true
  ENOSPC: true
  ENOSR: true
  ENOSTR: true
  ENOSYS: true
  ENOTCONN: true
  ENOTDIR: true
  ENOTEMPTY: true
  ENOTSOCK: true
  ENOTSUP: true
  ENOTTY: true
  ENXIO: true
  EOF: true
  EOPNOTSUPP: true
  EOVERFLOW: true
  EPERM: true
  EPIPE: true
  EPROTO: true
  EPROTONOSUPPORT: true
  EPROTOTYPE: true
  ERANGE: true
  EREMOTEIO: true
  EROFS: true
  ESHUTDOWN: true
  ESOCKTNOSUPPORT: true
  ESPIPE: true
  ESRCH: true
  ESTALE: true
  ETIME: true
  ETIMEDOUT: true
  ETXTBSY: true
  EUNATCH: true
  EWOULDBLOCK: true
  EXDEV: true
  UNKNOWN: true
}

export type { SystemErrorMap as default }
