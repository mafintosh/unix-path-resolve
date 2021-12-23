const test = require('brittle')
const xresolve = require('./')

test('normalises', function (t) {
  t.is(xresolve('/a/b'), '/a/b')
  t.is(xresolve('/a/b/..'), '/a')
  t.is(xresolve('/a/b/../..'), '/')
  t.is(xresolve('/a/b/././////c'), '/a/b/c')
  t.is(xresolve('/a/b/.\\.\\//\\/c/..///d'), '/a/b/d')
  t.is(xresolve('file:/a/b/../../c'), '/c')
  t.is(xresolve('file:///a/b/../../c'), '/c')
  t.is(xresolve('file:///a/b/../../c'), '/c')
  t.is(xresolve('proto://host/a/b/../../c'), '/c')
  t.exception(() => xresolve('/..'))
})

test('resolve two paths', function (t) {
  t.is(xresolve('/a/b', 'c/d'), '/a/b/c/d')
  t.is(xresolve('/a/b', '../c/d'), '/a/c/d')
  t.is(xresolve('/', '\\c\\d/e'), '/c/d/e')
})
