'use strict';



(async function () {

	/* Размеры canvas по умолчанию */
	let sizeCanvas = {
		CANVAS_WIDTH: 400,
		CANVAS_HEIGHT: 400
	};

	const canvas = document.getElementById('canvas');
	const context = canvas.getContext('2d'); // работаем в режиме 2d

	// function loadImage(src) {
	// 	console.log('src: ', src);
	// 	return new Promise((resolve, reject) => { // возвр. промисс
	// 		try {
	// 			const image = new Image(); // созд. объект image
	// 			console.log('image: ', image);
	// 			image.onload = () => resolve(image); // когда загруз. img вызов. resolve
	// 			image.src = src;
	// 			console.log('image.src: ', image.src);

	// 		} catch (err) {
	// 			return reject(err);
	// 		}
	// 	});

	// }


	let originalImage = await loadImage('./image/space.jpeg'); // получ. изображение, дождись выполнения промиса

	function loadImage(src) {
		return new Promise((resolve, reject) => {
				const image = new Image(); // созд. объект image
				console.log('image: ', image);
				image.onload = () => resolve(image); // когда загруз. img вызов. resolve
				image.src = src;
				console.log('image.src: ', image.src);
				image.onerror = () => reject(new Error(`ошибка загрузки скрипта ${src}`));

			})
			.catch(err => console.log(err));

	}



	const events = getEvents(canvas); // данные по координатам

	let image = originalImage; // переменная для originalImage

	const imageParams = { // параметры отступов
		offsetX: 0,
		offsetY: 0,
		scale: 1 // масштаб
	};


	canvas.width = sizeCanvas.CANVAS_WIDTH; // размер
	canvas.height = sizeCanvas.CANVAS_HEIGHT;

	/* Обновляем canvas */
	update();

	function update() {
		requestAnimationFrame(update);

		/* Изменение отступов для изме-я отображе-я картинки */
		if (events.leftMouse) { // если нажата левая кнопка
			imageParams.offsetX += events.dx;
			imageParams.offsetY += events.dy;
		}

		/* my */

		if (events.tch) { // touch событие движение
			imageParams.offsetX += events.dx;
			imageParams.offsetY += events.dy;
		}

		/* масштаб */
		if (events.more) { // увеличить
			events.wheel = parseInt(-100);
		}
		if (events.less) { // уменьшить
			events.wheel = parseInt(100);
		}

		/* движение */
		if (events.up) {
			imageParams.offsetY -= parseInt(3);
		}
		if (events.down) {
			imageParams.offsetY += parseInt(3);
		}
		if (events.left) {
			imageParams.offsetX -= parseInt(3);
		}
		if (events.right) {
			imageParams.offsetX += parseInt(3);
		}


		/* end my  */

		/* Меняем масштаб при прокруч. колёсика мыши*/
		if (events.wheel) {
			imageParams.scale -= events.wheel / 10000;

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
		events.update(); // обнуляем параметры dx and dy


	}

	function clearCanvas() { // очистка canvas
		context.clearRect(0, 0, canvas.width, canvas.height);
	}

	/* Обновление canvas при загрузке новой картинки */

	function updateImgCanvas() {
		image = originalImage;
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

		// возвр. данные для вступления в силу
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

	/* 	document.getElementById('download').addEventListener('click', () => {
			const aElement = document.createElement('a'); // создаём ссылку
			aElement.setAttribute('download', 'myImage.jpeg'); // браузеру: мы хотим скачать
			aElement.href = canvas.toDataURL('image/jpeg'); // задаём адрес картинки
			aElement.click(); // кликаем по кнопке
		}); */

	/* Выбрать фото и закачать */
	const loadImageInput = document.getElementById('loadImage'); // получ. список загруж. файлов
	loadImageInput.addEventListener('change', async event => {
		const file = loadImageInput.files[0]; // получ. 1 файл
		const base64 = await getBase64(file);
		let image = new Image(); // для нового рисунка
		image.onload = () => {
			originalImage = image; // вместо старого рисунка - новый
			updateImgCanvas();
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

	/* вызов редактора при нажатии на картинку */


	const popupPhoto = document.querySelector('.popupPhoto');
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
		borderTop: ''
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


	/* Клик на рисунок - вызываем редактор */
	imgAll.forEach((elem) => {
		elem.addEventListener('click', () => {
			sizeImg.img = elem; // Передаём саму картинку в объект, чтобы к ней обратиться
			popupPhoto.style.display = 'flex';
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

	const trim = document.getElementById('trim');
	let canvasHidden = document.getElementById('canvasHidden');
	let canvasHiddenContext = canvasHidden.getContext('2d');


	trim.addEventListener('click', (event) => {

		canvasHiddenContext.clearRect(0, 0, canvas.width, canvas.height); // очистка canvasHidden
		canvasHidden.width = sizeImg.widthImgOrig; // задаём размеры canvas
		canvasHidden.height = sizeImg.heightImgOrig;
		/* Сохраняем обрез. картинку в соот. с ориг. размером */
		canvasHiddenContext.drawImage(canvas, sizeOverlay.borderLeft, sizeOverlay.borderTop, sizeImg.widthImg, sizeImg.heightImg, 0, 0, sizeImg.widthImgOrig, sizeImg.heightImgOrig);

		/* Добавление рис. на стр, ajax: сохранение в папке img  */

		// canvasHidden.toBlob(function (blob) {
		// 	let newImg = document.createElement('img'),
		// 		url = URL.createObjectURL(blob);

		// 	newImg.onload = function () {
		// 		// больше не нужно читать blob, поэтому он отменен
		// 		URL.revokeObjectURL(url);
		// 	};

		// 	newImg.src = url;
		// 	// console.log('newImg.src: ', newImg.src);
		// 	// document.body.appendChild(newImg);


		// });

		/* ajax */
		let dataURL = canvasHidden.toDataURL('image/jpeg');
		$.ajax({
			url: './server.php',
			type: 'POST',
			data: {
				dataURL: dataURL
			},
			// processData: false,
			// contentType: false,
			success: function (res) {
				console.log('res', res);
				/* 	let newImg2 = document.createElement('img');
					newImg2.src = './img/' + res.data.src;
					document.body.appendChild(newImg2);
					console.log('newImg2.src: ', newImg2.src); */
			},
			error: function () {
				console.log('Произошла ошибка!');
			}
		});

		/* Другие функции */

		/* blob1 */
		/* 		canvasHidden.toBlob(function (blob) {
					let fd = new FormData();
					fd.append(blob);
					axios
						.post('../api/server.php', fd, {
							headers: {
								'Content-Type': 'multipart/form-data'
							}
						})
						.then((res) => {
							console.log('res', res);
						});

					console.log('blob: ', blob);

				}, 'image/jpeg'); */

		/* blob2 */
		// let url = canvasHidden.toDataURL('image/jpeg');

		// let fd = new FormData();
		// fd.append('image', url);

		// $.ajax({
		// 	url: 'server.php',
		// 	type: 'POST',
		// 	data: {
		// 		url: url
		// 	},
		// 	// processData: false,
		// 	// contentType: false,
		// 	success: function (res) {
		// 		console.log(res);
		// 	},
		// 	error: function () {
		// 		console.log('Произошла ошибка!');
		// 	}
		// });


		/* 	fetch(url)
				.then(res => res.blob()) */
		/* 	.then(blob => {
				let fd = new FormData();
				fd.append('image', blob);
				console.log('blob: ', blob);

				// Upload
				//fetch('upload', {method: 'POST', body: fd})
				 	// fetch('server.php', {
					// 		method: 'POST',
					// 		body: fd
					// 	})
				// .then(response => response.blob());
				//  .then(response => console.log('server', response.blob()));
				//.then(response => console.log('res', response));
			}); */

		/* blob3 */

		/* 		canvasHidden.toBlob(function (blob) {
					let fd = new FormData();
					fd.append('image', blob);
					$.ajax({
						url: 'server.php',
						type: 'POST',
						data: fd,
						processData: false,
						contentType: true,
						success: function (res) {
							console.log(res);
						},
						error: function () {
							console.log('Произошла ошибка!');
						}
					});
				}, 'image/jpeg'); */

		/* blob 4 */

		/* 		function dataURItoBlob(dataURI) {
					let binary = atob(dataURI.split(',')[1]);
					let array = [];
					for (let i = 0; i < binary.length; i++) {
						array.push(binary.charCodeAt(i));
					}
					return new Blob([new Uint8Array(array)], {
						type: 'image/jpeg'
					});
				} */

		/* 		let dataURL = canvasHidden.toDataURL('image/jpeg');
				// let blob = dataURItoBlob(dataURL);
				console.log('blob: ', blob);
				let fd = new FormData();
				// fd.append('canvasImage', blob, 'image.jpeg');
				fd.append('image', blob);
				$.ajax({
					url: 'server.php',
					type: 'POST',
					data: {
						dataURL: dataURL
					},
					// processData: false,
					// contentType: false,
					success: function (res) {
						console.log(res);
					},
					error: function () {
						console.log('Произошла ошибка!');
					}
				}); */


		/* end blob 4 */

		/* fetch */
		/* let dataURL = canvasHidden.toDataURL('image/jpeg');
		let formData = new FormData();
		formData.append('dataURL', dataURL); */

		/* fetch('server.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(dataURL)
			})
			.then(function (res) {
				console.log('res: ', res);


			}).catch(error => console.error(error)); */

		/* 		async function submit() {
					let imageBlob = await new Promise(resolve => canvasHidden.toBlob(resolve, 'image/png'));

					let formData = new FormData();
					// formData.append("firstName", "John");
					formData.append("image", imageBlob);

					let response = await fetch('./server.php', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(formData)
						})
						.then(res => res.json())
						.then(data => {
							console.log('data');
						});

				}
				submit(); */
		/* end fetch */

		/* end другие функции */

	});

	/* функция "отмена", убираем редактор */

	const popup = document.querySelector('.popup'); // получ. элемент, где расположен редактор

	const popupNone = () => { // убираем окно редактора
		popupPhoto.style.display = 'none';
	};

	const getOldImg = () => { // вставка старой картинки

		imageParams.update = () => { // обнуляем параметры отступа и масштаба картинки
			imageParams.scale = 1;
			imageParams.offsetX = 0;
			imageParams.offsetY = 0;
		};

		imageParams.update(); // старая картинка встаёт по старым координатам

		let image = new Image(); // для нового(старого) рисунка
		image.onload = () => {
			originalImage = image; // вместо старого рисунка - новый
			updateImgCanvas();
		};
		image.src = ('./image/space.jpeg'); // путь для загрузки картинки
	};

	popup.addEventListener('click', (event) => {
		let target = event.target;
		if (target.matches('#cancel')) { // если нажали на кнопку "отмена"
			popupNone();
			getOldImg();
		} else {
			target = target.closest('.editorPhoto');
			if (!target) { //если не получили editorPhoto, т.е. получили null при клике за пределами окна
				popupNone(); //окно исчезает при клике за пределы окна
				getOldImg();
			}
		}
	});

	/* end функция "отмена" */

	/* end эксперименты */

	/* Получаем img */
	// function loadImage(src) {
	// 	console.log('src: ', src);
	// 	return new Promise((resolve, reject) => { // возвр. промисс
	// 		try {
	// 			const image = new Image(); // созд. объект image
	// 			console.log('image: ', image);
	// 			image.onload = () => resolve(image); // когда загруз. img вызов. resolve
	// 			image.src = src;
	// 			console.log('image.src: ', image.src);

	// 		} catch (err) {
	// 			return reject(err);
	// 		}
	// 	});

	// }

	/* Получ. координаты, работа с картинкой */

	let touchMove = (element, event) => { // touch события, не выходим за границу canvas
		event.preventDefault();

		const rectTouch = element.getBoundingClientRect(); // метод - данные по положению картинки

		/* Ширина и высота canvas */
		let rectWidth = rectTouch.width;
		let rectHeight = rectTouch.height;

		/* Координаты касания */
		const xTouch = event.changedTouches[0].clientX - rectTouch.left;
		const yTouch = event.changedTouches[0].clientY - rectTouch.top;

		/* Если уводим палец за границу canvas картинка не движется  */
		if ((xTouch < rectWidth && xTouch > 0) && (yTouch < rectHeight && yTouch > 0)) {
			if (event.type === 'touchstart') {

				events.tch = true;
				events.x = xTouch; // обновляем координаты
				events.y = yTouch;
			} else if (event.type === 'touchmove') {

				events.dx = xTouch - events.x; // новые минус старые координаты
				events.dy = yTouch - events.y;

				events.x = xTouch; // обновляем координаты
				events.y = yTouch;
			} else if (event.type === 'touchend') {

				events.tch = false;
			}

		} else { // если выходим за границу
			events.tch = false;
		}
	};

	function getEvents(element) {
		const events = {
			x: 0,
			y: 0,
			dx: 0,
			dy: 0, // насколько изменилась координата, насколько сместились
			leftMouse: false, // когда true - нажата левая кнопка мыши
			wheel: 0, // колесо мыши не крутится
			tch: false,
			more: false, // увеличение картинки
			less: false, // уменьшение картинки
			up: false, // движение картинки вверх
			down: false,
			left: false,
			right: false,
		};

		events.update = () => { // обнуляем измене-е координат
			events.dx = 0;
			events.dy = 0;
			events.wheel = 0; // обнул. знач. от колёсика мыши
		};

		/* События на элемент при движении картинки */
		element.addEventListener('mousemove', event => {
			const rectMouse = element.getBoundingClientRect(); // метод - данные по полжению картинки

			const xMouse = event.clientX - rectMouse.left; // вычитаем отступ canvasa из клиент-х координат
			const yMouse = event.clientY - rectMouse.top;


			events.dx = xMouse - events.x; // новые минус старые координаты
			events.dy = yMouse - events.y;


			events.x = xMouse; // обновляем координаты
			events.y = yMouse;

		});


		/* События на элемент при движении картинки */
		element.addEventListener('touchmove', event => {
			touchMove(element, event);
		});

		element.addEventListener('touchstart', event => {
			touchMove(element, event);
		});

		element.addEventListener('touchend', event => {
			touchMove(element, event);
		});


		/* Нажата кнопка мыши */
		element.addEventListener('mousedown', event => {
			if (event.button === 0) { // если левая кнопка мыши
				events.leftMouse = true;
			}
		});

		/* Поднята кнопка мыши */
		element.addEventListener('mouseup', event => {
			if (event.button === 0) { // если левая кнопка мыши
				events.leftMouse = false;
			}
		});

		element.addEventListener('mouseleave', event => {
			events.leftMouse = false;
		});

		/* Крутим колёсико мыши для масштаба картинки*/
		element.addEventListener('mousewheel', event => {
			events.wheel = event.deltaY; // прокрутка по оси Y
			event.preventDefault(); // останавл. распростр. события прокр. мыши дальше
		});

		return events;
	}


	/* my code: события*/

	/* изменение вида кнопки при нажатии мыши и touch событии */

	let buttonMenuAll = document.querySelectorAll('.buttonMenu');

	buttonMenuAll.forEach((elem) => {
		elem.addEventListener('touchstart', () => {
			elem.classList.add('opacity');

		});
		elem.addEventListener('touchend', () => {
			elem.classList.remove('opacity');

		});
	});

	buttonMenuAll.forEach((elem) => {
		elem.addEventListener('mousedown', () => {
			elem.classList.add('opacity');

		});
		elem.addEventListener('mouseup', () => {
			elem.classList.remove('opacity');
		});
	});

	/* end изменение вида кнопки при нажатии мыши и touch событии */

	/* движение и изменение масштаба картинки по кнопкам */

	let buttonAll = document.querySelectorAll('button');


	/* события мыши на кнопках */

	let mouseEvents = (elem, event) => {
		if (event.button === 0) {
			let eventElem = String(elem.classList[0]); // запис. имя класса строкой

			let cssElem = document.querySelector(`.${eventElem}`); // для изменения внешнего вида кнопки

			if (event.type === 'mousedown') { // проверка типа события
				cssElem.classList.add('opacity'); // добавл. кнопке прозрачность
				events[eventElem] = true;
			} else if (event.type === 'mouseup') {
				cssElem.classList.remove('opacity'); // удаляем прозрачность
				events[eventElem] = false;

			}
		}
	};

	buttonAll.forEach((elem) => {
		elem.addEventListener('mousedown', (event) => {

			if (elem.matches('.up')) {
				mouseEvents(elem, event);
			}
			if (elem.matches('.down')) {
				mouseEvents(elem, event);
			}
			if (elem.matches('.left')) {
				mouseEvents(elem, event);
			}
			if (elem.matches('.right')) {
				mouseEvents(elem, event);
			}
			if (elem.closest('.more')) {
				mouseEvents(elem, event);
			}
			if (elem.matches('.less')) {
				mouseEvents(elem, event);
			}
		});
		elem.addEventListener('mouseup', (event) => {

			if (elem.matches('.up')) {
				mouseEvents(elem, event);
			}
			if (elem.matches('.down')) {
				mouseEvents(elem, event);
			}
			if (elem.matches('.left')) {
				mouseEvents(elem, event);
			}
			if (elem.matches('.right')) {
				mouseEvents(elem, event);
			}
			if (elem.matches('.more')) {
				mouseEvents(elem, event);
			}
			if (elem.matches('.less')) {
				mouseEvents(elem, event);
			}
		});
	});

	/* end события мыши на кнопках */


	/* touch события кнопках */

	let touchEvents = (elem, event) => {
		event.preventDefault();
		const rectElem = elem.getBoundingClientRect();

		let eventElem = String(elem.classList[0]); // получ. название класс элемента
		let rectWidth = rectElem.width;
		let rectHeight = rectElem.height;

		let cssElem = document.querySelector(`.${eventElem}`); // для изменения внешнего вида кнопки

		const xElem = event.changedTouches[0].clientX - rectElem.left;
		const yElem = event.changedTouches[0].clientY - rectElem.top;

		/* Если уводим палец за границу кнопки, она не срабатывает */
		if ((xElem < rectWidth && xElem > 0) && (yElem < rectHeight && yElem > 0)) {

			if (event.type === 'touchstart') { // проверка имени события
				events[eventElem] = true; // добавляем значение в объект по имени класса элемента

				cssElem.classList.add('opacity'); // добавл. кнопке прозрачность

				event.preventDefault();
			} else if (event.type === 'touchend') {
				events[eventElem] = false;

				cssElem.classList.remove('opacity'); // убираем прозрачность

				event.preventDefault();

			}
		}

	};

	buttonAll.forEach((elem) => {
		elem.addEventListener('touchstart', (event) => {

			if (elem.matches('.up')) {
				touchEvents(elem, event);
			}
			if (elem.matches('.down')) {
				touchEvents(elem, event);
			}
			if (elem.matches('.left')) {
				touchEvents(elem, event);
			}
			if (elem.matches('.right')) {
				touchEvents(elem, event);
			}
			if (elem.matches('.more')) {
				touchEvents(elem, event);
			}
			if (elem.matches('.less')) {
				touchEvents(elem, event);
			}

		});
		elem.addEventListener('touchend', (event) => {

			if (elem.matches('.up')) {
				touchEvents(elem, event);
			}
			if (elem.matches('.down')) {
				touchEvents(elem, event);
			}
			if (elem.matches('.left')) {
				touchEvents(elem, event);
			}
			if (elem.matches('.right')) {
				touchEvents(elem, event);
			}
			if (elem.matches('.more')) {
				touchEvents(elem, event);
			}
			if (elem.matches('.less')) {
				touchEvents(elem, event);
			}
		});
	});


	/* end движение и масштаб картинки по кнопкам */

	/* end my code */


})();
