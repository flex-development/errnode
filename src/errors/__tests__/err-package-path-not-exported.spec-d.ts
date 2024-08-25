/**
 * @file Type Tests - ERR_PACKAGE_PATH_NOT_EXPORTED
 * @module errnode/errors/tests/unit-d/ERR_PACKAGE_PATH_NOT_EXPORTED
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-package-path-not-exported'

describe('unit-d:errors/ERR_PACKAGE_PATH_NOT_EXPORTED', () => {
  describe('ERR_PACKAGE_PATH_NOT_EXPORTED', () => {
    it('should be ErrPackagePathNotExportedConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrPackagePathNotExportedConstructor>()
    })
  })

  describe('ErrPackagePathNotExported', () => {
    it('should extend NodeError<codes.ERR_PACKAGE_PATH_NOT_EXPORTED>', () => {
      expectTypeOf<TestSubject.ErrPackagePathNotExported>()
        .toMatchTypeOf<NodeError<codes.ERR_PACKAGE_PATH_NOT_EXPORTED>>()
    })
  })

  describe('ErrPackagePathNotExportedConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrPackagePathNotExported
      type Args = TestSubject.ErrPackagePathNotExportedArgs

      // Expect
      expectTypeOf<TestSubject.ErrPackagePathNotExportedConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
