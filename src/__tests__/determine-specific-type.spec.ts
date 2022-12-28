/**
 * @file Unit Tests - determineSpecificType
 * @module errnode/tests/unit/determineSpecificType
 */

import { inspect } from 'node-inspect-extracted'
import testSubject from '../determine-specific-type'

describe('unit:determineSpecificType', () => {
  it('should detect bigint', () => {
    // Arrange
    const value: bigint = faker.datatype.bigInt(13)
    const expected: string = `type bigint (${inspect(value, {
      colors: false
    })})`

    // Act + Expect
    expect(testSubject(value)).to.equal(expected)
  })

  it('should detect boolean', () => {
    // Arrange
    const value: unknown = faker.datatype.boolean()
    const expected: string = `type boolean (${value})`

    // Act + Expect
    expect(testSubject(value)).to.equal(expected)
  })

  it('should detect function', () => {
    // Arrange
    const value: unknown = vi.fn()
    const expected: string = 'function spy'

    // Act + Expect
    expect(testSubject(value)).to.equal(expected)
  })

  it('should detect instance object', () => {
    // Arrange
    const value: unknown = faker.datatype.datetime()
    const expected: string = 'an instance of Date'

    // Act + Expect
    expect(testSubject(value)).to.equal(expected)
  })

  it('should detect null', () => {
    expect(testSubject(null)).to.equal('null')
  })

  it('should detect number', () => {
    // Arrange
    const value: unknown = faker.datatype.number(13)
    const expected: string = `type number (${value})`

    // Act + Expect
    expect(testSubject(value)).to.equal(expected)
  })

  it('should detect string', () => {
    // Arrange
    const value: unknown = faker.datatype.string(30)
    const inspected: string = inspect(value, { colors: false })
    const expected: string = `type string (${inspected.slice(0, 25)}...)`

    // Act + Expect
    expect(testSubject(value)).to.equal(expected)
  })

  it('should detect symbol', () => {
    // Arrange
    const value: unknown = Symbol('kIsNodeError')
    const expected: string = `type symbol (${inspect(value, {
      colors: false
    })})`

    // Act + Expect
    expect(testSubject(value)).to.equal(expected)
  })

  it('should detect undefined', () => {
    expect(testSubject(undefined)).to.equal('undefined')
  })
})
