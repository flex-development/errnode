/**
 * @file Type Tests - ERR_INVALID_FILE_URL_HOST
 * @module errnode/errors/tests/unit-d/ERR_INVALID_FILE_URL_HOST
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-invalid-file-url-host'

describe('unit-d:errors/ERR_INVALID_FILE_URL_HOST', () => {
  describe('ERR_INVALID_FILE_URL_HOST', () => {
    it('should be ErrInvalidFileUrlHostConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrInvalidFileUrlHostConstructor>()
    })
  })

  describe('ErrInvalidFileUrlHost', () => {
    it('should extend NodeError<codes.ERR_INVALID_FILE_URL_HOST>', () => {
      expectTypeOf<TestSubject.ErrInvalidFileUrlHost>()
        .toMatchTypeOf<NodeError<codes.ERR_INVALID_FILE_URL_HOST>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrInvalidFileUrlHost>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrInvalidFileUrlHostConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrInvalidFileUrlHost
      type Args = TestSubject.ErrInvalidFileUrlHostArgs

      // Expect
      expectTypeOf<TestSubject.ErrInvalidFileUrlHostConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
