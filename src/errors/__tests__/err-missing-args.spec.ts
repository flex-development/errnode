/**
 * @file Unit Tests - ERR_MISSING_ARGS
 * @module errnode/errors/tests/unit/ERR_MISSING_ARGS
 */

import TestSubject, { type ErrMissingArgs } from '../err-missing-args'

describe('unit:errors/ERR_MISSING_ARGS', () => {
  it.each<Parameters<typeof TestSubject>>([
    ['domain'],
    ['name', 'value']
  ])('should build message from parameters (%#)', (...args) => {
    // Act
    const subject: ErrMissingArgs = new TestSubject(...args)

    // Expect
    expect(subject).to.have.property('message').be.a('string').that.is.not.empty
    expect(subject.message).toMatchSnapshot()
  })
})
