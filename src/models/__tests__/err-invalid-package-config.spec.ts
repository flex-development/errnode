/**
 * @file Unit Tests - ERR_INVALID_PACKAGE_CONFIG
 * @module errnode/models/tests/unit/ERR_INVALID_PACKAGE_CONFIG
 */

import { ErrorCode } from '#src/enums'
import path from 'node:path'
import TestSubject from '../err-invalid-package-config'

describe('unit:models/ERR_INVALID_PACKAGE_CONFIG', () => {
  let base: string
  let id: string
  let message: string
  let reason: string

  beforeEach(() => {
    base = `bad-exports from ${import.meta.url}`
    id = path.resolve('node_modules/bad-exports/package.json')
    message = `Invalid package config ${id}`
    reason =
      '"exports" cannot contain some keys starting with \'.\' and some not. The exports object must either be an object of package subpath keys or an object of main entry condition name keys only.'
  })

  it('should return Error instance', () => {
    // Act
    const result = new TestSubject(id)

    // Expect
    expect(result).to.be.instanceof(Error)
    expect(result).to.have.property('name').equal('Error')
  })

  it('should set error code', () => {
    expect(new TestSubject(id))
      .to.have.property('code')
      .equal(ErrorCode.ERR_INVALID_PACKAGE_CONFIG)
  })

  it('should set error message', () => {
    // Arrange
    const cases: [...ConstructorParameters<typeof TestSubject>, string][] = [
      [id, undefined, undefined, message],
      [id, base, undefined, `${message} while importing ${base}`],
      [id, base, reason, `${message} while importing ${base}. ${reason}`]
    ]

    // Act + Expect
    cases.forEach(([path, base, reason, expected]) => {
      expect(new TestSubject(path, base, reason))
        .to.have.property('message')
        .equal(expected)
    })
  })
})
