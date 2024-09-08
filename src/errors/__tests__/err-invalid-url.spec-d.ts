/**
 * @file Type Tests - ERR_INVALID_URL
 * @module errnode/errors/tests/unit-d/ERR_INVALID_URL
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type { Nilable } from '@flex-development/tutils'
import type * as TestSubject from '../err-invalid-url'

describe('unit-d:errors/ERR_INVALID_URL', () => {
  describe('ERR_INVALID_URL', () => {
    it('should be ErrInvalidUrlConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrInvalidUrlConstructor>()
    })
  })

  describe('ErrInvalidUrl', () => {
    it('should extend NodeError<codes.ERR_INVALID_URL>', () => {
      expectTypeOf<TestSubject.ErrInvalidUrl>()
        .toMatchTypeOf<NodeError<codes.ERR_INVALID_URL>>()
    })

    it('should extend TypeError', () => {
      expectTypeOf<TestSubject.ErrInvalidUrl>().toMatchTypeOf<TypeError>()
    })

    it('should match [base?: URL | string | null | undefined]', () => {
      expectTypeOf<TestSubject.ErrInvalidUrl>()
        .toHaveProperty('base')
        .toEqualTypeOf<Nilable<URL | string>>()
    })

    it('should match [input: string]', () => {
      expectTypeOf<TestSubject.ErrInvalidUrl>()
        .toHaveProperty('input')
        .toEqualTypeOf<string>()
    })
  })

  describe('ErrInvalidUrlConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrInvalidUrl
      type Args = TestSubject.ErrInvalidUrlArgs

      // Expect
      expectTypeOf<TestSubject.ErrInvalidUrlConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
