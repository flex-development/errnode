/**
 * @file Type Tests - NodeErrorConstructor
 * @module errnode/interfaces/tests/unit-d/NodeErrorConstructor
 */

import type { MessageFn, NodeError } from '#src/types'
import type {
  Fn,
  Optional,
  Pick,
  Times,
  Writable
} from '@flex-development/tutils'
import type CallSite from '../call-site'
import type ErrInvalidUrl from '../err-invalid-url'
import type TestSubject from '../node-error-constructor'

describe('unit-d:interfaces/NodeErrorConstructor', () => {
  it('should construct NodeError<T>', () => {
    // Arrange
    type T = TypeError

    // Expect
    expectTypeOf<TestSubject<T>>().instance.toEqualTypeOf<NodeError<T>>()
  })

  it('should match [captureStackTrace(err: Error, ctor?: Fn): void]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('captureStackTrace')
      .toEqualTypeOf<(err: Error, ctor?: Fn) => void>()
  })

  it('should match [prepareStackTrace?(err: Error, traces: CallSite[]): any]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('prepareStackTrace')
      .toMatchTypeOf<Optional<Fn<[Error, CallSite[]]>>>()
  })

  it('should match [readonly prototype: NodeError<T>]', () => {
    // Arrange
    type T = ErrInvalidUrl
    type M = MessageFn<Times<1, string>>

    // Expect
    expectTypeOf<Pick<TestSubject<T, M>, 'prototype'>>().toEqualTypeOf<{
      readonly prototype: NodeError<T>
    }>()
  })

  it('should match [stackTraceLimit: number]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('stackTraceLimit')
      .toEqualTypeOf<number>()
  })

  describe('M extends MessageFn', () => {
    it('should be callable with Parameters<M>', () => {
      // Arrange
      type T = RangeError
      type M = MessageFn<[string, number]>

      // Expect
      expectTypeOf<TestSubject<T, M>>().constructorParameters.toEqualTypeOf<
        Parameters<M>
      >()
    })
  })

  describe('M extends readonly unknown[]', () => {
    it('should be callable with Writable<M>', () => {
      // Arrange
      type T = SyntaxError
      type M = Readonly<Times<2, string>>

      // Expect
      expectTypeOf<TestSubject<T, M>>().constructorParameters.toEqualTypeOf<
        Writable<M>
      >()
    })
  })

  describe('M extends string', () => {
    it('should be callable with any[]', () => {
      expectTypeOf<TestSubject<TypeError, string>>()
        .constructorParameters.extract<any[]>()
        .not.toBeNever()
    })
  })
})
