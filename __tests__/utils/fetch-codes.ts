/**
 * @file Test Utilities - fetchCodes
 * @module tests/utils/fetchCodes
 */

import type { SemanticVersion } from '@flex-development/pkg-types'
import { alphabetize, identity } from '@flex-development/tutils'
import { ok } from 'devlop'
import VERSIONS from './node-versions'

/**
 * Get a list of Node.js error codes for `version`.
 *
 * @async
 *
 * @param {SemanticVersion} version
 *  Node.js version
 * @return {Promise<string[]>}
 *  List of codes for `version`
 */
async function fetchCodes(version: SemanticVersion): Promise<string[]> {
  ok(VERSIONS.includes(version), 'expected `version` to be in `VERSIONS`')

  /**
   * Input URL.
   *
   * @const {string} input
   */
  const input: string = `/nodejs/node/v${version}/doc/api/errors.md`

  /**
   * Request URL.
   *
   * @const {URL} url
   */
  const url: URL = new URL(input, 'https://raw.githubusercontent.com')

  /**
   * Raw codes response.
   *
   * @const {Response} res
   */
  const res: Response = await fetch(url)

  /**
   * Regular expression used to extract Node.js codes.
   *
   * @const {RegExp} regex
   */
  const regex: RegExp = /(?<=^#{3} `)(?:(?:ERR|HPE)_.+|MODULE_NOT_FOUND)(?=`)/gm

  /**
   * Fetched codes.
   *
   * @const {string[]} codes
   */
  const codes: string[] = []

  for (let [match] of (await res.text()).matchAll(regex)) {
    match = match.trim()

    ok(
      match.startsWith('ERR_') ||
        match.startsWith('HPE_') ||
        match === 'MODULE_NOT_FOUND',
      'expected `match` to start with "ERR_", "HPE_", or be "MODULE_NOT_FOUND"'
    )

    codes.push(match)
  }

  return alphabetize([...new Set<string>(codes)], identity)
}

export default fetchCodes
