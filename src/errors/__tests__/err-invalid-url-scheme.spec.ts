/**
 * @file Unit Tests - ERR_INVALID_URL_SCHEME
 * @module errnode/errors/tests/unit/ERR_INVALID_URL_SCHEME
 */

import TestSubject, {
  type ErrInvalidUrlScheme
} from '../err-invalid-url-scheme'

describe('unit:errors/ERR_INVALID_URL_SCHEME', () => {
  it.each<ConstructorParameters<typeof TestSubject>>([
    ['file'],
    [['file', 'node']]
  ])('should build message from parameters (%#)', (...args) => {
    // Act
    const subject: ErrInvalidUrlScheme = new TestSubject(...args)

    // Expect
    expect(subject).to.have.property('message').be.a('string').that.is.not.empty
    expect(subject.message).toMatchSnapshot()
  })
})
