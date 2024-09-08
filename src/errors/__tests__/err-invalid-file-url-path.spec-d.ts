/**
 * @file Type Tests - ERR_INVALID_FILE_URL_PATH
 * @module errnode/errors/tests/unit-d/ERR_INVALID_FILE_URL_PATH
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-invalid-file-url-path'

describe('unit-d:errors/ERR_INVALID_FILE_URL_PATH', () => {
  describe('ERR_INVALID_FILE_URL_PATH', () => {
    it('should be ErrInvalidFileUrlPathConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrInvalidFileUrlPathConstructor>()
    })
  })

  describe('ErrInvalidFileUrlPath', () => {
    it('should extend NodeError<codes.ERR_INVALID_FILE_URL_PATH>', () => {
      expectTypeOf<TestSubject.ErrInvalidFileUrlPath>()
        .toMatchTypeOf<NodeError<codes.ERR_INVALID_FILE_URL_PATH>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrInvalidFileUrlPath>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrInvalidFileUrlPathConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrInvalidFileUrlPath
      type Args = TestSubject.ErrInvalidFileUrlPathArgs

      // Expect
      expectTypeOf<TestSubject.ErrInvalidFileUrlPathConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
