/**
 * @file Type Tests - NodeErrorMap
 * @module errnode/interfaces/tests/unit-d/NodeErrorMap
 */

import type { codes } from '#src/enums'
import type TestSubject from '../node-error-map'

describe('unit-d:enums/NodeErrorMap', () => {
  it('should register all error codes', () => {
    // Arrange
    type Diff1 = Exclude<keyof typeof codes, keyof TestSubject>
    type Diff2 = Exclude<keyof TestSubject, keyof typeof codes>

    // Expect
    expectTypeOf<Diff1>().toBeNever()
    expectTypeOf<Diff2>().toBeNever()
  })
})
