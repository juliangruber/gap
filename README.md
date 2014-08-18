# gap

Generator friendly version of [tap](https://github.com/isaacs/node-tap). No more `t.plan()` and `t.end()`!

## Example

Test a generator friendly module, like `level-co`!

```js
var level = require('level-co');
var test = require('gap');

test('db', function*(t) {
  var db = yield level(__dirname + '/db');
  yield db.put('foo', 'bar');
  t.equal(yield db.get('foo'), 'bar');

  t.test('subtest', function*(t) {
    yield doSomethingElse();
  });
});
```

Remember that you need at least node `v0.11.2` and should pass
`--harmony-generators` as a flag to node (or use [gnode](https://github.com/TooTallNate/gnode)). Or, use the `gap` cli.

## API

```js
var test = require('gap');
```

For all the assertion methods, see the [tap](https://github.com/isaacs/node-tap)
documentation.

### test([name], fn)

Run a test with an optional `name`. `fn` will be called from inside
[co](https://github.com/visionmedia/co), so you can `yield` and throw
as you wish.

## CLI

`gap` also comes with a cli that uses [gnode](https://github.com/TooTallNate/gnode) to give you generators - even on versions that do not support ES6 Generators natively.

```js
$ gap test/*.js
```

## Installation

With [npm](https://npmjs.org) do:

```bash
npm install gap
```

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
