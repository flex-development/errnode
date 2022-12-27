/**
 * @file Unit Tests - ErrorCode
 * @module create-node-error/enums/tests/unit-d/ErrorCode
 */

import type TestSubject from '../error-code'

describe('unit-d:enums/ErrorCode', () => {
  it('should have members of type Uppercase<string>', () => {
    expectTypeOf<typeof TestSubject>()
      .extract<Uppercase<string>>()
      .not.toBeNever()
  })
})
