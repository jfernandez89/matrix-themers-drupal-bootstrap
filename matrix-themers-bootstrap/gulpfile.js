var plugins = require('gulp-load-plugins')({lazy: true});

var gulp = require('gulp');
var utils = require('./gulp/utils');

var config = require('./gulp/gulp.config');

global.GULP_DIR = __dirname + '/gulp';
global.BASE_DIR = __dirname;

plugins.requireTasks({
  // separator: '-',
  path: __dirname + '/gulp/tasks',
  gulp: gulp
});