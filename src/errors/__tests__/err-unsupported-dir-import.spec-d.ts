/**
 * @file Type Tests - ERR_UNSUPPORTED_DIR_IMPORT
 * @module errnode/errors/tests/unit-d/ERR_UNSUPPORTED_DIR_IMPORT
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-unsupported-dir-import'

describe('unit-d:errors/ERR_UNSUPPORTED_DIR_IMPORT', () => {
  describe('ERR_UNSUPPORTED_DIR_IMPORT', () => {
    it('should be ErrUnsupportedDirImportConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrUnsupportedDirImportConstructor>()
    })
  })

  describe('ErrUnsupportedDirImport', () => {
    it('should extend NodeError<codes.ERR_UNSUPPORTED_DIR_IMPORT>', () => {
      expectTypeOf<TestSubject.ErrUnsupportedDirImport>()
        .toMatchTypeOf<NodeError<codes.ERR_UNSUPPORTED_DIR_IMPORT>>()
    })
  })

  describe('ErrUnsupportedDirImportConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrUnsupportedDirImport
      type Args = TestSubject.ErrUnsupportedDirImportArgs

      // Expect
      expectTypeOf<TestSubject.ErrUnsupportedDirImportConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
