'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var stylus = require('gulp-stylus');

gulp.task('server', function () {
  gulp
    .src('./build')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      livereload: true,
      directoryListing: {
        enabled: true,
        path: 'build'
      }
    }));
});

gulp.task('watch', function () {
  gulp.watch('src/styles/**/*.styl', ['css']);
  gulp.watch('src/index.html', ['html']);
});

gulp.task('css', function () {
  gulp
    .src('src/styles/main.styl')
    .pipe(stylus({ compress: false }))
    .pipe(gulp.dest('build/css'));
});

gulp.task('html', function () {
  gulp
    .src('src/index.html')
    .pipe(gulp.dest('build'));
});

gulp.task('default', ['server', 'css', 'html', 'watch']);
