/**
 * @file Interfaces - CallSite
 * @module errnode/interfaces/CallSite
 */

import type { Fn, Nullable, Optional } from '@flex-development/tutils'

/**
 * Object representing a stack frame.
 *
 * @see https://v8.dev/docs/stack-trace-api#customizing-stack-traces
 */
interface CallSite {
  /**
   * Returns the current column number of the script the function was defined
   * in.
   *
   * @return {Nullable<number>} Current column number or `null`
   */
  getColumnNumber(): Nullable<number>

  /**
   * Returns a string representing the location where `eval` was called if the
   * current function was created using a call to `eval`.
   *
   * @return {Optional<string>} Location `eval` was called or `undefined`
   */
  getEvalOrigin(): Optional<string>

  /**
   * Returns the name of the script containing the current function if the
   * function was defined in a script.
   *
   * @return {Optional<string>} Parent script name or `undefined`
   */
  getFileName(): Optional<string>

  /**
   * Returns the current function.
   *
   * @return {Optional<Fn>} Current function or `undefined`
   */
  getFunction(): Optional<Fn>

  /**
   * Returns the name of the current function, typically its `name` property.
   *
   * If a `name` property is not available, an attempt is made to infer a name
   * from the function’s context.
   *
   * @return {Nullable<Fn['name']>} Current function name or `null`
   */
  getFunctionName(): Nullable<Fn['name']>

  /**
   * Returns the current line number of the script the function was defined in.
   *
   * @return {Nullable<number>} Current line number or `null`
   */
  getLineNumber(): Nullable<number>

  /**
   * Returns the name of the `this` property or one of its prototypes that holds
   * the current function.
   *
   * @return {Nullable<string>} Property containing current function or `null`
   */
  getMethodName(): Nullable<string>

  /**
   * Returns the value of `this`.
   *
   * @template T - `this` type
   *
   * @return {T} Value of `this`
   */
  getThis<T = unknown>(): T

  /**
   * Returns the type of `this` as a string.
   *
   * This is the name of the function stored in the constructor field of `this`,
   * if available, otherwise the object’s `[[Class]]` internal property.
   *
   * @return {Nullable<string>} Type of `this` as a string or `null`
   */
  getTypeName(): Nullable<string>

  /**
   * Returns a boolean indicating if the current call is a constructor call.
   *
   * @return {boolean} `true` if call is constructor call
   */
  isConstructor(): boolean

  /**
   * Returns a boolean indicating if the current call took place in code defined
   * by a call to `eval`.
   *
   * @return {boolean} `true` if call takes place in code defined by `eval`
   */
  isEval(): boolean

  /**
   * Returns a boolean indicating if the current call is in native V8 code.
   *
   * @return {boolean} `true` if call is in native V8 code
   */
  isNative(): boolean

  /**
   * Returns a boolean indicating the current call is a top-level invocation.
   *
   * @return {boolean} `true` if call is top-level invocation
   */
  isToplevel(): boolean
}

export type { CallSite as default }
