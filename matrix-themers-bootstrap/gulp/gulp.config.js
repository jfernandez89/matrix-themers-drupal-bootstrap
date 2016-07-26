module.exports = getConfig();

function getConfig() {

  var config = {};

  config.paths = {
    css: {
      dest: './css/',
      dev: './css/',
      fileName: 'matrix-themers-bootstrap.css'
    },
    sass: {
      dev: ['./sass/*.scss', './sass/partials/**/*.scss']
    }
  };

  //Allows to change between sass or less framework
  config.style = {
    framework: 'sass',
    autoprefixerOptions: {browsers: ['last 2 version', '> 5%']}
  };

  return config;
}
;

