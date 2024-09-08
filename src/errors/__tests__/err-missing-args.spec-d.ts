/**
 * @file Type Tests - ERR_MISSING_ARGS
 * @module errnode/errors/tests/unit-d/ERR_MISSING_ARGS
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-missing-args'

describe('unit-d:errors/ERR_MISSING_ARGS', () => {
  describe('ERR_MISSING_ARGS', () => {
    it('should be ErrMissingArgsConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrMissingArgsConstructor>()
    })
  })

  describe('ErrMissingArgs', () => {
    it('should extend NodeError<codes.ERR_MISSING_ARGS>', () => {
      expectTypeOf<TestSubject.ErrMissingArgs>()
        .toMatchTypeOf<NodeError<codes.ERR_MISSING_ARGS>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrMissingArgs>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrMissingArgsConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrMissingArgs
      type Args = TestSubject.ErrMissingArgsArgs

      // Expect
      expectTypeOf<TestSubject.ErrMissingArgsConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
