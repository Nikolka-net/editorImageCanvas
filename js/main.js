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
              success: function success(res) {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIl0sIm5hbWVzIjpbInVwZGF0ZSIsImNsZWFyQ2FudmFzIiwidXBkYXRlSW1nQ2FudmFzIiwiZ2V0QmFzZTY0IiwiZ2V0U2l6ZUNhbnZhcyIsImdldFNpemVJbWciLCJnZXRBZGFwdGl2ZU92ZXJsYXkiLCJnZXRQb3NpdGlvbk92ZXJsYXkiLCJwdXRTaXplT3ZlcmxheSIsImxvYWRJbWFnZSIsImdldEV2ZW50cyIsImVsZW1lbnQiLCJldmVudHMiLCJ4IiwieSIsImR4IiwiZHkiLCJsZWZ0TW91c2UiLCJ3aGVlbCIsInRjaCIsIm1vcmUiLCJsZXNzIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicmVjdE1vdXNlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieE1vdXNlIiwiY2xpZW50WCIsInlNb3VzZSIsImNsaWVudFkiLCJ0b3AiLCJ0b3VjaE1vdmUiLCJidXR0b24iLCJkZWx0YVkiLCJwcmV2ZW50RGVmYXVsdCIsInNyYyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsImVyciIsIm92ZXJsYXkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImNzc1RleHQiLCJzaXplSW1nIiwid2lkdGhJbWciLCJoZWlnaHRJbWciLCJzaXplT3ZlcmxheSIsImJvcmRlckxlZnQiLCJib3JkZXJUb3AiLCJNYXRoIiwiZmxvb3IiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInJhdGlvIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJpbWciLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsIndpZHRoSW1nT3JpZyIsImhlaWdodEltZ09yaWciLCJmaWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJyZXN1bHQiLCJvbmVycm9yIiwiZXJyb3IiLCJvcmlnaW5hbEltYWdlIiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwicHV0SW1hZ2VEYXRhIiwiY2xlYXJSZWN0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW1hZ2VQYXJhbXMiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInNjYWxlIiwic2l6ZUNhbnZhcyIsIkNBTlZBU19XSURUSCIsIkNBTlZBU19IRUlHSFQiLCJnZXRFbGVtZW50QnlJZCIsImxvYWRJbWFnZUlucHV0IiwiZmlsZXMiLCJiYXNlNjQiLCJwb3B1cFBob3RvIiwiaW1nQWxsIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtIiwiZGlzcGxheSIsInRocm90dGxlIiwidHlwZSIsIm5hbWUiLCJvYmoiLCJ3aW5kb3ciLCJydW5uaW5nIiwiZnVuYyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsInVwZGF0ZUNhbnZhc092ZXJsYXkiLCJ3aWR0aEJvZHkiLCJib2R5IiwibGF1bmNoT2ZBbGwiLCJ0cmltIiwiY2FudmFzSGlkZGVuIiwiY2FudmFzSGlkZGVuQ29udGV4dCIsImRhdGFVUkwiLCJ0b0RhdGFVUkwiLCIkIiwiYWpheCIsInVybCIsImRhdGEiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsInBvcHVwIiwicG9wdXBOb25lIiwiZ2V0T2xkSW1nIiwidGFyZ2V0IiwibWF0Y2hlcyIsImNsb3Nlc3QiLCJyZWN0VG91Y2giLCJyZWN0V2lkdGgiLCJyZWN0SGVpZ2h0IiwieFRvdWNoIiwiY2hhbmdlZFRvdWNoZXMiLCJ5VG91Y2giLCJidXR0b25NZW51QWxsIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYnV0dG9uQWxsIiwibW91c2VFdmVudHMiLCJldmVudEVsZW0iLCJTdHJpbmciLCJjc3NFbGVtIiwidG91Y2hFdmVudHMiLCJyZWN0RWxlbSIsInhFbGVtIiwieUVsZW0iLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImFyZyIsImluZm8iLCJ2YWx1ZSIsImRvbmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJ1bmRlZmluZWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9fZXNNb2R1bGUiLCJyZXF1aXJlIiwicnVudGltZSIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJfaW52b2tlIiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiY2FsbCIsIkdlblN0YXRlU3VzcGVuZGVkU3RhcnQiLCJHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkIiwiR2VuU3RhdGVFeGVjdXRpbmciLCJHZW5TdGF0ZUNvbXBsZXRlZCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImNvbnN0cnVjdG9yIiwiZGlzcGxheU5hbWUiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJtZXRob2QiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiX19hd2FpdCIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlY29yZCIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImVucXVldWUiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImFzeW5jIiwiaXRlciIsIm5leHQiLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dExvYyIsInRvU3RyaW5nIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJrZXlzIiwib2JqZWN0IiwicmV2ZXJzZSIsImxlbmd0aCIsInBvcCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImkiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RFbnRyeSIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiYWNjaWRlbnRhbFN0cmljdE1vZGUiLCJGdW5jdGlvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBYTs7Ozs7Ozs7Ozs7QUFJYiwrRUFBQztBQUFBLDhFQStCU0EsTUEvQlQsRUE4RlNDLFdBOUZULEVBb0dTQyxlQXBHVCxrQkEwSlNDLFNBMUpULDRDQXlMU0MsYUF6TFQsRUE4TFNDLFVBOUxULEVBc01TQyxrQkF0TVQsRUFzTlNDLGtCQXROVCxFQTJOU0MsY0EzTlQsa0ZBc1hTQyxTQXRYVCxhQTBhU0MsU0ExYVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBhU0EsbUJBMWFULHVCQTBhbUJDLE9BMWFuQixFQTBhNEI7QUFDM0IsZ0JBQU1DLE1BQU0sR0FBRztBQUNkQyxlQUFDLEVBQUUsQ0FEVztBQUVkQyxlQUFDLEVBQUUsQ0FGVztBQUdkQyxnQkFBRSxFQUFFLENBSFU7QUFJZEMsZ0JBQUUsRUFBRSxDQUpVO0FBSVA7QUFDUEMsdUJBQVMsRUFBRSxLQUxHO0FBS0k7QUFDbEJDLG1CQUFLLEVBQUUsQ0FOTztBQU1KO0FBQ1ZDLGlCQUFHLEVBQUUsS0FQUztBQVFkQyxrQkFBSSxFQUFFLEtBUlE7QUFRRDtBQUNiQyxrQkFBSSxFQUFFLEtBVFE7QUFTRDtBQUNiQyxnQkFBRSxFQUFFLEtBVlU7QUFVSDtBQUNYQyxrQkFBSSxFQUFFLEtBWFE7QUFZZEMsa0JBQUksRUFBRSxLQVpRO0FBYWRDLG1CQUFLLEVBQUU7QUFiTyxhQUFmOztBQWdCQWIsa0JBQU0sQ0FBQ1osTUFBUCxHQUFnQixZQUFNO0FBQUU7QUFDdkJZLG9CQUFNLENBQUNHLEVBQVAsR0FBWSxDQUFaO0FBQ0FILG9CQUFNLENBQUNJLEVBQVAsR0FBWSxDQUFaO0FBQ0FKLG9CQUFNLENBQUNNLEtBQVAsR0FBZSxDQUFmLENBSHFCLENBR0g7QUFDbEIsYUFKRDtBQU1BOzs7QUFDQVAsbUJBQU8sQ0FBQ2UsZ0JBQVIsQ0FBeUIsV0FBekIsRUFBc0MsVUFBQUMsS0FBSyxFQUFJO0FBQzlDLGtCQUFNQyxTQUFTLEdBQUdqQixPQUFPLENBQUNrQixxQkFBUixFQUFsQixDQUQ4QyxDQUNLOztBQUVuRCxrQkFBTUMsTUFBTSxHQUFHSCxLQUFLLENBQUNJLE9BQU4sR0FBZ0JILFNBQVMsQ0FBQ0osSUFBekMsQ0FIOEMsQ0FHQzs7QUFDL0Msa0JBQU1RLE1BQU0sR0FBR0wsS0FBSyxDQUFDTSxPQUFOLEdBQWdCTCxTQUFTLENBQUNNLEdBQXpDO0FBR0F0QixvQkFBTSxDQUFDRyxFQUFQLEdBQVllLE1BQU0sR0FBR2xCLE1BQU0sQ0FBQ0MsQ0FBNUIsQ0FQOEMsQ0FPZjs7QUFDL0JELG9CQUFNLENBQUNJLEVBQVAsR0FBWWdCLE1BQU0sR0FBR3BCLE1BQU0sQ0FBQ0UsQ0FBNUI7QUFHQUYsb0JBQU0sQ0FBQ0MsQ0FBUCxHQUFXaUIsTUFBWCxDQVg4QyxDQVczQjs7QUFDbkJsQixvQkFBTSxDQUFDRSxDQUFQLEdBQVdrQixNQUFYO0FBRUEsYUFkRDtBQWlCQTs7QUFDQXJCLG1CQUFPLENBQUNlLGdCQUFSLENBQXlCLFdBQXpCLEVBQXNDLFVBQUFDLEtBQUssRUFBSTtBQUM5Q1EsdUJBQVMsQ0FBQ3hCLE9BQUQsRUFBVWdCLEtBQVYsQ0FBVDtBQUNBLGFBRkQ7QUFJQWhCLG1CQUFPLENBQUNlLGdCQUFSLENBQXlCLFlBQXpCLEVBQXVDLFVBQUFDLEtBQUssRUFBSTtBQUMvQ1EsdUJBQVMsQ0FBQ3hCLE9BQUQsRUFBVWdCLEtBQVYsQ0FBVDtBQUNBLGFBRkQ7QUFJQWhCLG1CQUFPLENBQUNlLGdCQUFSLENBQXlCLFVBQXpCLEVBQXFDLFVBQUFDLEtBQUssRUFBSTtBQUM3Q1EsdUJBQVMsQ0FBQ3hCLE9BQUQsRUFBVWdCLEtBQVYsQ0FBVDtBQUNBLGFBRkQ7QUFLQTs7QUFDQWhCLG1CQUFPLENBQUNlLGdCQUFSLENBQXlCLFdBQXpCLEVBQXNDLFVBQUFDLEtBQUssRUFBSTtBQUM5QyxrQkFBSUEsS0FBSyxDQUFDUyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQUU7QUFDekJ4QixzQkFBTSxDQUFDSyxTQUFQLEdBQW1CLElBQW5CO0FBQ0E7QUFDRCxhQUpEO0FBTUE7O0FBQ0FOLG1CQUFPLENBQUNlLGdCQUFSLENBQXlCLFNBQXpCLEVBQW9DLFVBQUFDLEtBQUssRUFBSTtBQUM1QyxrQkFBSUEsS0FBSyxDQUFDUyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQUU7QUFDekJ4QixzQkFBTSxDQUFDSyxTQUFQLEdBQW1CLEtBQW5CO0FBQ0E7QUFDRCxhQUpEO0FBTUFOLG1CQUFPLENBQUNlLGdCQUFSLENBQXlCLFlBQXpCLEVBQXVDLFVBQUFDLEtBQUssRUFBSTtBQUMvQ2Ysb0JBQU0sQ0FBQ0ssU0FBUCxHQUFtQixLQUFuQjtBQUNBLGFBRkQ7QUFJQTs7QUFDQU4sbUJBQU8sQ0FBQ2UsZ0JBQVIsQ0FBeUIsWUFBekIsRUFBdUMsVUFBQUMsS0FBSyxFQUFJO0FBQy9DZixvQkFBTSxDQUFDTSxLQUFQLEdBQWVTLEtBQUssQ0FBQ1UsTUFBckIsQ0FEK0MsQ0FDbEI7O0FBQzdCVixtQkFBSyxDQUFDVyxjQUFOLEdBRitDLENBRXZCO0FBQ3hCLGFBSEQ7QUFLQSxtQkFBTzFCLE1BQVA7QUFDQSxXQTFmRDs7QUFzWFNILG1CQXRYVCx1QkFzWG1COEIsR0F0WG5CLEVBc1h3QjtBQUN2QixtQkFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQUU7QUFDekMsa0JBQUk7QUFDSCxvQkFBTUMsTUFBSyxHQUFHLElBQUlDLEtBQUosRUFBZCxDQURHLENBQ3dCOzs7QUFDM0JELHNCQUFLLENBQUNFLE1BQU4sR0FBZTtBQUFBLHlCQUFNSixPQUFPLENBQUNFLE1BQUQsQ0FBYjtBQUFBLGlCQUFmLENBRkcsQ0FFa0M7OztBQUNyQ0Esc0JBQUssQ0FBQ0osR0FBTixHQUFZQSxHQUFaO0FBQ0EsZUFKRCxDQUlFLE9BQU9PLEdBQVAsRUFBWTtBQUNiLHVCQUFPSixNQUFNLENBQUNJLEdBQUQsQ0FBYjtBQUNBO0FBQ0QsYUFSTSxDQUFQO0FBVUEsV0FqWUQ7O0FBMk5TdEMsd0JBM05ULDhCQTJOMEI7QUFBRTtBQUMzQixnQkFBTXVDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWhCLENBRHlCLENBQzJCOztBQUNwREYsbUJBQU8sQ0FBQ0csS0FBUixDQUFjQyxPQUFkLDBCQUNTQyxPQUFPLENBQUNDLFFBRGpCLDhCQUVVRCxPQUFPLENBQUNFLFNBRmxCLDRCQUdRQyxXQUFXLENBQUNDLFVBSHBCLDJCQUlPRCxXQUFXLENBQUNFLFNBSm5CO0FBTUEsV0FuT0Q7O0FBc05TbEQsNEJBdE5ULGtDQXNOOEI7QUFBRTtBQUMvQmdELHVCQUFXLENBQUNDLFVBQVosR0FBeUJFLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUVDLFFBQVEsQ0FBRUMsZ0JBQWdCLENBQUNDLE1BQUQsQ0FBaEIsQ0FBeUJDLEtBQTNCLEVBQW1DLEVBQW5DLENBQVQsR0FBbURYLE9BQU8sQ0FBQ0MsUUFBNUQsSUFBd0UsQ0FBbkYsQ0FBekI7QUFDQUUsdUJBQVcsQ0FBQ0UsU0FBWixHQUF3QkMsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBRUMsUUFBUSxDQUFFQyxnQkFBZ0IsQ0FBQ0MsTUFBRCxDQUFoQixDQUF5QkUsTUFBM0IsRUFBb0MsRUFBcEMsQ0FBVCxHQUFvRFosT0FBTyxDQUFDRSxTQUE3RCxJQUEwRSxDQUFyRixDQUF4QjtBQUNBLFdBek5EOztBQXNNU2hELDRCQXRNVCxrQ0FzTThCO0FBQUU7QUFFL0IsZ0JBQUk4QyxPQUFPLENBQUNDLFFBQVIsR0FBbUJELE9BQU8sQ0FBQ0UsU0FBL0IsRUFBMEM7QUFDekMsa0JBQUlXLEtBQUssR0FBR0MsVUFBVSxDQUFDLENBQUNkLE9BQU8sQ0FBQ0MsUUFBUixHQUFtQkQsT0FBTyxDQUFDRSxTQUE1QixFQUF1Q2EsT0FBdkMsQ0FBK0MsQ0FBL0MsQ0FBRCxDQUF0QixDQUR5QyxDQUNrQzs7QUFDM0VmLHFCQUFPLENBQUNDLFFBQVIsR0FBb0JTLE1BQU0sQ0FBQ0MsS0FBUCxHQUFlLEVBQW5DLENBRnlDLENBRUQ7O0FBQ3hDWCxxQkFBTyxDQUFDRSxTQUFSLEdBQW9CSSxJQUFJLENBQUNDLEtBQUwsQ0FBV1AsT0FBTyxDQUFDQyxRQUFSLEdBQW1CWSxLQUE5QixDQUFwQixDQUh5QyxDQUdpQjtBQUMxRCxhQUpELE1BSU8sSUFBSWIsT0FBTyxDQUFDQyxRQUFSLEdBQW1CRCxPQUFPLENBQUNFLFNBQS9CLEVBQTBDO0FBQ2hELGtCQUFJVyxNQUFLLEdBQUdDLFVBQVUsQ0FBQyxDQUFDZCxPQUFPLENBQUNFLFNBQVIsR0FBb0JGLE9BQU8sQ0FBQ0MsUUFBN0IsRUFBdUNjLE9BQXZDLENBQStDLENBQS9DLENBQUQsQ0FBdEIsQ0FEZ0QsQ0FDMkI7OztBQUMzRWYscUJBQU8sQ0FBQ0UsU0FBUixHQUFxQlEsTUFBTSxDQUFDRSxNQUFQLEdBQWdCLEVBQXJDLENBRmdELENBRU47O0FBQzFDWixxQkFBTyxDQUFDQyxRQUFSLEdBQW1CSyxJQUFJLENBQUNDLEtBQUwsQ0FBV1AsT0FBTyxDQUFDRSxTQUFSLEdBQW9CVyxNQUEvQixDQUFuQixDQUhnRCxDQUdVO0FBQzFELGFBSk0sTUFJQSxJQUFJYixPQUFPLENBQUNDLFFBQVIsS0FBcUJELE9BQU8sQ0FBQ0UsU0FBakMsRUFBNEM7QUFDbERGLHFCQUFPLENBQUNDLFFBQVIsR0FBb0JTLE1BQU0sQ0FBQ0MsS0FBUCxHQUFlLEVBQW5DO0FBQ0FYLHFCQUFPLENBQUNFLFNBQVIsR0FBcUJRLE1BQU0sQ0FBQ0UsTUFBUCxHQUFnQixFQUFyQztBQUNBO0FBQ0QsV0FwTkQ7O0FBOExTM0Qsb0JBOUxULDBCQThMc0I7QUFBRTtBQUN2QitDLG1CQUFPLENBQUNDLFFBQVIsR0FBbUJELE9BQU8sQ0FBQ2dCLEdBQVIsQ0FBWUMsV0FBL0I7QUFDQWpCLG1CQUFPLENBQUNFLFNBQVIsR0FBb0JGLE9BQU8sQ0FBQ2dCLEdBQVIsQ0FBWUUsWUFBaEM7QUFDQTs7QUFDQWxCLG1CQUFPLENBQUNtQixZQUFSLEdBQXVCbkIsT0FBTyxDQUFDZ0IsR0FBUixDQUFZQyxXQUFuQztBQUNBakIsbUJBQU8sQ0FBQ29CLGFBQVIsR0FBd0JwQixPQUFPLENBQUNnQixHQUFSLENBQVlFLFlBQXBDO0FBQ0EsV0FwTUQ7O0FBeUxTbEUsdUJBekxULDZCQXlMeUI7QUFBRTtBQUMxQjBELGtCQUFNLENBQUNDLEtBQVAsR0FBZUgsUUFBUSxDQUFFQyxnQkFBZ0IsQ0FBQ0MsTUFBRCxDQUFoQixDQUF5QkMsS0FBM0IsRUFBbUMsRUFBbkMsQ0FBdkI7QUFDQUQsa0JBQU0sQ0FBQ0UsTUFBUCxHQUFnQkosUUFBUSxDQUFFQyxnQkFBZ0IsQ0FBQ0MsTUFBRCxDQUFoQixDQUF5QkUsTUFBM0IsRUFBb0MsRUFBcEMsQ0FBeEI7QUFDQSxXQTVMRDs7QUEwSlM3RCxtQkExSlQscUJBMEptQnNFLElBMUpuQixFQTBKeUI7QUFDeEIsbUJBQU8sSUFBSWpDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdkMsa0JBQU1nQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmO0FBQ0FELG9CQUFNLENBQUNFLGFBQVAsQ0FBcUJILElBQXJCLEVBRnVDLENBRVg7O0FBQzVCQyxvQkFBTSxDQUFDN0IsTUFBUCxHQUFnQjtBQUFBLHVCQUFNSixPQUFPLENBQUNpQyxNQUFNLENBQUNHLE1BQVIsQ0FBYjtBQUFBLGVBQWhCOztBQUNBSCxvQkFBTSxDQUFDSSxPQUFQLEdBQWlCLFVBQUFDLEtBQUs7QUFBQSx1QkFBSXJDLE1BQU0sQ0FBQ3FDLEtBQUQsQ0FBVjtBQUFBLGVBQXRCLENBSnVDLENBSUU7O0FBQ3pDLGFBTE0sQ0FBUDtBQU1BLFdBaktEOztBQW9HUzdFLHlCQXBHVCwrQkFvRzJCO0FBQzFCeUMsaUJBQUssR0FBR3FDLGFBQVI7QUFDQSxnQkFBTWxCLE1BQU0sR0FBR2QsUUFBUSxDQUFDaUMsYUFBVCxDQUF1QixRQUF2QixDQUFmLENBRjBCLENBRXVCOztBQUNqRCxnQkFBTUMsT0FBTyxHQUFHcEIsTUFBTSxDQUFDcUIsVUFBUCxDQUFrQixJQUFsQixDQUFoQjtBQUNBckIsa0JBQU0sQ0FBQ0MsS0FBUCxHQUFlaUIsYUFBYSxDQUFDakIsS0FBN0IsQ0FKMEIsQ0FJVTs7QUFDcENELGtCQUFNLENBQUNFLE1BQVAsR0FBZ0JnQixhQUFhLENBQUNoQixNQUE5QjtBQUNBa0IsbUJBQU8sQ0FBQ0UsU0FBUixFQUFtQjtBQUNsQkoseUJBREQsRUFFQyxDQUZELEVBRUksQ0FGSixFQUdDQSxhQUFhLENBQUNqQixLQUhmLEVBR3NCaUIsYUFBYSxDQUFDaEIsTUFIcEMsRUFJQyxDQUpELEVBSUksQ0FKSixFQUtDRixNQUFNLENBQUNDLEtBTFIsRUFLZUQsTUFBTSxDQUFDRSxNQUx0QjtBQVFBLGdCQUFNcUIsU0FBUyxHQUFHSCxPQUFPLENBQUNJLFlBQVIsQ0FBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsRUFBMkJ4QixNQUFNLENBQUNDLEtBQWxDLEVBQXlDRCxNQUFNLENBQUNFLE1BQWhELENBQWxCLENBZDBCLENBY2lEO0FBRTNFOztBQUNBa0IsbUJBQU8sQ0FBQ0ssWUFBUixDQUNDRixTQURELEVBRUMsQ0FGRCxFQUVJO0FBQ0gsYUFIRCxFQUlDLENBSkQsRUFLQyxDQUxELEVBTUNBLFNBQVMsQ0FBQ3RCLEtBTlgsRUFNa0I7QUFDakJzQixxQkFBUyxDQUFDckIsTUFQWDtBQVVBckIsaUJBQUssR0FBR21CLE1BQVIsQ0EzQjBCLENBMkJWO0FBRWhCLFdBaklEOztBQThGUzdELHFCQTlGVCwyQkE4RnVCO0FBQUU7QUFDeEJpRixtQkFBTyxDQUFDTSxTQUFSLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCMUIsTUFBTSxDQUFDQyxLQUEvQixFQUFzQ0QsTUFBTSxDQUFDRSxNQUE3QztBQUNBLFdBaEdEOztBQStCU2hFLGdCQS9CVCxzQkErQmtCO0FBQ2pCeUYsaUNBQXFCLENBQUN6RixNQUFELENBQXJCO0FBRUE7O0FBQ0EsZ0JBQUlZLE1BQU0sQ0FBQ0ssU0FBWCxFQUFzQjtBQUFFO0FBQ3ZCeUUseUJBQVcsQ0FBQ0MsT0FBWixJQUF1Qi9FLE1BQU0sQ0FBQ0csRUFBOUI7QUFDQTJFLHlCQUFXLENBQUNFLE9BQVosSUFBdUJoRixNQUFNLENBQUNJLEVBQTlCO0FBQ0E7QUFFRDs7O0FBRUEsZ0JBQUlKLE1BQU0sQ0FBQ08sR0FBWCxFQUFnQjtBQUFFO0FBQ2pCdUUseUJBQVcsQ0FBQ0MsT0FBWixJQUF1Qi9FLE1BQU0sQ0FBQ0csRUFBOUI7QUFDQTJFLHlCQUFXLENBQUNFLE9BQVosSUFBdUJoRixNQUFNLENBQUNJLEVBQTlCO0FBQ0E7QUFFRDs7O0FBQ0EsZ0JBQUlKLE1BQU0sQ0FBQ1EsSUFBWCxFQUFpQjtBQUFFO0FBQ2xCUixvQkFBTSxDQUFDTSxLQUFQLEdBQWUwQyxRQUFRLENBQUMsQ0FBQyxHQUFGLENBQXZCO0FBQ0E7O0FBQ0QsZ0JBQUloRCxNQUFNLENBQUNTLElBQVgsRUFBaUI7QUFBRTtBQUNsQlQsb0JBQU0sQ0FBQ00sS0FBUCxHQUFlMEMsUUFBUSxDQUFDLEdBQUQsQ0FBdkI7QUFDQTtBQUVEOzs7QUFDQSxnQkFBSWhELE1BQU0sQ0FBQ1UsRUFBWCxFQUFlO0FBQ2RvRSx5QkFBVyxDQUFDRSxPQUFaLElBQXVCaEMsUUFBUSxDQUFDLENBQUQsQ0FBL0I7QUFDQTs7QUFDRCxnQkFBSWhELE1BQU0sQ0FBQ1csSUFBWCxFQUFpQjtBQUNoQm1FLHlCQUFXLENBQUNFLE9BQVosSUFBdUJoQyxRQUFRLENBQUMsQ0FBRCxDQUEvQjtBQUNBOztBQUNELGdCQUFJaEQsTUFBTSxDQUFDWSxJQUFYLEVBQWlCO0FBQ2hCa0UseUJBQVcsQ0FBQ0MsT0FBWixJQUF1Qi9CLFFBQVEsQ0FBQyxDQUFELENBQS9CO0FBQ0E7O0FBQ0QsZ0JBQUloRCxNQUFNLENBQUNhLEtBQVgsRUFBa0I7QUFDakJpRSx5QkFBVyxDQUFDQyxPQUFaLElBQXVCL0IsUUFBUSxDQUFDLENBQUQsQ0FBL0I7QUFDQTtBQUdEOztBQUVBOzs7QUFDQSxnQkFBSWhELE1BQU0sQ0FBQ00sS0FBWCxFQUFrQjtBQUNqQndFLHlCQUFXLENBQUNHLEtBQVosSUFBcUJqRixNQUFNLENBQUNNLEtBQVAsR0FBZSxLQUFwQztBQUVBOztBQUVEakIsdUJBQVc7QUFDWGlGLG1CQUFPLENBQUNFLFNBQVIsRUFBbUI7QUFDbEJ6QyxpQkFERCxFQUVDLENBRkQsRUFFSSxDQUZKLEVBR0NBLEtBQUssQ0FBQ29CLEtBSFAsRUFJQ3BCLEtBQUssQ0FBQ3FCLE1BSlAsRUFLQzBCLFdBQVcsQ0FBQ0MsT0FMYixFQU1DRCxXQUFXLENBQUNFLE9BTmIsRUFPQ2pELEtBQUssQ0FBQ29CLEtBQU4sR0FBYzJCLFdBQVcsQ0FBQ0csS0FQM0IsRUFPa0M7QUFDakNsRCxpQkFBSyxDQUFDcUIsTUFBTixHQUFlMEIsV0FBVyxDQUFDRyxLQVI1QjtBQVVBakYsa0JBQU0sQ0FBQ1osTUFBUCxHQTFEaUIsQ0EwREE7QUFHakIsV0E1RkQ7O0FBRUE7QUFDSThGLG9CQUhKLEdBR2lCO0FBQ2hCQyx3QkFBWSxFQUFFLEdBREU7QUFFaEJDLHlCQUFhLEVBQUU7QUFGQyxXQUhqQjtBQVFNbEMsZ0JBUk4sR0FRZWQsUUFBUSxDQUFDaUQsY0FBVCxDQUF3QixRQUF4QixDQVJmO0FBU01mLGlCQVROLEdBU2dCcEIsTUFBTSxDQUFDcUIsVUFBUCxDQUFrQixJQUFsQixDQVRoQixFQVN5Qzs7QUFUekM7QUFBQSxpQkFVMEIxRSxTQUFTLENBQUMsb0JBQUQsQ0FWbkM7O0FBQUE7QUFVSXVFLHVCQVZKO0FBVTJEO0FBSXJEcEUsZ0JBZE4sR0FjZUYsU0FBUyxDQUFDb0QsTUFBRCxDQWR4QixFQWNrQzs7QUFFOUJuQixlQWhCSixHQWdCWXFDLGFBaEJaLEVBZ0IyQjs7QUFFckJVLHFCQWxCTixHQWtCb0I7QUFBRTtBQUNyQkMsbUJBQU8sRUFBRSxDQURVO0FBRW5CQyxtQkFBTyxFQUFFLENBRlU7QUFHbkJDLGlCQUFLLEVBQUUsQ0FIWSxDQUdWOztBQUhVLFdBbEJwQjtBQXlCQS9CLGdCQUFNLENBQUNDLEtBQVAsR0FBZStCLFVBQVUsQ0FBQ0MsWUFBMUIsQ0F6QkEsQ0F5QndDOztBQUN4Q2pDLGdCQUFNLENBQUNFLE1BQVAsR0FBZ0I4QixVQUFVLENBQUNFLGFBQTNCO0FBRUE7O0FBQ0FoRyxnQkFBTTs7QUFzR047O0FBRUE7Ozs7Ozs7QUFPQTtBQUNNa0csd0JBN0lOLEdBNkl1QmxELFFBQVEsQ0FBQ2lELGNBQVQsQ0FBd0IsV0FBeEIsQ0E3SXZCLEVBNkk2RDs7QUFDN0RDLHdCQUFjLENBQUN4RSxnQkFBZixDQUFnQyxRQUFoQztBQUFBLHVHQUEwQyxpQkFBTUMsS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkM4QywwQkFEbUMsR0FDNUJ5QixjQUFjLENBQUNDLEtBQWYsQ0FBcUIsQ0FBckIsQ0FENEIsRUFDSDs7QUFERztBQUFBLDZCQUVwQmhHLFNBQVMsQ0FBQ3NFLElBQUQsQ0FGVzs7QUFBQTtBQUVuQzJCLDRCQUZtQztBQUdyQ3pELDJCQUhxQyxHQUc3QixJQUFJQyxLQUFKLEVBSDZCLEVBR2hCOztBQUN6QkQsMkJBQUssQ0FBQ0UsTUFBTixHQUFlLFlBQU07QUFDcEJtQyxxQ0FBYSxHQUFHckMsS0FBaEIsQ0FEb0IsQ0FDRzs7QUFDdkJ6Qyx1Q0FBZTtBQUNmLHVCQUhEOztBQUlBeUMsMkJBQUssQ0FBQ0osR0FBTixHQUFZNkQsTUFBWixDQVJ5QyxDQVFyQjs7QUFScUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBMUM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTs7QUFVQTs7QUFFQTtBQUdNQyxvQkF4S04sR0F3S21CckQsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBeEtuQjtBQXlLTXFELGdCQXpLTixHQXlLZXRELFFBQVEsQ0FBQ3VELGdCQUFULENBQTBCLEtBQTFCLENBektmLEVBeUtpRDs7QUFHM0NuRCxpQkE1S04sR0E0S2dCO0FBQUU7QUFDakJnQixlQUFHLEVBQUUsRUFEVTtBQUVmZixvQkFBUSxFQUFFLEVBRks7QUFHZkMscUJBQVMsRUFBRSxFQUhJO0FBSWZpQix3QkFBWSxFQUFFLEVBSkM7QUFLZkMseUJBQWEsRUFBRTtBQUxBLFdBNUtoQjtBQW9MTWpCLHFCQXBMTixHQW9Mb0I7QUFBRTtBQUNyQkMsc0JBQVUsRUFBRSxFQURPO0FBRW5CQyxxQkFBUyxFQUFFO0FBRlEsV0FwTHBCOztBQXNPQTtBQUNBNkMsZ0JBQU0sQ0FBQ0UsT0FBUCxDQUFlLFVBQUNDLElBQUQsRUFBVTtBQUN4QkEsZ0JBQUksQ0FBQy9FLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQU07QUFDcEMwQixxQkFBTyxDQUFDZ0IsR0FBUixHQUFjcUMsSUFBZCxDQURvQyxDQUNoQjs7QUFDcEJKLHdCQUFVLENBQUNuRCxLQUFYLENBQWlCd0QsT0FBakIsR0FBMkIsTUFBM0I7QUFDQXJHLHdCQUFVO0FBQ1ZELDJCQUFhO0FBQ2JFLGdDQUFrQjtBQUNsQkMsZ0NBQWtCO0FBQ2xCQyw0QkFBYztBQUNkLGFBUkQ7QUFTQSxXQVZEO0FBWUE7O0FBRUltRyxrQkFyUEosR0FxUGUsU0FBWEEsUUFBVyxDQUFVQyxJQUFWLEVBQWdCQyxJQUFoQixFQUFzQkMsR0FBdEIsRUFBMkI7QUFDekNBLGVBQUcsR0FBR0EsR0FBRyxJQUFJQyxNQUFiO0FBQ0EsZ0JBQUlDLE9BQU8sR0FBRyxLQUFkOztBQUNBLGdCQUFJQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFZO0FBQ3RCLGtCQUFJRCxPQUFKLEVBQWE7QUFDWjtBQUNBOztBQUNEQSxxQkFBTyxHQUFHLElBQVY7QUFDQXZCLG1DQUFxQixDQUFDLFlBQVk7QUFDakNxQixtQkFBRyxDQUFDSSxhQUFKLENBQWtCLElBQUlDLFdBQUosQ0FBZ0JOLElBQWhCLENBQWxCO0FBQ0FHLHVCQUFPLEdBQUcsS0FBVjtBQUNBLGVBSG9CLENBQXJCO0FBSUEsYUFURDs7QUFVQUYsZUFBRyxDQUFDcEYsZ0JBQUosQ0FBcUJrRixJQUFyQixFQUEyQkssSUFBM0I7QUFDQSxXQW5RRDs7QUFvUUFOLGtCQUFRLENBQUMsUUFBRCxFQUFXLGlCQUFYLENBQVI7QUFFQTs7QUFDQUksZ0JBQU0sQ0FBQ3JGLGdCQUFQLENBQXdCLGlCQUF4QixFQUEyQyxZQUFNO0FBRWhELHFCQUFTMEYsbUJBQVQsR0FBK0I7QUFBRTtBQUNoQyxrQkFBSUMsU0FBUyxHQUFHckUsUUFBUSxDQUFDc0UsSUFBVCxDQUFjakQsV0FBOUIsQ0FEOEIsQ0FDYTs7QUFDM0MsdUJBQVNrRCxXQUFULEdBQXVCO0FBQ3RCbEgsMEJBQVU7QUFDVkQsNkJBQWE7QUFDYkUsa0NBQWtCO0FBQ2xCQyxrQ0FBa0I7QUFDbEJDLDhCQUFjO0FBQ2Q7O0FBRUQsa0JBQUk2RyxTQUFTLEdBQUcsR0FBaEIsRUFBcUI7QUFDcEJFLDJCQUFXO0FBQ1g7O0FBQ0Qsa0JBQUlGLFNBQVMsSUFBSSxHQUFqQixFQUFzQjtBQUNyQkUsMkJBQVc7QUFDWDs7QUFDRCxrQkFBSUYsU0FBUyxJQUFJLEdBQWpCLEVBQXNCO0FBQ3JCRSwyQkFBVztBQUNYOztBQUNELGtCQUFJRixTQUFTLElBQUksR0FBakIsRUFBc0I7QUFDckJFLDJCQUFXO0FBQ1g7QUFDRDs7QUFDREgsK0JBQW1CO0FBQ25CLFdBMUJEO0FBNkJBOztBQUVNSSxjQXRTTixHQXNTYXhFLFFBQVEsQ0FBQ2lELGNBQVQsQ0FBd0IsTUFBeEIsQ0F0U2I7QUF1U0l3QixzQkF2U0osR0F1U21CekUsUUFBUSxDQUFDaUQsY0FBVCxDQUF3QixjQUF4QixDQXZTbkI7QUF3U0l5Qiw2QkF4U0osR0F3UzBCRCxZQUFZLENBQUN0QyxVQUFiLENBQXdCLElBQXhCLENBeFMxQjtBQTJTQXFDLGNBQUksQ0FBQzlGLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQUNDLEtBQUQsRUFBVztBQUV6QytGLCtCQUFtQixDQUFDbEMsU0FBcEIsQ0FBOEIsQ0FBOUIsRUFBaUMsQ0FBakMsRUFBb0MxQixNQUFNLENBQUNDLEtBQTNDLEVBQWtERCxNQUFNLENBQUNFLE1BQXpELEVBRnlDLENBRXlCOztBQUNsRXlELHdCQUFZLENBQUMxRCxLQUFiLEdBQXFCWCxPQUFPLENBQUNtQixZQUE3QixDQUh5QyxDQUdFOztBQUMzQ2tELHdCQUFZLENBQUN6RCxNQUFiLEdBQXNCWixPQUFPLENBQUNvQixhQUE5QjtBQUNBOztBQUNBa0QsK0JBQW1CLENBQUN0QyxTQUFwQixDQUE4QnRCLE1BQTlCLEVBQXNDUCxXQUFXLENBQUNDLFVBQWxELEVBQThERCxXQUFXLENBQUNFLFNBQTFFLEVBQXFGTCxPQUFPLENBQUNDLFFBQTdGLEVBQXVHRCxPQUFPLENBQUNFLFNBQS9HLEVBQTBILENBQTFILEVBQTZILENBQTdILEVBQWdJRixPQUFPLENBQUNtQixZQUF4SSxFQUFzSm5CLE9BQU8sQ0FBQ29CLGFBQTlKO0FBRUE7O0FBRUE7O0FBQ0EsZ0JBQUltRCxPQUFPLEdBQUdGLFlBQVksQ0FBQ0csU0FBYixDQUF1QixZQUF2QixDQUFkO0FBQ0FDLGFBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ05DLGlCQUFHLEVBQUUsY0FEQztBQUVObkIsa0JBQUksRUFBRSxNQUZBO0FBR05vQixrQkFBSSxFQUFFO0FBQ0xMLHVCQUFPLEVBQUVBO0FBREosZUFIQTtBQU1OO0FBQ0E7QUFDQU0scUJBQU8sRUFBRSxpQkFBVUMsR0FBVixFQUFlLENBRXZCLENBVks7QUFXTm5ELG1CQUFLLEVBQUUsaUJBQVk7QUFDbEJvRCx1QkFBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQTtBQWJLLGFBQVA7QUFnQkEsV0E1QkQ7QUE4QkE7O0FBRU1DLGVBM1VOLEdBMlVjckYsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBM1VkLEVBMlVnRDs7QUFFMUNxRixtQkE3VU4sR0E2VWtCLFNBQVpBLFNBQVksR0FBTTtBQUFFO0FBQ3pCakMsc0JBQVUsQ0FBQ25ELEtBQVgsQ0FBaUJ3RCxPQUFqQixHQUEyQixNQUEzQjtBQUNBLFdBL1VEOztBQWlWTTZCLG1CQWpWTixHQWlWa0IsU0FBWkEsU0FBWSxHQUFNO0FBQUU7QUFFekI3Qyx1QkFBVyxDQUFDMUYsTUFBWixHQUFxQixZQUFNO0FBQUU7QUFDNUIwRix5QkFBVyxDQUFDRyxLQUFaLEdBQW9CLENBQXBCO0FBQ0FILHlCQUFXLENBQUNDLE9BQVosR0FBc0IsQ0FBdEI7QUFDQUQseUJBQVcsQ0FBQ0UsT0FBWixHQUFzQixDQUF0QjtBQUNBLGFBSkQ7O0FBTUFGLHVCQUFXLENBQUMxRixNQUFaLEdBUnVCLENBUUQ7O0FBRXRCLGdCQUFJMkMsS0FBSyxHQUFHLElBQUlDLEtBQUosRUFBWixDQVZ1QixDQVVFOztBQUN6QkQsaUJBQUssQ0FBQ0UsTUFBTixHQUFlLFlBQU07QUFDcEJtQywyQkFBYSxHQUFHckMsS0FBaEIsQ0FEb0IsQ0FDRzs7QUFDdkJ6Qyw2QkFBZTtBQUNmLGFBSEQ7O0FBSUF5QyxpQkFBSyxDQUFDSixHQUFOLEdBQWEsb0JBQWIsQ0FmdUIsQ0FlYTtBQUNwQyxXQWpXRDs7QUFtV0E4RixlQUFLLENBQUMzRyxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxVQUFDQyxLQUFELEVBQVc7QUFDMUMsZ0JBQUk2RyxNQUFNLEdBQUc3RyxLQUFLLENBQUM2RyxNQUFuQjs7QUFDQSxnQkFBSUEsTUFBTSxDQUFDQyxPQUFQLENBQWUsU0FBZixDQUFKLEVBQStCO0FBQUU7QUFDaENILHVCQUFTO0FBQ1RDLHVCQUFTO0FBQ1QsYUFIRCxNQUdPO0FBQ05DLG9CQUFNLEdBQUdBLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLGNBQWYsQ0FBVDs7QUFDQSxrQkFBSSxDQUFDRixNQUFMLEVBQWE7QUFBRTtBQUNkRix5QkFBUyxHQURHLENBQ0M7O0FBQ2JDLHlCQUFTO0FBQ1Q7QUFDRDtBQUNELFdBWkQ7QUFjQTs7QUFFQTs7QUFFQTs7QUFjQTtBQUVJcEcsbUJBcllKLEdBcVlnQixTQUFaQSxTQUFZLENBQUN4QixPQUFELEVBQVVnQixLQUFWLEVBQW9CO0FBQUU7QUFDckNBLGlCQUFLLENBQUNXLGNBQU47QUFFQSxnQkFBTXFHLFNBQVMsR0FBR2hJLE9BQU8sQ0FBQ2tCLHFCQUFSLEVBQWxCLENBSG1DLENBR2dCOztBQUVuRDs7QUFDQSxnQkFBSStHLFNBQVMsR0FBR0QsU0FBUyxDQUFDNUUsS0FBMUI7QUFDQSxnQkFBSThFLFVBQVUsR0FBR0YsU0FBUyxDQUFDM0UsTUFBM0I7QUFFQTs7QUFDQSxnQkFBTThFLE1BQU0sR0FBR25ILEtBQUssQ0FBQ29ILGNBQU4sQ0FBcUIsQ0FBckIsRUFBd0JoSCxPQUF4QixHQUFrQzRHLFNBQVMsQ0FBQ25ILElBQTNEO0FBQ0EsZ0JBQU13SCxNQUFNLEdBQUdySCxLQUFLLENBQUNvSCxjQUFOLENBQXFCLENBQXJCLEVBQXdCOUcsT0FBeEIsR0FBa0MwRyxTQUFTLENBQUN6RyxHQUEzRDtBQUVBOztBQUNBLGdCQUFLNEcsTUFBTSxHQUFHRixTQUFULElBQXNCRSxNQUFNLEdBQUcsQ0FBaEMsSUFBdUNFLE1BQU0sR0FBR0gsVUFBVCxJQUF1QkcsTUFBTSxHQUFHLENBQTNFLEVBQStFO0FBQzlFLGtCQUFJckgsS0FBSyxDQUFDaUYsSUFBTixLQUFlLFlBQW5CLEVBQWlDO0FBRWhDaEcsc0JBQU0sQ0FBQ08sR0FBUCxHQUFhLElBQWI7QUFDQVAsc0JBQU0sQ0FBQ0MsQ0FBUCxHQUFXaUksTUFBWCxDQUhnQyxDQUdiOztBQUNuQmxJLHNCQUFNLENBQUNFLENBQVAsR0FBV2tJLE1BQVg7QUFDQSxlQUxELE1BS08sSUFBSXJILEtBQUssQ0FBQ2lGLElBQU4sS0FBZSxXQUFuQixFQUFnQztBQUV0Q2hHLHNCQUFNLENBQUNHLEVBQVAsR0FBWStILE1BQU0sR0FBR2xJLE1BQU0sQ0FBQ0MsQ0FBNUIsQ0FGc0MsQ0FFUDs7QUFDL0JELHNCQUFNLENBQUNJLEVBQVAsR0FBWWdJLE1BQU0sR0FBR3BJLE1BQU0sQ0FBQ0UsQ0FBNUI7QUFFQUYsc0JBQU0sQ0FBQ0MsQ0FBUCxHQUFXaUksTUFBWCxDQUxzQyxDQUtuQjs7QUFDbkJsSSxzQkFBTSxDQUFDRSxDQUFQLEdBQVdrSSxNQUFYO0FBQ0EsZUFQTSxNQU9BLElBQUlySCxLQUFLLENBQUNpRixJQUFOLEtBQWUsVUFBbkIsRUFBK0I7QUFFckNoRyxzQkFBTSxDQUFDTyxHQUFQLEdBQWEsS0FBYjtBQUNBO0FBRUQsYUFsQkQsTUFrQk87QUFBRTtBQUNSUCxvQkFBTSxDQUFDTyxHQUFQLEdBQWEsS0FBYjtBQUNBO0FBQ0QsV0F4YUQ7O0FBNmZBOztBQUVBO0FBRUk4SCx1QkFqZ0JKLEdBaWdCb0JqRyxRQUFRLENBQUN1RCxnQkFBVCxDQUEwQixhQUExQixDQWpnQnBCO0FBbWdCQTBDLHVCQUFhLENBQUN6QyxPQUFkLENBQXNCLFVBQUNDLElBQUQsRUFBVTtBQUMvQkEsZ0JBQUksQ0FBQy9FLGdCQUFMLENBQXNCLFlBQXRCLEVBQW9DLFlBQU07QUFDekMrRSxrQkFBSSxDQUFDeUMsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFNBQW5CO0FBRUEsYUFIRDtBQUlBMUMsZ0JBQUksQ0FBQy9FLGdCQUFMLENBQXNCLFVBQXRCLEVBQWtDLFlBQU07QUFDdkMrRSxrQkFBSSxDQUFDeUMsU0FBTCxDQUFlRSxNQUFmLENBQXNCLFNBQXRCO0FBRUEsYUFIRDtBQUlBLFdBVEQ7QUFXQUgsdUJBQWEsQ0FBQ3pDLE9BQWQsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFVO0FBQy9CQSxnQkFBSSxDQUFDL0UsZ0JBQUwsQ0FBc0IsV0FBdEIsRUFBbUMsWUFBTTtBQUN4QytFLGtCQUFJLENBQUN5QyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsU0FBbkI7QUFFQSxhQUhEO0FBSUExQyxnQkFBSSxDQUFDL0UsZ0JBQUwsQ0FBc0IsU0FBdEIsRUFBaUMsWUFBTTtBQUN0QytFLGtCQUFJLENBQUN5QyxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsU0FBdEI7QUFDQSxhQUZEO0FBR0EsV0FSRDtBQVVBOztBQUVBOztBQUVJQyxtQkE1aEJKLEdBNGhCZ0JyRyxRQUFRLENBQUN1RCxnQkFBVCxDQUEwQixRQUExQixDQTVoQmhCO0FBK2hCQTs7QUFFSStDLHFCQWppQkosR0FpaUJrQixTQUFkQSxXQUFjLENBQUM3QyxJQUFELEVBQU85RSxLQUFQLEVBQWlCO0FBQ2xDLGdCQUFJQSxLQUFLLENBQUNTLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdkIsa0JBQUltSCxTQUFTLEdBQUdDLE1BQU0sQ0FBQy9DLElBQUksQ0FBQ3lDLFNBQUwsQ0FBZSxDQUFmLENBQUQsQ0FBdEIsQ0FEdUIsQ0FDb0I7O0FBRTNDLGtCQUFJTyxPQUFPLEdBQUd6RyxRQUFRLENBQUNDLGFBQVQsWUFBMkJzRyxTQUEzQixFQUFkLENBSHVCLENBR2dDOztBQUV2RCxrQkFBSTVILEtBQUssQ0FBQ2lGLElBQU4sS0FBZSxXQUFuQixFQUFnQztBQUFFO0FBQ2pDNkMsdUJBQU8sQ0FBQ1AsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsU0FBdEIsRUFEK0IsQ0FDRzs7QUFDbEN2SSxzQkFBTSxDQUFDMkksU0FBRCxDQUFOLEdBQW9CLElBQXBCO0FBQ0EsZUFIRCxNQUdPLElBQUk1SCxLQUFLLENBQUNpRixJQUFOLEtBQWUsU0FBbkIsRUFBOEI7QUFDcEM2Qyx1QkFBTyxDQUFDUCxTQUFSLENBQWtCRSxNQUFsQixDQUF5QixTQUF6QixFQURvQyxDQUNDOztBQUNyQ3hJLHNCQUFNLENBQUMySSxTQUFELENBQU4sR0FBb0IsS0FBcEI7QUFFQTtBQUNEO0FBQ0QsV0FoakJEOztBQWtqQkFGLG1CQUFTLENBQUM3QyxPQUFWLENBQWtCLFVBQUNDLElBQUQsRUFBVTtBQUMzQkEsZ0JBQUksQ0FBQy9FLGdCQUFMLENBQXNCLFdBQXRCLEVBQW1DLFVBQUNDLEtBQUQsRUFBVztBQUU3QyxrQkFBSThFLElBQUksQ0FBQ2dDLE9BQUwsQ0FBYSxLQUFiLENBQUosRUFBeUI7QUFDeEJhLDJCQUFXLENBQUM3QyxJQUFELEVBQU85RSxLQUFQLENBQVg7QUFDQTs7QUFDRCxrQkFBSThFLElBQUksQ0FBQ2dDLE9BQUwsQ0FBYSxPQUFiLENBQUosRUFBMkI7QUFDMUJhLDJCQUFXLENBQUM3QyxJQUFELEVBQU85RSxLQUFQLENBQVg7QUFDQTs7QUFDRCxrQkFBSThFLElBQUksQ0FBQ2dDLE9BQUwsQ0FBYSxPQUFiLENBQUosRUFBMkI7QUFDMUJhLDJCQUFXLENBQUM3QyxJQUFELEVBQU85RSxLQUFQLENBQVg7QUFDQTs7QUFDRCxrQkFBSThFLElBQUksQ0FBQ2dDLE9BQUwsQ0FBYSxRQUFiLENBQUosRUFBNEI7QUFDM0JhLDJCQUFXLENBQUM3QyxJQUFELEVBQU85RSxLQUFQLENBQVg7QUFDQTs7QUFDRCxrQkFBSThFLElBQUksQ0FBQ2lDLE9BQUwsQ0FBYSxPQUFiLENBQUosRUFBMkI7QUFDMUJZLDJCQUFXLENBQUM3QyxJQUFELEVBQU85RSxLQUFQLENBQVg7QUFDQTs7QUFDRCxrQkFBSThFLElBQUksQ0FBQ2dDLE9BQUwsQ0FBYSxPQUFiLENBQUosRUFBMkI7QUFDMUJhLDJCQUFXLENBQUM3QyxJQUFELEVBQU85RSxLQUFQLENBQVg7QUFDQTtBQUNELGFBcEJEO0FBcUJBOEUsZ0JBQUksQ0FBQy9FLGdCQUFMLENBQXNCLFNBQXRCLEVBQWlDLFVBQUNDLEtBQUQsRUFBVztBQUUzQyxrQkFBSThFLElBQUksQ0FBQ2dDLE9BQUwsQ0FBYSxLQUFiLENBQUosRUFBeUI7QUFDeEJhLDJCQUFXLENBQUM3QyxJQUFELEVBQU85RSxLQUFQLENBQVg7QUFDQTs7QUFDRCxrQkFBSThFLElBQUksQ0FBQ2dDLE9BQUwsQ0FBYSxPQUFiLENBQUosRUFBMkI7QUFDMUJhLDJCQUFXLENBQUM3QyxJQUFELEVBQU85RSxLQUFQLENBQVg7QUFDQTs7QUFDRCxrQkFBSThFLElBQUksQ0FBQ2dDLE9BQUwsQ0FBYSxPQUFiLENBQUosRUFBMkI7QUFDMUJhLDJCQUFXLENBQUM3QyxJQUFELEVBQU85RSxLQUFQLENBQVg7QUFDQTs7QUFDRCxrQkFBSThFLElBQUksQ0FBQ2dDLE9BQUwsQ0FBYSxRQUFiLENBQUosRUFBNEI7QUFDM0JhLDJCQUFXLENBQUM3QyxJQUFELEVBQU85RSxLQUFQLENBQVg7QUFDQTs7QUFDRCxrQkFBSThFLElBQUksQ0FBQ2dDLE9BQUwsQ0FBYSxPQUFiLENBQUosRUFBMkI7QUFDMUJhLDJCQUFXLENBQUM3QyxJQUFELEVBQU85RSxLQUFQLENBQVg7QUFDQTs7QUFDRCxrQkFBSThFLElBQUksQ0FBQ2dDLE9BQUwsQ0FBYSxPQUFiLENBQUosRUFBMkI7QUFDMUJhLDJCQUFXLENBQUM3QyxJQUFELEVBQU85RSxLQUFQLENBQVg7QUFDQTtBQUNELGFBcEJEO0FBcUJBLFdBM0NEO0FBNkNBOztBQUdBOztBQUVJK0gscUJBcG1CSixHQW9tQmtCLFNBQWRBLFdBQWMsQ0FBQ2pELElBQUQsRUFBTzlFLEtBQVAsRUFBaUI7QUFDbENBLGlCQUFLLENBQUNXLGNBQU47QUFDQSxnQkFBTXFILFFBQVEsR0FBR2xELElBQUksQ0FBQzVFLHFCQUFMLEVBQWpCO0FBRUEsZ0JBQUkwSCxTQUFTLEdBQUdDLE1BQU0sQ0FBQy9DLElBQUksQ0FBQ3lDLFNBQUwsQ0FBZSxDQUFmLENBQUQsQ0FBdEIsQ0FKa0MsQ0FJUzs7QUFDM0MsZ0JBQUlOLFNBQVMsR0FBR2UsUUFBUSxDQUFDNUYsS0FBekI7QUFDQSxnQkFBSThFLFVBQVUsR0FBR2MsUUFBUSxDQUFDM0YsTUFBMUI7QUFFQSxnQkFBSXlGLE9BQU8sR0FBR3pHLFFBQVEsQ0FBQ0MsYUFBVCxZQUEyQnNHLFNBQTNCLEVBQWQsQ0FSa0MsQ0FRcUI7O0FBRXZELGdCQUFNSyxLQUFLLEdBQUdqSSxLQUFLLENBQUNvSCxjQUFOLENBQXFCLENBQXJCLEVBQXdCaEgsT0FBeEIsR0FBa0M0SCxRQUFRLENBQUNuSSxJQUF6RDtBQUNBLGdCQUFNcUksS0FBSyxHQUFHbEksS0FBSyxDQUFDb0gsY0FBTixDQUFxQixDQUFyQixFQUF3QjlHLE9BQXhCLEdBQWtDMEgsUUFBUSxDQUFDekgsR0FBekQ7QUFFQTs7QUFDQSxnQkFBSzBILEtBQUssR0FBR2hCLFNBQVIsSUFBcUJnQixLQUFLLEdBQUcsQ0FBOUIsSUFBcUNDLEtBQUssR0FBR2hCLFVBQVIsSUFBc0JnQixLQUFLLEdBQUcsQ0FBdkUsRUFBMkU7QUFFMUUsa0JBQUlsSSxLQUFLLENBQUNpRixJQUFOLEtBQWUsWUFBbkIsRUFBaUM7QUFBRTtBQUNsQ2hHLHNCQUFNLENBQUMySSxTQUFELENBQU4sR0FBb0IsSUFBcEIsQ0FEZ0MsQ0FDTjs7QUFFMUJFLHVCQUFPLENBQUNQLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFNBQXRCLEVBSGdDLENBR0U7O0FBRWxDeEgscUJBQUssQ0FBQ1csY0FBTjtBQUNBLGVBTkQsTUFNTyxJQUFJWCxLQUFLLENBQUNpRixJQUFOLEtBQWUsVUFBbkIsRUFBK0I7QUFDckNoRyxzQkFBTSxDQUFDMkksU0FBRCxDQUFOLEdBQW9CLEtBQXBCO0FBRUFFLHVCQUFPLENBQUNQLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCLFNBQXpCLEVBSHFDLENBR0E7O0FBRXJDekgscUJBQUssQ0FBQ1csY0FBTjtBQUVBO0FBQ0Q7QUFFRCxXQXBvQkQ7O0FBc29CQStHLG1CQUFTLENBQUM3QyxPQUFWLENBQWtCLFVBQUNDLElBQUQsRUFBVTtBQUMzQkEsZ0JBQUksQ0FBQy9FLGdCQUFMLENBQXNCLFlBQXRCLEVBQW9DLFVBQUNDLEtBQUQsRUFBVztBQUU5QyxrQkFBSThFLElBQUksQ0FBQ2dDLE9BQUwsQ0FBYSxLQUFiLENBQUosRUFBeUI7QUFDeEJpQiwyQkFBVyxDQUFDakQsSUFBRCxFQUFPOUUsS0FBUCxDQUFYO0FBQ0E7O0FBQ0Qsa0JBQUk4RSxJQUFJLENBQUNnQyxPQUFMLENBQWEsT0FBYixDQUFKLEVBQTJCO0FBQzFCaUIsMkJBQVcsQ0FBQ2pELElBQUQsRUFBTzlFLEtBQVAsQ0FBWDtBQUNBOztBQUNELGtCQUFJOEUsSUFBSSxDQUFDZ0MsT0FBTCxDQUFhLE9BQWIsQ0FBSixFQUEyQjtBQUMxQmlCLDJCQUFXLENBQUNqRCxJQUFELEVBQU85RSxLQUFQLENBQVg7QUFDQTs7QUFDRCxrQkFBSThFLElBQUksQ0FBQ2dDLE9BQUwsQ0FBYSxRQUFiLENBQUosRUFBNEI7QUFDM0JpQiwyQkFBVyxDQUFDakQsSUFBRCxFQUFPOUUsS0FBUCxDQUFYO0FBQ0E7O0FBQ0Qsa0JBQUk4RSxJQUFJLENBQUNnQyxPQUFMLENBQWEsT0FBYixDQUFKLEVBQTJCO0FBQzFCaUIsMkJBQVcsQ0FBQ2pELElBQUQsRUFBTzlFLEtBQVAsQ0FBWDtBQUNBOztBQUNELGtCQUFJOEUsSUFBSSxDQUFDZ0MsT0FBTCxDQUFhLE9BQWIsQ0FBSixFQUEyQjtBQUMxQmlCLDJCQUFXLENBQUNqRCxJQUFELEVBQU85RSxLQUFQLENBQVg7QUFDQTtBQUVELGFBckJEO0FBc0JBOEUsZ0JBQUksQ0FBQy9FLGdCQUFMLENBQXNCLFVBQXRCLEVBQWtDLFVBQUNDLEtBQUQsRUFBVztBQUU1QyxrQkFBSThFLElBQUksQ0FBQ2dDLE9BQUwsQ0FBYSxLQUFiLENBQUosRUFBeUI7QUFDeEJpQiwyQkFBVyxDQUFDakQsSUFBRCxFQUFPOUUsS0FBUCxDQUFYO0FBQ0E7O0FBQ0Qsa0JBQUk4RSxJQUFJLENBQUNnQyxPQUFMLENBQWEsT0FBYixDQUFKLEVBQTJCO0FBQzFCaUIsMkJBQVcsQ0FBQ2pELElBQUQsRUFBTzlFLEtBQVAsQ0FBWDtBQUNBOztBQUNELGtCQUFJOEUsSUFBSSxDQUFDZ0MsT0FBTCxDQUFhLE9BQWIsQ0FBSixFQUEyQjtBQUMxQmlCLDJCQUFXLENBQUNqRCxJQUFELEVBQU85RSxLQUFQLENBQVg7QUFDQTs7QUFDRCxrQkFBSThFLElBQUksQ0FBQ2dDLE9BQUwsQ0FBYSxRQUFiLENBQUosRUFBNEI7QUFDM0JpQiwyQkFBVyxDQUFDakQsSUFBRCxFQUFPOUUsS0FBUCxDQUFYO0FBQ0E7O0FBQ0Qsa0JBQUk4RSxJQUFJLENBQUNnQyxPQUFMLENBQWEsT0FBYixDQUFKLEVBQTJCO0FBQzFCaUIsMkJBQVcsQ0FBQ2pELElBQUQsRUFBTzlFLEtBQVAsQ0FBWDtBQUNBOztBQUNELGtCQUFJOEUsSUFBSSxDQUFDZ0MsT0FBTCxDQUFhLE9BQWIsQ0FBSixFQUEyQjtBQUMxQmlCLDJCQUFXLENBQUNqRCxJQUFELEVBQU85RSxLQUFQLENBQVg7QUFDQTtBQUNELGFBcEJEO0FBcUJBLFdBNUNEO0FBK0NBOztBQUVBOztBQXZyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBRCxLOzs7Ozs7Ozs7OztBQ0pBLFNBQVNtSSxrQkFBVCxDQUE0QkMsR0FBNUIsRUFBaUN0SCxPQUFqQyxFQUEwQ0MsTUFBMUMsRUFBa0RzSCxLQUFsRCxFQUF5REMsTUFBekQsRUFBaUVDLEdBQWpFLEVBQXNFQyxHQUF0RSxFQUEyRTtBQUN6RSxNQUFJO0FBQ0YsUUFBSUMsSUFBSSxHQUFHTCxHQUFHLENBQUNHLEdBQUQsQ0FBSCxDQUFTQyxHQUFULENBQVg7QUFDQSxRQUFJRSxLQUFLLEdBQUdELElBQUksQ0FBQ0MsS0FBakI7QUFDRCxHQUhELENBR0UsT0FBT3RGLEtBQVAsRUFBYztBQUNkckMsVUFBTSxDQUFDcUMsS0FBRCxDQUFOO0FBQ0E7QUFDRDs7QUFFRCxNQUFJcUYsSUFBSSxDQUFDRSxJQUFULEVBQWU7QUFDYjdILFdBQU8sQ0FBQzRILEtBQUQsQ0FBUDtBQUNELEdBRkQsTUFFTztBQUNMN0gsV0FBTyxDQUFDQyxPQUFSLENBQWdCNEgsS0FBaEIsRUFBdUJFLElBQXZCLENBQTRCUCxLQUE1QixFQUFtQ0MsTUFBbkM7QUFDRDtBQUNGOztBQUVELFNBQVNPLGlCQUFULENBQTJCQyxFQUEzQixFQUErQjtBQUM3QixTQUFPLFlBQVk7QUFDakIsUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFBQSxRQUNJQyxJQUFJLEdBQUdDLFNBRFg7QUFFQSxXQUFPLElBQUlwSSxPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQkMsTUFBbkIsRUFBMkI7QUFDNUMsVUFBSXFILEdBQUcsR0FBR1UsRUFBRSxDQUFDSSxLQUFILENBQVNILElBQVQsRUFBZUMsSUFBZixDQUFWOztBQUVBLGVBQVNYLEtBQVQsQ0FBZUssS0FBZixFQUFzQjtBQUNwQlAsMEJBQWtCLENBQUNDLEdBQUQsRUFBTXRILE9BQU4sRUFBZUMsTUFBZixFQUF1QnNILEtBQXZCLEVBQThCQyxNQUE5QixFQUFzQyxNQUF0QyxFQUE4Q0ksS0FBOUMsQ0FBbEI7QUFDRDs7QUFFRCxlQUFTSixNQUFULENBQWdCbkgsR0FBaEIsRUFBcUI7QUFDbkJnSCwwQkFBa0IsQ0FBQ0MsR0FBRCxFQUFNdEgsT0FBTixFQUFlQyxNQUFmLEVBQXVCc0gsS0FBdkIsRUFBOEJDLE1BQTlCLEVBQXNDLE9BQXRDLEVBQStDbkgsR0FBL0MsQ0FBbEI7QUFDRDs7QUFFRGtILFdBQUssQ0FBQ2MsU0FBRCxDQUFMO0FBQ0QsS0FaTSxDQUFQO0FBYUQsR0FoQkQ7QUFpQkQ7O0FBRURDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlIsaUJBQWpCLEM7Ozs7Ozs7Ozs7O0FDcENBLFNBQVNTLHNCQUFULENBQWdDbkUsR0FBaEMsRUFBcUM7QUFDbkMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNvRSxVQUFYLEdBQXdCcEUsR0FBeEIsR0FBOEI7QUFDbkMsZUFBV0E7QUFEd0IsR0FBckM7QUFHRDs7QUFFRGlFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsc0JBQWpCLEM7Ozs7Ozs7Ozs7O0FDTkFGLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkcsbUJBQU8sQ0FBQywwRUFBRCxDQUF4QixDOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFPQSxJQUFJQyxPQUFPLEdBQUksVUFBVUosT0FBVixFQUFtQjtBQUNoQzs7QUFFQSxNQUFJSyxFQUFFLEdBQUdDLE1BQU0sQ0FBQ0MsU0FBaEI7QUFDQSxNQUFJQyxNQUFNLEdBQUdILEVBQUUsQ0FBQ0ksY0FBaEI7QUFDQSxNQUFJWCxTQUFKLENBTGdDLENBS2pCOztBQUNmLE1BQUlZLE9BQU8sR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLEdBQStCQSxNQUEvQixHQUF3QyxFQUF0RDtBQUNBLE1BQUlDLGNBQWMsR0FBR0YsT0FBTyxDQUFDRyxRQUFSLElBQW9CLFlBQXpDO0FBQ0EsTUFBSUMsbUJBQW1CLEdBQUdKLE9BQU8sQ0FBQ0ssYUFBUixJQUF5QixpQkFBbkQ7QUFDQSxNQUFJQyxpQkFBaUIsR0FBR04sT0FBTyxDQUFDTyxXQUFSLElBQXVCLGVBQS9DOztBQUVBLFdBQVNDLE1BQVQsQ0FBZ0JwRixHQUFoQixFQUFxQm9ELEdBQXJCLEVBQTBCRyxLQUExQixFQUFpQztBQUMvQmlCLFVBQU0sQ0FBQ2EsY0FBUCxDQUFzQnJGLEdBQXRCLEVBQTJCb0QsR0FBM0IsRUFBZ0M7QUFDOUJHLFdBQUssRUFBRUEsS0FEdUI7QUFFOUIrQixnQkFBVSxFQUFFLElBRmtCO0FBRzlCQyxrQkFBWSxFQUFFLElBSGdCO0FBSTlCQyxjQUFRLEVBQUU7QUFKb0IsS0FBaEM7QUFNQSxXQUFPeEYsR0FBRyxDQUFDb0QsR0FBRCxDQUFWO0FBQ0Q7O0FBQ0QsTUFBSTtBQUNGO0FBQ0FnQyxVQUFNLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBTjtBQUNELEdBSEQsQ0FHRSxPQUFPcEosR0FBUCxFQUFZO0FBQ1pvSixVQUFNLEdBQUcsVUFBU3BGLEdBQVQsRUFBY29ELEdBQWQsRUFBbUJHLEtBQW5CLEVBQTBCO0FBQ2pDLGFBQU92RCxHQUFHLENBQUNvRCxHQUFELENBQUgsR0FBV0csS0FBbEI7QUFDRCxLQUZEO0FBR0Q7O0FBRUQsV0FBU2tDLElBQVQsQ0FBY0MsT0FBZCxFQUF1QkMsT0FBdkIsRUFBZ0MvQixJQUFoQyxFQUFzQ2dDLFdBQXRDLEVBQW1EO0FBQ2pEO0FBQ0EsUUFBSUMsY0FBYyxHQUFHRixPQUFPLElBQUlBLE9BQU8sQ0FBQ2xCLFNBQVIsWUFBNkJxQixTQUF4QyxHQUFvREgsT0FBcEQsR0FBOERHLFNBQW5GO0FBQ0EsUUFBSUMsU0FBUyxHQUFHdkIsTUFBTSxDQUFDd0IsTUFBUCxDQUFjSCxjQUFjLENBQUNwQixTQUE3QixDQUFoQjtBQUNBLFFBQUlyRyxPQUFPLEdBQUcsSUFBSTZILE9BQUosQ0FBWUwsV0FBVyxJQUFJLEVBQTNCLENBQWQsQ0FKaUQsQ0FNakQ7QUFDQTs7QUFDQUcsYUFBUyxDQUFDRyxPQUFWLEdBQW9CQyxnQkFBZ0IsQ0FBQ1QsT0FBRCxFQUFVOUIsSUFBVixFQUFnQnhGLE9BQWhCLENBQXBDO0FBRUEsV0FBTzJILFNBQVA7QUFDRDs7QUFDRDdCLFNBQU8sQ0FBQ3VCLElBQVIsR0FBZUEsSUFBZixDQXpDZ0MsQ0EyQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFdBQVNXLFFBQVQsQ0FBa0J6QyxFQUFsQixFQUFzQjNELEdBQXRCLEVBQTJCcUQsR0FBM0IsRUFBZ0M7QUFDOUIsUUFBSTtBQUNGLGFBQU87QUFBRXZELFlBQUksRUFBRSxRQUFSO0FBQWtCdUQsV0FBRyxFQUFFTSxFQUFFLENBQUMwQyxJQUFILENBQVFyRyxHQUFSLEVBQWFxRCxHQUFiO0FBQXZCLE9BQVA7QUFDRCxLQUZELENBRUUsT0FBT3JILEdBQVAsRUFBWTtBQUNaLGFBQU87QUFBRThELFlBQUksRUFBRSxPQUFSO0FBQWlCdUQsV0FBRyxFQUFFckg7QUFBdEIsT0FBUDtBQUNEO0FBQ0Y7O0FBRUQsTUFBSXNLLHNCQUFzQixHQUFHLGdCQUE3QjtBQUNBLE1BQUlDLHNCQUFzQixHQUFHLGdCQUE3QjtBQUNBLE1BQUlDLGlCQUFpQixHQUFHLFdBQXhCO0FBQ0EsTUFBSUMsaUJBQWlCLEdBQUcsV0FBeEIsQ0FoRWdDLENBa0VoQztBQUNBOztBQUNBLE1BQUlDLGdCQUFnQixHQUFHLEVBQXZCLENBcEVnQyxDQXNFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsV0FBU1osU0FBVCxHQUFxQixDQUFFOztBQUN2QixXQUFTYSxpQkFBVCxHQUE2QixDQUFFOztBQUMvQixXQUFTQywwQkFBVCxHQUFzQyxDQUFFLENBNUVSLENBOEVoQztBQUNBOzs7QUFDQSxNQUFJQyxpQkFBaUIsR0FBRyxFQUF4Qjs7QUFDQUEsbUJBQWlCLENBQUMvQixjQUFELENBQWpCLEdBQW9DLFlBQVk7QUFDOUMsV0FBTyxJQUFQO0FBQ0QsR0FGRDs7QUFJQSxNQUFJZ0MsUUFBUSxHQUFHdEMsTUFBTSxDQUFDdUMsY0FBdEI7QUFDQSxNQUFJQyx1QkFBdUIsR0FBR0YsUUFBUSxJQUFJQSxRQUFRLENBQUNBLFFBQVEsQ0FBQ0csTUFBTSxDQUFDLEVBQUQsQ0FBUCxDQUFULENBQWxEOztBQUNBLE1BQUlELHVCQUF1QixJQUN2QkEsdUJBQXVCLEtBQUt6QyxFQUQ1QixJQUVBRyxNQUFNLENBQUMyQixJQUFQLENBQVlXLHVCQUFaLEVBQXFDbEMsY0FBckMsQ0FGSixFQUUwRDtBQUN4RDtBQUNBO0FBQ0ErQixxQkFBaUIsR0FBR0csdUJBQXBCO0FBQ0Q7O0FBRUQsTUFBSUUsRUFBRSxHQUFHTiwwQkFBMEIsQ0FBQ25DLFNBQTNCLEdBQ1BxQixTQUFTLENBQUNyQixTQUFWLEdBQXNCRCxNQUFNLENBQUN3QixNQUFQLENBQWNhLGlCQUFkLENBRHhCO0FBRUFGLG1CQUFpQixDQUFDbEMsU0FBbEIsR0FBOEJ5QyxFQUFFLENBQUNDLFdBQUgsR0FBaUJQLDBCQUEvQztBQUNBQSw0QkFBMEIsQ0FBQ08sV0FBM0IsR0FBeUNSLGlCQUF6QztBQUNBQSxtQkFBaUIsQ0FBQ1MsV0FBbEIsR0FBZ0NoQyxNQUFNLENBQ3BDd0IsMEJBRG9DLEVBRXBDMUIsaUJBRm9DLEVBR3BDLG1CQUhvQyxDQUF0QyxDQW5HZ0MsQ0F5R2hDO0FBQ0E7O0FBQ0EsV0FBU21DLHFCQUFULENBQStCNUMsU0FBL0IsRUFBMEM7QUFDeEMsS0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0Qi9FLE9BQTVCLENBQW9DLFVBQVM0SCxNQUFULEVBQWlCO0FBQ25EbEMsWUFBTSxDQUFDWCxTQUFELEVBQVk2QyxNQUFaLEVBQW9CLFVBQVNqRSxHQUFULEVBQWM7QUFDdEMsZUFBTyxLQUFLNkMsT0FBTCxDQUFhb0IsTUFBYixFQUFxQmpFLEdBQXJCLENBQVA7QUFDRCxPQUZLLENBQU47QUFHRCxLQUpEO0FBS0Q7O0FBRURhLFNBQU8sQ0FBQ3FELG1CQUFSLEdBQThCLFVBQVNDLE1BQVQsRUFBaUI7QUFDN0MsUUFBSUMsSUFBSSxHQUFHLE9BQU9ELE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NBLE1BQU0sQ0FBQ0wsV0FBbEQ7QUFDQSxXQUFPTSxJQUFJLEdBQ1BBLElBQUksS0FBS2QsaUJBQVQsSUFDQTtBQUNBO0FBQ0EsS0FBQ2MsSUFBSSxDQUFDTCxXQUFMLElBQW9CSyxJQUFJLENBQUMxSCxJQUExQixNQUFvQyxtQkFKN0IsR0FLUCxLQUxKO0FBTUQsR0FSRDs7QUFVQW1FLFNBQU8sQ0FBQ3dELElBQVIsR0FBZSxVQUFTRixNQUFULEVBQWlCO0FBQzlCLFFBQUloRCxNQUFNLENBQUNtRCxjQUFYLEVBQTJCO0FBQ3pCbkQsWUFBTSxDQUFDbUQsY0FBUCxDQUFzQkgsTUFBdEIsRUFBOEJaLDBCQUE5QjtBQUNELEtBRkQsTUFFTztBQUNMWSxZQUFNLENBQUNJLFNBQVAsR0FBbUJoQiwwQkFBbkI7QUFDQXhCLFlBQU0sQ0FBQ29DLE1BQUQsRUFBU3RDLGlCQUFULEVBQTRCLG1CQUE1QixDQUFOO0FBQ0Q7O0FBQ0RzQyxVQUFNLENBQUMvQyxTQUFQLEdBQW1CRCxNQUFNLENBQUN3QixNQUFQLENBQWNrQixFQUFkLENBQW5CO0FBQ0EsV0FBT00sTUFBUDtBQUNELEdBVEQsQ0E3SGdDLENBd0loQztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0F0RCxTQUFPLENBQUMyRCxLQUFSLEdBQWdCLFVBQVN4RSxHQUFULEVBQWM7QUFDNUIsV0FBTztBQUFFeUUsYUFBTyxFQUFFekU7QUFBWCxLQUFQO0FBQ0QsR0FGRDs7QUFJQSxXQUFTMEUsYUFBVCxDQUF1QmhDLFNBQXZCLEVBQWtDaUMsV0FBbEMsRUFBK0M7QUFDN0MsYUFBU0MsTUFBVCxDQUFnQlgsTUFBaEIsRUFBd0JqRSxHQUF4QixFQUE2QjFILE9BQTdCLEVBQXNDQyxNQUF0QyxFQUE4QztBQUM1QyxVQUFJc00sTUFBTSxHQUFHOUIsUUFBUSxDQUFDTCxTQUFTLENBQUN1QixNQUFELENBQVYsRUFBb0J2QixTQUFwQixFQUErQjFDLEdBQS9CLENBQXJCOztBQUNBLFVBQUk2RSxNQUFNLENBQUNwSSxJQUFQLEtBQWdCLE9BQXBCLEVBQTZCO0FBQzNCbEUsY0FBTSxDQUFDc00sTUFBTSxDQUFDN0UsR0FBUixDQUFOO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSXRGLE1BQU0sR0FBR21LLE1BQU0sQ0FBQzdFLEdBQXBCO0FBQ0EsWUFBSUUsS0FBSyxHQUFHeEYsTUFBTSxDQUFDd0YsS0FBbkI7O0FBQ0EsWUFBSUEsS0FBSyxJQUNMLE9BQU9BLEtBQVAsS0FBaUIsUUFEakIsSUFFQW1CLE1BQU0sQ0FBQzJCLElBQVAsQ0FBWTlDLEtBQVosRUFBbUIsU0FBbkIsQ0FGSixFQUVtQztBQUNqQyxpQkFBT3lFLFdBQVcsQ0FBQ3JNLE9BQVosQ0FBb0I0SCxLQUFLLENBQUN1RSxPQUExQixFQUFtQ3JFLElBQW5DLENBQXdDLFVBQVNGLEtBQVQsRUFBZ0I7QUFDN0QwRSxrQkFBTSxDQUFDLE1BQUQsRUFBUzFFLEtBQVQsRUFBZ0I1SCxPQUFoQixFQUF5QkMsTUFBekIsQ0FBTjtBQUNELFdBRk0sRUFFSixVQUFTSSxHQUFULEVBQWM7QUFDZmlNLGtCQUFNLENBQUMsT0FBRCxFQUFVak0sR0FBVixFQUFlTCxPQUFmLEVBQXdCQyxNQUF4QixDQUFOO0FBQ0QsV0FKTSxDQUFQO0FBS0Q7O0FBRUQsZUFBT29NLFdBQVcsQ0FBQ3JNLE9BQVosQ0FBb0I0SCxLQUFwQixFQUEyQkUsSUFBM0IsQ0FBZ0MsVUFBUzBFLFNBQVQsRUFBb0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0FwSyxnQkFBTSxDQUFDd0YsS0FBUCxHQUFlNEUsU0FBZjtBQUNBeE0saUJBQU8sQ0FBQ29DLE1BQUQsQ0FBUDtBQUNELFNBTk0sRUFNSixVQUFTRSxLQUFULEVBQWdCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBT2dLLE1BQU0sQ0FBQyxPQUFELEVBQVVoSyxLQUFWLEVBQWlCdEMsT0FBakIsRUFBMEJDLE1BQTFCLENBQWI7QUFDRCxTQVZNLENBQVA7QUFXRDtBQUNGOztBQUVELFFBQUl3TSxlQUFKOztBQUVBLGFBQVNDLE9BQVQsQ0FBaUJmLE1BQWpCLEVBQXlCakUsR0FBekIsRUFBOEI7QUFDNUIsZUFBU2lGLDBCQUFULEdBQXNDO0FBQ3BDLGVBQU8sSUFBSU4sV0FBSixDQUFnQixVQUFTck0sT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDL0NxTSxnQkFBTSxDQUFDWCxNQUFELEVBQVNqRSxHQUFULEVBQWMxSCxPQUFkLEVBQXVCQyxNQUF2QixDQUFOO0FBQ0QsU0FGTSxDQUFQO0FBR0Q7O0FBRUQsYUFBT3dNLGVBQWUsR0FDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLHFCQUFlLEdBQUdBLGVBQWUsQ0FBQzNFLElBQWhCLENBQ2hCNkUsMEJBRGdCLEVBRWhCO0FBQ0E7QUFDQUEsZ0NBSmdCLENBQUgsR0FLWEEsMEJBQTBCLEVBbEJoQztBQW1CRCxLQTVENEMsQ0E4RDdDO0FBQ0E7OztBQUNBLFNBQUtwQyxPQUFMLEdBQWVtQyxPQUFmO0FBQ0Q7O0FBRURoQix1QkFBcUIsQ0FBQ1UsYUFBYSxDQUFDdEQsU0FBZixDQUFyQjs7QUFDQXNELGVBQWEsQ0FBQ3RELFNBQWQsQ0FBd0JPLG1CQUF4QixJQUErQyxZQUFZO0FBQ3pELFdBQU8sSUFBUDtBQUNELEdBRkQ7O0FBR0FkLFNBQU8sQ0FBQzZELGFBQVIsR0FBd0JBLGFBQXhCLENBdk5nQyxDQXlOaEM7QUFDQTtBQUNBOztBQUNBN0QsU0FBTyxDQUFDcUUsS0FBUixHQUFnQixVQUFTN0MsT0FBVCxFQUFrQkMsT0FBbEIsRUFBMkIvQixJQUEzQixFQUFpQ2dDLFdBQWpDLEVBQThDb0MsV0FBOUMsRUFBMkQ7QUFDekUsUUFBSUEsV0FBVyxLQUFLLEtBQUssQ0FBekIsRUFBNEJBLFdBQVcsR0FBR3RNLE9BQWQ7QUFFNUIsUUFBSThNLElBQUksR0FBRyxJQUFJVCxhQUFKLENBQ1R0QyxJQUFJLENBQUNDLE9BQUQsRUFBVUMsT0FBVixFQUFtQi9CLElBQW5CLEVBQXlCZ0MsV0FBekIsQ0FESyxFQUVUb0MsV0FGUyxDQUFYO0FBS0EsV0FBTzlELE9BQU8sQ0FBQ3FELG1CQUFSLENBQTRCNUIsT0FBNUIsSUFDSDZDLElBREcsQ0FDRTtBQURGLE1BRUhBLElBQUksQ0FBQ0MsSUFBTCxHQUFZaEYsSUFBWixDQUFpQixVQUFTMUYsTUFBVCxFQUFpQjtBQUNoQyxhQUFPQSxNQUFNLENBQUN5RixJQUFQLEdBQWN6RixNQUFNLENBQUN3RixLQUFyQixHQUE2QmlGLElBQUksQ0FBQ0MsSUFBTCxFQUFwQztBQUNELEtBRkQsQ0FGSjtBQUtELEdBYkQ7O0FBZUEsV0FBU3RDLGdCQUFULENBQTBCVCxPQUExQixFQUFtQzlCLElBQW5DLEVBQXlDeEYsT0FBekMsRUFBa0Q7QUFDaEQsUUFBSXNLLEtBQUssR0FBR3BDLHNCQUFaO0FBRUEsV0FBTyxTQUFTMkIsTUFBVCxDQUFnQlgsTUFBaEIsRUFBd0JqRSxHQUF4QixFQUE2QjtBQUNsQyxVQUFJcUYsS0FBSyxLQUFLbEMsaUJBQWQsRUFBaUM7QUFDL0IsY0FBTSxJQUFJbUMsS0FBSixDQUFVLDhCQUFWLENBQU47QUFDRDs7QUFFRCxVQUFJRCxLQUFLLEtBQUtqQyxpQkFBZCxFQUFpQztBQUMvQixZQUFJYSxNQUFNLEtBQUssT0FBZixFQUF3QjtBQUN0QixnQkFBTWpFLEdBQU47QUFDRCxTQUg4QixDQUsvQjtBQUNBOzs7QUFDQSxlQUFPdUYsVUFBVSxFQUFqQjtBQUNEOztBQUVEeEssYUFBTyxDQUFDa0osTUFBUixHQUFpQkEsTUFBakI7QUFDQWxKLGFBQU8sQ0FBQ2lGLEdBQVIsR0FBY0EsR0FBZDs7QUFFQSxhQUFPLElBQVAsRUFBYTtBQUNYLFlBQUl3RixRQUFRLEdBQUd6SyxPQUFPLENBQUN5SyxRQUF2Qjs7QUFDQSxZQUFJQSxRQUFKLEVBQWM7QUFDWixjQUFJQyxjQUFjLEdBQUdDLG1CQUFtQixDQUFDRixRQUFELEVBQVd6SyxPQUFYLENBQXhDOztBQUNBLGNBQUkwSyxjQUFKLEVBQW9CO0FBQ2xCLGdCQUFJQSxjQUFjLEtBQUtwQyxnQkFBdkIsRUFBeUM7QUFDekMsbUJBQU9vQyxjQUFQO0FBQ0Q7QUFDRjs7QUFFRCxZQUFJMUssT0FBTyxDQUFDa0osTUFBUixLQUFtQixNQUF2QixFQUErQjtBQUM3QjtBQUNBO0FBQ0FsSixpQkFBTyxDQUFDNEssSUFBUixHQUFlNUssT0FBTyxDQUFDNkssS0FBUixHQUFnQjdLLE9BQU8sQ0FBQ2lGLEdBQXZDO0FBRUQsU0FMRCxNQUtPLElBQUlqRixPQUFPLENBQUNrSixNQUFSLEtBQW1CLE9BQXZCLEVBQWdDO0FBQ3JDLGNBQUlvQixLQUFLLEtBQUtwQyxzQkFBZCxFQUFzQztBQUNwQ29DLGlCQUFLLEdBQUdqQyxpQkFBUjtBQUNBLGtCQUFNckksT0FBTyxDQUFDaUYsR0FBZDtBQUNEOztBQUVEakYsaUJBQU8sQ0FBQzhLLGlCQUFSLENBQTBCOUssT0FBTyxDQUFDaUYsR0FBbEM7QUFFRCxTQVJNLE1BUUEsSUFBSWpGLE9BQU8sQ0FBQ2tKLE1BQVIsS0FBbUIsUUFBdkIsRUFBaUM7QUFDdENsSixpQkFBTyxDQUFDK0ssTUFBUixDQUFlLFFBQWYsRUFBeUIvSyxPQUFPLENBQUNpRixHQUFqQztBQUNEOztBQUVEcUYsYUFBSyxHQUFHbEMsaUJBQVI7QUFFQSxZQUFJMEIsTUFBTSxHQUFHOUIsUUFBUSxDQUFDVixPQUFELEVBQVU5QixJQUFWLEVBQWdCeEYsT0FBaEIsQ0FBckI7O0FBQ0EsWUFBSThKLE1BQU0sQ0FBQ3BJLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDNUI7QUFDQTtBQUNBNEksZUFBSyxHQUFHdEssT0FBTyxDQUFDb0YsSUFBUixHQUNKaUQsaUJBREksR0FFSkYsc0JBRko7O0FBSUEsY0FBSTJCLE1BQU0sQ0FBQzdFLEdBQVAsS0FBZXFELGdCQUFuQixFQUFxQztBQUNuQztBQUNEOztBQUVELGlCQUFPO0FBQ0xuRCxpQkFBSyxFQUFFMkUsTUFBTSxDQUFDN0UsR0FEVDtBQUVMRyxnQkFBSSxFQUFFcEYsT0FBTyxDQUFDb0Y7QUFGVCxXQUFQO0FBS0QsU0FoQkQsTUFnQk8sSUFBSTBFLE1BQU0sQ0FBQ3BJLElBQVAsS0FBZ0IsT0FBcEIsRUFBNkI7QUFDbEM0SSxlQUFLLEdBQUdqQyxpQkFBUixDQURrQyxDQUVsQztBQUNBOztBQUNBckksaUJBQU8sQ0FBQ2tKLE1BQVIsR0FBaUIsT0FBakI7QUFDQWxKLGlCQUFPLENBQUNpRixHQUFSLEdBQWM2RSxNQUFNLENBQUM3RSxHQUFyQjtBQUNEO0FBQ0Y7QUFDRixLQXhFRDtBQXlFRCxHQXZUK0IsQ0F5VGhDO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxXQUFTMEYsbUJBQVQsQ0FBNkJGLFFBQTdCLEVBQXVDekssT0FBdkMsRUFBZ0Q7QUFDOUMsUUFBSWtKLE1BQU0sR0FBR3VCLFFBQVEsQ0FBQzlELFFBQVQsQ0FBa0IzRyxPQUFPLENBQUNrSixNQUExQixDQUFiOztBQUNBLFFBQUlBLE1BQU0sS0FBS3RELFNBQWYsRUFBMEI7QUFDeEI7QUFDQTtBQUNBNUYsYUFBTyxDQUFDeUssUUFBUixHQUFtQixJQUFuQjs7QUFFQSxVQUFJekssT0FBTyxDQUFDa0osTUFBUixLQUFtQixPQUF2QixFQUFnQztBQUM5QjtBQUNBLFlBQUl1QixRQUFRLENBQUM5RCxRQUFULENBQWtCLFFBQWxCLENBQUosRUFBaUM7QUFDL0I7QUFDQTtBQUNBM0csaUJBQU8sQ0FBQ2tKLE1BQVIsR0FBaUIsUUFBakI7QUFDQWxKLGlCQUFPLENBQUNpRixHQUFSLEdBQWNXLFNBQWQ7QUFDQStFLDZCQUFtQixDQUFDRixRQUFELEVBQVd6SyxPQUFYLENBQW5COztBQUVBLGNBQUlBLE9BQU8sQ0FBQ2tKLE1BQVIsS0FBbUIsT0FBdkIsRUFBZ0M7QUFDOUI7QUFDQTtBQUNBLG1CQUFPWixnQkFBUDtBQUNEO0FBQ0Y7O0FBRUR0SSxlQUFPLENBQUNrSixNQUFSLEdBQWlCLE9BQWpCO0FBQ0FsSixlQUFPLENBQUNpRixHQUFSLEdBQWMsSUFBSStGLFNBQUosQ0FDWixnREFEWSxDQUFkO0FBRUQ7O0FBRUQsYUFBTzFDLGdCQUFQO0FBQ0Q7O0FBRUQsUUFBSXdCLE1BQU0sR0FBRzlCLFFBQVEsQ0FBQ2tCLE1BQUQsRUFBU3VCLFFBQVEsQ0FBQzlELFFBQWxCLEVBQTRCM0csT0FBTyxDQUFDaUYsR0FBcEMsQ0FBckI7O0FBRUEsUUFBSTZFLE1BQU0sQ0FBQ3BJLElBQVAsS0FBZ0IsT0FBcEIsRUFBNkI7QUFDM0IxQixhQUFPLENBQUNrSixNQUFSLEdBQWlCLE9BQWpCO0FBQ0FsSixhQUFPLENBQUNpRixHQUFSLEdBQWM2RSxNQUFNLENBQUM3RSxHQUFyQjtBQUNBakYsYUFBTyxDQUFDeUssUUFBUixHQUFtQixJQUFuQjtBQUNBLGFBQU9uQyxnQkFBUDtBQUNEOztBQUVELFFBQUlwRCxJQUFJLEdBQUc0RSxNQUFNLENBQUM3RSxHQUFsQjs7QUFFQSxRQUFJLENBQUVDLElBQU4sRUFBWTtBQUNWbEYsYUFBTyxDQUFDa0osTUFBUixHQUFpQixPQUFqQjtBQUNBbEosYUFBTyxDQUFDaUYsR0FBUixHQUFjLElBQUkrRixTQUFKLENBQWMsa0NBQWQsQ0FBZDtBQUNBaEwsYUFBTyxDQUFDeUssUUFBUixHQUFtQixJQUFuQjtBQUNBLGFBQU9uQyxnQkFBUDtBQUNEOztBQUVELFFBQUlwRCxJQUFJLENBQUNFLElBQVQsRUFBZTtBQUNiO0FBQ0E7QUFDQXBGLGFBQU8sQ0FBQ3lLLFFBQVEsQ0FBQ1EsVUFBVixDQUFQLEdBQStCL0YsSUFBSSxDQUFDQyxLQUFwQyxDQUhhLENBS2I7O0FBQ0FuRixhQUFPLENBQUNxSyxJQUFSLEdBQWVJLFFBQVEsQ0FBQ1MsT0FBeEIsQ0FOYSxDQVFiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxVQUFJbEwsT0FBTyxDQUFDa0osTUFBUixLQUFtQixRQUF2QixFQUFpQztBQUMvQmxKLGVBQU8sQ0FBQ2tKLE1BQVIsR0FBaUIsTUFBakI7QUFDQWxKLGVBQU8sQ0FBQ2lGLEdBQVIsR0FBY1csU0FBZDtBQUNEO0FBRUYsS0FuQkQsTUFtQk87QUFDTDtBQUNBLGFBQU9WLElBQVA7QUFDRCxLQXZFNkMsQ0F5RTlDO0FBQ0E7OztBQUNBbEYsV0FBTyxDQUFDeUssUUFBUixHQUFtQixJQUFuQjtBQUNBLFdBQU9uQyxnQkFBUDtBQUNELEdBMVkrQixDQTRZaEM7QUFDQTs7O0FBQ0FXLHVCQUFxQixDQUFDSCxFQUFELENBQXJCO0FBRUE5QixRQUFNLENBQUM4QixFQUFELEVBQUtoQyxpQkFBTCxFQUF3QixXQUF4QixDQUFOLENBaFpnQyxDQWtaaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQWdDLElBQUUsQ0FBQ3BDLGNBQUQsQ0FBRixHQUFxQixZQUFXO0FBQzlCLFdBQU8sSUFBUDtBQUNELEdBRkQ7O0FBSUFvQyxJQUFFLENBQUNxQyxRQUFILEdBQWMsWUFBVztBQUN2QixXQUFPLG9CQUFQO0FBQ0QsR0FGRDs7QUFJQSxXQUFTQyxZQUFULENBQXNCQyxJQUF0QixFQUE0QjtBQUMxQixRQUFJQyxLQUFLLEdBQUc7QUFBRUMsWUFBTSxFQUFFRixJQUFJLENBQUMsQ0FBRDtBQUFkLEtBQVo7O0FBRUEsUUFBSSxLQUFLQSxJQUFULEVBQWU7QUFDYkMsV0FBSyxDQUFDRSxRQUFOLEdBQWlCSCxJQUFJLENBQUMsQ0FBRCxDQUFyQjtBQUNEOztBQUVELFFBQUksS0FBS0EsSUFBVCxFQUFlO0FBQ2JDLFdBQUssQ0FBQ0csVUFBTixHQUFtQkosSUFBSSxDQUFDLENBQUQsQ0FBdkI7QUFDQUMsV0FBSyxDQUFDSSxRQUFOLEdBQWlCTCxJQUFJLENBQUMsQ0FBRCxDQUFyQjtBQUNEOztBQUVELFNBQUtNLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCTixLQUFyQjtBQUNEOztBQUVELFdBQVNPLGFBQVQsQ0FBdUJQLEtBQXZCLEVBQThCO0FBQzVCLFFBQUl4QixNQUFNLEdBQUd3QixLQUFLLENBQUNRLFVBQU4sSUFBb0IsRUFBakM7QUFDQWhDLFVBQU0sQ0FBQ3BJLElBQVAsR0FBYyxRQUFkO0FBQ0EsV0FBT29JLE1BQU0sQ0FBQzdFLEdBQWQ7QUFDQXFHLFNBQUssQ0FBQ1EsVUFBTixHQUFtQmhDLE1BQW5CO0FBQ0Q7O0FBRUQsV0FBU2pDLE9BQVQsQ0FBaUJMLFdBQWpCLEVBQThCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLFNBQUttRSxVQUFMLEdBQWtCLENBQUM7QUFBRUosWUFBTSxFQUFFO0FBQVYsS0FBRCxDQUFsQjtBQUNBL0QsZUFBVyxDQUFDbEcsT0FBWixDQUFvQjhKLFlBQXBCLEVBQWtDLElBQWxDO0FBQ0EsU0FBS1csS0FBTCxDQUFXLElBQVg7QUFDRDs7QUFFRGpHLFNBQU8sQ0FBQ2tHLElBQVIsR0FBZSxVQUFTQyxNQUFULEVBQWlCO0FBQzlCLFFBQUlELElBQUksR0FBRyxFQUFYOztBQUNBLFNBQUssSUFBSWhILEdBQVQsSUFBZ0JpSCxNQUFoQixFQUF3QjtBQUN0QkQsVUFBSSxDQUFDSixJQUFMLENBQVU1RyxHQUFWO0FBQ0Q7O0FBQ0RnSCxRQUFJLENBQUNFLE9BQUwsR0FMOEIsQ0FPOUI7QUFDQTs7QUFDQSxXQUFPLFNBQVM3QixJQUFULEdBQWdCO0FBQ3JCLGFBQU8yQixJQUFJLENBQUNHLE1BQVosRUFBb0I7QUFDbEIsWUFBSW5ILEdBQUcsR0FBR2dILElBQUksQ0FBQ0ksR0FBTCxFQUFWOztBQUNBLFlBQUlwSCxHQUFHLElBQUlpSCxNQUFYLEVBQW1CO0FBQ2pCNUIsY0FBSSxDQUFDbEYsS0FBTCxHQUFhSCxHQUFiO0FBQ0FxRixjQUFJLENBQUNqRixJQUFMLEdBQVksS0FBWjtBQUNBLGlCQUFPaUYsSUFBUDtBQUNEO0FBQ0YsT0FSb0IsQ0FVckI7QUFDQTtBQUNBOzs7QUFDQUEsVUFBSSxDQUFDakYsSUFBTCxHQUFZLElBQVo7QUFDQSxhQUFPaUYsSUFBUDtBQUNELEtBZkQ7QUFnQkQsR0F6QkQ7O0FBMkJBLFdBQVN4QixNQUFULENBQWdCd0QsUUFBaEIsRUFBMEI7QUFDeEIsUUFBSUEsUUFBSixFQUFjO0FBQ1osVUFBSUMsY0FBYyxHQUFHRCxRQUFRLENBQUMzRixjQUFELENBQTdCOztBQUNBLFVBQUk0RixjQUFKLEVBQW9CO0FBQ2xCLGVBQU9BLGNBQWMsQ0FBQ3JFLElBQWYsQ0FBb0JvRSxRQUFwQixDQUFQO0FBQ0Q7O0FBRUQsVUFBSSxPQUFPQSxRQUFRLENBQUNoQyxJQUFoQixLQUF5QixVQUE3QixFQUF5QztBQUN2QyxlQUFPZ0MsUUFBUDtBQUNEOztBQUVELFVBQUksQ0FBQ0UsS0FBSyxDQUFDRixRQUFRLENBQUNGLE1BQVYsQ0FBVixFQUE2QjtBQUMzQixZQUFJSyxDQUFDLEdBQUcsQ0FBQyxDQUFUO0FBQUEsWUFBWW5DLElBQUksR0FBRyxTQUFTQSxJQUFULEdBQWdCO0FBQ2pDLGlCQUFPLEVBQUVtQyxDQUFGLEdBQU1ILFFBQVEsQ0FBQ0YsTUFBdEIsRUFBOEI7QUFDNUIsZ0JBQUk3RixNQUFNLENBQUMyQixJQUFQLENBQVlvRSxRQUFaLEVBQXNCRyxDQUF0QixDQUFKLEVBQThCO0FBQzVCbkMsa0JBQUksQ0FBQ2xGLEtBQUwsR0FBYWtILFFBQVEsQ0FBQ0csQ0FBRCxDQUFyQjtBQUNBbkMsa0JBQUksQ0FBQ2pGLElBQUwsR0FBWSxLQUFaO0FBQ0EscUJBQU9pRixJQUFQO0FBQ0Q7QUFDRjs7QUFFREEsY0FBSSxDQUFDbEYsS0FBTCxHQUFhUyxTQUFiO0FBQ0F5RSxjQUFJLENBQUNqRixJQUFMLEdBQVksSUFBWjtBQUVBLGlCQUFPaUYsSUFBUDtBQUNELFNBYkQ7O0FBZUEsZUFBT0EsSUFBSSxDQUFDQSxJQUFMLEdBQVlBLElBQW5CO0FBQ0Q7QUFDRixLQTdCdUIsQ0ErQnhCOzs7QUFDQSxXQUFPO0FBQUVBLFVBQUksRUFBRUc7QUFBUixLQUFQO0FBQ0Q7O0FBQ0QxRSxTQUFPLENBQUMrQyxNQUFSLEdBQWlCQSxNQUFqQjs7QUFFQSxXQUFTMkIsVUFBVCxHQUFzQjtBQUNwQixXQUFPO0FBQUVyRixXQUFLLEVBQUVTLFNBQVQ7QUFBb0JSLFVBQUksRUFBRTtBQUExQixLQUFQO0FBQ0Q7O0FBRUR5QyxTQUFPLENBQUN4QixTQUFSLEdBQW9CO0FBQ2xCMEMsZUFBVyxFQUFFbEIsT0FESztBQUdsQmtFLFNBQUssRUFBRSxVQUFTVSxhQUFULEVBQXdCO0FBQzdCLFdBQUtDLElBQUwsR0FBWSxDQUFaO0FBQ0EsV0FBS3JDLElBQUwsR0FBWSxDQUFaLENBRjZCLENBRzdCO0FBQ0E7O0FBQ0EsV0FBS08sSUFBTCxHQUFZLEtBQUtDLEtBQUwsR0FBYWpGLFNBQXpCO0FBQ0EsV0FBS1IsSUFBTCxHQUFZLEtBQVo7QUFDQSxXQUFLcUYsUUFBTCxHQUFnQixJQUFoQjtBQUVBLFdBQUt2QixNQUFMLEdBQWMsTUFBZDtBQUNBLFdBQUtqRSxHQUFMLEdBQVdXLFNBQVg7QUFFQSxXQUFLK0YsVUFBTCxDQUFnQnJLLE9BQWhCLENBQXdCdUssYUFBeEI7O0FBRUEsVUFBSSxDQUFDWSxhQUFMLEVBQW9CO0FBQ2xCLGFBQUssSUFBSTlLLElBQVQsSUFBaUIsSUFBakIsRUFBdUI7QUFDckI7QUFDQSxjQUFJQSxJQUFJLENBQUNnTCxNQUFMLENBQVksQ0FBWixNQUFtQixHQUFuQixJQUNBckcsTUFBTSxDQUFDMkIsSUFBUCxDQUFZLElBQVosRUFBa0J0RyxJQUFsQixDQURBLElBRUEsQ0FBQzRLLEtBQUssQ0FBQyxDQUFDNUssSUFBSSxDQUFDaUwsS0FBTCxDQUFXLENBQVgsQ0FBRixDQUZWLEVBRTRCO0FBQzFCLGlCQUFLakwsSUFBTCxJQUFhaUUsU0FBYjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEtBM0JpQjtBQTZCbEJpSCxRQUFJLEVBQUUsWUFBVztBQUNmLFdBQUt6SCxJQUFMLEdBQVksSUFBWjtBQUVBLFVBQUkwSCxTQUFTLEdBQUcsS0FBS25CLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBaEI7QUFDQSxVQUFJb0IsVUFBVSxHQUFHRCxTQUFTLENBQUNoQixVQUEzQjs7QUFDQSxVQUFJaUIsVUFBVSxDQUFDckwsSUFBWCxLQUFvQixPQUF4QixFQUFpQztBQUMvQixjQUFNcUwsVUFBVSxDQUFDOUgsR0FBakI7QUFDRDs7QUFFRCxhQUFPLEtBQUsrSCxJQUFaO0FBQ0QsS0F2Q2lCO0FBeUNsQmxDLHFCQUFpQixFQUFFLFVBQVNtQyxTQUFULEVBQW9CO0FBQ3JDLFVBQUksS0FBSzdILElBQVQsRUFBZTtBQUNiLGNBQU02SCxTQUFOO0FBQ0Q7O0FBRUQsVUFBSWpOLE9BQU8sR0FBRyxJQUFkOztBQUNBLGVBQVNrTixNQUFULENBQWdCQyxHQUFoQixFQUFxQkMsTUFBckIsRUFBNkI7QUFDM0J0RCxjQUFNLENBQUNwSSxJQUFQLEdBQWMsT0FBZDtBQUNBb0ksY0FBTSxDQUFDN0UsR0FBUCxHQUFhZ0ksU0FBYjtBQUNBak4sZUFBTyxDQUFDcUssSUFBUixHQUFlOEMsR0FBZjs7QUFFQSxZQUFJQyxNQUFKLEVBQVk7QUFDVjtBQUNBO0FBQ0FwTixpQkFBTyxDQUFDa0osTUFBUixHQUFpQixNQUFqQjtBQUNBbEosaUJBQU8sQ0FBQ2lGLEdBQVIsR0FBY1csU0FBZDtBQUNEOztBQUVELGVBQU8sQ0FBQyxDQUFFd0gsTUFBVjtBQUNEOztBQUVELFdBQUssSUFBSVosQ0FBQyxHQUFHLEtBQUtiLFVBQUwsQ0FBZ0JRLE1BQWhCLEdBQXlCLENBQXRDLEVBQXlDSyxDQUFDLElBQUksQ0FBOUMsRUFBaUQsRUFBRUEsQ0FBbkQsRUFBc0Q7QUFDcEQsWUFBSWxCLEtBQUssR0FBRyxLQUFLSyxVQUFMLENBQWdCYSxDQUFoQixDQUFaO0FBQ0EsWUFBSTFDLE1BQU0sR0FBR3dCLEtBQUssQ0FBQ1EsVUFBbkI7O0FBRUEsWUFBSVIsS0FBSyxDQUFDQyxNQUFOLEtBQWlCLE1BQXJCLEVBQTZCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLGlCQUFPMkIsTUFBTSxDQUFDLEtBQUQsQ0FBYjtBQUNEOztBQUVELFlBQUk1QixLQUFLLENBQUNDLE1BQU4sSUFBZ0IsS0FBS21CLElBQXpCLEVBQStCO0FBQzdCLGNBQUlXLFFBQVEsR0FBRy9HLE1BQU0sQ0FBQzJCLElBQVAsQ0FBWXFELEtBQVosRUFBbUIsVUFBbkIsQ0FBZjtBQUNBLGNBQUlnQyxVQUFVLEdBQUdoSCxNQUFNLENBQUMyQixJQUFQLENBQVlxRCxLQUFaLEVBQW1CLFlBQW5CLENBQWpCOztBQUVBLGNBQUkrQixRQUFRLElBQUlDLFVBQWhCLEVBQTRCO0FBQzFCLGdCQUFJLEtBQUtaLElBQUwsR0FBWXBCLEtBQUssQ0FBQ0UsUUFBdEIsRUFBZ0M7QUFDOUIscUJBQU8wQixNQUFNLENBQUM1QixLQUFLLENBQUNFLFFBQVAsRUFBaUIsSUFBakIsQ0FBYjtBQUNELGFBRkQsTUFFTyxJQUFJLEtBQUtrQixJQUFMLEdBQVlwQixLQUFLLENBQUNHLFVBQXRCLEVBQWtDO0FBQ3ZDLHFCQUFPeUIsTUFBTSxDQUFDNUIsS0FBSyxDQUFDRyxVQUFQLENBQWI7QUFDRDtBQUVGLFdBUEQsTUFPTyxJQUFJNEIsUUFBSixFQUFjO0FBQ25CLGdCQUFJLEtBQUtYLElBQUwsR0FBWXBCLEtBQUssQ0FBQ0UsUUFBdEIsRUFBZ0M7QUFDOUIscUJBQU8wQixNQUFNLENBQUM1QixLQUFLLENBQUNFLFFBQVAsRUFBaUIsSUFBakIsQ0FBYjtBQUNEO0FBRUYsV0FMTSxNQUtBLElBQUk4QixVQUFKLEVBQWdCO0FBQ3JCLGdCQUFJLEtBQUtaLElBQUwsR0FBWXBCLEtBQUssQ0FBQ0csVUFBdEIsRUFBa0M7QUFDaEMscUJBQU95QixNQUFNLENBQUM1QixLQUFLLENBQUNHLFVBQVAsQ0FBYjtBQUNEO0FBRUYsV0FMTSxNQUtBO0FBQ0wsa0JBQU0sSUFBSWxCLEtBQUosQ0FBVSx3Q0FBVixDQUFOO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsS0FuR2lCO0FBcUdsQlEsVUFBTSxFQUFFLFVBQVNySixJQUFULEVBQWV1RCxHQUFmLEVBQW9CO0FBQzFCLFdBQUssSUFBSXVILENBQUMsR0FBRyxLQUFLYixVQUFMLENBQWdCUSxNQUFoQixHQUF5QixDQUF0QyxFQUF5Q0ssQ0FBQyxJQUFJLENBQTlDLEVBQWlELEVBQUVBLENBQW5ELEVBQXNEO0FBQ3BELFlBQUlsQixLQUFLLEdBQUcsS0FBS0ssVUFBTCxDQUFnQmEsQ0FBaEIsQ0FBWjs7QUFDQSxZQUFJbEIsS0FBSyxDQUFDQyxNQUFOLElBQWdCLEtBQUttQixJQUFyQixJQUNBcEcsTUFBTSxDQUFDMkIsSUFBUCxDQUFZcUQsS0FBWixFQUFtQixZQUFuQixDQURBLElBRUEsS0FBS29CLElBQUwsR0FBWXBCLEtBQUssQ0FBQ0csVUFGdEIsRUFFa0M7QUFDaEMsY0FBSThCLFlBQVksR0FBR2pDLEtBQW5CO0FBQ0E7QUFDRDtBQUNGOztBQUVELFVBQUlpQyxZQUFZLEtBQ1g3TCxJQUFJLEtBQUssT0FBVCxJQUNBQSxJQUFJLEtBQUssVUFGRSxDQUFaLElBR0E2TCxZQUFZLENBQUNoQyxNQUFiLElBQXVCdEcsR0FIdkIsSUFJQUEsR0FBRyxJQUFJc0ksWUFBWSxDQUFDOUIsVUFKeEIsRUFJb0M7QUFDbEM7QUFDQTtBQUNBOEIsb0JBQVksR0FBRyxJQUFmO0FBQ0Q7O0FBRUQsVUFBSXpELE1BQU0sR0FBR3lELFlBQVksR0FBR0EsWUFBWSxDQUFDekIsVUFBaEIsR0FBNkIsRUFBdEQ7QUFDQWhDLFlBQU0sQ0FBQ3BJLElBQVAsR0FBY0EsSUFBZDtBQUNBb0ksWUFBTSxDQUFDN0UsR0FBUCxHQUFhQSxHQUFiOztBQUVBLFVBQUlzSSxZQUFKLEVBQWtCO0FBQ2hCLGFBQUtyRSxNQUFMLEdBQWMsTUFBZDtBQUNBLGFBQUttQixJQUFMLEdBQVlrRCxZQUFZLENBQUM5QixVQUF6QjtBQUNBLGVBQU9uRCxnQkFBUDtBQUNEOztBQUVELGFBQU8sS0FBS2tGLFFBQUwsQ0FBYzFELE1BQWQsQ0FBUDtBQUNELEtBcklpQjtBQXVJbEIwRCxZQUFRLEVBQUUsVUFBUzFELE1BQVQsRUFBaUI0QixRQUFqQixFQUEyQjtBQUNuQyxVQUFJNUIsTUFBTSxDQUFDcEksSUFBUCxLQUFnQixPQUFwQixFQUE2QjtBQUMzQixjQUFNb0ksTUFBTSxDQUFDN0UsR0FBYjtBQUNEOztBQUVELFVBQUk2RSxNQUFNLENBQUNwSSxJQUFQLEtBQWdCLE9BQWhCLElBQ0FvSSxNQUFNLENBQUNwSSxJQUFQLEtBQWdCLFVBRHBCLEVBQ2dDO0FBQzlCLGFBQUsySSxJQUFMLEdBQVlQLE1BQU0sQ0FBQzdFLEdBQW5CO0FBQ0QsT0FIRCxNQUdPLElBQUk2RSxNQUFNLENBQUNwSSxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQ25DLGFBQUtzTCxJQUFMLEdBQVksS0FBSy9ILEdBQUwsR0FBVzZFLE1BQU0sQ0FBQzdFLEdBQTlCO0FBQ0EsYUFBS2lFLE1BQUwsR0FBYyxRQUFkO0FBQ0EsYUFBS21CLElBQUwsR0FBWSxLQUFaO0FBQ0QsT0FKTSxNQUlBLElBQUlQLE1BQU0sQ0FBQ3BJLElBQVAsS0FBZ0IsUUFBaEIsSUFBNEJnSyxRQUFoQyxFQUEwQztBQUMvQyxhQUFLckIsSUFBTCxHQUFZcUIsUUFBWjtBQUNEOztBQUVELGFBQU9wRCxnQkFBUDtBQUNELEtBeEppQjtBQTBKbEJtRixVQUFNLEVBQUUsVUFBU2hDLFVBQVQsRUFBcUI7QUFDM0IsV0FBSyxJQUFJZSxDQUFDLEdBQUcsS0FBS2IsVUFBTCxDQUFnQlEsTUFBaEIsR0FBeUIsQ0FBdEMsRUFBeUNLLENBQUMsSUFBSSxDQUE5QyxFQUFpRCxFQUFFQSxDQUFuRCxFQUFzRDtBQUNwRCxZQUFJbEIsS0FBSyxHQUFHLEtBQUtLLFVBQUwsQ0FBZ0JhLENBQWhCLENBQVo7O0FBQ0EsWUFBSWxCLEtBQUssQ0FBQ0csVUFBTixLQUFxQkEsVUFBekIsRUFBcUM7QUFDbkMsZUFBSytCLFFBQUwsQ0FBY2xDLEtBQUssQ0FBQ1EsVUFBcEIsRUFBZ0NSLEtBQUssQ0FBQ0ksUUFBdEM7QUFDQUcsdUJBQWEsQ0FBQ1AsS0FBRCxDQUFiO0FBQ0EsaUJBQU9oRCxnQkFBUDtBQUNEO0FBQ0Y7QUFDRixLQW5LaUI7QUFxS2xCLGFBQVMsVUFBU2lELE1BQVQsRUFBaUI7QUFDeEIsV0FBSyxJQUFJaUIsQ0FBQyxHQUFHLEtBQUtiLFVBQUwsQ0FBZ0JRLE1BQWhCLEdBQXlCLENBQXRDLEVBQXlDSyxDQUFDLElBQUksQ0FBOUMsRUFBaUQsRUFBRUEsQ0FBbkQsRUFBc0Q7QUFDcEQsWUFBSWxCLEtBQUssR0FBRyxLQUFLSyxVQUFMLENBQWdCYSxDQUFoQixDQUFaOztBQUNBLFlBQUlsQixLQUFLLENBQUNDLE1BQU4sS0FBaUJBLE1BQXJCLEVBQTZCO0FBQzNCLGNBQUl6QixNQUFNLEdBQUd3QixLQUFLLENBQUNRLFVBQW5COztBQUNBLGNBQUloQyxNQUFNLENBQUNwSSxJQUFQLEtBQWdCLE9BQXBCLEVBQTZCO0FBQzNCLGdCQUFJZ00sTUFBTSxHQUFHNUQsTUFBTSxDQUFDN0UsR0FBcEI7QUFDQTRHLHlCQUFhLENBQUNQLEtBQUQsQ0FBYjtBQUNEOztBQUNELGlCQUFPb0MsTUFBUDtBQUNEO0FBQ0YsT0FYdUIsQ0FheEI7QUFDQTs7O0FBQ0EsWUFBTSxJQUFJbkQsS0FBSixDQUFVLHVCQUFWLENBQU47QUFDRCxLQXJMaUI7QUF1TGxCb0QsaUJBQWEsRUFBRSxVQUFTdEIsUUFBVCxFQUFtQnBCLFVBQW5CLEVBQStCQyxPQUEvQixFQUF3QztBQUNyRCxXQUFLVCxRQUFMLEdBQWdCO0FBQ2Q5RCxnQkFBUSxFQUFFa0MsTUFBTSxDQUFDd0QsUUFBRCxDQURGO0FBRWRwQixrQkFBVSxFQUFFQSxVQUZFO0FBR2RDLGVBQU8sRUFBRUE7QUFISyxPQUFoQjs7QUFNQSxVQUFJLEtBQUtoQyxNQUFMLEtBQWdCLE1BQXBCLEVBQTRCO0FBQzFCO0FBQ0E7QUFDQSxhQUFLakUsR0FBTCxHQUFXVyxTQUFYO0FBQ0Q7O0FBRUQsYUFBTzBDLGdCQUFQO0FBQ0Q7QUFyTWlCLEdBQXBCLENBamdCZ0MsQ0F5c0JoQztBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFPeEMsT0FBUDtBQUVELENBL3NCYyxFQWd0QmI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUE2QkQsTUFBTSxDQUFDQyxPQUFwQyxHQUE4QyxTQXB0QmpDLENBQWY7O0FBdXRCQSxJQUFJO0FBQ0Y4SCxvQkFBa0IsR0FBRzFILE9BQXJCO0FBQ0QsQ0FGRCxDQUVFLE9BQU8ySCxvQkFBUCxFQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsVUFBUSxDQUFDLEdBQUQsRUFBTSx3QkFBTixDQUFSLENBQXdDNUgsT0FBeEM7QUFDRCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL3NjcmlwdC5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG5cclxuKGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0Lyog0KDQsNC30LzQtdGA0YsgY2FudmFzINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOICovXHJcblx0bGV0IHNpemVDYW52YXMgPSB7XHJcblx0XHRDQU5WQVNfV0lEVEg6IDQwMCxcclxuXHRcdENBTlZBU19IRUlHSFQ6IDQwMFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuXHRjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7IC8vINGA0LDQsdC+0YLQsNC10Lwg0LIg0YDQtdC20LjQvNC1IDJkXHJcblx0bGV0IG9yaWdpbmFsSW1hZ2UgPSBhd2FpdCBsb2FkSW1hZ2UoJy4vaW1hZ2Uvc3BhY2UuanBlZycpOyAvLyDQv9C+0LvRg9GHLiDQuNC30L7QsdGA0LDQttC10L3QuNC1LCDQtNC+0LbQtNC40YHRjCDQstGL0L/QvtC70L3QtdC90LjRjyDQv9GA0L7QvNC40YHQsFxyXG5cclxuXHJcblxyXG5cdGNvbnN0IGV2ZW50cyA9IGdldEV2ZW50cyhjYW52YXMpOyAvLyDQtNCw0L3QvdGL0LUg0L/QviDQutC+0L7RgNC00LjQvdCw0YLQsNC8XHJcblxyXG5cdGxldCBpbWFnZSA9IG9yaWdpbmFsSW1hZ2U7IC8vINC/0LXRgNC10LzQtdC90L3QsNGPINC00LvRjyBvcmlnaW5hbEltYWdlXHJcblxyXG5cdGNvbnN0IGltYWdlUGFyYW1zID0geyAvLyDQv9Cw0YDQsNC80LXRgtGA0Ysg0L7RgtGB0YLRg9C/0L7QslxyXG5cdFx0b2Zmc2V0WDogMCxcclxuXHRcdG9mZnNldFk6IDAsXHJcblx0XHRzY2FsZTogMSAvLyDQvNCw0YHRiNGC0LDQsVxyXG5cdH07XHJcblxyXG5cclxuXHRjYW52YXMud2lkdGggPSBzaXplQ2FudmFzLkNBTlZBU19XSURUSDsgLy8g0YDQsNC30LzQtdGAXHJcblx0Y2FudmFzLmhlaWdodCA9IHNpemVDYW52YXMuQ0FOVkFTX0hFSUdIVDtcclxuXHJcblx0Lyog0J7QsdC90L7QstC70Y/QtdC8IGNhbnZhcyAqL1xyXG5cdHVwZGF0ZSgpO1xyXG5cclxuXHRmdW5jdGlvbiB1cGRhdGUoKSB7XHJcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxuXHJcblx0XHQvKiDQmNC30LzQtdC90LXQvdC40LUg0L7RgtGB0YLRg9C/0L7QsiDQtNC70Y8g0LjQt9C80LUt0Y8g0L7RgtC+0LHRgNCw0LbQtS3RjyDQutCw0YDRgtC40L3QutC4ICovXHJcblx0XHRpZiAoZXZlbnRzLmxlZnRNb3VzZSkgeyAvLyDQtdGB0LvQuCDQvdCw0LbQsNGC0LAg0LvQtdCy0LDRjyDQutC90L7Qv9C60LBcclxuXHRcdFx0aW1hZ2VQYXJhbXMub2Zmc2V0WCArPSBldmVudHMuZHg7XHJcblx0XHRcdGltYWdlUGFyYW1zLm9mZnNldFkgKz0gZXZlbnRzLmR5O1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qIG15ICovXHJcblxyXG5cdFx0aWYgKGV2ZW50cy50Y2gpIHsgLy8gdG91Y2gg0YHQvtCx0YvRgtC40LUg0LTQstC40LbQtdC90LjQtVxyXG5cdFx0XHRpbWFnZVBhcmFtcy5vZmZzZXRYICs9IGV2ZW50cy5keDtcclxuXHRcdFx0aW1hZ2VQYXJhbXMub2Zmc2V0WSArPSBldmVudHMuZHk7XHJcblx0XHR9XHJcblxyXG5cdFx0Lyog0LzQsNGB0YjRgtCw0LEgKi9cclxuXHRcdGlmIChldmVudHMubW9yZSkgeyAvLyDRg9Cy0LXQu9C40YfQuNGC0YxcclxuXHRcdFx0ZXZlbnRzLndoZWVsID0gcGFyc2VJbnQoLTEwMCk7XHJcblx0XHR9XHJcblx0XHRpZiAoZXZlbnRzLmxlc3MpIHsgLy8g0YPQvNC10L3RjNGI0LjRgtGMXHJcblx0XHRcdGV2ZW50cy53aGVlbCA9IHBhcnNlSW50KDEwMCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Lyog0LTQstC40LbQtdC90LjQtSAqL1xyXG5cdFx0aWYgKGV2ZW50cy51cCkge1xyXG5cdFx0XHRpbWFnZVBhcmFtcy5vZmZzZXRZIC09IHBhcnNlSW50KDMpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGV2ZW50cy5kb3duKSB7XHJcblx0XHRcdGltYWdlUGFyYW1zLm9mZnNldFkgKz0gcGFyc2VJbnQoMyk7XHJcblx0XHR9XHJcblx0XHRpZiAoZXZlbnRzLmxlZnQpIHtcclxuXHRcdFx0aW1hZ2VQYXJhbXMub2Zmc2V0WCAtPSBwYXJzZUludCgzKTtcclxuXHRcdH1cclxuXHRcdGlmIChldmVudHMucmlnaHQpIHtcclxuXHRcdFx0aW1hZ2VQYXJhbXMub2Zmc2V0WCArPSBwYXJzZUludCgzKTtcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0LyogZW5kIG15ICAqL1xyXG5cclxuXHRcdC8qINCc0LXQvdGP0LXQvCDQvNCw0YHRiNGC0LDQsSDQv9GA0Lgg0L/RgNC+0LrRgNGD0YcuINC60L7Qu9GR0YHQuNC60LAg0LzRi9GI0LgqL1xyXG5cdFx0aWYgKGV2ZW50cy53aGVlbCkge1xyXG5cdFx0XHRpbWFnZVBhcmFtcy5zY2FsZSAtPSBldmVudHMud2hlZWwgLyAxMDAwMDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Y2xlYXJDYW52YXMoKTtcclxuXHRcdGNvbnRleHQuZHJhd0ltYWdlKCAvLyDQvtGC0YDQuNGB0L7QstC60LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRj1xyXG5cdFx0XHRpbWFnZSxcclxuXHRcdFx0MCwgMCxcclxuXHRcdFx0aW1hZ2Uud2lkdGgsXHJcblx0XHRcdGltYWdlLmhlaWdodCxcclxuXHRcdFx0aW1hZ2VQYXJhbXMub2Zmc2V0WCxcclxuXHRcdFx0aW1hZ2VQYXJhbXMub2Zmc2V0WSxcclxuXHRcdFx0aW1hZ2Uud2lkdGggKiBpbWFnZVBhcmFtcy5zY2FsZSwgLy8gPiA8INC80LDRgdGI0YLQsNCxXHJcblx0XHRcdGltYWdlLmhlaWdodCAqIGltYWdlUGFyYW1zLnNjYWxlXHJcblx0XHQpO1xyXG5cdFx0ZXZlbnRzLnVwZGF0ZSgpOyAvLyDQvtCx0L3Rg9C70Y/QtdC8INC/0LDRgNCw0LzQtdGC0YDRiyBkeCBhbmQgZHlcclxuXHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY2xlYXJDYW52YXMoKSB7IC8vINC+0YfQuNGB0YLQutCwIGNhbnZhc1xyXG5cdFx0Y29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHR9XHJcblxyXG5cdC8qINCe0LHQvdC+0LLQu9C10L3QuNC1IGNhbnZhcyDQv9GA0Lgg0LfQsNCz0YDRg9C30LrQtSDQvdC+0LLQvtC5INC60LDRgNGC0LjQvdC60LggKi9cclxuXHJcblx0ZnVuY3Rpb24gdXBkYXRlSW1nQ2FudmFzKCkge1xyXG5cdFx0aW1hZ2UgPSBvcmlnaW5hbEltYWdlO1xyXG5cdFx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7IC8vINGB0L7Qt9C0LiDQstC40YDRgi4gY2FudmFzXHJcblx0XHRjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblx0XHRjYW52YXMud2lkdGggPSBvcmlnaW5hbEltYWdlLndpZHRoOyAvLyDQt9Cw0LTQsNGR0Lwg0YDQsNC30LzQtdGA0YtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSBvcmlnaW5hbEltYWdlLmhlaWdodDtcclxuXHRcdGNvbnRleHQuZHJhd0ltYWdlKCAvLyDQt9Cw0LTQsNGR0Lwg0L7RgtGA0LjRgdC+0LLQutGDXHJcblx0XHRcdG9yaWdpbmFsSW1hZ2UsXHJcblx0XHRcdDAsIDAsXHJcblx0XHRcdG9yaWdpbmFsSW1hZ2Uud2lkdGgsIG9yaWdpbmFsSW1hZ2UuaGVpZ2h0LFxyXG5cdFx0XHQwLCAwLFxyXG5cdFx0XHRjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRcclxuXHRcdCk7XHJcblxyXG5cdFx0Y29uc3QgaW1hZ2VEYXRhID0gY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTsgLy8g0L3Rg9C20LXQvSDRgdC10YDQstC10YA7INC30LDQv9C40YHRi9CyLiDQtNCw0L3QvdGL0LUg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyAtINGI0LjRgC4sINCy0YvRgdC+0YLQsFxyXG5cclxuXHRcdC8vINCy0L7Qt9Cy0YAuINC00LDQvdC90YvQtSDQtNC70Y8g0LLRgdGC0YPQv9C70LXQvdC40Y8g0LIg0YHQuNC70YNcclxuXHRcdGNvbnRleHQucHV0SW1hZ2VEYXRhKFxyXG5cdFx0XHRpbWFnZURhdGEsXHJcblx0XHRcdDAsIC8vINC+0YLRgdGO0LTQsCDQvdCw0YfQuNC90LDQtdC8XHJcblx0XHRcdDAsXHJcblx0XHRcdDAsXHJcblx0XHRcdDAsXHJcblx0XHRcdGltYWdlRGF0YS53aWR0aCwgLy8g0YDQsNC30LzQtdGA0YsgY2FudmFzYVxyXG5cdFx0XHRpbWFnZURhdGEuaGVpZ2h0XHJcblx0XHQpO1xyXG5cclxuXHRcdGltYWdlID0gY2FudmFzOyAvLyDQvNC10L3Rj9C10LwgaW1hZ2Ug0L3QsCBjYW52YXNcclxuXHJcblx0fVxyXG5cclxuXHQvKiDQodC60LDRh9Cw0YLRjCDRhNC+0YLQviAqL1xyXG5cclxuXHQvKiBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTsgLy8g0YHQvtC30LTQsNGR0Lwg0YHRgdGL0LvQutGDXHJcblx0XHRcdGFFbGVtZW50LnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnbXlJbWFnZS5qcGVnJyk7IC8vINCx0YDQsNGD0LfQtdGA0YM6INC80Ysg0YXQvtGC0LjQvCDRgdC60LDRh9Cw0YLRjFxyXG5cdFx0XHRhRWxlbWVudC5ocmVmID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpOyAvLyDQt9Cw0LTQsNGR0Lwg0LDQtNGA0LXRgSDQutCw0YDRgtC40L3QutC4XHJcblx0XHRcdGFFbGVtZW50LmNsaWNrKCk7IC8vINC60LvQuNC60LDQtdC8INC/0L4g0LrQvdC+0L/QutC1XHJcblx0XHR9KTsgKi9cclxuXHJcblx0Lyog0JLRi9Cx0YDQsNGC0Ywg0YTQvtGC0L4g0Lgg0LfQsNC60LDRh9Cw0YLRjCAqL1xyXG5cdGNvbnN0IGxvYWRJbWFnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRJbWFnZScpOyAvLyDQv9C+0LvRg9GHLiDRgdC/0LjRgdC+0Log0LfQsNCz0YDRg9C2LiDRhNCw0LnQu9C+0LJcclxuXHRsb2FkSW1hZ2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBhc3luYyBldmVudCA9PiB7XHJcblx0XHRjb25zdCBmaWxlID0gbG9hZEltYWdlSW5wdXQuZmlsZXNbMF07IC8vINC/0L7Qu9GD0YcuIDEg0YTQsNC50LtcclxuXHRcdGNvbnN0IGJhc2U2NCA9IGF3YWl0IGdldEJhc2U2NChmaWxlKTtcclxuXHRcdGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpOyAvLyDQtNC70Y8g0L3QvtCy0L7Qs9C+INGA0LjRgdGD0L3QutCwXHJcblx0XHRpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdG9yaWdpbmFsSW1hZ2UgPSBpbWFnZTsgLy8g0LLQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+INGA0LjRgdGD0L3QutCwIC0g0L3QvtCy0YvQuVxyXG5cdFx0XHR1cGRhdGVJbWdDYW52YXMoKTtcclxuXHRcdH07XHJcblx0XHRpbWFnZS5zcmMgPSBiYXNlNjQ7IC8vINC/0YPRgtGMINC00LvRjyDQt9Cw0LPRgNGD0LfQutC4INC60LDRgNGC0LjQvdC60LhcclxuXHR9KTtcclxuXHJcblx0Lyog0J/RgNC+0LLQtdGA0LrQsCDQvdCwINC+0YjQuNCx0LrQuCAqL1xyXG5cdGZ1bmN0aW9uIGdldEJhc2U2NChmaWxlKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cdFx0XHRyZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTsgLy8g0YfRgtC10L3QuNC1INGE0LDQudC70LAg0LIg0YTQvtGA0LzQsNGC0LUgRGF0YVVSTFxyXG5cdFx0XHRyZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuXHRcdFx0cmVhZGVyLm9uZXJyb3IgPSBlcnJvciA9PiByZWplY3QoZXJyb3IpOyAvLyDQvtGI0LjQsdC60LAg0L/RgNC4INC30LDQs9GA0YPQt9C60LVcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Lyog0K3QutGB0L/QtdGA0LjQvNC10L3RgtGLICovXHJcblxyXG5cdC8qINCy0YvQt9C+0LIg0YDQtdC00LDQutGC0L7RgNCwINC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINC60LDRgNGC0LjQvdC60YMgKi9cclxuXHJcblxyXG5cdGNvbnN0IHBvcHVwUGhvdG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBQaG90bycpO1xyXG5cdGNvbnN0IGltZ0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpOyAvLyDQv9C+0LvRg9GHLiDQstGB0LUgaW1nXHJcblxyXG5cclxuXHRjb25zdCBzaXplSW1nID0geyAvLyDQtNC70Y8g0L/QsNGA0LDQvNC10YLRgNC+0LIg0YDQuNGB0YPQvdC60LBcclxuXHRcdGltZzogJycsXHJcblx0XHR3aWR0aEltZzogJycsXHJcblx0XHRoZWlnaHRJbWc6ICcnLFxyXG5cdFx0d2lkdGhJbWdPcmlnOiAnJyxcclxuXHRcdGhlaWdodEltZ09yaWc6ICcnXHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2l6ZU92ZXJsYXkgPSB7IC8vINGA0LDQt9C80LXRgNGLINGA0LDQvNC60LhcclxuXHRcdGJvcmRlckxlZnQ6ICcnLFxyXG5cdFx0Ym9yZGVyVG9wOiAnJ1xyXG5cdH07XHJcblxyXG5cdGZ1bmN0aW9uIGdldFNpemVDYW52YXMoKSB7IC8vINC/0L7Qu9GD0YcuINGI0LjRgNC40L3RgyDQuCDQstGL0YHQvtGC0YMgY2FudmFzIGNzc1xyXG5cdFx0Y2FudmFzLndpZHRoID0gcGFyc2VJbnQoKGdldENvbXB1dGVkU3R5bGUoY2FudmFzKS53aWR0aCksIDEwKTtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSBwYXJzZUludCgoZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmhlaWdodCksIDEwKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldFNpemVJbWcoKSB7IC8vINC/0L7Qu9GD0YcuINGA0LDQt9C80LXRgNGLINC60LDRgNGC0LjQvdC60Lgg0YHQviDRgdGC0YAuXHJcblx0XHRzaXplSW1nLndpZHRoSW1nID0gc2l6ZUltZy5pbWcuY2xpZW50V2lkdGg7XHJcblx0XHRzaXplSW1nLmhlaWdodEltZyA9IHNpemVJbWcuaW1nLmNsaWVudEhlaWdodDtcclxuXHRcdC8qINC30LDQv9C40YEuINC+0YDQuNCzLiDRgNCw0LfQvNC10YDRiyAqL1xyXG5cdFx0c2l6ZUltZy53aWR0aEltZ09yaWcgPSBzaXplSW1nLmltZy5jbGllbnRXaWR0aDtcclxuXHRcdHNpemVJbWcuaGVpZ2h0SW1nT3JpZyA9IHNpemVJbWcuaW1nLmNsaWVudEhlaWdodDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldEFkYXB0aXZlT3ZlcmxheSgpIHsgLy8g0J/QvtC00LPQvtC90Y/QtdC8INGA0LDQt9C80LXRgCBvdmVybGF5INC6INGC0LXQutGD0YnQtdC80YMgY2FudmFzXHJcblxyXG5cdFx0aWYgKHNpemVJbWcud2lkdGhJbWcgPiBzaXplSW1nLmhlaWdodEltZykge1xyXG5cdFx0XHRsZXQgcmF0aW8gPSBwYXJzZUZsb2F0KChzaXplSW1nLndpZHRoSW1nIC8gc2l6ZUltZy5oZWlnaHRJbWcpLnRvRml4ZWQoMSkpOyAvLyDRgdC+0L7RgtC90L7RiNC10L3QuNC1INGB0YLQvtGA0L7QvSwg0L7QutGA0YPQs9C70LXQvdC40LUg0LTQviDQtNC10YHRj9GC0YvRhVxyXG5cdFx0XHRzaXplSW1nLndpZHRoSW1nID0gKGNhbnZhcy53aWR0aCAtIDIwKTsgLy8g0YjQuNGA0LjQvdCwINCyINGB0L7QvtGCLiDRgSBjYW52YXNcclxuXHRcdFx0c2l6ZUltZy5oZWlnaHRJbWcgPSBNYXRoLmZsb29yKHNpemVJbWcud2lkdGhJbWcgLyByYXRpbyk7IC8vINCy0YvRgdC+0YLQsCDQsiDRgdC+0L7Rgi4g0YEg0YjQuNGA0LjQvdC+0LlcclxuXHRcdH0gZWxzZSBpZiAoc2l6ZUltZy53aWR0aEltZyA8IHNpemVJbWcuaGVpZ2h0SW1nKSB7XHJcblx0XHRcdGxldCByYXRpbyA9IHBhcnNlRmxvYXQoKHNpemVJbWcuaGVpZ2h0SW1nIC8gc2l6ZUltZy53aWR0aEltZykudG9GaXhlZCgxKSk7IC8vINGB0L7QvtGC0L3QvtGI0LXQvdC40LUg0YHRgtC+0YDQvtC9LCDQvtC60YDRg9Cz0LvQtdC90LjQtSDQtNC+INC00LXRgdGP0YLRi9GFXHJcblx0XHRcdHNpemVJbWcuaGVpZ2h0SW1nID0gKGNhbnZhcy5oZWlnaHQgLSAyMCk7IC8vINGI0LjRgNC40L3QsCDQsiDRgdC+0L7Rgi4g0YEgY2FudmFzXHJcblx0XHRcdHNpemVJbWcud2lkdGhJbWcgPSBNYXRoLmZsb29yKHNpemVJbWcuaGVpZ2h0SW1nIC8gcmF0aW8pOyAvLyDQstGL0YHQvtGC0LAg0LIg0YHQvtC+0YIuINGBINGI0LjRgNC40L3QvtC5XHJcblx0XHR9IGVsc2UgaWYgKHNpemVJbWcud2lkdGhJbWcgPT09IHNpemVJbWcuaGVpZ2h0SW1nKSB7XHJcblx0XHRcdHNpemVJbWcud2lkdGhJbWcgPSAoY2FudmFzLndpZHRoIC0gMjApO1xyXG5cdFx0XHRzaXplSW1nLmhlaWdodEltZyA9IChjYW52YXMuaGVpZ2h0IC0gMjApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0UG9zaXRpb25PdmVybGF5KCkgeyAvLyDQstGL0YHRh9C40YLRi9Cy0LDQtdC8IGxlZnQgYW5kIHRvcCDRgNCw0LzQutC4XHJcblx0XHRzaXplT3ZlcmxheS5ib3JkZXJMZWZ0ID0gTWF0aC5mbG9vcigoKHBhcnNlSW50KChnZXRDb21wdXRlZFN0eWxlKGNhbnZhcykud2lkdGgpLCAxMCkpIC0gc2l6ZUltZy53aWR0aEltZykgLyAyKTtcclxuXHRcdHNpemVPdmVybGF5LmJvcmRlclRvcCA9IE1hdGguZmxvb3IoKChwYXJzZUludCgoZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmhlaWdodCksIDEwKSkgLSBzaXplSW1nLmhlaWdodEltZykgLyAyKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHB1dFNpemVPdmVybGF5KCkgeyAvLyDQstC90L7RgdC40Lwg0LjQt9C80LXQvdC10L3QuNGPINCyIG92ZXJsYXlcclxuXHRcdGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpOyAvLyDRgNCw0LzQutCwXHJcblx0XHRvdmVybGF5LnN0eWxlLmNzc1RleHQgPSBgXHJcblx0XHR3aWR0aDogJHtzaXplSW1nLndpZHRoSW1nfXB4O1xyXG5cdFx0aGVpZ2h0OiAke3NpemVJbWcuaGVpZ2h0SW1nfXB4O1xyXG5cdFx0bGVmdDogJHtzaXplT3ZlcmxheS5ib3JkZXJMZWZ0fXB4O1xyXG5cdFx0dG9wOiAke3NpemVPdmVybGF5LmJvcmRlclRvcH1weDtcclxuXHRcdGA7XHJcblx0fVxyXG5cclxuXHJcblx0Lyog0JrQu9C40Log0L3QsCDRgNC40YHRg9C90L7QuiAtINCy0YvQt9GL0LLQsNC10Lwg0YDQtdC00LDQutGC0L7RgCAqL1xyXG5cdGltZ0FsbC5mb3JFYWNoKChlbGVtKSA9PiB7XHJcblx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRzaXplSW1nLmltZyA9IGVsZW07IC8vINCf0LXRgNC10LTQsNGR0Lwg0YHQsNC80YMg0LrQsNGA0YLQuNC90LrRgyDQsiDQvtCx0YrQtdC60YIsINGH0YLQvtCx0Ysg0Log0L3QtdC5INC+0LHRgNCw0YLQuNGC0YzRgdGPXHJcblx0XHRcdHBvcHVwUGhvdG8uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuXHRcdFx0Z2V0U2l6ZUltZygpO1xyXG5cdFx0XHRnZXRTaXplQ2FudmFzKCk7XHJcblx0XHRcdGdldEFkYXB0aXZlT3ZlcmxheSgpO1xyXG5cdFx0XHRnZXRQb3NpdGlvbk92ZXJsYXkoKTtcclxuXHRcdFx0cHV0U2l6ZU92ZXJsYXkoKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHQvKiDQn9GA0L7RgdC70YPRiNC40LLQsNGC0LXQu9GMINC40LfQvNC10L3QtdC90LjRjyDQvtC60L3QsCDQsdGA0LDRg9C30LXRgNCwLCDRgSDQvtC/0YLQuNC80LjQt9Cw0YbQuNC10LkgKi9cclxuXHJcblx0bGV0IHRocm90dGxlID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIG9iaikge1xyXG5cdFx0b2JqID0gb2JqIHx8IHdpbmRvdztcclxuXHRcdGxldCBydW5uaW5nID0gZmFsc2U7XHJcblx0XHRsZXQgZnVuYyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHJ1bm5pbmcpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0cnVubmluZyA9IHRydWU7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0b2JqLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KG5hbWUpKTtcclxuXHRcdFx0XHRydW5uaW5nID0gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHRcdG9iai5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmMpO1xyXG5cdH07XHJcblx0dGhyb3R0bGUoXCJyZXNpemVcIiwgXCJvcHRpbWl6ZWRSZXNpemVcIik7XHJcblxyXG5cdC8qINCY0LfQvNC10L3QtdC90LjQtSBjYW52YXMg0Lggb3ZlcmxheSDQv9GA0Lgg0LjQt9C8LiDQvtC60L3QsCDQsdGA0LDRg9C30LXRgNCwICovXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcHRpbWl6ZWRSZXNpemVcIiwgKCkgPT4ge1xyXG5cclxuXHRcdGZ1bmN0aW9uIHVwZGF0ZUNhbnZhc092ZXJsYXkoKSB7IC8vINC+0LHQvdC+0LLQu9GP0LXQvCDRiNC40YAuINC4INCy0YvRgS5cclxuXHRcdFx0bGV0IHdpZHRoQm9keSA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7IC8vINGI0LjRgNC40L3QsCDQvtC60L3QsCDQsdGA0LDRg9C30LXRgNCwXHJcblx0XHRcdGZ1bmN0aW9uIGxhdW5jaE9mQWxsKCkge1xyXG5cdFx0XHRcdGdldFNpemVJbWcoKTtcclxuXHRcdFx0XHRnZXRTaXplQ2FudmFzKCk7XHJcblx0XHRcdFx0Z2V0QWRhcHRpdmVPdmVybGF5KCk7XHJcblx0XHRcdFx0Z2V0UG9zaXRpb25PdmVybGF5KCk7XHJcblx0XHRcdFx0cHV0U2l6ZU92ZXJsYXkoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHdpZHRoQm9keSA+IDk5MSkge1xyXG5cdFx0XHRcdGxhdW5jaE9mQWxsKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHdpZHRoQm9keSA8PSA5OTEpIHtcclxuXHRcdFx0XHRsYXVuY2hPZkFsbCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh3aWR0aEJvZHkgPD0gNzY3KSB7XHJcblx0XHRcdFx0bGF1bmNoT2ZBbGwoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAod2lkdGhCb2R5IDw9IDU3NSkge1xyXG5cdFx0XHRcdGxhdW5jaE9mQWxsKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHVwZGF0ZUNhbnZhc092ZXJsYXkoKTtcclxuXHR9KTtcclxuXHJcblxyXG5cdC8qINCe0LHRgNC10LfQutCwINC/0L4g0YDQsNC80LrQtSAqL1xyXG5cclxuXHRjb25zdCB0cmltID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyaW0nKTtcclxuXHRsZXQgY2FudmFzSGlkZGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhc0hpZGRlbicpO1xyXG5cdGxldCBjYW52YXNIaWRkZW5Db250ZXh0ID0gY2FudmFzSGlkZGVuLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG5cclxuXHR0cmltLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0Y2FudmFzSGlkZGVuQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTsgLy8g0L7Rh9C40YHRgtC60LAgY2FudmFzSGlkZGVuXHJcblx0XHRjYW52YXNIaWRkZW4ud2lkdGggPSBzaXplSW1nLndpZHRoSW1nT3JpZzsgLy8g0LfQsNC00LDRkdC8INGA0LDQt9C80LXRgNGLIGNhbnZhc1xyXG5cdFx0Y2FudmFzSGlkZGVuLmhlaWdodCA9IHNpemVJbWcuaGVpZ2h0SW1nT3JpZztcclxuXHRcdC8qINCh0L7RhdGA0LDQvdGP0LXQvCDQvtCx0YDQtdC3LiDQutCw0YDRgtC40L3QutGDINCyINGB0L7QvtGCLiDRgSDQvtGA0LjQsy4g0YDQsNC30LzQtdGA0L7QvCAqL1xyXG5cdFx0Y2FudmFzSGlkZGVuQ29udGV4dC5kcmF3SW1hZ2UoY2FudmFzLCBzaXplT3ZlcmxheS5ib3JkZXJMZWZ0LCBzaXplT3ZlcmxheS5ib3JkZXJUb3AsIHNpemVJbWcud2lkdGhJbWcsIHNpemVJbWcuaGVpZ2h0SW1nLCAwLCAwLCBzaXplSW1nLndpZHRoSW1nT3JpZywgc2l6ZUltZy5oZWlnaHRJbWdPcmlnKTtcclxuXHJcblx0XHQvKiDQlNC+0LHQsNCy0LvQtdC90LjQtSDRgNC40YEuINC90LAg0YHRgtGALCBhamF4OiDRgdC+0YXRgNCw0L3QtdC90LjQtSDQsiDQv9Cw0L/QutC1IGltZyAgKi9cclxuXHJcblx0XHQvKiBhamF4ICovXHJcblx0XHRsZXQgZGF0YVVSTCA9IGNhbnZhc0hpZGRlbi50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKTtcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHVybDogJy4vc2VydmVyLnBocCcsXHJcblx0XHRcdHR5cGU6ICdQT1NUJyxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGRhdGFVUkw6IGRhdGFVUkxcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG5cdFx0XHQvLyBjb250ZW50VHlwZTogZmFsc2UsXHJcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAhJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Lyog0YTRg9C90LrRhtC40Y8gXCLQvtGC0LzQtdC90LBcIiwg0YPQsdC40YDQsNC10Lwg0YDQtdC00LDQutGC0L7RgCAqL1xyXG5cclxuXHRjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpOyAvLyDQv9C+0LvRg9GHLiDRjdC70LXQvNC10L3Rgiwg0LPQtNC1INGA0LDRgdC/0L7Qu9C+0LbQtdC9INGA0LXQtNCw0LrRgtC+0YBcclxuXHJcblx0Y29uc3QgcG9wdXBOb25lID0gKCkgPT4geyAvLyDRg9Cx0LjRgNCw0LXQvCDQvtC60L3QviDRgNC10LTQsNC60YLQvtGA0LBcclxuXHRcdHBvcHVwUGhvdG8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRPbGRJbWcgPSAoKSA9PiB7IC8vINCy0YHRgtCw0LLQutCwINGB0YLQsNGA0L7QuSDQutCw0YDRgtC40L3QutC4XHJcblxyXG5cdFx0aW1hZ2VQYXJhbXMudXBkYXRlID0gKCkgPT4geyAvLyDQvtCx0L3Rg9C70Y/QtdC8INC/0LDRgNCw0LzQtdGC0YDRiyDQvtGC0YHRgtGD0L/QsCDQuCDQvNCw0YHRiNGC0LDQsdCwINC60LDRgNGC0LjQvdC60LhcclxuXHRcdFx0aW1hZ2VQYXJhbXMuc2NhbGUgPSAxO1xyXG5cdFx0XHRpbWFnZVBhcmFtcy5vZmZzZXRYID0gMDtcclxuXHRcdFx0aW1hZ2VQYXJhbXMub2Zmc2V0WSA9IDA7XHJcblx0XHR9O1xyXG5cclxuXHRcdGltYWdlUGFyYW1zLnVwZGF0ZSgpOyAvLyDRgdGC0LDRgNCw0Y8g0LrQsNGA0YLQuNC90LrQsCDQstGB0YLQsNGR0YIg0L/QviDRgdGC0LDRgNGL0Lwg0LrQvtC+0YDQtNC40L3QsNGC0LDQvFxyXG5cclxuXHRcdGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpOyAvLyDQtNC70Y8g0L3QvtCy0L7Qs9C+KNGB0YLQsNGA0L7Qs9C+KSDRgNC40YHRg9C90LrQsFxyXG5cdFx0aW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0XHRvcmlnaW5hbEltYWdlID0gaW1hZ2U7IC8vINCy0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviDRgNC40YHRg9C90LrQsCAtINC90L7QstGL0LlcclxuXHRcdFx0dXBkYXRlSW1nQ2FudmFzKCk7XHJcblx0XHR9O1xyXG5cdFx0aW1hZ2Uuc3JjID0gKCcuL2ltYWdlL3NwYWNlLmpwZWcnKTsgLy8g0L/Rg9GC0Ywg0LTQu9GPINC30LDQs9GA0YPQt9C60Lgg0LrQsNGA0YLQuNC90LrQuFxyXG5cdH07XHJcblxyXG5cdHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG5cdFx0aWYgKHRhcmdldC5tYXRjaGVzKCcjY2FuY2VsJykpIHsgLy8g0LXRgdC70Lgg0L3QsNC20LDQu9C4INC90LAg0LrQvdC+0L/QutGDIFwi0L7RgtC80LXQvdCwXCJcclxuXHRcdFx0cG9wdXBOb25lKCk7XHJcblx0XHRcdGdldE9sZEltZygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGFyZ2V0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5lZGl0b3JQaG90bycpO1xyXG5cdFx0XHRpZiAoIXRhcmdldCkgeyAvL9C10YHQu9C4INC90LUg0L/QvtC70YPRh9C40LvQuCBlZGl0b3JQaG90bywg0YIu0LUuINC/0L7Qu9GD0YfQuNC70LggbnVsbCDQv9GA0Lgg0LrQu9C40LrQtSDQt9CwINC/0YDQtdC00LXQu9Cw0LzQuCDQvtC60L3QsFxyXG5cdFx0XHRcdHBvcHVwTm9uZSgpOyAvL9C+0LrQvdC+INC40YHRh9C10LfQsNC10YIg0L/RgNC4INC60LvQuNC60LUg0LfQsCDQv9GA0LXQtNC10LvRiyDQvtC60L3QsFxyXG5cdFx0XHRcdGdldE9sZEltZygpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdC8qIGVuZCDRhNGD0L3QutGG0LjRjyBcItC+0YLQvNC10L3QsFwiICovXHJcblxyXG5cdC8qIGVuZCDRjdC60YHQv9C10YDQuNC80LXQvdGC0YsgKi9cclxuXHJcblx0Lyog0J/QvtC70YPRh9Cw0LXQvCBpbWcgKi9cclxuXHRmdW5jdGlvbiBsb2FkSW1hZ2Uoc3JjKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4geyAvLyDQstC+0LfQstGALiDQv9GA0L7QvNC40YHRgVxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7IC8vINGB0L7Qt9C0LiDQvtCx0YrQtdC60YIgaW1hZ2VcclxuXHRcdFx0XHRpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKGltYWdlKTsgLy8g0LrQvtCz0LTQsCDQt9Cw0LPRgNGD0LcuIGltZyDQstGL0LfQvtCyLiByZXNvbHZlXHJcblx0XHRcdFx0aW1hZ2Uuc3JjID0gc3JjO1xyXG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qINCf0L7Qu9GD0YcuINC60L7QvtGA0LTQuNC90LDRgtGLLCDRgNCw0LHQvtGC0LAg0YEg0LrQsNGA0YLQuNC90LrQvtC5ICovXHJcblxyXG5cdGxldCB0b3VjaE1vdmUgPSAoZWxlbWVudCwgZXZlbnQpID0+IHsgLy8gdG91Y2gg0YHQvtCx0YvRgtC40Y8sINC90LUg0LLRi9GF0L7QtNC40Lwg0LfQsCDQs9GA0LDQvdC40YbRgyBjYW52YXNcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Y29uc3QgcmVjdFRvdWNoID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgLy8g0LzQtdGC0L7QtCAtINC00LDQvdC90YvQtSDQv9C+INC/0L7Qu9C+0LbQtdC90LjRjiDQutCw0YDRgtC40L3QutC4XHJcblxyXG5cdFx0Lyog0KjQuNGA0LjQvdCwINC4INCy0YvRgdC+0YLQsCBjYW52YXMgKi9cclxuXHRcdGxldCByZWN0V2lkdGggPSByZWN0VG91Y2gud2lkdGg7XHJcblx0XHRsZXQgcmVjdEhlaWdodCA9IHJlY3RUb3VjaC5oZWlnaHQ7XHJcblxyXG5cdFx0Lyog0JrQvtC+0YDQtNC40L3QsNGC0Ysg0LrQsNGB0LDQvdC40Y8gKi9cclxuXHRcdGNvbnN0IHhUb3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSByZWN0VG91Y2gubGVmdDtcclxuXHRcdGNvbnN0IHlUb3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgLSByZWN0VG91Y2gudG9wO1xyXG5cclxuXHRcdC8qINCV0YHQu9C4INGD0LLQvtC00LjQvCDQv9Cw0LvQtdGGINC30LAg0LPRgNCw0L3QuNGG0YMgY2FudmFzINC60LDRgNGC0LjQvdC60LAg0L3QtSDQtNCy0LjQttC10YLRgdGPICAqL1xyXG5cdFx0aWYgKCh4VG91Y2ggPCByZWN0V2lkdGggJiYgeFRvdWNoID4gMCkgJiYgKHlUb3VjaCA8IHJlY3RIZWlnaHQgJiYgeVRvdWNoID4gMCkpIHtcclxuXHRcdFx0aWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xyXG5cclxuXHRcdFx0XHRldmVudHMudGNoID0gdHJ1ZTtcclxuXHRcdFx0XHRldmVudHMueCA9IHhUb3VjaDsgLy8g0L7QsdC90L7QstC70Y/QtdC8INC60L7QvtGA0LTQuNC90LDRgtGLXHJcblx0XHRcdFx0ZXZlbnRzLnkgPSB5VG91Y2g7XHJcblx0XHRcdH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNobW92ZScpIHtcclxuXHJcblx0XHRcdFx0ZXZlbnRzLmR4ID0geFRvdWNoIC0gZXZlbnRzLng7IC8vINC90L7QstGL0LUg0LzQuNC90YPRgSDRgdGC0LDRgNGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0YtcclxuXHRcdFx0XHRldmVudHMuZHkgPSB5VG91Y2ggLSBldmVudHMueTtcclxuXHJcblx0XHRcdFx0ZXZlbnRzLnggPSB4VG91Y2g7IC8vINC+0LHQvdC+0LLQu9GP0LXQvCDQutC+0L7RgNC00LjQvdCw0YLRi1xyXG5cdFx0XHRcdGV2ZW50cy55ID0geVRvdWNoO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaGVuZCcpIHtcclxuXHJcblx0XHRcdFx0ZXZlbnRzLnRjaCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSBlbHNlIHsgLy8g0LXRgdC70Lgg0LLRi9GF0L7QtNC40Lwg0LfQsCDQs9GA0LDQvdC40YbRg1xyXG5cdFx0XHRldmVudHMudGNoID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0RXZlbnRzKGVsZW1lbnQpIHtcclxuXHRcdGNvbnN0IGV2ZW50cyA9IHtcclxuXHRcdFx0eDogMCxcclxuXHRcdFx0eTogMCxcclxuXHRcdFx0ZHg6IDAsXHJcblx0XHRcdGR5OiAwLCAvLyDQvdCw0YHQutC+0LvRjNC60L4g0LjQt9C80LXQvdC40LvQsNGB0Ywg0LrQvtC+0YDQtNC40L3QsNGC0LAsINC90LDRgdC60L7Qu9GM0LrQviDRgdC80LXRgdGC0LjQu9C40YHRjFxyXG5cdFx0XHRsZWZ0TW91c2U6IGZhbHNlLCAvLyDQutC+0LPQtNCwIHRydWUgLSDQvdCw0LbQsNGC0LAg0LvQtdCy0LDRjyDQutC90L7Qv9C60LAg0LzRi9GI0LhcclxuXHRcdFx0d2hlZWw6IDAsIC8vINC60L7Qu9C10YHQviDQvNGL0YjQuCDQvdC1INC60YDRg9GC0LjRgtGB0Y9cclxuXHRcdFx0dGNoOiBmYWxzZSxcclxuXHRcdFx0bW9yZTogZmFsc2UsIC8vINGD0LLQtdC70LjRh9C10L3QuNC1INC60LDRgNGC0LjQvdC60LhcclxuXHRcdFx0bGVzczogZmFsc2UsIC8vINGD0LzQtdC90YzRiNC10L3QuNC1INC60LDRgNGC0LjQvdC60LhcclxuXHRcdFx0dXA6IGZhbHNlLCAvLyDQtNCy0LjQttC10L3QuNC1INC60LDRgNGC0LjQvdC60Lgg0LLQstC10YDRhVxyXG5cdFx0XHRkb3duOiBmYWxzZSxcclxuXHRcdFx0bGVmdDogZmFsc2UsXHJcblx0XHRcdHJpZ2h0OiBmYWxzZSxcclxuXHRcdH07XHJcblxyXG5cdFx0ZXZlbnRzLnVwZGF0ZSA9ICgpID0+IHsgLy8g0L7QsdC90YPQu9GP0LXQvCDQuNC30LzQtdC90LUt0LUg0LrQvtC+0YDQtNC40L3QsNGCXHJcblx0XHRcdGV2ZW50cy5keCA9IDA7XHJcblx0XHRcdGV2ZW50cy5keSA9IDA7XHJcblx0XHRcdGV2ZW50cy53aGVlbCA9IDA7IC8vINC+0LHQvdGD0LsuINC30L3QsNGHLiDQvtGCINC60L7Qu9GR0YHQuNC60LAg0LzRi9GI0LhcclxuXHRcdH07XHJcblxyXG5cdFx0Lyog0KHQvtCx0YvRgtC40Y8g0L3QsCDRjdC70LXQvNC10L3RgiDQv9GA0Lgg0LTQstC40LbQtdC90LjQuCDQutCw0YDRgtC40L3QutC4ICovXHJcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGV2ZW50ID0+IHtcclxuXHRcdFx0Y29uc3QgcmVjdE1vdXNlID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgLy8g0LzQtdGC0L7QtCAtINC00LDQvdC90YvQtSDQv9C+INC/0L7Qu9C20LXQvdC40Y4g0LrQsNGA0YLQuNC90LrQuFxyXG5cclxuXHRcdFx0Y29uc3QgeE1vdXNlID0gZXZlbnQuY2xpZW50WCAtIHJlY3RNb3VzZS5sZWZ0OyAvLyDQstGL0YfQuNGC0LDQtdC8INC+0YLRgdGC0YPQvyBjYW52YXNhINC40Lcg0LrQu9C40LXQvdGCLdGFINC60L7QvtGA0LTQuNC90LDRglxyXG5cdFx0XHRjb25zdCB5TW91c2UgPSBldmVudC5jbGllbnRZIC0gcmVjdE1vdXNlLnRvcDtcclxuXHJcblxyXG5cdFx0XHRldmVudHMuZHggPSB4TW91c2UgLSBldmVudHMueDsgLy8g0L3QvtCy0YvQtSDQvNC40L3Rg9GBINGB0YLQsNGA0YvQtSDQutC+0L7RgNC00LjQvdCw0YLRi1xyXG5cdFx0XHRldmVudHMuZHkgPSB5TW91c2UgLSBldmVudHMueTtcclxuXHJcblxyXG5cdFx0XHRldmVudHMueCA9IHhNb3VzZTsgLy8g0L7QsdC90L7QstC70Y/QtdC8INC60L7QvtGA0LTQuNC90LDRgtGLXHJcblx0XHRcdGV2ZW50cy55ID0geU1vdXNlO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHJcblx0XHQvKiDQodC+0LHRi9GC0LjRjyDQvdCwINGN0LvQtdC80LXQvdGCINC/0YDQuCDQtNCy0LjQttC10L3QuNC4INC60LDRgNGC0LjQvdC60LggKi9cclxuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZXZlbnQgPT4ge1xyXG5cdFx0XHR0b3VjaE1vdmUoZWxlbWVudCwgZXZlbnQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZXZlbnQgPT4ge1xyXG5cdFx0XHR0b3VjaE1vdmUoZWxlbWVudCwgZXZlbnQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGV2ZW50ID0+IHtcclxuXHRcdFx0dG91Y2hNb3ZlKGVsZW1lbnQsIGV2ZW50KTtcclxuXHRcdH0pO1xyXG5cclxuXHJcblx0XHQvKiDQndCw0LbQsNGC0LAg0LrQvdC+0L/QutCwINC80YvRiNC4ICovXHJcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50ID0+IHtcclxuXHRcdFx0aWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkgeyAvLyDQtdGB0LvQuCDQu9C10LLQsNGPINC60L3QvtC/0LrQsCDQvNGL0YjQuFxyXG5cdFx0XHRcdGV2ZW50cy5sZWZ0TW91c2UgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvKiDQn9C+0LTQvdGP0YLQsCDQutC90L7Qv9C60LAg0LzRi9GI0LggKi9cclxuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGV2ZW50ID0+IHtcclxuXHRcdFx0aWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkgeyAvLyDQtdGB0LvQuCDQu9C10LLQsNGPINC60L3QvtC/0LrQsCDQvNGL0YjQuFxyXG5cdFx0XHRcdGV2ZW50cy5sZWZ0TW91c2UgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZXZlbnQgPT4ge1xyXG5cdFx0XHRldmVudHMubGVmdE1vdXNlID0gZmFsc2U7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvKiDQmtGA0YPRgtC40Lwg0LrQvtC70ZHRgdC40LrQviDQvNGL0YjQuCDQtNC70Y8g0LzQsNGB0YjRgtCw0LHQsCDQutCw0YDRgtC40L3QutC4Ki9cclxuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIGV2ZW50ID0+IHtcclxuXHRcdFx0ZXZlbnRzLndoZWVsID0gZXZlbnQuZGVsdGFZOyAvLyDQv9GA0L7QutGA0YPRgtC60LAg0L/QviDQvtGB0LggWVxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyDQvtGB0YLQsNC90LDQstC7LiDRgNCw0YHQv9GA0L7RgdGC0YAuINGB0L7QsdGL0YLQuNGPINC/0YDQvtC60YAuINC80YvRiNC4INC00LDQu9GM0YjQtVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIGV2ZW50cztcclxuXHR9XHJcblxyXG5cclxuXHQvKiBteSBjb2RlOiDRgdC+0LHRi9GC0LjRjyovXHJcblxyXG5cdC8qINC40LfQvNC10L3QtdC90LjQtSDQstC40LTQsCDQutC90L7Qv9C60Lgg0L/RgNC4INC90LDQttCw0YLQuNC4INC80YvRiNC4INC4IHRvdWNoINGB0L7QsdGL0YLQuNC4ICovXHJcblxyXG5cdGxldCBidXR0b25NZW51QWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbk1lbnUnKTtcclxuXHJcblx0YnV0dG9uTWVudUFsbC5mb3JFYWNoKChlbGVtKSA9PiB7XHJcblx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoKSA9PiB7XHJcblx0XHRcdGVsZW0uY2xhc3NMaXN0LmFkZCgnb3BhY2l0eScpO1xyXG5cclxuXHRcdH0pO1xyXG5cdFx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsICgpID0+IHtcclxuXHRcdFx0ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5Jyk7XHJcblxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG5cdGJ1dHRvbk1lbnVBbGwuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG5cdFx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XHJcblx0XHRcdGVsZW0uY2xhc3NMaXN0LmFkZCgnb3BhY2l0eScpO1xyXG5cclxuXHRcdH0pO1xyXG5cdFx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xyXG5cdFx0XHRlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHknKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHQvKiBlbmQg0LjQt9C80LXQvdC10L3QuNC1INCy0LjQtNCwINC60L3QvtC/0LrQuCDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0LzRi9GI0Lgg0LggdG91Y2gg0YHQvtCx0YvRgtC40LggKi9cclxuXHJcblx0Lyog0LTQstC40LbQtdC90LjQtSDQuCDQuNC30LzQtdC90LXQvdC40LUg0LzQsNGB0YjRgtCw0LHQsCDQutCw0YDRgtC40L3QutC4INC/0L4g0LrQvdC+0L/QutCw0LwgKi9cclxuXHJcblx0bGV0IGJ1dHRvbkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xyXG5cclxuXHJcblx0Lyog0YHQvtCx0YvRgtC40Y8g0LzRi9GI0Lgg0L3QsCDQutC90L7Qv9C60LDRhSAqL1xyXG5cclxuXHRsZXQgbW91c2VFdmVudHMgPSAoZWxlbSwgZXZlbnQpID0+IHtcclxuXHRcdGlmIChldmVudC5idXR0b24gPT09IDApIHtcclxuXHRcdFx0bGV0IGV2ZW50RWxlbSA9IFN0cmluZyhlbGVtLmNsYXNzTGlzdFswXSk7IC8vINC30LDQv9C40YEuINC40LzRjyDQutC70LDRgdGB0LAg0YHRgtGA0L7QutC+0LlcclxuXHJcblx0XHRcdGxldCBjc3NFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZXZlbnRFbGVtfWApOyAvLyDQtNC70Y8g0LjQt9C80LXQvdC10L3QuNGPINCy0L3QtdGI0L3QtdCz0L4g0LLQuNC00LAg0LrQvdC+0L/QutC4XHJcblxyXG5cdFx0XHRpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicpIHsgLy8g0L/RgNC+0LLQtdGA0LrQsCDRgtC40L/QsCDRgdC+0LHRi9GC0LjRj1xyXG5cdFx0XHRcdGNzc0VsZW0uY2xhc3NMaXN0LmFkZCgnb3BhY2l0eScpOyAvLyDQtNC+0LHQsNCy0LsuINC60L3QvtC/0LrQtSDQv9GA0L7Qt9GA0LDRh9C90L7RgdGC0YxcclxuXHRcdFx0XHRldmVudHNbZXZlbnRFbGVtXSA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNldXAnKSB7XHJcblx0XHRcdFx0Y3NzRWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5Jyk7IC8vINGD0LTQsNC70Y/QtdC8INC/0YDQvtC30YDQsNGH0L3QvtGB0YLRjFxyXG5cdFx0XHRcdGV2ZW50c1tldmVudEVsZW1dID0gZmFsc2U7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0YnV0dG9uQWxsLmZvckVhY2goKGVsZW0pID0+IHtcclxuXHRcdGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoZWxlbS5tYXRjaGVzKCcudXAnKSkge1xyXG5cdFx0XHRcdG1vdXNlRXZlbnRzKGVsZW0sIGV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZWxlbS5tYXRjaGVzKCcuZG93bicpKSB7XHJcblx0XHRcdFx0bW91c2VFdmVudHMoZWxlbSwgZXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChlbGVtLm1hdGNoZXMoJy5sZWZ0JykpIHtcclxuXHRcdFx0XHRtb3VzZUV2ZW50cyhlbGVtLCBldmVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVsZW0ubWF0Y2hlcygnLnJpZ2h0JykpIHtcclxuXHRcdFx0XHRtb3VzZUV2ZW50cyhlbGVtLCBldmVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVsZW0uY2xvc2VzdCgnLm1vcmUnKSkge1xyXG5cdFx0XHRcdG1vdXNlRXZlbnRzKGVsZW0sIGV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZWxlbS5tYXRjaGVzKCcubGVzcycpKSB7XHJcblx0XHRcdFx0bW91c2VFdmVudHMoZWxlbSwgZXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKGVsZW0ubWF0Y2hlcygnLnVwJykpIHtcclxuXHRcdFx0XHRtb3VzZUV2ZW50cyhlbGVtLCBldmVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVsZW0ubWF0Y2hlcygnLmRvd24nKSkge1xyXG5cdFx0XHRcdG1vdXNlRXZlbnRzKGVsZW0sIGV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZWxlbS5tYXRjaGVzKCcubGVmdCcpKSB7XHJcblx0XHRcdFx0bW91c2VFdmVudHMoZWxlbSwgZXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChlbGVtLm1hdGNoZXMoJy5yaWdodCcpKSB7XHJcblx0XHRcdFx0bW91c2VFdmVudHMoZWxlbSwgZXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChlbGVtLm1hdGNoZXMoJy5tb3JlJykpIHtcclxuXHRcdFx0XHRtb3VzZUV2ZW50cyhlbGVtLCBldmVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVsZW0ubWF0Y2hlcygnLmxlc3MnKSkge1xyXG5cdFx0XHRcdG1vdXNlRXZlbnRzKGVsZW0sIGV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG5cdC8qIGVuZCDRgdC+0LHRi9GC0LjRjyDQvNGL0YjQuCDQvdCwINC60L3QvtC/0LrQsNGFICovXHJcblxyXG5cclxuXHQvKiB0b3VjaCDRgdC+0LHRi9GC0LjRjyDQutC90L7Qv9C60LDRhSAqL1xyXG5cclxuXHRsZXQgdG91Y2hFdmVudHMgPSAoZWxlbSwgZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCByZWN0RWxlbSA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdFx0bGV0IGV2ZW50RWxlbSA9IFN0cmluZyhlbGVtLmNsYXNzTGlzdFswXSk7IC8vINC/0L7Qu9GD0YcuINC90LDQt9Cy0LDQvdC40LUg0LrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtCwXHJcblx0XHRsZXQgcmVjdFdpZHRoID0gcmVjdEVsZW0ud2lkdGg7XHJcblx0XHRsZXQgcmVjdEhlaWdodCA9IHJlY3RFbGVtLmhlaWdodDtcclxuXHJcblx0XHRsZXQgY3NzRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2V2ZW50RWxlbX1gKTsgLy8g0LTQu9GPINC40LfQvNC10L3QtdC90LjRjyDQstC90LXRiNC90LXQs9C+INCy0LjQtNCwINC60L3QvtC/0LrQuFxyXG5cclxuXHRcdGNvbnN0IHhFbGVtID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCAtIHJlY3RFbGVtLmxlZnQ7XHJcblx0XHRjb25zdCB5RWxlbSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgLSByZWN0RWxlbS50b3A7XHJcblxyXG5cdFx0Lyog0JXRgdC70Lgg0YPQstC+0LTQuNC8INC/0LDQu9C10YYg0LfQsCDQs9GA0LDQvdC40YbRgyDQutC90L7Qv9C60LgsINC+0L3QsCDQvdC1INGB0YDQsNCx0LDRgtGL0LLQsNC10YIgKi9cclxuXHRcdGlmICgoeEVsZW0gPCByZWN0V2lkdGggJiYgeEVsZW0gPiAwKSAmJiAoeUVsZW0gPCByZWN0SGVpZ2h0ICYmIHlFbGVtID4gMCkpIHtcclxuXHJcblx0XHRcdGlmIChldmVudC50eXBlID09PSAndG91Y2hzdGFydCcpIHsgLy8g0L/RgNC+0LLQtdGA0LrQsCDQuNC80LXQvdC4INGB0L7QsdGL0YLQuNGPXHJcblx0XHRcdFx0ZXZlbnRzW2V2ZW50RWxlbV0gPSB0cnVlOyAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LfQvdCw0YfQtdC90LjQtSDQsiDQvtCx0YrQtdC60YIg0L/QviDQuNC80LXQvdC4INC60LvQsNGB0YHQsCDRjdC70LXQvNC10L3RgtCwXHJcblxyXG5cdFx0XHRcdGNzc0VsZW0uY2xhc3NMaXN0LmFkZCgnb3BhY2l0eScpOyAvLyDQtNC+0LHQsNCy0LsuINC60L3QvtC/0LrQtSDQv9GA0L7Qt9GA0LDRh9C90L7RgdGC0YxcclxuXHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0fSBlbHNlIGlmIChldmVudC50eXBlID09PSAndG91Y2hlbmQnKSB7XHJcblx0XHRcdFx0ZXZlbnRzW2V2ZW50RWxlbV0gPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0Y3NzRWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5Jyk7IC8vINGD0LHQuNGA0LDQtdC8INC/0YDQvtC30YDQsNGH0L3QvtGB0YLRjFxyXG5cclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHRidXR0b25BbGwuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG5cdFx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoZWxlbS5tYXRjaGVzKCcudXAnKSkge1xyXG5cdFx0XHRcdHRvdWNoRXZlbnRzKGVsZW0sIGV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZWxlbS5tYXRjaGVzKCcuZG93bicpKSB7XHJcblx0XHRcdFx0dG91Y2hFdmVudHMoZWxlbSwgZXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChlbGVtLm1hdGNoZXMoJy5sZWZ0JykpIHtcclxuXHRcdFx0XHR0b3VjaEV2ZW50cyhlbGVtLCBldmVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVsZW0ubWF0Y2hlcygnLnJpZ2h0JykpIHtcclxuXHRcdFx0XHR0b3VjaEV2ZW50cyhlbGVtLCBldmVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVsZW0ubWF0Y2hlcygnLm1vcmUnKSkge1xyXG5cdFx0XHRcdHRvdWNoRXZlbnRzKGVsZW0sIGV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZWxlbS5tYXRjaGVzKCcubGVzcycpKSB7XHJcblx0XHRcdFx0dG91Y2hFdmVudHMoZWxlbSwgZXZlbnQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoZWxlbS5tYXRjaGVzKCcudXAnKSkge1xyXG5cdFx0XHRcdHRvdWNoRXZlbnRzKGVsZW0sIGV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZWxlbS5tYXRjaGVzKCcuZG93bicpKSB7XHJcblx0XHRcdFx0dG91Y2hFdmVudHMoZWxlbSwgZXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChlbGVtLm1hdGNoZXMoJy5sZWZ0JykpIHtcclxuXHRcdFx0XHR0b3VjaEV2ZW50cyhlbGVtLCBldmVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVsZW0ubWF0Y2hlcygnLnJpZ2h0JykpIHtcclxuXHRcdFx0XHR0b3VjaEV2ZW50cyhlbGVtLCBldmVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVsZW0ubWF0Y2hlcygnLm1vcmUnKSkge1xyXG5cdFx0XHRcdHRvdWNoRXZlbnRzKGVsZW0sIGV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZWxlbS5tYXRjaGVzKCcubGVzcycpKSB7XHJcblx0XHRcdFx0dG91Y2hFdmVudHMoZWxlbSwgZXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblxyXG5cdC8qIGVuZCDQtNCy0LjQttC10L3QuNC1INC4INC80LDRgdGI0YLQsNCxINC60LDRgNGC0LjQvdC60Lgg0L/QviDQutC90L7Qv9C60LDQvCAqL1xyXG5cclxuXHQvKiBlbmQgbXkgY29kZSAqL1xyXG5cclxuXHJcbn0pKCk7XHJcbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==