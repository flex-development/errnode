/**
 * @file Type Tests - ERR_INVALID_URL_SCHEME
 * @module errnode/errors/tests/unit-d/ERR_INVALID_URL_SCHEME
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-invalid-url-scheme'

describe('unit-d:errors/ERR_INVALID_URL_SCHEME', () => {
  describe('ERR_INVALID_URL_SCHEME', () => {
    it('should be ErrInvalidUrlSchemeConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrInvalidUrlSchemeConstructor>()
    })
  })

  describe('ErrInvalidUrlScheme', () => {
    it('should extend NodeError<codes.ERR_INVALID_URL_SCHEME>', () => {
      expectTypeOf<TestSubject.ErrInvalidUrlScheme>()
        .toMatchTypeOf<NodeError<codes.ERR_INVALID_URL_SCHEME>>()
    })
  })

  describe('ErrInvalidUrlSchemeConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrInvalidUrlScheme
      type Args = TestSubject.ErrInvalidUrlSchemeArgs

      // Expect
      expectTypeOf<TestSubject.ErrInvalidUrlSchemeConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
