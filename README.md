# errnode

[![github release](https://img.shields.io/github/v/release/flex-development/errnode.svg?include_prereleases\&sort=semver)](https://github.com/flex-development/errnode/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/errnode.svg)](https://npmjs.com/package/@flex-development/errnode)
[![codecov](https://codecov.io/gh/flex-development/errnode/graph/badge.svg?token=e2gnycTeI9)](https://codecov.io/gh/flex-development/errnode)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/errnode.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits\&logoColor=ffffff)](https://conventionalcommits.org)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript\&logoColor=ffffff)](https://typescriptlang.org)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat\&logo=vitest\&logoColor=ffffff)](https://vitest.dev)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat\&logo=yarn\&logoColor=ffffff)](https://yarnpkg.com)

Universal API for creating [Node.js errors][errors]

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`E`](#ecode-base-message)
  - [`codes`](#codes)
  - [`determineSpecificType(value)`](#determinespecifictypevalue)
  - [`errors`](#errors)
  - [`formatList(list[, type])`](#formatlistlist-type)
  - [`hideStackFrames(fn)`](#hidestackframesfn)
  - [`isNodeError(value)`](#isnodeerrorvalue)
  - [`syscodes`](#syscodes)
- [Types](#types)
  - [`Code`](#code)
  - [`ErrnoException<[T]>`](#errnoexceptiont)
  - [`MessageFn<[T][, Args]>`](#messagefnt-args)
  - [`NodeErrorConstructor<[T][, Args]>`](#nodeerrorconstructort-args)
  - [`NodeErrorMap`](#nodeerrormap)
  - [`NodeError<[T]>`](#nodeerrort)
  - [`SystemCode`](#systemcode)
  - [`SystemErrorMap`](#systemerrormap)
- [Contribute](#contribute)

## What is this?

This package provides a universal API for creating [Node.js errors][errors].

## When should I use this?

This package is designed to help developers build [ponyfills][ponyfill], as well as more verbose tools like
[`mlly`][mlly], by providing a set of utilities and constructor functions for creating [Node.js errors][errors].

## Install

This package is [ESM only][esm].

In Node.js (version 18+) with [yarn][]:

```sh
yarn add @flex-development/errnode
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { ERR_MODULE_NOT_FOUND } from 'https://esm.sh/@flex-development/errnode'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { ERR_MODULE_NOT_FOUND } from 'https://esm.sh/@flex-development/errnode'
</script>
```

## Use

Say we have the file [`example.mjs`](./example.mjs):

```ts
import { ERR_INVALID_ARG_TYPE, isNodeError } from '@flex-development/errnode'

/**
 * Ensure `value` is a string.
 *
 * @see {@linkcode ErrInvalidArgType}
 *
 * @param {unknown} value
 *  Value supplied by user
 * @param {string} name
 *  Name of invalid argument or property
 * @return {value is string}
 *  `true` if `value` is a string
 * @throws {import('@flex-development/errnode').ErrInvalidArgType}
 *  If `value` is not a string
 */
function validateString(value, name) {
  if (typeof value === 'string') return true
  throw new ERR_INVALID_ARG_TYPE(name, 'string', value)
}

try {
  validateString(null, 'path')
} catch (e) {
  console.log('isNodeError:', isNodeError(e))
  console.log('TypeError:', e instanceof TypeError, '\n')
  throw e
}
```

...running `node example.mjs` yields:

```sh
isNodeError: true
TypeError: true

file:///node_modules/@flex-development/errnode/dist/internal/stack-trace.mjs:9
  Error.captureStackTrace(error);
        ^

TypeError: The 'path' argument must be of type string. Received null
    at __node_internal_captureLargerStackTrace (file:///node_modules/@flex-development/errnode/dist/internal/stack-trace.mjs:9:9)
    at new NodeError (file:///node_modules/@flex-development/errnode/dist/e.mjs:50:45)
    at validateString (file:///example.mjs:19:9)
    at file:///example.mjs:23:3
    at ModuleJob.run (node:internal/modules/esm/module_job:234:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:473:24)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:123:5) {
  code: 'ERR_INVALID_ARG_TYPE'
}
```

## API

This package exports the following identifiers:

- [`E`](#ecode-base-message)
- [`codes`](#codes)
- [`determineSpecificType`](#determinespecifictypevalue)
- [`errors`](#errors)
  - `ERR_ENCODING_NOT_SUPPORTED`
  - `ERR_IMPORT_ASSERTION_TYPE_FAILED`
  - `ERR_IMPORT_ASSERTION_TYPE_MISSING`
  - `ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED`
  - `ERR_INCOMPATIBLE_OPTION_PAIR`
  - `ERR_INVALID_ARG_TYPE`
  - `ERR_INVALID_ARG_VALUE`
  - `ERR_INVALID_MODULE_SPECIFIER`
  - `ERR_INVALID_PACKAGE_CONFIG`
  - `ERR_INVALID_PACKAGE_TARGET`
  - `ERR_INVALID_RETURN_VALUE`
  - `ERR_INVALID_URL`
  - `ERR_METHOD_NOT_IMPLEMENTED`
  - `ERR_MISSING_OPTION`
  - `ERR_MODULE_NOT_FOUND`
  - `ERR_NETWORK_IMPORT_DISALLOWED`
  - `ERR_OPERATION_FAILED`
  - `ERR_PACKAGE_IMPORT_NOT_DEFINED`
  - `ERR_PACKAGE_PATH_NOT_EXPORTED`
  - `ERR_UNHANDLED_ERROR`
  - `ERR_UNKNOWN_BUILTIN_MODULE`
  - `ERR_UNKNOWN_ENCODING`
  - `ERR_UNKNOWN_FILE_EXTENSION`
  - `ERR_UNKNOWN_MODULE_FORMAT`
  - `ERR_UNSUPPORTED_DIR_IMPORT`
  - `ERR_UNSUPPORTED_ESM_URL_SCHEME`
  - `ERR_UNSUPPORTED_RESOLVE_REQUEST`
- [`formatList`](#formatlistlist-type)
- [`hideStackFrames`](#hidestackframesfn)
- [`isNodeError`](#isnodeerrorvalue)
- [`syscodes`](#syscodes)

There is no default export.

### Errors

Constructor functions representing [Node.js error codes][nodejs-error-codes]. Constructor arguments are used to build
error messages.

Errors (and their types) can be imported individually:

```ts
import {
  ERR_INVALID_MODULE_SPECIFIER,
  ERR_INVALID_PACKAGE_CONFIG,
  ERR_INVALID_PACKAGE_TARGET,
  ERR_MODULE_NOT_FOUND,
  ERR_PACKAGE_IMPORT_NOT_DEFINED,
  ERR_PACKAGE_PATH_NOT_EXPORTED,
  ERR_UNSUPPORTED_DIR_IMPORT,
  type ErrInvalidModuleSpecifier,
  type ErrInvalidModuleSpecifierArgs,
  type ErrInvalidModuleSpecifierConstructor,
  type ErrInvalidPackageConfig,
  type ErrInvalidPackageConfigArgs,
  type ErrInvalidPackageConfigConstructor,
  type ErrInvalidPackageTarget,
  type ErrInvalidPackageTargetArgs,
  type ErrInvalidPackageTargetConstructor,
  type ErrModuleNotFound,
  type ErrModuleNotFoundArgs,
  type ErrModuleNotFoundConstructor,
  type ErrPackageImportNotDefined,
  type ErrPackageImportNotDefinedArgs,
  type ErrPackageImportNotDefinedConstructor,
  type ErrPackagePathNotExported,
  type ErrPackagePathNotExportedArgs,
  type ErrPackagePathNotExportedConstructor,
  type ErrUnsupportedDirImport,
  type ErrUnsupportedDirImportConstructor
 } from '@flex-development/errnode'
```

...or all at once using the `errors` export:

```ts
import { errors } from '@flex-development/errnode'
```

See the [source code](./src/errors) for documentation.

**Note**: This package **does not export a constructor for every error**. Submit a feature request (or pull request if
you're up for the challenge \:wink:) to add a constructor.
[`E`](#ecode-base-message) can be used instead, however.

### `E(code, Base, message)`

Create a Node.js error constructor.

Constructor arguments are passed to [`format`][format] if the error `message` is a string, or `message` itself if it is
a function. Message functions are also called with the new Node.js error instance as `this`.

#### Signatures

```ts
function E<T extends NodeErrorConstructor>(
  code: T['prototype']['code'],
  Base: ErrorConstructor,
  message: MessageFn<T['prototype'], Parameters<T>> | string
): T

function E<T extends NodeError, Args extends any[] = any[]>(
  code: T['code'],
  Base: ErrorConstructor,
  message: MessageFn<T, Args>
): NodeErrorConstructor<T, Args>
```

#### Parameters

- `code` ([`Code`](#code))
  — error code
- `Base` (`ErrorConstructor`)
  — base class
- `message` ([`MessageFn`](#messagefnt-args) | `string`)
  — error message string or function

#### Returns

([`NodeErrorConstructor`](#nodeerrorconstructort-args)) [`NodeError`](#nodeerrort) constructor.

### `codes`

Node.js error codes.

See [`NODE_VERSIONS`](./__tests__/utils/node-versions.ts) for a list of supported Node.js versions.

### `determineSpecificType(value)`

Determine the specific type of a value for type-mismatch errors.

#### Parameters

- `value` (`unknown`)
  — value to check

#### Returns

(`string`) specific type of `value`.

### `formatList(list[, type])`

Create a list string in the form `'A and B'` or `'A, B, ..., and Z`.

#### Parameters

- `list` (`string | readonly string[]`)
  — list to format
- `type` (`'and' | 'or' | null | undefined`, optional)
  — list transition type to insert before last element
  - **default**: `'and'`

#### Returns

(`string`) formatted list.

### `hideStackFrames(fn)`

Remove unnecessary frames from Node.js core errors.

#### Type Parameters

- `T` ([`Fn`][fn])
  — function to wrap

#### Parameters

- `fn` (`T`)
  — function to wrap

#### Returns

(`T`) the wrapped function.

### `isNodeError(value)`

Check if `value` is a [`NodeError`](#nodeerrort).

#### Parameters

- `value` (`unknown`)
  — value to check

#### Returns

(`value is NodeError`) `true` if `value` is `NodeError`, `false` otherwise.

### `syscodes`

System error codes.

See [`NODE_VERSIONS`](./__tests__/utils/node-versions.ts) for a list of supported Node.js versions.

## Types

This package is fully typed with [TypeScript][].

### `Code`

Union of registered codes that can occur where a node error code is expected (TypeScript type).

To register new codes, augment [`NodeErrorMap`](#nodeerrormap). They will be added to this union automatically.

```ts
type Code = Extract<keyof NodeErrorMap, string>
```

### `ErrnoException<[T]>`

Node.js exception object (TypeScript interface).

#### Type Parameters

- `T` ([`SystemCode`](#systemcode), optional)
  — system error code
  - **default**: `SystemCode`

#### Extends

- `Error`

#### Properties

- `code` (`T`)
  — system error code
- `errno` (`number`)
  — libuv error number
- `message` (`string`)
  — error message, always prefixed by `syscall` and `code`
- `path?` (`string | undefined`)
  — relevant invalid pathname
- `syscall` (`string`)
  — failed [syscall][] description

### `MessageFn<[T][, Args]>`

Build an error message.

#### Type Parameters

- `T` ([`NodeError`](#nodeerrort), optional)
  — node error
  - **default**: `NodeError`
- `Args` (`readonly any[]`, optional)
  — message arguments
  - **default**: `any[]`

#### Parameters

- `this` (`T`)
  — node error object
- `...args` (`Args`)
  — message arguments

#### Returns

(`string`) error message.

### `NodeErrorConstructor<[T][, Args]>`

Node.js error constructor (TypeScript interface).

#### Type Parameters

- `T` ([`NodeError`](#nodeerrort), optional)
  — node error
  - **default**: `NodeError`
- `Args` (`readonly any[]`, optional)
  — message arguments
  - **default**: `any[]`

#### Signatures

- `new (...args: Args): T`
- `(...args: Args): T`

#### Properties

- `prototype` (`T`)
  — node.js error prototype

### `NodeErrorMap`

Registry of Node.js error codes (TypeScript interface).

When developing utilities that use more codes, augment `NodeErrorMap` to register those codes:

```ts
declare module '@flex-development/errnode' {
  interface NodeErrorMap {
    ERR_CUSTOM: true
  }
}
```

### `NodeError<[T]>`

Node.js error object (TypeScript interface).

#### Type Parameters

- `T` ([`Code`](#code), optional)
  — error code
  - **default**: `Code`

#### Extends

- `Error`

#### Properties

- `code` (`T`)
  — error code
- `toString` (`() => string`)
  — get a string representation of the error

### `SystemCode`

Union of registered codes that can occur where a system error code is expected (TypeScript type).

To register new codes, augment [`SystemErrorMap`](#systemerrormap). They will be added to this union automatically.

```ts
type SystemCode = Extract<keyof SystemErrorMap, string>
```

### `SystemErrorMap`

Registry of system error codes (TypeScript interface).

When developing utilities that use more codes, augment `SystemErrorMap` to register those codes:

```ts
declare module '@flex-development/errnode' {
  interface SystemErrorMap {
    ECUSTOM: true
  }
}
```

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

This project has a [code of conduct](./CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[errors]: https://nodejs.org/api/errors.html

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[fn]: https://github.com/flex-development/tutils/blob/tutils%406.0.0-alpha.25/src/types/fn.ts

[format]: https://github.com/hildjj/node-inspect-extracted

[mlly]: https://github.com/flex-development/mlly

[nodejs-error-codes]: https://nodejs.org/api/errors.html#nodejs-error-codes

[ponyfill]: https://github.com/sindresorhus/ponyfill

[syscall]: https://man7.org/linux/man-pages/man2/syscalls.2.html

[typescript]: https://www.typescriptlang.org

[yarn]: https://yarnpkg.com
