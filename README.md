# file-is-binary [![NPM version](https://img.shields.io/npm/v/file-is-binary.svg?style=flat)](https://www.npmjs.com/package/file-is-binary) [![NPM monthly downloads](https://img.shields.io/npm/dm/file-is-binary.svg?style=flat)](https://npmjs.org/package/file-is-binary)  [![NPM total downloads](https://img.shields.io/npm/dt/file-is-binary.svg?style=flat)](https://npmjs.org/package/file-is-binary) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/file-is-binary.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/file-is-binary)

> Returns true if a file is binary. Checks the actual contents, since extensions are not reliable. Basic wrapper for isbinaryfile to support vinyl files.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save file-is-binary
```

## Usage

Uses [isbinaryfile](https://github.com/gjtorikian/isBinaryFile) to check the file contents and return

```js
var isBinary = require('file-is-binary');

var file = new File({path: 'foo.gif', contents: fs.readFileSync('foo.gif')});
console.log(isBinary(file));

var file = new File({path: 'bar.txt', contents: fs.readFileSync('bar.txt')});
console.log(isBinary(file));
//=> false
```

## About

### Related projects

* [file-contents](https://www.npmjs.com/package/file-contents): Set the `contents` property on a file object. Abstraction from vinyl-fs to support stream or… [more](https://github.com/jonschlinkert/file-contents) | [homepage](https://github.com/jonschlinkert/file-contents "Set the `contents` property on a file object. Abstraction from vinyl-fs to support stream or non-stream usage.")
* [file-stat](https://www.npmjs.com/package/file-stat): Set the `stat` property on a file object. Abstraction from vinyl-fs to support stream or… [more](https://github.com/jonschlinkert/file-stat) | [homepage](https://github.com/jonschlinkert/file-stat "Set the `stat` property on a file object. Abstraction from vinyl-fs to support stream or non-stream usage.")
* [gulp-is-binary](https://www.npmjs.com/package/gulp-is-binary): Adds an `.isBinary()` function to the `file` object, similar to `file.isNull()` and `file.isStream()`. | [homepage](https://github.com/jonschlinkert/gulp-is-binary "Adds an `.isBinary()` function to the `file` object, similar to `file.isNull()` and `file.isStream()`.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for advice on opening issues, pull requests, and coding standards.

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.4.3, on March 18, 2017._