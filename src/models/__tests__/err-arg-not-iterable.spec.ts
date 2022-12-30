/**
 * @file Unit Tests - ERR_ARG_NOT_ITERABLE
 * @module errnode/models/tests/unit/ERR_ARG_NOT_ITERABLE
 */

import { ErrorCode } from '#src/enums'
import type { NodeError } from '#src/types'
import TestSubject from '../err-arg-not-iterable'

describe('unit:models/ERR_ARG_NOT_ITERABLE', () => {
  let name: string
  let result: NodeError<TypeError>

  beforeEach(() => {
    name = 'arr'
    result = new TestSubject(name)
  })

  it('should return TypeError instance', () => {
    expect(result).to.have.property('name').equal('TypeError')
    expect(result).to.be.instanceof(TypeError)
  })

  it('should set error code', () => {
    expect(result)
      .to.have.property('code')
      .equal(ErrorCode.ERR_ARG_NOT_ITERABLE)
  })

  it('should set error message', () => {
    expect(result).to.have.property('message').equal(`${name} must be iterable`)
  })
})
