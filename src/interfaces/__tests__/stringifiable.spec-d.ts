/**
 * @file Type Tests - Stringifiable
 * @module errnode/interfaces/tests/unit-d/Stringifiable
 */

import type { EmptyArray } from '@flex-development/tutils'
import type TestSubject from '../stringifiable'

describe('unit-d:interfaces/Stringifiable', () => {
  it('should allow string', () => {
    expectTypeOf<string>().toMatchTypeOf<TestSubject>()
  })

  it('should allow object with `toString` method', () => {
    expectTypeOf<URL>().toMatchTypeOf<TestSubject>()
  })

  describe('toString', () => {
    it('should be callable with []', () => {
      expectTypeOf<TestSubject>()
        .toHaveProperty('toString')
        .parameters
        .toEqualTypeOf<EmptyArray>()
    })

    it('should return string', () => {
      expectTypeOf<TestSubject>()
        .toHaveProperty('toString')
        .returns
        .toEqualTypeOf<string>()
    })
  })
})
