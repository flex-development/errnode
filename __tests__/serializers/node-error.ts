/**
 * @file Snapshot Serializers - nodeError
 * @module tests/serializers/nodeError
 * @see https://vitest.dev/guide/snapshot
 */

import type { NodeError } from '#src/interfaces'
import { isNodeError } from '#src/utils'
import { ok } from 'devlop'
import type { SnapshotSerializer } from 'vitest'

/**
 * Node.js error snapshot serializer.
 *
 * @const {SnapshotSerializer} serializer
 */
const serializer: SnapshotSerializer = { print, test: isNodeError }

export default serializer

/**
 * Print a snapshot value.
 *
 * > 👉 `value` is expected to be a {@linkcode NodeError}.
 *
 * @param {unknown} value
 *  Value to print
 * @return {string}
 *  Snapshot value
 */
function print(value: unknown): string {
  ok(isNodeError(value), 'expected `value` to be `NodeError`')
  return value.toString().replaceAll(process.cwd(), '${process.cwd()}')
}
