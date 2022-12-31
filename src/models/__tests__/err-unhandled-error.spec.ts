/**
 * @file Unit Tests - ERR_UNHANDLED_ERROR
 * @module errnode/models/tests/unit/ERR_UNHANDLED_ERROR
 */

import { ErrorCode } from '#src/enums'
import TestSubject from '../err-unhandled-error'

describe('unit:models/ERR_UNHANDLED_ERROR', () => {
  let message: string

  beforeEach(() => {
    message = 'Unhandled error.'
  })

  it('should return Error instance', () => {
    // Act
    const result = new TestSubject()

    // Expect
    expect(result).to.have.property('name').equal('Error')
    expect(result).to.be.instanceof(Error)
  })

  it('should set error code', () => {
    expect(new TestSubject())
      .to.have.property('code')
      .equal(ErrorCode.ERR_UNHANDLED_ERROR)
  })

  it('should set error message', () => {
    // Arrange
    const cases: [...ConstructorParameters<typeof TestSubject>, string][] = [
      [undefined, message],
      ['ECONNREFUSED', `${message} (ECONNREFUSED)`]
    ]

    // Act + Expect
    cases.forEach(([err, expected]) => {
      expect(new TestSubject(err)).to.have.property('message').equal(expected)
    })
  })
})
