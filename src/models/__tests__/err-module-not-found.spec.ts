/**
 * @file Unit Tests - ERR_MODULE_NOT_FOUND
 * @module errnode/models/tests/unit/ERR_MODULE_NOT_FOUND
 */

import { ErrorCode } from '#src/enums'
import TestSubject from '../err-module-not-found'

describe('unit:models/ERR_MODULE_NOT_FOUND', () => {
  let base: string
  let id: string

  beforeEach(() => {
    base = import.meta.url
    id = 'target'
  })

  it('should return Error instance', () => {
    // Act
    const result = new TestSubject(id, base)

    // Expect
    expect(result).to.have.property('name').equal('Error')
    expect(result).to.be.instanceof(Error)
  })

  it('should set error code', () => {
    expect(new TestSubject(id, base))
      .to.have.property('code')
      .equal(ErrorCode.ERR_MODULE_NOT_FOUND)
  })

  it('should set error message', () => {
    // Arrange
    const cases: ConstructorParameters<typeof TestSubject>[] = [
      [id, base],
      [id, base, 'module']
    ]

    // Act + Expect
    cases.forEach(([id, base, type]) => {
      expect(new TestSubject(id, base, type))
        .to.have.property('message')
        .equal(`Cannot find ${type ?? 'package'} '${id}' imported from ${base}`)
    })
  })
})
