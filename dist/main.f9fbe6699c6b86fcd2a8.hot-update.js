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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-useless-escape */\n// eslint-disable-next-line strict\n\n\nvar inputValidation = function inputValidation() {\n  var calcElem = function calcElem() {\n    var sumPlace = document.querySelectorAll(\"input.calc-item\");\n    sumPlace.forEach(function (input) {\n      input.addEventListener(\"input\", function () {\n        this.value = this.value.replace(/[^\\d]/g, \"\");\n      });\n    });\n  };\n\n  calcElem();\n\n  var form = function form() {\n    var mess = document.querySelector('.mess'),\n        name = document.getElementById('form1-name'),\n        email = document.getElementById('form1-email'),\n        phone = document.getElementById('form1-phone'),\n        nameTwo = document.getElementById('form2-name'),\n        emailTwo = document.getElementById('form2-email'),\n        phoneTwo = document.getElementById('form2-phone'),\n        nameThree = document.getElementById('form3-name'),\n        emailThree = document.getElementById('form3-email'),\n        phoneThree = document.getElementById('form3-phone'); // const validLength = elemForm => {\n    // const form = document.getElementById(elemForm);\n    // const createDiv = document.createElement(\"div\");\n    // const errorMessage = \"Введите данные правильно\";\n    // createDiv.style.cssText = \"font-size: 2rem; color: red\";\n    //     if (name.value.length < 2 || email.value.length < 4 || phone.value.length < 6 ||\n    //         nameTwo.value.length < 2 || emailTwo.value.length < 4 || phoneTwo.value.length < 6 ||\n    //         nameThree.value.length < 2 || emailThree.value.length < 4 || phoneThree.value.length < 6) {\n    //         document.querySelector('.form-btn').disabled = true;\n    //         form.appendChild(createDiv);\n    //         createDiv.textContent = errorMessage;\n    //         return false;\n    //     } else {\n    //         document.querySelector('.form-btn').disabled = false;\n    //         createDiv.textContent = '';\n    //         return true;\n    //     }\n    // };\n\n    var validPhone = function validPhone(elem) {\n      elem.addEventListener('blur', function (event) {\n        event.target.value = event.target.value.replace(/( \\s+)(^\\s*$)/gi, '');\n        event.target.value = event.target.value.split(' ').filter(function (n) {\n          return n;\n        }).join(' ');\n        event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');\n        event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');\n      });\n      elem.addEventListener('input', function (event) {\n        event.target.value = event.target.value.replace(/[^+\\d () -]/g, '');\n      });\n    };\n\n    var validEmail = function validEmail(elem) {\n      elem.addEventListener('blur', function (event) {\n        event.target.value = event.target.value.replace(/( \\s+)(^\\s*$)/gi, '');\n        event.target.value = event.target.value.split(' ').filter(function (n) {\n          return n;\n        }).join(' ');\n        event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');\n        event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');\n      });\n      elem.addEventListener('input', function (event) {\n        event.target.value = event.target.value.replace(/[^a-z@-_.!~*']/gi, '');\n      });\n    };\n\n    var validName = function validName(elem) {\n      elem.addEventListener('blur', function (event) {\n        event.target.value = event.target.value.replace(/( \\s+)(^\\s*$)/gi, '');\n        event.target.value = event.target.value.split(' ').filter(function (n) {\n          return n;\n        }).join(' ');\n        event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');\n        event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');\n\n        if (event.target.value) {\n          event.target.value = event.target.value.split(' ').map(function (e) {\n            return e[0].toUpperCase() + e.slice(1);\n          }).join(\" \");\n        } else {\n          return;\n        }\n      });\n      elem.addEventListener('input', function (event) {\n        event.target.value = event.target.value.replace(/[^а-яё -]/gi, '');\n      });\n    }; //1\n\n\n    mess.addEventListener('blur', function (event) {\n      event.target.value = event.target.value.replace(/( \\s+)(^\\s*$)/gi, '');\n      event.target.value = event.target.value.split(' ').filter(function (n) {\n        return n;\n      }).join(' ');\n      event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');\n      event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');\n    });\n    mess.addEventListener('input', function (event) {\n      event.target.value = event.target.value.replace(/[^а-яё -,.:;()!?\"]/gi, '');\n    });\n\n    var validLength = function validLength() {\n      var form = document.getElementById(\"form1\"),\n          formTwo = document.getElementById(\"form2\"),\n          formThree = document.getElementById(\"form3\");\n      var createDiv = document.createElement(\"div\");\n      var errorMessage = \"Введите данные правильно\";\n      createDiv.style.cssText = \"font-size: 2rem; color: red\";\n      form.addEventListener('submit', function (e) {\n        if (name.value.length < 2 || email.value.length < 4 || phone.value.length < 6) {\n          e.preventDefault();\n          form.appendChild(createDiv);\n          createDiv.textContent = errorMessage;\n          return false;\n        } else {\n          return true;\n        }\n      });\n      formTwo.addEventListener('submit', function (e) {\n        if (nameTwo.value.length < 2 || emailTwo.value.length < 4 || phoneTwo.value.length < 6) {\n          e.preventDefault();\n          form.appendChild(createDiv);\n          createDiv.textContent = errorMessage;\n          return false;\n        } else {\n          return true;\n        }\n      });\n      formThree.addEventListener('submit', function (e) {\n        if (nameThree.value.length < 2 || emailThree.value.length < 4 || phoneThree.value.length < 6) {\n          e.preventDefault();\n          formЕ.appendChild(createDiv);\n          createDiv.textContent = errorMessage;\n          return false;\n        } else {\n          return true;\n        }\n      });\n    };\n\n    validName(name);\n    validName(nameTwo);\n    validName(nameThree);\n    validEmail(email);\n    validEmail(emailTwo);\n    validEmail(emailThree);\n    validPhone(phone);\n    validPhone(phoneTwo);\n    validPhone(phoneThree);\n    validLength();\n  };\n\n  form();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputValidation);\n\n//# sourceURL=webpack://timer/./src/modules/inputValidation.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b172ea30e6db959add56")
/******/ })();
/******/ 
/******/ }
);