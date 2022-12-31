/**
 * @file Unit Tests - ERR_PACKAGE_PATH_NOT_EXPORTED
 * @module errnode/models/tests/unit/ERR_PACKAGE_PATH_NOT_EXPORTED
 */

import { ErrorCode } from '#src/enums'
import TestSubject from '../err-package-path-not-exported'

describe('unit:models/ERR_PACKAGE_PATH_NOT_EXPORTED', () => {
  let base: string
  let dir: string
  let subpath: string

  beforeEach(() => {
    base = import.meta.url
    dir = process.cwd() + 'node_modules/@flex-development/errnode/'
    subpath = '.'
  })

  it('should return Error instance', () => {
    // Act
    const result = new TestSubject(dir, subpath)

    // Expect
    expect(result).to.be.instanceof(Error)
    expect(result).to.have.property('name').equal('Error')
  })

  it('should set error code', () => {
    expect(new TestSubject(dir, subpath))
      .to.have.property('code')
      .equal(ErrorCode.ERR_PACKAGE_PATH_NOT_EXPORTED)
  })

  it('should set error message', () => {
    // Arrange
    const cases: [...ConstructorParameters<typeof TestSubject>, string][] = [
      [
        dir,
        subpath,
        undefined,
        `No 'exports' main defined in ${dir}package.json`
      ],
      [
        dir,
        subpath,
        base,
        `No 'exports' main defined in ${dir}package.json imported from ${base}`
      ],
      [
        dir,
        subpath + '/internal/format-message',
        undefined,
        `Package subpath '${subpath}/internal/format-message' is not defined by 'exports' in ${dir}package.json`
      ],
      [
        dir,
        subpath + '/utils/create-node-error',
        base,
        `Package subpath '${subpath}/utils/create-node-error' is not defined by 'exports' in ${dir}package.json imported from ${base}`
      ]
    ]

    // Act + Expect
    cases.forEach(([dir, subpath, base, expected]) => {
      expect(new TestSubject(dir, subpath, base))
        .to.have.property('message')
        .equal(expected)
    })
  })
})
