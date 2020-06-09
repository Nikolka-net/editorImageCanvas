'use strict';

(async function () {
	const canvas = document.getElementById('canvas');
	const context = canvas.getContext('2d'); // работаем в режиме 2d
	const image = await loadImage('space.jpg'); // получ. изображение, дождись выполнения промиса
	const mouse = getMouse(canvas); // данные по координатам

	/* Фильтры */
	const filterGrayInput = document.getElementById('filterGray');
	const filterRedInput = document.getElementById('filterRed');
	const filterBlueInput = document.getElementById('filterBlue');
	const filterGreenInput = document.getElementById('filterGreen');

	const imageParams = { // параметры отступов
		offsetX: 0,
		offsetY: 0,
		scale: 1 // масштаб
	};

	canvas.width = 750; // размер
	canvas.height = 750;

	/* Обновляем canvas */
	update();

	function update() {
		requestAnimationFrame(update);
		clearCanvas();

		if (mouse.left) { // если нажата левая кнопка
			/* Изменение отступов для изме-я отображе-я картинки */
			imageParams.offsetX += mouse.dx;
			imageParams.offsetY += mouse.dy;
		}

		/* Меняем масштаб при прокруч. колёсика мыши*/
		if (mouse.wheel) {
			imageParams.scale -= mouse.wheel / 1000;

		}
		context.drawImage( // отрисовка изображения
			image,
			0, 0,
			image.width,
			image.height,
			imageParams.offsetX,
			imageParams.offsetY,
			image.width * imageParams.scale, // > < масштаб
			image.height * imageParams.scale
		);
		mouse.update(); // обнуляем параметры dx and dy

	}

	function clearCanvas() { // очистка canvas
		canvas.width = canvas.width; // каскад-е отображение убирает
	}

	/* Обработчики на фильтры */
	filterGrayInput.addEventListener('change', () => {
		console.log('Gray', filterGrayInput.checked);

	});
	filterRedInput.addEventListener('change', () => {
		const canvas = document.createElement('canvas'); // созд. вирт. canvas
		const context = canvas.getContext('2d');
		canvas.width = image.width; // задаём размеры
		canvas.height = image.height;
		context.drawImage( // задаём отрисовку
			image,
			0, 0,
			image.width, image.height,
			0, 0,
			image.width, image.height
		);

			const imageData = context.getImageData();
	});
	filterBlueInput.addEventListener('change', () => {
		console.log('Blue', filterBlueInput.checked);

	});
	filterGreenInput.addEventListener('change', () => {
		console.log('Green', filterGreenInput.checked);

	});

	/* Получаем img */
	function loadImage(src) {
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
	/* Получ. координаты */
	function getMouse(element) {
		const mouse = {
			x: 0,
			y: 0,
			dx: 0,
			dy: 0, // насколько изменилась координата, насколько сместились
			left: false, // когда true - нажата левая кнопка мыши
			wheel: 0 // колесо мыши не крутится

		};

		mouse.update = () => { // обнуляем измене-е координат
			mouse.dx = 0;
			mouse.dy = 0;
			mouse.wheel = 0; // обнул. знач. от колёсика мыши
		};

		/* События на элемент при движении картинки */
		element.addEventListener('mousemove', event => {
			const rect = element.getBoundingClientRect(); // метод - данные по полжению картинки

			const x = event.clientX - rect.left; // вычитаем отступ canvasa из клиент-х координат
			const y = event.clientY - rect.top;

			mouse.dx = x - mouse.x; // новые минус старые координаты
			mouse.dy = y - mouse.y;

			mouse.x = x; // обновляем координаты
			mouse.y = y;

		});

		/* Нажата кнопка мыши */
		element.addEventListener('mousedown', event => {
			if (event.button === 0) { // если левая кнопка мыши
				mouse.left = true;
			}
		});

		/* Поднята кнопка мыши */
		element.addEventListener('mouseup', event => {
			if (event.button === 0) { // если левая кнопка мыши
				mouse.left = false;
			}
		});

		/* Крутим колёсико мыши для масштаба картинки*/
		element.addEventListener('mousewheel', event => {
			mouse.wheel = event.deltaY; // прокрутка по оси Y
			event.preventDefault(); // останавл. распростр. события прокр. мыши дальше
		});

		return mouse;
	}

})();
