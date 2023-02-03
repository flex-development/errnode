/**
 * @file Unit Tests - ERR_INVALID_RETURN_VALUE
 * @module errnode/models/tests/unit/ERR_INVALID_RETURN_VALUE
 */

import { ErrorCode } from '#src/enums'
import type { NodeError } from '#src/types'
import { determineSpecificType } from '#src/utils'
import TestSubject from '../err-invalid-return-value'

describe('unit:models/ERR_INVALID_RETURN_VALUE', () => {
  let expected: string
  let name: string
  let result: NodeError<TypeError>
  let value: unknown

  beforeEach(() => {
    expected = 'string'
    name = 'fn'
    value = null
    result = new TestSubject(expected, name, value)
  })

  it('should return TypeError instance', () => {
    expect(result).to.be.instanceof(TypeError)
    expect(result).to.have.property('name').equal('TypeError')
  })

  it('should set error code', () => {
    expect(result)
      .to.have.property('code')
      .equal(ErrorCode.ERR_INVALID_RETURN_VALUE)
  })

  it('should set error message', () => {
    // Arrange
    const type: string = determineSpecificType(value)
    const msg: string = `Expected ${expected} to be returned from the '${name}' function but got ${type}.`

    // Expect
    expect(result).to.have.property('message').equal(msg)
  })
})
