/**
 * @file Unit Tests - syscodes
 * @module errnode/enums/tests/unit/syscodes
 */

import { fetchSystemCodes, NODE_VERSIONS } from '#tests/utils'
import type { SemanticVersion } from '@flex-development/pkg-types'
import testSubject from '../syscodes'

describe('unit:enums/syscodes', () => {
  describe.each<SemanticVersion>(NODE_VERSIONS)('v%s', async version => {
    it.each(await fetchSystemCodes(version))('%s', code => {
      expect(testSubject).to.have.property(code, code)
    })
  })
})
