var tap = require('tap');
var co = require('co');

module.exports = function(name, fn) {
  inject(tap.test)(name, fn)
};

module.exports.inject = inject;

function inject(test) {
  return function (name, fn) {
    'function' == typeof name
      ? test(function(t) { run(t, name) })
      : test(name, function(t) { run(t, fn) })
  }
}

function run(t, fn){
  var subtest = t.test;
  t.test = function(name, fn){
    'function' == typeof name
      ? subtest.call(t, function(t){ run(t, name) })
      : subtest.call(t, name, function(t){ run(t, fn) });
  };

  co(function*() {
    try {
      yield fn(t);
    } catch (err) {
      t.error(err);
    }
    t.end();
  })();
}

