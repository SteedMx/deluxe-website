'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('server', function () {
  gulp
    .src('.')
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

gulp.task('default', ['server']);
