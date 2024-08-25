/**
 * @file Type Tests - Code
 * @module errnode/types/tests/unit-d/Code
 */

import type { NodeErrorMap } from '#src/interfaces'
import type TestSubject from '../code'

describe('unit-d:types/Code', () => {
  it('should equal Extract<keyof NodeErrorMap, string>', () => {
    expectTypeOf<TestSubject>()
      .toEqualTypeOf<Extract<keyof NodeErrorMap, string>>()
  })
})
