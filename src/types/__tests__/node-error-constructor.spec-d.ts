/**
 * @file Type Tests - NodeErrorConstructor
 * @module errnode/types/tests/unit-d/NodeErrorConstructor
 */

import type { Times } from '@flex-development/tutils'
import type NodeError from '../node-error'
import type TestSubject from '../node-error-constructor'

describe('unit-d:types/NodeErrorConstructor', () => {
  it('should match [prototype: NodeError<T>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('prototype')
      .toEqualTypeOf<NodeError>()
    expectTypeOf<TestSubject<SyntaxErrorConstructor>>()
      .toHaveProperty('prototype')
      .toEqualTypeOf<NodeError<SyntaxError>>()
  })

  it('should return NodeError<T>', () => {
    expectTypeOf<TestSubject>().returns.toEqualTypeOf<NodeError>()
    expectTypeOf<TestSubject<TypeErrorConstructor>>().returns.toEqualTypeOf<
      NodeError<TypeError>
    >()
  })

  describe('M extends MessageFn', () => {
    it('should be callable with Parameters<M>', () => {
      // Arrange
      type B = TypeErrorConstructor
      type M = (ext: string, path: string) => string
      type P = Parameters<M>

      // Expect
      expectTypeOf<TestSubject<B, M>>().parameters.toEqualTypeOf<P>()
      expectTypeOf<TestSubject<B, M>>().constructorParameters.toEqualTypeOf<P>()
    })
  })

  describe('M extends string', () => {
    it('should be callable with any[]', () => {
      // Arrange
      type B = ErrorConstructor
      type M = string
      type P = any[]

      // Expect
      expectTypeOf<TestSubject<B, M>>().parameters.toEqualTypeOf<P>()
      expectTypeOf<
        ConstructorParameters<TestSubject<B, M>>
      >().toEqualTypeOf<P>()
    })
  })

  describe('M extends unknown[]', () => {
    it('should be callable with M', () => {
      // Arrange
      type B = ErrorConstructor
      type M = Times<3, string>

      // Expect
      expectTypeOf<TestSubject<B, M>>().parameters.toEqualTypeOf<M>()
      expectTypeOf<TestSubject<B, M>>().constructorParameters.toEqualTypeOf<M>()
    })
  })
})
