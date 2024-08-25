/**
 * @file Unit Tests - ERR_UNSUPPORTED_ESM_URL_SCHEME
 * @module errnode/errors/tests/unit/ERR_UNSUPPORTED_ESM_URL_SCHEME
 */

import TestSubject, {
  type ErrUnsupportedEsmUrlScheme
} from '../err-unsupported-esm-url-scheme'

describe('unit:errors/ERR_UNSUPPORTED_ESM_URL_SCHEME', () => {
  it.each<ConstructorParameters<typeof TestSubject>>([
    [
      new URL('node_modules/@flex-development/unist-util-visit', 'c://'),
      ['file'],
      true
    ],
    [
      new URL('unist-util-builder', 'https://esm.sh/@flex-development/'),
      ['data', 'file', 'node']
    ]
  ])('should build message from parameters (%#)', (...args) => {
    // Act
    const subject: ErrUnsupportedEsmUrlScheme = new TestSubject(...args)

    // Expect
    expect(subject).to.have.property('message').be.a('string').that.is.not.empty
    expect(subject.message).toMatchSnapshot()
  })
})
