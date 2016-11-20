# css-media-features

[![Build Status][ci-img]][ci]

List of [CSS media features specified by the W3C][w3c-media-features].

## Install

```sh
npm install css-media-features --save
```

## Usage

```js
const mediaFeatures = require('css-media-features');

console.log(mediaFeatures());
// ['width', 'height', 'device-width', …]

console.log(mediaFeatures({ range: true }));
// ['width', 'min-width', 'max-width', 'height', 'min-height', 'max-height',  …]
```

## API

### mediaFeatures(opts)

Returns: `String[]`

Returns list of media features

#### opts

Type: `Object`

#### range

Type: `Boolean`  
Default: `false`

Return media features with range prefixes (`min-` and `max-`) where applicable.

### mediaFeatures.discreteValues

Returns: `String[]`

Returns list of [discrete values][mq-ranges] for certain media features.

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[ci]: https://travis-ci.org/niksy/css-media-features
[ci-img]: https://img.shields.io/travis/niksy/css-media-features.svg
[w3c-media-features]: https://www.w3.org/TR/mediaqueries-4/
[mq-ranges]: https://www.w3.org/TR/mediaqueries-4/#mq-ranges
