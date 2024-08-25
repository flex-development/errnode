/**
 * @file E2E Tests - api
 * @module errnode/tests/e2e/api
 */

import * as testSubject from '../index'

describe('e2e:errnode', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
