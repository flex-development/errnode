/**
 * @file Type Tests - ERR_INVALID_MODULE_SPECIFIER
 * @module errnode/errors/tests/unit-d/ERR_INVALID_MODULE_SPECIFIER
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-invalid-module-specifier'

describe('unit-d:errors/ERR_INVALID_MODULE_SPECIFIER', () => {
  describe('ERR_INVALID_MODULE_SPECIFIER', () => {
    it('should be ErrInvalidModuleSpecifierConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrInvalidModuleSpecifierConstructor>()
    })
  })

  describe('ErrInvalidModuleSpecifier', () => {
    it('should extend NodeError<codes.ERR_INVALID_MODULE_SPECIFIER>', () => {
      expectTypeOf<TestSubject.ErrInvalidModuleSpecifier>()
        .toMatchTypeOf<NodeError<codes.ERR_INVALID_MODULE_SPECIFIER>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrInvalidModuleSpecifier>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrInvalidModuleSpecifierConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrInvalidModuleSpecifier
      type Args = TestSubject.ErrInvalidModuleSpecifierArgs

      // Expect
      expectTypeOf<TestSubject.ErrInvalidModuleSpecifierConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
