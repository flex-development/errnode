/**
 * @file Type Tests - ERR_INVALID_TUPLE
 * @module errnode/errors/tests/unit-d/ERR_INVALID_TUPLE
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-invalid-tuple'

describe('unit-d:errors/ERR_INVALID_TUPLE', () => {
  describe('ERR_INVALID_TUPLE', () => {
    it('should be ErrInvalidTupleConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrInvalidTupleConstructor>()
    })
  })

  describe('ErrInvalidTuple', () => {
    it('should extend NodeError<codes.ERR_INVALID_TUPLE>', () => {
      expectTypeOf<TestSubject.ErrInvalidTuple>()
        .toMatchTypeOf<NodeError<codes.ERR_INVALID_TUPLE>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrInvalidTuple>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrInvalidTupleConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrInvalidTuple
      type Args = TestSubject.ErrInvalidTupleArgs

      // Expect
      expectTypeOf<TestSubject.ErrInvalidTupleConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
