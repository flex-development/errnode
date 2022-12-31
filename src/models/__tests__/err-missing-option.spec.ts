/**
 * @file Unit Tests - ERR_MISSING_OPTION
 * @module errnode/models/tests/unit/ERR_MISSING_OPTION
 */

import { ErrorCode } from '#src/enums'
import type { NodeError } from '#src/types'
import TestSubject from '../err-missing-option'

describe('unit:models/ERR_MISSING_OPTION', () => {
  let option: string
  let result: NodeError<TypeError>

  beforeEach(() => {
    option = 'algorithm.hash'
    result = new TestSubject(option)
  })

  it('should return TypeError instance', () => {
    expect(result).to.have.property('name').equal('TypeError')
    expect(result).to.be.instanceof(TypeError)
  })

  it('should set error code', () => {
    expect(result).to.have.property('code').equal(ErrorCode.ERR_MISSING_OPTION)
  })

  it('should set error message', () => {
    expect(result).to.have.property('message').equal(`${option} is required`)
  })
})
