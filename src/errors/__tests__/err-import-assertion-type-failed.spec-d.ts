/**
 * @file Type Tests - ERR_IMPORT_ASSERTION_TYPE_FAILED
 * @module errnode/errors/tests/unit-d/ERR_IMPORT_ASSERTION_TYPE_FAILED
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-import-assertion-type-failed'

describe('unit-d:errors/ERR_IMPORT_ASSERTION_TYPE_FAILED', () => {
  describe('ERR_IMPORT_ASSERTION_TYPE_FAILED', () => {
    it('should be ErrImportAssertionTypeFailedConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toMatchTypeOf<TestSubject.ErrImportAssertionTypeFailedConstructor>()
    })
  })

  describe('ErrImportAssertionTypeFailed', () => {
    it('should extend NodeError<codes.ERR_IMPORT_ASSERTION_TYPE_FAILED>', () => {
      expectTypeOf<TestSubject.ErrImportAssertionTypeFailed>()
        .toMatchTypeOf<NodeError<codes.ERR_IMPORT_ASSERTION_TYPE_FAILED>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrImportAssertionTypeFailed>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrImportAssertionTypeFailedConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrImportAssertionTypeFailed
      type Args = TestSubject.ErrImportAssertionTypeFailedArgs

      // Expect
      expectTypeOf<TestSubject.ErrImportAssertionTypeFailedConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
