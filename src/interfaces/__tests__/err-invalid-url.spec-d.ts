/**
 * @file Type Tests - ErrInvalidUrl
 * @module errnode/interfaces/tests/unit-d/ErrInvalidUrl
 */

import type { ErrorCode } from '#src/enums'
import type { NodeError } from '#src/types'
import type TestSubject from '../err-invalid-url'

describe('unit-d:interfaces/ErrInvalidUrl', () => {
  it('should extend NodeError<TypeError>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<NodeError<TypeError>>()
  })

  it('should match [code: ErrorCode.ERR_INVALID_URL]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('code')
      .toEqualTypeOf<ErrorCode.ERR_INVALID_URL>()
  })

  it('should match [input: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('input').toBeString()
  })
})
