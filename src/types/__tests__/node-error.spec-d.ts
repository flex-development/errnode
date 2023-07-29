/**
 * @file Type Tests - NodeError
 * @module errnode/types/tests/unit-d/NodeError
 */

import type { ErrorCode } from '#src/enums'
import type { ErrInvalidUrl } from '#src/interfaces'
import type { Assign, Get } from '@flex-development/tutils'
import type TestSubject from '../node-error'

describe('unit-d:types/NodeError', () => {
  type Expect<T extends object> = Assign<T, { code: Get<T, 'code', ErrorCode> }>

  it('should equal Assign<T, { code: Get<T, "code", ErrorCode> }>', () => {
    // Arrange
    type T1 = ErrInvalidUrl
    type T2 = RangeError

    // Expect
    expectTypeOf<TestSubject<T1>>().toEqualTypeOf<Expect<T1>>()
    expectTypeOf<TestSubject<T2>>().toEqualTypeOf<Expect<T2>>()
  })
})
