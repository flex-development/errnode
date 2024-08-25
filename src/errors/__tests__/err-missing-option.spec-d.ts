/**
 * @file Type Tests - ERR_MISSING_OPTION
 * @module errnode/errors/tests/unit-d/ERR_MISSING_OPTION
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-missing-option'

describe('unit-d:errors/ERR_MISSING_OPTION', () => {
  describe('ERR_MISSING_OPTION', () => {
    it('should be ErrMissingOptionConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrMissingOptionConstructor>()
    })
  })

  describe('ErrMissingOption', () => {
    it('should extend NodeError<codes.ERR_MISSING_OPTION>', () => {
      expectTypeOf<TestSubject.ErrMissingOption>()
        .toMatchTypeOf<NodeError<codes.ERR_MISSING_OPTION>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrMissingOption>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrMissingOptionConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrMissingOption
      type Args = TestSubject.ErrMissingOptionArgs

      // Expect
      expectTypeOf<TestSubject.ErrMissingOptionConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
