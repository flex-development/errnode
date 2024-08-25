/**
 * @file Type Tests - ERR_UNKNOWN_ENCODING
 * @module errnode/errors/tests/unit-d/ERR_UNKNOWN_ENCODING
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-unknown-encoding'

describe('unit-d:errors/ERR_UNKNOWN_ENCODING', () => {
  describe('ERR_UNKNOWN_ENCODING', () => {
    it('should be ErrUnknownEncodingConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrUnknownEncodingConstructor>()
    })
  })

  describe('ErrUnknownEncoding', () => {
    it('should extend NodeError<codes.ERR_UNKNOWN_ENCODING>', () => {
      expectTypeOf<TestSubject.ErrUnknownEncoding>()
        .toMatchTypeOf<NodeError<codes.ERR_UNKNOWN_ENCODING>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrUnknownEncoding>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrUnknownEncodingConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrUnknownEncoding
      type Args = TestSubject.ErrUnknownEncodingArgs

      // Expect
      expectTypeOf<TestSubject.ErrUnknownEncodingConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
