/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


var _regenerator = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _regenerator2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_asyncToGenerator2);


(0, _asyncToGenerator3["default"])( /*#__PURE__*/_regenerator2["default"].mark(function _callee2() {
  var sizeCanvas, canvas, context, originalImage, events, image, imageParams, update, clearCanvas, updateImgCanvas, loadImageInput, getBase64, popupPhoto, imgAll, sizeImg, sizeOverlay, getSizeCanvas, getSizeImg, getAdaptiveOverlay, getPositionOverlay, putSizeOverlay, throttle, trim, canvasHidden, canvasHiddenContext, popup, popupNone, getOldImg, loadImage, touchMove, getEvents, buttonMenuAll, buttonAll, mouseEvents, touchEvents;
  return _regenerator2["default"].wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          getEvents = function _getEvents(element) {
            var events = {
              x: 0,
              y: 0,
              dx: 0,
              dy: 0,
              // насколько изменилась координата, насколько сместились
              leftMouse: false,
              // когда true - нажата левая кнопка мыши
              wheel: 0,
              // колесо мыши не крутится
              tch: false,
              more: false,
              // увеличение картинки
              less: false,
              // уменьшение картинки
              up: false,
              // движение картинки вверх
              down: false,
              left: false,
              right: false
            };

            events.update = function () {
              // обнуляем измене-е координат
              events.dx = 0;
              events.dy = 0;
              events.wheel = 0; // обнул. знач. от колёсика мыши
            };
            /* События на элемент при движении картинки */


            element.addEventListener('mousemove', function (event) {
              var rectMouse = element.getBoundingClientRect(); // метод - данные по полжению картинки

              var xMouse = event.clientX - rectMouse.left; // вычитаем отступ canvasa из клиент-х координат

              var yMouse = event.clientY - rectMouse.top;
              events.dx = xMouse - events.x; // новые минус старые координаты

              events.dy = yMouse - events.y;
              events.x = xMouse; // обновляем координаты

              events.y = yMouse;
            });
            /* События на элемент при движении картинки */

            element.addEventListener('touchmove', function (event) {
              touchMove(element, event);
            });
            element.addEventListener('touchstart', function (event) {
              touchMove(element, event);
            });
            element.addEventListener('touchend', function (event) {
              touchMove(element, event);
            });
            /* Нажата кнопка мыши */

            element.addEventListener('mousedown', function (event) {
              if (event.button === 0) {
                // если левая кнопка мыши
                events.leftMouse = true;
              }
            });
            /* Поднята кнопка мыши */

            element.addEventListener('mouseup', function (event) {
              if (event.button === 0) {
                // если левая кнопка мыши
                events.leftMouse = false;
              }
            });
            element.addEventListener('mouseleave', function (event) {
              events.leftMouse = false;
            });
            /* Крутим колёсико мыши для масштаба картинки*/

            element.addEventListener('mousewheel', function (event) {
              events.wheel = event.deltaY; // прокрутка по оси Y

              event.preventDefault(); // останавл. распростр. события прокр. мыши дальше
            });
            return events;
          };

          loadImage = function _loadImage(src) {
            return new Promise(function (resolve, reject) {
              // возвр. промисс
              try {
                var _image = new Image(); // созд. объект image


                _image.onload = function () {
                  return resolve(_image);
                }; // когда загруз. img вызов. resolve


                _image.src = src;
              } catch (err) {
                return reject(err);
              }
            });
          };

          putSizeOverlay = function _putSizeOverlay() {
            // вносим изменения в overlay
            var overlay = document.querySelector('.overlay'); // рамка

            overlay.style.cssText = "\n\t\twidth: ".concat(sizeImg.widthImg, "px;\n\t\theight: ").concat(sizeImg.heightImg, "px;\n\t\tleft: ").concat(sizeOverlay.borderLeft, "px;\n\t\ttop: ").concat(sizeOverlay.borderTop, "px;\n\t\t");
          };

          getPositionOverlay = function _getPositionOverlay() {
            // высчитываем left and top рамки
            sizeOverlay.borderLeft = Math.floor((parseInt(getComputedStyle(canvas).width, 10) - sizeImg.widthImg) / 2);
            sizeOverlay.borderTop = Math.floor((parseInt(getComputedStyle(canvas).height, 10) - sizeImg.heightImg) / 2);
          };

          getAdaptiveOverlay = function _getAdaptiveOverlay() {
            // Подгоняем размер overlay к текущему canvas
            if (sizeImg.widthImg > sizeImg.heightImg) {
              var ratio = parseFloat((sizeImg.widthImg / sizeImg.heightImg).toFixed(1)); // соотношение сторон, округление до десятых

              sizeImg.widthImg = canvas.width - 20; // ширина в соот. с canvas

              sizeImg.heightImg = Math.floor(sizeImg.widthImg / ratio); // высота в соот. с шириной
            } else if (sizeImg.widthImg < sizeImg.heightImg) {
              var _ratio = parseFloat((sizeImg.heightImg / sizeImg.widthImg).toFixed(1)); // соотношение сторон, округление до десятых


              sizeImg.heightImg = canvas.height - 20; // ширина в соот. с canvas

              sizeImg.widthImg = Math.floor(sizeImg.heightImg / _ratio); // высота в соот. с шириной
            } else if (sizeImg.widthImg === sizeImg.heightImg) {
              sizeImg.widthImg = canvas.width - 20;
              sizeImg.heightImg = canvas.height - 20;
            }
          };

          getSizeImg = function _getSizeImg() {
            // получ. размеры картинки со стр.
            sizeImg.widthImg = sizeImg.img.clientWidth;
            sizeImg.heightImg = sizeImg.img.clientHeight;
            /* запис. ориг. размеры */

            sizeImg.widthImgOrig = sizeImg.img.clientWidth;
            sizeImg.heightImgOrig = sizeImg.img.clientHeight;
          };

          getSizeCanvas = function _getSizeCanvas() {
            // получ. ширину и высоту canvas css
            canvas.width = parseInt(getComputedStyle(canvas).width, 10);
            canvas.height = parseInt(getComputedStyle(canvas).height, 10);
          };

          getBase64 = function _getBase(file) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.readAsDataURL(file); // чтение файла в формате DataURL

              reader.onload = function () {
                return resolve(reader.result);
              };

              reader.onerror = function (error) {
                return reject(error);
              }; // ошибка при загрузке

            });
          };

          updateImgCanvas = function _updateImgCanvas() {
            image = originalImage;
            var canvas = document.createElement('canvas'); // созд. вирт. canvas

            var context = canvas.getContext('2d');
            canvas.width = originalImage.width; // задаём размеры

            canvas.height = originalImage.height;
            context.drawImage( // задаём отрисовку
            originalImage, 0, 0, originalImage.width, originalImage.height, 0, 0, canvas.width, canvas.height);
            var imageData = context.getImageData(0, 0, canvas.width, canvas.height); // нужен сервер; записыв. данные изображения - шир., высота
            // возвр. данные для вступления в силу

            context.putImageData(imageData, 0, // отсюда начинаем
            0, 0, 0, imageData.width, // размеры canvasa
            imageData.height);
            image = canvas; // меняем image на canvas
          };

          clearCanvas = function _clearCanvas() {
            // очистка canvas
            context.clearRect(0, 0, canvas.width, canvas.height);
          };

          update = function _update() {
            requestAnimationFrame(update);
            /* Изменение отступов для изме-я отображе-я картинки */

            if (events.leftMouse) {
              // если нажата левая кнопка
              imageParams.offsetX += events.dx;
              imageParams.offsetY += events.dy;
            }
            /* my */


            if (events.tch) {
              // touch событие движение
              imageParams.offsetX += events.dx;
              imageParams.offsetY += events.dy;
            }
            /* масштаб */


            if (events.more) {
              // увеличить
              events.wheel = parseInt(-100);
            }

            if (events.less) {
              // уменьшить
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
            image, 0, 0, image.width, image.height, imageParams.offsetX, imageParams.offsetY, image.width * imageParams.scale, // > < масштаб
            image.height * imageParams.scale);
            events.update(); // обнуляем параметры dx and dy
          };

          /* Размеры canvas по умолчанию */
          sizeCanvas = {
            CANVAS_WIDTH: 400,
            CANVAS_HEIGHT: 400
          };
          canvas = document.getElementById('canvas');
          context = canvas.getContext('2d'); // работаем в режиме 2d

          _context2.next = 16;
          return loadImage('./image/space.jpeg');

        case 16:
          originalImage = _context2.sent;
          // получ. изображение, дождись выполнения промиса
          events = getEvents(canvas); // данные по координатам

          image = originalImage; // переменная для originalImage

          imageParams = {
            // параметры отступов
            offsetX: 0,
            offsetY: 0,
            scale: 1 // масштаб

          };
          canvas.width = sizeCanvas.CANVAS_WIDTH; // размер

          canvas.height = sizeCanvas.CANVAS_HEIGHT;
          /* Обновляем canvas */

          update();

          /* Скачать фото */

          /* 	document.getElementById('download').addEventListener('click', () => {
          		const aElement = document.createElement('a'); // создаём ссылку
          		aElement.setAttribute('download', 'myImage.jpeg'); // браузеру: мы хотим скачать
          		aElement.href = canvas.toDataURL('image/jpeg'); // задаём адрес картинки
          		aElement.click(); // кликаем по кнопке
          	}); */

          /* Выбрать фото и закачать */
          loadImageInput = document.getElementById('loadImage'); // получ. список загруж. файлов

          loadImageInput.addEventListener('change', /*#__PURE__*/function () {
            var _ref2 = (0, _asyncToGenerator3["default"])( /*#__PURE__*/_regenerator2["default"].mark(function _callee(event) {
              var file, base64, image;
              return _regenerator2["default"].wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      file = loadImageInput.files[0]; // получ. 1 файл

                      _context.next = 3;
                      return getBase64(file);

                    case 3:
                      base64 = _context.sent;
                      image = new Image(); // для нового рисунка

                      image.onload = function () {
                        originalImage = image; // вместо старого рисунка - новый

                        updateImgCanvas();
                      };

                      image.src = base64; // путь для загрузки картинки

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }());
          /* Проверка на ошибки */

          /* Эксперименты */

          /* вызов редактора при нажатии на картинку */
          popupPhoto = document.querySelector('.popupPhoto');
          imgAll = document.querySelectorAll('img'); // получ. все img

          sizeImg = {
            // для параметров рисунка
            img: '',
            widthImg: '',
            heightImg: '',
            widthImgOrig: '',
            heightImgOrig: ''
          };
          sizeOverlay = {
            // размеры рамки
            borderLeft: '',
            borderTop: ''
          };

          /* Клик на рисунок - вызываем редактор */
          imgAll.forEach(function (elem) {
            elem.addEventListener('click', function () {
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

          throttle = function throttle(type, name, obj) {
            obj = obj || window;
            var running = false;

            var func = function func() {
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

          window.addEventListener("optimizedResize", function () {
            function updateCanvasOverlay() {
              // обновляем шир. и выс.
              var widthBody = document.body.clientWidth; // ширина окна браузера

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

          trim = document.getElementById('trim');
          canvasHidden = document.getElementById('canvasHidden');
          canvasHiddenContext = canvasHidden.getContext('2d');
          trim.addEventListener('click', function (event) {
            canvasHiddenContext.clearRect(0, 0, canvas.width, canvas.height); // очистка canvasHidden

            canvasHidden.width = sizeImg.widthImgOrig; // задаём размеры canvas

            canvasHidden.height = sizeImg.heightImgOrig;
            /* Сохраняем обрез. картинку в соот. с ориг. размером */

            canvasHiddenContext.drawImage(canvas, sizeOverlay.borderLeft, sizeOverlay.borderTop, sizeImg.widthImg, sizeImg.heightImg, 0, 0, sizeImg.widthImgOrig, sizeImg.heightImgOrig);
            /* Добавление рис. на стр, ajax: сохранение в папке img  */

            /* ajax */

            var dataURL = canvasHidden.toDataURL('image/jpeg');
            $.ajax({
              url: './server.php',
              type: 'POST',
              data: {
                dataURL: dataURL
              },
              // processData: false,
              // contentType: false,
              success: function success(res) {
                console.log('res', res);
                /* 	let newImg2 = document.createElement('img');
                	newImg2.src = './img/' + res.data.src;
                	document.body.appendChild(newImg2);
                	console.log('newImg2.src: ', newImg2.src); */
              },
              error: function error() {
                console.log('Произошла ошибка!');
              }
            });
          });
          /* функция "отмена", убираем редактор */

          popup = document.querySelector('.popup'); // получ. элемент, где расположен редактор

          popupNone = function popupNone() {
            // убираем окно редактора
            popupPhoto.style.display = 'none';
          };

          getOldImg = function getOldImg() {
            // вставка старой картинки
            imageParams.update = function () {
              // обнуляем параметры отступа и масштаба картинки
              imageParams.scale = 1;
              imageParams.offsetX = 0;
              imageParams.offsetY = 0;
            };

            imageParams.update(); // старая картинка встаёт по старым координатам

            var image = new Image(); // для нового(старого) рисунка

            image.onload = function () {
              originalImage = image; // вместо старого рисунка - новый

              updateImgCanvas();
            };

            image.src = './image/space.jpeg'; // путь для загрузки картинки
          };

          popup.addEventListener('click', function (event) {
            var target = event.target;

            if (target.matches('#cancel')) {
              // если нажали на кнопку "отмена"
              popupNone();
              getOldImg();
            } else {
              target = target.closest('.editorPhoto');

              if (!target) {
                //если не получили editorPhoto, т.е. получили null при клике за пределами окна
                popupNone(); //окно исчезает при клике за пределы окна

                getOldImg();
              }
            }
          });
          /* end функция "отмена" */

          /* end эксперименты */

          /* Получаем img */

          /* Получ. координаты, работа с картинкой */
          touchMove = function touchMove(element, event) {
            // touch события, не выходим за границу canvas
            event.preventDefault();
            var rectTouch = element.getBoundingClientRect(); // метод - данные по положению картинки

            /* Ширина и высота canvas */

            var rectWidth = rectTouch.width;
            var rectHeight = rectTouch.height;
            /* Координаты касания */

            var xTouch = event.changedTouches[0].clientX - rectTouch.left;
            var yTouch = event.changedTouches[0].clientY - rectTouch.top;
            /* Если уводим палец за границу canvas картинка не движется  */

            if (xTouch < rectWidth && xTouch > 0 && yTouch < rectHeight && yTouch > 0) {
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
            } else {
              // если выходим за границу
              events.tch = false;
            }
          };

          /* my code: события*/

          /* изменение вида кнопки при нажатии мыши и touch событии */
          buttonMenuAll = document.querySelectorAll('.buttonMenu');
          buttonMenuAll.forEach(function (elem) {
            elem.addEventListener('touchstart', function () {
              elem.classList.add('opacity');
            });
            elem.addEventListener('touchend', function () {
              elem.classList.remove('opacity');
            });
          });
          buttonMenuAll.forEach(function (elem) {
            elem.addEventListener('mousedown', function () {
              elem.classList.add('opacity');
            });
            elem.addEventListener('mouseup', function () {
              elem.classList.remove('opacity');
            });
          });
          /* end изменение вида кнопки при нажатии мыши и touch событии */

          /* движение и изменение масштаба картинки по кнопкам */

          buttonAll = document.querySelectorAll('button');
          /* события мыши на кнопках */

          mouseEvents = function mouseEvents(elem, event) {
            if (event.button === 0) {
              var eventElem = String(elem.classList[0]); // запис. имя класса строкой

              var cssElem = document.querySelector(".".concat(eventElem)); // для изменения внешнего вида кнопки

              if (event.type === 'mousedown') {
                // проверка типа события
                cssElem.classList.add('opacity'); // добавл. кнопке прозрачность

                events[eventElem] = true;
              } else if (event.type === 'mouseup') {
                cssElem.classList.remove('opacity'); // удаляем прозрачность

                events[eventElem] = false;
              }
            }
          };

          buttonAll.forEach(function (elem) {
            elem.addEventListener('mousedown', function (event) {
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
            elem.addEventListener('mouseup', function (event) {
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

          touchEvents = function touchEvents(elem, event) {
            event.preventDefault();
            var rectElem = elem.getBoundingClientRect();
            var eventElem = String(elem.classList[0]); // получ. название класс элемента

            var rectWidth = rectElem.width;
            var rectHeight = rectElem.height;
            var cssElem = document.querySelector(".".concat(eventElem)); // для изменения внешнего вида кнопки

            var xElem = event.changedTouches[0].clientX - rectElem.left;
            var yElem = event.changedTouches[0].clientY - rectElem.top;
            /* Если уводим палец за границу кнопки, она не срабатывает */

            if (xElem < rectWidth && xElem > 0 && yElem < rectHeight && yElem > 0) {
              if (event.type === 'touchstart') {
                // проверка имени события
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

          buttonAll.forEach(function (elem) {
            elem.addEventListener('touchstart', function (event) {
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
            elem.addEventListener('touchend', function (event) {
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

        case 50:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}))();

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIl0sIm5hbWVzIjpbInVwZGF0ZSIsImNsZWFyQ2FudmFzIiwidXBkYXRlSW1nQ2FudmFzIiwiZ2V0QmFzZTY0IiwiZ2V0U2l6ZUNhbnZhcyIsImdldFNpemVJbWciLCJnZXRBZGFwdGl2ZU92ZXJsYXkiLCJnZXRQb3NpdGlvbk92ZXJsYXkiLCJwdXRTaXplT3ZlcmxheSIsImxvYWRJbWFnZSIsImdldEV2ZW50cyIsImVsZW1lbnQiLCJldmVudHMiLCJ4IiwieSIsImR4IiwiZHkiLCJsZWZ0TW91c2UiLCJ3aGVlbCIsInRjaCIsIm1vcmUiLCJsZXNzIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicmVjdE1vdXNlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieE1vdXNlIiwiY2xpZW50WCIsInlNb3VzZSIsImNsaWVudFkiLCJ0b3AiLCJ0b3VjaE1vdmUiLCJidXR0b24iLCJkZWx0YVkiLCJwcmV2ZW50RGVmYXVsdCIsInNyYyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsImVyciIsIm92ZXJsYXkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImNzc1RleHQiLCJzaXplSW1nIiwid2lkdGhJbWciLCJoZWlnaHRJbWciLCJzaXplT3ZlcmxheSIsImJvcmRlckxlZnQiLCJib3JkZXJUb3AiLCJNYXRoIiwiZmxvb3IiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInJhdGlvIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJpbWciLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsIndpZHRoSW1nT3JpZyIsImhlaWdodEltZ09yaWciLCJmaWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJyZXN1bHQiLCJvbmVycm9yIiwiZXJyb3IiLCJvcmlnaW5hbEltYWdlIiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwicHV0SW1hZ2VEYXRhIiwiY2xlYXJSZWN0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW1hZ2VQYXJhbXMiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInNjYWxlIiwic2l6ZUNhbnZhcyIsIkNBTlZBU19XSURUSCIsIkNBTlZBU19IRUlHSFQiLCJnZXRFbGVtZW50QnlJZCIsImxvYWRJbWFnZUlucHV0IiwiZmlsZXMiLCJiYXNlNjQiLCJwb3B1cFBob3RvIiwiaW1nQWxsIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtIiwiZGlzcGxheSIsInRocm90dGxlIiwidHlwZSIsIm5hbWUiLCJvYmoiLCJ3aW5kb3ciLCJydW5uaW5nIiwiZnVuYyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsInVwZGF0ZUNhbnZhc092ZXJsYXkiLCJ3aWR0aEJvZHkiLCJib2R5IiwibGF1bmNoT2ZBbGwiLCJ0cmltIiwiY2FudmFzSGlkZGVuIiwiY2FudmFzSGlkZGVuQ29udGV4dCIsImRhdGFVUkwiLCJ0b0RhdGFVUkwiLCIkIiwiYWpheCIsInVybCIsImRhdGEiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsInBvcHVwIiwicG9wdXBOb25lIiwiZ2V0T2xkSW1nIiwidGFyZ2V0IiwibWF0Y2hlcyIsImNsb3Nlc3QiLCJyZWN0VG91Y2giLCJyZWN0V2lkdGgiLCJyZWN0SGVpZ2h0IiwieFRvdWNoIiwiY2hhbmdlZFRvdWNoZXMiLCJ5VG91Y2giLCJidXR0b25NZW51QWxsIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYnV0dG9uQWxsIiwibW91c2VFdmVudHMiLCJldmVudEVsZW0iLCJTdHJpbmciLCJjc3NFbGVtIiwidG91Y2hFdmVudHMiLCJyZWN0RWxlbSIsInhFbGVtIiwieUVsZW0iLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImFyZyIsImluZm8iLCJ2YWx1ZSIsImRvbmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJ1bmRlZmluZWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9fZXNNb2R1bGUiLCJyZXF1aXJlIiwicnVudGltZSIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJfaW52b2tlIiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiY2FsbCIsIkdlblN0YXRlU3VzcGVuZGVkU3RhcnQiLCJHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkIiwiR2VuU3RhdGVFeGVjdXRpbmciLCJHZW5TdGF0ZUNvbXBsZXRlZCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImNvbnN0cnVjdG9yIiwiZGlzcGxheU5hbWUiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJtZXRob2QiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiX19hd2FpdCIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlY29yZCIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImVucXVldWUiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImFzeW5jIiwiaXRlciIsIm5leHQiLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dExvYyIsInRvU3RyaW5nIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJrZXlzIiwib2JqZWN0IiwicmV2ZXJzZSIsImxlbmd0aCIsInBvcCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImkiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RFbnRyeSIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiYWNjaWRlbnRhbFN0cmljdE1vZGUiLCJGdW5jdGlvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBYTs7Ozs7Ozs7Ozs7QUFJYiwrRUFBQztBQUFBLDhFQStCU0EsTUEvQlQsRUE4RlNDLFdBOUZULEVBb0dTQyxlQXBHVCxrQkEwSlNDLFNBMUpU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QmI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUE2QkQsTUFBTSxDQUFDQyxPQUFwQyxHQUE4QyxTQXB0QmpDLENBQWY7O0FBdXRCQSxJQUFJO0FBQ0Y4SCxvQkFBa0IsR0FBRzFILE9BQXJCO0FBQ0QsQ0FGRCxDQUVFLE9BQU8ySCxvQkFBUCxFQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsVUFBUSxDQUFDLEdBQUQsRUFBTSx3QkFBTixDQUFSLENBQXdDNUgsT0FBeEM7QUFDRCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL3NjcmlwdC5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG5cclxuKGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0Lyog0KDQsNC30LzQtdGA0YsgY2FudmFzINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOICovXHJcblx0bGV0IHNpemVDYW52YXMgPSB7XHJcblx0XHRDQU5WQVNfV0lEVEg6IDQwMCxcclxuXHRcdENBTlZBU19IRUlHSFQ6IDQwMFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuXHRjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7IC8vINGA0LDQsdC+0YLQsNC10Lwg0LIg0YDQtdC20LjQvNC1IDJkXHJcblx0bGV0IG9yaWdpbmFsSW1hZ2UgPSBhd2FpdCBsb2FkSW1hZ2UoJy4vaW1hZ2Uvc3BhY2UuanBlZycpOyAvLyDQv9C+0LvRg9GHLiDQuNC30L7QsdGA0LDQttC10L3QuNC1LCDQtNC+0LbQtNC40YHRjCDQstGL0L/QvtC70L3QtdC90LjRjyDQv9GA0L7QvNC40YHQsFxyXG5cclxuXHJcblxyXG5cdGNvbnN0IGV2ZW50cyA9IGdldEV2ZW50cyhjYW52YXMpOyAvLyDQtNCw0L3QvdGL0LUg0L/QviDQutC+0L7RgNC00LjQvdCw0YLQsNC8XHJcblxyXG5cdGxldCBpbWFnZSA9IG9yaWdpbmFsSW1hZ2U7IC8vINC/0LXRgNC10LzQtdC90L3QsNGPINC00LvRjyBvcmlnaW5hbEltYWdlXHJcblxyXG5cdGNvbnN0IGltYWdlUGFyYW1zID0geyAvLyDQv9Cw0YDQsNC80LXRgtGA0Ysg0L7RgtGB0YLRg9C/0L7QslxyXG5cdFx0b2Zmc2V0WDogMCxcclxuXHRcdG9mZnNldFk6IDAsXHJcblx0XHRzY2FsZTogMSAvLyDQvNCw0YHRiNGC0LDQsVxyXG5cdH07XHJcblxyXG5cclxuXHRjYW52YXMud2lkdGggPSBzaXplQ2FudmFzLkNBTlZBU19XSURUSDsgLy8g0YDQsNC30LzQtdGAXHJcblx0Y2FudmFzLmhlaWdodCA9IHNpemVDYW52YXMuQ0FOVkFTX0hFSUdIVDtcclxuXHJcblx0Lyog0J7QsdC90L7QstC70Y/QtdC8IGNhbnZhcyAqL1xyXG5cdHVwZGF0ZSgpO1xyXG5cclxuXHRmdW5jdGlvbiB1cGRhdGUoKSB7XHJcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxuXHJcblx0XHQvKiDQmNC30LzQtdC90LXQvdC40LUg0L7RgtGB0YLRg9C/0L7QsiDQtNC70Y8g0LjQt9C80LUt0Y8g0L7RgtC+0LHRgNCw0LbQtS3RjyDQutCw0YDRgtC40L3QutC4ICovXHJcblx0XHRpZiAoZXZlbnRzLmxlZnRNb3VzZSkgeyAvLyDQtdGB0LvQuCDQvdCw0LbQsNGC0LAg0LvQtdCy0LDRjyDQutC90L7Qv9C60LBcclxuXHRcdFx0aW1hZ2VQYXJhbXMub2Zmc2V0WCArPSBldmVudHMuZHg7XHJcblx0XHRcdGltYWdlUGFyYW1zLm9mZnNldFkgKz0gZXZlbnRzLmR5O1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qIG15ICovXHJcblxyXG5cdFx0aWYgKGV2ZW50cy50Y2gpIHsgLy8gdG91Y2gg0YHQvtCx0YvRgtC40LUg0LTQstC40LbQtdC90LjQtVxyXG5cdFx0XHRpbWFnZVBhcmFtcy5vZmZzZXRYICs9IGV2ZW50cy5keDtcclxuXHRcdFx0aW1hZ2VQYXJhbXMub2Zmc2V0WSArPSBldmVudHMuZHk7XHJcblx0XHR9XHJcblxyXG5cdFx0Lyog0LzQsNGB0YjRgtCw0LEgKi9cclxuXHRcdGlmIChldmVudHMubW9yZSkgeyAvLyDRg9Cy0LXQu9C40YfQuNGC0YxcclxuXHRcdFx0ZXZlbnRzLndoZWVsID0gcGFyc2VJbnQoLTEwMCk7XHJcblx0XHR9XHJcblx0XHRpZiAoZXZlbnRzLmxlc3MpIHsgLy8g0YPQvNC10L3RjNGI0LjRgtGMXHJcblx0XHRcdGV2ZW50cy53aGVlbCA9IHBhcnNlSW50KDEwMCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Lyog0LTQstC40LbQtdC90LjQtSAqL1xyXG5cdFx0aWYgKGV2ZW50cy51cCkge1xyXG5cdFx0XHRpbWFnZVBhcmFtcy5vZmZzZXRZIC09IHBhcnNlSW50KDMpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGV2ZW50cy5kb3duKSB7XHJcblx0XHRcdGltYWdlUGFyYW1zLm9mZnNldFkgKz0gcGFyc2VJbnQoMyk7XHJcblx0XHR9XHJcblx0XHRpZiAoZXZlbnRzLmxlZnQpIHtcclxuXHRcdFx0aW1hZ2VQYXJhbXMub2Zmc2V0WCAtPSBwYXJzZUludCgzKTtcclxuXHRcdH1cclxuXHRcdGlmIChldmVudHMucmlnaHQpIHtcclxuXHRcdFx0aW1hZ2VQYXJhbXMub2Zmc2V0WCArPSBwYXJzZUludCgzKTtcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0LyogZW5kIG15ICAqL1xyXG5cclxuXHRcdC8qINCc0LXQvdGP0LXQvCDQvNCw0YHRiNGC0LDQsSDQv9GA0Lgg0L/RgNC+0LrRgNGD0YcuINC60L7Qu9GR0YHQuNC60LAg0LzRi9GI0LgqL1xyXG5cdFx0aWYgKGV2ZW50cy53aGVlbCkge1xyXG5cdFx0XHRpbWFnZVBhcmFtcy5zY2FsZSAtPSBldmVudHMud2hlZWwgLyAxMDAwMDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Y2xlYXJDYW52YXMoKTtcclxuXHRcdGNvbnRleHQuZHJhd0ltYWdlKCAvLyDQvtGC0YDQuNGB0L7QstC60LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRj1xyXG5cdFx0XHRpbWFnZSxcclxuXHRcdFx0MCwgMCxcclxuXHRcdFx0aW1hZ2Uud2lkdGgsXHJcblx0XHRcdGltYWdlLmhlaWdodCxcclxuXHRcdFx0aW1hZ2VQYXJhbXMub2Zmc2V0WCxcclxuXHRcdFx0aW1hZ2VQYXJhbXMub2Zmc2V0WSxcclxuXHRcdFx0aW1hZ2Uud2lkdGggKiBpbWFnZVBhcmFtcy5zY2FsZSwgLy8gPiA8INC80LDRgdGI0YLQsNCxXHJcblx0XHRcdGltYWdlLmhlaWdodCAqIGltYWdlUGFyYW1zLnNjYWxlXHJcblx0XHQpO1xyXG5cdFx0ZXZlbnRzLnVwZGF0ZSgpOyAvLyDQvtCx0L3Rg9C70Y/QtdC8INC/0LDRgNCw0LzQtdGC0YDRiyBkeCBhbmQgZHlcclxuXHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY2xlYXJDYW52YXMoKSB7IC8vINC+0YfQuNGB0YLQutCwIGNhbnZhc1xyXG5cdFx0Y29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHR9XHJcblxyXG5cdC8qINCe0LHQvdC+0LLQu9C10L3QuNC1IGNhbnZhcyDQv9GA0Lgg0LfQsNCz0YDRg9C30LrQtSDQvdC+0LLQvtC5INC60LDRgNGC0LjQvdC60LggKi9cclxuXHJcblx0ZnVuY3Rpb24gdXBkYXRlSW1nQ2FudmFzKCkge1xyXG5cdFx0aW1hZ2UgPSBvcmlnaW5hbEltYWdlO1xyXG5cdFx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7IC8vINGB0L7Qt9C0LiDQstC40YDRgi4gY2FudmFzXHJcblx0XHRjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblx0XHRjYW52YXMud2lkdGggPSBvcmlnaW5hbEltYWdlLndpZHRoOyAvLyDQt9Cw0LTQsNGR0Lwg0YDQsNC30LzQtdGA0YtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSBvcmlnaW5hbEltYWdlLmhlaWdodDtcclxuXHRcdGNvbnRleHQuZHJhd0ltYWdlKCAvLyDQt9Cw0LTQsNGR0Lwg0L7RgtGA0LjRgdC+0LLQutGDXHJcblx0XHRcdG9yaWdpbmFsSW1hZ2UsXHJcblx0XHRcdDAsIDAsXHJcblx0XHRcdG9yaWdpbmFsSW1hZ2Uud2lkdGgsIG9yaWdpbmFsSW1hZ2UuaGVpZ2h0LFxyXG5cdFx0XHQwLCAwLFxyXG5cdFx0XHRjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRcclxuXHRcdCk7XHJcblxyXG5cdFx0Y29uc3QgaW1hZ2VEYXRhID0gY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTsgLy8g0L3Rg9C20LXQvSDRgdC10YDQstC10YA7INC30LDQv9C40YHRi9CyLiDQtNCw0L3QvdGL0LUg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyAtINGI0LjRgC4sINCy0YvRgdC+0YLQsFxyXG5cclxuXHRcdC8vINCy0L7Qt9Cy0YAuINC00LDQvdC90YvQtSDQtNC70Y8g0LLRgdGC0YPQv9C70LXQvdC40Y8g0LIg0YHQuNC70YNcclxuXHRcdGNvbnRleHQucHV0SW1hZ2VEYXRhKFxyXG5cdFx0XHRpbWFnZURhdGEsXHJcblx0XHRcdDAsIC8vINC+0YLRgdGO0LTQsCDQvdCw0YfQuNC90LDQtdC8XHJcblx0XHRcdDAsXHJcblx0XHRcdDAsXHJcblx0XHRcdDAsXHJcblx0XHRcdGltYWdlRGF0YS53aWR0aCwgLy8g0YDQsNC30LzQtdGA0YsgY2FudmFzYVxyXG5cdFx0XHRpbWFnZURhdGEuaGVpZ2h0XHJcblx0XHQpO1xyXG5cclxuXHRcdGltYWdlID0gY2FudmFzOyAvLyDQvNC10L3Rj9C10LwgaW1hZ2Ug0L3QsCBjYW52YXNcclxuXHJcblx0fVxyXG5cclxuXHQvKiDQodC60LDRh9Cw0YLRjCDRhNC+0YLQviAqL1xyXG5cclxuXHQvKiBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTsgLy8g0YHQvtC30LTQsNGR0Lwg0YHRgdGL0LvQutGDXHJcblx0XHRcdGFFbGVtZW50LnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnbXlJbWFnZS5qcGVnJyk7IC8vINCx0YDQsNGD0LfQtdGA0YM6INC80Ysg0YXQvtGC0LjQvCDRgdC60LDRh9Cw0YLRjFxyXG5cdFx0XHRhRWxlbWVudC5ocmVmID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpOyAvLyDQt9Cw0LTQsNGR0Lwg0LDQtNGA0LXRgSDQutCw0YDRgtC40L3QutC4XHJcblx0XHRcdGFFbGVtZW50LmNsaWNrKCk7IC8vINC60LvQuNC60LDQtdC8INC/0L4g0LrQvdC+0L/QutC1XHJcblx0XHR9KTsgKi9cclxuXHJcblx0Lyog0JLRi9Cx0YDQsNGC0Ywg0YTQvtGC0L4g0Lgg0LfQsNC60LDRh9Cw0YLRjCAqL1xyXG5cdGNvbnN0IGxvYWRJbWFnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRJbWFnZScpOyAvLyDQv9C+0LvRg9GHLiDRgdC/0LjRgdC+0Log0LfQsNCz0YDRg9C2LiDRhNCw0LnQu9C+0LJcclxuXHRsb2FkSW1hZ2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBhc3luYyBldmVudCA9PiB7XHJcblx0XHRjb25zdCBmaWxlID0gbG9hZEltYWdlSW5wdXQuZmlsZXNbMF07IC8vINC/0L7Qu9GD0YcuIDEg0YTQsNC50LtcclxuXHRcdGNvbnN0IGJhc2U2NCA9IGF3YWl0IGdldEJhc2U2NChmaWxlKTtcclxuXHRcdGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpOyAvLyDQtNC70Y8g0L3QvtCy0L7Qs9C+INGA0LjRgdGD0L3QutCwXHJcblx0XHRpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdG9yaWdpbmFsSW1hZ2UgPSBpbWFnZTsgLy8g0LLQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+INGA0LjRgdGD0L3QutCwIC0g0L3QvtCy0YvQuVxyXG5cdFx0XHR1cGRhdGVJbWdDYW52YXMoKTtcclxuXHRcdH07XHJcblx0XHRpbWFnZS5zcmMgPSBiYXNlNjQ7IC8vINC/0YPRgtGMINC00LvRjyDQt9Cw0LPRgNGD0LfQutC4INC60LDRgNGC0LjQvdC60LhcclxuXHR9KTtcclxuXHJcblx0Lyog0J/RgNC+0LLQtdGA0LrQsCDQvdCwINC+0YjQuNCx0LrQuCAqL1xyXG5cdGZ1bmN0aW9uIGdldEJhc2U2NChmaWxlKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cdFx0XHRyZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTsgLy8g0YfRgtC10L3QuNC1INGE0LDQudC70LAg0LIg0YTQvtGA0LzQsNGC0LUgRGF0YVVSTFxyXG5cdFx0XHRyZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuXHRcdFx0cmVhZGVyLm9uZXJyb3IgPSBlcnJvciA9PiByZWplY3QoZXJyb3IpOyAvLyDQvtGI0LjQsdC60LAg0L/RgNC4INC30LDQs9GA0YPQt9C60LVcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Lyog0K3QutGB0L/QtdGA0LjQvNC10L3RgtGLICovXHJcblxyXG5cdC8qINCy0YvQt9C+0LIg0YDQtdC00LDQutGC0L7RgNCwINC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINC60LDRgNGC0LjQvdC60YMgKi9cclxuXHJcblxyXG5cdGNvbnN0IHBvcHVwUGhvdG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBQaG90bycpO1xyXG5cdGNvbnN0IGltZ0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpOyAvLyDQv9C+0LvRg9GHLiDQstGB0LUgaW1nXHJcblxyXG5cclxuXHRjb25zdCBzaXplSW1nID0geyAvLyDQtNC70Y8g0L/QsNGA0LDQvNC10YLRgNC+0LIg0YDQuNGB0YPQvdC60LBcclxuXHRcdGltZzogJycsXHJcblx0XHR3aWR0aEltZzogJycsXHJcblx0XHRoZWlnaHRJbWc6ICcnLFxyXG5cdFx0d2lkdGhJbWdPcmlnOiAnJyxcclxuXHRcdGhlaWdodEltZ09yaWc6ICcnXHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2l6ZU92ZXJsYXkgPSB7IC8vINGA0LDQt9C80LXRgNGLINGA0LDQvNC60LhcclxuXHRcdGJvcmRlckxlZnQ6ICcnLFxyXG5cdFx0Ym9yZGVyVG9wOiAnJ1xyXG5cdH07XHJcblxyXG5cdGZ1bmN0aW9uIGdldFNpemVDYW52YXMoKSB7IC8vINC/0L7Qu9GD0YcuINGI0LjRgNC40L3RgyDQuCDQstGL0YHQvtGC0YMgY2FudmFzIGNzc1xyXG5cdFx0Y2FudmFzLndpZHRoID0gcGFyc2VJbnQoKGdldENvbXB1dGVkU3R5bGUoY2FudmFzKS53aWR0aCksIDEwKTtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSBwYXJzZUludCgoZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmhlaWdodCksIDEwKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldFNpemVJbWcoKSB7IC8vINC/0L7Qu9GD0YcuINGA0LDQt9C80LXRgNGLINC60LDRgNGC0LjQvdC60Lgg0YHQviDRgdGC0YAuXHJcblx0XHRzaXplSW1nLndpZHRoSW1nID0gc2l6ZUltZy5pbWcuY2xpZW50V2lkdGg7XHJcblx0XHRzaXplSW1nLmhlaWdodEltZyA9IHNpemVJbWcuaW1nLmNsaWVudEhlaWdodDtcclxuXHRcdC8qINC30LDQv9C40YEuINC+0YDQuNCzLiDRgNCw0LfQvNC10YDRiyAqL1xyXG5cdFx0c2l6ZUltZy53aWR0aEltZ09yaWcgPSBzaXplSW1nLmltZy5jbGllbnRXaWR0aDtcclxuXHRcdHNpemVJbWcuaGVpZ2h0SW1nT3JpZyA9IHNpemVJbWcuaW1nLmNsaWVudEhlaWdodDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldEFkYXB0aXZlT3ZlcmxheSgpIHsgLy8g0J/QvtC00LPQvtC90Y/QtdC8INGA0LDQt9C80LXRgCBvdmVybGF5INC6INGC0LXQutGD0YnQtdC80YMgY2FudmFzXHJcblxyXG5cdFx0aWYgKHNpemVJbWcud2lkdGhJbWcgPiBzaXplSW1nLmhlaWdodEltZykge1xyXG5cdFx0XHRsZXQgcmF0aW8gPSBwYXJzZUZsb2F0KChzaXplSW1nLndpZHRoSW1nIC8gc2l6ZUltZy5oZWlnaHRJbWcpLnRvRml4ZWQoMSkpOyAvLyDRgdC+0L7RgtC90L7RiNC10L3QuNC1INGB0YLQvtGA0L7QvSwg0L7QutGA0YPQs9C70LXQvdC40LUg0LTQviDQtNC10YHRj9GC0YvRhVxyXG5cdFx0XHRzaXplSW1nLndpZHRoSW1nID0gKGNhbnZhcy53aWR0aCAtIDIwKTsgLy8g0YjQuNGA0LjQvdCwINCyINGB0L7QvtGCLiDRgSBjYW52YXNcclxuXHRcdFx0c2l6ZUltZy5oZWlnaHRJbWcgPSBNYXRoLmZsb29yKHNpemVJbWcud2lkdGhJbWcgLyByYXRpbyk7IC8vINCy0YvRgdC+0YLQsCDQsiDRgdC+0L7Rgi4g0YEg0YjQuNGA0LjQvdC+0LlcclxuXHRcdH0gZWxzZSBpZiAoc2l6ZUltZy53aWR0aEltZyA8IHNpemVJbWcuaGVpZ2h0SW1nKSB7XHJcblx0XHRcdGxldCByYXRpbyA9IHBhcnNlRmxvYXQoKHNpemVJbWcuaGVpZ2h0SW1nIC8gc2l6ZUltZy53aWR0aEltZykudG9GaXhlZCgxKSk7IC8vINGB0L7QvtGC0L3QvtGI0LXQvdC40LUg0YHRgtC+0YDQvtC9LCDQvtC60YDRg9Cz0LvQtdC90LjQtSDQtNC+INC00LXRgdGP0YLRi9GFXHJcblx0XHRcdHNpemVJbWcuaGVpZ2h0SW1nID0gKGNhbnZhcy5oZWlnaHQgLSAyMCk7IC8vINGI0LjRgNC40L3QsCDQsiDRgdC+0L7Rgi4g0YEgY2FudmFzXHJcblx0XHRcdHNpemVJbWcud2lkdGhJbWcgPSBNYXRoLmZsb29yKHNpemVJbWcuaGVpZ2h0SW1nIC8gcmF0aW8pOyAvLyDQstGL0YHQvtGC0LAg0LIg0YHQvtC+0YIuINGBINGI0LjRgNC40L3QvtC5XHJcblx0XHR9IGVsc2UgaWYgKHNpemVJbWcud2lkdGhJbWcgPT09IHNpemVJbWcuaGVpZ2h0SW1nKSB7XHJcblx0XHRcdHNpemVJbWcud2lkdGhJbWcgPSAoY2FudmFzLndpZHRoIC0gMjApO1xyXG5cdFx0XHRzaXplSW1nLmhlaWdodEltZyA9IChjYW52YXMuaGVpZ2h0IC0gMjApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0UG9zaXRpb25PdmVybGF5KCkgeyAvLyDQstGL0YHRh9C40YLRi9Cy0LDQtdC8IGxlZnQgYW5kIHRvcCDRgNCw0LzQutC4XHJcblx0XHRzaXplT3ZlcmxheS5ib3JkZXJMZWZ0ID0gTWF0aC5mbG9vcigoKHBhcnNlSW50KChnZXRDb21wdXRlZFN0eWxlKGNhbnZhcykud2lkdGgpLCAxMCkpIC0gc2l6ZUltZy53aWR0aEltZykgLyAyKTtcclxuXHRcdHNpemVPdmVybGF5LmJvcmRlclRvcCA9IE1hdGguZmxvb3IoKChwYXJzZUludCgoZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmhlaWdodCksIDEwKSkgLSBzaXplSW1nLmhlaWdodEltZykgLyAyKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHB1dFNpemVPdmVybGF5KCkgeyAvLyDQstC90L7RgdC40Lwg0LjQt9C80LXQvdC10L3QuNGPINCyIG92ZXJsYXlcclxuXHRcdGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpOyAvLyDRgNCw0LzQutCwXHJcblx0XHRvdmVybGF5LnN0eWxlLmNzc1RleHQgPSBgXHJcblx0XHR3aWR0aDogJHtzaXplSW1nLndpZHRoSW1nfXB4O1xyXG5cdFx0aGVpZ2h0OiAke3NpemVJbWcuaGVpZ2h0SW1nfXB4O1xyXG5cdFx0bGVmdDogJHtzaXplT3ZlcmxheS5ib3JkZXJMZWZ0fXB4O1xyXG5cdFx0dG9wOiAke3NpemVPdmVybGF5LmJvcmRlclRvcH1weDtcclxuXHRcdGA7XHJcblx0fVxyXG5cclxuXHJcblx0Lyog0JrQu9C40Log0L3QsCDRgNC40YHRg9C90L7QuiAtINCy0YvQt9GL0LLQsNC10Lwg0YDQtdC00LDQutGC0L7RgCAqL1xyXG5cdGltZ0FsbC5mb3JFYWNoKChlbGVtKSA9PiB7XHJcblx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRzaXplSW1nLmltZyA9IGVsZW07IC8vINCf0LXRgNC10LTQsNGR0Lwg0YHQsNC80YMg0LrQsNGA0YLQuNC90LrRgyDQsiDQvtCx0YrQtdC60YIsINGH0YLQvtCx0Ysg0Log0L3QtdC5INC+0LHRgNCw0YLQuNGC0YzRgdGPXHJcblx0XHRcdHBvcHVwUGhvdG8uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuXHRcdFx0Z2V0U2l6ZUltZygpO1xyXG5cdFx0XHRnZXRTaXplQ2FudmFzKCk7XHJcblx0XHRcdGdldEFkYXB0aXZlT3ZlcmxheSgpO1xyXG5cdFx0XHRnZXRQb3NpdGlvbk92ZXJsYXkoKTtcclxuXHRcdFx0cHV0U2l6ZU92ZXJsYXkoKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHQvKiDQn9GA0L7RgdC70YPRiNC40LLQsNGC0LXQu9GMINC40LfQvNC10L3QtdC90LjRjyDQvtC60L3QsCDQsdGA0LDRg9C30LXRgNCwLCDRgSDQvtC/0YLQuNC80LjQt9Cw0YbQuNC10LkgKi9cclxuXHJcblx0bGV0IHRocm90dGxlID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIG9iaikge1xyXG5cdFx0b2JqID0gb2JqIHx8IHdpbmRvdztcclxuXHRcdGxldCBydW5uaW5nID0gZmFsc2U7XHJcblx0XHRsZXQgZnVuYyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHJ1bm5pbmcpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0cnVubmluZyA9IHRydWU7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0b2JqLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KG5hbWUpKTtcclxuXHRcdFx0XHRydW5uaW5nID0gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHRcdG9iai5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmMpO1xyXG5cdH07XHJcblx0dGhyb3R0bGUoXCJyZXNpemVcIiwgXCJvcHRpbWl6ZWRSZXNpemVcIik7XHJcblxyXG5cdC8qINCY0LfQvNC10L3QtdC90LjQtSBjYW52YXMg0Lggb3ZlcmxheSDQv9GA0Lgg0LjQt9C8LiDQvtC60L3QsCDQsdGA0LDRg9C30LXRgNCwICovXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcHRpbWl6ZWRSZXNpemVcIiwgKCkgPT4ge1xyXG5cclxuXHRcdGZ1bmN0aW9uIHVwZGF0ZUNhbnZhc092ZXJsYXkoKSB7IC8vINC+0LHQvdC+0LLQu9GP0LXQvCDRiNC40YAuINC4INCy0YvRgS5cclxuXHRcdFx0bGV0IHdpZHRoQm9keSA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7IC8vINGI0LjRgNC40L3QsCDQvtC60L3QsCDQsdGA0LDRg9C30LXRgNCwXHJcblx0XHRcdGZ1bmN0aW9uIGxhdW5jaE9mQWxsKCkge1xyXG5cdFx0XHRcdGdldFNpemVJbWcoKTtcclxuXHRcdFx0XHRnZXRTaXplQ2FudmFzKCk7XHJcblx0XHRcdFx0Z2V0QWRhcHRpdmVPdmVybGF5KCk7XHJcblx0XHRcdFx0Z2V0UG9zaXRpb25PdmVybGF5KCk7XHJcblx0XHRcdFx0cHV0U2l6ZU92ZXJsYXkoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHdpZHRoQm9keSA+IDk5MSkge1xyXG5cdFx0XHRcdGxhdW5jaE9mQWxsKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHdpZHRoQm9keSA8PSA5OTEpIHtcclxuXHRcdFx0XHRsYXVuY2hPZkFsbCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh3aWR0aEJvZHkgPD0gNzY3KSB7XHJcblx0XHRcdFx0bGF1bmNoT2ZBbGwoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAod2lkdGhCb2R5IDw9IDU3NSkge1xyXG5cdFx0XHRcdGxhdW5jaE9mQWxsKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHVwZGF0ZUNhbnZhc092ZXJsYXkoKTtcclxuXHR9KTtcclxuXHJcblxyXG5cdC8qINCe0LHRgNC10LfQutCwINC/0L4g0YDQsNC80LrQtSAqL1xyXG5cclxuXHRjb25zdCB0cmltID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyaW0nKTtcclxuXHRsZXQgY2FudmFzSGlkZGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhc0hpZGRlbicpO1xyXG5cdGxldCBjYW52YXNIaWRkZW5Db250ZXh0ID0gY2FudmFzSGlkZGVuLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG5cclxuXHR0cmltLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0Y2FudmFzSGlkZGVuQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTsgLy8g0L7Rh9C40YHRgtC60LAgY2FudmFzSGlkZGVuXHJcblx0XHRjYW52YXNIaWRkZW4ud2lkdGggPSBzaXplSW1nLndpZHRoSW1nT3JpZzsgLy8g0LfQsNC00LDRkdC8INGA0LDQt9C80LXRgNGLIGNhbnZhc1xyXG5cdFx0Y2FudmFzSGlkZGVuLmhlaWdodCA9IHNpemVJbWcuaGVpZ2h0SW1nT3JpZztcclxuXHRcdC8qINCh0L7RhdGA0LDQvdGP0LXQvCDQvtCx0YDQtdC3LiDQutCw0YDRgtC40L3QutGDINCyINGB0L7QvtGCLiDRgSDQvtGA0LjQsy4g0YDQsNC30LzQtdGA0L7QvCAqL1xyXG5cdFx0Y2FudmFzSGlkZGVuQ29udGV4dC5kcmF3SW1hZ2UoY2FudmFzLCBzaXplT3ZlcmxheS5ib3JkZXJMZWZ0LCBzaXplT3ZlcmxheS5ib3JkZXJUb3AsIHNpemVJbWcud2lkdGhJbWcsIHNpemVJbWcuaGVpZ2h0SW1nLCAwLCAwLCBzaXplSW1nLndpZHRoSW1nT3JpZywgc2l6ZUltZy5oZWlnaHRJbWdPcmlnKTtcclxuXHJcblx0XHQvKiDQlNC+0LHQsNCy0LvQtdC90LjQtSDRgNC40YEuINC90LAg0YHRgtGALCBhamF4OiDRgdC+0YXRgNCw0L3QtdC90LjQtSDQsiDQv9Cw0L/QutC1IGltZyAgKi9cclxuXHJcblx0XHQvKiBhamF4ICovXHJcblx0XHRsZXQgZGF0YVVSTCA9IGNhbnZhc0hpZGRlbi50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKTtcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHVybDogJy4vc2VydmVyLnBocCcsXHJcblx0XHRcdHR5cGU6ICdQT1NUJyxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGRhdGFVUkw6IGRhdGFVUkxcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG5cdFx0XHQvLyBjb250ZW50VHlwZTogZmFsc2UsXHJcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygncmVzJywgcmVzKTtcclxuXHRcdFx0XHQvKiBcdGxldCBuZXdJbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblx0XHRcdFx0XHRuZXdJbWcyLnNyYyA9ICcuL2ltZy8nICsgcmVzLmRhdGEuc3JjO1xyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuZXdJbWcyKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCduZXdJbWcyLnNyYzogJywgbmV3SW1nMi5zcmMpOyAqL1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRlcnJvcjogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCfQn9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwIScpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvKiDRhNGD0L3QutGG0LjRjyBcItC+0YLQvNC10L3QsFwiLCDRg9Cx0LjRgNCw0LXQvCDRgNC10LTQsNC60YLQvtGAICovXHJcblxyXG5cdGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJyk7IC8vINC/0L7Qu9GD0YcuINGN0LvQtdC80LXQvdGCLCDQs9C00LUg0YDQsNGB0L/QvtC70L7QttC10L0g0YDQtdC00LDQutGC0L7RgFxyXG5cclxuXHRjb25zdCBwb3B1cE5vbmUgPSAoKSA9PiB7IC8vINGD0LHQuNGA0LDQtdC8INC+0LrQvdC+INGA0LXQtNCw0LrRgtC+0YDQsFxyXG5cdFx0cG9wdXBQaG90by5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGdldE9sZEltZyA9ICgpID0+IHsgLy8g0LLRgdGC0LDQstC60LAg0YHRgtCw0YDQvtC5INC60LDRgNGC0LjQvdC60LhcclxuXHJcblx0XHRpbWFnZVBhcmFtcy51cGRhdGUgPSAoKSA9PiB7IC8vINC+0LHQvdGD0LvRj9C10Lwg0L/QsNGA0LDQvNC10YLRgNGLINC+0YLRgdGC0YPQv9CwINC4INC80LDRgdGI0YLQsNCx0LAg0LrQsNGA0YLQuNC90LrQuFxyXG5cdFx0XHRpbWFnZVBhcmFtcy5zY2FsZSA9IDE7XHJcblx0XHRcdGltYWdlUGFyYW1zLm9mZnNldFggPSAwO1xyXG5cdFx0XHRpbWFnZVBhcmFtcy5vZmZzZXRZID0gMDtcclxuXHRcdH07XHJcblxyXG5cdFx0aW1hZ2VQYXJhbXMudXBkYXRlKCk7IC8vINGB0YLQsNGA0LDRjyDQutCw0YDRgtC40L3QutCwINCy0YHRgtCw0ZHRgiDQv9C+INGB0YLQsNGA0YvQvCDQutC+0L7RgNC00LjQvdCw0YLQsNC8XHJcblxyXG5cdFx0bGV0IGltYWdlID0gbmV3IEltYWdlKCk7IC8vINC00LvRjyDQvdC+0LLQvtCz0L4o0YHRgtCw0YDQvtCz0L4pINGA0LjRgdGD0L3QutCwXHJcblx0XHRpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdG9yaWdpbmFsSW1hZ2UgPSBpbWFnZTsgLy8g0LLQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+INGA0LjRgdGD0L3QutCwIC0g0L3QvtCy0YvQuVxyXG5cdFx0XHR1cGRhdGVJbWdDYW52YXMoKTtcclxuXHRcdH07XHJcblx0XHRpbWFnZS5zcmMgPSAoJy4vaW1hZ2Uvc3BhY2UuanBlZycpOyAvLyDQv9GD0YLRjCDQtNC70Y8g0LfQsNCz0YDRg9C30LrQuCDQutCw0YDRgtC40L3QutC4XHJcblx0fTtcclxuXHJcblx0cG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblx0XHRpZiAodGFyZ2V0Lm1hdGNoZXMoJyNjYW5jZWwnKSkgeyAvLyDQtdGB0LvQuCDQvdCw0LbQsNC70Lgg0L3QsCDQutC90L7Qv9C60YMgXCLQvtGC0LzQtdC90LBcIlxyXG5cdFx0XHRwb3B1cE5vbmUoKTtcclxuXHRcdFx0Z2V0T2xkSW1nKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0YXJnZXQgPSB0YXJnZXQuY2xvc2VzdCgnLmVkaXRvclBob3RvJyk7XHJcblx0XHRcdGlmICghdGFyZ2V0KSB7IC8v0LXRgdC70Lgg0L3QtSDQv9C+0LvRg9GH0LjQu9C4IGVkaXRvclBob3RvLCDRgi7QtS4g0L/QvtC70YPRh9C40LvQuCBudWxsINC/0YDQuCDQutC70LjQutC1INC30LAg0L/RgNC10LTQtdC70LDQvNC4INC+0LrQvdCwXHJcblx0XHRcdFx0cG9wdXBOb25lKCk7IC8v0L7QutC90L4g0LjRgdGH0LXQt9Cw0LXRgiDQv9GA0Lgg0LrQu9C40LrQtSDQt9CwINC/0YDQtdC00LXQu9GLINC+0LrQvdCwXHJcblx0XHRcdFx0Z2V0T2xkSW1nKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0LyogZW5kINGE0YPQvdC60YbQuNGPIFwi0L7RgtC80LXQvdCwXCIgKi9cclxuXHJcblx0LyogZW5kINGN0LrRgdC/0LXRgNC40LzQtdC90YLRiyAqL1xyXG5cclxuXHQvKiDQn9C+0LvRg9GH0LDQtdC8IGltZyAqL1xyXG5cdGZ1bmN0aW9uIGxvYWRJbWFnZShzcmMpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7IC8vINCy0L7Qt9Cy0YAuINC/0YDQvtC80LjRgdGBXHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTsgLy8g0YHQvtC30LQuINC+0LHRitC10LrRgiBpbWFnZVxyXG5cdFx0XHRcdGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1hZ2UpOyAvLyDQutC+0LPQtNCwINC30LDQs9GA0YPQty4gaW1nINCy0YvQt9C+0LIuIHJlc29sdmVcclxuXHRcdFx0XHRpbWFnZS5zcmMgPSBzcmM7XHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0Lyog0J/QvtC70YPRhy4g0LrQvtC+0YDQtNC40L3QsNGC0YssINGA0LDQsdC+0YLQsCDRgSDQutCw0YDRgtC40L3QutC+0LkgKi9cclxuXHJcblx0bGV0IHRvdWNoTW92ZSA9IChlbGVtZW50LCBldmVudCkgPT4geyAvLyB0b3VjaCDRgdC+0LHRi9GC0LjRjywg0L3QtSDQstGL0YXQvtC00LjQvCDQt9CwINCz0YDQsNC90LjRhtGDIGNhbnZhc1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRjb25zdCByZWN0VG91Y2ggPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyAvLyDQvNC10YLQvtC0IC0g0LTQsNC90L3Ri9C1INC/0L4g0L/QvtC70L7QttC10L3QuNGOINC60LDRgNGC0LjQvdC60LhcclxuXHJcblx0XHQvKiDQqNC40YDQuNC90LAg0Lgg0LLRi9GB0L7RgtCwIGNhbnZhcyAqL1xyXG5cdFx0bGV0IHJlY3RXaWR0aCA9IHJlY3RUb3VjaC53aWR0aDtcclxuXHRcdGxldCByZWN0SGVpZ2h0ID0gcmVjdFRvdWNoLmhlaWdodDtcclxuXHJcblx0XHQvKiDQmtC+0L7RgNC00LjQvdCw0YLRiyDQutCw0YHQsNC90LjRjyAqL1xyXG5cdFx0Y29uc3QgeFRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCAtIHJlY3RUb3VjaC5sZWZ0O1xyXG5cdFx0Y29uc3QgeVRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSAtIHJlY3RUb3VjaC50b3A7XHJcblxyXG5cdFx0Lyog0JXRgdC70Lgg0YPQstC+0LTQuNC8INC/0LDQu9C10YYg0LfQsCDQs9GA0LDQvdC40YbRgyBjYW52YXMg0LrQsNGA0YLQuNC90LrQsCDQvdC1INC00LLQuNC20LXRgtGB0Y8gICovXHJcblx0XHRpZiAoKHhUb3VjaCA8IHJlY3RXaWR0aCAmJiB4VG91Y2ggPiAwKSAmJiAoeVRvdWNoIDwgcmVjdEhlaWdodCAmJiB5VG91Y2ggPiAwKSkge1xyXG5cdFx0XHRpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XHJcblxyXG5cdFx0XHRcdGV2ZW50cy50Y2ggPSB0cnVlO1xyXG5cdFx0XHRcdGV2ZW50cy54ID0geFRvdWNoOyAvLyDQvtCx0L3QvtCy0LvRj9C10Lwg0LrQvtC+0YDQtNC40L3QsNGC0YtcclxuXHRcdFx0XHRldmVudHMueSA9IHlUb3VjaDtcclxuXHRcdFx0fSBlbHNlIGlmIChldmVudC50eXBlID09PSAndG91Y2htb3ZlJykge1xyXG5cclxuXHRcdFx0XHRldmVudHMuZHggPSB4VG91Y2ggLSBldmVudHMueDsgLy8g0L3QvtCy0YvQtSDQvNC40L3Rg9GBINGB0YLQsNGA0YvQtSDQutC+0L7RgNC00LjQvdCw0YLRi1xyXG5cdFx0XHRcdGV2ZW50cy5keSA9IHlUb3VjaCAtIGV2ZW50cy55O1xyXG5cclxuXHRcdFx0XHRldmVudHMueCA9IHhUb3VjaDsgLy8g0L7QsdC90L7QstC70Y/QtdC8INC60L7QvtGA0LTQuNC90LDRgtGLXHJcblx0XHRcdFx0ZXZlbnRzLnkgPSB5VG91Y2g7XHJcblx0XHRcdH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNoZW5kJykge1xyXG5cclxuXHRcdFx0XHRldmVudHMudGNoID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9IGVsc2UgeyAvLyDQtdGB0LvQuCDQstGL0YXQvtC00LjQvCDQt9CwINCz0YDQsNC90LjRhtGDXHJcblx0XHRcdGV2ZW50cy50Y2ggPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRmdW5jdGlvbiBnZXRFdmVudHMoZWxlbWVudCkge1xyXG5cdFx0Y29uc3QgZXZlbnRzID0ge1xyXG5cdFx0XHR4OiAwLFxyXG5cdFx0XHR5OiAwLFxyXG5cdFx0XHRkeDogMCxcclxuXHRcdFx0ZHk6IDAsIC8vINC90LDRgdC60L7Qu9GM0LrQviDQuNC30LzQtdC90LjQu9Cw0YHRjCDQutC+0L7RgNC00LjQvdCw0YLQsCwg0L3QsNGB0LrQvtC70YzQutC+INGB0LzQtdGB0YLQuNC70LjRgdGMXHJcblx0XHRcdGxlZnRNb3VzZTogZmFsc2UsIC8vINC60L7Qs9C00LAgdHJ1ZSAtINC90LDQttCw0YLQsCDQu9C10LLQsNGPINC60L3QvtC/0LrQsCDQvNGL0YjQuFxyXG5cdFx0XHR3aGVlbDogMCwgLy8g0LrQvtC70LXRgdC+INC80YvRiNC4INC90LUg0LrRgNGD0YLQuNGC0YHRj1xyXG5cdFx0XHR0Y2g6IGZhbHNlLFxyXG5cdFx0XHRtb3JlOiBmYWxzZSwgLy8g0YPQstC10LvQuNGH0LXQvdC40LUg0LrQsNGA0YLQuNC90LrQuFxyXG5cdFx0XHRsZXNzOiBmYWxzZSwgLy8g0YPQvNC10L3RjNGI0LXQvdC40LUg0LrQsNGA0YLQuNC90LrQuFxyXG5cdFx0XHR1cDogZmFsc2UsIC8vINC00LLQuNC20LXQvdC40LUg0LrQsNGA0YLQuNC90LrQuCDQstCy0LXRgNGFXHJcblx0XHRcdGRvd246IGZhbHNlLFxyXG5cdFx0XHRsZWZ0OiBmYWxzZSxcclxuXHRcdFx0cmlnaHQ6IGZhbHNlLFxyXG5cdFx0fTtcclxuXHJcblx0XHRldmVudHMudXBkYXRlID0gKCkgPT4geyAvLyDQvtCx0L3Rg9C70Y/QtdC8INC40LfQvNC10L3QtS3QtSDQutC+0L7RgNC00LjQvdCw0YJcclxuXHRcdFx0ZXZlbnRzLmR4ID0gMDtcclxuXHRcdFx0ZXZlbnRzLmR5ID0gMDtcclxuXHRcdFx0ZXZlbnRzLndoZWVsID0gMDsgLy8g0L7QsdC90YPQuy4g0LfQvdCw0YcuINC+0YIg0LrQvtC70ZHRgdC40LrQsCDQvNGL0YjQuFxyXG5cdFx0fTtcclxuXHJcblx0XHQvKiDQodC+0LHRi9GC0LjRjyDQvdCwINGN0LvQtdC80LXQvdGCINC/0YDQuCDQtNCy0LjQttC10L3QuNC4INC60LDRgNGC0LjQvdC60LggKi9cclxuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZXZlbnQgPT4ge1xyXG5cdFx0XHRjb25zdCByZWN0TW91c2UgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyAvLyDQvNC10YLQvtC0IC0g0LTQsNC90L3Ri9C1INC/0L4g0L/QvtC70LbQtdC90LjRjiDQutCw0YDRgtC40L3QutC4XHJcblxyXG5cdFx0XHRjb25zdCB4TW91c2UgPSBldmVudC5jbGllbnRYIC0gcmVjdE1vdXNlLmxlZnQ7IC8vINCy0YvRh9C40YLQsNC10Lwg0L7RgtGB0YLRg9C/IGNhbnZhc2Eg0LjQtyDQutC70LjQtdC90YIt0YUg0LrQvtC+0YDQtNC40L3QsNGCXHJcblx0XHRcdGNvbnN0IHlNb3VzZSA9IGV2ZW50LmNsaWVudFkgLSByZWN0TW91c2UudG9wO1xyXG5cclxuXHJcblx0XHRcdGV2ZW50cy5keCA9IHhNb3VzZSAtIGV2ZW50cy54OyAvLyDQvdC+0LLRi9C1INC80LjQvdGD0YEg0YHRgtCw0YDRi9C1INC60L7QvtGA0LTQuNC90LDRgtGLXHJcblx0XHRcdGV2ZW50cy5keSA9IHlNb3VzZSAtIGV2ZW50cy55O1xyXG5cclxuXHJcblx0XHRcdGV2ZW50cy54ID0geE1vdXNlOyAvLyDQvtCx0L3QvtCy0LvRj9C10Lwg0LrQvtC+0YDQtNC40L3QsNGC0YtcclxuXHRcdFx0ZXZlbnRzLnkgPSB5TW91c2U7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cclxuXHRcdC8qINCh0L7QsdGL0YLQuNGPINC90LAg0Y3Qu9C10LzQtdC90YIg0L/RgNC4INC00LLQuNC20LXQvdC40Lgg0LrQsNGA0YLQuNC90LrQuCAqL1xyXG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBldmVudCA9PiB7XHJcblx0XHRcdHRvdWNoTW92ZShlbGVtZW50LCBldmVudCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBldmVudCA9PiB7XHJcblx0XHRcdHRvdWNoTW92ZShlbGVtZW50LCBldmVudCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZXZlbnQgPT4ge1xyXG5cdFx0XHR0b3VjaE1vdmUoZWxlbWVudCwgZXZlbnQpO1xyXG5cdFx0fSk7XHJcblxyXG5cclxuXHRcdC8qINCd0LDQttCw0YLQsCDQutC90L7Qv9C60LAg0LzRi9GI0LggKi9cclxuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4ge1xyXG5cdFx0XHRpZiAoZXZlbnQuYnV0dG9uID09PSAwKSB7IC8vINC10YHQu9C4INC70LXQstCw0Y8g0LrQvdC+0L/QutCwINC80YvRiNC4XHJcblx0XHRcdFx0ZXZlbnRzLmxlZnRNb3VzZSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8qINCf0L7QtNC90Y/RgtCwINC60L3QvtC/0LrQsCDQvNGL0YjQuCAqL1xyXG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZXZlbnQgPT4ge1xyXG5cdFx0XHRpZiAoZXZlbnQuYnV0dG9uID09PSAwKSB7IC8vINC10YHQu9C4INC70LXQstCw0Y8g0LrQvdC+0L/QutCwINC80YvRiNC4XHJcblx0XHRcdFx0ZXZlbnRzLmxlZnRNb3VzZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBldmVudCA9PiB7XHJcblx0XHRcdGV2ZW50cy5sZWZ0TW91c2UgPSBmYWxzZTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8qINCa0YDRg9GC0LjQvCDQutC+0LvRkdGB0LjQutC+INC80YvRiNC4INC00LvRjyDQvNCw0YHRiNGC0LDQsdCwINC60LDRgNGC0LjQvdC60LgqL1xyXG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgZXZlbnQgPT4ge1xyXG5cdFx0XHRldmVudHMud2hlZWwgPSBldmVudC5kZWx0YVk7IC8vINC/0YDQvtC60YDRg9GC0LrQsCDQv9C+INC+0YHQuCBZXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vINC+0YHRgtCw0L3QsNCy0LsuINGA0LDRgdC/0YDQvtGB0YLRgC4g0YHQvtCx0YvRgtC40Y8g0L/RgNC+0LrRgC4g0LzRi9GI0Lgg0LTQsNC70YzRiNC1XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gZXZlbnRzO1xyXG5cdH1cclxuXHJcblxyXG5cdC8qIG15IGNvZGU6INGB0L7QsdGL0YLQuNGPKi9cclxuXHJcblx0Lyog0LjQt9C80LXQvdC10L3QuNC1INCy0LjQtNCwINC60L3QvtC/0LrQuCDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0LzRi9GI0Lgg0LggdG91Y2gg0YHQvtCx0YvRgtC40LggKi9cclxuXHJcblx0bGV0IGJ1dHRvbk1lbnVBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uTWVudScpO1xyXG5cclxuXHRidXR0b25NZW51QWxsLmZvckVhY2goKGVsZW0pID0+IHtcclxuXHRcdGVsZW0uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICgpID0+IHtcclxuXHRcdFx0ZWxlbS5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5Jyk7XHJcblxyXG5cdFx0fSk7XHJcblx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge1xyXG5cdFx0XHRlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHknKTtcclxuXHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0YnV0dG9uTWVudUFsbC5mb3JFYWNoKChlbGVtKSA9PiB7XHJcblx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcclxuXHRcdFx0ZWxlbS5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5Jyk7XHJcblxyXG5cdFx0fSk7XHJcblx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XHJcblx0XHRcdGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eScpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG5cdC8qIGVuZCDQuNC30LzQtdC90LXQvdC40LUg0LLQuNC00LAg0LrQvdC+0L/QutC4INC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQvNGL0YjQuCDQuCB0b3VjaCDRgdC+0LHRi9GC0LjQuCAqL1xyXG5cclxuXHQvKiDQtNCy0LjQttC10L3QuNC1INC4INC40LfQvNC10L3QtdC90LjQtSDQvNCw0YHRiNGC0LDQsdCwINC60LDRgNGC0LjQvdC60Lgg0L/QviDQutC90L7Qv9C60LDQvCAqL1xyXG5cclxuXHRsZXQgYnV0dG9uQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XHJcblxyXG5cclxuXHQvKiDRgdC+0LHRi9GC0LjRjyDQvNGL0YjQuCDQvdCwINC60L3QvtC/0LrQsNGFICovXHJcblxyXG5cdGxldCBtb3VzZUV2ZW50cyA9IChlbGVtLCBldmVudCkgPT4ge1xyXG5cdFx0aWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xyXG5cdFx0XHRsZXQgZXZlbnRFbGVtID0gU3RyaW5nKGVsZW0uY2xhc3NMaXN0WzBdKTsgLy8g0LfQsNC/0LjRgS4g0LjQvNGPINC60LvQsNGB0YHQsCDRgdGC0YDQvtC60L7QuVxyXG5cclxuXHRcdFx0bGV0IGNzc0VsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtldmVudEVsZW19YCk7IC8vINC00LvRjyDQuNC30LzQtdC90LXQvdC40Y8g0LLQvdC10YjQvdC10LPQviDQstC40LTQsCDQutC90L7Qv9C60LhcclxuXHJcblx0XHRcdGlmIChldmVudC50eXBlID09PSAnbW91c2Vkb3duJykgeyAvLyDQv9GA0L7QstC10YDQutCwINGC0LjQv9CwINGB0L7QsdGL0YLQuNGPXHJcblx0XHRcdFx0Y3NzRWxlbS5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5Jyk7IC8vINC00L7QsdCw0LLQuy4g0LrQvdC+0L/QutC1INC/0YDQvtC30YDQsNGH0L3QvtGB0YLRjFxyXG5cdFx0XHRcdGV2ZW50c1tldmVudEVsZW1dID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIGlmIChldmVudC50eXBlID09PSAnbW91c2V1cCcpIHtcclxuXHRcdFx0XHRjc3NFbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHknKTsgLy8g0YPQtNCw0LvRj9C10Lwg0L/RgNC+0LfRgNCw0YfQvdC+0YHRgtGMXHJcblx0XHRcdFx0ZXZlbnRzW2V2ZW50RWxlbV0gPSBmYWxzZTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRidXR0b25BbGwuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG5cdFx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdGlmIChlbGVtLm1hdGNoZXMoJy51cCcpKSB7XHJcblx0XHRcdFx0bW91c2VFdmVudHMoZWxlbSwgZXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChlbGVtLm1hdGNoZXMoJy5kb3duJykpIHtcclxuXHRcdFx0XHRtb3VzZUV2ZW50cyhlbGVtLCBldmVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVsZW0ubWF0Y2hlcygnLmxlZnQnKSkge1xyXG5cdFx0XHRcdG1vdXNlRXZlbnRzKGVsZW0sIGV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZWxlbS5tYXRjaGVzKCcucmlnaHQnKSkge1xyXG5cdFx0XHRcdG1vdXNlRXZlbnRzKGVsZW0sIGV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZWxlbS5jbG9zZXN0KCcubW9yZScpKSB7XHJcblx0XHRcdFx0bW91c2VFdmVudHMoZWxlbSwgZXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChlbGVtLm1hdGNoZXMoJy5sZXNzJykpIHtcclxuXHRcdFx0XHRtb3VzZUV2ZW50cyhlbGVtLCBldmVudCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoZWxlbS5tYXRjaGVzKCcudXAnKSkge1xyXG5cdFx0XHRcdG1vdXNlRXZlbnRzKGVsZW0sIGV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZWxlbS5tYXRjaGVzKCcuZG93bicpKSB7XHJcblx0XHRcdFx0bW91c2VFdmVudHMoZWxlbSwgZXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChlbGVtLm1hdGNoZXMoJy5sZWZ0JykpIHtcclxuXHRcdFx0XHRtb3VzZUV2ZW50cyhlbGVtLCBldmVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVsZW0ubWF0Y2hlcygnLnJpZ2h0JykpIHtcclxuXHRcdFx0XHRtb3VzZUV2ZW50cyhlbGVtLCBldmVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVsZW0ubWF0Y2hlcygnLm1vcmUnKSkge1xyXG5cdFx0XHRcdG1vdXNlRXZlbnRzKGVsZW0sIGV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZWxlbS5tYXRjaGVzKCcubGVzcycpKSB7XHJcblx0XHRcdFx0bW91c2VFdmVudHMoZWxlbSwgZXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0LyogZW5kINGB0L7QsdGL0YLQuNGPINC80YvRiNC4INC90LAg0LrQvdC+0L/QutCw0YUgKi9cclxuXHJcblxyXG5cdC8qIHRvdWNoINGB0L7QsdGL0YLQuNGPINC60L3QvtC/0LrQsNGFICovXHJcblxyXG5cdGxldCB0b3VjaEV2ZW50cyA9IChlbGVtLCBldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IHJlY3RFbGVtID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0XHRsZXQgZXZlbnRFbGVtID0gU3RyaW5nKGVsZW0uY2xhc3NMaXN0WzBdKTsgLy8g0L/QvtC70YPRhy4g0L3QsNC30LLQsNC90LjQtSDQutC70LDRgdGBINGN0LvQtdC80LXQvdGC0LBcclxuXHRcdGxldCByZWN0V2lkdGggPSByZWN0RWxlbS53aWR0aDtcclxuXHRcdGxldCByZWN0SGVpZ2h0ID0gcmVjdEVsZW0uaGVpZ2h0O1xyXG5cclxuXHRcdGxldCBjc3NFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZXZlbnRFbGVtfWApOyAvLyDQtNC70Y8g0LjQt9C80LXQvdC10L3QuNGPINCy0L3QtdGI0L3QtdCz0L4g0LLQuNC00LAg0LrQvdC+0L/QutC4XHJcblxyXG5cdFx0Y29uc3QgeEVsZW0gPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIC0gcmVjdEVsZW0ubGVmdDtcclxuXHRcdGNvbnN0IHlFbGVtID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSAtIHJlY3RFbGVtLnRvcDtcclxuXHJcblx0XHQvKiDQldGB0LvQuCDRg9Cy0L7QtNC40Lwg0L/QsNC70LXRhiDQt9CwINCz0YDQsNC90LjRhtGDINC60L3QvtC/0LrQuCwg0L7QvdCwINC90LUg0YHRgNCw0LHQsNGC0YvQstCw0LXRgiAqL1xyXG5cdFx0aWYgKCh4RWxlbSA8IHJlY3RXaWR0aCAmJiB4RWxlbSA+IDApICYmICh5RWxlbSA8IHJlY3RIZWlnaHQgJiYgeUVsZW0gPiAwKSkge1xyXG5cclxuXHRcdFx0aWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaHN0YXJ0JykgeyAvLyDQv9GA0L7QstC10YDQutCwINC40LzQtdC90Lgg0YHQvtCx0YvRgtC40Y9cclxuXHRcdFx0XHRldmVudHNbZXZlbnRFbGVtXSA9IHRydWU7IC8vINC00L7QsdCw0LLQu9GP0LXQvCDQt9C90LDRh9C10L3QuNC1INCyINC+0LHRitC10LrRgiDQv9C+INC40LzQtdC90Lgg0LrQu9Cw0YHRgdCwINGN0LvQtdC80LXQvdGC0LBcclxuXHJcblx0XHRcdFx0Y3NzRWxlbS5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5Jyk7IC8vINC00L7QsdCw0LLQuy4g0LrQvdC+0L/QutC1INC/0YDQvtC30YDQsNGH0L3QvtGB0YLRjFxyXG5cclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaGVuZCcpIHtcclxuXHRcdFx0XHRldmVudHNbZXZlbnRFbGVtXSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRjc3NFbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHknKTsgLy8g0YPQsdC40YDQsNC10Lwg0L/RgNC+0LfRgNCw0YfQvdC+0YHRgtGMXHJcblxyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdGJ1dHRvbkFsbC5mb3JFYWNoKChlbGVtKSA9PiB7XHJcblx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdGlmIChlbGVtLm1hdGNoZXMoJy51cCcpKSB7XHJcblx0XHRcdFx0dG91Y2hFdmVudHMoZWxlbSwgZXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChlbGVtLm1hdGNoZXMoJy5kb3duJykpIHtcclxuXHRcdFx0XHR0b3VjaEV2ZW50cyhlbGVtLCBldmVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVsZW0ubWF0Y2hlcygnLmxlZnQnKSkge1xyXG5cdFx0XHRcdHRvdWNoRXZlbnRzKGVsZW0sIGV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZWxlbS5tYXRjaGVzKCcucmlnaHQnKSkge1xyXG5cdFx0XHRcdHRvdWNoRXZlbnRzKGVsZW0sIGV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZWxlbS5tYXRjaGVzKCcubW9yZScpKSB7XHJcblx0XHRcdFx0dG91Y2hFdmVudHMoZWxlbSwgZXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChlbGVtLm1hdGNoZXMoJy5sZXNzJykpIHtcclxuXHRcdFx0XHR0b3VjaEV2ZW50cyhlbGVtLCBldmVudCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHRcdGVsZW0uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdGlmIChlbGVtLm1hdGNoZXMoJy51cCcpKSB7XHJcblx0XHRcdFx0dG91Y2hFdmVudHMoZWxlbSwgZXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChlbGVtLm1hdGNoZXMoJy5kb3duJykpIHtcclxuXHRcdFx0XHR0b3VjaEV2ZW50cyhlbGVtLCBldmVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVsZW0ubWF0Y2hlcygnLmxlZnQnKSkge1xyXG5cdFx0XHRcdHRvdWNoRXZlbnRzKGVsZW0sIGV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZWxlbS5tYXRjaGVzKCcucmlnaHQnKSkge1xyXG5cdFx0XHRcdHRvdWNoRXZlbnRzKGVsZW0sIGV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZWxlbS5tYXRjaGVzKCcubW9yZScpKSB7XHJcblx0XHRcdFx0dG91Y2hFdmVudHMoZWxlbSwgZXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChlbGVtLm1hdGNoZXMoJy5sZXNzJykpIHtcclxuXHRcdFx0XHR0b3VjaEV2ZW50cyhlbGVtLCBldmVudCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHJcblx0LyogZW5kINC00LLQuNC20LXQvdC40LUg0Lgg0LzQsNGB0YjRgtCw0LEg0LrQsNGA0YLQuNC90LrQuCDQv9C+INC60L3QvtC/0LrQsNC8ICovXHJcblxyXG5cdC8qIGVuZCBteSBjb2RlICovXHJcblxyXG5cclxufSkoKTtcclxuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9