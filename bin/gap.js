#!/usr/bin/env node
var path = require('path');

require('gnode')

process.argv.slice(2).forEach(function(file) {
  require(path.resolve(process.cwd(), file));
});
