/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Routers.ts":
/*!************************!*\
  !*** ./src/Routers.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Routers: () => (/* binding */ Routers)\n/* harmony export */ });\nclass Routers {\n  currentPath = window.location.pathname;\n  previous = {\n    path: \"\",\n    state: undefined\n  };\n  routers = [];\n  constructor() {\n    window.addEventListener(\"popstate\", this.handleAllListeners.bind(this));\n    this.handleAllListeners();\n  }\n  addRoute(route) {\n    console.log(route);\n    const id = this.generateId();\n    route.id = id;\n    this.routers.push(route);\n    return () => {\n      this.routers = this.routers.filter(router => router.id !== id);\n    };\n  }\n  go(url, state) {\n    this.previous.path = this.currentPath;\n    this.previous.state = history.state;\n    history.pushState(state, url, url);\n    this.currentPath = location.pathname;\n    this.handleAllListeners();\n  }\n  handleAllListeners() {\n    this.routers.forEach(route => {\n      const args = {\n        url: this.currentPath,\n        state: history.state,\n        previous: this.previous\n      };\n      route.onBeforeEnter && this.isMatch(route.match, this.currentPath) && route.onBeforeEnter(args);\n      this.isMatch(route.match, this.currentPath) && route.onEnter(args);\n      route.onLeave && this.isMatch(route.match, this.previous.path) && route.onLeave(args);\n    });\n  }\n  generateId() {\n    const getRandomNumber = () => Math.floor(Math.random() * this.routers.length * 1000);\n    const doesExist = id => this.routers.find(router => router.id === id);\n    let id = getRandomNumber();\n    while (doesExist(id)) {\n      id = getRandomNumber();\n    }\n    return id;\n  }\n  isMatch(match, path) {\n    if (match instanceof RegExp) {\n      return match.test(path);\n    }\n    if (typeof match === \"function\") {\n      return match(path);\n    }\n    return match === path;\n  }\n}\n\n//# sourceURL=webpack://lesson39/./src/Routers.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Routers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Routers */ \"./src/Routers.ts\");\n\nconst render = content => document.getElementById(\"root\").innerHTML = `<h2>${content}</h2>`;\nconst createLogger = (content, shouldRender = true) => (...args) => {\n  console.log(`LOGGER: ${content} args=${JSON.stringify(args)}`);\n  if (shouldRender) {\n    render(content);\n  }\n};\nconst routers = new _Routers__WEBPACK_IMPORTED_MODULE_0__.Routers();\nconst route1 = {\n  match: path => path === \"/contacts\",\n  onBeforeEnter: createLogger(\"[before] /contacts\", false),\n  onEnter: createLogger(\"/contacts\"),\n  onLeave: createLogger(\"[leaving] /contacts\", false)\n};\nrouters.addRoute(route1);\nconst route2 = {\n  match: \"/about\",\n  onEnter: createLogger(\"/about\")\n};\nrouters.addRoute(route2);\nconst route3 = {\n  match: \"/about/us\",\n  onEnter: createLogger(\"/about/us\")\n};\nrouters.addRoute(route3);\nconst route5 = {\n  match: \"/\",\n  onEnter: createLogger(\"/\")\n};\nrouters.addRoute(route5);\nconst route4 = {\n  match: /.*/,\n  onEnter: createLogger(\"/.*\")\n};\nconst unsubscribe = routers.addRoute(route4);\ndocument.body.addEventListener(\"click\", event => {\n  if (!event.target.matches(\"a\")) {\n    return;\n  }\n  event.preventDefault();\n  const url = event.target.getAttribute(\"href\");\n  routers.go(url, {\n    url\n  });\n  unsubscribe();\n});\n\n//# sourceURL=webpack://lesson39/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;