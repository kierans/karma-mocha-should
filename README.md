karma-mocha-should
==================

Karma plugin for [mocha-should](https://github.com/kierans/karma-mocha-should)

## Usage

```bash
$ npm install mocha-should --save-dev
```

Add `mocha-should` to the `frameworks` key in your Karma configuration **after chai**:

Since `mocha-should` is a CommonJS module, it will need to be preprocessed for it to work with karma
via [karma-commonjs](https://github.com/karma-runner/karma-commonjs).

Any tests that use `mocha-should` will also need to be invoked via `karma-commonjs`, so include the relevant tests files
in the Karma preprocessor conf.

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

## Thanks

To the team at [karma-chai](https://github.com/xdissent/karma-chai/) for their Karma plugin, which was used as a guide.`