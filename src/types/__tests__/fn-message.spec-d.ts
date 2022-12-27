/**
 * @file Unit Tests - MessageFn
 * @module create-node-error/types/tests/unit-d/MessageFn
 */

import type TestSubject from '../fn-message'

describe('unit-d:types/MessageFn', () => {
  it('should extract parameters from type parameter', () => {
    expectTypeOf<TestSubject<[string]>>().parameter(0).toBeString()
    expectTypeOf<TestSubject<[string, boolean]>>().parameter(1).toBeBoolean()
  })

  it('should return string', () => {
    expectTypeOf<TestSubject>().returns.toBeString()
  })
})
