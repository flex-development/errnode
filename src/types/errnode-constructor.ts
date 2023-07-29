/**
 * @file Type Definitions - ErrnodeConstructor
 * @module errnode/types/ErrnodeConstructor
 */

import type { Class, Omit } from '@flex-development/tutils'

/**
 * Object representing any error constructor.
 *
 * @template T - Error prototype
 * @template A - Error constructor arguments
 */
type ErrnodeConstructor<
  T extends Error = Error,
  A extends readonly unknown[] = any[]
> = Class<T, A> & Omit<ErrorConstructor, 'prototype'>

export type { ErrnodeConstructor as default }
