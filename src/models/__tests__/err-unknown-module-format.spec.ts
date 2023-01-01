/**
 * @file Unit Tests - ERR_UNKNOWN_MODULE_FORMAT
 * @module errnode/models/tests/unit/ERR_UNKNOWN_MODULE_FORMAT
 */

import { ErrorCode } from '#src/enums'
import type { NodeError } from '#src/types'
import TestSubject from '../err-unknown-module-format'

describe('unit:models/ERR_UNKNOWN_MODULE_FORMAT', () => {
  let format: string
  let id: string
  let result: NodeError<RangeError>

  beforeEach(() => {
    format = 'text/css'
    id = 'data:text/css,'
    result = new TestSubject(format, id)
  })

  it('should return RangeError instance', () => {
    expect(result).to.be.instanceof(RangeError)
    expect(result).to.have.property('name').equal('RangeError')
  })

  it('should set error code', () => {
    expect(result)
      .to.have.property('code')
      .equal(ErrorCode.ERR_UNKNOWN_MODULE_FORMAT)
  })

  it('should set error message', () => {
    expect(result)
      .to.have.property('message')
      .equal(`Unknown module format: ${format} for URL ${id}`)
  })
})
