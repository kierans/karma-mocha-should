karma-mocha-should
==================

Karma plugin for [mocha-should](https://github.com/kierans/karma-mocha-should)

## Usage

```bash
$ npm install mocha-should --save-dev
```

Add `mocha-should` to the `frameworks` key in your Karma configuration **before chai**:

```js
module.exports = function(config) {
  config.set({
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [ "commonjs", "mocha", "mochashould", "chai" ],

    preprocessors: {
      "**/mocha-should/index.js": [ "commonjs" ],
      "test/**/*.js": [ "commonjs" ]
    }
  });
};
```
See examples folder for Mocha test and karma example files.

## Thanks

To the team at [karma-chai](https://github.com/xdissent/karma-chai/) for their Karma plugin, which was used as a guide.
