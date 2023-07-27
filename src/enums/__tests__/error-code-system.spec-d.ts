/**
 * @file Type Tests - SystemErrorCode
 * @module errnode/enums/tests/unit-d/SystemErrorCode
 */

import type TestSubject from '../error-code-system'

describe('unit-d:enums/SystemErrorCode', () => {
  it('should match [E2BIG = "E2BIG"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('E2BIG')
      .toMatchTypeOf<'E2BIG'>()
  })

  it('should match [EACCES = "EACCES"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EACCES')
      .toMatchTypeOf<'EACCES'>()
  })

  it('should match [EADDRINUSE = "EADDRINUSE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EADDRINUSE')
      .toMatchTypeOf<'EADDRINUSE'>()
  })

  it('should match [EADDRNOTAVAIL = "EADDRNOTAVAIL"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EADDRNOTAVAIL')
      .toMatchTypeOf<'EADDRNOTAVAIL'>()
  })

  it('should match [EAFNOSUPPORT = "EAFNOSUPPORT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EAFNOSUPPORT')
      .toMatchTypeOf<'EAFNOSUPPORT'>()
  })

  it('should match [EAGAIN = "EAGAIN"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EAGAIN')
      .toMatchTypeOf<'EAGAIN'>()
  })

  it('should match [EAI_ADDRFAMILY = "EAI_ADDRFAMILY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EAI_ADDRFAMILY')
      .toMatchTypeOf<'EAI_ADDRFAMILY'>()
  })

  it('should match [EAI_AGAIN = "EAI_AGAIN"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EAI_AGAIN')
      .toMatchTypeOf<'EAI_AGAIN'>()
  })

  it('should match [EAI_BADFLAGS = "EAI_BADFLAGS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EAI_BADFLAGS')
      .toMatchTypeOf<'EAI_BADFLAGS'>()
  })

  it('should match [EAI_BADHINTS = "EAI_BADHINTS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EAI_BADHINTS')
      .toMatchTypeOf<'EAI_BADHINTS'>()
  })

  it('should match [EAI_CANCELED = "EAI_CANCELED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EAI_CANCELED')
      .toMatchTypeOf<'EAI_CANCELED'>()
  })

  it('should match [EAI_FAIL = "EAI_FAIL"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EAI_FAIL')
      .toMatchTypeOf<'EAI_FAIL'>()
  })

  it('should match [EAI_FAMILY = "EAI_FAMILY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EAI_FAMILY')
      .toMatchTypeOf<'EAI_FAMILY'>()
  })

  it('should match [EAI_MEMORY = "EAI_MEMORY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EAI_MEMORY')
      .toMatchTypeOf<'EAI_MEMORY'>()
  })

  it('should match [EAI_NODATA = "EAI_NODATA"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EAI_NODATA')
      .toMatchTypeOf<'EAI_NODATA'>()
  })

  it('should match [EAI_NONAME = "EAI_NONAME"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EAI_NONAME')
      .toMatchTypeOf<'EAI_NONAME'>()
  })

  it('should match [EAI_OVERFLOW = "EAI_OVERFLOW"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EAI_OVERFLOW')
      .toMatchTypeOf<'EAI_OVERFLOW'>()
  })

  it('should match [EAI_PROTOCOL = "EAI_PROTOCOL"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EAI_PROTOCOL')
      .toMatchTypeOf<'EAI_PROTOCOL'>()
  })

  it('should match [EAI_SERVICE = "EAI_SERVICE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EAI_SERVICE')
      .toMatchTypeOf<'EAI_SERVICE'>()
  })

  it('should match [EAI_SOCKTYPE = "EAI_SOCKTYPE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EAI_SOCKTYPE')
      .toMatchTypeOf<'EAI_SOCKTYPE'>()
  })

  it('should match [EALREADY = "EALREADY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EALREADY')
      .toMatchTypeOf<'EALREADY'>()
  })

  it('should match [EBADF = "EBADF"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EBADF')
      .toMatchTypeOf<'EBADF'>()
  })

  it('should match [EBADMSG = "EBADMSG"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EBADMSG')
      .toMatchTypeOf<'EBADMSG'>()
  })

  it('should match [EBUSY = "EBUSY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EBUSY')
      .toMatchTypeOf<'EBUSY'>()
  })

  it('should match [ECANCELED = "ECANCELED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ECANCELED')
      .toMatchTypeOf<'ECANCELED'>()
  })

  it('should match [ECHARSET = "ECHARSET"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ECHARSET')
      .toMatchTypeOf<'ECHARSET'>()
  })

  it('should match [ECHILD = "ECHILD"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ECHILD')
      .toMatchTypeOf<'ECHILD'>()
  })

  it('should match [ECONNABORTED = "ECONNABORTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ECONNABORTED')
      .toMatchTypeOf<'ECONNABORTED'>()
  })

  it('should match [ECONNREFUSED = "ECONNREFUSED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ECONNREFUSED')
      .toMatchTypeOf<'ECONNREFUSED'>()
  })

  it('should match [ECONNRESET = "ECONNRESET"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ECONNRESET')
      .toMatchTypeOf<'ECONNRESET'>()
  })

  it('should match [EDEADLK = "EDEADLK"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EDEADLK')
      .toMatchTypeOf<'EDEADLK'>()
  })

  it('should match [EDESTADDRREQ = "EDESTADDRREQ"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EDESTADDRREQ')
      .toMatchTypeOf<'EDESTADDRREQ'>()
  })

  it('should match [EDOM = "EDOM"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EDOM')
      .toMatchTypeOf<'EDOM'>()
  })

  it('should match [EDQUOT = "EDQUOT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EDQUOT')
      .toMatchTypeOf<'EDQUOT'>()
  })

  it('should match [EEXIST = "EEXIST"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EEXIST')
      .toMatchTypeOf<'EEXIST'>()
  })

  it('should match [EFAULT = "EFAULT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EFAULT')
      .toMatchTypeOf<'EFAULT'>()
  })

  it('should match [EFBIG = "EFBIG"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EFBIG')
      .toMatchTypeOf<'EFBIG'>()
  })

  it('should match [EFTYPE = "EFTYPE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EFTYPE')
      .toMatchTypeOf<'EFTYPE'>()
  })

  it('should match [EHOSTDOWN = "EHOSTDOWN"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EHOSTDOWN')
      .toMatchTypeOf<'EHOSTDOWN'>()
  })

  it('should match [EHOSTUNREACH = "EHOSTUNREACH"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EHOSTUNREACH')
      .toMatchTypeOf<'EHOSTUNREACH'>()
  })

  it('should match [EIDRM = "EIDRM"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EIDRM')
      .toMatchTypeOf<'EIDRM'>()
  })

  it('should match [EILSEQ = "EILSEQ"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EILSEQ')
      .toMatchTypeOf<'EILSEQ'>()
  })

  it('should match [EINPROGRESS = "EINPROGRESS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EINPROGRESS')
      .toMatchTypeOf<'EINPROGRESS'>()
  })

  it('should match [EINTR = "EINTR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EINTR')
      .toMatchTypeOf<'EINTR'>()
  })

  it('should match [EINVAL = "EINVAL"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EINVAL')
      .toMatchTypeOf<'EINVAL'>()
  })

  it('should match [EIO = "EIO"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EIO')
      .toMatchTypeOf<'EIO'>()
  })

  it('should match [EISCONN = "EISCONN"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EISCONN')
      .toMatchTypeOf<'EISCONN'>()
  })

  it('should match [EISDIR = "EISDIR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EISDIR')
      .toMatchTypeOf<'EISDIR'>()
  })

  it('should match [ELOOP = "ELOOP"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ELOOP')
      .toMatchTypeOf<'ELOOP'>()
  })

  it('should match [EMFILE = "EMFILE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EMFILE')
      .toMatchTypeOf<'EMFILE'>()
  })

  it('should match [EMLINK = "EMLINK"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EMLINK')
      .toMatchTypeOf<'EMLINK'>()
  })

  it('should match [EMSGSIZE = "EMSGSIZE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EMSGSIZE')
      .toMatchTypeOf<'EMSGSIZE'>()
  })

  it('should match [EMULTIHOP = "EMULTIHOP"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EMULTIHOP')
      .toMatchTypeOf<'EMULTIHOP'>()
  })

  it('should match [ENAMETOOLONG = "ENAMETOOLONG"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENAMETOOLONG')
      .toMatchTypeOf<'ENAMETOOLONG'>()
  })

  it('should match [ENETDOWN = "ENETDOWN"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENETDOWN')
      .toMatchTypeOf<'ENETDOWN'>()
  })

  it('should match [ENETRESET = "ENETRESET"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENETRESET')
      .toMatchTypeOf<'ENETRESET'>()
  })

  it('should match [ENETUNREACH = "ENETUNREACH"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENETUNREACH')
      .toMatchTypeOf<'ENETUNREACH'>()
  })

  it('should match [ENFILE = "ENFILE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENFILE')
      .toMatchTypeOf<'ENFILE'>()
  })

  it('should match [ENOBUFS = "ENOBUFS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENOBUFS')
      .toMatchTypeOf<'ENOBUFS'>()
  })

  it('should match [ENODATA = "ENODATA"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENODATA')
      .toMatchTypeOf<'ENODATA'>()
  })

  it('should match [ENODEV = "ENODEV"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENODEV')
      .toMatchTypeOf<'ENODEV'>()
  })

  it('should match [ENOENT = "ENOENT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENOENT')
      .toMatchTypeOf<'ENOENT'>()
  })

  it('should match [ENOEXEC = "ENOEXEC"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENOEXEC')
      .toMatchTypeOf<'ENOEXEC'>()
  })

  it('should match [ENOLCK = "ENOLCK"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENOLCK')
      .toMatchTypeOf<'ENOLCK'>()
  })

  it('should match [ENOLINK = "ENOLINK"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENOLINK')
      .toMatchTypeOf<'ENOLINK'>()
  })

  it('should match [ENOMEM = "ENOMEM"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENOMEM')
      .toMatchTypeOf<'ENOMEM'>()
  })

  it('should match [ENOMSG = "ENOMSG"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENOMSG')
      .toMatchTypeOf<'ENOMSG'>()
  })

  it('should match [ENONET = "ENONET"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENONET')
      .toMatchTypeOf<'ENONET'>()
  })

  it('should match [ENOPROTOOPT = "ENOPROTOOPT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENOPROTOOPT')
      .toMatchTypeOf<'ENOPROTOOPT'>()
  })

  it('should match [ENOSPC = "ENOSPC"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENOSPC')
      .toMatchTypeOf<'ENOSPC'>()
  })

  it('should match [ENOSR = "ENOSR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENOSR')
      .toMatchTypeOf<'ENOSR'>()
  })

  it('should match [ENOSTR = "ENOSTR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENOSTR')
      .toMatchTypeOf<'ENOSTR'>()
  })

  it('should match [ENOSYS = "ENOSYS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENOSYS')
      .toMatchTypeOf<'ENOSYS'>()
  })

  it('should match [ENOTCONN = "ENOTCONN"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENOTCONN')
      .toMatchTypeOf<'ENOTCONN'>()
  })

  it('should match [ENOTDIR = "ENOTDIR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENOTDIR')
      .toMatchTypeOf<'ENOTDIR'>()
  })

  it('should match [ENOTEMPTY = "ENOTEMPTY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENOTEMPTY')
      .toMatchTypeOf<'ENOTEMPTY'>()
  })

  it('should match [ENOTSOCK = "ENOTSOCK"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENOTSOCK')
      .toMatchTypeOf<'ENOTSOCK'>()
  })

  it('should match [ENOTSUP = "ENOTSUP"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENOTSUP')
      .toMatchTypeOf<'ENOTSUP'>()
  })

  it('should match [ENOTTY = "ENOTTY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENOTTY')
      .toMatchTypeOf<'ENOTTY'>()
  })

  it('should match [ENXIO = "ENXIO"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENXIO')
      .toMatchTypeOf<'ENXIO'>()
  })

  it('should match [EOF = "EOF"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EOF')
      .toMatchTypeOf<'EOF'>()
  })

  it('should match [EOPNOTSUPP = "EOPNOTSUPP"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EOPNOTSUPP')
      .toMatchTypeOf<'EOPNOTSUPP'>()
  })

  it('should match [EOVERFLOW = "EOVERFLOW"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EOVERFLOW')
      .toMatchTypeOf<'EOVERFLOW'>()
  })

  it('should match [EPERM = "EPERM"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EPERM')
      .toMatchTypeOf<'EPERM'>()
  })

  it('should match [EPIPE = "EPIPE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EPIPE')
      .toMatchTypeOf<'EPIPE'>()
  })

  it('should match [EPROTO = "EPROTO"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EPROTO')
      .toMatchTypeOf<'EPROTO'>()
  })

  it('should match [EPROTONOSUPPORT = "EPROTONOSUPPORT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EPROTONOSUPPORT')
      .toMatchTypeOf<'EPROTONOSUPPORT'>()
  })

  it('should match [EPROTOTYPE = "EPROTOTYPE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EPROTOTYPE')
      .toMatchTypeOf<'EPROTOTYPE'>()
  })

  it('should match [ERANGE = "ERANGE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERANGE')
      .toMatchTypeOf<'ERANGE'>()
  })

  it('should match [EREMOTEIO = "EREMOTEIO"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EREMOTEIO')
      .toMatchTypeOf<'EREMOTEIO'>()
  })

  it('should match [EROFS = "EROFS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EROFS')
      .toMatchTypeOf<'EROFS'>()
  })

  it('should match [ESHUTDOWN = "ESHUTDOWN"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ESHUTDOWN')
      .toMatchTypeOf<'ESHUTDOWN'>()
  })

  it('should match [ESOCKTNOSUPPORT = "ESOCKTNOSUPPORT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ESOCKTNOSUPPORT')
      .toMatchTypeOf<'ESOCKTNOSUPPORT'>()
  })

  it('should match [ESPIPE = "ESPIPE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ESPIPE')
      .toMatchTypeOf<'ESPIPE'>()
  })

  it('should match [ESRCH = "ESRCH"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ESRCH')
      .toMatchTypeOf<'ESRCH'>()
  })

  it('should match [ESTALE = "ESTALE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ESTALE')
      .toMatchTypeOf<'ESTALE'>()
  })

  it('should match [ETIME = "ETIME"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ETIME')
      .toMatchTypeOf<'ETIME'>()
  })

  it('should match [ETIMEDOUT = "ETIMEDOUT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ETIMEDOUT')
      .toMatchTypeOf<'ETIMEDOUT'>()
  })

  it('should match [ETXTBSY = "ETXTBSY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ETXTBSY')
      .toMatchTypeOf<'ETXTBSY'>()
  })

  it('should match [EWOULDBLOCK = "EWOULDBLOCK"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EWOULDBLOCK')
      .toMatchTypeOf<'EWOULDBLOCK'>()
  })

  it('should match [EXDEV = "EXDEV"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EXDEV')
      .toMatchTypeOf<'EXDEV'>()
  })

  it('should match [UNKNOWN = "UNKNOWN"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UNKNOWN')
      .toMatchTypeOf<'UNKNOWN'>()
  })
})
