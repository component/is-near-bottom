
# is-near-bottom

  Check if the user is scrolled near the bottom of the document,
  with a default padding of `300` pixels.

## Installation

  Install with [component(1)](http://component.io):

    $ component install component/is-near-bottom

## Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>is-near-bottom</title>
  <style>
    body {
      padding: 50px;
    }

    body.bottom {
      background: green;
    }
  </style>
</head>
<body>
  <script src="build/build.js"></script>
  <script>
    var isNearBottom = require('is-near-bottom');

    var n = 200;
    while (n--) {
      document.write('<p>dummy data ' + n + '</p>')
    }

    onscroll = function(){
      if (isNearBottom()) {
        document.body.classList.add('bottom')
      } else {
        document.body.classList.remove('bottom')
      }
    }
  </script>
</body>
</html>
```

## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.