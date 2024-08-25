/**
 * @file Type Tests - ERR_INVALID_RETURN_VALUE
 * @module errnode/errors/tests/unit-d/ERR_INVALID_RETURN_VALUE
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-invalid-return-value'

describe('unit-d:errors/ERR_INVALID_RETURN_VALUE', () => {
  describe('ERR_INVALID_RETURN_VALUE', () => {
    it('should be ErrInvalidReturnValueConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrInvalidReturnValueConstructor>()
    })
  })

  describe('ErrInvalidReturnValue', () => {
    it('should extend NodeError<codes.ERR_INVALID_RETURN_VALUE>', () => {
      expectTypeOf<TestSubject.ErrInvalidReturnValue>()
        .toMatchTypeOf<NodeError<codes.ERR_INVALID_RETURN_VALUE>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrInvalidReturnValue>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrInvalidReturnValueConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrInvalidReturnValue
      type Args = TestSubject.ErrInvalidReturnValueArgs

      // Expect
      expectTypeOf<TestSubject.ErrInvalidReturnValueConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
