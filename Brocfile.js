/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');

var app = new EmberApp({
  vendorFiles: {
    'handlebars.js': {
      production: 'bower_components/handlebars/handlebars.js'
    }
  }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('bower_components/lodash/lodash.js');
app.import('bower_components/font-awesome/css/font-awesome.css');
var fontAwesome = pickFiles('bower_components/font-awesome', {
  srcDir: '/',
  files: ['fonts/*'],
  destDir: '/'
});

app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', {
  destDir: 'assets'
});
var bootstrapFonts = pickFiles('bower_components/bootstrap/dist/fonts', {
  srcDir: '/',
  files: ['fonts/*'],
  destDir: '/'
});

app.import('vendor/admin-lte.css');
app.import('vendor/admin-lte-blue.css');
app.import('vendor/admin-lte.js');

module.exports = app.toTree(fontAwesome, bootstrapFonts);