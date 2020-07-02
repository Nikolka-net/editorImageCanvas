'use strict';

(async function () {

	/* Размеры canvas по умолчанию */
	let sizeCanvas = {
		CANVAS_WIDTH: 400,
		CANVAS_HEIGHT: 400
	};

	const canvas = document.getElementById('canvas');
	const context = canvas.getContext('2d'); // работаем в режиме 2d
	let originalImage = await loadImage('./image/space.jpeg'); // получ. изображение, дождись выполнения промиса

	const mouse = getMouse(canvas); // данные по координатам

	/* Фильтры */
	const filterGrayInput = document.getElementById('filterGray');
	const filterSepiaInput = document.getElementById('filterSepia');
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
		blue: false,
		sepia: false
	};

	canvas.width = sizeCanvas.CANVAS_WIDTH; // размер
	canvas.height = sizeCanvas.CANVAS_HEIGHT;


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
		context.clearRect(0, 0, canvas.width, canvas.height);
	}

	/* Обработчики на фильтры */
	filterSepiaInput.addEventListener('change', () => {
		filters.sepia = filterSepiaInput.checked;
		updateFilter();
	});

	filterGrayInput.addEventListener('change', () => {
		filters.gray = filterGrayInput.checked;
		updateFilter();
	});

	/* 	filterRedInput.addEventListener('change', () => {
			filters.red = filterRedInput.checked;
			updateFilter();
		}); */

	/* 	filterBlueInput.addEventListener('change', () => {
			filters.blue = filterBlueInput.checked;
			updateFilter();
		}); */

	/* 	filterGreenInput.addEventListener('change', () => {
			filters.green = filterGreenInput.checked;
			updateFilter();
		}); */

	/* Обновление фильтров */
	function updateFilter() {
		if (!filters.gray && !filters.red && !filters.blue && !filters.green && !filters.sepia) { // если не выбраны фильтры
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
		}
		if (filters.sepia) {
			let pixels = imageData.data;
			for (let i = 0; i < imageData.data.length; i += 4) { // перебор пикселей - цветов
				let r = pixels[i];
				let g = pixels[i + 1];
				let b = pixels[i + 2];
				pixels[i] = (r * 0.393) + (g * 0.769) + (b * 0.189); // red
				pixels[i + 1] = (r * 0.349) + (g * 0.686) + (b * 0.168); // green
				pixels[i + 2] = (r * 0.272) + (g * 0.534) + (b * 0.131); // blue
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
		aElement.setAttribute('download', 'myImage.jpeg'); // браузеру: мы хотим скачать
		aElement.href = canvas.toDataURL('image/jpeg'); // задаём адрес картинки
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

	/* Эксперименты */



	/* Проверка яркости */

	const brightness = document.getElementById('brightness');
	const img = document.getElementById('canvas');
	const defaults = { // объект для сброса значений
		brightness: 100
	};
	// brightness.addEventListener('input', updateFilterValue);

	function updateFilterValue() {
		img.style.filter = `
	brightness(${brightness.value}%)
	`;

	}

	/* вызов редактора при нажатии на картинку */

	const editorPhoto = document.querySelector('.editorPhoto');
	const imgAll = document.querySelectorAll('img'); // получ. все img


	const sizeImg = { // для параметров рисунка
		img: '',
		widthImg: '',
		heightImg: '',
		widthImgOrig: '',
		heightImgOrig: ''
	};

	const sizeOverlay = { // размеры рамки
		borderLeft: '',
		borderTop: '',
		/* 	widthFrame: '',
		heightFram: '' */
	};

	function getSizeCanvas() { // получ. ширину и высоту canvas css
		canvas.width = parseInt((getComputedStyle(canvas).width), 10);
		canvas.height = parseInt((getComputedStyle(canvas).height), 10);
	}

	function getSizeImg() { // получ. размеры картинки со стр.
		sizeImg.widthImg = sizeImg.img.clientWidth;
		sizeImg.heightImg = sizeImg.img.clientHeight;
		/* запис. ориг. размеры */
		sizeImg.widthImgOrig = sizeImg.img.clientWidth;
		sizeImg.heightImgOrig = sizeImg.img.clientHeight;
	}

	function getAdaptiveOverlay() { // Подгоняем размер overlay к текущему canvas

		if (sizeImg.widthImg > sizeImg.heightImg) {
			let ratio = parseFloat((sizeImg.widthImg / sizeImg.heightImg).toFixed(1)); // соотношение сторон, округление до десятых
			sizeImg.widthImg = (canvas.width - 20); // ширина в соот. с canvas
			sizeImg.heightImg = Math.floor(sizeImg.widthImg / ratio); // высота в соот. с шириной
		} else if (sizeImg.widthImg < sizeImg.heightImg) {
			let ratio = parseFloat((sizeImg.heightImg / sizeImg.widthImg).toFixed(1)); // соотношение сторон, округление до десятых
			sizeImg.heightImg = (canvas.height - 20); // ширина в соот. с canvas
			sizeImg.widthImg = Math.floor(sizeImg.heightImg / ratio); // высота в соот. с шириной
		} else if (sizeImg.widthImg === sizeImg.heightImg) {
			sizeImg.widthImg = (canvas.width - 20);
			sizeImg.heightImg = (canvas.height - 20);
		}
	}

	function getPositionOverlay() { // высчитываем left and top рамки
		sizeOverlay.borderLeft = Math.floor(((parseInt((getComputedStyle(canvas).width), 10)) - sizeImg.widthImg) / 2);
		sizeOverlay.borderTop = Math.floor(((parseInt((getComputedStyle(canvas).height), 10)) - sizeImg.heightImg) / 2);
	}

	function putSizeOverlay() { // вносим изменения в overlay
		const overlay = document.querySelector('.overlay'); // рамка
		overlay.style.cssText = `
		width: ${sizeImg.widthImg}px;
		height: ${sizeImg.heightImg}px;
		left: ${sizeOverlay.borderLeft}px;
		top: ${sizeOverlay.borderTop}px;
		`;
	}

	/* 	function getAdaptiveOverlay() { // Меняем размер overlay, если img > canvas

			if (sizeImg.widthImg > (canvas.width - 15) || sizeImg.heightImg > (canvas.height - 15)) {
				sizeImg.widthImgOrig = sizeImg.img.clientWidth;
				sizeImg.heightImgOrig = sizeImg.img.clientHeight;

				sizeImg.widthImg = Math.floor((sizeImg.widthImg / canvas.width) * 100);
				sizeImg.heightImg = Math.floor((sizeImg.heightImg / canvas.height) * 100);

				if (sizeImg.widthImg > (canvas.width - 10) || sizeImg.heightImg > (canvas.height - 10)) {
					sizeImg.widthImg = Math.floor((sizeImg.widthImg / canvas.width) * 100);
					sizeImg.heightImg = Math.floor((sizeImg.heightImg / canvas.height) * 100);

					if (sizeImg.widthImg > (canvas.width - 5) || sizeImg.heightImg > (canvas.height - 5)) {
						sizeImg.widthImg = Math.floor((sizeImg.widthImg / canvas.width) * 25);
						sizeImg.heightImg = Math.floor((sizeImg.heightImg / canvas.height) * 25);
					}
				}
			}
		} */

	/* Клик на рисунок - вызываем редактор */
	imgAll.forEach((elem) => {
		elem.addEventListener('click', () => {
			sizeImg.img = elem; // Передаём саму картинку в объект, чтобы к ней обратиться
			editorPhoto.style.display = 'flex';
			getSizeImg();
			getSizeCanvas();
			getAdaptiveOverlay();
			getPositionOverlay();
			putSizeOverlay();
		});
	});

	/* Прослушиватель изменения окна браузера, с оптимизацией */

	let throttle = function (type, name, obj) {
		obj = obj || window;
		let running = false;
		let func = function () {
			if (running) {
				return;
			}
			running = true;
			requestAnimationFrame(function () {
				obj.dispatchEvent(new CustomEvent(name));
				running = false;
			});
		};
		obj.addEventListener(type, func);
	};
	throttle("resize", "optimizedResize");

	/* Изменение canvas и overlay при изм. окна браузера */
	window.addEventListener("optimizedResize", () => {

		function updateCanvasOverlay() { // обновляем шир. и выс.
			let widthBody = document.body.clientWidth; // ширина окна браузера
			function launchOfAll() {
				getSizeImg();
				getSizeCanvas();
				getAdaptiveOverlay();
				getPositionOverlay();
				putSizeOverlay();
			}

			if (widthBody > 991) {
				launchOfAll();
			}
			if (widthBody <= 991) {
				launchOfAll();
			}
			if (widthBody <= 767) {
				launchOfAll();
			}
			if (widthBody <= 575) {
				launchOfAll();
			}
		}
		updateCanvasOverlay();
	});


	/* Обрезка по рамке */

	let trim = document.getElementById('trim');
	let canvasHidden = document.getElementById('canvasHidden');
	let canvasHiddenContext = canvasHidden.getContext('2d');

	trim.addEventListener('click', () => {

		canvasHiddenContext.clearRect(0, 0, canvas.width, canvas.height); // очистка canvasHidden
		canvasHidden.width = sizeImg.widthImgOrig; // задаём размеры canvas
		canvasHidden.height = sizeImg.heightImgOrig;
		/* Сохраняем обрез. картинку в соот. с ориг. размером */
		canvasHiddenContext.drawImage(canvas, sizeOverlay.borderLeft, sizeOverlay.borderTop, sizeImg.widthImg, sizeImg.heightImg, 0, 0, sizeImg.widthImgOrig, sizeImg.heightImgOrig);

		/* blob1 */
				canvasHidden.toBlob(function (blob) {
					console.log('blob: ', blob);

				}, 'image/jpeg');

		/* blob2 */
		let url = canvasHidden.toDataURL('image/jpeg');

		/* 	fetch(url)
				.then(res => res.blob())
				.then(blob => {
					let fd = new FormData();
					fd.append('image', blob, 'filename');
					console.log('blob: ', blob);
					// Upload
					//fetch('upload', {method: 'POST', body: fd})
					fetch('server.php', {
							method: 'POST',
							body: fd
						})
						.then(response => response.json())
						//.then(response => console.log('server', response.blob()))
						.then(res => console.log(res));
				}); */

	});


	document.getElementById('download2').addEventListener('click', () => {

		let aElement = document.createElement('a'); // создаём ссылку
		aElement.setAttribute('download', 'myImage2.jpeg'); // браузеру: мы хотим скачать
		aElement.href = canvasHidden.toDataURL('image/jpeg'); // задаём адрес картинки
		aElement.click(); // кликаем по кнопке
	});


	/* end эксперименты */

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
 
