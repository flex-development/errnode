/**
 * @file Unit Tests - ERR_UNSUPPORTED_DIR_IMPORT
 * @module errnode/models/tests/unit/ERR_UNSUPPORTED_DIR_IMPORT
 */

import { ErrorCode } from '#src/enums'
import type { NodeError } from '#src/types'
import TestSubject from '../err-unsupported-dir-import'

describe('unit:models/ERR_UNSUPPORTED_DIR_IMPORT', () => {
  let base: string
  let id: string
  let result: NodeError

  beforeEach(() => {
    base = import.meta.url
    id = './'
    result = new TestSubject(id, base)
  })

  it('should return Error instance', () => {
    expect(result).to.be.instanceof(Error)
    expect(result).to.have.property('name').equal('Error')
  })

  it('should set error code', () => {
    expect(result)
      .to.have.property('code')
      .equal(ErrorCode.ERR_UNSUPPORTED_DIR_IMPORT)
  })

  it('should set error message', () => {
    // Arrange
    const expected: string = `Directory import '${id}' is not supported resolving ES modules imported from ${base}`

    // Expect
    expect(result).to.have.property('message').equal(expected)
  })
})
