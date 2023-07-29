/**
 * @file Type Tests - Message
 * @module errnode/types/tests/unit-d/Message
 */

import type { Times } from '@flex-development/tutils'
import type MessageFn from '../fn-message'
import type TestSubject from '../message'

describe('unit-d:types/Message', () => {
  it('should equal T if T extends MessageFn', () => {
    // Arrange
    type T = MessageFn

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
  })

  it('should equal T if T extends string', () => {
    // Arrange
    type T = '%s must be iterable'

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
  })

  it('should equal string if T extends readonly unknown[]', () => {
    // Arrange
    type T = Readonly<Times<2, string>>

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<string>()
  })
})
