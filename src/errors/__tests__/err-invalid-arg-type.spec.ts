/**
 * @file Unit Tests - ERR_INVALID_ARG_TYPE
 * @module errnode/errors/tests/unit/ERR_INVALID_ARG_TYPE
 */

import TestSubject, { type ErrInvalidArgType } from '../err-invalid-arg-type'

describe('unit:errors/ERR_INVALID_ARG_TYPE', () => {
  it.each<Parameters<typeof TestSubject>>([
    [
      'json argument',
      [
        'Array',
        'boolean',
        'number',
        'object',
        'string',
        'null'
      ],
      undefined
    ],
    ['opts.ip_addr', ['IpAddress', 'string'], null],
    ['packageKey', ['"exports"', '"imports"'], null]
  ])('should build message from parameters (%#)', (...args) => {
    // Act
    const subject: ErrInvalidArgType = new TestSubject(...args)

    // Expect
    expect(subject).to.have.property('message').be.a('string').that.is.not.empty
    expect(subject.message).toMatchSnapshot()
  })
})
