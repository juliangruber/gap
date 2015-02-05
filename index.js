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
  t.test = inject(t.test.bind(t));

  co(function*() {
    try {
      yield fn(t);
    } catch (err) {
      t.error(err);
    }
    t.end();
  });
}

