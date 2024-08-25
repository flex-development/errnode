/**
 * @file Utilities - formatList
 * @module errnode/utils/formatList
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1043-L1060
 */

import { at, join } from '@flex-development/tutils'

/**
 * Create a list string in the form `'A and B'` or `'A, B, ..., and Z`.
 *
 * > {@linkcode Intl.ListFormat} cannot be used because it's not available in
 * > `--without-intl` builds.
 *
 * @example
 *  formatList([])
 *  // ''
 * @example
 *  formatList(['json'])
 *  // 'json'
 * @example
 *  formatList(['data', 'file'])
 *  // 'data and file'
 * @example
 *  formatList(['boolean', 'number', 'string'], 'or')
 *  // 'boolean, number, or string'
 *
 * @param {ReadonlyArray<string> | string} list
 *  List to format
 * @param {'and' | 'or' | null | undefined} [type='and']
 *  List transition type to insert before last element
 * @return {string}
 *  Formatted list
 */
function formatList(
  list: string | readonly string[],
  type?: 'and' | 'or' | null | undefined
): string {
  if (typeof list === 'string') return list

  if (!type) type = 'and'

  switch (list.length) {
    case 0:
      return ''
    case 1:
      return `${list[0]}`
    case 2:
      return `${list[0]} ${type} ${list[1]}`
    case 3:
      return `${list[0]}, ${list[1]}, ${type} ${list[2]}`
    default:
      return `${join(list.slice(0, -1), ', ')}, ${type} ${at(list, -1)}`
  }
}

export default formatList
