'use strict';

const assert = require('assert');
const fn = require('../');

it('should return list of media features', function () {
	assert.equal(fn().length, 22);
});

it('should return list of media features with range', function () {
	assert.equal(fn({ range: true }).length, (22 + (10 * 2)));
});

it('should return list of discrete values for media features', function () {
	assert.equal(fn.discreteValues.length, 18);
});
