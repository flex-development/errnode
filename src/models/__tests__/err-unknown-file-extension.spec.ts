/**
 * @file Unit Tests - ERR_UNKNOWN_FILE_EXTENSION
 * @module errnode/models/tests/unit/ERR_UNKNOWN_FILE_EXTENSION
 */

import { ErrorCode } from '#src/enums'
import path from 'node:path'
import TestSubject from '../err-unknown-file-extension'

describe('unit:models/ERR_UNKNOWN_FILE_EXTENSION', () => {
  let ext: string
  let id: string
  let message: string
  let suggestion: string

  beforeEach(() => {
    id = import.meta.url
    ext = path.extname(id)
    message = `Unknown file extension '${ext}' for ${id}`
    suggestion = 'Use a custom loader'
  })

  it('should return TypeError instance', () => {
    // Act
    const result = new TestSubject(ext, id)

    // Expect
    expect(result).to.have.property('name').equal('TypeError')
    expect(result).to.be.instanceof(TypeError)
  })

  it('should set error code', () => {
    expect(new TestSubject(ext, id))
      .to.have.property('code')
      .equal(ErrorCode.ERR_UNKNOWN_FILE_EXTENSION)
  })

  it('should set error message', () => {
    // Arrange
    const cases: [...ConstructorParameters<typeof TestSubject>, string][] = [
      [ext, id, undefined, message],
      [ext, id, suggestion, `${message}. ${suggestion}`]
    ]

    // Act + Expect
    cases.forEach(([ext, id, suggestion, expected]) => {
      expect(new TestSubject(ext, id, suggestion))
        .to.have.property('message')
        .equal(expected)
    })
  })
})
