/**
 * @file Unit Tests - ERR_METHOD_NOT_IMPLEMENTED
 * @module errnode/models/tests/unit/ERR_METHOD_NOT_IMPLEMENTED
 */

import { ErrorCode } from '#src/enums'
import type { NodeError } from '#src/types'
import TestSubject from '../err-method-not-implemented'

describe('unit:models/ERR_METHOD_NOT_IMPLEMENTED', () => {
  let method: string
  let result: NodeError

  beforeEach(() => {
    method = 'lchmod()'
    result = new TestSubject(method)
  })

  it('should return Error instance', () => {
    expect(result).to.be.instanceof(Error)
    expect(result).to.have.property('name').equal('Error')
  })

  it('should set error code', () => {
    expect(result)
      .to.have.property('code')
      .equal(ErrorCode.ERR_METHOD_NOT_IMPLEMENTED)
  })

  it('should set error message', () => {
    expect(result)
      .to.have.property('message')
      .equal(`The ${method} method is not implemented`)
  })
})
