/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetimer"]("main",{

/***/ "./src/modules/inputValidation.js":
/*!****************************************!*\
  !*** ./src/modules/inputValidation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-useless-escape */\n// eslint-disable-next-line strict\n\n\nvar inputValidation = function inputValidation() {\n  var calcElem = function calcElem() {\n    var sumPlace = document.querySelectorAll(\"input.calc-item\");\n    sumPlace.forEach(function (input) {\n      input.addEventListener(\"input\", function () {\n        this.value = this.value.replace(/[^\\d]/g, \"\");\n      });\n    });\n  };\n\n  calcElem();\n\n  var form = function form() {\n    var mess = document.querySelector('.mess'),\n        name = document.getElementById('form1-name'),\n        email = document.getElementById('form1-email'),\n        phone = document.getElementById('form1-phone'),\n        nameTwo = document.getElementById('form2-name'),\n        emailTwo = document.getElementById('form2-email'),\n        phoneTwo = document.getElementById('form2-phone'),\n        nameThree = document.getElementById('form3-name'),\n        emailThree = document.getElementById('form3-email'),\n        phoneThree = document.getElementById('form3-phone');\n\n    var validPhone = function validPhone(elem) {\n      elem.addEventListener('blur', function (event) {\n        event.target.value = event.target.value.replace(/( \\s+)(^\\s*$)/gi, '');\n        event.target.value = event.target.value.split(' ').filter(function (n) {\n          return n;\n        }).join(' ');\n        event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');\n        event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');\n      });\n      elem.addEventListener('input', function (event) {\n        event.target.value = event.target.value.replace(/[^+\\d () -]/g, '');\n      });\n    };\n\n    var validEmail = function validEmail(elem) {\n      elem.addEventListener('blur', function (event) {\n        event.target.value = event.target.value.replace(/( \\s+)(^\\s*$)/gi, '');\n        event.target.value = event.target.value.split(' ').filter(function (n) {\n          return n;\n        }).join(' ');\n        event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');\n        event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');\n      });\n      elem.addEventListener('input', function (event) {\n        event.target.value = event.target.value.replace(/[^a-z@-_.!~*']/gi, '');\n      });\n    };\n\n    var validName = function validName(elem, elemForm) {\n      var form = document.getElementById(elemForm);\n      var createDiv = document.createElement(\"div\");\n      var errorMessage = \"Что то пошло не так...\";\n      elem.addEventListener('blur', function (event) {\n        event.target.value = event.target.value.replace(/( \\s+)(^\\s*$)/gi, '');\n        event.target.value = event.target.value.split(' ').filter(function (n) {\n          return n;\n        }).join(' ');\n        event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');\n        event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');\n\n        if (event.target.value) {\n          event.target.value = event.target.value.split(' ').map(function (e) {\n            return e[0].toUpperCase() + e.slice(1);\n          }).join(\" \");\n        } else {\n          return;\n        }\n\n        if (elem.value.length < 2) {\n          event.preventDefault();\n          document.querySelector('.form-btn').disabled = true;\n          form.appendChild(createDiv);\n          createDiv.textContent = errorMessage;\n          return false;\n        } else {\n          document.querySelector('.form-btn').disabled = false;\n          createDiv.textContent = '';\n          return true;\n        }\n      });\n      elem.addEventListener('input', function (event) {\n        event.target.value = event.target.value.replace(/[^а-яё -]/gi, '');\n      });\n    }; //\n    //1\n\n\n    mess.addEventListener('blur', function (event) {\n      event.target.value = event.target.value.replace(/( \\s+)(^\\s*$)/gi, '');\n      event.target.value = event.target.value.split(' ').filter(function (n) {\n        return n;\n      }).join(' ');\n      event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');\n      event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');\n    });\n    mess.addEventListener('input', function (event) {\n      event.target.value = event.target.value.replace(/[^а-яё -,.:;()!?\"]/gi, '');\n    });\n    validName(name, \"form1\");\n    validName(nameTwo, \"form2\");\n    validName(nameThree, \"form3\");\n    validEmail(email, \"form1\");\n    validEmail(emailTwo, \"form2\");\n    validEmail(emailThree, \"form3\");\n    validPhone(phone, \"form1\");\n    validPhone(phoneTwo, \"form2\");\n    validPhone(phoneThree, \"form3\");\n  };\n\n  form();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputValidation);\n\n//# sourceURL=webpack://timer/./src/modules/inputValidation.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("45198872ebcdc1267183")
/******/ })();
/******/ 
/******/ }
);