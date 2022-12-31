/**
 * @file Unit Tests - formatList
 * @module create-error-node/internal/tests/unit/formatList
 */

import testSubject from '../format-list'

describe('unit:internal/formatList', () => {
  it('should return list string', () => {
    // Arrange
    const cases: [...Parameters<typeof testSubject>, string][] = [
      [['json'], undefined, 'json'],
      [['data', 'file'], undefined, 'data and file'],
      [['boolean', 'number', 'string'], 'or', 'boolean, number, or string']
    ]

    // Act + Expect
    cases.forEach(([arr, transition, expected]) => {
      expect(testSubject(arr, transition)).to.equal(expected)
    })
  })
})
