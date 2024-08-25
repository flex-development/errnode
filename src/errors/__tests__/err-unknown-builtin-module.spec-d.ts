/**
 * @file Type Tests - ERR_UNKNOWN_BUILTIN_MODULE
 * @module errnode/errors/tests/unit-d/ERR_UNKNOWN_BUILTIN_MODULE
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-unknown-builtin-module'

describe('unit-d:errors/ERR_UNKNOWN_BUILTIN_MODULE', () => {
  describe('ERR_UNKNOWN_BUILTIN_MODULE', () => {
    it('should be ErrUnknownBuiltinModuleConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrUnknownBuiltinModuleConstructor>()
    })
  })

  describe('ErrUnknownBuiltinModule', () => {
    it('should extend NodeError<codes.ERR_UNKNOWN_BUILTIN_MODULE>', () => {
      expectTypeOf<TestSubject.ErrUnknownBuiltinModule>()
        .toMatchTypeOf<NodeError<codes.ERR_UNKNOWN_BUILTIN_MODULE>>()
    })
  })

  describe('ErrUnknownBuiltinModuleConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrUnknownBuiltinModule
      type Args = TestSubject.ErrUnknownBuiltinModuleArgs

      // Expect
      expectTypeOf<TestSubject.ErrUnknownBuiltinModuleConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
