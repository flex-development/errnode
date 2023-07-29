/**
 * @file Internal - formatList
 * @module errnode/internal/formatList
 * @see https://github.com/nodejs/node/blob/0f69ec4dd74d446765639274728466baf5f13cdd/lib/internal/errors.js#L905-L908
 */

import { at, join } from '@flex-development/tutils'

/**
 * Creates a list string in the form `'A and B'` or `'A, B, ..., and Z`.
 *
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
 * @param {string[]} arr - List elements
 * @param {string?} [transition='and'] - Word to be inserted before last element
 * @return {string} List string
 */
const formatList = (arr: string[], transition: string = 'and'): string => {
  return arr.length < 3
    ? join(arr, ` ${transition} `)
    : join([`${join(arr.slice(0, -1), ', ')},`, transition, at(arr, -1)], ' ')
}

export default formatList
