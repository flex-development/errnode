/**
 * @file Type Aliases - SystemCode
 * @module errnode/types/SystemCode
 */

import type { SystemErrorMap } from '#src/interfaces'

/**
 * Union of registered codes that can occur where a system error code is
 * expected.
 *
 * To register new codes, augment {@linkcode SystemErrorMap}. They will be added
 * to this union automatically.
 */
type SystemCode = Extract<keyof SystemErrorMap, string>

export type { SystemCode as default }
