
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

  Install with [component(1)](http://component.io):

    $ component install TooTallNate/require-blob

## API

### requireBlob(Buffer buf[, String mime]) → String


## License

  MIT
