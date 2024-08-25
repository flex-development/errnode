/**
 * @file Type Tests - ERR_UNKNOWN_MODULE_FORMAT
 * @module errnode/errors/tests/unit-d/ERR_UNKNOWN_MODULE_FORMAT
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-unknown-module-format'

describe('unit-d:errors/ERR_UNKNOWN_MODULE_FORMAT', () => {
  describe('ERR_UNKNOWN_MODULE_FORMAT', () => {
    it('should be ErrUnknownModuleFormatConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrUnknownModuleFormatConstructor>()
    })
  })

  describe('ErrUnknownModuleFormat', () => {
    it('should extend NodeError<codes.ERR_UNKNOWN_MODULE_FORMAT>', () => {
      expectTypeOf<TestSubject.ErrUnknownModuleFormat>()
        .toMatchTypeOf<NodeError<codes.ERR_UNKNOWN_MODULE_FORMAT>>()
    })

    it('should extend RangeError', () => {
      expectTypeOf<TestSubject.ErrUnknownModuleFormat>()
        .toMatchTypeOf<RangeError>()
    })
  })

  describe('ErrUnknownModuleFormatConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrUnknownModuleFormat
      type Args = TestSubject.ErrUnknownModuleFormatArgs

      // Expect
      expectTypeOf<TestSubject.ErrUnknownModuleFormatConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
