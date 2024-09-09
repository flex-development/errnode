/**
 * @file Errors - ERR_UNSUPPORTED_RESOLVE_REQUEST
 * @module errnode/errors/ERR_UNSUPPORTED_RESOLVE_REQUEST
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1839-L1841
 */

import E from '#e'
import { codes } from '#src/enums'
import type {
  NodeError,
  NodeErrorConstructor,
  Stringifiable
} from '#src/interfaces'

/**
 * `ERR_UNSUPPORTED_RESOLVE_REQUEST` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_unsupported_resolve_request
 *
 * @extends {NodeError<codes.ERR_UNSUPPORTED_RESOLVE_REQUEST>}
 * @extends {TypeError}
 */
interface ErrUnsupportedResolveRequest
  extends NodeError<codes.ERR_UNSUPPORTED_RESOLVE_REQUEST>, TypeError {}

/**
 * `ERR_UNSUPPORTED_RESOLVE_REQUEST` message arguments.
 *
 * @see {@linkcode Stringifiable}
 */
type Args = [specifier: Stringifiable, base: Stringifiable]

/**
 * `ERR_UNSUPPORTED_RESOLVE_REQUEST` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrUnsupportedResolveRequest}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrUnsupportedResolveRequest,Args>}
 */
interface ErrUnsupportedResolveRequestConstructor
  extends NodeErrorConstructor<ErrUnsupportedResolveRequest, Args> {
  /**
   * Create a new `ERR_UNSUPPORTED_RESOLVE_REQUEST` error.
   *
   * @see {@linkcode ErrUnsupportedResolveRequest}
   * @see {@linkcode Stringifiable}
   *
   * @param {Stringifiable} specifier
   *  The module specifier that failed to resolve
   * @param {Stringifiable} base
   *  Parent module id
   * @return {ErrUnsupportedResolveRequest}
   */
  new (
    specifier: Stringifiable,
    base: Stringifiable
  ): ErrUnsupportedResolveRequest
}

/**
 * `ERR_UNSUPPORTED_RESOLVE_REQUEST` model.
 *
 * Thrown when an attempt is made to resolve an invalid module referrer. This
 * can happen when importing or calling `import.meta.resolve()` with either:
 * - a bare specifier that is not a builtin module from a module whose URL
 *   scheme is not file.
 * - a [relative URL][relative-url] from a module whose URL scheme is not a
 *   [special scheme][special-scheme].
 *
 * [relative-url]: https://url.spec.whatwg.org/#relative-url-string
 * [special-scheme]: https://url.spec.whatwg.org/#special-scheme
 *
 * @see {@linkcode ErrUnsupportedResolveRequestConstructor}
 *
 * @type {ErrUnsupportedResolveRequestConstructor}
 *
 * @class
 */
const ERR_UNSUPPORTED_RESOLVE_REQUEST: ErrUnsupportedResolveRequestConstructor =
  E(
    codes.ERR_UNSUPPORTED_RESOLVE_REQUEST,
    TypeError,
    'Failed to resolve module specifier "%s" from "%s": Invalid relative URL or base scheme is not hierarchical.'
  )

export {
  ERR_UNSUPPORTED_RESOLVE_REQUEST as default,
  type ErrUnsupportedResolveRequest,
  type Args as ErrUnsupportedResolveRequestArgs,
  type ErrUnsupportedResolveRequestConstructor
}
