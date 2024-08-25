/**
 * @file Type Tests - ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED
 * @module errnode/errors/tests/unit-d/ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-import-assertion-type-unsupported'

describe('unit-d:errors/ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED', () => {
  describe('ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED', () => {
    it('should be ErrImportAssertionTypeUnsupportedConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toMatchTypeOf<
          TestSubject.ErrImportAssertionTypeUnsupportedConstructor
        >()
    })
  })

  describe('ErrImportAssertionTypeUnsupported', () => {
    it('should extend NodeError<codes.ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED>', () => {
      expectTypeOf<TestSubject.ErrImportAssertionTypeUnsupported>()
        .toMatchTypeOf<NodeError<codes.ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrImportAssertionTypeUnsupported>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrImportAssertionTypeUnsupportedConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrImportAssertionTypeUnsupported
      type Args = TestSubject.ErrImportAssertionTypeUnsupportedArgs

      // Expect
      expectTypeOf<TestSubject.ErrImportAssertionTypeUnsupportedConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
