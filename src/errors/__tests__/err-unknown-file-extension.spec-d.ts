/**
 * @file Type Tests - ERR_UNKNOWN_FILE_EXTENSION
 * @module errnode/errors/tests/unit-d/ERR_UNKNOWN_FILE_EXTENSION
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-unknown-file-extension'

describe('unit-d:errors/ERR_UNKNOWN_FILE_EXTENSION', () => {
  describe('ERR_UNKNOWN_FILE_EXTENSION', () => {
    it('should be ErrUnknownFileExtensionConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrUnknownFileExtensionConstructor>()
    })
  })

  describe('ErrUnknownFileExtension', () => {
    it('should extend NodeError<codes.ERR_UNKNOWN_FILE_EXTENSION>', () => {
      expectTypeOf<TestSubject.ErrUnknownFileExtension>()
        .toMatchTypeOf<NodeError<codes.ERR_UNKNOWN_FILE_EXTENSION>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrUnknownFileExtension>()
        .toMatchTypeOf<TypeError>()
    })
  })

  describe('ErrUnknownFileExtensionConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrUnknownFileExtension
      type Args = TestSubject.ErrUnknownFileExtensionArgs

      // Expect
      expectTypeOf<TestSubject.ErrUnknownFileExtensionConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
