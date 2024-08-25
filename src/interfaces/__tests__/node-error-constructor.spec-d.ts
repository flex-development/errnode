/**
 * @file Type Tests - NodeErrorConstructor
 * @module errnode/interfaces/tests/unit-d/NodeErrorConstructor
 */

import type { ErrUnsupportedDirImport } from '#src/errors'
import type { ReadonlyKeys, Writable } from '@flex-development/tutils'
import type TestSubject from '../node-error-constructor'

describe('unit-d:interfaces/NodeErrorConstructor', () => {
  type T = ErrUnsupportedDirImport
  type Args = readonly [id: string, base: string]
  type Params = Writable<Args>
  type Subject = TestSubject<T, Args>

  it('should be callable with Writable<Args>', () => {
    expectTypeOf<Subject>().parameters.toEqualTypeOf<Params>()
  })

  it('should be constructable with Writable<Args>', () => {
    expectTypeOf<Subject>().constructorParameters.toEqualTypeOf<Params>()
  })

  it('should construct T', () => {
    expectTypeOf<Subject>().instance.toEqualTypeOf<T>()
  })

  it('should match [readonly prototype: T]', () => {
    expectTypeOf<Subject>().toHaveProperty('prototype').toEqualTypeOf<T>()
    expectTypeOf<'prototype'>().toMatchTypeOf<ReadonlyKeys<Subject>>()
  })

  it('should return T', () => {
    expectTypeOf<Subject>().returns.toEqualTypeOf<T>()
  })
})
