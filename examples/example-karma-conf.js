"use strict";

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    // We need to make the base path to the root dir to access node modules
    basePath: ".",

    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [ "mocha", "mochashould", "chai" ],

    // list of files / patterns to load in the browser
    files: [
      "example-test.js"
    ],

    // possible values: "dots", "progress"
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [ "progress" ],

    port: 9876,

    colors: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [ "Chrome" ],

    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
