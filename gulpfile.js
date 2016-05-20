'use strict';

let gulp = require('gulp');
let babel = require('gulp-babel');
let sass = require('gulp-sass');
let del = require('del');

gulp.task('default', () => {
  console.log("Gulp is working! Now type the actual command you'd like to execute.");
});

//run build before watch so it's starting with the latest
gulp.task('watch', ['build'], () => {
  gulp.watch('src/*.js', ['build-js']);
  gulp.watch('src/scss/**/*.scss', ['build-css']);
});

gulp.task('build:js', () => {
	return gulp.src('src/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('build:css', () => {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))

});

gulp.task('clean', () => {
  return del.sync('dist');
});


gulp.task('build', ['build:js', 'build:css']);
