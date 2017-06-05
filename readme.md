# img-split
> Split an `<img>` into equally-sized parts

![Super Mario Bros. overworld tileset split into 16x16 fragments](./tiles.png)

## install
```sh
npm install img-split
```

## usage
```js
const split = require('img-split')
const load = require('img-load')

load('./tiles.png', (error, image) => {
  if (error) throw error
  var tiles = split(image, 16, 16)
  for (var tile of tiles) {
    document.body.appendChild(tile)
  }
})
```

### `images = split(image, width, height)`
Splits `image` into individual `<canvas>` elements of the dimensions described by `width` and `height`.

- `image`: The `HTMLImageElement` to be split
- `width`: The desired width of each resulting `<canvas>` element
- `height`: The desired height of each resulting `<canvas>` element

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
