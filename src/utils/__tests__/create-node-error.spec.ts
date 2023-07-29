/**
 * @file Unit Tests - createNodeError
 * @module errnode/utils/tests/unit/createNodeError
 */

import { ErrorCode } from '#src/enums'
import type { MessageFn, NodeError } from '#src/types'
import pathe from '@flex-development/pathe'
import { format } from 'node-inspect-extracted'
import testSubject from '../create-node-error'

describe('unit:utils/createNodeError', () => {
  it('should return NodeErrorConstructor', () => {
    // Arrange
    const code: ErrorCode = ErrorCode.ERR_UNKNOWN_BUILTIN_MODULE
    const message: string = 'No such built-in module: %s'

    // Act + Expect
    expect(testSubject(code, Error, message))
      .to.be.a('function')
      .with.property('name')
      .that.equals('NodeError')
  })

  describe('NodeError', () => {
    describe('message function', () => {
      let Base: TypeErrorConstructor
      let code: ErrorCode
      let message: MessageFn

      beforeAll(() => {
        Base = TypeError
        code = ErrorCode.ERR_UNKNOWN_FILE_EXTENSION
        message = (ext: string, id: string) => {
          return `Unknown file extension '${ext}' for ${id}`
        }
      })

      it('should return NodeError instance', () => {
        // Arrange
        const id: string = pathe.resolve('src/index.ts')
        const ext: string = pathe.extname(id)

        // Act
        const err: NodeError = new (testSubject(code, Base, message))(ext, id)

        // Expect
        expect(err).to.be.instanceof(Base)
        expect(err).to.have.property('code').equal(code)
        expect(err).to.have.property('message').equal(message(ext, id))
        expect(err).to.have.property('name').equal(Base.name)
        expect(err).to.have.property('stack').startWith(err.toString())
        expect(err.toString()).to.equal(`${err.name} [${code}]: ${err.message}`)
      })

      it('should throw if message arguments length is invalid', () => {
        expect(vi.fn(() => new (testSubject(code, Base, message))())).to.throw(
          new RegExp(
            `^${code}; The arguments length \\(0\\) provided to \`message\` does not match the required length \\(2\\)\\.$`
          )
        )
      })
    })

    describe('message string', () => {
      let Base: TypeErrorConstructor
      let code: ErrorCode
      let message: string

      beforeAll(() => {
        Base = TypeError
        code = ErrorCode.ERR_UNKNOWN_ENCODING
        message = 'Unknown encoding: %s'
      })

      it('should return NodeError instance', () => {
        // Arrange
        const enc: string = faker.image.dataUri()

        // Act
        const err: NodeError = new (testSubject(code, Base, message))(enc)

        // Expect
        expect(err).to.be.instanceof(Base)
        expect(err).to.have.property('code').equal(code)
        expect(err).to.have.property('message').equal(format(message, enc))
        expect(err).to.have.property('name').equal(Base.name)
        expect(err).to.have.property('stack').startWith(err.toString())
        expect(err.toString()).to.equal(`${err.name} [${code}]: ${err.message}`)
      })

      it('should throw if util.format arguments length is invalid', () => {
        expect(vi.fn(() => new (testSubject(code, Base, message))())).to.throw(
          new RegExp(
            `^${code}; The arguments length \\(0\\) provided to \`util\\.format\` does not match the required length \\(1\\)\\.$`
          )
        )
      })
    })
  })
})
