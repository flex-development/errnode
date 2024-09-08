/**
 * @file Type Tests - ERR_INVALID_THIS
 * @module errnode/errors/tests/unit-d/ERR_INVALID_THIS
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-invalid-this'

describe('unit-d:errors/ERR_INVALID_THIS', () => {
  describe('ERR_INVALID_THIS', () => {
    it('should be ErrInvalidThisConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrInvalidThisConstructor>()
    })
  })

  describe('ErrInvalidThis', () => {
    it('should extend NodeError<codes.ERR_INVALID_THIS>', () => {
      expectTypeOf<TestSubject.ErrInvalidThis>()
        .toMatchTypeOf<NodeError<codes.ERR_INVALID_THIS>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrInvalidThis>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrInvalidThisConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrInvalidThis
      type Args = TestSubject.ErrInvalidThisArgs

      // Expect
      expectTypeOf<TestSubject.ErrInvalidThisConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
