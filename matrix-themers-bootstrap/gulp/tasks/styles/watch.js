var plugins = require('gulp-load-plugins')({lazy: true});

var utils = require(global.GULP_DIR + '/utils');
var config = require(global.GULP_DIR + '/gulp.config');

/**
 * Watches (sass | less) changes to call recompile the styles.
 */
module.exports = {
  dep: ['styles:sass'],
  fn: function (gulp, done) {

    utils.log('***  Watching files  ***');

    gulp.watch(config.paths[config.style.framework].dev, ['styles:sass']);
  }
};
