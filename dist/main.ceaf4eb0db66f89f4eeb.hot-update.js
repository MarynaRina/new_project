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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// eslint-disable-next-line strict\n\n\nvar inputValidation = function inputValidation() {\n  var calcElem = function calcElem() {\n    var sumPlace = document.querySelectorAll(\"input.calc-item\");\n    sumPlace.forEach(function (input) {\n      input.addEventListener(\"input\", function () {\n        this.value = this.value.replace(/[^\\d]/g, \"\");\n      });\n    });\n  };\n\n  calcElem();\n\n  var form = function form() {\n    var mess = document.querySelector(\".mess\"),\n        name = document.getElementById(\"form1-name\"),\n        email = document.getElementById(\"form1-email\"),\n        phone = document.getElementById(\"form1-phone\"),\n        nameTwo = document.getElementById(\"form2-name\"),\n        emailTwo = document.getElementById(\"form2-email\"),\n        phoneTwo = document.getElementById(\"form2-phone\"),\n        nameThree = document.getElementById(\"form3-name\"),\n        emailThree = document.getElementById(\"form3-email\"),\n        phoneThree = document.getElementById(\"form3-phone\");\n    /*\r\n    const validPhone = elem => {\r\n        elem.addEventListener(\"blur\", event => {\r\n            event.target.value = event.target.value.replace(/( \\s+)(^\\s*$)/gi, \"\");\r\n            event.target.value = event.target.value\r\n                .split(\" \")\r\n                .filter(n => n)\r\n                .join(\" \");\r\n            event.target.value = event.target.value.replaceAll(\r\n                event.target.value.match(/-+/),\r\n                \"-\"\r\n            );\r\n            event.target.value = event.target.value.replaceAll(\r\n                event.target.value.match(/ +/),\r\n                \" \"\r\n            );\r\n        });\r\n          elem.addEventListener(\"input\", event => {\r\n            event.target.value = event.target.value.replace(/[^+\\d () -]/g, \"\");\r\n        });\r\n    };\r\n      const validEmail = elem => {\r\n        elem.addEventListener(\"blur\", event => {\r\n            event.target.value = event.target.value.replace(/( \\s+)(^\\s*$)/gi, \"\");\r\n            event.target.value = event.target.value\r\n                .split(\" \")\r\n                .filter(n => n)\r\n                .join(\" \");\r\n            event.target.value = event.target.value.replaceAll(\r\n                event.target.value.match(/-+/),\r\n                \"-\"\r\n            );\r\n            event.target.value = event.target.value.replaceAll(\r\n                event.target.value.match(/ +/),\r\n                \" \"\r\n            );\r\n        });\r\n        elem.addEventListener(\"input\", event => {\r\n            event.target.value = event.target.value.replace(/[^a-z@-_.!~*']/gi, \"\");\r\n        });\r\n    };\r\n      const validName = elem => {\r\n        elem.addEventListener(\"blur\", event => {\r\n            event.target.value = event.target.value.replace(/( \\s+)(^\\s*$)/gi, \"\");\r\n            event.target.value = event.target.value\r\n                .split(\" \")\r\n                .filter(n => n)\r\n                .join(\" \");\r\n            event.target.value = event.target.value.replaceAll(\r\n                event.target.value.match(/-+/),\r\n                \"-\"\r\n            );\r\n            event.target.value = event.target.value.replaceAll(\r\n                event.target.value.match(/ +/),\r\n                \" \"\r\n            );\r\n            if (event.target.value) {\r\n                event.target.value = event.target.value\r\n                    .split(\" \")\r\n                    .map(e => e[0].toUpperCase() + e.slice(1))\r\n                    .join(\" \");\r\n            } else {\r\n                return;\r\n            }\r\n        });\r\n        elem.addEventListener(\"input\", event => {\r\n            event.target.value = event.target.value.replace(/[^а-яё -]/gi, \"\");\r\n        });\r\n    };\r\n      //1\r\n    mess.addEventListener(\"blur\", event => {\r\n        event.target.value = event.target.value.replace(/( \\s+)(^\\s*$)/gi, \"\");\r\n        event.target.value = event.target.value\r\n            .split(\" \")\r\n            .filter(n => n)\r\n            .join(\" \");\r\n        event.target.value = event.target.value.replaceAll(\r\n            event.target.value.match(/-+/),\r\n            \"-\"\r\n        );\r\n        event.target.value = event.target.value.replaceAll(\r\n            event.target.value.match(/ +/),\r\n            \" \"\r\n        );\r\n    });\r\n    mess.addEventListener(\"input\", event => {\r\n        event.target.value = event.target.value.replace(\r\n            /[^а-яё -,.:;()!?\"]/gi,\r\n            \"\"\r\n        );\r\n    });\r\n      validName(name);\r\n    validName(nameTwo);\r\n    validName(nameThree);\r\n      validEmail(email);\r\n    validEmail(emailTwo);\r\n    validEmail(emailThree);\r\n      validPhone(phone);\r\n    validPhone(phoneTwo);\r\n    validPhone(phoneThree);\r\n    */\n\n    function checkString(str, pattern) {\n      var patterns = {\n        email: new RegExp('^([a-z0-9\\-_.]{2,30}@[a-z]{2,10}\\.[a-z]{2,5})?$', 'i'),\n        phone: new RegExp('^[\\+]?[0-9)(]{7,11}$', 'i'),\n        name: new RegExp('^[а-яё]{2,20}$', 'i'),\n        message: new RegExp('[а-яё0-9.,:!?; \\-]', 'ig')\n      };\n      return patterns[pattern].test(str);\n    }\n\n    console.log(checkString('+5982551', 'phone')); // if(checkString(phone.value, 'phone') && checkString(name.value, 'name')){\n    //     postData()\n    // }\n\n    var form1 = document.getElementById('form1');\n    form1.addEventListener('submit', function (event) {\n      event.preventDefault();\n\n      if (checkString(phone.value, 'phone') && checkString(name.value, 'name')) {\n        event.target.value = event.target.value;\n      } else {\n        textMessage.textContent = \"ВВедите поля корректно\";\n      }\n    });\n  };\n\n  form();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputValidation);\n\n//# sourceURL=webpack://timer/./src/modules/inputValidation.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9b5b14950e13ae05db05")
/******/ })();
/******/ 
/******/ }
);