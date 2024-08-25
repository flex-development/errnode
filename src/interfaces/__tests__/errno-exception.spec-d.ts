/**
 * @file Type Tests - ErrnoException
 * @module errnode/interfaces/tests/unit-d/ErrnoException
 */

import type { SystemCode } from '#src/types'
import type TestSubject from '../errno-exception'

describe('unit-d:interfaces/ErrnoException', () => {
  it('should extend Error', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Error>()
  })

  it('should match [code: SystemCode]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('code')
      .toEqualTypeOf<SystemCode>()
  })

  it('should match [errno: number]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('errno').toBeNumber()
  })

  it('should match [message: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('message').toBeString()
  })

  it('should match [path?: string | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('path')
      .toEqualTypeOf<string | undefined>()
  })

  it('should match [syscall: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('syscall').toBeString()
  })

  it('should match NodeJS.ErrnoException', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<NodeJS.ErrnoException>()
  })
})
