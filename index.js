var tap = require('tap');
var co = require('co');

module.exports = function(name, fn) {
  function test(t) {
    co(function*() {
      try {
        yield fn(t);
      } catch (err) {
        t.error(err);
      }
      t.end();
    })();
  }

  if (typeof name == 'string') {
    tap.test(name, test);
  } else {
    tap.test(test);
  }
};

