/**
 * @file Unit Tests - codes
 * @module errnode/enums/tests/unit/codes
 */

import { fetchCodes, NODE_VERSIONS } from '#tests/utils'
import type { SemanticVersion } from '@flex-development/pkg-types'
import testSubject from '../codes'

describe('unit:enums/codes', () => {
  describe.each<SemanticVersion>(NODE_VERSIONS)('v%s', async version => {
    it.each(await fetchCodes(version))('%s', code => {
      expect(testSubject).to.have.property(code, code)
    })
  })
})
