
# require-blob

Turns arbitrary binary data into a CommonJS compatible module.

So this random `test.png` image:

![](test.png)

Turns into this:

``` js
module.exports = function(){
  return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
};
```


## Installation

Install with npm:

```
$ npm install require-blob
```

Install with [component(1)](http://component.io):

```
$ component install TooTallNate/require-blob
```


## API

### requireBlob(Buffer buf[, String mime]) → String


## require-blob(1) bin

This modules bundles a `require-blob(1)` executable script as well, which is
useful for Makefile rules and such.

```
$ require-blob test.png
module.exports = function(){
  return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
};
```

## License

  MIT
