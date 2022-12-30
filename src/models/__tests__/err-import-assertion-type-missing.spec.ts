/**
 * @file Unit Tests - ERR_IMPORT_ASSERTION_TYPE_MISSING
 * @module errnode/models/tests/unit/ERR_IMPORT_ASSERTION_TYPE_MISSING
 */

import { ErrorCode } from '#src/enums'
import type { NodeError } from '#src/types'
import { resolve } from 'node:path'
import TestSubject from '../err-import-assertion-type-missing'

describe('unit:models/ERR_IMPORT_ASSERTION_TYPE_MISSING', () => {
  let id: string
  let result: NodeError<TypeError>
  let type: string

  beforeEach(() => {
    id = resolve('package.json')
    type = 'json'
    result = new TestSubject(id, type)
  })

  it('should return TypeError instance', () => {
    expect(result).to.have.property('name').equal('TypeError')
    expect(result).to.be.instanceof(TypeError)
  })

  it('should set error code', () => {
    expect(result)
      .to.have.property('code')
      .equal(ErrorCode.ERR_IMPORT_ASSERTION_TYPE_MISSING)
  })

  it('should set error message', () => {
    expect(result)
      .to.have.property('message')
      .equal(`Module '${id}' needs an import assertion of type '${type}'`)
  })
})
