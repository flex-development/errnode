/**
 * @file Type Tests - ERR_PACKAGE_IMPORT_NOT_DEFINED
 * @module errnode/errors/tests/unit-d/ERR_PACKAGE_IMPORT_NOT_DEFINED
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-package-import-not-defined'

describe('unit-d:errors/ERR_PACKAGE_IMPORT_NOT_DEFINED', () => {
  describe('ERR_PACKAGE_IMPORT_NOT_DEFINED', () => {
    it('should be ErrPackageImportNotDefinedConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrPackageImportNotDefinedConstructor>()
    })
  })

  describe('ErrPackageImportNotDefined', () => {
    it('should extend NodeError<codes.ERR_PACKAGE_IMPORT_NOT_DEFINED>', () => {
      expectTypeOf<TestSubject.ErrPackageImportNotDefined>()
        .toMatchTypeOf<NodeError<codes.ERR_PACKAGE_IMPORT_NOT_DEFINED>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrPackageImportNotDefined>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrPackageImportNotDefinedConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrPackageImportNotDefined
      type Args = TestSubject.ErrPackageImportNotDefinedArgs

      // Expect
      expectTypeOf<TestSubject.ErrPackageImportNotDefinedConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
