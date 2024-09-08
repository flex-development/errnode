/**
 * @file Type Tests - ERR_ARG_NOT_ITERABLE
 * @module errnode/errors/tests/unit-d/ERR_ARG_NOT_ITERABLE
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-arg-not-iterable'

describe('unit-d:errors/ERR_ARG_NOT_ITERABLE', () => {
  describe('ERR_ARG_NOT_ITERABLE', () => {
    it('should be ErrArgNotIterableConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrArgNotIterableConstructor>()
    })
  })

  describe('ErrArgNotIterable', () => {
    it('should extend NodeError<codes.ERR_ARG_NOT_ITERABLE>', () => {
      expectTypeOf<TestSubject.ErrArgNotIterable>()
        .toMatchTypeOf<NodeError<codes.ERR_ARG_NOT_ITERABLE>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrArgNotIterable>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrArgNotIterableConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrArgNotIterable
      type Args = TestSubject.ErrArgNotIterableArgs

      // Expect
      expectTypeOf<TestSubject.ErrArgNotIterableConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
