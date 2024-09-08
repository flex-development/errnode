/**
 * @file Type Tests - ERR_NO_ICU
 * @module errnode/errors/tests/unit-d/ERR_NO_ICU
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-no-icu'

describe('unit-d:errors/ERR_NO_ICU', () => {
  describe('ERR_NO_ICU', () => {
    it('should be ErrNoIcuConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrNoIcuConstructor>()
    })
  })

  describe('ErrNoIcu', () => {
    it('should extend NodeError<codes.ERR_NO_ICU>', () => {
      expectTypeOf<TestSubject.ErrNoIcu>()
        .toMatchTypeOf<NodeError<codes.ERR_NO_ICU>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrNoIcu>().toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrNoIcuConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrNoIcu
      type Args = TestSubject.ErrNoIcuArgs

      // Expect
      expectTypeOf<TestSubject.ErrNoIcuConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
