/**
 * @file Type Tests - ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE
 * @module errnode/errors/tests/unit-d/ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-import-attribute-type-incompatible'

describe('unit-d:errors/ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE', () => {
  describe('ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE', () => {
    it('should be ErrImportAttributeTypeIncompatibleConstructor', () => {
      // Arrange
      type Expect = TestSubject.ErrImportAttributeTypeIncompatibleConstructor

      // Expect
      expectTypeOf<typeof TestSubject.default>().toEqualTypeOf<Expect>()
    })
  })

  describe('ErrImportAttributeTypeIncompatible', () => {
    it('should extend NodeError<codes.ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE>', () => {
      // Arrange
      type Expect = NodeError<codes.ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE>

      // Expect
      expectTypeOf<TestSubject.ErrImportAttributeTypeIncompatible>()
        .toMatchTypeOf<Expect>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrImportAttributeTypeIncompatible>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrImportAttributeTypeIncompatibleConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrImportAttributeTypeIncompatible
      type Args = TestSubject.ErrImportAttributeTypeIncompatibleArgs

      // Expect
      expectTypeOf<TestSubject.ErrImportAttributeTypeIncompatibleConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
