/**
 * @file Type Tests - ERR_IMPORT_ASSERTION_TYPE_MISSING
 * @module errnode/errors/tests/unit-d/ERR_IMPORT_ASSERTION_TYPE_MISSING
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-import-assertion-type-missing'

describe('unit-d:errors/ERR_IMPORT_ASSERTION_TYPE_MISSING', () => {
  describe('ERR_IMPORT_ASSERTION_TYPE_MISSING', () => {
    it('should be ErrImportAssertionTypeMissingConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toMatchTypeOf<TestSubject.ErrImportAssertionTypeMissingConstructor>()
    })
  })

  describe('ErrImportAssertionTypeMissing', () => {
    it('should extend NodeError<codes.ERR_IMPORT_ASSERTION_TYPE_MISSING>', () => {
      expectTypeOf<TestSubject.ErrImportAssertionTypeMissing>()
        .toMatchTypeOf<NodeError<codes.ERR_IMPORT_ASSERTION_TYPE_MISSING>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrImportAssertionTypeMissing>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrImportAssertionTypeMissingConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrImportAssertionTypeMissing
      type Args = TestSubject.ErrImportAssertionTypeMissingArgs

      // Expect
      expectTypeOf<TestSubject.ErrImportAssertionTypeMissingConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
