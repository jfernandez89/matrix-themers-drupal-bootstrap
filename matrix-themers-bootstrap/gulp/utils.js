var plugins = require('gulp-load-plugins')({lazy: true});

var args = require('yargs').argv;

var config = require('./gulp.config');

module.exports = utils();

function utils() {

  return {
    log: log,
    logError: logError
  };


  /**
   * Prints out in the console the given message or object.
   * @param {object | string} msg object or string to be logged.
   */
  function log(msg) {
    if (typeof msg === 'object') {
      for (var item in msg) {
        if (msg.hasOwnProperty(item) && typeof msg[item] === 'string' || typeof msg[item] === 'number') {
          plugins.util.log('\t' + plugins.util.colors.cyan(item) + ': ' + plugins.util.colors.white(msg[item]));
        } else if (msg.hasOwnProperty(item)) {
          plugins.util.log(plugins.util.colors.blue(item));
          log(msg[item]);
        }
      }
    } else {
      plugins.util.log(plugins.util.colors.blue(msg));
    }
  }

  /**
   * Prints out in the console the given message or object.
   * @param {object | string} msg object or string to be logged.
   */
  function logError(msg) {
    if (typeof msg === 'object') {
      for (var item in msg) {
        if (msg.hasOwnProperty(item) && typeof msg[item] === 'string' || typeof msg[item] === 'number') {
          plugins.util.log('\t' + plugins.util.colors.red(item) + ': ' + plugins.util.colors.red(msg[item]));
        } else if (msg.hasOwnProperty(item)) {
          plugins.util.log(plugins.util.colors.red(item));
          log(msg[item]);
        }
      }
    } else {
      plugins.util.log(plugins.util.colors.red(msg));
    }
  }
}