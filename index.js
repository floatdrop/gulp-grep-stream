var through = require('through');

module.exports = function (param) {
	'use strict';

	function grep(file, callback) {

		// if necessary check for required param(s), e.g. options hash, etc.
		if (!param) {
			callback(new Error('gulp-grep: No param supplied'), undefined);
		}

		// check if file.contents is a `Buffer`
		if (file.contents instanceof Buffer) {

			// manipulate buffer in some way
			// http://nodejs.org/api/buffer.html
			file.contents = new Buffer(String(file.contents) + '\n' + param);

			callback(null, file);

		} else { // assume it is a `stream.Readable`

			// http://nodejs.org/api/stream.html
			// http://nodejs.org/api/child_process.html
			// https://github.com/dominictarr/event-stream

			// accepting streams is optional
			callback(new Error('gulp-grep: streams not supported'), undefined);
		}
	}

	return through(grep);
};
