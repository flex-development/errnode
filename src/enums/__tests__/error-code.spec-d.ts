/**
 * @file Type Tests - ErrorCode
 * @module errnode/enums/tests/unit-d/ErrorCode
 */

import type TestSubject from '../error-code'

describe('unit-d:enums/ErrorCode', () => {
  it('should match [ABORT_ERR = "ABORT_ERR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ABORT_ERR')
      .toMatchTypeOf<'ABORT_ERR'>()
  })

  it('should match [ERR_AMBIGUOUS_ARGUMENT = "ERR_AMBIGUOUS_ARGUMENT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_AMBIGUOUS_ARGUMENT')
      .toMatchTypeOf<'ERR_AMBIGUOUS_ARGUMENT'>()
  })

  it('should match [ERR_ARG_NOT_ITERABLE = "ERR_ARG_NOT_ITERABLE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_ARG_NOT_ITERABLE')
      .toMatchTypeOf<'ERR_ARG_NOT_ITERABLE'>()
  })

  it('should match [ERR_ASSERTION = "ERR_ASSERTION"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_ASSERTION')
      .toMatchTypeOf<'ERR_ASSERTION'>()
  })

  it('should match [ERR_ASSERT_SNAPSHOT_NOT_SUPPORTED = "ERR_ASSERT_SNAPSHOT_NOT_SUPPORTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_ASSERT_SNAPSHOT_NOT_SUPPORTED')
      .toMatchTypeOf<'ERR_ASSERT_SNAPSHOT_NOT_SUPPORTED'>()
  })

  it('should match [ERR_ASYNC_CALLBACK = "ERR_ASYNC_CALLBACK"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_ASYNC_CALLBACK')
      .toMatchTypeOf<'ERR_ASYNC_CALLBACK'>()
  })

  it('should match [ERR_ASYNC_TYPE = "ERR_ASYNC_TYPE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_ASYNC_TYPE')
      .toMatchTypeOf<'ERR_ASYNC_TYPE'>()
  })

  it('should match [ERR_BROTLI_COMPRESSION_FAILED = "ERR_BROTLI_COMPRESSION_FAILED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_BROTLI_COMPRESSION_FAILED')
      .toMatchTypeOf<'ERR_BROTLI_COMPRESSION_FAILED'>()
  })

  it('should match [ERR_BROTLI_INVALID_PARAM = "ERR_BROTLI_INVALID_PARAM"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_BROTLI_INVALID_PARAM')
      .toMatchTypeOf<'ERR_BROTLI_INVALID_PARAM'>()
  })

  it('should match [ERR_BUFFER_CONTEXT_NOT_AVAILABLE = "ERR_BUFFER_CONTEXT_NOT_AVAILABLE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_BUFFER_CONTEXT_NOT_AVAILABLE')
      .toMatchTypeOf<'ERR_BUFFER_CONTEXT_NOT_AVAILABLE'>()
  })

  it('should match [ERR_BUFFER_OUT_OF_BOUNDS = "ERR_BUFFER_OUT_OF_BOUNDS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_BUFFER_OUT_OF_BOUNDS')
      .toMatchTypeOf<'ERR_BUFFER_OUT_OF_BOUNDS'>()
  })

  it('should match [ERR_BUFFER_TOO_LARGE = "ERR_BUFFER_TOO_LARGE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_BUFFER_TOO_LARGE')
      .toMatchTypeOf<'ERR_BUFFER_TOO_LARGE'>()
  })

  it('should match [ERR_CANNOT_TRANSFER_OBJECT = "ERR_CANNOT_TRANSFER_OBJECT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CANNOT_TRANSFER_OBJECT')
      .toMatchTypeOf<'ERR_CANNOT_TRANSFER_OBJECT'>()
  })

  it('should match [ERR_CANNOT_WATCH_SIGINT = "ERR_CANNOT_WATCH_SIGINT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CANNOT_WATCH_SIGINT')
      .toMatchTypeOf<'ERR_CANNOT_WATCH_SIGINT'>()
  })

  it('should match [ERR_CHILD_CLOSED_BEFORE_REPLY = "ERR_CHILD_CLOSED_BEFORE_REPLY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CHILD_CLOSED_BEFORE_REPLY')
      .toMatchTypeOf<'ERR_CHILD_CLOSED_BEFORE_REPLY'>()
  })

  it('should match [ERR_CHILD_PROCESS_IPC_REQUIRED = "ERR_CHILD_PROCESS_IPC_REQUIRED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CHILD_PROCESS_IPC_REQUIRED')
      .toMatchTypeOf<'ERR_CHILD_PROCESS_IPC_REQUIRED'>()
  })

  it('should match [ERR_CHILD_PROCESS_STDIO_MAXBUFFER = "ERR_CHILD_PROCESS_STDIO_MAXBUFFER"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CHILD_PROCESS_STDIO_MAXBUFFER')
      .toMatchTypeOf<'ERR_CHILD_PROCESS_STDIO_MAXBUFFER'>()
  })

  it('should match [ERR_CLOSED_MESSAGE_PORT = "ERR_CLOSED_MESSAGE_PORT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CLOSED_MESSAGE_PORT')
      .toMatchTypeOf<'ERR_CLOSED_MESSAGE_PORT'>()
  })

  it('should match [ERR_CONSOLE_WRITABLE_STREAM = "ERR_CONSOLE_WRITABLE_STREAM"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CONSOLE_WRITABLE_STREAM')
      .toMatchTypeOf<'ERR_CONSOLE_WRITABLE_STREAM'>()
  })

  it('should match [ERR_CONSTRUCT_CALL_INVALID = "ERR_CONSTRUCT_CALL_INVALID"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CONSTRUCT_CALL_INVALID')
      .toMatchTypeOf<'ERR_CONSTRUCT_CALL_INVALID'>()
  })

  it('should match [ERR_CONSTRUCT_CALL_REQUIRED = "ERR_CONSTRUCT_CALL_REQUIRED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CONSTRUCT_CALL_REQUIRED')
      .toMatchTypeOf<'ERR_CONSTRUCT_CALL_REQUIRED'>()
  })

  it('should match [ERR_CONTEXT_NOT_INITIALIZED = "ERR_CONTEXT_NOT_INITIALIZED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CONTEXT_NOT_INITIALIZED')
      .toMatchTypeOf<'ERR_CONTEXT_NOT_INITIALIZED'>()
  })

  it('should match [ERR_CPU_USAGE = "ERR_CPU_USAGE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CPU_USAGE')
      .toMatchTypeOf<'ERR_CPU_USAGE'>()
  })

  it('should match [ERR_CRYPTO_CUSTOM_ENGINE_NOT_SUPPORTED = "ERR_CRYPTO_CUSTOM_ENGINE_NOT_SUPPORTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_CUSTOM_ENGINE_NOT_SUPPORTED')
      .toMatchTypeOf<'ERR_CRYPTO_CUSTOM_ENGINE_NOT_SUPPORTED'>()
  })

  it('should match [ERR_CRYPTO_ECDH_INVALID_FORMAT = "ERR_CRYPTO_ECDH_INVALID_FORMAT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_ECDH_INVALID_FORMAT')
      .toMatchTypeOf<'ERR_CRYPTO_ECDH_INVALID_FORMAT'>()
  })

  it('should match [ERR_CRYPTO_ECDH_INVALID_PUBLIC_KEY = "ERR_CRYPTO_ECDH_INVALID_PUBLIC_KEY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_ECDH_INVALID_PUBLIC_KEY')
      .toMatchTypeOf<'ERR_CRYPTO_ECDH_INVALID_PUBLIC_KEY'>()
  })

  it('should match [ERR_CRYPTO_ENGINE_UNKNOWN = "ERR_CRYPTO_ENGINE_UNKNOWN"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_ENGINE_UNKNOWN')
      .toMatchTypeOf<'ERR_CRYPTO_ENGINE_UNKNOWN'>()
  })

  it('should match [ERR_CRYPTO_FIPS_FORCED = "ERR_CRYPTO_FIPS_FORCED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_FIPS_FORCED')
      .toMatchTypeOf<'ERR_CRYPTO_FIPS_FORCED'>()
  })

  it('should match [ERR_CRYPTO_FIPS_UNAVAILABLE = "ERR_CRYPTO_FIPS_UNAVAILABLE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_FIPS_UNAVAILABLE')
      .toMatchTypeOf<'ERR_CRYPTO_FIPS_UNAVAILABLE'>()
  })

  it('should match [ERR_CRYPTO_HASH_DIGEST_NO_UTF16 = "ERR_CRYPTO_HASH_DIGEST_NO_UTF16"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_HASH_DIGEST_NO_UTF16')
      .toMatchTypeOf<'ERR_CRYPTO_HASH_DIGEST_NO_UTF16'>()
  })

  it('should match [ERR_CRYPTO_HASH_FINALIZED = "ERR_CRYPTO_HASH_FINALIZED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_HASH_FINALIZED')
      .toMatchTypeOf<'ERR_CRYPTO_HASH_FINALIZED'>()
  })

  it('should match [ERR_CRYPTO_HASH_UPDATE_FAILED = "ERR_CRYPTO_HASH_UPDATE_FAILED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_HASH_UPDATE_FAILED')
      .toMatchTypeOf<'ERR_CRYPTO_HASH_UPDATE_FAILED'>()
  })

  it('should match [ERR_CRYPTO_INCOMPATIBLE_KEY = "ERR_CRYPTO_INCOMPATIBLE_KEY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_INCOMPATIBLE_KEY')
      .toMatchTypeOf<'ERR_CRYPTO_INCOMPATIBLE_KEY'>()
  })

  it('should match [ERR_CRYPTO_INCOMPATIBLE_KEY_OPTIONS = "ERR_CRYPTO_INCOMPATIBLE_KEY_OPTIONS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_INCOMPATIBLE_KEY_OPTIONS')
      .toMatchTypeOf<'ERR_CRYPTO_INCOMPATIBLE_KEY_OPTIONS'>()
  })

  it('should match [ERR_CRYPTO_INITIALIZATION_FAILED = "ERR_CRYPTO_INITIALIZATION_FAILED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_INITIALIZATION_FAILED')
      .toMatchTypeOf<'ERR_CRYPTO_INITIALIZATION_FAILED'>()
  })

  it('should match [ERR_CRYPTO_INVALID_AUTH_TAG = "ERR_CRYPTO_INVALID_AUTH_TAG"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_INVALID_AUTH_TAG')
      .toMatchTypeOf<'ERR_CRYPTO_INVALID_AUTH_TAG'>()
  })

  it('should match [ERR_CRYPTO_INVALID_COUNTER = "ERR_CRYPTO_INVALID_COUNTER"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_INVALID_COUNTER')
      .toMatchTypeOf<'ERR_CRYPTO_INVALID_COUNTER'>()
  })

  it('should match [ERR_CRYPTO_INVALID_CURVE = "ERR_CRYPTO_INVALID_CURVE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_INVALID_CURVE')
      .toMatchTypeOf<'ERR_CRYPTO_INVALID_CURVE'>()
  })

  it('should match [ERR_CRYPTO_INVALID_DIGEST = "ERR_CRYPTO_INVALID_DIGEST"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_INVALID_DIGEST')
      .toMatchTypeOf<'ERR_CRYPTO_INVALID_DIGEST'>()
  })

  it('should match [ERR_CRYPTO_INVALID_IV = "ERR_CRYPTO_INVALID_IV"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_INVALID_IV')
      .toMatchTypeOf<'ERR_CRYPTO_INVALID_IV'>()
  })

  it('should match [ERR_CRYPTO_INVALID_JWK = "ERR_CRYPTO_INVALID_JWK"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_INVALID_JWK')
      .toMatchTypeOf<'ERR_CRYPTO_INVALID_JWK'>()
  })

  it('should match [ERR_CRYPTO_INVALID_KEYLEN = "ERR_CRYPTO_INVALID_KEYLEN"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_INVALID_KEYLEN')
      .toMatchTypeOf<'ERR_CRYPTO_INVALID_KEYLEN'>()
  })

  it('should match [ERR_CRYPTO_INVALID_KEYPAIR = "ERR_CRYPTO_INVALID_KEYPAIR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_INVALID_KEYPAIR')
      .toMatchTypeOf<'ERR_CRYPTO_INVALID_KEYPAIR'>()
  })

  it('should match [ERR_CRYPTO_INVALID_KEYTYPE = "ERR_CRYPTO_INVALID_KEYTYPE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_INVALID_KEYTYPE')
      .toMatchTypeOf<'ERR_CRYPTO_INVALID_KEYTYPE'>()
  })

  it('should match [ERR_CRYPTO_INVALID_KEY_OBJECT_TYPE = "ERR_CRYPTO_INVALID_KEY_OBJECT_TYPE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_INVALID_KEY_OBJECT_TYPE')
      .toMatchTypeOf<'ERR_CRYPTO_INVALID_KEY_OBJECT_TYPE'>()
  })

  it('should match [ERR_CRYPTO_INVALID_MESSAGELEN = "ERR_CRYPTO_INVALID_MESSAGELEN"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_INVALID_MESSAGELEN')
      .toMatchTypeOf<'ERR_CRYPTO_INVALID_MESSAGELEN'>()
  })

  it('should match [ERR_CRYPTO_INVALID_SCRYPT_PARAMS = "ERR_CRYPTO_INVALID_SCRYPT_PARAMS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_INVALID_SCRYPT_PARAMS')
      .toMatchTypeOf<'ERR_CRYPTO_INVALID_SCRYPT_PARAMS'>()
  })

  it('should match [ERR_CRYPTO_INVALID_STATE = "ERR_CRYPTO_INVALID_STATE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_INVALID_STATE')
      .toMatchTypeOf<'ERR_CRYPTO_INVALID_STATE'>()
  })

  it('should match [ERR_CRYPTO_INVALID_TAG_LENGTH = "ERR_CRYPTO_INVALID_TAG_LENGTH"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_INVALID_TAG_LENGTH')
      .toMatchTypeOf<'ERR_CRYPTO_INVALID_TAG_LENGTH'>()
  })

  it('should match [ERR_CRYPTO_JOB_INIT_FAILED = "ERR_CRYPTO_JOB_INIT_FAILED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_JOB_INIT_FAILED')
      .toMatchTypeOf<'ERR_CRYPTO_JOB_INIT_FAILED'>()
  })

  it('should match [ERR_CRYPTO_JWK_UNSUPPORTED_CURVE = "ERR_CRYPTO_JWK_UNSUPPORTED_CURVE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_JWK_UNSUPPORTED_CURVE')
      .toMatchTypeOf<'ERR_CRYPTO_JWK_UNSUPPORTED_CURVE'>()
  })

  it('should match [ERR_CRYPTO_JWK_UNSUPPORTED_KEY_TYPE = "ERR_CRYPTO_JWK_UNSUPPORTED_KEY_TYPE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_JWK_UNSUPPORTED_KEY_TYPE')
      .toMatchTypeOf<'ERR_CRYPTO_JWK_UNSUPPORTED_KEY_TYPE'>()
  })

  it('should match [ERR_CRYPTO_OPERATION_FAILED = "ERR_CRYPTO_OPERATION_FAILED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_OPERATION_FAILED')
      .toMatchTypeOf<'ERR_CRYPTO_OPERATION_FAILED'>()
  })

  it('should match [ERR_CRYPTO_PBKDF2_ERROR = "ERR_CRYPTO_PBKDF2_ERROR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_PBKDF2_ERROR')
      .toMatchTypeOf<'ERR_CRYPTO_PBKDF2_ERROR'>()
  })

  it('should match [ERR_CRYPTO_SCRYPT_INVALID_PARAMETER = "ERR_CRYPTO_SCRYPT_INVALID_PARAMETER"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_SCRYPT_INVALID_PARAMETER')
      .toMatchTypeOf<'ERR_CRYPTO_SCRYPT_INVALID_PARAMETER'>()
  })

  it('should match [ERR_CRYPTO_SCRYPT_NOT_SUPPORTED = "ERR_CRYPTO_SCRYPT_NOT_SUPPORTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_SCRYPT_NOT_SUPPORTED')
      .toMatchTypeOf<'ERR_CRYPTO_SCRYPT_NOT_SUPPORTED'>()
  })

  it('should match [ERR_CRYPTO_SIGN_KEY_REQUIRED = "ERR_CRYPTO_SIGN_KEY_REQUIRED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_SIGN_KEY_REQUIRED')
      .toMatchTypeOf<'ERR_CRYPTO_SIGN_KEY_REQUIRED'>()
  })

  it('should match [ERR_CRYPTO_TIMING_SAFE_EQUAL_LENGTH = "ERR_CRYPTO_TIMING_SAFE_EQUAL_LENGTH"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_TIMING_SAFE_EQUAL_LENGTH')
      .toMatchTypeOf<'ERR_CRYPTO_TIMING_SAFE_EQUAL_LENGTH'>()
  })

  it('should match [ERR_CRYPTO_UNKNOWN_CIPHER = "ERR_CRYPTO_UNKNOWN_CIPHER"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_UNKNOWN_CIPHER')
      .toMatchTypeOf<'ERR_CRYPTO_UNKNOWN_CIPHER'>()
  })

  it('should match [ERR_CRYPTO_UNKNOWN_DH_GROUP = "ERR_CRYPTO_UNKNOWN_DH_GROUP"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_UNKNOWN_DH_GROUP')
      .toMatchTypeOf<'ERR_CRYPTO_UNKNOWN_DH_GROUP'>()
  })

  it('should match [ERR_CRYPTO_UNSUPPORTED_OPERATION = "ERR_CRYPTO_UNSUPPORTED_OPERATION"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_CRYPTO_UNSUPPORTED_OPERATION')
      .toMatchTypeOf<'ERR_CRYPTO_UNSUPPORTED_OPERATION'>()
  })

  it('should match [ERR_DEBUGGER_ERROR = "ERR_DEBUGGER_ERROR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_DEBUGGER_ERROR')
      .toMatchTypeOf<'ERR_DEBUGGER_ERROR'>()
  })

  it('should match [ERR_DEBUGGER_STARTUP_ERROR = "ERR_DEBUGGER_STARTUP_ERROR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_DEBUGGER_STARTUP_ERROR')
      .toMatchTypeOf<'ERR_DEBUGGER_STARTUP_ERROR'>()
  })

  it('should match [ERR_DIR_CLOSED = "ERR_DIR_CLOSED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_DIR_CLOSED')
      .toMatchTypeOf<'ERR_DIR_CLOSED'>()
  })

  it('should match [ERR_DIR_CONCURRENT_OPERATION = "ERR_DIR_CONCURRENT_OPERATION"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_DIR_CONCURRENT_OPERATION')
      .toMatchTypeOf<'ERR_DIR_CONCURRENT_OPERATION'>()
  })

  it('should match [ERR_DLOPEN_DISABLED = "ERR_DLOPEN_DISABLED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_DLOPEN_DISABLED')
      .toMatchTypeOf<'ERR_DLOPEN_DISABLED'>()
  })

  it('should match [ERR_DLOPEN_FAILED = "ERR_DLOPEN_FAILED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_DLOPEN_FAILED')
      .toMatchTypeOf<'ERR_DLOPEN_FAILED'>()
  })

  it('should match [ERR_DNS_SET_SERVERS_FAILED = "ERR_DNS_SET_SERVERS_FAILED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_DNS_SET_SERVERS_FAILED')
      .toMatchTypeOf<'ERR_DNS_SET_SERVERS_FAILED'>()
  })

  it('should match [ERR_DOMAIN_CALLBACK_NOT_AVAILABLE = "ERR_DOMAIN_CALLBACK_NOT_AVAILABLE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_DOMAIN_CALLBACK_NOT_AVAILABLE')
      .toMatchTypeOf<'ERR_DOMAIN_CALLBACK_NOT_AVAILABLE'>()
  })

  it('should match [ERR_DOMAIN_CANNOT_SET_UNCAUGHT_EXCEPTION_CAPTURE = "ERR_DOMAIN_CANNOT_SET_UNCAUGHT_EXCEPTION_CAPTURE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_DOMAIN_CANNOT_SET_UNCAUGHT_EXCEPTION_CAPTURE')
      .toMatchTypeOf<'ERR_DOMAIN_CANNOT_SET_UNCAUGHT_EXCEPTION_CAPTURE'>()
  })

  it('should match [ERR_DUPLICATE_STARTUP_SNAPSHOT_MAIN_FUNCTION = "ERR_DUPLICATE_STARTUP_SNAPSHOT_MAIN_FUNCTION"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_DUPLICATE_STARTUP_SNAPSHOT_MAIN_FUNCTION')
      .toMatchTypeOf<'ERR_DUPLICATE_STARTUP_SNAPSHOT_MAIN_FUNCTION'>()
  })

  it('should match [ERR_ENCODING_INVALID_ENCODED_DATA = "ERR_ENCODING_INVALID_ENCODED_DATA"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_ENCODING_INVALID_ENCODED_DATA')
      .toMatchTypeOf<'ERR_ENCODING_INVALID_ENCODED_DATA'>()
  })

  it('should match [ERR_ENCODING_NOT_SUPPORTED = "ERR_ENCODING_NOT_SUPPORTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_ENCODING_NOT_SUPPORTED')
      .toMatchTypeOf<'ERR_ENCODING_NOT_SUPPORTED'>()
  })

  it('should match [ERR_EVAL_ESM_CANNOT_PRINT = "ERR_EVAL_ESM_CANNOT_PRINT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_EVAL_ESM_CANNOT_PRINT')
      .toMatchTypeOf<'ERR_EVAL_ESM_CANNOT_PRINT'>()
  })

  it('should match [ERR_EVENT_RECURSION = "ERR_EVENT_RECURSION"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_EVENT_RECURSION')
      .toMatchTypeOf<'ERR_EVENT_RECURSION'>()
  })

  it('should match [ERR_EXECUTION_ENVIRONMENT_NOT_AVAILABLE = "ERR_EXECUTION_ENVIRONMENT_NOT_AVAILABLE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_EXECUTION_ENVIRONMENT_NOT_AVAILABLE')
      .toMatchTypeOf<'ERR_EXECUTION_ENVIRONMENT_NOT_AVAILABLE'>()
  })

  it('should match [ERR_FALSY_VALUE_REJECTION = "ERR_FALSY_VALUE_REJECTION"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_FALSY_VALUE_REJECTION')
      .toMatchTypeOf<'ERR_FALSY_VALUE_REJECTION'>()
  })

  it('should match [ERR_FEATURE_UNAVAILABLE_ON_PLATFORM = "ERR_FEATURE_UNAVAILABLE_ON_PLATFORM"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_FEATURE_UNAVAILABLE_ON_PLATFORM')
      .toMatchTypeOf<'ERR_FEATURE_UNAVAILABLE_ON_PLATFORM'>()
  })

  it('should match [ERR_FS_CP_DIR_TO_NON_DIR = "ERR_FS_CP_DIR_TO_NON_DIR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_FS_CP_DIR_TO_NON_DIR')
      .toMatchTypeOf<'ERR_FS_CP_DIR_TO_NON_DIR'>()
  })

  it('should match [ERR_FS_CP_EEXIST = "ERR_FS_CP_EEXIST"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_FS_CP_EEXIST')
      .toMatchTypeOf<'ERR_FS_CP_EEXIST'>()
  })

  it('should match [ERR_FS_CP_EINVAL = "ERR_FS_CP_EINVAL"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_FS_CP_EINVAL')
      .toMatchTypeOf<'ERR_FS_CP_EINVAL'>()
  })

  it('should match [ERR_FS_CP_FIFO_PIPE = "ERR_FS_CP_FIFO_PIPE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_FS_CP_FIFO_PIPE')
      .toMatchTypeOf<'ERR_FS_CP_FIFO_PIPE'>()
  })

  it('should match [ERR_FS_CP_NON_DIR_TO_DIR = "ERR_FS_CP_NON_DIR_TO_DIR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_FS_CP_NON_DIR_TO_DIR')
      .toMatchTypeOf<'ERR_FS_CP_NON_DIR_TO_DIR'>()
  })

  it('should match [ERR_FS_CP_SOCKET = "ERR_FS_CP_SOCKET"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_FS_CP_SOCKET')
      .toMatchTypeOf<'ERR_FS_CP_SOCKET'>()
  })

  it('should match [ERR_FS_CP_SYMLINK_TO_SUBDIRECTORY = "ERR_FS_CP_SYMLINK_TO_SUBDIRECTORY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_FS_CP_SYMLINK_TO_SUBDIRECTORY')
      .toMatchTypeOf<'ERR_FS_CP_SYMLINK_TO_SUBDIRECTORY'>()
  })

  it('should match [ERR_FS_CP_UNKNOWN = "ERR_FS_CP_UNKNOWN"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_FS_CP_UNKNOWN')
      .toMatchTypeOf<'ERR_FS_CP_UNKNOWN'>()
  })

  it('should match [ERR_FS_EISDIR = "ERR_FS_EISDIR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_FS_EISDIR')
      .toMatchTypeOf<'ERR_FS_EISDIR'>()
  })

  it('should match [ERR_FS_FILE_TOO_LARGE = "ERR_FS_FILE_TOO_LARGE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_FS_FILE_TOO_LARGE')
      .toMatchTypeOf<'ERR_FS_FILE_TOO_LARGE'>()
  })

  it('should match [ERR_FS_INVALID_SYMLINK_TYPE = "ERR_FS_INVALID_SYMLINK_TYPE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_FS_INVALID_SYMLINK_TYPE')
      .toMatchTypeOf<'ERR_FS_INVALID_SYMLINK_TYPE'>()
  })

  it('should match [ERR_HTTP2_ALTSVC_INVALID_ORIGIN = "ERR_HTTP2_ALTSVC_INVALID_ORIGIN"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_ALTSVC_INVALID_ORIGIN')
      .toMatchTypeOf<'ERR_HTTP2_ALTSVC_INVALID_ORIGIN'>()
  })

  it('should match [ERR_HTTP2_ALTSVC_LENGTH = "ERR_HTTP2_ALTSVC_LENGTH"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_ALTSVC_LENGTH')
      .toMatchTypeOf<'ERR_HTTP2_ALTSVC_LENGTH'>()
  })

  it('should match [ERR_HTTP2_CONNECT_AUTHORITY = "ERR_HTTP2_CONNECT_AUTHORITY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_CONNECT_AUTHORITY')
      .toMatchTypeOf<'ERR_HTTP2_CONNECT_AUTHORITY'>()
  })

  it('should match [ERR_HTTP2_CONNECT_PATH = "ERR_HTTP2_CONNECT_PATH"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_CONNECT_PATH')
      .toMatchTypeOf<'ERR_HTTP2_CONNECT_PATH'>()
  })

  it('should match [ERR_HTTP2_CONNECT_SCHEME = "ERR_HTTP2_CONNECT_SCHEME"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_CONNECT_SCHEME')
      .toMatchTypeOf<'ERR_HTTP2_CONNECT_SCHEME'>()
  })

  it('should match [ERR_HTTP2_ERROR = "ERR_HTTP2_ERROR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_ERROR')
      .toMatchTypeOf<'ERR_HTTP2_ERROR'>()
  })

  it('should match [ERR_HTTP2_FRAME_ERROR = "ERR_HTTP2_FRAME_ERROR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_FRAME_ERROR')
      .toMatchTypeOf<'ERR_HTTP2_FRAME_ERROR'>()
  })

  it('should match [ERR_HTTP2_GOAWAY_SESSION = "ERR_HTTP2_GOAWAY_SESSION"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_GOAWAY_SESSION')
      .toMatchTypeOf<'ERR_HTTP2_GOAWAY_SESSION'>()
  })

  it('should match [ERR_HTTP2_HEADERS_AFTER_RESPOND = "ERR_HTTP2_HEADERS_AFTER_RESPOND"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_HEADERS_AFTER_RESPOND')
      .toMatchTypeOf<'ERR_HTTP2_HEADERS_AFTER_RESPOND'>()
  })

  it('should match [ERR_HTTP2_HEADERS_OBJECT = "ERR_HTTP2_HEADERS_OBJECT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_HEADERS_OBJECT')
      .toMatchTypeOf<'ERR_HTTP2_HEADERS_OBJECT'>()
  })

  it('should match [ERR_HTTP2_HEADERS_SENT = "ERR_HTTP2_HEADERS_SENT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_HEADERS_SENT')
      .toMatchTypeOf<'ERR_HTTP2_HEADERS_SENT'>()
  })

  it('should match [ERR_HTTP2_HEADER_REQUIRED = "ERR_HTTP2_HEADER_REQUIRED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_HEADER_REQUIRED')
      .toMatchTypeOf<'ERR_HTTP2_HEADER_REQUIRED'>()
  })

  it('should match [ERR_HTTP2_HEADER_SINGLE_VALUE = "ERR_HTTP2_HEADER_SINGLE_VALUE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_HEADER_SINGLE_VALUE')
      .toMatchTypeOf<'ERR_HTTP2_HEADER_SINGLE_VALUE'>()
  })

  it('should match [ERR_HTTP2_INFO_HEADERS_AFTER_RESPOND = "ERR_HTTP2_INFO_HEADERS_AFTER_RESPOND"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_INFO_HEADERS_AFTER_RESPOND')
      .toMatchTypeOf<'ERR_HTTP2_INFO_HEADERS_AFTER_RESPOND'>()
  })

  it('should match [ERR_HTTP2_INFO_STATUS_NOT_ALLOWED = "ERR_HTTP2_INFO_STATUS_NOT_ALLOWED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_INFO_STATUS_NOT_ALLOWED')
      .toMatchTypeOf<'ERR_HTTP2_INFO_STATUS_NOT_ALLOWED'>()
  })

  it('should match [ERR_HTTP2_INVALID_CONNECTION_HEADERS = "ERR_HTTP2_INVALID_CONNECTION_HEADERS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_INVALID_CONNECTION_HEADERS')
      .toMatchTypeOf<'ERR_HTTP2_INVALID_CONNECTION_HEADERS'>()
  })

  it('should match [ERR_HTTP2_INVALID_HEADER_VALUE = "ERR_HTTP2_INVALID_HEADER_VALUE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_INVALID_HEADER_VALUE')
      .toMatchTypeOf<'ERR_HTTP2_INVALID_HEADER_VALUE'>()
  })

  it('should match [ERR_HTTP2_INVALID_INFO_STATUS = "ERR_HTTP2_INVALID_INFO_STATUS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_INVALID_INFO_STATUS')
      .toMatchTypeOf<'ERR_HTTP2_INVALID_INFO_STATUS'>()
  })

  it('should match [ERR_HTTP2_INVALID_ORIGIN = "ERR_HTTP2_INVALID_ORIGIN"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_INVALID_ORIGIN')
      .toMatchTypeOf<'ERR_HTTP2_INVALID_ORIGIN'>()
  })

  it('should match [ERR_HTTP2_INVALID_PACKED_SETTINGS_LENGTH = "ERR_HTTP2_INVALID_PACKED_SETTINGS_LENGTH"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_INVALID_PACKED_SETTINGS_LENGTH')
      .toMatchTypeOf<'ERR_HTTP2_INVALID_PACKED_SETTINGS_LENGTH'>()
  })

  it('should match [ERR_HTTP2_INVALID_PSEUDOHEADER = "ERR_HTTP2_INVALID_PSEUDOHEADER"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_INVALID_PSEUDOHEADER')
      .toMatchTypeOf<'ERR_HTTP2_INVALID_PSEUDOHEADER'>()
  })

  it('should match [ERR_HTTP2_INVALID_SESSION = "ERR_HTTP2_INVALID_SESSION"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_INVALID_SESSION')
      .toMatchTypeOf<'ERR_HTTP2_INVALID_SESSION'>()
  })

  it('should match [ERR_HTTP2_INVALID_SETTING_VALUE = "ERR_HTTP2_INVALID_SETTING_VALUE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_INVALID_SETTING_VALUE')
      .toMatchTypeOf<'ERR_HTTP2_INVALID_SETTING_VALUE'>()
  })

  it('should match [ERR_HTTP2_INVALID_STREAM = "ERR_HTTP2_INVALID_STREAM"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_INVALID_STREAM')
      .toMatchTypeOf<'ERR_HTTP2_INVALID_STREAM'>()
  })

  it('should match [ERR_HTTP2_MAX_PENDING_SETTINGS_ACK = "ERR_HTTP2_MAX_PENDING_SETTINGS_ACK"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_MAX_PENDING_SETTINGS_ACK')
      .toMatchTypeOf<'ERR_HTTP2_MAX_PENDING_SETTINGS_ACK'>()
  })

  it('should match [ERR_HTTP2_NESTED_PUSH = "ERR_HTTP2_NESTED_PUSH"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_NESTED_PUSH')
      .toMatchTypeOf<'ERR_HTTP2_NESTED_PUSH'>()
  })

  it('should match [ERR_HTTP2_NO_MEM = "ERR_HTTP2_NO_MEM"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_NO_MEM')
      .toMatchTypeOf<'ERR_HTTP2_NO_MEM'>()
  })

  it('should match [ERR_HTTP2_NO_SOCKET_MANIPULATION = "ERR_HTTP2_NO_SOCKET_MANIPULATION"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_NO_SOCKET_MANIPULATION')
      .toMatchTypeOf<'ERR_HTTP2_NO_SOCKET_MANIPULATION'>()
  })

  it('should match [ERR_HTTP2_ORIGIN_LENGTH = "ERR_HTTP2_ORIGIN_LENGTH"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_ORIGIN_LENGTH')
      .toMatchTypeOf<'ERR_HTTP2_ORIGIN_LENGTH'>()
  })

  it('should match [ERR_HTTP2_OUT_OF_STREAMS = "ERR_HTTP2_OUT_OF_STREAMS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_OUT_OF_STREAMS')
      .toMatchTypeOf<'ERR_HTTP2_OUT_OF_STREAMS'>()
  })

  it('should match [ERR_HTTP2_PAYLOAD_FORBIDDEN = "ERR_HTTP2_PAYLOAD_FORBIDDEN"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_PAYLOAD_FORBIDDEN')
      .toMatchTypeOf<'ERR_HTTP2_PAYLOAD_FORBIDDEN'>()
  })

  it('should match [ERR_HTTP2_PING_CANCEL = "ERR_HTTP2_PING_CANCEL"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_PING_CANCEL')
      .toMatchTypeOf<'ERR_HTTP2_PING_CANCEL'>()
  })

  it('should match [ERR_HTTP2_PING_LENGTH = "ERR_HTTP2_PING_LENGTH"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_PING_LENGTH')
      .toMatchTypeOf<'ERR_HTTP2_PING_LENGTH'>()
  })

  it('should match [ERR_HTTP2_PSEUDOHEADER_NOT_ALLOWED = "ERR_HTTP2_PSEUDOHEADER_NOT_ALLOWED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_PSEUDOHEADER_NOT_ALLOWED')
      .toMatchTypeOf<'ERR_HTTP2_PSEUDOHEADER_NOT_ALLOWED'>()
  })

  it('should match [ERR_HTTP2_PUSH_DISABLED = "ERR_HTTP2_PUSH_DISABLED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_PUSH_DISABLED')
      .toMatchTypeOf<'ERR_HTTP2_PUSH_DISABLED'>()
  })

  it('should match [ERR_HTTP2_SEND_FILE = "ERR_HTTP2_SEND_FILE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_SEND_FILE')
      .toMatchTypeOf<'ERR_HTTP2_SEND_FILE'>()
  })

  it('should match [ERR_HTTP2_SEND_FILE_NOSEEK = "ERR_HTTP2_SEND_FILE_NOSEEK"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_SEND_FILE_NOSEEK')
      .toMatchTypeOf<'ERR_HTTP2_SEND_FILE_NOSEEK'>()
  })

  it('should match [ERR_HTTP2_SESSION_ERROR = "ERR_HTTP2_SESSION_ERROR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_SESSION_ERROR')
      .toMatchTypeOf<'ERR_HTTP2_SESSION_ERROR'>()
  })

  it('should match [ERR_HTTP2_SETTINGS_CANCEL = "ERR_HTTP2_SETTINGS_CANCEL"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_SETTINGS_CANCEL')
      .toMatchTypeOf<'ERR_HTTP2_SETTINGS_CANCEL'>()
  })

  it('should match [ERR_HTTP2_SOCKET_BOUND = "ERR_HTTP2_SOCKET_BOUND"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_SOCKET_BOUND')
      .toMatchTypeOf<'ERR_HTTP2_SOCKET_BOUND'>()
  })

  it('should match [ERR_HTTP2_SOCKET_UNBOUND = "ERR_HTTP2_SOCKET_UNBOUND"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_SOCKET_UNBOUND')
      .toMatchTypeOf<'ERR_HTTP2_SOCKET_UNBOUND'>()
  })

  it('should match [ERR_HTTP2_STATUS_101 = "ERR_HTTP2_STATUS_101"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_STATUS_101')
      .toMatchTypeOf<'ERR_HTTP2_STATUS_101'>()
  })

  it('should match [ERR_HTTP2_STATUS_INVALID = "ERR_HTTP2_STATUS_INVALID"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_STATUS_INVALID')
      .toMatchTypeOf<'ERR_HTTP2_STATUS_INVALID'>()
  })

  it('should match [ERR_HTTP2_STREAM_CANCEL = "ERR_HTTP2_STREAM_CANCEL"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_STREAM_CANCEL')
      .toMatchTypeOf<'ERR_HTTP2_STREAM_CANCEL'>()
  })

  it('should match [ERR_HTTP2_STREAM_CLOSED = "ERR_HTTP2_STREAM_CLOSED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_STREAM_CLOSED')
      .toMatchTypeOf<'ERR_HTTP2_STREAM_CLOSED'>()
  })

  it('should match [ERR_HTTP2_STREAM_ERROR = "ERR_HTTP2_STREAM_ERROR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_STREAM_ERROR')
      .toMatchTypeOf<'ERR_HTTP2_STREAM_ERROR'>()
  })

  it('should match [ERR_HTTP2_STREAM_SELF_DEPENDENCY = "ERR_HTTP2_STREAM_SELF_DEPENDENCY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_STREAM_SELF_DEPENDENCY')
      .toMatchTypeOf<'ERR_HTTP2_STREAM_SELF_DEPENDENCY'>()
  })

  it('should match [ERR_HTTP2_TOO_MANY_INVALID_FRAMES = "ERR_HTTP2_TOO_MANY_INVALID_FRAMES"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_TOO_MANY_INVALID_FRAMES')
      .toMatchTypeOf<'ERR_HTTP2_TOO_MANY_INVALID_FRAMES'>()
  })

  it('should match [ERR_HTTP2_TRAILERS_ALREADY_SENT = "ERR_HTTP2_TRAILERS_ALREADY_SENT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_TRAILERS_ALREADY_SENT')
      .toMatchTypeOf<'ERR_HTTP2_TRAILERS_ALREADY_SENT'>()
  })

  it('should match [ERR_HTTP2_TRAILERS_NOT_READY = "ERR_HTTP2_TRAILERS_NOT_READY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_TRAILERS_NOT_READY')
      .toMatchTypeOf<'ERR_HTTP2_TRAILERS_NOT_READY'>()
  })

  it('should match [ERR_HTTP2_UNSUPPORTED_PROTOCOL = "ERR_HTTP2_UNSUPPORTED_PROTOCOL"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP2_UNSUPPORTED_PROTOCOL')
      .toMatchTypeOf<'ERR_HTTP2_UNSUPPORTED_PROTOCOL'>()
  })

  it('should match [ERR_HTTP_CONTENT_LENGTH_MISMATCH = "ERR_HTTP_CONTENT_LENGTH_MISMATCH"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP_CONTENT_LENGTH_MISMATCH')
      .toMatchTypeOf<'ERR_HTTP_CONTENT_LENGTH_MISMATCH'>()
  })

  it('should match [ERR_HTTP_HEADERS_SENT = "ERR_HTTP_HEADERS_SENT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP_HEADERS_SENT')
      .toMatchTypeOf<'ERR_HTTP_HEADERS_SENT'>()
  })

  it('should match [ERR_HTTP_INVALID_CHAR = "ERR_HTTP_INVALID_CHAR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP_INVALID_CHAR')
      .toMatchTypeOf<'ERR_HTTP_INVALID_CHAR'>()
  })

  it('should match [ERR_HTTP_INVALID_HEADER_VALUE = "ERR_HTTP_INVALID_HEADER_VALUE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP_INVALID_HEADER_VALUE')
      .toMatchTypeOf<'ERR_HTTP_INVALID_HEADER_VALUE'>()
  })

  it('should match [ERR_HTTP_INVALID_STATUS_CODE = "ERR_HTTP_INVALID_STATUS_CODE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP_INVALID_STATUS_CODE')
      .toMatchTypeOf<'ERR_HTTP_INVALID_STATUS_CODE'>()
  })

  it('should match [ERR_HTTP_REQUEST_TIMEOUT = "ERR_HTTP_REQUEST_TIMEOUT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP_REQUEST_TIMEOUT')
      .toMatchTypeOf<'ERR_HTTP_REQUEST_TIMEOUT'>()
  })

  it('should match [ERR_HTTP_SOCKET_ENCODING = "ERR_HTTP_SOCKET_ENCODING"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP_SOCKET_ENCODING')
      .toMatchTypeOf<'ERR_HTTP_SOCKET_ENCODING'>()
  })

  it('should match [ERR_HTTP_TRAILER_INVALID = "ERR_HTTP_TRAILER_INVALID"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_HTTP_TRAILER_INVALID')
      .toMatchTypeOf<'ERR_HTTP_TRAILER_INVALID'>()
  })

  it('should match [ERR_ILLEGAL_CONSTRUCTOR = "ERR_ILLEGAL_CONSTRUCTOR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_ILLEGAL_CONSTRUCTOR')
      .toMatchTypeOf<'ERR_ILLEGAL_CONSTRUCTOR'>()
  })

  it('should match [ERR_IMPORT_ASSERTION_TYPE_FAILED = "ERR_IMPORT_ASSERTION_TYPE_FAILED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_IMPORT_ASSERTION_TYPE_FAILED')
      .toMatchTypeOf<'ERR_IMPORT_ASSERTION_TYPE_FAILED'>()
  })

  it('should match [ERR_IMPORT_ASSERTION_TYPE_MISSING = "ERR_IMPORT_ASSERTION_TYPE_MISSING"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_IMPORT_ASSERTION_TYPE_MISSING')
      .toMatchTypeOf<'ERR_IMPORT_ASSERTION_TYPE_MISSING'>()
  })

  it('should match [ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED = "ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED')
      .toMatchTypeOf<'ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED'>()
  })

  it('should match [ERR_INCOMPATIBLE_OPTION_PAIR = "ERR_INCOMPATIBLE_OPTION_PAIR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INCOMPATIBLE_OPTION_PAIR')
      .toMatchTypeOf<'ERR_INCOMPATIBLE_OPTION_PAIR'>()
  })

  it('should match [ERR_INDEX_OUT_OF_RANGE = "ERR_INDEX_OUT_OF_RANGE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INDEX_OUT_OF_RANGE')
      .toMatchTypeOf<'ERR_INDEX_OUT_OF_RANGE'>()
  })

  it('should match [ERR_INPUT_TYPE_NOT_ALLOWED = "ERR_INPUT_TYPE_NOT_ALLOWED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INPUT_TYPE_NOT_ALLOWED')
      .toMatchTypeOf<'ERR_INPUT_TYPE_NOT_ALLOWED'>()
  })

  it('should match [ERR_INSPECTOR_ALREADY_ACTIVATED = "ERR_INSPECTOR_ALREADY_ACTIVATED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INSPECTOR_ALREADY_ACTIVATED')
      .toMatchTypeOf<'ERR_INSPECTOR_ALREADY_ACTIVATED'>()
  })

  it('should match [ERR_INSPECTOR_ALREADY_CONNECTED = "ERR_INSPECTOR_ALREADY_CONNECTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INSPECTOR_ALREADY_CONNECTED')
      .toMatchTypeOf<'ERR_INSPECTOR_ALREADY_CONNECTED'>()
  })

  it('should match [ERR_INSPECTOR_CLOSED = "ERR_INSPECTOR_CLOSED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INSPECTOR_CLOSED')
      .toMatchTypeOf<'ERR_INSPECTOR_CLOSED'>()
  })

  it('should match [ERR_INSPECTOR_COMMAND = "ERR_INSPECTOR_COMMAND"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INSPECTOR_COMMAND')
      .toMatchTypeOf<'ERR_INSPECTOR_COMMAND'>()
  })

  it('should match [ERR_INSPECTOR_NOT_ACTIVE = "ERR_INSPECTOR_NOT_ACTIVE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INSPECTOR_NOT_ACTIVE')
      .toMatchTypeOf<'ERR_INSPECTOR_NOT_ACTIVE'>()
  })

  it('should match [ERR_INSPECTOR_NOT_AVAILABLE = "ERR_INSPECTOR_NOT_AVAILABLE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INSPECTOR_NOT_AVAILABLE')
      .toMatchTypeOf<'ERR_INSPECTOR_NOT_AVAILABLE'>()
  })

  it('should match [ERR_INSPECTOR_NOT_CONNECTED = "ERR_INSPECTOR_NOT_CONNECTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INSPECTOR_NOT_CONNECTED')
      .toMatchTypeOf<'ERR_INSPECTOR_NOT_CONNECTED'>()
  })

  it('should match [ERR_INSPECTOR_NOT_WORKER = "ERR_INSPECTOR_NOT_WORKER"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INSPECTOR_NOT_WORKER')
      .toMatchTypeOf<'ERR_INSPECTOR_NOT_WORKER'>()
  })

  it('should match [ERR_INTERNAL_ASSERTION = "ERR_INTERNAL_ASSERTION"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INTERNAL_ASSERTION')
      .toMatchTypeOf<'ERR_INTERNAL_ASSERTION'>()
  })

  it('should match [ERR_INVALID_ADDRESS_FAMILY = "ERR_INVALID_ADDRESS_FAMILY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_ADDRESS_FAMILY')
      .toMatchTypeOf<'ERR_INVALID_ADDRESS_FAMILY'>()
  })

  it('should match [ERR_INVALID_ARG_TYPE = "ERR_INVALID_ARG_TYPE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_ARG_TYPE')
      .toMatchTypeOf<'ERR_INVALID_ARG_TYPE'>()
  })

  it('should match [ERR_INVALID_ARG_VALUE = "ERR_INVALID_ARG_VALUE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_ARG_VALUE')
      .toMatchTypeOf<'ERR_INVALID_ARG_VALUE'>()
  })

  it('should match [ERR_INVALID_ASYNC_ID = "ERR_INVALID_ASYNC_ID"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_ASYNC_ID')
      .toMatchTypeOf<'ERR_INVALID_ASYNC_ID'>()
  })

  it('should match [ERR_INVALID_BUFFER_SIZE = "ERR_INVALID_BUFFER_SIZE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_BUFFER_SIZE')
      .toMatchTypeOf<'ERR_INVALID_BUFFER_SIZE'>()
  })

  it('should match [ERR_INVALID_CHAR = "ERR_INVALID_CHAR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_CHAR')
      .toMatchTypeOf<'ERR_INVALID_CHAR'>()
  })

  it('should match [ERR_INVALID_CURSOR_POS = "ERR_INVALID_CURSOR_POS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_CURSOR_POS')
      .toMatchTypeOf<'ERR_INVALID_CURSOR_POS'>()
  })

  it('should match [ERR_INVALID_FD = "ERR_INVALID_FD"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_FD')
      .toMatchTypeOf<'ERR_INVALID_FD'>()
  })

  it('should match [ERR_INVALID_FD_TYPE = "ERR_INVALID_FD_TYPE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_FD_TYPE')
      .toMatchTypeOf<'ERR_INVALID_FD_TYPE'>()
  })

  it('should match [ERR_INVALID_FILE_URL_HOST = "ERR_INVALID_FILE_URL_HOST"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_FILE_URL_HOST')
      .toMatchTypeOf<'ERR_INVALID_FILE_URL_HOST'>()
  })

  it('should match [ERR_INVALID_FILE_URL_PATH = "ERR_INVALID_FILE_URL_PATH"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_FILE_URL_PATH')
      .toMatchTypeOf<'ERR_INVALID_FILE_URL_PATH'>()
  })

  it('should match [ERR_INVALID_HANDLE_TYPE = "ERR_INVALID_HANDLE_TYPE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_HANDLE_TYPE')
      .toMatchTypeOf<'ERR_INVALID_HANDLE_TYPE'>()
  })

  it('should match [ERR_INVALID_HTTP_TOKEN = "ERR_INVALID_HTTP_TOKEN"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_HTTP_TOKEN')
      .toMatchTypeOf<'ERR_INVALID_HTTP_TOKEN'>()
  })

  it('should match [ERR_INVALID_IP_ADDRESS = "ERR_INVALID_IP_ADDRESS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_IP_ADDRESS')
      .toMatchTypeOf<'ERR_INVALID_IP_ADDRESS'>()
  })

  it('should match [ERR_INVALID_MIME_SYNTAX = "ERR_INVALID_MIME_SYNTAX"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_MIME_SYNTAX')
      .toMatchTypeOf<'ERR_INVALID_MIME_SYNTAX'>()
  })

  it('should match [ERR_INVALID_MODULE = "ERR_INVALID_MODULE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_MODULE')
      .toMatchTypeOf<'ERR_INVALID_MODULE'>()
  })

  it('should match [ERR_INVALID_MODULE_SPECIFIER = "ERR_INVALID_MODULE_SPECIFIER"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_MODULE_SPECIFIER')
      .toMatchTypeOf<'ERR_INVALID_MODULE_SPECIFIER'>()
  })

  it('should match [ERR_INVALID_OBJECT_DEFINE_PROPERTY = "ERR_INVALID_OBJECT_DEFINE_PROPERTY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_OBJECT_DEFINE_PROPERTY')
      .toMatchTypeOf<'ERR_INVALID_OBJECT_DEFINE_PROPERTY'>()
  })

  it('should match [ERR_INVALID_OPT_VALUE = "ERR_INVALID_OPT_VALUE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_OPT_VALUE')
      .toMatchTypeOf<'ERR_INVALID_OPT_VALUE'>()
  })

  it('should match [ERR_INVALID_OPT_VALUE_ENCODING = "ERR_INVALID_OPT_VALUE_ENCODING"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_OPT_VALUE_ENCODING')
      .toMatchTypeOf<'ERR_INVALID_OPT_VALUE_ENCODING'>()
  })

  it('should match [ERR_INVALID_PACKAGE_CONFIG = "ERR_INVALID_PACKAGE_CONFIG"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_PACKAGE_CONFIG')
      .toMatchTypeOf<'ERR_INVALID_PACKAGE_CONFIG'>()
  })

  it('should match [ERR_INVALID_PACKAGE_TARGET = "ERR_INVALID_PACKAGE_TARGET"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_PACKAGE_TARGET')
      .toMatchTypeOf<'ERR_INVALID_PACKAGE_TARGET'>()
  })

  it('should match [ERR_INVALID_PERFORMANCE_MARK = "ERR_INVALID_PERFORMANCE_MARK"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_PERFORMANCE_MARK')
      .toMatchTypeOf<'ERR_INVALID_PERFORMANCE_MARK'>()
  })

  it('should match [ERR_INVALID_PROTOCOL = "ERR_INVALID_PROTOCOL"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_PROTOCOL')
      .toMatchTypeOf<'ERR_INVALID_PROTOCOL'>()
  })

  it('should match [ERR_INVALID_REPL_EVAL_CONFIG = "ERR_INVALID_REPL_EVAL_CONFIG"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_REPL_EVAL_CONFIG')
      .toMatchTypeOf<'ERR_INVALID_REPL_EVAL_CONFIG'>()
  })

  it('should match [ERR_INVALID_REPL_INPUT = "ERR_INVALID_REPL_INPUT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_REPL_INPUT')
      .toMatchTypeOf<'ERR_INVALID_REPL_INPUT'>()
  })

  it('should match [ERR_INVALID_RETURN_PROPERTY = "ERR_INVALID_RETURN_PROPERTY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_RETURN_PROPERTY')
      .toMatchTypeOf<'ERR_INVALID_RETURN_PROPERTY'>()
  })

  it('should match [ERR_INVALID_RETURN_PROPERTY_VALUE = "ERR_INVALID_RETURN_PROPERTY_VALUE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_RETURN_PROPERTY_VALUE')
      .toMatchTypeOf<'ERR_INVALID_RETURN_PROPERTY_VALUE'>()
  })

  it('should match [ERR_INVALID_RETURN_VALUE = "ERR_INVALID_RETURN_VALUE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_RETURN_VALUE')
      .toMatchTypeOf<'ERR_INVALID_RETURN_VALUE'>()
  })

  it('should match [ERR_INVALID_STATE = "ERR_INVALID_STATE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_STATE')
      .toMatchTypeOf<'ERR_INVALID_STATE'>()
  })

  it('should match [ERR_INVALID_SYNC_FORK_INPUT = "ERR_INVALID_SYNC_FORK_INPUT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_SYNC_FORK_INPUT')
      .toMatchTypeOf<'ERR_INVALID_SYNC_FORK_INPUT'>()
  })

  it('should match [ERR_INVALID_THIS = "ERR_INVALID_THIS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_THIS')
      .toMatchTypeOf<'ERR_INVALID_THIS'>()
  })

  it('should match [ERR_INVALID_TRANSFER_OBJECT = "ERR_INVALID_TRANSFER_OBJECT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_TRANSFER_OBJECT')
      .toMatchTypeOf<'ERR_INVALID_TRANSFER_OBJECT'>()
  })

  it('should match [ERR_INVALID_TUPLE = "ERR_INVALID_TUPLE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_TUPLE')
      .toMatchTypeOf<'ERR_INVALID_TUPLE'>()
  })

  it('should match [ERR_INVALID_URI = "ERR_INVALID_URI"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_URI')
      .toMatchTypeOf<'ERR_INVALID_URI'>()
  })

  it('should match [ERR_INVALID_URL = "ERR_INVALID_URL"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_URL')
      .toMatchTypeOf<'ERR_INVALID_URL'>()
  })

  it('should match [ERR_INVALID_URL_SCHEME = "ERR_INVALID_URL_SCHEME"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_INVALID_URL_SCHEME')
      .toMatchTypeOf<'ERR_INVALID_URL_SCHEME'>()
  })

  it('should match [ERR_IPC_CHANNEL_CLOSED = "ERR_IPC_CHANNEL_CLOSED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_IPC_CHANNEL_CLOSED')
      .toMatchTypeOf<'ERR_IPC_CHANNEL_CLOSED'>()
  })

  it('should match [ERR_IPC_DISCONNECTED = "ERR_IPC_DISCONNECTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_IPC_DISCONNECTED')
      .toMatchTypeOf<'ERR_IPC_DISCONNECTED'>()
  })

  it('should match [ERR_IPC_ONE_PIPE = "ERR_IPC_ONE_PIPE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_IPC_ONE_PIPE')
      .toMatchTypeOf<'ERR_IPC_ONE_PIPE'>()
  })

  it('should match [ERR_IPC_SYNC_FORK = "ERR_IPC_SYNC_FORK"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_IPC_SYNC_FORK')
      .toMatchTypeOf<'ERR_IPC_SYNC_FORK'>()
  })

  it('should match [ERR_LOADER_CHAIN_INCOMPLETE = "ERR_LOADER_CHAIN_INCOMPLETE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_LOADER_CHAIN_INCOMPLETE')
      .toMatchTypeOf<'ERR_LOADER_CHAIN_INCOMPLETE'>()
  })

  it('should match [ERR_MANIFEST_ASSERT_INTEGRITY = "ERR_MANIFEST_ASSERT_INTEGRITY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_MANIFEST_ASSERT_INTEGRITY')
      .toMatchTypeOf<'ERR_MANIFEST_ASSERT_INTEGRITY'>()
  })

  it('should match [ERR_MANIFEST_DEPENDENCY_MISSING = "ERR_MANIFEST_DEPENDENCY_MISSING"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_MANIFEST_DEPENDENCY_MISSING')
      .toMatchTypeOf<'ERR_MANIFEST_DEPENDENCY_MISSING'>()
  })

  it('should match [ERR_MANIFEST_INTEGRITY_MISMATCH = "ERR_MANIFEST_INTEGRITY_MISMATCH"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_MANIFEST_INTEGRITY_MISMATCH')
      .toMatchTypeOf<'ERR_MANIFEST_INTEGRITY_MISMATCH'>()
  })

  it('should match [ERR_MANIFEST_INVALID_RESOURCE_FIELD = "ERR_MANIFEST_INVALID_RESOURCE_FIELD"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_MANIFEST_INVALID_RESOURCE_FIELD')
      .toMatchTypeOf<'ERR_MANIFEST_INVALID_RESOURCE_FIELD'>()
  })

  it('should match [ERR_MANIFEST_INVALID_SPECIFIER = "ERR_MANIFEST_INVALID_SPECIFIER"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_MANIFEST_INVALID_SPECIFIER')
      .toMatchTypeOf<'ERR_MANIFEST_INVALID_SPECIFIER'>()
  })

  it('should match [ERR_MANIFEST_PARSE_POLICY = "ERR_MANIFEST_PARSE_POLICY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_MANIFEST_PARSE_POLICY')
      .toMatchTypeOf<'ERR_MANIFEST_PARSE_POLICY'>()
  })

  it('should match [ERR_MANIFEST_TDZ = "ERR_MANIFEST_TDZ"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_MANIFEST_TDZ')
      .toMatchTypeOf<'ERR_MANIFEST_TDZ'>()
  })

  it('should match [ERR_MANIFEST_UNKNOWN_ONERROR = "ERR_MANIFEST_UNKNOWN_ONERROR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_MANIFEST_UNKNOWN_ONERROR')
      .toMatchTypeOf<'ERR_MANIFEST_UNKNOWN_ONERROR'>()
  })

  it('should match [ERR_MEMORY_ALLOCATION_FAILED = "ERR_MEMORY_ALLOCATION_FAILED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_MEMORY_ALLOCATION_FAILED')
      .toMatchTypeOf<'ERR_MEMORY_ALLOCATION_FAILED'>()
  })

  it('should match [ERR_MESSAGE_TARGET_CONTEXT_UNAVAILABLE = "ERR_MESSAGE_TARGET_CONTEXT_UNAVAILABLE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_MESSAGE_TARGET_CONTEXT_UNAVAILABLE')
      .toMatchTypeOf<'ERR_MESSAGE_TARGET_CONTEXT_UNAVAILABLE'>()
  })

  it('should match [ERR_METHOD_NOT_IMPLEMENTED = "ERR_METHOD_NOT_IMPLEMENTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_METHOD_NOT_IMPLEMENTED')
      .toMatchTypeOf<'ERR_METHOD_NOT_IMPLEMENTED'>()
  })

  it('should match [ERR_MISSING_ARGS = "ERR_MISSING_ARGS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_MISSING_ARGS')
      .toMatchTypeOf<'ERR_MISSING_ARGS'>()
  })

  it('should match [ERR_MISSING_MESSAGE_PORT_IN_TRANSFER_LIST = "ERR_MISSING_MESSAGE_PORT_IN_TRANSFER_LIST"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_MISSING_MESSAGE_PORT_IN_TRANSFER_LIST')
      .toMatchTypeOf<'ERR_MISSING_MESSAGE_PORT_IN_TRANSFER_LIST'>()
  })

  it('should match [ERR_MISSING_OPTION = "ERR_MISSING_OPTION"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_MISSING_OPTION')
      .toMatchTypeOf<'ERR_MISSING_OPTION'>()
  })

  it('should match [ERR_MISSING_PASSPHRASE = "ERR_MISSING_PASSPHRASE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_MISSING_PASSPHRASE')
      .toMatchTypeOf<'ERR_MISSING_PASSPHRASE'>()
  })

  it('should match [ERR_MISSING_PLATFORM_FOR_WORKER = "ERR_MISSING_PLATFORM_FOR_WORKER"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_MISSING_PLATFORM_FOR_WORKER')
      .toMatchTypeOf<'ERR_MISSING_PLATFORM_FOR_WORKER'>()
  })

  it('should match [ERR_MISSING_TRANSFERABLE_IN_TRANSFER_LIST = "ERR_MISSING_TRANSFERABLE_IN_TRANSFER_LIST"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_MISSING_TRANSFERABLE_IN_TRANSFER_LIST')
      .toMatchTypeOf<'ERR_MISSING_TRANSFERABLE_IN_TRANSFER_LIST'>()
  })

  it('should match [ERR_MODULE_NOT_FOUND = "ERR_MODULE_NOT_FOUND"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_MODULE_NOT_FOUND')
      .toMatchTypeOf<'ERR_MODULE_NOT_FOUND'>()
  })

  it('should match [ERR_MULTIPLE_CALLBACK = "ERR_MULTIPLE_CALLBACK"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_MULTIPLE_CALLBACK')
      .toMatchTypeOf<'ERR_MULTIPLE_CALLBACK'>()
  })

  it('should match [ERR_NAPI_CONS_FUNCTION = "ERR_NAPI_CONS_FUNCTION"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_NAPI_CONS_FUNCTION')
      .toMatchTypeOf<'ERR_NAPI_CONS_FUNCTION'>()
  })

  it('should match [ERR_NAPI_CONS_PROTOTYPE_OBJECT = "ERR_NAPI_CONS_PROTOTYPE_OBJECT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_NAPI_CONS_PROTOTYPE_OBJECT')
      .toMatchTypeOf<'ERR_NAPI_CONS_PROTOTYPE_OBJECT'>()
  })

  it('should match [ERR_NAPI_INVALID_DATAVIEW_ARGS = "ERR_NAPI_INVALID_DATAVIEW_ARGS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_NAPI_INVALID_DATAVIEW_ARGS')
      .toMatchTypeOf<'ERR_NAPI_INVALID_DATAVIEW_ARGS'>()
  })

  it('should match [ERR_NAPI_INVALID_TYPEDARRAY_ALIGNMENT = "ERR_NAPI_INVALID_TYPEDARRAY_ALIGNMENT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_NAPI_INVALID_TYPEDARRAY_ALIGNMENT')
      .toMatchTypeOf<'ERR_NAPI_INVALID_TYPEDARRAY_ALIGNMENT'>()
  })

  it('should match [ERR_NAPI_INVALID_TYPEDARRAY_LENGTH = "ERR_NAPI_INVALID_TYPEDARRAY_LENGTH"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_NAPI_INVALID_TYPEDARRAY_LENGTH')
      .toMatchTypeOf<'ERR_NAPI_INVALID_TYPEDARRAY_LENGTH'>()
  })

  it('should match [ERR_NAPI_TSFN_CALL_JS = "ERR_NAPI_TSFN_CALL_JS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_NAPI_TSFN_CALL_JS')
      .toMatchTypeOf<'ERR_NAPI_TSFN_CALL_JS'>()
  })

  it('should match [ERR_NAPI_TSFN_GET_UNDEFINED = "ERR_NAPI_TSFN_GET_UNDEFINED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_NAPI_TSFN_GET_UNDEFINED')
      .toMatchTypeOf<'ERR_NAPI_TSFN_GET_UNDEFINED'>()
  })

  it('should match [ERR_NAPI_TSFN_START_IDLE_LOOP = "ERR_NAPI_TSFN_START_IDLE_LOOP"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_NAPI_TSFN_START_IDLE_LOOP')
      .toMatchTypeOf<'ERR_NAPI_TSFN_START_IDLE_LOOP'>()
  })

  it('should match [ERR_NAPI_TSFN_STOP_IDLE_LOOP = "ERR_NAPI_TSFN_STOP_IDLE_LOOP"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_NAPI_TSFN_STOP_IDLE_LOOP')
      .toMatchTypeOf<'ERR_NAPI_TSFN_STOP_IDLE_LOOP'>()
  })

  it('should match [ERR_NETWORK_IMPORT_BAD_RESPONSE = "ERR_NETWORK_IMPORT_BAD_RESPONSE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_NETWORK_IMPORT_BAD_RESPONSE')
      .toMatchTypeOf<'ERR_NETWORK_IMPORT_BAD_RESPONSE'>()
  })

  it('should match [ERR_NETWORK_IMPORT_DISALLOWED = "ERR_NETWORK_IMPORT_DISALLOWED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_NETWORK_IMPORT_DISALLOWED')
      .toMatchTypeOf<'ERR_NETWORK_IMPORT_DISALLOWED'>()
  })

  it('should match [ERR_NON_CONTEXT_AWARE_DISABLED = "ERR_NON_CONTEXT_AWARE_DISABLED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_NON_CONTEXT_AWARE_DISABLED')
      .toMatchTypeOf<'ERR_NON_CONTEXT_AWARE_DISABLED'>()
  })

  it('should match [ERR_NOT_BUILDING_SNAPSHOT = "ERR_NOT_BUILDING_SNAPSHOT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_NOT_BUILDING_SNAPSHOT')
      .toMatchTypeOf<'ERR_NOT_BUILDING_SNAPSHOT'>()
  })

  it('should match [ERR_NO_CRYPTO = "ERR_NO_CRYPTO"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_NO_CRYPTO')
      .toMatchTypeOf<'ERR_NO_CRYPTO'>()
  })

  it('should match [ERR_NO_ICU = "ERR_NO_ICU"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_NO_ICU')
      .toMatchTypeOf<'ERR_NO_ICU'>()
  })

  it('should match [ERR_NO_LONGER_SUPPORTED = "ERR_NO_LONGER_SUPPORTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_NO_LONGER_SUPPORTED')
      .toMatchTypeOf<'ERR_NO_LONGER_SUPPORTED'>()
  })

  it('should match [ERR_OPERATION_FAILED = "ERR_OPERATION_FAILED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_OPERATION_FAILED')
      .toMatchTypeOf<'ERR_OPERATION_FAILED'>()
  })

  it('should match [ERR_OUTOFMEMORY = "ERR_OUTOFMEMORY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_OUTOFMEMORY')
      .toMatchTypeOf<'ERR_OUTOFMEMORY'>()
  })

  it('should match [ERR_OUT_OF_RANGE = "ERR_OUT_OF_RANGE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_OUT_OF_RANGE')
      .toMatchTypeOf<'ERR_OUT_OF_RANGE'>()
  })

  it('should match [ERR_PACKAGE_IMPORT_NOT_DEFINED = "ERR_PACKAGE_IMPORT_NOT_DEFINED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_PACKAGE_IMPORT_NOT_DEFINED')
      .toMatchTypeOf<'ERR_PACKAGE_IMPORT_NOT_DEFINED'>()
  })

  it('should match [ERR_PACKAGE_PATH_NOT_EXPORTED = "ERR_PACKAGE_PATH_NOT_EXPORTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_PACKAGE_PATH_NOT_EXPORTED')
      .toMatchTypeOf<'ERR_PACKAGE_PATH_NOT_EXPORTED'>()
  })

  it('should match [ERR_PARSE_ARGS_INVALID_OPTION_VALUE = "ERR_PARSE_ARGS_INVALID_OPTION_VALUE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_PARSE_ARGS_INVALID_OPTION_VALUE')
      .toMatchTypeOf<'ERR_PARSE_ARGS_INVALID_OPTION_VALUE'>()
  })

  it('should match [ERR_PARSE_ARGS_UNEXPECTED_POSITIONAL = "ERR_PARSE_ARGS_UNEXPECTED_POSITIONAL"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_PARSE_ARGS_UNEXPECTED_POSITIONAL')
      .toMatchTypeOf<'ERR_PARSE_ARGS_UNEXPECTED_POSITIONAL'>()
  })

  it('should match [ERR_PARSE_ARGS_UNKNOWN_OPTION = "ERR_PARSE_ARGS_UNKNOWN_OPTION"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_PARSE_ARGS_UNKNOWN_OPTION')
      .toMatchTypeOf<'ERR_PARSE_ARGS_UNKNOWN_OPTION'>()
  })

  it('should match [ERR_PARSE_HISTORY_DATA = "ERR_PARSE_HISTORY_DATA"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_PARSE_HISTORY_DATA')
      .toMatchTypeOf<'ERR_PARSE_HISTORY_DATA'>()
  })

  it('should match [ERR_PERFORMANCE_INVALID_TIMESTAMP = "ERR_PERFORMANCE_INVALID_TIMESTAMP"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_PERFORMANCE_INVALID_TIMESTAMP')
      .toMatchTypeOf<'ERR_PERFORMANCE_INVALID_TIMESTAMP'>()
  })

  it('should match [ERR_PERFORMANCE_MEASURE_INVALID_OPTIONS = "ERR_PERFORMANCE_MEASURE_INVALID_OPTIONS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_PERFORMANCE_MEASURE_INVALID_OPTIONS')
      .toMatchTypeOf<'ERR_PERFORMANCE_MEASURE_INVALID_OPTIONS'>()
  })

  it('should match [ERR_PROTO_ACCESS = "ERR_PROTO_ACCESS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_PROTO_ACCESS')
      .toMatchTypeOf<'ERR_PROTO_ACCESS'>()
  })

  it('should match [ERR_REQUIRE_ESM = "ERR_REQUIRE_ESM"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_REQUIRE_ESM')
      .toMatchTypeOf<'ERR_REQUIRE_ESM'>()
  })

  it('should match [ERR_SCRIPT_EXECUTION_INTERRUPTED = "ERR_SCRIPT_EXECUTION_INTERRUPTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_SCRIPT_EXECUTION_INTERRUPTED')
      .toMatchTypeOf<'ERR_SCRIPT_EXECUTION_INTERRUPTED'>()
  })

  it('should match [ERR_SCRIPT_EXECUTION_TIMEOUT = "ERR_SCRIPT_EXECUTION_TIMEOUT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_SCRIPT_EXECUTION_TIMEOUT')
      .toMatchTypeOf<'ERR_SCRIPT_EXECUTION_TIMEOUT'>()
  })

  it('should match [ERR_SERVER_ALREADY_LISTEN = "ERR_SERVER_ALREADY_LISTEN"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_SERVER_ALREADY_LISTEN')
      .toMatchTypeOf<'ERR_SERVER_ALREADY_LISTEN'>()
  })

  it('should match [ERR_SERVER_NOT_RUNNING = "ERR_SERVER_NOT_RUNNING"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_SERVER_NOT_RUNNING')
      .toMatchTypeOf<'ERR_SERVER_NOT_RUNNING'>()
  })

  it('should match [ERR_SOCKET_ALREADY_BOUND = "ERR_SOCKET_ALREADY_BOUND"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_SOCKET_ALREADY_BOUND')
      .toMatchTypeOf<'ERR_SOCKET_ALREADY_BOUND'>()
  })

  it('should match [ERR_SOCKET_BAD_BUFFER_SIZE = "ERR_SOCKET_BAD_BUFFER_SIZE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_SOCKET_BAD_BUFFER_SIZE')
      .toMatchTypeOf<'ERR_SOCKET_BAD_BUFFER_SIZE'>()
  })

  it('should match [ERR_SOCKET_BAD_PORT = "ERR_SOCKET_BAD_PORT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_SOCKET_BAD_PORT')
      .toMatchTypeOf<'ERR_SOCKET_BAD_PORT'>()
  })

  it('should match [ERR_SOCKET_BAD_TYPE = "ERR_SOCKET_BAD_TYPE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_SOCKET_BAD_TYPE')
      .toMatchTypeOf<'ERR_SOCKET_BAD_TYPE'>()
  })

  it('should match [ERR_SOCKET_BUFFER_SIZE = "ERR_SOCKET_BUFFER_SIZE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_SOCKET_BUFFER_SIZE')
      .toMatchTypeOf<'ERR_SOCKET_BUFFER_SIZE'>()
  })

  it('should match [ERR_SOCKET_CANNOT_SEND = "ERR_SOCKET_CANNOT_SEND"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_SOCKET_CANNOT_SEND')
      .toMatchTypeOf<'ERR_SOCKET_CANNOT_SEND'>()
  })

  it('should match [ERR_SOCKET_CLOSED = "ERR_SOCKET_CLOSED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_SOCKET_CLOSED')
      .toMatchTypeOf<'ERR_SOCKET_CLOSED'>()
  })

  it('should match [ERR_SOCKET_DGRAM_IS_CONNECTED = "ERR_SOCKET_DGRAM_IS_CONNECTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_SOCKET_DGRAM_IS_CONNECTED')
      .toMatchTypeOf<'ERR_SOCKET_DGRAM_IS_CONNECTED'>()
  })

  it('should match [ERR_SOCKET_DGRAM_NOT_CONNECTED = "ERR_SOCKET_DGRAM_NOT_CONNECTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_SOCKET_DGRAM_NOT_CONNECTED')
      .toMatchTypeOf<'ERR_SOCKET_DGRAM_NOT_CONNECTED'>()
  })

  it('should match [ERR_SOCKET_DGRAM_NOT_RUNNING = "ERR_SOCKET_DGRAM_NOT_RUNNING"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_SOCKET_DGRAM_NOT_RUNNING')
      .toMatchTypeOf<'ERR_SOCKET_DGRAM_NOT_RUNNING'>()
  })

  it('should match [ERR_SRI_PARSE = "ERR_SRI_PARSE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_SRI_PARSE')
      .toMatchTypeOf<'ERR_SRI_PARSE'>()
  })

  it('should match [ERR_STDERR_CLOSE = "ERR_STDERR_CLOSE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_STDERR_CLOSE')
      .toMatchTypeOf<'ERR_STDERR_CLOSE'>()
  })

  it('should match [ERR_STDOUT_CLOSE = "ERR_STDOUT_CLOSE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_STDOUT_CLOSE')
      .toMatchTypeOf<'ERR_STDOUT_CLOSE'>()
  })

  it('should match [ERR_STREAM_ALREADY_FINISHED = "ERR_STREAM_ALREADY_FINISHED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_STREAM_ALREADY_FINISHED')
      .toMatchTypeOf<'ERR_STREAM_ALREADY_FINISHED'>()
  })

  it('should match [ERR_STREAM_CANNOT_PIPE = "ERR_STREAM_CANNOT_PIPE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_STREAM_CANNOT_PIPE')
      .toMatchTypeOf<'ERR_STREAM_CANNOT_PIPE'>()
  })

  it('should match [ERR_STREAM_DESTROYED = "ERR_STREAM_DESTROYED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_STREAM_DESTROYED')
      .toMatchTypeOf<'ERR_STREAM_DESTROYED'>()
  })

  it('should match [ERR_STREAM_NULL_VALUES = "ERR_STREAM_NULL_VALUES"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_STREAM_NULL_VALUES')
      .toMatchTypeOf<'ERR_STREAM_NULL_VALUES'>()
  })

  it('should match [ERR_STREAM_PREMATURE_CLOSE = "ERR_STREAM_PREMATURE_CLOSE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_STREAM_PREMATURE_CLOSE')
      .toMatchTypeOf<'ERR_STREAM_PREMATURE_CLOSE'>()
  })

  it('should match [ERR_STREAM_PUSH_AFTER_EOF = "ERR_STREAM_PUSH_AFTER_EOF"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_STREAM_PUSH_AFTER_EOF')
      .toMatchTypeOf<'ERR_STREAM_PUSH_AFTER_EOF'>()
  })

  it('should match [ERR_STREAM_READ_NOT_IMPLEMENTED = "ERR_STREAM_READ_NOT_IMPLEMENTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_STREAM_READ_NOT_IMPLEMENTED')
      .toMatchTypeOf<'ERR_STREAM_READ_NOT_IMPLEMENTED'>()
  })

  it('should match [ERR_STREAM_UNSHIFT_AFTER_END_EVENT = "ERR_STREAM_UNSHIFT_AFTER_END_EVENT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_STREAM_UNSHIFT_AFTER_END_EVENT')
      .toMatchTypeOf<'ERR_STREAM_UNSHIFT_AFTER_END_EVENT'>()
  })

  it('should match [ERR_STREAM_WRAP = "ERR_STREAM_WRAP"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_STREAM_WRAP')
      .toMatchTypeOf<'ERR_STREAM_WRAP'>()
  })

  it('should match [ERR_STREAM_WRITE_AFTER_END = "ERR_STREAM_WRITE_AFTER_END"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_STREAM_WRITE_AFTER_END')
      .toMatchTypeOf<'ERR_STREAM_WRITE_AFTER_END'>()
  })

  it('should match [ERR_STRING_TOO_LONG = "ERR_STRING_TOO_LONG"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_STRING_TOO_LONG')
      .toMatchTypeOf<'ERR_STRING_TOO_LONG'>()
  })

  it('should match [ERR_SYNTHETIC = "ERR_SYNTHETIC"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_SYNTHETIC')
      .toMatchTypeOf<'ERR_SYNTHETIC'>()
  })

  it('should match [ERR_SYSTEM_ERROR = "ERR_SYSTEM_ERROR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_SYSTEM_ERROR')
      .toMatchTypeOf<'ERR_SYSTEM_ERROR'>()
  })

  it('should match [ERR_TAP_LEXER_ERROR = "ERR_TAP_LEXER_ERROR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TAP_LEXER_ERROR')
      .toMatchTypeOf<'ERR_TAP_LEXER_ERROR'>()
  })

  it('should match [ERR_TAP_PARSER_ERROR = "ERR_TAP_PARSER_ERROR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TAP_PARSER_ERROR')
      .toMatchTypeOf<'ERR_TAP_PARSER_ERROR'>()
  })

  it('should match [ERR_TAP_VALIDATION_ERROR = "ERR_TAP_VALIDATION_ERROR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TAP_VALIDATION_ERROR')
      .toMatchTypeOf<'ERR_TAP_VALIDATION_ERROR'>()
  })

  it('should match [ERR_TEST_FAILURE = "ERR_TEST_FAILURE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TEST_FAILURE')
      .toMatchTypeOf<'ERR_TEST_FAILURE'>()
  })

  it('should match [ERR_TLS_CERT_ALTNAME_FORMAT = "ERR_TLS_CERT_ALTNAME_FORMAT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TLS_CERT_ALTNAME_FORMAT')
      .toMatchTypeOf<'ERR_TLS_CERT_ALTNAME_FORMAT'>()
  })

  it('should match [ERR_TLS_CERT_ALTNAME_INVALID = "ERR_TLS_CERT_ALTNAME_INVALID"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TLS_CERT_ALTNAME_INVALID')
      .toMatchTypeOf<'ERR_TLS_CERT_ALTNAME_INVALID'>()
  })

  it('should match [ERR_TLS_DH_PARAM_SIZE = "ERR_TLS_DH_PARAM_SIZE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TLS_DH_PARAM_SIZE')
      .toMatchTypeOf<'ERR_TLS_DH_PARAM_SIZE'>()
  })

  it('should match [ERR_TLS_HANDSHAKE_TIMEOUT = "ERR_TLS_HANDSHAKE_TIMEOUT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TLS_HANDSHAKE_TIMEOUT')
      .toMatchTypeOf<'ERR_TLS_HANDSHAKE_TIMEOUT'>()
  })

  it('should match [ERR_TLS_INVALID_CONTEXT = "ERR_TLS_INVALID_CONTEXT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TLS_INVALID_CONTEXT')
      .toMatchTypeOf<'ERR_TLS_INVALID_CONTEXT'>()
  })

  it('should match [ERR_TLS_INVALID_PROTOCOL_METHOD = "ERR_TLS_INVALID_PROTOCOL_METHOD"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TLS_INVALID_PROTOCOL_METHOD')
      .toMatchTypeOf<'ERR_TLS_INVALID_PROTOCOL_METHOD'>()
  })

  it('should match [ERR_TLS_INVALID_PROTOCOL_VERSION = "ERR_TLS_INVALID_PROTOCOL_VERSION"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TLS_INVALID_PROTOCOL_VERSION')
      .toMatchTypeOf<'ERR_TLS_INVALID_PROTOCOL_VERSION'>()
  })

  it('should match [ERR_TLS_INVALID_STATE = "ERR_TLS_INVALID_STATE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TLS_INVALID_STATE')
      .toMatchTypeOf<'ERR_TLS_INVALID_STATE'>()
  })

  it('should match [ERR_TLS_PROTOCOL_VERSION_CONFLICT = "ERR_TLS_PROTOCOL_VERSION_CONFLICT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TLS_PROTOCOL_VERSION_CONFLICT')
      .toMatchTypeOf<'ERR_TLS_PROTOCOL_VERSION_CONFLICT'>()
  })

  it('should match [ERR_TLS_PSK_SET_IDENTIY_HINT_FAILED = "ERR_TLS_PSK_SET_IDENTIY_HINT_FAILED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TLS_PSK_SET_IDENTIY_HINT_FAILED')
      .toMatchTypeOf<'ERR_TLS_PSK_SET_IDENTIY_HINT_FAILED'>()
  })

  it('should match [ERR_TLS_RENEGOTIATION_DISABLED = "ERR_TLS_RENEGOTIATION_DISABLED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TLS_RENEGOTIATION_DISABLED')
      .toMatchTypeOf<'ERR_TLS_RENEGOTIATION_DISABLED'>()
  })

  it('should match [ERR_TLS_RENEGOTIATION_FAILED = "ERR_TLS_RENEGOTIATION_FAILED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TLS_RENEGOTIATION_FAILED')
      .toMatchTypeOf<'ERR_TLS_RENEGOTIATION_FAILED'>()
  })

  it('should match [ERR_TLS_REQUIRED_SERVER_NAME = "ERR_TLS_REQUIRED_SERVER_NAME"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TLS_REQUIRED_SERVER_NAME')
      .toMatchTypeOf<'ERR_TLS_REQUIRED_SERVER_NAME'>()
  })

  it('should match [ERR_TLS_SESSION_ATTACK = "ERR_TLS_SESSION_ATTACK"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TLS_SESSION_ATTACK')
      .toMatchTypeOf<'ERR_TLS_SESSION_ATTACK'>()
  })

  it('should match [ERR_TLS_SNI_FROM_SERVER = "ERR_TLS_SNI_FROM_SERVER"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TLS_SNI_FROM_SERVER')
      .toMatchTypeOf<'ERR_TLS_SNI_FROM_SERVER'>()
  })

  it('should match [ERR_TRACE_EVENTS_CATEGORY_REQUIRED = "ERR_TRACE_EVENTS_CATEGORY_REQUIRED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TRACE_EVENTS_CATEGORY_REQUIRED')
      .toMatchTypeOf<'ERR_TRACE_EVENTS_CATEGORY_REQUIRED'>()
  })

  it('should match [ERR_TRACE_EVENTS_UNAVAILABLE = "ERR_TRACE_EVENTS_UNAVAILABLE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TRACE_EVENTS_UNAVAILABLE')
      .toMatchTypeOf<'ERR_TRACE_EVENTS_UNAVAILABLE'>()
  })

  it('should match [ERR_TRANSFERRING_EXTERNALIZED_SHAREDARRAYBUFFER = "ERR_TRANSFERRING_EXTERNALIZED_SHAREDARRAYBUFFER"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TRANSFERRING_EXTERNALIZED_SHAREDARRAYBUFFER')
      .toMatchTypeOf<'ERR_TRANSFERRING_EXTERNALIZED_SHAREDARRAYBUFFER'>()
  })

  it('should match [ERR_TRANSFORM_ALREADY_TRANSFORMING = "ERR_TRANSFORM_ALREADY_TRANSFORMING"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TRANSFORM_ALREADY_TRANSFORMING')
      .toMatchTypeOf<'ERR_TRANSFORM_ALREADY_TRANSFORMING'>()
  })

  it('should match [ERR_TRANSFORM_WITH_LENGTH_0 = "ERR_TRANSFORM_WITH_LENGTH_0"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TRANSFORM_WITH_LENGTH_0')
      .toMatchTypeOf<'ERR_TRANSFORM_WITH_LENGTH_0'>()
  })

  it('should match [ERR_TTY_INIT_FAILED = "ERR_TTY_INIT_FAILED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_TTY_INIT_FAILED')
      .toMatchTypeOf<'ERR_TTY_INIT_FAILED'>()
  })

  it('should match [ERR_UNAVAILABLE_DURING_EXIT = "ERR_UNAVAILABLE_DURING_EXIT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_UNAVAILABLE_DURING_EXIT')
      .toMatchTypeOf<'ERR_UNAVAILABLE_DURING_EXIT'>()
  })

  it('should match [ERR_UNCAUGHT_EXCEPTION_CAPTURE_ALREADY_SET = "ERR_UNCAUGHT_EXCEPTION_CAPTURE_ALREADY_SET"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_UNCAUGHT_EXCEPTION_CAPTURE_ALREADY_SET')
      .toMatchTypeOf<'ERR_UNCAUGHT_EXCEPTION_CAPTURE_ALREADY_SET'>()
  })

  it('should match [ERR_UNESCAPED_CHARACTERS = "ERR_UNESCAPED_CHARACTERS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_UNESCAPED_CHARACTERS')
      .toMatchTypeOf<'ERR_UNESCAPED_CHARACTERS'>()
  })

  it('should match [ERR_UNHANDLED_ERROR = "ERR_UNHANDLED_ERROR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_UNHANDLED_ERROR')
      .toMatchTypeOf<'ERR_UNHANDLED_ERROR'>()
  })

  it('should match [ERR_UNKNOWN_BUILTIN_MODULE = "ERR_UNKNOWN_BUILTIN_MODULE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_UNKNOWN_BUILTIN_MODULE')
      .toMatchTypeOf<'ERR_UNKNOWN_BUILTIN_MODULE'>()
  })

  it('should match [ERR_UNKNOWN_CREDENTIAL = "ERR_UNKNOWN_CREDENTIAL"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_UNKNOWN_CREDENTIAL')
      .toMatchTypeOf<'ERR_UNKNOWN_CREDENTIAL'>()
  })

  it('should match [ERR_UNKNOWN_ENCODING = "ERR_UNKNOWN_ENCODING"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_UNKNOWN_ENCODING')
      .toMatchTypeOf<'ERR_UNKNOWN_ENCODING'>()
  })

  it('should match [ERR_UNKNOWN_FILE_EXTENSION = "ERR_UNKNOWN_FILE_EXTENSION"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_UNKNOWN_FILE_EXTENSION')
      .toMatchTypeOf<'ERR_UNKNOWN_FILE_EXTENSION'>()
  })

  it('should match [ERR_UNKNOWN_MODULE_FORMAT = "ERR_UNKNOWN_MODULE_FORMAT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_UNKNOWN_MODULE_FORMAT')
      .toMatchTypeOf<'ERR_UNKNOWN_MODULE_FORMAT'>()
  })

  it('should match [ERR_UNKNOWN_SIGNAL = "ERR_UNKNOWN_SIGNAL"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_UNKNOWN_SIGNAL')
      .toMatchTypeOf<'ERR_UNKNOWN_SIGNAL'>()
  })

  it('should match [ERR_UNKNOWN_STDIN_TYPE = "ERR_UNKNOWN_STDIN_TYPE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_UNKNOWN_STDIN_TYPE')
      .toMatchTypeOf<'ERR_UNKNOWN_STDIN_TYPE'>()
  })

  it('should match [ERR_UNKNOWN_STREAM_TYPE = "ERR_UNKNOWN_STREAM_TYPE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_UNKNOWN_STREAM_TYPE')
      .toMatchTypeOf<'ERR_UNKNOWN_STREAM_TYPE'>()
  })

  it('should match [ERR_UNSUPPORTED_DIR_IMPORT = "ERR_UNSUPPORTED_DIR_IMPORT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_UNSUPPORTED_DIR_IMPORT')
      .toMatchTypeOf<'ERR_UNSUPPORTED_DIR_IMPORT'>()
  })

  it('should match [ERR_UNSUPPORTED_ESM_URL_SCHEME = "ERR_UNSUPPORTED_ESM_URL_SCHEME"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_UNSUPPORTED_ESM_URL_SCHEME')
      .toMatchTypeOf<'ERR_UNSUPPORTED_ESM_URL_SCHEME'>()
  })

  it('should match [ERR_USE_AFTER_CLOSE = "ERR_USE_AFTER_CLOSE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_USE_AFTER_CLOSE')
      .toMatchTypeOf<'ERR_USE_AFTER_CLOSE'>()
  })

  it('should match [ERR_V8BREAKITERATOR = "ERR_V8BREAKITERATOR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_V8BREAKITERATOR')
      .toMatchTypeOf<'ERR_V8BREAKITERATOR'>()
  })

  it('should match [ERR_VALID_PERFORMANCE_ENTRY_TYPE = "ERR_VALID_PERFORMANCE_ENTRY_TYPE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_VALID_PERFORMANCE_ENTRY_TYPE')
      .toMatchTypeOf<'ERR_VALID_PERFORMANCE_ENTRY_TYPE'>()
  })

  it('should match [ERR_VALUE_OUT_OF_RANGE = "ERR_VALUE_OUT_OF_RANGE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_VALUE_OUT_OF_RANGE')
      .toMatchTypeOf<'ERR_VALUE_OUT_OF_RANGE'>()
  })

  it('should match [ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING = "ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING')
      .toMatchTypeOf<'ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING'>()
  })

  it('should match [ERR_VM_MODULE_ALREADY_LINKED = "ERR_VM_MODULE_ALREADY_LINKED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_VM_MODULE_ALREADY_LINKED')
      .toMatchTypeOf<'ERR_VM_MODULE_ALREADY_LINKED'>()
  })

  it('should match [ERR_VM_MODULE_CACHED_DATA_REJECTED = "ERR_VM_MODULE_CACHED_DATA_REJECTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_VM_MODULE_CACHED_DATA_REJECTED')
      .toMatchTypeOf<'ERR_VM_MODULE_CACHED_DATA_REJECTED'>()
  })

  it('should match [ERR_VM_MODULE_CANNOT_CREATE_CACHED_DATA = "ERR_VM_MODULE_CANNOT_CREATE_CACHED_DATA"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_VM_MODULE_CANNOT_CREATE_CACHED_DATA')
      .toMatchTypeOf<'ERR_VM_MODULE_CANNOT_CREATE_CACHED_DATA'>()
  })

  it('should match [ERR_VM_MODULE_DIFFERENT_CONTEXT = "ERR_VM_MODULE_DIFFERENT_CONTEXT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_VM_MODULE_DIFFERENT_CONTEXT')
      .toMatchTypeOf<'ERR_VM_MODULE_DIFFERENT_CONTEXT'>()
  })

  it('should match [ERR_VM_MODULE_LINKING_ERRORED = "ERR_VM_MODULE_LINKING_ERRORED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_VM_MODULE_LINKING_ERRORED')
      .toMatchTypeOf<'ERR_VM_MODULE_LINKING_ERRORED'>()
  })

  it('should match [ERR_VM_MODULE_LINK_FAILURE = "ERR_VM_MODULE_LINK_FAILURE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_VM_MODULE_LINK_FAILURE')
      .toMatchTypeOf<'ERR_VM_MODULE_LINK_FAILURE'>()
  })

  it('should match [ERR_VM_MODULE_NOT_LINKED = "ERR_VM_MODULE_NOT_LINKED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_VM_MODULE_NOT_LINKED')
      .toMatchTypeOf<'ERR_VM_MODULE_NOT_LINKED'>()
  })

  it('should match [ERR_VM_MODULE_NOT_MODULE = "ERR_VM_MODULE_NOT_MODULE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_VM_MODULE_NOT_MODULE')
      .toMatchTypeOf<'ERR_VM_MODULE_NOT_MODULE'>()
  })

  it('should match [ERR_VM_MODULE_STATUS = "ERR_VM_MODULE_STATUS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_VM_MODULE_STATUS')
      .toMatchTypeOf<'ERR_VM_MODULE_STATUS'>()
  })

  it('should match [ERR_WASI_ALREADY_STARTED = "ERR_WASI_ALREADY_STARTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_WASI_ALREADY_STARTED')
      .toMatchTypeOf<'ERR_WASI_ALREADY_STARTED'>()
  })

  it('should match [ERR_WASI_NOT_STARTED = "ERR_WASI_NOT_STARTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_WASI_NOT_STARTED')
      .toMatchTypeOf<'ERR_WASI_NOT_STARTED'>()
  })

  it('should match [ERR_WEBASSEMBLY_RESPONSE = "ERR_WEBASSEMBLY_RESPONSE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_WEBASSEMBLY_RESPONSE')
      .toMatchTypeOf<'ERR_WEBASSEMBLY_RESPONSE'>()
  })

  it('should match [ERR_WORKER_INIT_FAILED = "ERR_WORKER_INIT_FAILED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_WORKER_INIT_FAILED')
      .toMatchTypeOf<'ERR_WORKER_INIT_FAILED'>()
  })

  it('should match [ERR_WORKER_INVALID_EXEC_ARGV = "ERR_WORKER_INVALID_EXEC_ARGV"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_WORKER_INVALID_EXEC_ARGV')
      .toMatchTypeOf<'ERR_WORKER_INVALID_EXEC_ARGV'>()
  })

  it('should match [ERR_WORKER_NOT_RUNNING = "ERR_WORKER_NOT_RUNNING"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_WORKER_NOT_RUNNING')
      .toMatchTypeOf<'ERR_WORKER_NOT_RUNNING'>()
  })

  it('should match [ERR_WORKER_OUT_OF_MEMORY = "ERR_WORKER_OUT_OF_MEMORY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_WORKER_OUT_OF_MEMORY')
      .toMatchTypeOf<'ERR_WORKER_OUT_OF_MEMORY'>()
  })

  it('should match [ERR_WORKER_PATH = "ERR_WORKER_PATH"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_WORKER_PATH')
      .toMatchTypeOf<'ERR_WORKER_PATH'>()
  })

  it('should match [ERR_WORKER_UNSERIALIZABLE_ERROR = "ERR_WORKER_UNSERIALIZABLE_ERROR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_WORKER_UNSERIALIZABLE_ERROR')
      .toMatchTypeOf<'ERR_WORKER_UNSERIALIZABLE_ERROR'>()
  })

  it('should match [ERR_WORKER_UNSUPPORTED_EXTENSION = "ERR_WORKER_UNSUPPORTED_EXTENSION"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_WORKER_UNSUPPORTED_EXTENSION')
      .toMatchTypeOf<'ERR_WORKER_UNSUPPORTED_EXTENSION'>()
  })

  it('should match [ERR_WORKER_UNSUPPORTED_OPERATION = "ERR_WORKER_UNSUPPORTED_OPERATION"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_WORKER_UNSUPPORTED_OPERATION')
      .toMatchTypeOf<'ERR_WORKER_UNSUPPORTED_OPERATION'>()
  })

  it('should match [ERR_ZLIB_BINDING_CLOSED = "ERR_ZLIB_BINDING_CLOSED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_ZLIB_BINDING_CLOSED')
      .toMatchTypeOf<'ERR_ZLIB_BINDING_CLOSED'>()
  })

  it('should match [ERR_ZLIB_INITIALIZATION_FAILED = "ERR_ZLIB_INITIALIZATION_FAILED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ERR_ZLIB_INITIALIZATION_FAILED')
      .toMatchTypeOf<'ERR_ZLIB_INITIALIZATION_FAILED'>()
  })

  it('should match [HPE_HEADER_OVERFLOW = "HPE_HEADER_OVERFLOW"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('HPE_HEADER_OVERFLOW')
      .toMatchTypeOf<'HPE_HEADER_OVERFLOW'>()
  })

  it('should match [HPE_UNEXPECTED_CONTENT_LENGTH = "HPE_UNEXPECTED_CONTENT_LENGTH"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('HPE_UNEXPECTED_CONTENT_LENGTH')
      .toMatchTypeOf<'HPE_UNEXPECTED_CONTENT_LENGTH'>()
  })

  it('should match [MODULE_NOT_FOUND = "MODULE_NOT_FOUND"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('MODULE_NOT_FOUND')
      .toMatchTypeOf<'MODULE_NOT_FOUND'>()
  })
})
