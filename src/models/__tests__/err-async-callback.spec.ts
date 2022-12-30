/**
 * @file Unit Tests - ERR_ASYNC_CALLBACK
 * @module errnode/models/tests/unit/ERR_ASYNC_CALLBACK
 */

import { ErrorCode } from '#src/enums'
import type { NodeError } from '#src/types'
import TestSubject from '../err-async-callback'

describe('unit:models/ERR_ASYNC_CALLBACK', () => {
  let name: string
  let result: NodeError<TypeError>

  beforeEach(() => {
    name = 'callback'
    result = new TestSubject(name)
  })

  it('should return TypeError instance', () => {
    expect(result).to.have.property('name').equal('TypeError')
    expect(result).to.be.instanceof(TypeError)
  })

  it('should set error code', () => {
    expect(result).to.have.property('code').equal(ErrorCode.ERR_ASYNC_CALLBACK)
  })

  it('should set error message', () => {
    expect(result)
      .to.have.property('message')
      .equal(`${name} must be a function`)
  })
})
