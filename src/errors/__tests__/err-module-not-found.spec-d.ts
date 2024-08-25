/**
 * @file Type Tests - ERR_MODULE_NOT_FOUND
 * @module errnode/errors/tests/unit-d/ERR_MODULE_NOT_FOUND
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type { Nilable } from '@flex-development/tutils'
import type * as TestSubject from '../err-module-not-found'

describe('unit-d:errors/ERR_MODULE_NOT_FOUND', () => {
  describe('ERR_MODULE_NOT_FOUND', () => {
    it('should be ErrModuleNotFoundConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrModuleNotFoundConstructor>()
    })
  })

  describe('ErrModuleNotFound', () => {
    it('should extend NodeError<codes.ERR_MODULE_NOT_FOUND>', () => {
      expectTypeOf<TestSubject.ErrModuleNotFound>()
        .toMatchTypeOf<NodeError<codes.ERR_MODULE_NOT_FOUND>>()
    })

    it('should match [url?: string | null | undefined]', () => {
      expectTypeOf<TestSubject.ErrModuleNotFound>()
        .toHaveProperty('url')
        .toEqualTypeOf<Nilable<string>>()
    })
  })

  describe('ErrModuleNotFoundConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrModuleNotFound
      type Args = TestSubject.ErrModuleNotFoundArgs

      // Expect
      expectTypeOf<TestSubject.ErrModuleNotFoundConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
