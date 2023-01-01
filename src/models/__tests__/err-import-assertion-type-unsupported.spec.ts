/**
 * @file Unit Tests - ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED
 * @module errnode/models/tests/unit/ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED
 */

import { ErrorCode } from '#src/enums'
import type { NodeError } from '#src/types'
import TestSubject from '../err-import-assertion-type-unsupported'

describe('unit:models/ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED', () => {
  let result: NodeError<TypeError>
  let type: string

  beforeEach(() => {
    type = 'json'
    result = new TestSubject(type)
  })

  it('should return TypeError instance', () => {
    expect(result).to.be.instanceof(TypeError)
    expect(result).to.have.property('name').equal('TypeError')
  })

  it('should set error code', () => {
    expect(result)
      .to.have.property('code')
      .equal(ErrorCode.ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED)
  })

  it('should set error message', () => {
    expect(result)
      .to.have.property('message')
      .equal(`Import assertion type '${type}' is unsupported`)
  })
})
