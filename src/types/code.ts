/**
 * @file Type Aliases - Code
 * @module errnode/types/Code
 */

import type { NodeErrorMap } from '#src/interfaces'

/**
 * Union of registered codes that can occur where a node error code is expected.
 *
 * To register new codes, augment {@linkcode NodeErrorMap}. They will be added
 * to this union automatically.
 */
type Code = Extract<keyof NodeErrorMap, string>

export type { Code as default }
