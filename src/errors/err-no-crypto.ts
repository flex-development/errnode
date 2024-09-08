/**
 * @file Errors - ERR_NO_CRYPTO
 * @module errnode/errors/ERR_NO_CRYPTO
 * @see https://github.com/nodejs/node/blob/v22.8.0/lib/internal/errors.js#L1603-L1604
 */

import E from '#e'
import { codes } from '#src/enums'
import type { NodeError, NodeErrorConstructor } from '#src/interfaces'

/**
 * `ERR_NO_CRYPTO` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_no_crypto
 *
 * @extends {NodeError<codes.ERR_NO_CRYPTO>}
 */
interface ErrNoCrypto extends NodeError<codes.ERR_NO_CRYPTO> {}

/**
 * `ERR_NO_CRYPTO` message arguments.
 */
type Args = []

/**
 * `ERR_NO_CRYPTO` constructor.
 *
 * @see {@linkcode ErrNoCrypto}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrNoCrypto,Args>}
 */
interface ErrNoCryptoConstructor
  extends NodeErrorConstructor<ErrNoCrypto, Args> {
  /**
   * Create a new `ERR_NO_CRYPTO` error.
   *
   * @see {@linkcode ErrNoCrypto}
   *
   * @return {ErrNoCrypto}
   */
  new (): ErrNoCrypto
}

/**
 * `ERR_NO_CRYPTO` model.
 *
 * Thrown when an attempt was made to use crypto features while Node.js was not
 * compiled with OpenSSL crypto support.
 *
 * @see {@linkcode ErrNoCryptoConstructor}
 *
 * @type {ErrNoCryptoConstructor}
 *
 * @class
 */
const ERR_NO_CRYPTO: ErrNoCryptoConstructor = E(
  codes.ERR_NO_CRYPTO,
  Error,
  'Node.js is not compiled with OpenSSL crypto support'
)

export {
  ERR_NO_CRYPTO as default,
  type ErrNoCrypto,
  type Args as ErrNoCryptoArgs,
  type ErrNoCryptoConstructor
}
