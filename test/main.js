/* global describe, it */
'use strict';

delete require.cache[require.resolve('../')];
var grep = require('../'),
	should = require('chai').should();


describe('gulp-grep-stream', function () {
	describe('options', function () {
		it('should throw, when pattern is missing', function () {
			should.throw(grep.bind(null, 'a'));
		});
	});
});
