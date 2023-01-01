/**
 * @file Unit Tests - ERR_NETWORK_IMPORT_DISALLOWED
 * @module errnode/models/tests/unit/ERR_NETWORK_IMPORT_DISALLOWED
 */

import { ErrorCode } from '#src/enums'
import type { NodeError } from '#src/types'
import TestSubject from '../err-network-import-disallowed'

describe('unit:models/ERR_NETWORK_IMPORT_DISALLOWED', () => {
  let base: string
  let specifier: string
  let reason: string
  let result: NodeError

  beforeEach(() => {
    base = import.meta.url
    specifier = 'http://example.com/lib/utils.mjs'
    reason = 'remote imports cannot import from a local location.'
    result = new TestSubject(specifier, base, reason)
  })

  it('should return Error instance', () => {
    expect(result).to.be.instanceof(Error)
    expect(result).to.have.property('name').equal('Error')
  })

  it('should set error code', () => {
    expect(result)
      .to.have.property('code')
      .equal(ErrorCode.ERR_NETWORK_IMPORT_DISALLOWED)
  })

  it('should set error message', () => {
    expect(result)
      .to.have.property('message')
      .equal(`import of '${specifier}' by ${base} is not supported: ${reason}`)
  })
})
