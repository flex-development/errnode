/**
 * @file Type Tests - NodeError
 * @module errnode/interfaces/tests/unit-d/NodeError
 */

import type { codes } from '#src/enums'
import type TestSubject from '../node-error'

describe('unit-d:interfaces/NodeError', () => {
  it('should extend Error', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Error>()
  })

  it('should match [code: T]', () => {
    // Arrange
    type T = codes.ERR_INVALID_URL

    // Expect
    expectTypeOf<TestSubject<T>>().toHaveProperty('code').toEqualTypeOf<T>()
  })
})
