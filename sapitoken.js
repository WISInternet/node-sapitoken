var https = require('https');
var jws   = require('jws');
var fs    = require('fs');

var SAPI = function(options, callback) {
  this.token = null;
  this.token_expires = null;
};

SAPI.prototype.getToek = function(callback) {
};

SAPI.prototype.getAccessToken = function(callback) {
};

module.exports = SAPI;
