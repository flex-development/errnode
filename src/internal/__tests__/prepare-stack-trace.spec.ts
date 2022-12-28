/**
 * @file Unit Tests - prepareStackTrace
 * @module create-error-node/internal/tests/unit/prepareStackTrace
 */

import { ErrorCode } from '#src/enums'
import type { NodeError } from '#src/types'
import testSubject from '../prepare-stack-trace'

describe('unit:internal/prepareStackTrace', () => {
  it('should return error with new stack trace', () => {
    // Arrange
    const error: NodeError<TypeError> = Object.assign(new Error(), {
      code: ErrorCode.ERR_INSPECTOR_NOT_WORKER,
      message: 'Current thread is not a worker'
    })

    // Act + Expect
    expect(testSubject(error).stack).to.startWith(error.toString())
  })
})
