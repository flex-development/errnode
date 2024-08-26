/**
 * @file Type Tests - ERR_IMPORT_ATTRIBUTE_UNSUPPORTED
 * @module errnode/errors/tests/unit-d/ERR_IMPORT_ATTRIBUTE_UNSUPPORTED
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-import-attribute-unsupported'

describe('unit-d:errors/ERR_IMPORT_ATTRIBUTE_UNSUPPORTED', () => {
  describe('ERR_IMPORT_ATTRIBUTE_UNSUPPORTED', () => {
    it('should be ErrImportAttributeUnsupportedConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrImportAttributeUnsupportedConstructor>()
    })
  })

  describe('ErrImportAttributeUnsupported', () => {
    it('should extend NodeError<codes.ERR_IMPORT_ATTRIBUTE_UNSUPPORTED>', () => {
      expectTypeOf<TestSubject.ErrImportAttributeUnsupported>()
        .toMatchTypeOf<NodeError<codes.ERR_IMPORT_ATTRIBUTE_UNSUPPORTED>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrImportAttributeUnsupported>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrImportAttributeUnsupportedConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrImportAttributeUnsupported
      type Args = TestSubject.ErrImportAttributeUnsupportedArgs

      // Expect
      expectTypeOf<TestSubject.ErrImportAttributeUnsupportedConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
