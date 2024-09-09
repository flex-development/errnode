declare global {
  declare const ERROR: unique symbol
  declare const RANGE_ERROR: unique symbol
  declare const TYPE_ERROR: unique symbol
  declare const URI_ERROR: unique symbol

  interface ArrayConstructor {
    /**
     * Check if `value` is an array.
     *
     * @template {any} T
     *  Array item type
     *
     * @param {unknown} value
     *  Value to check
     * @return {value is ReadonlyArray<T> | T[]}
     *  `true` if `value` is an array, `false` otherwise
     */
    isArray<T>(value: unknown): value is T[] | readonly T[]
  }

  interface Error {
    [ERROR]: true
  }

  interface RangeError {
    [RANGE_ERROR]: true
  }

  interface TypeError {
    [TYPE_ERROR]: true
  }

  interface URIError {
    [URI_ERROR]: true
  }
}

export {}
