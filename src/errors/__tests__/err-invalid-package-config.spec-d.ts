/**
 * @file Type Tests - ERR_INVALID_PACKAGE_CONFIG
 * @module errnode/errors/tests/unit-d/ERR_INVALID_PACKAGE_CONFIG
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-invalid-package-config'

describe('unit-d:errors/ERR_INVALID_PACKAGE_CONFIG', () => {
  describe('ERR_INVALID_PACKAGE_CONFIG', () => {
    it('should be ErrInvalidPackageConfigConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrInvalidPackageConfigConstructor>()
    })
  })

  describe('ErrInvalidPackageConfig', () => {
    it('should extend NodeError<codes.ERR_INVALID_PACKAGE_CONFIG>', () => {
      expectTypeOf<TestSubject.ErrInvalidPackageConfig>()
        .toMatchTypeOf<NodeError<codes.ERR_INVALID_PACKAGE_CONFIG>>()
    })
  })

  describe('ErrInvalidPackageConfigConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrInvalidPackageConfig
      type Args = TestSubject.ErrInvalidPackageConfigArgs

      // Expect
      expectTypeOf<TestSubject.ErrInvalidPackageConfigConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
