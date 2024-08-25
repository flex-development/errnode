/**
 * @file Type Tests - ERR_INCOMPATIBLE_OPTION_PAIR
 * @module errnode/errors/tests/unit-d/ERR_INCOMPATIBLE_OPTION_PAIR
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-incompatible-option-pair'

describe('unit-d:errors/ERR_INCOMPATIBLE_OPTION_PAIR', () => {
  describe('ERR_INCOMPATIBLE_OPTION_PAIR', () => {
    it('should be ErrIncompatibleOptionPairConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrIncompatibleOptionPairConstructor>()
    })
  })

  describe('ErrIncompatibleOptionPair', () => {
    it('should extend NodeError<codes.ERR_INCOMPATIBLE_OPTION_PAIR>', () => {
      expectTypeOf<TestSubject.ErrIncompatibleOptionPair>()
        .toMatchTypeOf<NodeError<codes.ERR_INCOMPATIBLE_OPTION_PAIR>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrIncompatibleOptionPair>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrIncompatibleOptionPairConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrIncompatibleOptionPair
      type Args = TestSubject.ErrIncompatibleOptionPairArgs

      // Expect
      expectTypeOf<TestSubject.ErrIncompatibleOptionPairConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
