/**
 * @file Integration Tests - errors
 * @module errnode/tests/integration/errors
 */

import JS_MODULE_DATA_URL from '#fixtures/js-module-data-url'
import JSON_MODULE_DATA_URL from '#fixtures/json-module-data-url'
import { codes, syscodes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'
import serializer from '#tests/serializers/node-error'
import pathe from '@flex-development/pathe'
import pkg from '@flex-development/pathe/package.json' assert { type: 'json' }
import { DOT } from '@flex-development/tutils'
import { fileURLToPath, pathToFileURL } from 'node:url'
import type { TestContext } from 'vitest'
import * as testSubject from '../errors'

describe('integration:errors', () => {
  beforeEach((context: TestContext) => {
    context.expect.addSnapshotSerializer(serializer)
  })

  describe.each<[keyof typeof testSubject, ErrorConstructor, ...unknown[]]>([
    [codes.ERR_ENCODING_NOT_SUPPORTED, RangeError, null],
    [
      codes.ERR_IMPORT_ASSERTION_TYPE_FAILED,
      TypeError,
      pathe.resolve('build.config.ts'),
      'json'
    ],
    [
      codes.ERR_IMPORT_ASSERTION_TYPE_MISSING,
      TypeError,
      pathe.resolve('package.json'),
      'json'
    ],
    [codes.ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED, TypeError, 'json5'],
    [
      codes.ERR_IMPORT_ATTRIBUTE_MISSING,
      TypeError,
      JSON_MODULE_DATA_URL,
      'type',
      'json'
    ],
    [
      codes.ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE,
      TypeError,
      JS_MODULE_DATA_URL,
      'json'
    ],
    [codes.ERR_IMPORT_ATTRIBUTE_UNSUPPORTED, TypeError, 'type', 'unsupported'],
    [codes.ERR_INCOMPATIBLE_OPTION_PAIR, TypeError, 'N', 'cost'],
    [codes.ERR_INVALID_ARG_TYPE, TypeError, 'ctor', 'Function', null],
    [codes.ERR_INVALID_ARG_VALUE, TypeError, 'address', 1],
    [
      codes.ERR_INVALID_MODULE_SPECIFIER,
      TypeError,
      '@flex-development%2Fpathe',
      'is not a valid package name',
      pathe.resolve('scratch.ts')
    ],
    [
      codes.ERR_INVALID_PACKAGE_CONFIG,
      Error,
      pathe.resolve('node_modules/@flex-development/pathe/package.json'),
      new URL('loader.mjs', pathToFileURL(DOT + pathe.sep)),
      '"exports" cannot contain some keys starting with \'.\' and some not. The exports object must either be an object of package subpath keys or an object of main entry condition name keys only.'
    ],
    [
      codes.ERR_INVALID_PACKAGE_TARGET,
      Error,
      pathe.resolve('node_modules/@flex-development/pathe') + pathe.sep,
      DOT,
      pkg.exports[DOT].slice(2),
      null,
      pathe.resolve('loader.mjs')
    ],
    [codes.ERR_INVALID_RETURN_VALUE, TypeError, 'null', 'body', 13],
    [codes.ERR_INVALID_URL, TypeError, pathe.sep, 'http://[127.0.0.1]:8000'],
    [codes.ERR_METHOD_NOT_IMPLEMENTED, Error, '_transform()'],
    [codes.ERR_MISSING_OPTION, TypeError, 'init.highWaterMark'],
    [
      codes.ERR_MODULE_NOT_FOUND,
      Error,
      pathe.resolve('missing-file'),
      fileURLToPath(import.meta.url),
      new URL('missing-file', pathToFileURL(DOT + pathe.sep))
    ],
    [
      codes.ERR_NETWORK_IMPORT_DISALLOWED,
      Error,
      'https://esm.sh/@flex-development/unist-util-builder',
      import.meta.url,
      'ES modules cannot be loaded by require() from the network'
    ],
    [codes.ERR_OPERATION_FAILED, Error, 'Out of memory'],
    [
      codes.ERR_PACKAGE_IMPORT_NOT_DEFINED,
      TypeError,
      '#src',
      process.cwd() + pathe.sep,
      import.meta.url
    ],
    [
      codes.ERR_PACKAGE_PATH_NOT_EXPORTED,
      Error,
      pathe.resolve('node_modules/@flex-development/errnode') + pathe.sep,
      './internal'
    ],
    [codes.ERR_UNHANDLED_ERROR, Error, syscodes.ECONNREFUSED],
    [codes.ERR_UNKNOWN_BUILTIN_MODULE, Error, 'node:foo'],
    [codes.ERR_UNKNOWN_ENCODING, TypeError, 'git'],
    [
      codes.ERR_UNKNOWN_FILE_EXTENSION,
      TypeError,
      pathe.extname(import.meta.url),
      import.meta.url
    ],
    [codes.ERR_UNKNOWN_MODULE_FORMAT, RangeError, 'text/css', 'data:text/css,'],
    [codes.ERR_UNSUPPORTED_DIR_IMPORT, Error, '../errors', import.meta.url],
    [
      codes.ERR_UNSUPPORTED_ESM_URL_SCHEME,
      Error,
      new URL('unist-util-visit', 'https://esm.sh/@flex-development/'),
      ['data', 'file', 'node']
    ],
    [
      codes.ERR_UNSUPPORTED_RESOLVE_REQUEST,
      TypeError,
      'not-found',
      'data:text/javascript,export default import.meta.resolve(\'not-found\')'
    ]
  ])('%s', (code, Base, ...args) => {
    let subject: NodeError

    beforeAll(() => {
      subject = new (<NodeErrorConstructor>testSubject[code])(...args)
    })

    it(`should be instance of ${Base.name}`, () => {
      expect(subject).to.be.instanceof(Base)
      expect(subject).to.have.property('name', Base.name)
    })

    it('should have `code`', () => {
      expect(subject).to.have.property('code', code)
    })

    it('should have `message`', () => {
      expect(subject).to.have.property('message')
    })

    it('should have `stack`', () => {
      expect(subject).to.have.property('stack').be.a('string').that.not.empty
    })

    describe('#toString', () => {
      it('should return string representation of error', () => {
        expect(subject).toMatchSnapshot()
      })
    })
  })
})
