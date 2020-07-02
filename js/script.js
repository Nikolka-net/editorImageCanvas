'use strict';

(async function () {
	const CANVAS_WIDTH = 750;
	const CANVAS_HEIGHT = 750;

	const canvas = document.getElementById('canvas');
	const context = canvas.getContext('2d'); // работаем в режиме 2d
	let originalImage = await loadImage('./image/space.jpg'); // получ. изображение, дождись выполнения промиса
	const mouse = getMouse(canvas); // данные по координатам

	/* Фильтры */
	const filterGrayInput = document.getElementById('filterGray');
	const filterRedInput = document.getElementById('filterRed');
	const filterBlueInput = document.getElementById('filterBlue');
	const filterGreenInput = document.getElementById('filterGreen');

	let image = originalImage; // переменная для originalImage

	const imageParams = { // параметры отступов
		offsetX: 0,
		offsetY: 0,
		scale: 1 // масштаб
	};

	const filters = {
		gray: false,
		red: false,
		green: false,
		blue: false
	};

	canvas.width = CANVAS_WIDTH; // размер
	canvas.height = CANVAS_HEIGHT;

	/* Обновляем canvas */
	update();

	function update() {
		requestAnimationFrame(update);

		if (mouse.left) { // если нажата левая кнопка
			/* Изменение отступов для изме-я отображе-я картинки */
			imageParams.offsetX += mouse.dx;
			imageParams.offsetY += mouse.dy;
		}

		/* Меняем масштаб при прокруч. колёсика мыши*/
		if (mouse.wheel) {
			imageParams.scale -= mouse.wheel / 1000;

		}
		clearCanvas();
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
		filters.gray = filterGrayInput.checked;
		updateFilter();
	});

	filterRedInput.addEventListener('change', () => {
		filters.red = filterRedInput.checked;
		updateFilter();
	});

	filterBlueInput.addEventListener('change', () => {
		filters.blue = filterBlueInput.checked;
		updateFilter();
	});

	filterGreenInput.addEventListener('change', () => {
		filters.green = filterGreenInput.checked;
		updateFilter();
	});

	/* Обновление фильтров */
	function updateFilter() {
		if (!filters.gray && !filters.red && !filters.blue && !filters.green) { // если не выбраны фильтры
			image = originalImage;
		}
		const canvas = document.createElement('canvas'); // созд. вирт. canvas
		const context = canvas.getContext('2d');
		canvas.width = originalImage.width; // задаём размеры
		canvas.height = originalImage.height;
		context.drawImage( // задаём отрисовку
			originalImage,
			0, 0,
			originalImage.width, originalImage.height,
			0, 0,
			canvas.width, canvas.height
		);

		const imageData = context.getImageData(0, 0, canvas.width, canvas.height); // нужен сервер; записыв. данные изображения - шир., высота
		if (filters.gray) {
			for (let i = 0; i < imageData.data.length; i += 4) { // перебор пикселей - цветов
				const average = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3; // среднее арифме-е из 3-х цветов
				imageData.data[i] = average;
				imageData.data[i + 1] = average;
				imageData.data[i + 2] = average;
				/* +=4 т.к. каждый 4 меняем канал - gray */
			}
		} else {
			for (let i = 0; i < imageData.data.length; i += 4) {
				imageData.data[i] = filters.red ? 0 : imageData.data[i];
				imageData.data[i + 1] = filters.green ? 0 : imageData.data[i + 1];
				imageData.data[i + 2] = filters.blue ? 0 : imageData.data[i + 2];
			}

		}

		/* возвр. данные для вступления в силу */
		context.putImageData(
			imageData,
			0, // отсюда начинаем
			0,
			0,
			0,
			imageData.width, // размеры canvasa
			imageData.height
		);

		image = canvas; // меняем image на canvas

	}

	/* Скачать фото */

	document.getElementById('download').addEventListener('click', () => {
		const aElement = document.createElement('a'); // создаём ссылку
		aElement.setAttribute('download', 'myImage.jpg'); // браузеру: мы хотим скачать
		aElement.href = canvas.toDataURL('image/jpg'); // задаём адрес картинки
		aElement.click(); // кликаем по кнопке
	});

	/* Выбрать фото и закачать */
	const loadImageInput = document.getElementById('loadImage'); // получ. список загруж. файлов
	loadImageInput.addEventListener('change', async event => {
		const file = loadImageInput.files[0]; // получ. 1 файл
		const base64 = await getBase64(file);
		const image = new Image(); // для нового рисунка
		image.onload = () => {
			originalImage = image; // вместо старого рисунка - новый
			updateFilter();
		};
		image.src = base64; // путь для загрузки картинки
	});

	/* Проверка на ошибки */
	function getBase64(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file); // чтение файла в формате DataURL
			reader.onload = () => resolve(reader.result);
			reader.onerror = error => reject(error); // ошибка при загрузке
		});
	}


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

		element.addEventListener('mouseleave', event => {
			mouse.left = false;
		});

		/* Крутим колёсико мыши для масштаба картинки*/
		element.addEventListener('mousewheel', event => {
			mouse.wheel = event.deltaY; // прокрутка по оси Y
			event.preventDefault(); // останавл. распростр. события прокр. мыши дальше
		});

		return mouse;
	}

})();
 
