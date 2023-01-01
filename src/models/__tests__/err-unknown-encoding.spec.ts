/**
 * @file Unit Tests - ERR_UNKNOWN_ENCODING
 * @module errnode/models/tests/unit/ERR_UNKNOWN_ENCODING
 */

import { ErrorCode } from '#src/enums'
import type { NodeError } from '#src/types'
import TestSubject from '../err-unknown-encoding'

describe('unit:models/ERR_UNKNOWN_ENCODING', () => {
  let encoding: string
  let result: NodeError<TypeError>

  beforeEach(() => {
    encoding = 'buffer'
    result = new TestSubject(encoding)
  })

  it('should return TypeError instance', () => {
    expect(result).to.be.instanceof(TypeError)
    expect(result).to.have.property('name').equal('TypeError')
  })

  it('should set error code', () => {
    expect(result)
      .to.have.property('code')
      .equal(ErrorCode.ERR_UNKNOWN_ENCODING)
  })

  it('should set error message', () => {
    expect(result)
      .to.have.property('message')
      .equal(`Unknown encoding: ${encoding}`)
  })
})
