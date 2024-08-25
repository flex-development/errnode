/**
 * @file Unit Tests - ERR_PACKAGE_PATH_NOT_EXPORTED
 * @module errnode/errors/tests/unit/ERR_PACKAGE_PATH_NOT_EXPORTED
 */

import pathe from '@flex-development/pathe'
import { DOT } from '@flex-development/tutils'
import { fileURLToPath } from 'node:url'
import TestSubject, {
  type ErrPackagePathNotExported
} from '../err-package-path-not-exported'

describe('unit:errors/ERR_PACKAGE_PATH_NOT_EXPORTED', () => {
  it.each<Parameters<typeof TestSubject>>([
    [
      pathe.resolve('node_modules/@flex-development/pathe') + pathe.sep,
      DOT,
      fileURLToPath(import.meta.url)
    ],
    [
      pathe.resolve('node_modules/@flex-development/pathe') + pathe.sep,
      './package.json',
      fileURLToPath(import.meta.url)
    ]
  ])('should build message from parameters (%#)', (...args) => {
    // Act
    const subject: ErrPackagePathNotExported = new TestSubject(...args)

    // Expect
    expect(subject).to.have.property('message').be.a('string').that.is.not.empty
    expect(subject.message).toMatchSnapshot()
  })
})
