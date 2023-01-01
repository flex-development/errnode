/**
 * @file Unit Tests - ERR_OPERATION_FAILED
 * @module errnode/models/tests/unit/ERR_OPERATION_FAILED
 */

import { ErrorCode } from '#src/enums'
import type { NodeError } from '#src/types'
import TestSubject from '../err-operation-failed'

describe('unit:models/ERR_OPERATION_FAILED', () => {
  let reason: string
  let result: NodeError

  beforeEach(() => {
    reason = 'Out of memory'
    result = new TestSubject(reason)
  })

  it('should return Error instance', () => {
    expect(result).to.be.instanceof(Error)
    expect(result).to.have.property('name').equal('Error')
  })

  it('should set error code', () => {
    expect(result)
      .to.have.property('code')
      .equal(ErrorCode.ERR_OPERATION_FAILED)
  })

  it('should set error message', () => {
    expect(result)
      .to.have.property('message')
      .equal(`Operation failed: ${reason}`)
  })
})
