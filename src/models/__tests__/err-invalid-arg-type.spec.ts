/**
 * @file Unit Tests - ERR_INVALID_ARG_TYPE
 * @module errnode/models/tests/unit/ERR_INVALID_ARG_TYPE
 */

import { ErrorCode } from '#src/enums'
import { determineSpecificType } from '#src/utils'
import { cast } from '@flex-development/tutils'
import TestSubject from '../err-invalid-arg-type'

describe('unit:models/ERR_INVALID_ARG_TYPE', () => {
  let actual: unknown
  let name: string
  let type: string

  beforeEach(() => {
    actual = null
    name = 'ip_addr'
    type = 'string'
  })

  it('should return TypeError instance', () => {
    // Act
    const result = new TestSubject(name, type, actual)

    // Expect
    expect(result).to.be.instanceof(TypeError)
    expect(result).to.have.property('name').equal('TypeError')
  })

  it('should set error code', () => {
    expect(new TestSubject(name, type, actual))
      .to.have.property('code')
      .equal(ErrorCode.ERR_INVALID_ARG_TYPE)
  })

  it('should set error message', () => {
    // Arrange
    const props = (name: string): string => `props.${name}`
    const received: string = `Received ${determineSpecificType(actual)}`
    const cases: [...ConstructorParameters<typeof TestSubject>, string][] = [
      [
        name,
        type,
        actual,
        `The '${name}' argument must be of type string. ${received}`
      ],
      [
        props(name),
        type,
        actual,
        `The '${props(name)}' property must be of type string. ${received}`
      ],
      [
        name,
        ['RegExp', 'bigint', 'boolean', 'errno', 'number', 'string', 'symbol'],
        actual,
        `The '${name}' argument must be one of type bigint, boolean, number, string, or symbol or an instance of RegExp or errno. ${received}`
      ],
      [
        name + ' argument',
        [
          '13',
          '26',
          'RegExp',
          'bigint',
          'boolean',
          'number',
          'object',
          'string',
          'symbol'
        ],
        actual,
        `The ${name} argument must be one of type bigint, boolean, number, string, or symbol or an instance of RegExp or Object or one of 13 or 26. ${received}`
      ]
    ]

    // Act + Expect
    cases.forEach(([name, types, actual, expected]) => {
      expect(new TestSubject(name, types, actual))
        .to.have.property('message')
        .equal(expected)
    })
  })

  it('should throw if expected is not a string or string[]', () => {
    // Arrange
    const fn = vi.fn(() => new TestSubject(name, cast(actual), actual))

    // Expect
    expect(fn).to.throw('`expected` must be a string or string[]')
  })

  it('should throw if name is not a string', () => {
    // Arrange
    const fn = vi.fn(() => new TestSubject(cast(actual), [], actual))

    // Expect
    expect(fn).to.throw("'name' must be a string")
  })
})
