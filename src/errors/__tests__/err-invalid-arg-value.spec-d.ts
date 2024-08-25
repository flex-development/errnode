/**
 * @file Type Tests - ERR_INVALID_ARG_VALUE
 * @module errnode/errors/tests/unit-d/ERR_INVALID_ARG_VALUE
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-invalid-arg-value'

describe('unit-d:errors/ERR_INVALID_ARG_VALUE', () => {
  describe('ERR_INVALID_ARG_VALUE', () => {
    it('should be ErrInvalidArgValueConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrInvalidArgValueConstructor>()
    })
  })

  describe('ErrInvalidArgValue', () => {
    it('should extend NodeError<codes.ERR_INVALID_ARG_VALUE>', () => {
      expectTypeOf<TestSubject.ErrInvalidArgValue>()
        .toMatchTypeOf<NodeError<codes.ERR_INVALID_ARG_VALUE>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrInvalidArgValue>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrInvalidArgValueConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrInvalidArgValue
      type Args = TestSubject.ErrInvalidArgValueArgs

      // Expect
      expectTypeOf<TestSubject.ErrInvalidArgValueConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
