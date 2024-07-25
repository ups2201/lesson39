/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ (() => {

eval("/* eslint-disable */\n\n// IMPLEMENTATION\nfunction Router() {\n  let listeners = [];\n  let currentPath = location.pathname;\n  let previous = {\n    path: null,\n    state: null\n  };\n  const isMatch = (match, path) => match instanceof RegExp && match.test(path) || typeof match === \"function\" && match(path) || typeof match === \"string\" && match === path;\n  const handleListener = ({\n    match,\n    onEnter,\n    onLeave,\n    onBeforeEnter\n  }) => {\n    const args = {\n      currentPath,\n      previous,\n      state: history.state\n    };\n    onBeforeEnter && isMatch(match, currentPath) && onBeforeEnter(args);\n    isMatch(match, currentPath) && onEnter(args);\n    onLeave && isMatch(match, previous.path) && onLeave(args);\n    console.log(\"handleListener\");\n  };\n  const handleAllListeners = () => {\n    console.log(\">> handleAllListeners\");\n    console.log(listeners);\n    listeners.forEach(handleListener);\n  };\n  const generateId = () => {\n    const getRandomNumber = () => Math.floor(Math.random() * listeners.length * 1000);\n    const doesExist = id => listeners.find(listener => listener.id === id);\n    let id = getRandomNumber();\n    while (doesExist(id)) {\n      id = getRandomNumber();\n    }\n    return id;\n  };\n  const on = (match, onEnter, onLeave, onBeforeEnter) => {\n    const id = generateId();\n    const listener = {\n      id,\n      match,\n      onEnter,\n      onLeave,\n      onBeforeEnter\n    };\n    listeners.push(listener);\n    handleListener(listener);\n    return () => {\n      listeners = listeners.filter(listeners => listeners.id !== id);\n    };\n  };\n  const go = (url, state) => {\n    previous.path = currentPath;\n    previous.state = history.state;\n    history.pushState(state, url, url);\n    currentPath = location.pathname;\n    handleAllListeners();\n  };\n  window.addEventListener(\"popstate\", handleAllListeners);\n  return {\n    on,\n    go\n  };\n}\n\n// USAGE\nconst render = content => document.getElementById(\"root\").innerHTML = `<h2>${content}</h2>`;\nconst createLogger = (content, shouldRender = true) => (...args) => {\n  console.log(`LOGGER: ${content} args=${JSON.stringify(args)}`);\n  if (shouldRender) {\n    render(content);\n  }\n};\nconst router = Router();\nconst unsubscribe = router.on(/.*/, createLogger(\"/.*\"));\nrouter.on(path => path === \"/contacts\", createLogger(\"/contacts\"),\n// onEnter\ncreateLogger(\"[leaving] /contacts\", false),\n// onLeave\ncreateLogger(\"[before] /contacts\", false) // onBeforeEnter\n);\nrouter.on(\"/about\", createLogger(\"/about\"));\nrouter.on(\"/about/us\", createLogger(\"/about/us\"));\ndocument.body.addEventListener(\"click\", event => {\n  if (!event.target.matches(\"a\")) {\n    return;\n  }\n  event.preventDefault();\n  let url = event.target.getAttribute(\"href\");\n  router.go(url, {\n    url\n  });\n  unsubscribe();\n});\n\n//# sourceURL=webpack://lesson39/./src/router.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/router.js"]();
/******/ 	
/******/ })()
;