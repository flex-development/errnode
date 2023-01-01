/**
 * @file Unit Tests - ERR_INCOMPATIBLE_OPTION_PAIR
 * @module errnode/models/tests/unit/ERR_INCOMPATIBLE_OPTION_PAIR
 */

import { ErrorCode } from '#src/enums'
import type { NodeError } from '#src/types'
import TestSubject from '../err-incompatible-option-pair'

describe('unit:models/ERR_INCOMPATIBLE_OPTION_PAIR', () => {
  let option1: string
  let option2: string
  let result: NodeError<TypeError>

  beforeEach(() => {
    option1 = 'options.inspectOptions.color'
    option2 = 'colorMode'
    result = new TestSubject(option1, option2)
  })

  it('should return TypeError instance', () => {
    expect(result).to.be.instanceof(TypeError)
    expect(result).to.have.property('name').equal('TypeError')
  })

  it('should set error code', () => {
    expect(result)
      .to.have.property('code')
      .equal(ErrorCode.ERR_INCOMPATIBLE_OPTION_PAIR)
  })

  it('should set error message', () => {
    // Arrange
    const expected: string = `Option '${option1}' cannot be used in combination with option '${option2}'`

    // Expect
    expect(result).to.have.property('message').equal(expected)
  })
})
