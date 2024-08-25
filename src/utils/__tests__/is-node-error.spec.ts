/**
 * @file Unit Tests - isNodeError
 * @module errnode/utils/tests/unit/isNodeError
 */

import { ERR_UNHANDLED_ERROR } from '#src/errors'
import testSubject from '../is-node-error'

describe('unit:utils/isNodeError', () => {
  it.each<Parameters<typeof testSubject>>([
    [null],
    [new Error('')]
  ])('should return `false` if `value` is not `NodeError` (%#)', value => {
    expect(testSubject(value)).to.be.false
  })

  it('should return `true` if `value` is `NodeError`', () => {
    expect(testSubject(new ERR_UNHANDLED_ERROR())).to.be.true
  })
})
