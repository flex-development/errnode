/**
 * @file Type Tests - CallSite
 * @module errnode/interfaces/tests/unit-d/CallSite
 */

import type { Fn, Nullable, Optional } from '@flex-development/tutils'
import type TestSubject from '../call-site'

describe('unit-d:interfaces/CallSite', () => {
  it('should extend NodeJS.CallSite', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<NodeJS.CallSite>()
  })

  it('should match [getColumnNumber(): Nullable<number>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('getColumnNumber')
      .toEqualTypeOf<() => Nullable<number>>()
  })

  it('should match [getEvalOrigin(): Optional<string>', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('getEvalOrigin')
      .toEqualTypeOf<() => Optional<string>>()
  })

  it('should match [getFileName(): Optional<string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('getFileName')
      .toEqualTypeOf<() => Optional<string>>()
  })

  it('should match [getFunction(): Optional<Fn>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('getFunction')
      .toEqualTypeOf<() => Optional<Fn>>()
  })

  it('should match [getFunctionName(): Nullable<Fn["name"]>', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('getFunctionName')
      .toEqualTypeOf<() => Nullable<Fn['name']>>()
  })

  it('should match [getLineNumber(): Nullable<number>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('getLineNumber')
      .toEqualTypeOf<() => Nullable<number>>()
  })

  it('should match [getMethodName(): Nullable<string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('getMethodName')
      .toEqualTypeOf<() => Nullable<string>>()
  })

  it('should match [getThis(): unknown]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('getThis')
      .toMatchTypeOf<() => unknown>()
  })

  it('should match [getTypeName(): Nullable<string>', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('getTypeName')
      .toEqualTypeOf<() => Nullable<string>>()
  })

  it('should match [isConstructor(): boolean', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('isConstructor')
      .toEqualTypeOf<() => boolean>()
  })

  it('should match [isEval(): boolean', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('isEval')
      .toEqualTypeOf<() => boolean>()
  })

  it('should match [isNative(): boolean', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('isNative')
      .toEqualTypeOf<() => boolean>()
  })

  it('should match [isToplevel(): boolean', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('isToplevel')
      .toEqualTypeOf<() => boolean>()
  })
})
