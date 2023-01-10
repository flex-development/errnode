/**
 * @file Unit Tests - ERR_INVALID_URL
 * @module errnode/models/tests/unit/ERR_INVALID_URL
 */

import { ErrorCode } from '#src/enums'
import type { ErrInvalidUrl } from '#src/interfaces'
import TestSubject from '../err-invalid-url'

describe('unit:models/ERR_INVALID_URL', () => {
  let input: string
  let result: ErrInvalidUrl

  beforeEach(() => {
    input = 'http://[127.0.0.1\x00c8763]:8000/'
    result = new TestSubject(input)
  })

  it('should return TypeError instance', () => {
    expect(result).to.be.instanceof(TypeError)
    expect(result).to.have.property('name').equal('TypeError')
  })

  it('should set #input', () => {
    expect(result).to.have.property('input').equal(input)
  })

  it('should set error code', () => {
    expect(result).to.have.property('code').equal(ErrorCode.ERR_INVALID_URL)
  })

  it('should set error message', () => {
    expect(result).to.have.property('message').equal('Invalid URL')
  })
})
