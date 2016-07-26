var plugins = require('gulp-load-plugins')({lazy: true});
var utils = require(global.GULP_DIR + '/utils');
var config = require(global.GULP_DIR + '/gulp.config');

/**
 * Compiles all the scss partials, show the errors on the console log & concat all the files in only one.
 */
module.exports = {
  dep: ['styles:clean'],
  fn: function (gulp, done) {

    utils.log('***  Compiling Sass && Injecting Css  ***');

    return gulp.src(config.paths.sass.dev)
      .pipe(plugins.plumber())
      .pipe(plugins.sass())
      .pipe(plugins.autoprefixer(config.style.autoprefixerOptions))
      .pipe(plugins.concat(config.paths.css.fileName))
      .pipe(gulp.dest(config.paths.css.dest));
  }
};
