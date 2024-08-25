/**
 * @file Type Tests - SystemCode
 * @module errnode/types/tests/unit-d/SystemCode
 */

import type { SystemErrorMap } from '#src/interfaces'
import type TestSubject from '../system-code'

describe('unit-d:types/SystemCode', () => {
  it('should equal Extract<keyof SystemErrorMap, string>', () => {
    expectTypeOf<TestSubject>()
      .toEqualTypeOf<Extract<keyof SystemErrorMap, string>>()
  })
})
