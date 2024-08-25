/**
 * @file Type Tests - ERR_OPERATION_FAILED
 * @module errnode/errors/tests/unit-d/ERR_OPERATION_FAILED
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-operation-failed'

describe('unit-d:errors/ERR_OPERATION_FAILED', () => {
  describe('ERR_OPERATION_FAILED', () => {
    it('should be ErrOperationFailedConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrOperationFailedConstructor>()
    })
  })

  describe('ErrOperationFailed', () => {
    it('should extend NodeError<codes.ERR_OPERATION_FAILED>', () => {
      expectTypeOf<TestSubject.ErrOperationFailed>()
        .toMatchTypeOf<NodeError<codes.ERR_OPERATION_FAILED>>()
    })
  })

  describe('ErrOperationFailedConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrOperationFailed
      type Args = TestSubject.ErrOperationFailedArgs

      // Expect
      expectTypeOf<TestSubject.ErrOperationFailedConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
