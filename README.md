# get-browser-language

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]

Get browser language.

## Installation

```
npm install get-browser-language
```

## Usage

``` javascript
var getBrowserLanguage = require('get-browser-language')

var lang = getBrowserLanguage()
console.log(lang) // => "sv-SE"
```

## Caveats

Some (older) browsers may return a two-letter string (like `sv`) instead of a
five-letter string (like `sv-SE`).

## License

[MIT][license-url]

[npm-img]: https://img.shields.io/npm/v/get-browser-language.svg?style=flat-square
[npm-url]: https://npmjs.com/package/get-browser-language
[license-img]: http://img.shields.io/npm/l/get-browser-language.svg?style=flat-square
[license-url]: LICENSE
