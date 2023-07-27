# errnode

[![github release](https://img.shields.io/github/v/release/flex-development/errnode.svg?include_prereleases&sort=semver)](https://github.com/flex-development/errnode/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/errnode.svg)](https://npmjs.com/package/@flex-development/errnode)
[![codecov](https://codecov.io/gh/flex-development/errnode/branch/main/graph/badge.svg?token=e2gnycTeI9)](https://codecov.io/gh/flex-development/errnode)
[![license](https://img.shields.io/github/license/flex-development/errnode.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript&logoColor=ffffff)](https://typescriptlang.org/)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)](https://vitest.dev/)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat&logo=yarn&logoColor=ffffff)](https://yarnpkg.com/)

Universal API for creating [Node.js errors][1]

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
  - [Differences between Node.js](#differences-between-nodejs)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [Error Models](#error-models)
    - [`ERR_AMBIGUOUS_ARGUMENT(reason)`](#err_ambiguous_argumentname-reason)
    - [`ERR_ARG_NOT_ITERABLE(name)`](#err_arg_not_iterablename)
    - [`ERR_ASYNC_CALLBACK(name)`](#err_async_callbackname)
    - [`ERR_ILLEGAL_CONSTRUCTOR()`](#err_illegal_constructor)
    - [`ERR_IMPORT_ASSERTION_TYPE_FAILED(id, type)`](#err_import_assertion_type_failedid-type)
    - [`ERR_IMPORT_ASSERTION_TYPE_MISSING(id, type)`](#err_import_assertion_type_missingid-type)
    - [`ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED(type)`](#err_import_assertion_type_unsupportedtype)
    - [`ERR_INCOMPATIBLE_OPTION_PAIR(option1, option2)`](#err_incompatible_option_pairoption1-option2)
    - [`ERR_INVALID_ARG_TYPE(name, expected, actual)`](#err_invalid_arg_typename-expected-actual)
    - [`ERR_INVALID_ARG_VALUE(name, value[, reason])`](#err_invalid_arg_valuename-value-reason)
    - [`ERR_INVALID_MODULE_SPECIFIER(request[, reason][, base])`](#err_invalid_module_specifierrequest-reason-base)
    - [`ERR_INVALID_PACKAGE_CONFIG(id[, base][, reason])`](#err_invalid_package_configid-base-reason)
    - [`ERR_INVALID_PACKAGE_TARGET(dir, key, target[, internal][, base])`](#err_invalid_package_targetdir-key-target-internal-base)
    - [`ERR_INVALID_RETURN_VALUE(expected, name, value)`](#err_invalid_return_valueexpected-name-value)
    - [`ERR_INVALID_URL(input)`](#err_invalid_urlinput)
    - [`ERR_METHOD_NOT_IMPLEMENTED(method)`](#err_method_not_implementedmethod)
    - [`ERR_MISSING_OPTION(option)`](#err_missing_optionoption)
    - [`ERR_MODULE_NOT_FOUND(id, base[, type])`](#err_module_not_foundid-base-type)
    - [`ERR_NETWORK_IMPORT_DISALLOWED(specifier, base, reason)`](#err_network_import_disallowedspecifier-base-reason)
    - [`ERR_OPERATION_FAILED(reason)`](#err_operation_failedreason)
    - [`ERR_PACKAGE_IMPORT_NOT_DEFINED(specifier, base[, dir])`](#err_package_import_not_definedspecifier-base-dir)
    - [`ERR_PACKAGE_PATH_NOT_EXPORTED(dir, subpath[, base])`](#err_package_path_not_exporteddir-subpath-base)
    - [`ERR_UNHANDLED_ERROR([err])`](#err_unhandled_errorerr)
    - [`ERR_UNKNOWN_BUILTIN_MODULE(name)`](#err_unknown_builtin_modulename)
    - [`ERR_UNKNOWN_ENCODING(encoding)`](#err_unknown_encodingencoding)
    - [`ERR_UNKNOWN_FILE_EXTENSION(ext, id[, suggestion])`](#err_unknown_file_extensionext-id-suggestion)
    - [`ERR_UNKNOWN_MODULE_FORMAT(format, id)`](#err_unknown_module_formatformat-id)
    - [`ERR_UNSUPPORTED_DIR_IMPORT(id, base)`](#err_unsupported_dir_importid-base)
    - [`ERR_UNSUPPORTED_ESM_URL_SCHEME(url, supported[, windows])`](#err_unsupported_esm_url_schemeurl-supported-windows)
  - [Utilities](#utilities)
    - [`createNodeError(code, Base, message)`](#createnodeerrorcode-base-message)
    - [`determineSpecificType(value)`](#determinespecifictypevalue)
- [Types](#types)
  - [Enums](#enums)
  - [Interfaces](#interfaces)
  - [Type Defintions](#type-definitions)
- [Contribute](#contribute)

## What is this?

This package provides a universal API for creating [Node.js errors][1].

## When should I use this?

This package is designed to help developers build Node.js tools like [ponyfills][2], as well as more verbose tools like
[`mlly`][3], by providing a set of utilities and constructor functions for creating [Node.js errors][1].

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
  ErrorCode,
  type MessageFn,
  type NodeError,
  type NodeErrorConstructor
} from '@flex-development/errnode'

/**
 * [`ERR_INVALID_URL`][1] schema.
 *
 * [1]: https://nodejs.org/api/errors.html#err_invalid_url
 *
 * @extends {NodeError<TypeError>}
 */
interface ErrInvalidUrl extends NodeError<TypeError> {
  /**
   * Error code.
   */
  code: ErrorCode.ERR_INVALID_URL

  /**
   * URL that failed to parse.
   *
   * @example
   *  'http://[127.0.0.1\x00c8763]:8000/'
   */
  input: string
}

/**
 * `ERR_INVALID_URL` model.
 *
 * Thrown when an invalid URL is passed to a [WHATWG][1] [`URL` constructor][2]
 * or [`url.parse()`][3] to be parsed.
 *
 * [1]: https://nodejs.org/api/url.html#the-whatwg-url-api
 * [2]: https://nodejs.org/api/url.html#new-urlinput-base
 * [3]: https://nodejs.org/api/url.html#urlparseurlstring-parsequerystring-slashesdenotehost
 *
 * @see https://nodejs.org/api/errors.html#err_invalid_url
 *
 * @class
 *
 * @param {string} input - URL that failed to parse
 * @return {ErrInvalidUrl} `TypeError` instance
 */
const ERR_INVALID_URL: NodeErrorConstructor<
  TypeErrorConstructor,
  MessageFn<[string]>,
  ErrInvalidUrl
> = createNodeError(
  ErrorCode.ERR_INVALID_URL,
  TypeError,
  /**
   * Creates an [`ERR_INVALID_URL`][1] message.
   *
   * [1]: https://nodejs.org/api/errors.html#err_invalid_url
   *
   * @see https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L1381-L1386
   *
   * @this {ErrInvalidUrl}
   *
   * @param {string} input - URL that failed to parse
   * @return {string} Error message
   */
  function msg(this: ErrInvalidUrl, input: string): string {
    this.input = input
    return 'Invalid URL'
  }
)

/**
 * URL that will fail to parse.
 *
 * @const {string} BAD_URL
 */
const BAD_URL: string = 'http://[127.0.0.1\x00c8763]:8000/'

/**
 * {@linkcode ERR_INVALID_URL} instance.
 *
 * @const {ErrInvalidUrl} err
 */
const err: ErrInvalidUrl = new ERR_INVALID_URL(BAD_URL)

console.error(err)
console.debug('err instanceof TypeError:', err instanceof TypeError)
```

...running that yields:

```zsh
TypeError [ERR_INVALID_URL]: Invalid URL
    at new NodeError (file:////home/runner/work/errnode/errnode/src/create-node-error.ts:103:5)
    at file:////home/runner/work/errnode/errnode/scratch.ts:90:28
    at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:533:24)
    at async loadESM (node:internal/process/esm_loader:91:5)
    at async handleMainPromise (node:internal/modules/run_main:65:12) {
  code: 'ERR_INVALID_URL',
  input: 'http://[127.0.0.1\x00c8763]:8000/'
}
err instanceof TypeError: true
```

## API

This package exports the following identifiers:

- [`ERR_AMBIGUOUS_ARGUMENT`](#err_ambiguous_argumentname-reason)
- [`ERR_ARG_NOT_ITERABLE`](#err_arg_not_iterablename)
- [`ERR_ASYNC_CALLBACK`](#err_async_callbackname)
- [`ERR_ILLEGAL_CONSTRUCTOR`](#err_illegal_constructor)
- [`ERR_IMPORT_ASSERTION_TYPE_FAILED`](#err_import_assertion_type_failedid-type)
- [`ERR_IMPORT_ASSERTION_TYPE_MISSING`](#err_import_assertion_type_missingid-type)
- [`ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED`](#err_import_assertion_type_unsupportedtype)
- [`ERR_INCOMPATIBLE_OPTION_PAIR`](#err_incompatible_option_pairoption1-option2)
- [`ERR_INVALID_ARG_TYPE`](#err_invalid_arg_typename-expected-actual)
- [`ERR_INVALID_ARG_VALUE`](#err_invalid_arg_valuename-value-reason)
- [`ERR_INVALID_MODULE_SPECIFIER`](#err_invalid_module_specifierrequest-reason-base)
- [`ERR_INVALID_PACKAGE_CONFIG`](#err_invalid_package_configid-base-reason)
- [`ERR_INVALID_PACKAGE_TARGET`](#err_invalid_package_targetdir-key-target-internal-base)
- [`ERR_INVALID_RETURN_VALUE`](#err_invalid_return_valueexpected-name-value)
- [`ERR_INVALID_URL`](#err_invalid_urlinput)
- [`ERR_METHOD_NOT_IMPLEMENTED`](#err_method_not_implementedmethod)
- [`ERR_MISSING_OPTION`](#err_missing_optionoption)
- [`ERR_MODULE_NOT_FOUND`](#err_module_not_foundid-base-type)
- [`ERR_NETWORK_IMPORT_DISALLOWED`](#err_network_import_disallowedspecifier-base-reason)
- [`ERR_OPERATION_FAILED`](#err_operation_failedreason)
- [`ERR_PACKAGE_IMPORT_NOT_DEFINED`](#err_package_import_not_definedspecifier-base-dir)
- [`ERR_PACKAGE_PATH_NOT_EXPORTED`](#err_package_path_not_exporteddir-subpath-base)
- [`ERR_UNHANDLED_ERROR`](#err_unhandled_errorerr)
- [`ERR_UNKNOWN_BUILTIN_MODULE`](#err_unknown_builtin_modulename)
- [`ERR_UNKNOWN_ENCODING`](#err_unknown_encodingencoding)
- [`ERR_UNKNOWN_FILE_EXTENSION`](#err_unknown_file_extensionext-id-suggestion)
- [`ERR_UNKNOWN_MODULE_FORMAT`](#err_unknown_module_formatformat-id)
- [`ERR_UNSUPPORTED_DIR_IMPORT`](#err_unsupported_dir_importid-base)
- [`ERR_UNSUPPORTED_ESM_URL_SCHEME`](#err_unsupported_esm_url_schemeurl-supported-windows)
- [`createNodeError`](#createnodeerrorcode-base-message)
- [`determineSpecificType`](#determinespecifictypevalue)
- [`errors`](#error-models)

There is no default export.

### Error Models

Constructor functions representing [Node.js error codes][7], callable with and without the `new` keyword. Constructor
arguments are used to generate error messages.

Models can be imported individually:

```typescript
import {
  ERR_INVALID_ARG_VALUE,
  ERR_INVALID_MODULE_SPECIFIER,
  ERR_INVALID_PACKAGE_CONFIG,
  ERR_INVALID_PACKAGE_TARGET,
  ERR_INVALID_URL,
  ERR_MODULE_NOT_FOUND,
  ERR_NETWORK_IMPORT_DISALLOWED,
  ERR_PACKAGE_IMPORT_NOT_DEFINED,
  ERR_PACKAGE_PATH_NOT_EXPORTED,
  ERR_UNKNOWN_FILE_EXTENSION,
  ERR_UNSUPPORTED_DIR_IMPORT,
  ERR_UNSUPPORTED_ESM_URL_SCHEME
 } from '@flex-development/errnode'
```

...or all at once using the `errors` export:

```typescript
import { errors } from '@flex-development/errnode'
```

**Note**: This package **does not export a model for every error code**. Submit a feature request (or pull request if
you're up for the challenge :wink:) to add a model. For more fine-grained control, however, use
[`createNodeError`](#createnodeerrorcode-base-message) instead.

#### `ERR_AMBIGUOUS_ARGUMENT(name, reason)`

Thrown when a function argument is being used in a way that suggests that the function signature may be misunderstood.

- `{string}` **`name`** &mdash; Name of ambiguous argument
- `{string}` **`reason`** &mdash; Reason `name` is ambiguous
- **Returns**: `{NodeError<TypeError>}`

> **Source**: [`src/models/err-ambiguous-argument.ts`](src/models/err-ambiguous-argument.ts)

#### `ERR_ARG_NOT_ITERABLE(name)`

Thrown when an iterable argument (i.e. a value that works with `for...of` loops) is required, but not provided to a
Node.js API.

- `{string}` **`name`** &mdash; Name of non-iterable argument
- **Returns**: `{NodeError<TypeError>}`

> **Source**: [`src/models/err-arg-not-iterable.ts`](src/models/err-arg-not-iterable.ts)

#### `ERR_ASYNC_CALLBACK(name)`

Thrown when an attempt is made to register something that is not a function as an `AsyncHooks` callback.

- `{string}` **`name`** &mdash; Name of argument that must be a function
- **Returns**: `{NodeError<TypeError>}`

> **Source**: [`src/models/err-async-callback.ts`](src/models/err-async-callback.ts)

#### `ERR_ILLEGAL_CONSTRUCTOR()`

Thrown when an attempt is made to construct an object using a non-public constructor.

- **Returns**: `{NodeError<TypeError>}`

> **Source**: [`src/models/err-illegal-constructor.ts`](src/models/err-illegal-constructor.ts)

#### `ERR_IMPORT_ASSERTION_TYPE_FAILED(id, type)`

Thrown when an import assertion has failed, preventing the specified module from being imported.

- `{string}` **`id`** &mdash; Id of module that cannot be imported
- `{string}` **`type`** &mdash; Invalid import assertion type
- **Returns**: `{NodeError<TypeError>}`

> **Source**: [`src/models/err-import-assertion-type-failed.ts`](src/models/err-import-assertion-type-failed.ts)

#### `ERR_IMPORT_ASSERTION_TYPE_MISSING(id, type)`

Thrown when an import assertion is missing, preventing the specified module from being imported.

- `{string}` **`id`** &mdash; Id of module that cannot be imported
- `{string}` **`type`** &mdash; Invalid import assertion type
- **Returns**: `{NodeError<TypeError>}`

> **Source**: [`src/models/err-import-assertion-type-missing.ts`](src/models/err-import-assertion-type-missing.ts)

#### `ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED(type)`

Thrown when an import assertion is not supported by a version of Node.js.

- `{string}` **`type`** &mdash; Unsupported import assertion type
- **Returns**: `{NodeError<TypeError>}`

> **Source**: [`src/models/err-import-assertion-type-unsupported.ts`](src/models/err-import-assertion-type-unsupported.ts)

#### `ERR_INCOMPATIBLE_OPTION_PAIR(option1, option2)`

Thrown when an option pair is incompatible with each other and cannot be used at the same time.

- `{string}` **`option1`** &mdash; Option that cannot be used
- `{string}` **`option2`** &mdash; Option that is incompatible with `option1`
- **Returns**: `{NodeError<TypeError>}`

> **Source**: [`src/models/err-incompatible-option-pair.ts`](src/models/err-incompatible-option-pair.ts)

#### `ERR_INVALID_ARG_TYPE(name, expected, actual)`

Thrown when an argument of the wrong type is passed to a Node.js API.

- `{string}` **`name`** &mdash; Name of invalid argument or property
- `{OneOrMany<string>}` **`expected`** &mdash; Expected type(s)
- `{unknown}` **`actual`** &mdash; Value supplied by user
- **Returns**: `{NodeError<TypeError>}`

> **Source**: [`src/models/err-invalid-arg-type.ts`](src/models/err-invalid-arg-type.ts)

#### `ERR_INVALID_ARG_VALUE(name, value[, reason])`

Thrown when an invalid or unsupported value is passed for a given argument or property.

- `{string}` **`name`** &mdash; Name of invalid argument or property
- `{unknown}` **`value`** &mdash; Value supplied by user
- `{string?}` **`[reason='is invalid']`** &mdash; Reason `value` is invalid
- **Returns**: `{NodeError<TypeError>}`

> **Source**: [`src/models/err-invalid-arg-value.ts`](src/models/err-invalid-arg-value.ts)

#### `ERR_INVALID_MODULE_SPECIFIER(request[, reason][, base])`

Thrown when an imported module string is an invalid URL, package name, or package subpath specifier.

- `{string}` **`request`** &mdash; Invalid module specifier
- `{string?}` **`[reason='']`** &mdash; Reason `request` is invalid
- `{string?}` **`[base='']`** &mdash; Id of module `request` was imported from
- **Returns**: `{NodeError<TypeError>}`

> **Source**: [`src/models/err-invalid-module-specifier.ts`](src/models/err-invalid-module-specifier.ts)

#### `ERR_INVALID_PACKAGE_CONFIG(id[, base][, reason])`

Thrown when a [`package.json`][8] file fails parsing.

- `{string}` **`id`** &mdash; Location of invalid `package.json` file
- `{string?}` **`[base='']`** &mdash; Id of module being imported. May also include where module is being imported from
- `{string?}` **`[reason='']`** &mdash; Reason package config is invalid
- **Returns**: `{NodeError}`

> **Source**: [`src/models/err-invalid-package-config.ts`](src/models/err-invalid-package-config.ts)

#### `ERR_INVALID_PACKAGE_TARGET(dir, key, target[, internal][, base])`

Thrown when a `package.json` [`"exports"`][9] or [`"imports"`][10] field contains an invalid target mapping value for
the attempted module resolution.

- `{string}` **`dir`** &mdash; Id of directory containing `package.json`
- `{string}` **`key`** &mdash; `"exports"` or `"imports"` key
- `{unknown}` **`target`** &mdash; Invalid package target
- `{boolean?}` **`[internal=false]`** &mdash; `target` is `"imports"`?
- `{string?}` **`[base='']`** &mdash; Id of module `package.json` was imported from
- **Returns**: `{NodeError}`

> **Source**: [`src/models/err-invalid-package-target.ts`](src/models/err-invalid-package-target.ts)

#### `ERR_INVALID_RETURN_VALUE(expected, name, value)`

Thrown when a function does not return an expected value type on execution, such as when a function is expected to
return a promise.

- `{string}` **`expected`** &mdash; Expected return value type
- `{string}` **`name`** &mdash; Name of function that returned invalid value type
- `{unknown}` **`value`** &mdash; Value supplied by user
- **Returns**: `{NodeError<TypeError>}`

> **Source**: [`src/models/err-invalid-return-value.ts`](src/models/err-invalid-return-value.ts)

#### `ERR_INVALID_URL(input)`

Thrown when an invalid URL is passed to a [WHATWG][11] [`URL` constructor][12] or [`url.parse()`][13] to be parsed.

- `{string}` **`input`** &mdash; URL that failed to parse
- **Returns**: `{ErrInvalidUrl}`

> **Source**: [`src/models/err-invalid-url.ts`](src/models/err-invalid-url.ts)

#### `ERR_METHOD_NOT_IMPLEMENTED(method)`

Thrown when a method is required but not implemented.

- `{string}` **`method`** &mdash; Method name
- **Returns**: `{NodeError}`

> **Source**: [`src/models/err-method-not-implemented.ts`](src/models/err-method-not-implemented.ts)

#### `ERR_MISSING_OPTION(option)`

Thrown when a required option is missing. For APIs that accept options objects, some options might be mandatory.

- `{string}` **`option`** &mdash; Option name
- **Returns**: `{NodeError<TypeError>}`

> **Source**: [`src/models/err-missing-option.ts`](src/models/err-missing-option.ts)

#### `ERR_MODULE_NOT_FOUND(id, base[, type])`

Thrown when a module file cannot be resolved by the ECMAScript modules loader while attempting an `import` operation or
when loading a program entry point.

- `{string}` **`id`** &mdash; Id of missing module
- `{string}` **`base`** &mdash; Id of module `id` was imported from
- `{string?}` **`[type='package']`** &mdash; Module file type
- **Returns**: `{NodeError}`

> **Source**: [`src/models/err-module-not-found.ts`](src/models/err-module-not-found.ts)

#### `ERR_NETWORK_IMPORT_DISALLOWED(specifier, base, reason)`

Thrown when a network module attempts to load another module that it is not allowed to load.

- `{string}` **`specifier`** &mdash; Invalid module specifier
- `{string}` **`base`** &mdash; Id of module `specifier` was imported from
- `{string}` **`reason`** &mdash; Reason for error
- **Returns**: `{NodeError}`

> **Source**: [`src/models/err-network-import-disallowed.ts`](src/models/err-network-import-disallowed.ts)

#### `ERR_OPERATION_FAILED(reason)`

Thrown when an operation has failed. Typically used to signal the general failure of an asynchronous operation.

- `{string}` **`reason`** &mdash; Reason for operation failure
- **Returns**: `{NodeError}`

> **Source**: [`src/models/err-operation-failed.ts`](src/models/err-operation-failed.ts)

#### `ERR_PACKAGE_IMPORT_NOT_DEFINED(specifier, base[, dir])`

Thrown when a `package.json` [`"imports"`][10] field does not define the given package import specifier.

- `{string}` **`specifier`** &mdash; Invalid package import specifier
- `{string}` **`base`** &mdash; Id of module `specifier` was imported from
- `{string?}` **`[dir='']`** &mdash; Id of directory containing `package.json`
- **Returns**: `{NodeError<TypeError>}`

> **Source**: [`src/models/err-package-import-not-defined.ts`](src/models/err-package-import-not-defined.ts)

#### `ERR_PACKAGE_PATH_NOT_EXPORTED(dir, subpath[, base])`

Thrown when a `package.json` [`"exports"`][9] field does not export the requested subpath.

- `{string}` **`dir`** &mdash; Id of directory containing `package.json`
- `{string}` **`subpath`** &mdash; Requested subpath
- `{string?}` **`[base='']`** &mdash; Id of module `subpath` was imported from
- **Returns**: `{NodeError}`

> **Source**: [`src/models/err-package-path-not-exported.ts`](src/models/err-package-path-not-exported.ts)

#### `ERR_UNHANDLED_ERROR([err])`

Thrown when an unhandled error occurs.

- `{string?}` **`[err='']`** &mdash; Stringified error
- **Returns**: `{NodeError}`

> **Source**: [`src/models/err-unhandled-error.ts`](src/models/err-unhandled-error.ts)

#### `ERR_UNKNOWN_BUILTIN_MODULE(name)`

Thrown when an unknown [builtin module][14] is encountered.

- `{string}` **`name`** &mdash; Module name
- **Returns**: `{NodeError}`

> **Source**: [`src/models/err-unknown-builtin-module.ts`](src/models/err-unknown-builtin-module.ts)

#### `ERR_UNKNOWN_ENCODING(encoding)`

Thrown when an invalid or unknown encoding option is passed to a Node.js API.

- `{string}` **`encoding`** &mdash; Invalid or unknown encoding
- **Returns**: `{NodeError<TypeError>}`

> **Source**: [`src/models/err-unknown-encoding.ts`](src/models/err-unknown-encoding.ts)

#### `ERR_UNKNOWN_FILE_EXTENSION(ext, id[, suggestion])`

Thrown when an attempt is made to load a module with an unknown or unsupported file extension.

- `{string}` **`ext`** &mdash; Unknown or unsupported file extension
- `{string}` **`id`** &mdash; Id of module containing `ext`
- `{string?}` **`[suggestion='']`** &mdash; Recommended fix
- **Returns**: `{NodeError<TypeError>}`

> **Source**: [`src/models/err-unknown-file-extension.ts`](src/models/err-unknown-file-extension.ts)

#### `ERR_UNKNOWN_MODULE_FORMAT(format, id)`

Thrown when an attempt is made to load a module with an unknown or unsupported format.

- `{string}` **`format`** &mdash; Unknown or unsupported format
- `{string}` **`id`** &mdash; Id of module with `format`
- **Returns**: `{NodeError<RangeError>}`

> **Source**: [`src/models/err-unknown-module-format.ts`](src/models/err-unknown-module-format.ts)

#### `ERR_UNSUPPORTED_DIR_IMPORT(id, base)`

Thrown when a directory URL is `import`ed.

- `{string}` **`id`** &mdash; Module id of directory
- `{string}` **`base`** &mdash; Id of module `id` was imported from
- **Returns**: `{NodeError}`

> **Source**: [`src/models/err-unsupported-dir-import.ts`](src/models/err-unsupported-dir-import.ts)

#### `ERR_UNSUPPORTED_ESM_URL_SCHEME(url, supported[, windows])`

Thrown when an unsupported URL scheme is used in an `import` statement. URL schemes other than `file` and `data` are unsupported.

- `{URL}` **`url`** &mdash; URL containing unsupported scheme
- `{string[]}` **`supported`** &mdash; Supported URL schemes
- `{boolean?}` **`[windows=false]`** &mdash; Windows operating system?
- **Returns**: `{NodeError}`

> **Source**: [`src/models/err-unsupported-esm-url-scheme.ts`](src/models/err-unsupported-esm-url-scheme.ts)

### Utilities

#### `createNodeError(code, Base, message)`

Creates a Node.js error constructor.

If the given error `message` is a function, constructor arguments are passed to `message`. If the `message` is a string,
constructor arguments are passed to [`util.format`][15] instead.

- `{ErrorCode}` **`code`** &mdash; Node.js error code
- `{B extends ErrorConstructor}` **`Base`** &mdash; Error base class
- `{M extends MessageFn | unknown[] | string}` **`message`** &mdash; Error message or message function
- **Returns**: `{NodeErrorConstructor<B, M>}` `NodeError` constructor

> **Source**: [`src/create-node-error.ts`](src/create-node-error.ts)

#### `determineSpecificType(value)`

Determines the specific type of a value for type-mismatch errors.

- `{unknown}` **`value`** &mdash; Value to evaluate
- **Returns**: `{string}` Specific type of `value`

> **Source**: [`src/determine-specific-type.ts`](src/determine-specific-type.ts)

## Types

This package is fully typed with [TypeScript][16]. It exports the following definitions:

### Enums

- [`ErrorCode`](src/enums/error-code.ts)
- [`SystemErrorCode`](src/enums/error-code-system.ts)

### Interfaces

- [`ErrInvalidUrl`](src/interfaces/err-invalid-url.ts)
- [`ErrnoException`](src/interfaces/errno-exception.ts)

### Type Definitions

- [`NodeError`](src/types/node-error.ts)
- [`NodeErrorConstructor`](src/types/node-error-constructor.ts)
- [`MessageFn`](src/types/fn-message.ts)

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

[1]: https://nodejs.org/api/errors.html
[2]: https://github.com/sindresorhus/ponyfill
[3]: https://github.com/flex-development/mlly
[4]: https://nodejs.org/api/errors.html#errorstacktracelimit
[5]: https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L484-L496
[6]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[7]: https://nodejs.org/api/errors.html#nodejs-error-codes
[8]: https://nodejs.org/api/packages.html#nodejs-packagejson-field-definitions
[9]: https://nodejs.org/api/packages.html#exports
[10]: https://nodejs.org/api/packages.html#imports
[11]: https://nodejs.org/api/url.html#the-whatwg-url-api
[12]: https://nodejs.org/api/url.html#new-urlinput-base
[13]: https://nodejs.org/api/url.html#urlparseurlstring-parsequerystring-slashesdenotehost
[14]: https://nodejs.org/api/module.html#modulebuiltinmodules
[15]: https://nodejs.org/api/util.html#utilformatformat-args
[16]: https://www.typescriptlang.org
