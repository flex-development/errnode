/**
 * @file Test Setup - chai
 * @module tests/setup/chai
 * @see https://chaijs.com
 */

import chai from 'chai'
import chaiString from 'chai-string'

// configure chai
chai.config.includeStack = true
chai.config.truncateThreshold = 0

/**
 * initialize chai plugins.
 *
 * @see https://github.com/onechiporenko/chai-string
 */
chai.use(chaiString)
