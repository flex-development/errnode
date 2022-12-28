/**
 * @file Unit Tests - createNodeError
 * @module create-node-error/tests/unit/createNodeError
 */

import { ErrorCode } from '#src/enums'
import type { NodeError } from '#src/types'
import { format } from 'node-inspect-extracted'
import { resolve } from 'node:path'
import testSubject from '../create-node-error'

describe('unit:createNodeError', () => {
  it('should return NodeErrorConstructor', () => {
    expect(testSubject(ErrorCode.ERR_INVALID_ARG_TYPE, TypeError, vi.fn()))
      .to.be.a('function')
      .with.property('name')
      .that.equals('NodeError')
  })

  describe('NodeError', () => {
    it('should return NodeError instance', () => {
      // Arrange
      const code: ErrorCode = ErrorCode.ERR_UNSUPPORTED_DIR_IMPORT
      const s1: string = resolve('src/interfaces')
      const s2: string = resolve('src/index.ts')
      const message: string = `Directory import "%s" is not supported resolving ES modules imported from %s`

      // Act
      const ERR_UNSUPPORTED_DIR_IMPORT = testSubject(code, Error, message)
      const err: NodeError = new ERR_UNSUPPORTED_DIR_IMPORT(s1, s2)
      const errstr: string = err.toString()

      // Expect
      expect(err).to.have.property('code').equal(code)
      expect(err).to.have.property('message').equal(format(message, s1, s2))
      expect(err).to.have.property('name').equal('Error')
      expect(err).to.have.property('stack').startWith(errstr)
      expect(errstr).to.equal(`${err.name} [${code}]: ${err.message}`)
    })
  })
})
