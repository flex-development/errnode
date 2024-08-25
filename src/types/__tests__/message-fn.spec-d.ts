/**
 * @file Type Tests - MessageFn
 * @module errnode/types/tests/unit-d/MessageFn
 */

import type { ErrUnsupportedDirImport } from '#src/errors'
import type { Writable } from '@flex-development/tutils'
import type TestSubject from '../message-fn'

describe('unit-d:types/MessageFn', () => {
  type T = ErrUnsupportedDirImport
  type Args = readonly [id: string, base: string]
  type Subject = TestSubject<T, Args>

  it('should match [this: T]', () => {
    expectTypeOf<Subject>().thisParameter.toEqualTypeOf<T>()
  })

  describe('parameters', () => {
    it('should be callable with Args', () => {
      expectTypeOf<Subject>().parameters.toEqualTypeOf<Writable<Args>>()
    })
  })

  describe('returns', () => {
    it('should return string', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<string>()
    })
  })
})
