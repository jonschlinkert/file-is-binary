'use strict';

require('mocha');
var fs = require('fs');
var path = require('path');
var File = require('vinyl');
var assert = require('assert');
var isBinary = require('./');

describe('file-is-binary', function() {
  it('should export a function', function() {
    assert.equal(typeof isBinary, 'function');
  });

  it('should throw an error when invalid args are passed', function(cb) {
    try {
      isBinary();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected file to be an object');
      cb();
    }
  });

  it('should return true when a file is binary', function() {
    var fp = path.join(__dirname, 'fixtures/demo.gif');
    var file = new File({path: fp, contents: fs.readFileSync(fp)});
    assert(isBinary(file));
  });

  it('should return false when a file is not binary', function() {
    var fp = path.join(__dirname, 'fixtures/foo.txt');
    var file = new File({path: fp, contents: fs.readFileSync(fp)});
    assert(!isBinary(file));
  });

  it('should work for non-vinyl files', function() {
    var txt = path.join(__dirname, 'fixtures/foo.txt');
    var gif = path.join(__dirname, 'fixtures/demo.gif');

    var foo = {path: txt, contents: fs.readFileSync(txt)};
    var bar = {path: gif, contents: fs.readFileSync(gif)};

    assert(!isBinary(foo));
    assert(isBinary(bar));
  });
});
