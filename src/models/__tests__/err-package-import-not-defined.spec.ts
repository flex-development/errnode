/**
 * @file Unit Tests - ERR_PACKAGE_IMPORT_NOT_DEFINED
 * @module errnode/models/tests/unit/ERR_PACKAGE_IMPORT_NOT_DEFINED
 */

import { ErrorCode } from '#src/enums'
import TestSubject from '../err-package-import-not-defined'

describe('unit:models/ERR_PACKAGE_IMPORT_NOT_DEFINED', () => {
  let base: string
  let dir: string
  let message: string
  let specifier: string

  beforeEach(() => {
    base = import.meta.url
    dir = process.cwd()
    specifier = '#src'
    message = `Package import specifier '${specifier}' is not defined`
  })

  it('should return TypeError instance', () => {
    // Act
    const result = new TestSubject(specifier, base)

    // Expect
    expect(result).to.be.instanceof(TypeError)
    expect(result).to.have.property('name').equal('TypeError')
  })

  it('should set error code', () => {
    expect(new TestSubject(specifier, base))
      .to.have.property('code')
      .equal(ErrorCode.ERR_PACKAGE_IMPORT_NOT_DEFINED)
  })

  it('should set error message', () => {
    // Arrange
    const cases: [...ConstructorParameters<typeof TestSubject>, string][] = [
      [specifier, base, undefined, `${message} imported from ${base}`],
      [
        specifier,
        base,
        dir,
        `${message} in package ${dir}/package.json imported from ${base}`
      ]
    ]

    // Act + Expect
    cases.forEach(([specifier, base, dir, expected]) => {
      expect(new TestSubject(specifier, base, dir))
        .to.have.property('message')
        .equal(expected)
    })
  })
})
