/**
 * @file Type Tests - ERR_METHOD_NOT_IMPLEMENTED
 * @module errnode/errors/tests/unit-d/ERR_METHOD_NOT_IMPLEMENTED
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-method-not-implemented'

describe('unit-d:errors/ERR_METHOD_NOT_IMPLEMENTED', () => {
  describe('ERR_METHOD_NOT_IMPLEMENTED', () => {
    it('should be ErrMethodNotImplementedConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrMethodNotImplementedConstructor>()
    })
  })

  describe('ErrMethodNotImplemented', () => {
    it('should extend NodeError<codes.ERR_METHOD_NOT_IMPLEMENTED>', () => {
      expectTypeOf<TestSubject.ErrMethodNotImplemented>()
        .toMatchTypeOf<NodeError<codes.ERR_METHOD_NOT_IMPLEMENTED>>()
    })
  })

  describe('ErrMethodNotImplementedConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrMethodNotImplemented
      type Args = TestSubject.ErrMethodNotImplementedArgs

      // Expect
      expectTypeOf<TestSubject.ErrMethodNotImplementedConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
