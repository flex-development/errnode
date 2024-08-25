/**
 * @file Type Tests - ERR_NETWORK_IMPORT_DISALLOWED
 * @module errnode/errors/tests/unit-d/ERR_NETWORK_IMPORT_DISALLOWED
 */

import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import type * as TestSubject from '../err-network-import-disallowed'

describe('unit-d:errors/ERR_NETWORK_IMPORT_DISALLOWED', () => {
  describe('ERR_NETWORK_IMPORT_DISALLOWED', () => {
    it('should be ErrNetworkImportDisallowedConstructor', () => {
      expectTypeOf<typeof TestSubject.default>()
        .toEqualTypeOf<TestSubject.ErrNetworkImportDisallowedConstructor>()
    })
  })

  describe('ErrNetworkImportDisallowed', () => {
    it('should extend NodeError<codes.ERR_NETWORK_IMPORT_DISALLOWED>', () => {
      expectTypeOf<TestSubject.ErrNetworkImportDisallowed>()
        .toMatchTypeOf<NodeError<codes.ERR_NETWORK_IMPORT_DISALLOWED>>()
    })
  })

  describe('ErrNetworkImportDisallowedConstructor', () => {
    it('should match NodeErrorConstructor', () => {
      // Arrange
      type T = TestSubject.ErrNetworkImportDisallowed
      type Args = TestSubject.ErrNetworkImportDisallowedArgs

      // Expect
      expectTypeOf<TestSubject.ErrNetworkImportDisallowedConstructor>()
        .toMatchTypeOf<NodeErrorConstructor<T, Args>>()
    })
  })
})
