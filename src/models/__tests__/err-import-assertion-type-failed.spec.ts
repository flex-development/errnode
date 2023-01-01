/**
 * @file Unit Tests - ERR_IMPORT_ASSERTION_TYPE_FAILED
 * @module errnode/models/tests/unit/ERR_IMPORT_ASSERTION_TYPE_FAILED
 */

import { ErrorCode } from '#src/enums'
import type { NodeError } from '#src/types'
import TestSubject from '../err-import-assertion-type-failed'

describe('unit:models/ERR_IMPORT_ASSERTION_TYPE_FAILED', () => {
  let id: string
  let result: NodeError<TypeError>
  let type: string

  beforeEach(() => {
    id = import.meta.url
    type = 'json'
    result = new TestSubject(id, type)
  })

  it('should return TypeError instance', () => {
    expect(result).to.be.instanceof(TypeError)
    expect(result).to.have.property('name').equal('TypeError')
  })

  it('should set error code', () => {
    expect(result)
      .to.have.property('code')
      .equal(ErrorCode.ERR_IMPORT_ASSERTION_TYPE_FAILED)
  })

  it('should set error message', () => {
    expect(result)
      .to.have.property('message')
      .equal(`Module '${id}' is not of type '${type}'`)
  })
})
