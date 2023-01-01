/**
 * @file Unit Tests - ERR_INVALID_ARG_VALUE
 * @module errnode/models/tests/unit/ERR_INVALID_ARG_VALUE
 */

import { ErrorCode } from '#src/enums'
import type { PackageJson } from '@flex-development/pkg-types'
import { inspect } from 'node-inspect-extracted'
import fs from 'node:fs'
import TestSubject from '../err-invalid-arg-value'

describe('unit:models/ERR_INVALID_ARG_VALUE', () => {
  let name: string
  let reason: string
  let value: unknown

  beforeEach(() => {
    name = 'ip_addr'
    reason = `${name} should be of type string`
    value = null
  })

  it('should return TypeError instance', () => {
    // Act
    const result = new TestSubject(name, value)

    // Expect
    expect(result).to.be.instanceof(TypeError)
    expect(result).to.have.property('name').equal('TypeError')
  })

  it('should set error code', () => {
    expect(new TestSubject(name, value))
      .to.have.property('code')
      .equal(ErrorCode.ERR_INVALID_ARG_VALUE)
  })

  it('should set error message', () => {
    // Arrange
    const pkg: PackageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
    const pkgstr: string = inspect(pkg).slice(0, 128) + '...'
    const props = (name: string) => `props.${name}`
    const cases: [...ConstructorParameters<typeof TestSubject>, string][] = [
      [
        name,
        value,
        undefined,
        `The argument '${name}' is invalid. Received ${value}`
      ],
      [
        props(name),
        value,
        undefined,
        `The property '${props(name)}' is invalid. Received ${value}`
      ],
      [
        name,
        pkg,
        reason,
        `The argument '${name}' ${reason}. Received ${pkgstr}`
      ]
    ]

    // Act + Expect
    cases.forEach(([name, value, reason, expected]) => {
      expect(new TestSubject(name, value, reason))
        .to.have.property('message')
        .equal(expected)
    })
  })
})
