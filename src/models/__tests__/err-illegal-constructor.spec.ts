/**
 * @file Unit Tests - ERR_ILLEGAL_CONSTRUCTOR
 * @module errnode/models/tests/unit/ERR_ILLEGAL_CONSTRUCTOR
 */

import { ErrorCode } from '#src/enums'
import type { NodeError } from '#src/types'
import TestSubject from '../err-illegal-constructor'

describe('unit:models/ERR_ILLEGAL_CONSTRUCTOR', () => {
  let result: NodeError<TypeError>

  beforeEach(() => {
    result = new TestSubject()
  })

  it('should return TypeError instance', () => {
    expect(result).to.have.property('name').equal('TypeError')
    expect(result).to.be.instanceof(TypeError)
  })

  it('should set error code', () => {
    expect(result)
      .to.have.property('code')
      .equal(ErrorCode.ERR_ILLEGAL_CONSTRUCTOR)
  })

  it('should set error message', () => {
    expect(result).to.have.property('message').equal('Illegal constructor')
  })
})
