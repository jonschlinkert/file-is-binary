'use strict';

var isObject = require('isobject');
var isBinary = require('isbinaryfile');

module.exports = function(file) {
  if (!isObject(file)) {
    throw new Error('expected file to be an object');
  }

  if (file.hasOwnProperty('_isBinary')) {
    return file._isBinary;
  }

  if (typeof file.isStream === 'function' && file.isStream()) {
    file._isBinary = false;
    return false;
  }

  if (typeof file.isNull === 'function' && file.isNull()) {
    file._isBinary = false;
    return false;
  }

  if (typeof file.isDirectory === 'function' && file.isDirectory()) {
    file._isBinary = false;
    return false;
  }

  var len = file.stat ? file.stat.size : file.contents.length;
  file._isBinary = isBinary.sync(file.contents, len);
  return file._isBinary;
};

