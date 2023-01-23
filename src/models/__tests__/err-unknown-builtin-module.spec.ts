/**
 * @file Unit Tests - ERR_UNKNOWN_BUILTIN_MODULE
 * @module errnode/models/tests/unit/ERR_UNKNOWN_BUILTIN_MODULE
 */

import { ErrorCode } from '#src/enums'
import type { NodeError } from '#src/types'
import TestSubject from '../err-unknown-builtin-module'

describe('unit:models/ERR_UNKNOWN_BUILTIN_MODULE', () => {
  let name: string
  let result: NodeError

  beforeEach(() => {
    name = 'node:foo'
    result = new TestSubject(name)
  })

  it('should return Error instance', () => {
    expect(result).to.be.instanceof(Error)
    expect(result).to.have.property('name').equal('Error')
  })

  it('should set error code', () => {
    expect(result)
      .to.have.property('code')
      .equal(ErrorCode.ERR_UNKNOWN_BUILTIN_MODULE)
  })

  it('should set error message', () => {
    expect(result)
      .to.have.property('message')
      .equal(`No such built-in module: ${name}`)
  })
})
