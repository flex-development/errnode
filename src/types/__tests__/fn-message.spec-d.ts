/**
 * @file Type Tests - MessageFn
 * @module errnode/types/tests/unit-d/MessageFn
 */

import type { Fn } from '@flex-development/tutils'
import type TestSubject from '../fn-message'

describe('unit-d:types/MessageFn', () => {
  it('should equal Fn<A, string>', () => {
    // Arrange
    type A = readonly [string, boolean]

    // Expect
    expectTypeOf<TestSubject<A>>().toEqualTypeOf<Fn<A, string>>()
  })
})
