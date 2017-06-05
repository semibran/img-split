module.exports = function split(image, width, height) {
	var cols = Math.ceil(image.width / width)
	var rows = Math.ceil(image.height / height)
	var images = new Array(cols * rows)
	for (var y = 0; y < rows; y++) {
		for (var x = 0; x < cols; x++) {
			var canvas = document.createElement('canvas')
			canvas.width = width
			canvas.height = height

			var context = canvas.getContext('2d')
			context.drawImage(image, -x * width, -y * height)

			images[y * cols + x] = canvas
		}
	}
	return images
}
