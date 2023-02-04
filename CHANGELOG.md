## [1.5.0](https://github.com/flex-development/errnode/compare/1.4.0...1.5.0) (2023-02-03)


### :package: Build

* **deps-dev:** bump @flex-development/mlly from 1.0.0-alpha.7 to 1.0.0-alpha.9 ([b8f27f5](https://github.com/flex-development/errnode/commit/b8f27f5bfb3543afc62abd98f6c03424cb62ca35))
* **deps-dev:** bump typescript from 5.0.0-dev.20221215 to 5.0.0-dev.20230128 ([7cb02b0](https://github.com/flex-development/errnode/commit/7cb02b068ea25e7e99a520531b7f42e50a097e40))
* **deps-dev:** cleanup changelog deps ([4107ef9](https://github.com/flex-development/errnode/commit/4107ef974e47943d4234d45566058538573c0b1b))
* **deps:** bump @flex-development/tutils from 6.0.0-alpha.9 to 6.0.0-alpha.10 ([e00da7f](https://github.com/flex-development/errnode/commit/e00da7ff7ccdd751cf46dd9f362a6ee86422d829))
* **nvm:** bump node from 16 to 19 ([d28f76c](https://github.com/flex-development/errnode/commit/d28f76caecef2f8bb3f5c06ddc793d06daee25f5))


### :robot: Continuous Integration

* **deps:** bump actions/cache from 3.2.2 to 3.2.3 ([4d1eb64](https://github.com/flex-development/errnode/commit/4d1eb645263ea9d5b7f5b987d856f1765bc55053)), closes [#22](https://github.com/flex-development/errnode/issues/22)
* **deps:** Bump actions/github-script from 6.3.3 to 6.4.0 ([#39](https://github.com/flex-development/errnode/issues/39)) ([ebce7da](https://github.com/flex-development/errnode/commit/ebce7da8698f61e7fc777bd858826689e4f4a926))
* **deps:** bump actions/setup-node from 3.5.1 to 3.6.0 ([464efa8](https://github.com/flex-development/errnode/commit/464efa8fd4549570b1b92da2a37b0700b4000d9e)), closes [#16](https://github.com/flex-development/errnode/issues/16)
* **deps:** bump actions/upload-artifact from 3.1.1 to 3.1.2 ([de257af](https://github.com/flex-development/errnode/commit/de257af10bf3b90a9e9bb1c67d4f7774f29fd1da)), closes [#17](https://github.com/flex-development/errnode/issues/17)
* **deps:** Bump dependabot/fetch-metadata from 1.3.5 to 1.3.6 ([#37](https://github.com/flex-development/errnode/issues/37)) ([8e43151](https://github.com/flex-development/errnode/commit/8e4315148183e9ef50322c1b876d0474704ac03c))
* **workflows:** [`approve-pr`] refactor approval step conditional ([f13faa4](https://github.com/flex-development/errnode/commit/f13faa4bbaa29a3d463716314d8e630e68392df1))
* **workflows:** [`ci`] `jobs.setup` -> `jobs.metadata` ([49edebc](https://github.com/flex-development/errnode/commit/49edebc38a1bf72ca19e1acfba4c659403cb9dca))
* **workflows:** [`ci`] add `version` output to `metadata` job ([3079ae4](https://github.com/flex-development/errnode/commit/3079ae4f44aedae9e08d4bd6563ba78d0ee3a31a))
* **workflows:** [`ci`] make typescript matrix dynamic ([8f3d76b](https://github.com/flex-development/errnode/commit/8f3d76bfa3ee85c7621ae49307ed6fa1b6ba4117))
* **workflows:** [`ci`] refactor `metadata` job conditional ([c1dc67b](https://github.com/flex-development/errnode/commit/c1dc67b4dd1073d239be8a685984d11232383c26))
* **workflows:** [`ci`] skip workflow run for [@dependabot](https://github.com/dependabot) on `push` ([46130b7](https://github.com/flex-development/errnode/commit/46130b7c5f92f55307cbf70675fd1d7103f2f82d))
* **workflows:** [`ci`] skip workflow run for [@flexdevelopment](https://github.com/flexdevelopment) on `push` ([b6aab62](https://github.com/flex-development/errnode/commit/b6aab6219eecbaf16c4856b84533704ecc445d1f))
* **workflows:** [`integrity`] update `pull_request` event activity types ([c64ee0f](https://github.com/flex-development/errnode/commit/c64ee0fc330bbf8277c57dc0cf6b9fee64b51bd6))
* **workflows:** [`typescript-canary`] add `tsconfig.json` prep step ([bd26e5d](https://github.com/flex-development/errnode/commit/bd26e5d82c9b812349bbb15e6c17ccc44072be33))


### :sparkles: Features

* **models:** `ERR_INVALID_RETURN_VALUE` ([288c689](https://github.com/flex-development/errnode/commit/288c6893e6bf389487fe92b1669af78343941ab9))


### :house_with_garden: Housekeeping

* [eslint] update rules for test files ([48af1d1](https://github.com/flex-development/errnode/commit/48af1d16781b270b667474e84067d843e04471de))
* update project architecture ([0bc284e](https://github.com/flex-development/errnode/commit/0bc284e5dd5777c43f8c7a2b85e4412a89680fe6))
* **github:** add "typescript version" input to bug report template ([c7b9e91](https://github.com/flex-development/errnode/commit/c7b9e91c58d4232b63643d1f3fde00e1fd4ff04e))
* **github:** add commit scope `nvm` ([7fac1a8](https://github.com/flex-development/errnode/commit/7fac1a8cbc801fb3bbb929f3274e360a44ce8782))
* **github:** add commit scope `spelling` ([68fb47c](https://github.com/flex-development/errnode/commit/68fb47c605cf7100517dc3a31f5260c8685fcb7f))
* **github:** cleanup reference link in `.github/funding.yml` ([aaf8e26](https://github.com/flex-development/errnode/commit/aaf8e2669b1837c19fd5038482f2db08f03dc242))
* **github:** remove "tests" section from pull request template ([01eeb03](https://github.com/flex-development/errnode/commit/01eeb03b929ee2b04b9c871d114b93adf058c371))
* **github:** remove `git@bitbucket.org` alias from sample `.gitconfig` ([e749983](https://github.com/flex-development/errnode/commit/e7499839f877ac8c1a2dae02e5f84a9d904752b7))
* **yarn:** disable transparent workspaces ([553a21c](https://github.com/flex-development/errnode/commit/553a21ccd130833e949d72e99ebaab5b946cf95d))


### :white_check_mark: Testing

* replace deprecated `faker` methods ([0dfde52](https://github.com/flex-development/errnode/commit/0dfde5217f65df0c397e48bc268fd4618270af81))

## [1.4.0](https://github.com/flex-development/errnode/compare/1.3.0...1.4.0) (2023-01-23)


### :package: Build

* **deps-dev:** Bump @commitlint/cli from 17.4.0 to 17.4.2 ([#28](https://github.com/flex-development/errnode/issues/28)) ([08ab50e](https://github.com/flex-development/errnode/commit/08ab50eb8f5dceee629b8e64a00795d4fa59e3d0))
* **deps-dev:** Bump @types/fs-extra from 11.0.0 to 11.0.1 ([#26](https://github.com/flex-development/errnode/issues/26)) ([9f378a5](https://github.com/flex-development/errnode/commit/9f378a5d401d56e60221f9d6444e42275bdb4473))
* **deps-dev:** Bump @typescript-eslint/eslint-plugin from 5.48.0 to 5.48.1 ([#23](https://github.com/flex-development/errnode/issues/23)) ([0dbfffa](https://github.com/flex-development/errnode/commit/0dbfffa8b609e08a6e74d90daa28157c374f3485))
* **deps-dev:** Bump esbuild from 0.16.16 to 0.16.17 ([#27](https://github.com/flex-development/errnode/issues/27)) ([9bdcf16](https://github.com/flex-development/errnode/commit/9bdcf1609bbba1b2a3a6ca625c5ba9b41f45848e))
* **deps-dev:** Bump esbuild from 0.16.17 to 0.17.1 ([#33](https://github.com/flex-development/errnode/issues/33)) ([24c19d9](https://github.com/flex-development/errnode/commit/24c19d9950ba2d9d65c6702a56f00c1105628caf))


### :sparkles: Features

* **models:** `ERR_UNKNOWN_BUILTIN_MODULE` ([b16995c](https://github.com/flex-development/errnode/commit/b16995c41487ae0f8b7fbe5d14f91d8ea63eb4f6))
* **models:** handle trailing separators for package directories ([0a0d256](https://github.com/flex-development/errnode/commit/0a0d25635715699f3c04e622de5ccee02c4045df))

## [1.3.0](https://github.com/flex-development/errnode/compare/1.2.0...1.3.0) (2023-01-09)


### :package: Build

* **deps-dev:** Bump @typescript-eslint/eslint-plugin from 5.47.1 to 5.48.0 ([#12](https://github.com/flex-development/errnode/issues/12)) ([417be18](https://github.com/flex-development/errnode/commit/417be18c63c1df0d04e2ad375c896ef1ad5e51d6))
* **deps-dev:** Bump @typescript-eslint/parser from 5.47.1 to 5.48.0 ([#13](https://github.com/flex-development/errnode/issues/13)) ([2ff90c2](https://github.com/flex-development/errnode/commit/2ff90c28d730f782c56ca5a12fb62d7a15709050))
* **deps-dev:** Bump eslint from 8.30.0 to 8.31.0 ([#8](https://github.com/flex-development/errnode/issues/8)) ([d5bf1de](https://github.com/flex-development/errnode/commit/d5bf1de9b81bc9a07541c477935d500bdc9b9783))
* **deps:** bump @flex-development/tutils from 6.0.0-alpha.7 to 6.0.0-alpha.9 ([bd7c873](https://github.com/flex-development/errnode/commit/bd7c87352f1b33e4cba1b38b50a3048ad4685696))


### :robot: Continuous Integration

* [[@dependabot](https://github.com/dependabot)] update ignore list for npm ecosystem ([328c0d9](https://github.com/flex-development/errnode/commit/328c0d985d0bcaaf374772726ab465fe22437cbb))
* **deps:** Bump actions/checkout from 3.2.0 to 3.3.0 ([#15](https://github.com/flex-development/errnode/issues/15)) ([e875d1a](https://github.com/flex-development/errnode/commit/e875d1a39a76c460dc9aa31e884b4dc69c368775))
* **workflows:** [`add-to-project`] run workflow when pr is synchronized ([b120810](https://github.com/flex-development/errnode/commit/b1208106a2f01bf943763633a1ee26a3d4cc0be1))
* **workflows:** [`ci`] split ci job into multiple jobs ([fc9f430](https://github.com/flex-development/errnode/commit/fc9f4305cebf141e0f7884018fa377414291ef40))
* **workflows:** [`dependabot-auto`] sign lockfile fix commit ([5433c43](https://github.com/flex-development/errnode/commit/5433c43f7d9e3a84ab4343bf6e61e18cf3845b12))
* **workflows:** add `typescript-canary` ([fbdfdb0](https://github.com/flex-development/errnode/commit/fbdfdb04f6b4a3a4f06d45e23389c239585bc0ca))


### :sparkles: Features

* **interfaces:** `ErrInvalidUrl` ([ed9d333](https://github.com/flex-development/errnode/commit/ed9d333b7640382e56ab5ae1931826f946a88422))
* **models:** `ERR_INVALID_URL` ([42d894f](https://github.com/flex-development/errnode/commit/42d894fee6e4166b6a86f83b1bc1f27f007fee8a))


### :house_with_garden: Housekeeping

* update project architecture ([9031a2e](https://github.com/flex-development/errnode/commit/9031a2e0b09ed88be5587adede78fa269251a436))
* **github:** configure sponsor button ([19a3cfe](https://github.com/flex-development/errnode/commit/19a3cfebafa55b08b1f2feb0a2066bcac897a0e1))

## [1.2.0](https://github.com/flex-development/errnode/compare/1.1.0...1.2.0) (2023-01-01)


### :package: Build

* **deps-dev:** Bump cspell from 6.18.0 to 6.18.1 ([#5](https://github.com/flex-development/errnode/issues/5)) ([292c81e](https://github.com/flex-development/errnode/commit/292c81e7eb0e147eaf82a7da2ffd1e337cedf6e1))


### :pencil: Documentation

* error models ([7404e3d](https://github.com/flex-development/errnode/commit/7404e3d0ecd0321a3630ea36111055165064882f))
* fix file overview for package entry point ([0c06c0a](https://github.com/flex-development/errnode/commit/0c06c0a0f53f05158c17220019a93f8240d564d7))


### :sparkles: Features

* **internal:** `formatList` ([1c910df](https://github.com/flex-development/errnode/commit/1c910dfa167c5f5013ef791cc286666831a51b13))
* **models:** `ERR_AMBIGUOUS_ARGUMENT` ([679af9d](https://github.com/flex-development/errnode/commit/679af9d6702d2ac25899a00bd1a807acc9ed0bfd))
* **models:** `ERR_ARG_NOT_ITERABLE` ([2404e1e](https://github.com/flex-development/errnode/commit/2404e1e52016c63098dda16f31c122059f101658))
* **models:** `ERR_ASYNC_CALLBACK` ([567b160](https://github.com/flex-development/errnode/commit/567b1600267537e6f95d0c33e21796499b7a0db3))
* **models:** `ERR_ILLEGAL_CONSTRUCTOR` ([94d0441](https://github.com/flex-development/errnode/commit/94d0441aa7ae304b98cea2c021336fd4023c886b))
* **models:** `ERR_IMPORT_ASSERTION_TYPE_FAILED` ([9807b0e](https://github.com/flex-development/errnode/commit/9807b0e78b1e8e23b80944f08be7d95ed6f6be15))
* **models:** `ERR_IMPORT_ASSERTION_TYPE_MISSING` ([73d9a5c](https://github.com/flex-development/errnode/commit/73d9a5cc03ec40ab57dd2a67bb691cc391516556))
* **models:** `ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED` ([2f6dfec](https://github.com/flex-development/errnode/commit/2f6dfecce87bb3e435c7faed8997bd04caa66303))
* **models:** `ERR_INCOMPATIBLE_OPTION_PAIR` ([573fb2f](https://github.com/flex-development/errnode/commit/573fb2f00151cd1b3636b8152ddbc164b7b484a4))
* **models:** `ERR_INVALID_ARG_TYPE` ([d3dc012](https://github.com/flex-development/errnode/commit/d3dc012771eddce76ded8e20dcb0fcec951f2e7d))
* **models:** `ERR_INVALID_ARG_VALUE` ([6637aaa](https://github.com/flex-development/errnode/commit/6637aaa8401e5b214f09459383ace76580cdd60c))
* **models:** `ERR_INVALID_MODULE_SPECIFIER` ([e64f15c](https://github.com/flex-development/errnode/commit/e64f15cb89031a9e79ae317fdd04084b732a7dd5))
* **models:** `ERR_INVALID_PACKAGE_CONFIG` ([9b8b755](https://github.com/flex-development/errnode/commit/9b8b7558a49ff99d1e8853f33aa9ac53c663bcde))
* **models:** `ERR_INVALID_PACKAGE_TARGET` ([e162298](https://github.com/flex-development/errnode/commit/e16229815de96a607ad636caf393b80cdf168d9b))
* **models:** `ERR_METHOD_NOT_IMPLEMENTED` ([f5754f0](https://github.com/flex-development/errnode/commit/f5754f037b7f40731710350cc8453613a202af26))
* **models:** `ERR_MISSING_OPTION` ([4ab0472](https://github.com/flex-development/errnode/commit/4ab0472e2a45e664c7e9e86ce972205dcfda303b))
* **models:** `ERR_MODULE_NOT_FOUND` ([028aa6b](https://github.com/flex-development/errnode/commit/028aa6b2bfbc0c84dc6069b9805989e28cff203d))
* **models:** `ERR_NETWORK_IMPORT_DISALLOWED` ([d767ad1](https://github.com/flex-development/errnode/commit/d767ad119db5ee7587b8f6bb5258348880c1e516))
* **models:** `ERR_OPERATION_FAILED` ([7a72d79](https://github.com/flex-development/errnode/commit/7a72d79e8e7c76a5e93f8894f8ac47bfc6680d3a))
* **models:** `ERR_PACKAGE_IMPORT_NOT_DEFINED` ([c86086f](https://github.com/flex-development/errnode/commit/c86086f5d50a632b8e33d674aac815070fd6a924))
* **models:** `ERR_PACKAGE_PATH_NOT_EXPORTED` ([f744782](https://github.com/flex-development/errnode/commit/f744782f679c2179e85f50ee2765dd99b08b46db))
* **models:** `ERR_UNHANDLED_ERROR` ([61ed62a](https://github.com/flex-development/errnode/commit/61ed62ad913d8dea8c514889a051b3f391e88590))
* **models:** `ERR_UNKNOWN_ENCODING` ([d562655](https://github.com/flex-development/errnode/commit/d562655515a486fde5a630c62da125e8f45dc57e))
* **models:** `ERR_UNKNOWN_FILE_EXTENSION` ([aeed292](https://github.com/flex-development/errnode/commit/aeed292379928c7c2e6c2876dc0c98fa64b82ec8))
* **models:** `ERR_UNKNOWN_MODULE_FORMAT` ([0c4c702](https://github.com/flex-development/errnode/commit/0c4c7021985cbb1e8a2773a75af43740fba8965a))
* **models:** `ERR_UNSUPPORTED_DIR_IMPORT` ([c29c652](https://github.com/flex-development/errnode/commit/c29c6525a27b3a87f641e6e28d80677392b891a3))
* **models:** `ERR_UNSUPPORTED_ESM_URL_SCHEME` ([9a43317](https://github.com/flex-development/errnode/commit/9a4331797a0faa00b16b2a903be7d0d655fcbd03))
* **ts:** [`NodeErrorConstructor`] allow custom `util.format` args type ([6d9eb1e](https://github.com/flex-development/errnode/commit/6d9eb1eca3138561552cf894053340e53885032d))


### :bug: Fixes

* **models:** patch build errors ([ec32053](https://github.com/flex-development/errnode/commit/ec32053810eaa4a00e999175de7fbda2f058665e))
* **utils:** [`createNodeError`] make error code enumerable ([06f4190](https://github.com/flex-development/errnode/commit/06f41906d5f618c8ab8995443152013ae0b974ae))


### :house_with_garden: Housekeeping

* [eslint] update test file patterns ([7547e7e](https://github.com/flex-development/errnode/commit/7547e7e5b9e67ad6f9edd8d9b4c81d3ca09acfce))
* **github:** add commit scope `models` ([56c56f6](https://github.com/flex-development/errnode/commit/56c56f66bf5bd54f9faaaaa0e4a4b99267cd6da6))
* **github:** add commit scope `utils` ([22a1b6a](https://github.com/flex-development/errnode/commit/22a1b6a2ff0d603bf38eb5d614aadf2c49d6171f))
* **github:** add label `scope:models` ([07425e6](https://github.com/flex-development/errnode/commit/07425e6aceafdbd0f0eef6f26904b6fc4d59ae0d))
* **github:** add label `scope:utils` ([dfd99ee](https://github.com/flex-development/errnode/commit/dfd99ee56466e5afedfd26991c909ab7d2fcffd5))
* **vscode:** update settings ([2ee1aed](https://github.com/flex-development/errnode/commit/2ee1aeda39d99a5d993c7036e684eb1c3aa3f1ff))


### :zap: Refactors

* **utils:** [`createNodeError`] access `this.code` from `message` ([d453fa8](https://github.com/flex-development/errnode/commit/d453fa89b12da8d3c744428f086523584a7147bb))
* **utils:** add `utils` directory ([6fc7ad6](https://github.com/flex-development/errnode/commit/6fc7ad699bce0bc6afcde735f623fa8695b50afd))


### :white_check_mark: Testing

* **models:** reorganize instance tests ([8ef9a81](https://github.com/flex-development/errnode/commit/8ef9a815c75468cafac5bf5579503a4d33d62ff5))

## [1.1.0](https://github.com/flex-development/errnode/compare/1.0.1...1.1.0) (2022-12-29)


### :sparkles: Features

* **enums:** `SystemErrorCode` ([d65c142](https://github.com/flex-development/errnode/commit/d65c142e5354c75b16c0807c5832d33d0ee8ee9f))
* **interfaces:** `ErrnoException` ([c12645a](https://github.com/flex-development/errnode/commit/c12645ad71c5204291a12be009a7e44fcc293202))


### :house_with_garden: Housekeeping

* **tests:** update file overviews ([b3ca4a7](https://github.com/flex-development/errnode/commit/b3ca4a7f8ec3661580d6d1deb4be7e7eb219f4a2))


### :white_check_mark: Testing

* **enums:** [`ErrorCode`] update type test strategy ([964c15b](https://github.com/flex-development/errnode/commit/964c15b34452f3066722ec49c750e048d2ade699))

## [1.0.1](https://github.com/flex-development/errnode/compare/1.0.0...1.0.1) (2022-12-28)


### :bug: Fixes

* **internal:** [`prepareStackTrace`] escape error message ([fab7e3a](https://github.com/flex-development/errnode/commit/fab7e3ae01b42fc49d44e3e179a71398dda2b93b))


### :house_with_garden: Housekeeping

* **vscode:** upgrade vscode ([7ddd6fc](https://github.com/flex-development/errnode/commit/7ddd6fc38b48e1c0dbe8763a6ed75d2d4e172085))

## 1.0.0 (2022-12-28)


### :package: Build

* **deps-dev:** Bump esbuild from 0.16.10 to 0.16.12 ([#1](https://github.com/flex-development/errnode/issues/1)) ([87b3a7f](https://github.com/flex-development/errnode/commit/87b3a7f199e25b643595b33831cef0acd1d8a294))


### :robot: Continuous Integration

* fix [@dependabot](https://github.com/dependabot) npm package-ecosystem x yarn integration ([552f7c6](https://github.com/flex-development/errnode/commit/552f7c67dd9d323ed06d299dca52200555581292))
* **workflows:** [`ci`] upload coverage report to codecov ([fae69dc](https://github.com/flex-development/errnode/commit/fae69dc1fe42df954adfe950ded7863a4c4e74e2))


### :pencil: Documentation

* "when should i use this?" ([c1341c1](https://github.com/flex-development/errnode/commit/c1341c14dd9c2443f17bf68a817b897aa5cad0e4))
* add "differences between node.js" to toc ([635587f](https://github.com/flex-development/errnode/commit/635587fc9af17d6f4e8566fb44ed728a1f167291))
* api ([8320cf1](https://github.com/flex-development/errnode/commit/8320cf1430e90961d5523be96a02ed392a2b625b))
* types ([a5e0903](https://github.com/flex-development/errnode/commit/a5e09031f41267d715968aacf275a555bc47c650))
* use ([e80e1c3](https://github.com/flex-development/errnode/commit/e80e1c3a188c54a54cdf142526b5c203e6902a70))


### :sparkles: Features

* **enums:** `ErrorCode` ([b3f705a](https://github.com/flex-development/errnode/commit/b3f705a817214494ac501999bf1af14d1517f4d7))
* **internal:** `formatMessage` ([9494c4c](https://github.com/flex-development/errnode/commit/9494c4cd6862f967e033fd90139736c9fa0351d1))
* **internal:** `kIsNodeError` ([18825fd](https://github.com/flex-development/errnode/commit/18825fdd1cfe15fa26fb239b8ffcbae2c27965a5))
* **internal:** `prepareStackTrace` ([e2ac0f9](https://github.com/flex-development/errnode/commit/e2ac0f93bf59df820c9e8bbc5bd1535e13131e9e))
* **types:** `MessageFn` ([139c893](https://github.com/flex-development/errnode/commit/139c893cea93aaf4c6f52df5d2fe3a631903c828))
* **types:** `NodeError` ([4926126](https://github.com/flex-development/errnode/commit/49261264b266cf1f67f18aded358ad616e22e8b7))
* **types:** `NodeErrorConstructor` ([de221cd](https://github.com/flex-development/errnode/commit/de221cdffdcddc49616f34aea05fe5934a4a3911))
* **utils:** `createNodeError` ([d82b2bf](https://github.com/flex-development/errnode/commit/d82b2bfa798c0e40f75e750c1dad9e36f1967b55))
* **utils:** `determineSpecificType` ([8c83b4e](https://github.com/flex-development/errnode/commit/8c83b4ef19664d2be9daa2968921642088bd281f))


### :house_with_garden: Housekeeping

* project qa ([5a96558](https://github.com/flex-development/errnode/commit/5a96558f0bfc78176173bc94ba08dd2dd8bca4e6))
* rename project ([a35292c](https://github.com/flex-development/errnode/commit/a35292ca22ce720b0751f346399565165a8e3d08))
* **github:** add commit scope `enums` ([b1b66e4](https://github.com/flex-development/errnode/commit/b1b66e46e66c5c8133dc60541b2d5e693ec4e97a))
* **github:** add label `scope:lib` ([1e78899](https://github.com/flex-development/errnode/commit/1e78899060e11ab339624952f63e8686d7c56b32))
* **pkg:** add keyword `nodejs` ([c66e156](https://github.com/flex-development/errnode/commit/c66e156a37b859897cc4ae0fb1b32b54daa31eab))
* **tests:** codecov integration ([3e52ba5](https://github.com/flex-development/errnode/commit/3e52ba59843d086d67d389f76686f68ceec31a7e))
