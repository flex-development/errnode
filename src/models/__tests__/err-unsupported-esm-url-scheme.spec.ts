/**
 * @file Unit Tests - ERR_UNSUPPORTED_ESM_URL_SCHEME
 * @module errnode/models/tests/unit/ERR_UNSUPPORTED_ESM_URL_SCHEME
 */

import { ErrorCode } from '#src/enums'
import formatList from '#src/internal/format-list'
import { URL } from 'node:url'
import TestSubject from '../err-unsupported-esm-url-scheme'

describe('unit:models/ERR_UNSUPPORTED_ESM_URL_SCHEME', () => {
  let schemes: string
  let supported: string[]
  let url: URL

  beforeEach(() => {
    supported = ['data', 'file']
    url = new URL('dist/index.mjs', 'https://example.com/')
    schemes = formatList(supported)
  })

  it('should return Error instance', () => {
    // Act
    const result = new TestSubject(url, supported)

    // Expect
    expect(result).to.be.instanceof(Error)
    expect(result).to.have.property('name').equal('Error')
  })

  it('should set error code', () => {
    expect(new TestSubject(url, supported))
      .to.have.property('code')
      .equal(ErrorCode.ERR_UNSUPPORTED_ESM_URL_SCHEME)
  })

  it('should set error message', () => {
    // Arrange
    const cases: [...ConstructorParameters<typeof TestSubject>, string][] = [
      [
        url,
        supported,
        undefined,
        `Only URLs with a scheme in: ${schemes} are supported by the default ESM loader. Received protocol '${url.protocol}'`
      ],
      [
        new URL('dist/index.mjs', 'c://'),
        supported,
        true,
        `Only URLs with a scheme in: ${schemes} are supported by the default ESM loader. On Windows, absolute paths must be valid file:// URLs. Received protocol 'c:'`
      ]
    ]

    // Act + Expect
    cases.forEach(([url, supported, windows, expected]) => {
      expect(new TestSubject(url, supported, windows))
        .to.have.property('message')
        .equal(expected)
    })
  })
})
