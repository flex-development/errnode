/**
 * @file Type Tests - ERR_NO_CRYPTO
 * @module errnode/errors/tests/unit-d/ERR_NO_CRYPTO
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-no-crypto'

describe('unit-d:errors/ERR_NO_CRYPTO', () => {
  describe('ERR_NO_CRYPTO', () => {
    it('should be ErrNoCryptoConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrNoCryptoConstructor>()
    })
  })

  describe('ErrNoCrypto', () => {
    it('should extend NodeError<codes.ERR_NO_CRYPTO>', () => {
      expectTypeOf<TestSubject.ErrNoCrypto>()
        .toMatchTypeOf<NodeError<codes.ERR_NO_CRYPTO>>()
    })
  })

  describe('ErrNoCryptoConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrNoCrypto
      type Args = TestSubject.ErrNoCryptoArgs

      // Expect
      expectTypeOf<TestSubject.ErrNoCryptoConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
