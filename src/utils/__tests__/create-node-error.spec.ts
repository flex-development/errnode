/**
 * @file Unit Tests - createNodeError
 * @module errnode/utils/tests/unit/createNodeError
 */

import { ErrorCode } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/types'
import { format } from 'node-inspect-extracted'
import path from 'node:path'
import testSubject from '../create-node-error'

describe('unit:utils/createNodeError', () => {
  let ERR_UNSUPPORTED_DIR_IMPORT: NodeErrorConstructor
  let code: ErrorCode
  let message: string

  beforeAll(() => {
    code = ErrorCode.ERR_UNSUPPORTED_DIR_IMPORT
    message = `Directory import "%s" is not supported resolving ES modules imported from %s`
    ERR_UNSUPPORTED_DIR_IMPORT = testSubject(code, Error, message)
  })

  it('should return NodeErrorConstructor', () => {
    expect(ERR_UNSUPPORTED_DIR_IMPORT)
      .to.be.a('function')
      .with.property('name')
      .that.equals('NodeError')
  })

  describe('NodeError', () => {
    it('should return NodeError instance', () => {
      // Arrange
      const s1: string = path.resolve('src/interfaces')
      const s2: string = path.resolve('src/index.ts')
      const msg: string = format(message, s1, s2)

      // Act
      const err: NodeError = new ERR_UNSUPPORTED_DIR_IMPORT(s1, s2)
      const errstr: string = err.toString()

      // Expect
      expect(err).to.have.property('code').equal(code)
      expect(err).to.have.property('message').equal(msg)
      expect(err).to.have.property('name').equal('Error')
      expect(err).to.have.property('stack').startWith(errstr)
      expect(errstr).to.equal(`${err.name} [${code}]: ${err.message}`)
    })
  })
})
