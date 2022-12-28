# errnode

[![npm](https://img.shields.io/npm/v/@flex-development/errnode.svg)](https://npmjs.com/package/@flex-development/errnode)
[![license](https://img.shields.io/github/license/flex-development/errnode.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript&logoColor=ffffff)](https://typescriptlang.org/)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)](https://vitest.dev/)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat&logo=yarn&logoColor=ffffff)](https://yarnpkg.com/)

Create [Node.js errors][1]

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
- [Types](#types)
  - [Enums](#enums)
  - [Type Defintions](#type-definitions)
- [Contribute](#contribute)

## What is this?

This package provides an API for creating [Node.js errors][1].

## When should I use this?

This package is designed to help developers build [ponyfills][2] and utilities like [`mlly`][3] by providing a universal
API for creating [Node.js errors][1].

### Differences between Node.js

- **Does not capture larger stack traces**: The Node.js API temporarily overrides [`Error.stackTraceLimit`][4] to
  [capture larger stack traces][5]. This is **not** implemented to maintain browser compatibility.

## Install

This package is [ESM only][6].

```sh
yarn add @flex-development/errnode
```

From Git:

```sh
yarn add @flex-development/errnode@flex-development/errnode
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/features/protocols#git'>Git - Protocols | Yarn</a>
    &nbsp;for details on requesting a specific branch, commit, or tag.
  </small>
</blockquote>

## Use

```typescript
import {
  createNodeError,
  determineSpecificType,
  ErrorCode,
  type MessageFn,
  type NodeError,
  type NodeErrorConstructor
} from '@flex-development/errnode'
import type { OneOrMany } from '@flex-development/tutils'
import assert from 'node:assert'

/**
 * Creates an [`ERR_INVALID_ARG_TYPE`][1] message.
 *
 * [1]: https://nodejs.org/api/errors.html#err_invalid_arg_type
 *
 * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1197-L1286
 *
 * @param {string} name - Name of invalid argument or property
 * @param {OneOrMany<string>} expected - Expected type(s)
 * @param {unknown} actual - Value supplied by user
 * @return {string} Error message
 */
const msg: MessageFn<[string, OneOrMany<string>, unknown]> = (
  name: string,
  expected: OneOrMany<string>,
  actual: unknown
): string => {
  // ensure name is a string
  assert(typeof name === 'string', "'name' must be a string")

  // ensure expected is an array
  if (!Array.isArray(expected)) expected = [expected]

  /**
   * Primitive value names.
   *
   * Sorted by a rough estimate on most frequently used entries.
   *
   * @const {Set<string>} kTypes
   */
  const kTypes: Set<string> = new Set([
    'string',
    'function',
    'number',
    'object',
    'Function',
    'Object',
    'boolean',
    'bigint',
    'symbol'
  ])

  /**
   * Error message.
   *
   * @var {string} msg
   */
  let msg: string = 'The '

  // stylize invalid argument name
  msg += name.endsWith(' argument')
    ? name
    : `"${name}" ${name.includes('.') ? 'property' : 'argument'}`

  // continue building error message
  msg += ' must be '

  /**
   * Names of expected class instances.
   *
   * @const {string[]} instances
   */
  const instances: string[] = []

  /**
   * Names of other expected types.
   */
  const other: string[] = []

  /**
   * Names of expected primitive types.
   */
  const types: string[] = []

  // get expected types
  for (const value of expected) {
    assert(typeof value === 'string', '`expected` should be of type string[]')

    if (kTypes.has(value)) types.push(value.toLowerCase())
    else if (/^([A-Z][\da-z]*)+$/.exec(value)) instances.push(value)
    else other.push(value === 'object' ? 'Object' : value)
  }

  // special case: handle `object` in case other instances are allowed to
  // outline the differences between each other
  if (instances.length > 0) {
    /**
     * Position of `'object'` in {@linkcode types}.
     *
     * @const {number} pos
     */
    const pos: number = types.indexOf('object')

    // replace 'object' in types with "Object" in instances
    if (pos !== -1) {
      types.splice(pos, 1)
      instances.push('Object')
    }
  }

  // add expected primitive types to error message
  if (types.length > 0) {
    if (types.length > 2) {
      /**
       * Last primitive type name in {@linkcode types}.
       *
       * @const {string} last_type
       */
      const last_type: string = types.pop()!

      msg += `one of type ${types.join(', ')}, or ${last_type}`
    } else if (types.length === 2) {
      msg += `one of type ${types[0]} or ${types[1]}`
    } else {
      msg += `of type ${types[0]}`
    }

    if (instances.length > 0 || other.length > 0) msg += ' or '
  }

  // add expected class instances to error message
  if (instances.length > 0) {
    if (instances.length > 2) {
      /**
       * Last instance type name in {@linkcode instances}.
       *
       * @const {string} last_instance
       */
      const last_instance: string = types.pop()!

      msg += `an instance of ${instances.join(', ')}, or ${last_instance}`
    } else {
      msg += `an instance of ${instances[0]}`
      if (instances.length === 2) msg += ` or ${instances[1]}`
    }

    if (other.length > 0) msg += ' or '
  }

  // add other expected types to error message
  if (other.length > 0) {
    if (other.length > 2) {
      /**
       * Last other type name in {@linkcode other}.
       *
       * @const {string} last_other
       */
      const last_other: string = other.pop()!

      msg += `one of ${other.join(', ')}, or ${last_other}`
    } else if (other.length === 2) {
      msg += `one of ${other[0]} or ${other[1]}`
    } else {
      if (other[0]?.toLowerCase() !== other[0]) msg += 'an '
      msg += `${other[0]}`
    }
  }

  // end error message
  msg += `. Received ${determineSpecificType(actual)}`

  return msg
}

/**
 * [`ERR_INVALID_ARG_TYPE`][1] model.
 *
 * Thrown when an argument of the wrong type was passed to a Node.js API.
 *
 * [1]: https://nodejs.org/api/errors.html#err_invalid_arg_type
 *
 * @class
 * @implements {NodeError<TypeError>}
 */
const ERR_INVALID_ARG_TYPE: NodeErrorConstructor<
  TypeErrorConstructor,
  typeof msg
> = createNodeError(ErrorCode.ERR_INVALID_ARG_TYPE, TypeError, msg)

/**
 * {@linkcode ERR_INVALID_ARG_TYPE} instance.
 *
 * @const {NodeError<TypeError>} err
 */
const err: NodeError<TypeError> = new ERR_INVALID_ARG_TYPE(
  'path',
  'string',
  null
)

console.error(err)
console.debug('err instanceof TypeError:', err instanceof TypeError)
```

...running that yields:

```zsh
TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received null
    at new NodeError (file:////home/runner/work/errnode/errnode/src/create-node-error.ts:94:5)
    at file:////home/runner/work/errnode/errnode/scratch.ts:201:35
    at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:533:24)
    at async loadESM (node:internal/process/esm_loader:91:5)
    at async handleMainPromise (node:internal/modules/run_main:65:12)
err instanceof TypeError: true
```

## API

**TODO**: Update documentation.

## Types

This package is fully typed with [TypeScript][7]. It exports the following definitions:

### Enums

- [`ErrorCode`](src/enums/error-code.ts)

### Type Definitions

- [`NodeError`](src/types/node-error.ts)
- [`NodeErrorConstructor`](src/types/node-error-constructor.ts)
- [`MessageFn`](src/types/fn-message.ts)

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

[1]: https://nodejs.org/api/errors.html#nodejs-error-codes
[2]: https://github.com/sindresorhus/ponyfill
[3]: https://github.com/flex-development/mlly
[4]: https://nodejs.org/api/errors.html#errorstacktracelimit
[5]: https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L484-L496
[6]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[7]: https://www.typescriptlang.org
