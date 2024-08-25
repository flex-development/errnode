declare global {
  declare const ERROR: unique symbol
  declare const RANGE_ERROR: unique symbol
  declare const TYPE_ERROR: unique symbol
  declare const URI_ERROR: unique symbol

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
