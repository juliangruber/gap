#!/usr/bin/env node --harmony-generators

var path = require('path');

process.argv.slice(2).forEach(function(file) {
  require(path.resolve(process.cwd(), file));
});

