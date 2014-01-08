'use strict';

var through = require('through'),
    gutil = require('gulp-util'),
    minimatch = require('minimatch');

module.exports = function (pattern, opt) {

    opt = opt || {};

    if (typeof pattern === 'string' ||
        pattern instanceof String) {
        opt.pattern = [ pattern ];
    }

    if (typeof pattern === 'function') {
        opt.pattern = pattern;
    }

    if (!opt.pattern) {
        throw new gutil.PluginError('gulp-grep-stream',
            'Pattern is not a string, function or array');
    }

    function grepStream(file) {
        var grep;

        if (typeof opt.pattern === 'function') {
            grep = opt.pattern(file);
        } else {
            grep = minimatch(opt.pattern);
        }

        if ((!!opt.invertMatch) ^ grep) {
            this.queue(file);
        }
    }

    return through(grepStream);
};
