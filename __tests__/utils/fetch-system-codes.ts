/**
 * @file Test Utilities - fetchSystemCodes
 * @module tests/utils/fetchSystemCodes
 */

import type { SemanticVersion } from '@flex-development/pkg-types'
import { alphabetize, identity } from '@flex-development/tutils'
import { ok } from 'devlop'
import VERSIONS from './node-versions'

/**
 * Get a list of system error codes for `version`.
 *
 * @async
 *
 * @param {SemanticVersion} version
 *  Node.js version
 * @return {Promise<string[]>}
 *  List of system error codes for `version`
 */
async function fetchSystemCodes(version: SemanticVersion): Promise<string[]> {
  ok(VERSIONS.includes(version), 'expected `version` to be in `VERSIONS`')

  /**
   * Input URL.
   *
   * @const {string} input
   */
  const input: string = `/nodejs/node/v${version}/deps/uv/include/uv.h`

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
   * Regular expression used to extract system error codes.
   *
   * @const {RegExp} regex
   */
  const regex: RegExp = /(?<=XX\()(?:UNKNOWN|E.+(?=,))/g

  /**
   * Fetched codes.
   *
   * @const {string[]} codes
   */
  const codes: string[] = []

  for (let [match] of (await res.text()).matchAll(regex)) {
    match = match.trim()

    ok(
      match.startsWith('E') || match === 'UNKNOWN',
      'expected `match` to start with "E" or be "UNKNOWN"'
    )

    codes.push(match)
  }

  return alphabetize([...new Set<string>(codes)], identity)
}

export default fetchSystemCodes
