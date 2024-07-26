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

/***/ "./src/RouterFactory.ts":
/*!******************************!*\
  !*** ./src/RouterFactory.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RouterFactory: () => (/* binding */ RouterFactory),\n/* harmony export */   RouterMode: () => (/* binding */ RouterMode)\n/* harmony export */ });\n/* harmony import */ var _RouterHash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RouterHash */ \"./src/RouterHash.ts\");\n/* harmony import */ var _RouterHistory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RouterHistory */ \"./src/RouterHistory.ts\");\n\n\nlet RouterMode = /*#__PURE__*/function (RouterMode) {\n  RouterMode[RouterMode[\"HASH_API\"] = 0] = \"HASH_API\";\n  RouterMode[RouterMode[\"HISTORY_API\"] = 1] = \"HISTORY_API\";\n  return RouterMode;\n}({});\nclass RouterFactory {\n  create(mode) {\n    switch (mode) {\n      case RouterMode.HASH_API:\n        {\n          return new _RouterHash__WEBPACK_IMPORTED_MODULE_0__.RouterHash();\n        }\n      case RouterMode.HISTORY_API:\n        {\n          return new _RouterHistory__WEBPACK_IMPORTED_MODULE_1__.RouterHistory();\n        }\n    }\n  }\n}\n\n//# sourceURL=webpack://lesson39/./src/RouterFactory.ts?");

/***/ }),

/***/ "./src/RouterHash.ts":
/*!***************************!*\
  !*** ./src/RouterHash.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RouterHash: () => (/* binding */ RouterHash)\n/* harmony export */ });\n/* harmony import */ var _RouterParent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RouterParent */ \"./src/RouterParent.ts\");\n\nclass RouterHash extends _RouterParent__WEBPACK_IMPORTED_MODULE_0__.RouterParent {\n  constructor() {\n    super();\n    window.addEventListener(\"hashchange\", this.handleAllListeners.bind(this));\n    this.handleAllListeners();\n  }\n  go(url, state) {\n    this.previous.path = this.currentPath;\n    this.previous.state = this.state;\n    location.hash = url;\n    this.currentPath = location.hash;\n    this.state = state;\n    this.handleAllListeners();\n  }\n}\n\n//# sourceURL=webpack://lesson39/./src/RouterHash.ts?");

/***/ }),

/***/ "./src/RouterHistory.ts":
/*!******************************!*\
  !*** ./src/RouterHistory.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RouterHistory: () => (/* binding */ RouterHistory)\n/* harmony export */ });\n/* harmony import */ var _RouterParent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RouterParent */ \"./src/RouterParent.ts\");\n\nclass RouterHistory extends _RouterParent__WEBPACK_IMPORTED_MODULE_0__.RouterParent {\n  constructor() {\n    super();\n    window.addEventListener(\"popstate\", this.handleAllListeners.bind(this));\n    this.handleAllListeners();\n  }\n  go(url, state) {\n    this.previous.path = this.currentPath;\n    this.previous.state = history.state;\n    history.pushState(state, url, url);\n    this.currentPath = location.pathname;\n    this.handleAllListeners();\n  }\n}\n\n//# sourceURL=webpack://lesson39/./src/RouterHistory.ts?");

/***/ }),

/***/ "./src/RouterParent.ts":
/*!*****************************!*\
  !*** ./src/RouterParent.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RouterParent: () => (/* binding */ RouterParent)\n/* harmony export */ });\nclass RouterParent {\n  currentPath = window.location.pathname;\n  previous = {\n    path: \"\",\n    state: undefined\n  };\n  routers = [];\n  getState() {\n    return this.state;\n  }\n  addRoute(route) {\n    console.log(route);\n    const id = this.generateId();\n    route.id = id;\n    this.routers.push(route);\n    return () => {\n      this.routers = this.routers.filter(router => router.id !== id);\n    };\n  }\n  handleAllListeners() {\n    this.routers.forEach(route => {\n      const args = {\n        url: this.currentPath,\n        state: this.getState(),\n        previous: this.previous\n      };\n      route.onBeforeEnter && this.isMatch(route.match, this.currentPath) && route.onBeforeEnter(args);\n      this.isMatch(route.match, this.currentPath) && route.onEnter(args);\n      route.onLeave && this.isMatch(route.match, this.previous.path) && route.onLeave(args);\n    });\n  }\n  generateId() {\n    const getRandomNumber = () => Math.floor(Math.random() * this.routers.length * 1000);\n    const doesExist = id => this.routers.find(router => router.id === id);\n    let id = getRandomNumber();\n    while (doesExist(id)) {\n      id = getRandomNumber();\n    }\n    return id;\n  }\n  isMatch(match, path) {\n    if (match instanceof RegExp) {\n      return match.test(path);\n    }\n    if (typeof match === \"function\") {\n      return match(path);\n    }\n    return match === path;\n  }\n  go(url, state) {}\n}\n\n//# sourceURL=webpack://lesson39/./src/RouterParent.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RouterFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RouterFactory */ \"./src/RouterFactory.ts\");\n\nconst render = content => document.getElementById(\"root\").innerHTML = `<h2>${content}</h2>`;\nconst createLogger = (content, shouldRender = true) => (...args) => {\n  console.log(`LOGGER: ${content} args=${JSON.stringify(args)}`);\n  if (shouldRender) {\n    render(content);\n  }\n};\nconst routers = new _RouterFactory__WEBPACK_IMPORTED_MODULE_0__.RouterFactory().create(_RouterFactory__WEBPACK_IMPORTED_MODULE_0__.RouterMode.HISTORY_API);\nconst route1 = {\n  match: path => path === \"/contacts\",\n  onBeforeEnter: createLogger(\"[before] /contacts\", false),\n  onEnter: createLogger(\"/contacts\"),\n  onLeave: createLogger(\"[leaving] /contacts\", false)\n};\nrouters.addRoute(route1);\nconst route2 = {\n  match: \"/about\",\n  onEnter: createLogger(\"/about\")\n};\nrouters.addRoute(route2);\nconst route3 = {\n  match: \"/about/us\",\n  onEnter: createLogger(\"/about/us\")\n};\nrouters.addRoute(route3);\nconst route5 = {\n  match: \"/\",\n  onEnter: createLogger(\"/\")\n};\nrouters.addRoute(route5);\nconst route4 = {\n  match: /.*/,\n  onEnter: createLogger(\"/.*\")\n};\nconst unsubscribe = routers.addRoute(route4);\n\n// const routers = new RouterFactory().create(RouterMode.HASH_API);\n//\n// const route1:Route = {\n//     match: (path) => path === \"#/contacts\",\n//     onBeforeEnter: createLogger(\"[before] #/contacts\", false),\n//     onEnter: createLogger(\"#/contacts\"),\n//     onLeave: createLogger(\"[leaving] #/contacts\", false),\n// };\n// routers.addRoute(route1)\n//\n// const route2:Route = {\n//     match: \"#/about\",\n//     onEnter: createLogger(\"#/about\"),\n// };\n// routers.addRoute(route2)\n//\n// const route3:Route = {\n//     match: \"#/about/us\",\n//     onEnter: createLogger(\"#/about/us\"),\n// };\n// routers.addRoute(route3)\n//\n// const route5:Route = {\n//     match: \"#/\",\n//     onEnter: createLogger(\"#/\"),\n// };\n// routers.addRoute(route5)\n//\n// const route4:Route = {\n//     match: /.*/,\n//     onEnter: createLogger(\"#/\"),\n// };\n//\n// const unsubscribe = routers.addRoute(route4);\n\ndocument.body.addEventListener(\"click\", event => {\n  if (!event.target.matches(\"a\")) {\n    return;\n  }\n  event.preventDefault();\n  const url = event.target.getAttribute(\"href\");\n  routers.go(url, {\n    url\n  });\n  unsubscribe();\n});\n\n//# sourceURL=webpack://lesson39/./src/index.ts?");

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