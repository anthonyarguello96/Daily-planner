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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./js/functions.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n // const inputField = document.getElementById('inputField');\n\nvar inputField = document.getElementById('inputField');\nvar toDoContainer = document.getElementById('to-do-items-container');\nvar addBtn = document.getElementById('add-to-do');\nvar parallax = document.getElementsByClassName('img-div');\n\nvar spread = _toConsumableArray(parallax);\n\nvar prioritiesContainer = document.getElementById('priorities-box');\nvar prioritiesList = document.getElementById('priorities-list'); // Add to-do\n\naddBtn.addEventListener('click', function () {\n  new _functions_js__WEBPACK_IMPORTED_MODULE_0__[\"Item\"](inputField.value, toDoContainer, prioritiesList, inputField);\n}); //  Config enter key's event listener\n\ninputField.addEventListener('keyup', function (e) {\n  if (e.keyCode === 13) {\n    e.preventDefault();\n    addBtn.click();\n  }\n}); //  Parallax effect\n\nwindow.addEventListener('scroll', function () {\n  _functions_js__WEBPACK_IMPORTED_MODULE_0__[\"parallaxEffect\"](spread);\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/functions.js":
/*!*************************!*\
  !*** ./js/functions.js ***!
  \*************************/
/*! exports provided: Item, parallaxEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Item\", function() { return Item; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parallaxEffect\", function() { return parallaxEffect; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// Add to-do functionality\nvar Item = /*#__PURE__*/function () {\n  function Item(itemName, boxContainer, prioritiesList, inputField) {\n    _classCallCheck(this, Item);\n\n    this.createDiv(itemName, boxContainer, prioritiesList, inputField);\n  }\n\n  _createClass(Item, [{\n    key: \"createDiv\",\n    value: function createDiv(itemName, boxContainer, prioritiesList, inputField) {\n      var _this = this;\n\n      var itemBox = document.createElement('div');\n      itemBox.classList.add('item-box');\n      var input = document.createElement('input');\n      input.value = itemName; // console.log(prioritiesContainer);\n\n      input.classList.add('item-input');\n      input.disabled = true;\n      input.type = 'text';\n      var editBtn = document.createElement('button');\n      editBtn.classList.add('editBtn');\n      editBtn.textContent = '+';\n      editBtn.addEventListener('click', function () {\n        return _this.edit(input, editBtn);\n      });\n      var removeBtn = document.createElement('button');\n      removeBtn.classList.add('removeBtn');\n      removeBtn.textContent = '-';\n      removeBtn.addEventListener('click', function () {\n        return _this.remove(boxContainer, itemBox);\n      });\n      var priorityBtn = document.createElement('button');\n      var orderedList = document.createElement('ol');\n      priorityBtn.classList.add('priorityBtn');\n      priorityBtn.textContent = 'P';\n      priorityBtn.addEventListener('click', function () {\n        _this.addPriority(itemName, prioritiesList);\n      });\n      boxContainer.appendChild(itemBox);\n      itemBox.appendChild(input);\n      itemBox.appendChild(editBtn);\n      itemBox.appendChild(removeBtn);\n      itemBox.appendChild(priorityBtn);\n      inputField.value = '';\n    } //  Edit method\n\n  }, {\n    key: \"edit\",\n    value: function edit(input, btn) {\n      input.disabled = !input.disabled;\n\n      if (input.disabled != true) {\n        btn.style.backgroundColor = 'lime';\n      } else {\n        btn.style.backgroundColor = '#B1DBEC';\n      }\n    } // Remove method\n\n  }, {\n    key: \"remove\",\n    value: function remove(container, itemBox) {\n      container.removeChild(itemBox);\n    } // Priority method\n\n  }, {\n    key: \"addPriority\",\n    value: function addPriority(value, list) {\n      var listItem = document.createElement('li');\n      listItem.appendChild(document.createTextNode(value));\n      list.appendChild(listItem);\n      listItem.classList.add('priorities-list-item');\n      listItem.addEventListener('click', function () {\n        listItem.classList.add('done');\n      });\n      listItem.addEventListener('dblclick', function () {\n        list.removeChild(listItem);\n      });\n      var removeBtn = document.createElement('button');\n      removeBtn.textContent = '-';\n      removeBtn.classList.add('removeBtn');\n    }\n  }]);\n\n  return Item;\n}(); // Parallax effect fucntion\n\nvar parallaxEffect = function parallaxEffect(arr) {\n  var offset = window.pageYOffset;\n  arr.map(function (x) {\n    return x.style.backgroundPositionY = offset * 0.7 + 'px';\n  });\n};\n\n//# sourceURL=webpack:///./js/functions.js?");

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./js/app.js ./js/functions.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/anthonyarguello/Desktop/FEWD/planner/js/app.js */\"./js/app.js\");\nmodule.exports = __webpack_require__(/*! /Users/anthonyarguello/Desktop/FEWD/planner/js/functions.js */\"./js/functions.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app.js_./js/functions.js?");

/***/ })

/******/ });