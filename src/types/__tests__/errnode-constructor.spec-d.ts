/**
 * @file Type Tests - ErrnodeConstructor
 * @module errnode/types/tests/unit-d/ErrnodeConstructor
 */

import type { Class, Omit, Times } from '@flex-development/tutils'
import type TestSubject from '../errnode-constructor'

describe('unit-d:types/ErrnodeConstructor', () => {
  type T = TypeError
  type A = Readonly<Times<1, string>>

  it('should match Class<T, A>', () => {
    expectTypeOf<TestSubject<T, A>>().toMatchTypeOf<Class<T, A>>()
    expectTypeOf<TestSubject<T, A>>().instance.toEqualTypeOf<T>()
  })

  it('should match Omit<ErrorConstructor, "prototype">', () => {
    // Arrange
    type Expect = Omit<ErrorConstructor, 'prototype'>

    // Expect
    expectTypeOf<TestSubject<T, A>>().toMatchTypeOf<Expect>()
  })
})
