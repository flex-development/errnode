/**
 * @file Unit Tests - ERR_MODULE_NOT_FOUND
 * @module errnode/errors/tests/unit/ERR_MODULE_NOT_FOUND
 */

import pathe from '@flex-development/pathe'
import { DOT } from '@flex-development/tutils'
import { fileURLToPath, pathToFileURL } from 'node:url'
import TestSubject, { type ErrModuleNotFound } from '../err-module-not-found'

describe('unit:errors/ERR_MODULE_NOT_FOUND', () => {
  it.each<Parameters<typeof TestSubject>>([
    [
      pathe.resolve('missing-file'),
      fileURLToPath(import.meta.url),
      new URL('missing-file', pathToFileURL(DOT + pathe.sep))
    ],
    ['missing-package', fileURLToPath(import.meta.url)]
  ])('should build message from parameters (%#)', (...args) => {
    // Act
    const subject: ErrModuleNotFound = new TestSubject(...args)

    // Expect
    expect(subject).to.have.property('message').be.a('string').that.is.not.empty
    expect(subject.message).toMatchSnapshot()
  })
})
