/**
 * @file Unit Tests - NodeError
 * @module errnode/types/tests/unit-d/NodeError
 */

import type { ErrorCode } from '#src/enums'
import type TestSubject from '../node-error'

describe('unit-d:types/NodeError', () => {
  it('should have type param extend Error type', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Error>()
    expectTypeOf<TestSubject<RangeError>>().toMatchTypeOf<RangeError>()
    expectTypeOf<TestSubject<TypeError>>().toMatchTypeOf<TypeError>()
  })

  it('should match [code: ErrorCode]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('code')
      .toEqualTypeOf<ErrorCode>()
  })
})
