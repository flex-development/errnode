/**
 * @file Type Tests - SystemErrorCode
 * @module errnode/enums/tests/unit-d/SystemErrorCode
 */

import type TestSubject from '../error-code-system'

describe('unit-d:enums/SystemErrorCode', () => {
  it('should have members of type Uppercase<string>', () => {
    // Arrange
    type Key = keyof typeof TestSubject

    // Expect
    expectTypeOf<Key>().toMatchTypeOf<Uppercase<string>>()
    expectTypeOf<TestSubject>().toMatchTypeOf<Key>()
    expectTypeOf<(typeof TestSubject)[Key]>().toEqualTypeOf<TestSubject>()
  })
})
