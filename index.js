'use strict';

var isObject = require('isobject');
var isBinary = require('isbinaryfile');

module.exports = function(file) {
  if (!isObject(file) || !file._isVinyl) {
    throw new Error('expected file to be an instance of vinyl');
  }

  if (file.hasOwnProperty('_isBinary')) {
    return file._isBinary;
  }

  if (file.isNull() || file.isStream() || file.isDirectory()) {
    file._isBinary = false;
    return false;
  }

  var len = file.stat ? file.stat.size : file.contents.length;
  file._isBinary = isBinary.sync(file.contents, len);
  return file._isBinary;
};
