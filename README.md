# xresolve

Cross platform resolve that always returns a UNIX style `/` seperated path

```
npm install xresolve
```

Mostly useful for resolving modules cross platform

## Usage

``` js
const xresolve = require('xresolve')

xresolve('/foo/bar', '../baz') // /foo/baz
xresolve('/foo/bar', '/baz/foo') // /baz/foo
xresolve('/a/b/c', '../../../../d') // throws since its out of bounds
xresolve('a', 'b') // throws since none of them are absolute
xresolve('/a/b/c', '..\\d') // /a/b/d
xresolve('/a/b/c', 'c:\\foo\\bar') // /foo/bar
xresolve('file:///a/b', './c') // /a/b/c
```

## License

MIT
