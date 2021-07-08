/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetimer"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// eslint-disable-next-line strict\n\n\nvar sendForm = function sendForm() {\n  var validForm = function validForm(currentForm) {\n    var name = currentForm.querySelector('.form-name'),\n        email = currentForm.querySelector('.form-email'),\n        phone = currentForm.querySelector('.form-phone');\n    var errors = [];\n\n    if (name.value.length < 2) {\n      errors.push('Имя должно быть больше 2 символов');\n    } else if (email.value.length < 4) {\n      errors.push('Yеправильно введен email');\n    } else if (phone.value.length < 6) {\n      errors.push('телефон не сожет быть короче 6 символов');\n    }\n\n    return errors;\n  };\n\n  var errorMessage = \"Что то пошло не так...\",\n      loadMessage = \"Загрузка...\",\n      successMessage = \"Спасибо! Мы с вами свяжемся!\";\n\n  var postData = function postData(body) {\n    return fetch(\"./server.php\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  var createMessage = function createMessage(elemForm) {\n    var form = document.getElementById(elemForm);\n    var statusMessage = document.createElement(\"div\");\n    statusMessage.style.cssText = \"font-size: 2rem; color: #fff\";\n    form.appendChild(statusMessage);\n    form.addEventListener(\"submit\", function (event) {\n      event.preventDefault();\n      var errors = validForm(form);\n\n      if (errors.length === 0) {\n        var formData = new FormData(form);\n        var body = {};\n        statusMessage.textContent = loadMessage;\n        formData.forEach(function (val, key) {\n          body[key] = val;\n        });\n        postData(body).then(function (response) {\n          if (response.status !== 200) {\n            throw new Error(\"status network not 200\");\n          }\n\n          statusMessage.textContent = successMessage;\n          document.getElementById(elemForm).reset();\n        })[\"catch\"](function (error) {\n          console.error(error);\n          statusMessage.textContent = errorMessage;\n        });\n      } else {\n        statusMessage.textContent = errors[0];\n        setTimeout(function () {\n          statusMessage.textContent = '';\n        }, 3000);\n      }\n    });\n  };\n\n  createMessage(\"form1\");\n  createMessage(\"form2\");\n  createMessage(\"form3\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://timer/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4fc260f8233ec01312c6")
/******/ })();
/******/ 
/******/ }
);