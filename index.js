'use strict';

const mediaFeatures = [
	'width',
	'height',
	'device-width',
	'device-height',
	'orientation',
	'aspect-ratio',
	'device-aspect-ratio',
	'color',
	'color-index',
	'monochrome',
	'color-gamut',
	'resolution',
	'scan',
	'grid',
	'update',
	'overflow-block',
	'overflow-inline',
	'pointer',
	'hover',
	'any-pointer',
	'any-hover',
	'scripting'
];

const rangeFeatures = [
	'width',
	'height',
	'device-width',
	'device-height',
	'aspect-ratio',
	'device-aspect-ratio',
	'color',
	'color-index',
	'monochrome',
	'resolution'
];

const discreteValues = [
	'portrait',
	'landscape',
	'interlace',
	'progressive',
	'none',
	'slow',
	'fast',
	'scroll',
	'optional-paged',
	'paged',
	'srgb',
	'p3',
	'rec2020',
	'coarse',
	'fine',
	'hover',
	'initial-only',
	'enabled'
];

const mediaFeaturesWithRange = mediaFeatures.reduce(( prev, next ) => {
	return [].concat(prev, (rangeFeatures.indexOf(next) !== -1 ? [next, `min-${next}`, `max-${next}`] : next));
}, []);

module.exports = ( opts ) => {

	opts = Object.assign({
		range: false
	}, opts);

	if ( opts.range ) {
		return mediaFeaturesWithRange;
	}
	return mediaFeatures;

};

module.exports.discreteValues = discreteValues;
