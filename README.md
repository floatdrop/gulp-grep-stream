# gulp-grep [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> Stream grep plugin for [gulp](https://github.com/wearefractal/gulp)

This is alter version of [`gulp-ignore`](https://github.com/robrich/gulp-ignore), if you want to ignore files from stream - you should definatly check it out first.

## Usage

### Basic

```javascript
var grep = require('gulp-grep-stream');

gulp.src(['./src/*.ext'])
    .pipe(grep('*magic*.ext'))
    .pipe(gulp.dest("./dist/magic"));
```

__Invert match__

```javascript
var grep = require('gulp-grep-stream');

gulp.src(['./src/*.ext'])
    .pipe(grep('*magic*.ext', { invert_match: true }))
    .pipe(gulp.dest("./dist/not_magic"));
```

### Running changed mocha test files

```javascript
var grep = require('gulp-grep-stream');
var watch = require('gulp-watch');
var mocha = require('gulp-mocha');

gulp.src(['./lib/**/*.js', './tests/*.js'])
    .pipe(watch({ emit: 'glob' }))
    .pipe(grep('tests/*.js'))
    .pipe(mocha());
```

## API

### grep(pattern, options)

#### pattern
Type: `String` / `Array`

The array of patterns, that will be used for matching. (If `string` passed, it will be wrapped in array).

#### options.invert_match
Type: `Boolean`
Default: `false`

If file matches one of patterns, it will be excluded from stream.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-grep-stream
[npm-image]: https://badge.fury.io/js/gulp-grep-stream.png

[travis-url]: http://travis-ci.org/floatdrop/gulp-grep-stream
[travis-image]: https://secure.travis-ci.org/floatdrop/gulp-grep-stream.png?branch=master

[coveralls-url]: https://coveralls.io/r/floatdrop/gulp-grep-stream
[coveralls-image]: https://coveralls.io/repos/floatdrop/gulp-grep-stream/badge.png

[depstat-url]: https://david-dm.org/floatdrop/gulp-grep-stream
[depstat-image]: https://david-dm.org/floatdrop/gulp-grep-stream.png