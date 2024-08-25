/**
 * @file Unit Tests - ERR_INVALID_ARG_VALUE
 * @module errnode/errors/tests/unit/ERR_INVALID_ARG_VALUE
 */

import TestSubject, { type ErrInvalidArgValue } from '../err-invalid-arg-value'

describe('unit:errors/ERR_INVALID_ARG_VALUE', () => {
  it.each<Parameters<typeof TestSubject>>([
    ['hints', 3],
    ['options.objectMode', true, 'is not supported']
  ])('should build message from parameters (%#)', (...args) => {
    // Act
    const subject: ErrInvalidArgValue = new TestSubject(...args)

    // Expect
    expect(subject).to.have.property('message').be.a('string').that.is.not.empty
    expect(subject.message).toMatchSnapshot()
  })
})
