/**
 * @file Type Tests - ERR_INVALID_PACKAGE_TARGET
 * @module errnode/errors/tests/unit-d/ERR_INVALID_PACKAGE_TARGET
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-invalid-package-target'

describe('unit-d:errors/ERR_INVALID_PACKAGE_TARGET', () => {
  describe('ERR_INVALID_PACKAGE_TARGET', () => {
    it('should be ErrInvalidPackageTargetConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrInvalidPackageTargetConstructor>()
    })
  })

  describe('ErrInvalidPackageTarget', () => {
    it('should extend NodeError<codes.ERR_INVALID_PACKAGE_TARGET>', () => {
      expectTypeOf<TestSubject.ErrInvalidPackageTarget>()
        .toMatchTypeOf<NodeError<codes.ERR_INVALID_PACKAGE_TARGET>>()
    })
  })

  describe('ErrInvalidPackageTargetConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrInvalidPackageTarget
      type Args = TestSubject.ErrInvalidPackageTargetArgs

      // Expect
      expectTypeOf<TestSubject.ErrInvalidPackageTargetConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
