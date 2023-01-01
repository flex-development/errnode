/**
 * @file Unit Tests - ERR_INVALID_PACKAGE_TARGET
 * @module errnode/models/tests/unit/ERR_INVALID_PACKAGE_TARGET
 */

import { ErrorCode } from '#src/enums'
import type pkg from '@flex-development/pkg-types'
import TestSubject from '../err-invalid-package-target'

describe('unit:models/ERR_INVALID_PACKAGE_TARGET', () => {
  let base: string
  let dir: string
  let key: string
  let target: pkg.Exports

  beforeEach(() => {
    base = import.meta.url
    dir = process.cwd() + '/'
    key = '.'
    target = 'dist/index.mjs'
  })

  it('should return Error instance', () => {
    // Act
    const result = new TestSubject(dir, key, target)

    // Expect
    expect(result).to.be.instanceof(Error)
    expect(result).to.have.property('name').equal('Error')
  })

  it('should set error code', () => {
    expect(new TestSubject(dir, key, target))
      .to.have.property('code')
      .equal(ErrorCode.ERR_INVALID_PACKAGE_TARGET)
  })

  it('should set error message', () => {
    // Arrange
    const cases: [...ConstructorParameters<typeof TestSubject>, string][] = [
      [
        dir,
        key,
        target,
        undefined,
        undefined,
        `Invalid "exports" main target "${target}" defined in the package config ${dir}package.json; targets must start with "./"`
      ],
      [
        dir,
        key + '/utils',
        'dist/utils.mjs',
        undefined,
        undefined,
        `Invalid "exports" target "dist/utils.mjs" defined for './utils' in the package config ${dir}package.json; targets must start with "./"`
      ],
      [
        '',
        '#src',
        'src/index.ts',
        true,
        base,
        `Invalid "imports" target "src/index.ts" defined for '#src' in the package config package.json imported from ${base}`
      ]
    ]

    // Act + Expect
    cases.forEach(([dir, key, target, internal, base, expected]) => {
      expect(new TestSubject(dir, key, target, internal, base))
        .to.have.property('message')
        .equal(expected)
    })
  })
})
