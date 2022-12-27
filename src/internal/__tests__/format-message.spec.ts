/**
 * @file Unit Tests - formatMessage
 * @module create-error-node/internal/tests/unit/formatMessage
 */

import { ErrorCode } from '#src/enums'
import type { MessageFn } from '#src/types'
import { format } from 'node-inspect-extracted'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import testSubject from '../format-message'

describe('unit:internal/formatMessage', () => {
  it('should return formatted messsage if msg is MessageFn', () => {
    // Arrange
    const code: ErrorCode = ErrorCode.ERR_MODULE_NOT_FOUND
    const path: string = resolve('src/utils.ts')
    const base: string = resolve('src/index.ts')
    const msg: MessageFn<[string, string, string?]> = (
      path: string,
      base: string,
      type: string = 'module'
    ) => `Cannot find ${type} '${path}' imported from ${base}`

    // Act
    const result = testSubject(code, msg, [path, base], new TypeError())

    // Expect
    expect(result).to.equal(msg(path, base))
  })

  it('should return formatted messsage if msg is string', () => {
    // Arrange
    const code: ErrorCode = ErrorCode.ERR_IMPORT_ASSERTION_TYPE_MISSING
    const msg: string = 'Module "%s" needs an import assertion of type "%s"'
    const s1: string = pathToFileURL(resolve('./package.json')).href
    const s2: string = 'json'

    // Act
    const result = testSubject(code, msg, [s1, s2], new TypeError())

    // Expect
    expect(result).to.equal(format(msg, s1, s2))
  })

  it('should throw if args length is invalid', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [
        ErrorCode.ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED,
        'Import assertion type "%s" is unsupported'
      ],
      [
        ErrorCode.ERR_UNKNOWN_FILE_EXTENSION,
        (ext: string, path: string) => {
          return `Unknown file extension "${ext}" for ${path}`
        }
      ]
    ]

    // Act + Expect
    cases.forEach(([code, msg, args = [], self]) => {
      const fn: typeof testSubject = testSubject.bind({}, code, msg, args, self)
      const pattern: string = `^${code}; The arguments length \\(${args.length}\\) provided to \`(?:msg|util\\.format)\` does not match the required length \\(\\d\\)\\.$`

      expect(fn).to.throw(new RegExp(pattern))
    })
  })
})
