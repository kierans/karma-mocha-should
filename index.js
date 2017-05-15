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

var framework = function(files) {
  files.unshift(pattern(path.resolve(require.resolve("mocha-should"))));
};

framework.$inject = [ "config.files" ];

module.exports = {
  "framework:mochashould": [ "factory", framework ]
};
