/**
 * @file Unit Tests - formatList
 * @module errnode/utils/tests/unit/formatList
 */

import testSubject from '../format-list'

describe('unit:utils/formatList', () => {
  it.each<Parameters<typeof testSubject>>([
    [[]],
    ['object'],
    [['json']],
    [['data', 'file'], null],
    [['`.cjs`', '`.js`', '`.mjs`'], 'or'],
    [['boolean', 'function', 'number', 'string'], 'or']
  ])('should return list string (%#)', (list, type) => {
    expect(testSubject(list, type)).toMatchSnapshot()
  })
})
