/**
 * @file Errors - ERR_INCOMPATIBLE_OPTION_PAIR
 * @module errnode/errors/ERR_INCOMPATIBLE_OPTION_PAIR
 * @see https://github.com/nodejs/node/blob/v22.7.0/lib/internal/errors.js#L1346-L1347
 */

import E from '#e'
import { codes } from '#src/enums'
import type {
  NodeError,
  NodeErrorConstructor,
  Stringifiable
} from '#src/interfaces'

/**
 * `ERR_INCOMPATIBLE_OPTION_PAIR` schema.
 *
 * @see {@linkcode NodeError}
 * @see https://nodejs.org/api/errors.html#err_incompatible_option_pair
 *
 * @extends {NodeError<codes.ERR_INCOMPATIBLE_OPTION_PAIR>}
 * @extends {TypeError}
 */
interface ErrIncompatibleOptionPair
  extends NodeError<codes.ERR_INCOMPATIBLE_OPTION_PAIR>, TypeError {}

/**
 * `ERR_INCOMPATIBLE_OPTION_PAIR` message arguments.
 *
 * @see {@linkcode Stringifiable}
 */
type Args = [option1: Stringifiable, option2: Stringifiable]

/**
 * `ERR_INCOMPATIBLE_OPTION_PAIR` constructor.
 *
 * @see {@linkcode Args}
 * @see {@linkcode ErrIncompatibleOptionPair}
 * @see {@linkcode NodeErrorConstructor}
 *
 * @extends {NodeErrorConstructor<ErrIncompatibleOptionPair,Args>}
 */
interface ErrIncompatibleOptionPairConstructor
  extends NodeErrorConstructor<ErrIncompatibleOptionPair, Args> {
  /**
   * Create a new `ERR_INCOMPATIBLE_OPTION_PAIR` error.
   *
   * @see {@linkcode ErrIncompatibleOptionPair}
   * @see {@linkcode Stringifiable}
   *
   * @param {Stringifiable} option1
   *  Option that cannot be used
   * @param {Stringifiable} option2
   *  Option that is incompatible with `option1`
   * @return {ErrIncompatibleOptionPair}
   */
  new (
    option1: Stringifiable,
    option2: Stringifiable
  ): ErrIncompatibleOptionPair
}

/**
 * `ERR_INCOMPATIBLE_OPTION_PAIR` model.
 *
 * Thrown when an option pair is incompatible with each other and cannot be used
 * at the same time.
 *
 * @see {@linkcode ErrIncompatibleOptionPairConstructor}
 *
 * @type {ErrIncompatibleOptionPairConstructor}
 *
 * @class
 */
const ERR_INCOMPATIBLE_OPTION_PAIR: ErrIncompatibleOptionPairConstructor = E(
  codes.ERR_INCOMPATIBLE_OPTION_PAIR,
  TypeError,
  'Option \'%s\' cannot be used in combination with option \'%s\''
)

export {
  ERR_INCOMPATIBLE_OPTION_PAIR as default,
  type ErrIncompatibleOptionPair,
  type Args as ErrIncompatibleOptionPairArgs,
  type ErrIncompatibleOptionPairConstructor
}
