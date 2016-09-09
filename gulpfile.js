'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var stylus = require('gulp-stylus');
var imageop = require('gulp-image-optimization');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');

gulp.task('server', function () {
  gulp
    .src('./docs')
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
  gulp.watch('src/javascript/**/*.js', ['javascript'])
  gulp.watch('src/index.html', ['html']);
});

gulp.task('javascript', function () {
  return gulp.src('src/javascript/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('docs/javascript'));
});

gulp.task('images', function () {
  gulp
    .src(['src/images/*.png'])
    .pipe(imageop({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('docs/images'));
});

gulp.task('css', function () {
  gulp
    .src('src/styles/main.styl')
    .pipe(stylus({ compress: true }))
    .pipe(gulp.dest('docs/css'));
});

gulp.task('html', function () {
  gulp.src('src/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('docs'));
});

gulp.task('default', ['server', 'javascript', 'css', 'html', 'watch']);
gulp.task('build', ['javascript', 'css', 'html']);
