'use strict';

var through = require('through'),
    gutil = require('gulp-util');

module.exports = function (pattern, options) {

    if (!pattern) {
        throw new gutil.PluginError('gulp-grep-stream', 'Patterns was not specified');
    }

    function grep_stream(file, callback) {

        if (file.contents instanceof Buffer) {
            file.contents = new Buffer(String(file.contents) + '\n' + param);
            callback(null, file);
        } else {
            callback(new Error('gulp-grep-stream: streams not supported'), undefined);
        }
    }

    return through(grep_stream);
};
