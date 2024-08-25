/**
 * @file Type Tests - ERR_INVALID_ARG_TYPE
 * @module errnode/errors/tests/unit-d/ERR_INVALID_ARG_TYPE
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-invalid-arg-type'

describe('unit-d:errors/ERR_INVALID_ARG_TYPE', () => {
  describe('ERR_INVALID_ARG_TYPE', () => {
    it('should be ErrInvalidArgTypeConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrInvalidArgTypeConstructor>()
    })
  })

  describe('ErrInvalidArgType', () => {
    it('should extend NodeError<codes.ERR_INVALID_ARG_TYPE>', () => {
      expectTypeOf<TestSubject.ErrInvalidArgType>()
        .toMatchTypeOf<NodeError<codes.ERR_INVALID_ARG_TYPE>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrInvalidArgType>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrInvalidArgTypeConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrInvalidArgType
      type Args = TestSubject.ErrInvalidArgTypeArgs

      // Expect
      expectTypeOf<TestSubject.ErrInvalidArgTypeConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
