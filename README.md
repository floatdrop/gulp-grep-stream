(PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line)

# gulp-grep [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> grep plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-grep` as a development dependency:

```shell
npm install --save-dev gulp-grep
```

Then, add it to your `gulpfile.js`:

```javascript
var grep = require("gulp-grep");

gulp.src("./src/*.ext")
	.pipe(grep({
		msg: "Hello Gulp!"
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### grep(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-grep
[npm-image]: https://badge.fury.io/js/gulp-grep.png

[travis-url]: http://travis-ci.org/floatdrop/gulp-grep
[travis-image]: https://secure.travis-ci.org/floatdrop/gulp-grep.png?branch=master

[coveralls-url]: https://coveralls.io/r/floatdrop/gulp-grep
[coveralls-image]: https://coveralls.io/repos/floatdrop/gulp-grep/badge.png

[depstat-url]: https://david-dm.org/floatdrop/gulp-grep
[depstat-image]: https://david-dm.org/floatdrop/gulp-grep.png
