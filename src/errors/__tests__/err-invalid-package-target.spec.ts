/**
 * @file Unit Tests - ERR_INVALID_PACKAGE_TARGET
 * @module errnode/errors/tests/unit/ERR_INVALID_PACKAGE_TARGET
 */

import pathe from '@flex-development/pathe'
import pkg from '@flex-development/pathe/package.json' assert { type: 'json' }
import { DOT } from '@flex-development/tutils'
import { fileURLToPath } from 'node:url'
import TestSubject, {
  type ErrInvalidPackageTarget
} from '../err-invalid-package-target'

describe('unit:errors/ERR_INVALID_PACKAGE_TARGET', () => {
  it.each<Parameters<typeof TestSubject>>([
    [
      pathe.resolve('node_modules/@flex-development/pathe') + pathe.sep,
      DOT,
      pkg.exports[DOT].slice(2),
      false,
      pathe.resolve('loader.mjs')
    ],
    [
      pathe.resolve('node_modules/@flex-development/pathe') + pathe.sep,
      './package.json',
      DOT + pkg.exports['./package.json'],
      null,
      fileURLToPath(import.meta.url)
    ],
    [
      pathe.resolve(DOT) + pathe.sep,
      '#src',
      'src/index.ts',
      true,
      fileURLToPath(import.meta.url)
    ]
  ])('should build message from parameters (%#)', (...args) => {
    // Act
    const subject: ErrInvalidPackageTarget = new TestSubject(...args)

    // Expect
    expect(subject).to.have.property('message').be.a('string').that.is.not.empty
    expect(subject.message).toMatchSnapshot()
  })
})
