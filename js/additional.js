/* Получаем img */
function loadImage (src) {
	return new Promise((resolve, reject) => { // возвр. промисс
		try {
			const image = new Image(); // созд. объект image
			image.onload = () => resolve(image); // когда загруз. img вызов. resolve
			image.src = src;

		} catch (err) {
			return reject(err);
		}
	});
}
