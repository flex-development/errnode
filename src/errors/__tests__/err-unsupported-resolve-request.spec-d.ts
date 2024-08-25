/**
 * @file Type Tests - ERR_UNSUPPORTED_RESOLVE_REQUEST
 * @module errnode/errors/tests/unit-d/ERR_UNSUPPORTED_RESOLVE_REQUEST
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-unsupported-resolve-request'

describe('unit-d:errors/ERR_UNSUPPORTED_RESOLVE_REQUEST', () => {
  describe('ERR_UNSUPPORTED_RESOLVE_REQUEST', () => {
    it('should be ErrUnsupportedResolveRequestConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrUnsupportedResolveRequestConstructor>()
    })
  })

  describe('ErrUnsupportedResolveRequest', () => {
    it('should extend NodeError<codes.ERR_UNSUPPORTED_RESOLVE_REQUEST>', () => {
      expectTypeOf<TestSubject.ErrUnsupportedResolveRequest>()
        .toMatchTypeOf<NodeError<codes.ERR_UNSUPPORTED_RESOLVE_REQUEST>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrUnsupportedResolveRequest>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrUnsupportedResolveRequestConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrUnsupportedResolveRequest
      type Args = TestSubject.ErrUnsupportedResolveRequestArgs

      // Expect
      expectTypeOf<TestSubject.ErrUnsupportedResolveRequestConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
