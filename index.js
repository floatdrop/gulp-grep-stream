'use strict';

var through = require('through'),
    gutil = require('gulp-util'),
    minimatch = require('minimatch');

module.exports = function (pattern, opt) {

    opt = opt || {};

    if (typeof pattern === 'string' ||
        pattern instanceof String) {
        opt.patterns = [ pattern ];
    }

    if (typeof pattern === 'function') {
        opt.patterns = pattern;
    }

    if (pattern instanceof Array) {
        opt.patterns = pattern;
    }

    if (!opt.patterns) {
        throw new gutil.PluginError('gulp-grep-stream',
            'Pattern is not a string, function or array');
    }

    function grepStream(file) {
        var grep;

        if (typeof opt.patterns === 'function') {
            grep = opt.patterns(file);
        } else {
            for (var i = 0; !grep && i < opt.patterns.length; i++) {
                grep = typeof opt.patterns[i] === 'string' &&
                    minimatch(file.path, opt.patterns[i]);
            }
        }

        if ((!!opt.invertMatch) ^ grep) {
            this.queue(file);
        }
    }

    return through(grepStream);
};
