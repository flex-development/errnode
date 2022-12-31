/**
 * @file Unit Tests - ERR_INVALID_MODULE_SPECIFIER
 * @module errnode/models/tests/unit/ERR_INVALID_MODULE_SPECIFIER
 */

import { ErrorCode } from '#src/enums'
import TestSubject from '../err-invalid-module-specifier'

describe('unit:models/ERR_INVALID_MODULE_SPECIFIER', () => {
  let base: string
  let message: string
  let reason: string
  let request: string

  beforeEach(() => {
    base = import.meta.url
    reason = 'empty import specifier'
    request = '#'
    message = `Invalid module '${request}'`
  })

  it('should return TypeError instance', () => {
    expect(new TestSubject(request, reason)).to.be.instanceof(TypeError)
  })

  it('should set error code', () => {
    expect(new TestSubject(request, reason))
      .to.have.property('code')
      .equal(ErrorCode.ERR_INVALID_MODULE_SPECIFIER)
  })

  it('should set error message', () => {
    // Arrange
    const cases: [...ConstructorParameters<typeof TestSubject>, string][] = [
      [request, undefined, undefined, message],
      [request, reason, undefined, `${message} ${reason}`],
      [request, reason, base, `${message} ${reason} imported from ${base}`]
    ]

    // Act + Expect
    cases.forEach(([request, reason, base, expected]) => {
      expect(new TestSubject(request, reason, base))
        .to.have.property('message')
        .equal(expected)
    })
  })
})
