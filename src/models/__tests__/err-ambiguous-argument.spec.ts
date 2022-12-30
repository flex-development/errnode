/**
 * @file Unit Tests - ERR_AMBIGUOUS_ARGUMENT
 * @module errnode/models/tests/unit/ERR_AMBIGUOUS_ARGUMENT
 */

import { ErrorCode } from '#src/enums'
import type { NodeError } from '#src/types'
import TestSubject from '../err-ambiguous-argument'

describe('unit:models/ERR_AMBIGUOUS_ARGUMENT', () => {
  let name: string
  let reason: string
  let result: NodeError<TypeError>

  beforeEach(() => {
    name = 'error/message'
    reason = 'The error message "foo" is identical to the message.'
    result = new TestSubject(name, reason)
  })

  it('should return TypeError instance', () => {
    expect(result).to.have.property('name').equal('TypeError')
    expect(result).to.be.instanceof(TypeError)
  })

  it('should set error code', () => {
    expect(result)
      .to.have.property('code')
      .equal(ErrorCode.ERR_AMBIGUOUS_ARGUMENT)
  })

  it('should set error message', () => {
    expect(result)
      .to.have.property('message')
      .equal(`The '${name}' argument is ambiguous. ${reason}`)
  })
})
