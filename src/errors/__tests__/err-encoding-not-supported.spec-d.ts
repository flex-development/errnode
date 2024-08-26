/**
 * @file Type Tests - ERR_ENCODING_NOT_SUPPORTED
 * @module errnode/errors/tests/unit-d/ERR_ENCODING_NOT_SUPPORTED
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-encoding-not-supported'

describe('unit-d:errors/ERR_ENCODING_NOT_SUPPORTED', () => {
  describe('ERR_ENCODING_NOT_SUPPORTED', () => {
    it('should be ErrEncodingNotSupportedConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrEncodingNotSupportedConstructor>()
    })
  })

  describe('ErrEncodingNotSupported', () => {
    it('should extend NodeError<codes.ERR_ENCODING_NOT_SUPPORTED>', () => {
      expectTypeOf<TestSubject.ErrEncodingNotSupported>()
        .toMatchTypeOf<NodeError<codes.ERR_ENCODING_NOT_SUPPORTED>>()
    })

    it('should extend RangeError', () => {
      expectTypeOf<TestSubject.ErrEncodingNotSupported>()
        .toMatchTypeOf<RangeError>()
    })
  })

  describe('ErrEncodingNotSupportedConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrEncodingNotSupported
      type Args = TestSubject.ErrEncodingNotSupportedArgs

      // Expect
      expectTypeOf<TestSubject.ErrEncodingNotSupportedConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
