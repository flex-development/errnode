/**
 * @file Type Tests - ERR_UNSUPPORTED_ESM_URL_SCHEME
 * @module errnode/errors/tests/unit-d/ERR_UNSUPPORTED_ESM_URL_SCHEME
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-unsupported-esm-url-scheme'

describe('unit-d:errors/ERR_UNSUPPORTED_ESM_URL_SCHEME', () => {
  describe('ERR_UNSUPPORTED_ESM_URL_SCHEME', () => {
    it('should be ErrUnsupportedEsmUrlSchemeConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrUnsupportedEsmUrlSchemeConstructor>()
    })
  })

  describe('ErrUnsupportedEsmUrlScheme', () => {
    it('should extend NodeError<codes.ERR_UNSUPPORTED_ESM_URL_SCHEME>', () => {
      expectTypeOf<TestSubject.ErrUnsupportedEsmUrlScheme>()
        .toMatchTypeOf<NodeError<codes.ERR_UNSUPPORTED_ESM_URL_SCHEME>>()
    })
  })

  describe('ErrUnsupportedEsmUrlSchemeConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrUnsupportedEsmUrlScheme
      type Args = TestSubject.ErrUnsupportedEsmUrlSchemeArgs

      // Expect
      expectTypeOf<TestSubject.ErrUnsupportedEsmUrlSchemeConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
