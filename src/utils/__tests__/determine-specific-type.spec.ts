/**
 * @file Unit Tests - determineSpecificType
 * @module errnode/utils/tests/unit/determineSpecificType
 */

import kIsNodeError from '#k-is-node-error'
import testSubject from '../determine-specific-type'

describe('unit:utils/determineSpecificType', () => {
  it.each<Parameters<typeof testSubject>>([
    ['\'hello world\''],
    ['hello world👋🌎👋🌎👋🌎👋🌎👋🌎👋🌎👋🌎👋🌎👋🌎👋🌎'],
    [-0],
    [0],
    [13n],
    [3],
    [Number.NEGATIVE_INFINITY],
    [Number.NaN],
    [Number.POSITIVE_INFINITY],
    [false],
    [kIsNodeError],
    [new Date()],
    [null],
    [true],
    [undefined],
    [vi.fn()]
  ])('should return specific type of `value` (%#)', value => {
    expect(testSubject(value)).toMatchSnapshot()
  })
})
