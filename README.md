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

**TODO**: Update documentation.

## API

**TODO**: Update documentation.

## Types

This package is fully typed with [TypeScript][7].

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

[1]: https://nodejs.org/api/errors.html#nodejs-error-codes
[2]: https://github.com/sindresorhus/ponyfill
[3]: https://github.com/flex-development/mlly
[4]: https://nodejs.org/api/errors.html#errorstacktracelimit
[5]: https://github.com/nodejs/node/blob/v19.3.0/lib/internal/errors.js#L484-L496
[6]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[7]: https://www.typescriptlang.org
