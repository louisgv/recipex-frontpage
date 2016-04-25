const Gulp = require('gulp');
const Sass = require('gulp-sass');
const Autoprefixer = require('gulp-autoprefixer');
const Concat = require('gulp-concat');

const Uglify = require('gulp-uglify');

const Util = require('gulp-util')

Gulp.task('styles', function () {
	Gulp.src('sass/index.scss')
		.pipe(Sass({
				outputStyle: 'compressed'
			})
			.on('error', Sass.logError))
		.pipe(Autoprefixer({
			browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
		}))
		.pipe(Gulp.dest('./dist/'));
});

Gulp.task('scripts', function () {
	Gulp.src([
			'scripts/welcome.js'
		])
		.pipe(Concat('index.js'))
		.pipe(Uglify()
			.on('error', Util.log))
		.pipe(Gulp.dest('dist'));
});


Gulp.task('default', function () {
	Gulp.watch('sass/**/*.scss', ['styles']);
	Gulp.watch('scripts/*.js', ['scripts']);
});
