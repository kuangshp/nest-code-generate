# co-wrap-all

> Call co.wrap for multiple generator functions

This tiny helper allows to easily call `co.wrap` for multiple generator functions.  
For example:

```javascript
// Before
module.exports = {
    foo: co.wrap(foo),
    bar: co.wrap(bar)
};

// After
module.exports = wrapAll({foo, bar});
```

Also, it is very convenient for defining asynchronous methods:

```javascript
// Common
class Foo {
    * bar(arg) { /* ... */ }
    * baz(arg) { /* ... */ }
}

// Before
Foo.prototype.bar = co.wrap(Foo.prototype.bar);
Foo.prototype.baz = co.wrap(Foo.prototype.baz);

// After
wrapAll(Foo.prototype);
```

## License

[MIT](https://github.com/connesc/co-wrap-all/blob/master/LICENSE)
