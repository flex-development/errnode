/**
 * @file Type Tests - ERR_UNHANDLED_ERROR
 * @module errnode/errors/tests/unit-d/ERR_UNHANDLED_ERROR
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-unhandled-error'

describe('unit-d:errors/ERR_UNHANDLED_ERROR', () => {
  describe('ERR_UNHANDLED_ERROR', () => {
    it('should be ErrUnhandledErrorConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrUnhandledErrorConstructor>()
    })
  })

  describe('ErrUnhandledError', () => {
    it('should extend NodeError<codes.ERR_UNHANDLED_ERROR>', () => {
      expectTypeOf<TestSubject.ErrUnhandledError>()
        .toMatchTypeOf<NodeError<codes.ERR_UNHANDLED_ERROR>>()
    })
  })

  describe('ErrUnhandledErrorConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrUnhandledError
      type Args = TestSubject.ErrUnhandledErrorArgs

      // Expect
      expectTypeOf<TestSubject.ErrUnhandledErrorConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
