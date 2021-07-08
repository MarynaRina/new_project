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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// eslint-disable-next-line strict\n\n\nvar sendForm = function sendForm() {\n  var validForm = function validForm() {\n    var name = document.getElementById('form1-name'),\n        email = document.getElementById('form1-email'),\n        phone = document.getElementById('form1-phone'),\n        nameTwo = document.getElementById('form2-name'),\n        emailTwo = document.getElementById('form2-email'),\n        phoneTwo = document.getElementById('form2-phone'),\n        nameThree = document.getElementById('form3-name'),\n        emailThree = document.getElementById('form3-email'),\n        phoneThree = document.getElementById('form3-phone');\n    var form = document.getElementById(\"form1\"),\n        formTwo = document.getElementById(\"form2\"),\n        formThree = document.getElementById(\"form3\");\n    var createDiv = document.createElement(\"div\");\n    var errorMessage = \"Введите данные правильно\";\n    createDiv.style.cssText = \"font-size: 2rem; color: red\";\n    form.addEventListener('submit', function (e) {\n      if (name.value.length < 2 || email.value.length < 4 || phone.value.length < 6) {\n        e.preventDefault();\n        form.appendChild(createDiv);\n        createDiv.textContent = errorMessage;\n        return false;\n      } else {\n        e.preventDefault();\n        return true;\n      }\n    });\n    formTwo.addEventListener('submit', function (e) {\n      if (nameTwo.value.length < 2 || emailTwo.value.length < 4 || phoneTwo.value.length < 6) {\n        e.preventDefault();\n        formTwo.appendChild(createDiv);\n        createDiv.textContent = errorMessage;\n        return false;\n      } else {\n        e.preventDefault();\n        return true;\n      }\n    });\n    formThree.addEventListener('submit', function (e) {\n      if (nameThree.value.length < 2 || emailThree.value.length < 4 || phoneThree.value.length < 6) {\n        e.preventDefault();\n        formThree.appendChild(createDiv);\n        createDiv.textContent = errorMessage;\n        return false;\n      } else {\n        e.preventDefault();\n        return true;\n      }\n    });\n  };\n\n  var errorMessage = \"Что то пошло не так...\",\n      loadMessage = \"Загрузка...\",\n      successMessage = \"Спасибо! Мы с вами свяжемся!\";\n\n  var postData = function postData(body) {\n    return fetch(\"./server.php\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  var createMessage = function createMessage(elemForm) {\n    var form = document.getElementById(elemForm);\n    var statusMessage = document.createElement(\"div\");\n    statusMessage.style.cssText = \"font-size: 2rem; color: #fff\";\n    form.addEventListener(\"submit\", function (event) {\n      var formData = new FormData(form);\n      var body = {};\n      event.preventDefault();\n      form.appendChild(statusMessage);\n      statusMessage.textContent = loadMessage;\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      });\n      postData(body).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error(\"status network not 200\");\n        }\n\n        statusMessage.textContent = successMessage;\n        document.getElementById(elemForm).reset();\n      })[\"catch\"](function (error) {\n        console.error(error);\n        statusMessage.textContent = errorMessage;\n      });\n    });\n  };\n\n  validForm();\n  createMessage(\"form1\");\n  createMessage(\"form2\");\n  createMessage(\"form3\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://timer/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("932f193590395733e19a")
/******/ })();
/******/ 
/******/ }
);