/**
 * @file Interfaces - Stringifiable
 * @module errnode/interfaces/Stringifiable
 */

/**
 * A value with a `toString` method.
 */
interface Stringifiable {
  /**
   * Get a string representation of the value.
   *
   * @return {string}
   *  Stringified value
   */
  toString(): string
}

export type { Stringifiable as default }
