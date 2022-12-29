/**
 * @file Unit Tests - SystemErrorCode
 * @module errnode/enums/tests/unit/SystemErrorCode
 */

import { getSystemErrorMap } from 'node:util'
import TestSubject from '../error-code-system'

describe('unit:enums/SystemErrorCode', () => {
  let cases: string[]

  beforeAll(() => {
    cases = [...getSystemErrorMap().values()].map(([code]) => code)
  })

  it('should map system error codes to system error codes', () => {
    cases.forEach(code => {
      expect(TestSubject).to.have.property(code).equal(code)
    })
  })
})
