/**
 * @file Type Tests - ERR_IMPORT_ATTRIBUTE_MISSING
 * @module errnode/errors/tests/unit-d/ERR_IMPORT_ATTRIBUTE_MISSING
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-import-attribute-missing'

describe('unit-d:errors/ERR_IMPORT_ATTRIBUTE_MISSING', () => {
  describe('ERR_IMPORT_ATTRIBUTE_MISSING', () => {
    it('should be ErrImportAttributeMissingConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrImportAttributeMissingConstructor>()
    })
  })

  describe('ErrImportAttributeMissing', () => {
    it('should extend NodeError<codes.ERR_IMPORT_ATTRIBUTE_MISSING>', () => {
      expectTypeOf<TestSubject.ErrImportAttributeMissing>()
        .toMatchTypeOf<NodeError<codes.ERR_IMPORT_ATTRIBUTE_MISSING>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrImportAttributeMissing>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrImportAttributeMissingConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrImportAttributeMissing
      type Args = TestSubject.ErrImportAttributeMissingArgs

      // Expect
      expectTypeOf<TestSubject.ErrImportAttributeMissingConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
