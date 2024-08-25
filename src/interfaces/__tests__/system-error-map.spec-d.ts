/**
 * @file Type Tests - SystemErrorMap
 * @module errnode/interfaces/tests/unit-d/SystemErrorMap
 */

import type { syscodes } from '#src/enums'
import type TestSubject from '../system-error-map'

describe('unit-d:enums/SystemErrorMap', () => {
  it('should register all system error codes', () => {
    // Arrange
    type Diff1 = Exclude<keyof typeof syscodes, keyof TestSubject>
    type Diff2 = Exclude<keyof TestSubject, keyof typeof syscodes>

    // Expect
    expectTypeOf<Diff1>().toBeNever()
    expectTypeOf<Diff2>().toBeNever()
  })
})
