/**
 * @file Type Tests - NodeErrorConstructor
 * @module errnode/types/tests/unit-d/NodeErrorConstructor
 */

import type NodeError from '../node-error'
import type TestSubject from '../node-error-constructor'

describe('unit-d:types/NodeErrorConstructor', () => {
  it('should extract parameters of type any[] if M extends string', () => {
    expectTypeOf<TestSubject>().parameters.toEqualTypeOf<any[]>()
    expectTypeOf<TestSubject>().constructorParameters.toEqualTypeOf<any[]>()
  })

  it('should extract parameters of type Parameters<M> if M extends MessageFn', () => {
    type B = TypeErrorConstructor
    type M = (ext: string, path: string) => string
    type P = Parameters<M>

    expectTypeOf<TestSubject<B, M>>().parameters.toEqualTypeOf<P>()
    expectTypeOf<TestSubject<B, M>>().constructorParameters.toEqualTypeOf<P>()
  })

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
})
