module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.js");
/* harmony import */ var _pages_Coronavirus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Coronavirus */ "./src/pages/Coronavirus.js");
/* harmony import */ var _pages_News__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/News */ "./src/pages/News.js");
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/About */ "./src/pages/About.js");

var _jsxFileName = "C:\\laragon\\www\\covid19br\\src\\App.js";








function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    className: "App",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Routes"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/",
        element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Home__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 34
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/coronavirus",
        element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Coronavirus__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/noticias",
        element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_News__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 42
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/sobre",
        element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_About__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 39
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\laragon\\www\\covid19br\\src\\components\\Card.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Div = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  flex: 1;
  min-width: 150px;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 5px;
`;

const Card = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Div, _objectSpread({
    className: "card"
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/components/CardBottom.js":
/*!**************************************!*\
  !*** ./src/components/CardBottom.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\laragon\\www\\covid19br\\src\\components\\CardBottom.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Div = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  position: relative;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;

  .atualizacao {
    margin: 5px 0;
  }
`;

const CardBottom = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Div, _objectSpread({
    className: "cardBottom"
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CardBottom);

/***/ }),

/***/ "./src/components/CardTop.js":
/*!***********************************!*\
  !*** ./src/components/CardTop.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\laragon\\www\\covid19br\\src\\components\\CardTop.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Div = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  position: relative;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #fff;
  padding-bottom: 5px;
  box-sizing: border-box;
`;

const CardTop = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Div, _objectSpread({
    className: "cardTop"
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CardTop);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./List */ "./src/components/List.js");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListItem */ "./src/components/ListItem.js");

var _jsxFileName = "C:\\laragon\\www\\covid19br\\src\\components\\Header.js";





const Cabecalho = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.header`
  width: 100%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.3);
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr) repeat(2, 3fr) repeat(2, 1fr);
  align-items: center;
`;
const Brand = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
  grid-column: 2 / 3;
  align-self: center;
  justify-self: center;
  font-size: 1rem;
  transform: scale(1, 3.5);
`;
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.nav`
  grid-column: 3 / 6;
  justify-self: flex-end;
`;

function Header() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cabecalho, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Brand, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/",
        children: ["Covid-19 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "green",
          children: "B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 20
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "yellow",
          children: "R"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Nav, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
        display: "flex",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
            to: "/",
            end: true,
            children: "In\xEDcio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
            to: "/coronavirus",
            children: "Sobre o Coronav\xEDrus"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
            to: "/noticias",
            children: "\xDAltimas Not\xEDcias"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
            to: "/sobre",
            children: "Sobre"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Image.js":
/*!*********************************!*\
  !*** ./src/components/Image.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\laragon\\www\\covid19br\\src\\components\\Image.js";


const Image = ({
  src,
  alt
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
    src: src,
    alt: alt
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/List.js":
/*!********************************!*\
  !*** ./src/components/List.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\laragon\\www\\covid19br\\src\\components\\List.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Menu = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul`
  display: ${props => props.display || "block"};
  flex-direction: ${props => props.flexDirection || "row"};
  flex-wrap: ${props => props.flexWrap || "wrap"};
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const List = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Menu, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./src/components/ListItem.js":
/*!************************************!*\
  !*** ./src/components/ListItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\laragon\\www\\covid19br\\src\\components\\ListItem.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li`
  margin: 0 1rem;
  font-size: 1.5rem;

  a {
    color: white;

    &.active {
      color: "var(--text-yellow)";
    }

    &:hover {
      text-shadow: "0 0 5px var(--text-yellow)";
    }
  }
`;

const ListItem = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuItem, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ }),

/***/ "./src/components/StatesContainer.js":
/*!*******************************************!*\
  !*** ./src/components/StatesContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\laragon\\www\\covid19br\\src\\components\\StatesContainer.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Div = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  position: relative;
  width: 100%;
  padding: 10px;
  grid-column: 2 / 6;
`;

const StatesContainer = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Div, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StatesContainer);

/***/ }),

/***/ "./src/pages/About.js":
/*!****************************!*\
  !*** ./src/pages/About.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\laragon\\www\\covid19br\\src\\pages\\About.js";


const About = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "Aqui \xE9 a p\xE1gina sobre."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/pages/Coronavirus.js":
/*!**********************************!*\
  !*** ./src/pages/Coronavirus.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\laragon\\www\\covid19br\\src\\pages\\Coronavirus.js";


const Coronavirus = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "Aqui \xE9 a pagina Coronav\xEDrus."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Coronavirus);

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/List */ "./src/components/List.js");
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ListItem */ "./src/components/ListItem.js");
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Image */ "./src/components/Image.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card.js");
/* harmony import */ var _components_StatesContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/StatesContainer */ "./src/components/StatesContainer.js");
/* harmony import */ var _components_CardTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CardTop */ "./src/components/CardTop.js");
/* harmony import */ var _components_CardBottom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CardBottom */ "./src/components/CardBottom.js");

var _jsxFileName = "C:\\laragon\\www\\covid19br\\src\\pages\\Home.js";









const Home = () => {
  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    const storage = localStorage.getItem("timestamp");
    const verify = timestampVerify();
    const localData = localStorage.getItem("dadosCovidBR");

    if (storage) {
      if (verify >= 5 || storage === 22) {
        getData();

        if (storage === 22) {
          localStorage.setItem("timestamp", 22.1);
        }
      } else {
        setData(JSON.parse(localData));
      }
    } else {
      getData();
    }
  }, []);

  function timestampVerify() {
    const time = new Date().getHours();
    const timestamp = localStorage.getItem("timestamp");
    return time - timestamp; // console.log(time);
    // console.log(timestamp);
    // console.log(time - timestamp);
    // console.log(timestamp - time);
  }

  async function getData() {
    try {
      const response = await fetch("https://covid19-brazil-api.now.sh/api/report/v1");
      const json = await response.json();
      setData(json.data); //Remover dados do localStorage

      localStorage.removeItem("dadosCovidBR");
      localStorage.removeItem("timestamp"); //Inserir dados no localStorage

      localStorage.setItem("dadosCovidBR", JSON.stringify(json.data)); //Inserir no localStorage a data que foi inserido os dados

      let timestamp = new Date().getHours();
      localStorage.setItem("timestamp", JSON.stringify(timestamp));
    } catch (err) {
      console.log("erro: " + err);
    }
  }

  if (data === null) return null;

  function formatDate(date) {
    const string = date.replace(".", "T");
    const strings = string.split("T");
    strings.pop();
    const array = strings;
    let day = array[0].split("-");
    day = day.reverse().join("/");
    const hour = array[1];
    const newDate = day + " ás " + hour;
    return newDate;
  }

  const listStates = data.map(item => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardTop__WEBPACK_IMPORTED_MODULE_7__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
            src: `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${item.uf}.png`,
            alt: item.uf
          }, item.uid, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: item.state
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardBottom__WEBPACK_IMPORTED_MODULE_8__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "atualizacao",
            children: ["Atualiza\xE7\xE3o: ", formatDate(item.datetime)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["Confirmados: ", item.cases]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["Mortes: ", item.deaths]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["Suspeitos: ", item.suspects]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["Descartados: ", item.refuses]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, undefined)]
      }, item.uid, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, undefined)
    }, item.uid, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, undefined);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "homeContent",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_StatesContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "listStates",
        display: "flex",
        children: listStates
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/News.js":
/*!***************************!*\
  !*** ./src/pages/News.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\laragon\\www\\covid19br\\src\\pages\\News.js";


const News = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "Aqui \xE9 a p\xE1gina de \xDAltimas Not\xEDcias."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App */ "./src/App.js");

var _jsxFileName = "C:\\laragon\\www\\covid19br\\src\\pages\\index.js";



react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined), document.getElementById("root"));

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmRCb3R0b20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FyZFRvcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdGF0ZXNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0Fib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Db3JvbmF2aXJ1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTmV3cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJBcHAiLCJEaXYiLCJzdHlsZWQiLCJkaXYiLCJDYXJkIiwicHJvcHMiLCJDYXJkQm90dG9tIiwiQ2FyZFRvcCIsIkNhYmVjYWxobyIsImhlYWRlciIsIkJyYW5kIiwiTmF2IiwibmF2IiwiSGVhZGVyIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJNZW51IiwidWwiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZsZXhXcmFwIiwiTGlzdCIsIk1lbnVJdGVtIiwibGkiLCJMaXN0SXRlbSIsIlN0YXRlc0NvbnRhaW5lciIsIkFib3V0IiwiQ29yb25hdmlydXMiLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ2ZXJpZnkiLCJ0aW1lc3RhbXBWZXJpZnkiLCJsb2NhbERhdGEiLCJnZXREYXRhIiwic2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInRpbWUiLCJEYXRlIiwiZ2V0SG91cnMiLCJ0aW1lc3RhbXAiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsInJlbW92ZUl0ZW0iLCJzdHJpbmdpZnkiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJzdHJpbmciLCJyZXBsYWNlIiwic3RyaW5ncyIsInNwbGl0IiwicG9wIiwiYXJyYXkiLCJkYXkiLCJyZXZlcnNlIiwiam9pbiIsImhvdXIiLCJuZXdEYXRlIiwibGlzdFN0YXRlcyIsIm1hcCIsIml0ZW0iLCJ1ZiIsInVpZCIsInN0YXRlIiwiZGF0ZXRpbWUiLCJjYXNlcyIsImRlYXRocyIsInN1c3BlY3RzIiwicmVmdXNlcyIsIk5ld3MiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEw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SUFBSSxDQUFDRSxHQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsT0FBZUYsSUFBSSxDQUFDRSxHQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBdUJELEdBeEJrQixDQUFuQjtBQXlCQSxzQkFDRTtBQUFTLGFBQVMsRUFBRSxhQUFwQjtBQUFBLDJCQUNFLHFFQUFDLG1FQUFEO0FBQUEsNkJBQ0UscUVBQUMsd0RBQUQ7QUFBTSxpQkFBUyxFQUFFLFlBQWpCO0FBQStCLGVBQU8sRUFBRSxNQUF4QztBQUFBLGtCQUNHSjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBU0QsQ0FwR0Q7O0FBc0dlekMsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9HQTs7QUFFQSxNQUFNb0QsSUFBSSxHQUFHLE1BQU07QUFDakIsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBRkQ7O0FBSWVBLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQUMsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNFLHFFQUFDLDRDQUFELENBQU8sVUFBUDtBQUFBLHlCQUNFLHFFQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFJRUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBSkYsRTs7Ozs7Ozs7Ozs7QUNKQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGUsIFJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgXCIuL0FwcC5jc3NcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL0hvbWVcIjtcbmltcG9ydCBDb3JvbmF2aXJ1cyBmcm9tIFwiLi9wYWdlcy9Db3JvbmF2aXJ1c1wiO1xuaW1wb3J0IE5ld3MgZnJvbSBcIi4vcGFnZXMvTmV3c1wiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuL3BhZ2VzL0Fib3V0XCI7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8QnJvd3NlclJvdXRlciBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XG4gICAgICA8Um91dGVzPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvY29yb25hdmlydXNcIiBlbGVtZW50PXs8Q29yb25hdmlydXMgLz59IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL25vdGljaWFzXCIgZWxlbWVudD17PE5ld3MgLz59IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL3NvYnJlXCIgZWxlbWVudD17PEFib3V0IC8+fSAvPlxuICAgICAgPC9Sb3V0ZXM+XG4gICAgPC9Ccm93c2VyUm91dGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6IDE7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgQ2FyZCA9ICh7IC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gPERpdiBjbGFzc05hbWU9e1wiY2FyZFwifSB7Li4ucHJvcHN9PjwvRGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgLmF0dWFsaXphY2FvIHtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZEJvdHRvbSA9ICh7IC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gPERpdiBjbGFzc05hbWU9e1wiY2FyZEJvdHRvbVwifSB7Li4ucHJvcHN9PjwvRGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRCb3R0b207XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkVG9wID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiA8RGl2IGNsYXNzTmFtZT17XCJjYXJkVG9wXCJ9IHsuLi5wcm9wc30+PC9EaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFRvcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rLCBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4vTGlzdEl0ZW1cIjtcclxuXHJcbmNvbnN0IENhYmVjYWxobyA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcikgcmVwZWF0KDIsIDNmcikgcmVwZWF0KDIsIDFmcik7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEJyYW5kID0gc3R5bGVkLmRpdmBcclxuICBncmlkLWNvbHVtbjogMiAvIDM7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDMuNSk7XHJcbmA7XHJcblxyXG5jb25zdCBOYXYgPSBzdHlsZWQubmF2YFxyXG4gIGdyaWQtY29sdW1uOiAzIC8gNjtcclxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FiZWNhbGhvPlxyXG4gICAgICA8QnJhbmQ+XHJcbiAgICAgICAgPExpbmsgdG89XCIvXCI+XHJcbiAgICAgICAgICBDb3ZpZC0xOSA8c3BhbiBjbGFzc05hbWU9e1wiZ3JlZW5cIn0+Qjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJ5ZWxsb3dcIn0+Ujwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvQnJhbmQ+XHJcbiAgICAgIDxOYXY+XHJcbiAgICAgICAgPExpc3QgZGlzcGxheT1cImZsZXhcIj5cclxuICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvXCIgZW5kPlxyXG4gICAgICAgICAgICAgIEluw61jaW9cclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvY29yb25hdmlydXNcIj5Tb2JyZSBvIENvcm9uYXbDrXJ1czwvTmF2TGluaz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL25vdGljaWFzXCI+w5psdGltYXMgTm90w61jaWFzPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvc29icmVcIj5Tb2JyZTwvTmF2TGluaz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L05hdj5cclxuICAgIDwvQ2FiZWNhbGhvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSW1hZ2UgPSAoeyBzcmMsIGFsdCB9KSA9PiB7XHJcbiAgcmV0dXJuIDxpbWcgc3JjPXtzcmN9IGFsdD17YWx0fSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBNZW51ID0gc3R5bGVkLnVsYFxyXG4gIGRpc3BsYXk6ICR7KHByb3BzKSA9PiBwcm9wcy5kaXNwbGF5IHx8IFwiYmxvY2tcIn07XHJcbiAgZmxleC1kaXJlY3Rpb246ICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4RGlyZWN0aW9uIHx8IFwicm93XCJ9O1xyXG4gIGZsZXgtd3JhcDogJHsocHJvcHMpID0+IHByb3BzLmZsZXhXcmFwIHx8IFwid3JhcFwifTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbmA7XHJcblxyXG5jb25zdCBMaXN0ID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiA8TWVudSB7Li4ucHJvcHN9PjwvTWVudT47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBNZW51SXRlbSA9IHN0eWxlZC5saWBcclxuICBtYXJnaW46IDAgMXJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogXCJ2YXIoLS10ZXh0LXllbGxvdylcIjtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1zaGFkb3c6IFwiMCAwIDVweCB2YXIoLS10ZXh0LXllbGxvdylcIjtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBMaXN0SXRlbSA9ICh7IC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gPE1lbnVJdGVtIHsuLi5wcm9wc30+PC9NZW51SXRlbT47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgRGl2ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBncmlkLWNvbHVtbjogMiAvIDY7XHJcbmA7XHJcblxyXG5jb25zdCBTdGF0ZXNDb250YWluZXIgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIDxEaXYgey4uLnByb3BzfT48L0Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0ZXNDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG4gIHJldHVybiA8ZGl2PkFxdWkgw6kgYSBww6FnaW5hIHNvYnJlLjwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDb3JvbmF2aXJ1cyA9ICgpID0+IHtcclxuICByZXR1cm4gPGRpdj5BcXVpIMOpIGEgcGFnaW5hIENvcm9uYXbDrXJ1cy48L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3JvbmF2aXJ1cztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW1hZ2VcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xyXG5pbXBvcnQgU3RhdGVzQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1N0YXRlc0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgQ2FyZFRvcCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkVG9wXCI7XHJcbmltcG9ydCBDYXJkQm90dG9tIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRCb3R0b21cIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aW1lc3RhbXBcIik7XHJcbiAgICBjb25zdCB2ZXJpZnkgPSB0aW1lc3RhbXBWZXJpZnkoKTtcclxuICAgIGNvbnN0IGxvY2FsRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGFkb3NDb3ZpZEJSXCIpO1xyXG4gICAgaWYgKHN0b3JhZ2UpIHtcclxuICAgICAgaWYgKHZlcmlmeSA+PSA1IHx8IHN0b3JhZ2UgPT09IDIyKSB7XHJcbiAgICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgICAgIGlmIChzdG9yYWdlID09PSAyMikge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aW1lc3RhbXBcIiwgMjIuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldERhdGEoSlNPTi5wYXJzZShsb2NhbERhdGEpKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gdGltZXN0YW1wVmVyaWZ5KCkge1xyXG4gICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcclxuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGltZXN0YW1wXCIpO1xyXG5cclxuICAgIHJldHVybiB0aW1lIC0gdGltZXN0YW1wO1xyXG4gICAgLy8gY29uc29sZS5sb2codGltZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aW1lc3RhbXApO1xyXG4gICAgLy8gY29uc29sZS5sb2codGltZSAtIHRpbWVzdGFtcCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aW1lc3RhbXAgLSB0aW1lKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIFwiaHR0cHM6Ly9jb3ZpZDE5LWJyYXppbC1hcGkubm93LnNoL2FwaS9yZXBvcnQvdjFcIlxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXREYXRhKGpzb24uZGF0YSk7XHJcbiAgICAgIC8vUmVtb3ZlciBkYWRvcyBkbyBsb2NhbFN0b3JhZ2VcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJkYWRvc0NvdmlkQlJcIik7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidGltZXN0YW1wXCIpO1xyXG4gICAgICAvL0luc2VyaXIgZGFkb3Mgbm8gbG9jYWxTdG9yYWdlXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGFkb3NDb3ZpZEJSXCIsIEpTT04uc3RyaW5naWZ5KGpzb24uZGF0YSkpO1xyXG4gICAgICAvL0luc2VyaXIgbm8gbG9jYWxTdG9yYWdlIGEgZGF0YSBxdWUgZm9pIGluc2VyaWRvIG9zIGRhZG9zXHJcbiAgICAgIGxldCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGltZXN0YW1wXCIsIEpTT04uc3RyaW5naWZ5KHRpbWVzdGFtcCkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJybzogXCIgKyBlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBudWxsO1xyXG5cclxuICBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcclxuICAgIGNvbnN0IHN0cmluZyA9IGRhdGUucmVwbGFjZShcIi5cIiwgXCJUXCIpO1xyXG4gICAgY29uc3Qgc3RyaW5ncyA9IHN0cmluZy5zcGxpdChcIlRcIik7XHJcbiAgICBzdHJpbmdzLnBvcCgpO1xyXG4gICAgY29uc3QgYXJyYXkgPSBzdHJpbmdzO1xyXG4gICAgbGV0IGRheSA9IGFycmF5WzBdLnNwbGl0KFwiLVwiKTtcclxuICAgIGRheSA9IGRheS5yZXZlcnNlKCkuam9pbihcIi9cIik7XHJcbiAgICBjb25zdCBob3VyID0gYXJyYXlbMV07XHJcbiAgICBjb25zdCBuZXdEYXRlID0gZGF5ICsgXCIgw6FzIFwiICsgaG91cjtcclxuICAgIHJldHVybiBuZXdEYXRlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbGlzdFN0YXRlcyA9IGRhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGlzdEl0ZW0ga2V5PXtpdGVtLnVpZH0+XHJcbiAgICAgICAgPENhcmQga2V5PXtpdGVtLnVpZH0+XHJcbiAgICAgICAgICA8Q2FyZFRvcD5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9kZXZhcnRodXJyaWJlaXJvLmdpdGh1Yi5pby9jb3ZpZDE5LWJyYXppbC1hcGkvc3RhdGljL2ZsYWdzLyR7aXRlbS51Zn0ucG5nYH1cclxuICAgICAgICAgICAgICBhbHQ9e2l0ZW0udWZ9XHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLnVpZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgzPntpdGVtLnN0YXRlfTwvaDM+XHJcbiAgICAgICAgICA8L0NhcmRUb3A+XHJcbiAgICAgICAgICA8Q2FyZEJvdHRvbT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImF0dWFsaXphY2FvXCJ9PlxyXG4gICAgICAgICAgICAgIEF0dWFsaXphw6fDo286IHtmb3JtYXREYXRlKGl0ZW0uZGF0ZXRpbWUpfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPkNvbmZpcm1hZG9zOiB7aXRlbS5jYXNlc308L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPk1vcnRlczoge2l0ZW0uZGVhdGhzfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+U3VzcGVpdG9zOiB7aXRlbS5zdXNwZWN0c308L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPkRlc2NhcnRhZG9zOiB7aXRlbS5yZWZ1c2VzfTwvc3Bhbj5cclxuICAgICAgICAgIDwvQ2FyZEJvdHRvbT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICApO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1wiaG9tZUNvbnRlbnRcIn0+XHJcbiAgICAgIDxTdGF0ZXNDb250YWluZXI+XHJcbiAgICAgICAgPExpc3QgY2xhc3NOYW1lPXtcImxpc3RTdGF0ZXNcIn0gZGlzcGxheT17XCJmbGV4XCJ9PlxyXG4gICAgICAgICAge2xpc3RTdGF0ZXN9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L1N0YXRlc0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTmV3cyA9ICgpID0+IHtcclxuICByZXR1cm4gPGRpdj5BcXVpIMOpIGEgcMOhZ2luYSBkZSDDmmx0aW1hcyBOb3TDrWNpYXMuPC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3cztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL0FwcFwiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxBcHAgLz5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXG4pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=