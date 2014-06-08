"use strict";

var path = require("path");

var pattern = function(file) {
  return {
    pattern: file,
    included: true,
    served: true,
    watched: false
  };
};

/**
 * Load in the code to be sent to the browser.
 *
 * Since mocha-should is a CommonJS module, it will need to be
 * preprocessed for it to work with karma via karma-commonjs.
 *
 * Any tests will also need to be invoked via karma-commonjs, so include the
 * relevant tests files in the Karma preprocessor conf.
 *
 * @see karma-commonjs
 */
var framework = function(files) {
  files.unshift(pattern(path.resolve(require.resolve("mocha-should"))));
};

framework.$inject = [ "config.files" ];

module.exports = {
  "framework:mochashould": [ "factory", framework ]
};