/*jshint expr: true*/

"use strict";

var should = require("mocha-should");

describe("Samples tests", function() {
  should("have true be true", function() {
    expect(true).to.equal(true);
  });
});