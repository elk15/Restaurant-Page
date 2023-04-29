/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! imgs/menu.svg */ "./src/imgs/menu.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! imgs/close.svg */ "./src/imgs/close.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --main-color: #701515;\n    --main-font: 'Cormorant Garamond', serif;\n    --tall-pic-height: 700px;\n    --short-pic-height: 350px;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Hero Image for each page */\n\n.hero-img {\n    position: relative;\n    width: 100%;\n    padding-top: 10px;\n    z-index: -100;\n    \n}\n\n.hero-img img{\n    display: block;\n    width: 100%;\n    height: auto;\n}\n\n.hero-img .logo {\n    position: absolute;\n    width: 200px;\n    bottom: 5%;\n    left: calc(50% - 100px);\n\n    \n}\n\n/* Description for each page */\n\n.description-wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-family: var(--main-font);\n    font-size: 1.2rem;\n    max-width: 1000px;\n    padding: 10px;\n}\n\n.description-wrapper h2 {\n    text-align: center;\n    font-style: italic;\n    font-weight: 700;\n    font-size: 3rem;\n}\n\n/* Main content and and nav bar */\n\n#content {\n    display: flex;\n    min-height: 100vh;\n}\n\n.header {\n    flex: 0 1 250px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    padding: 15px;\n    background-color: #FFF;\n    position: sticky;\n    top: 0;\n    height: 100%;\n}\n\nmain {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    padding: 0 10px;\n    gap: 80px;\n    align-items: center;\n    padding-bottom: 80px;\n\n}\n\n.logo {\n    width: 200px;\n}\n\n.location {\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    padding: 20px;\n    padding-top: 30px;\n    padding-bottom: 30px;\n}\n\n.location a{\n    text-decoration: none;\n    color: var(--main-color);\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    font-family: var(--main-font);\n    font-style: italic;\n    font-weight: 400;\n    font-size: 1.2rem;\n}\n\n.location a:hover{\n    color: #000;\n}\n\nnav ul {\n    list-style-type: none;\n    color: var(--main-color);\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    align-items: center;\n    font-family: var(--main-font);\n    font-weight: 700;\n    font-size: 1.2rem;\n}\n\n.open-icon, .close-icon {\n    background-color: var(--main-color);\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    width: 50px;\n    height: 50px;\n    display: none;\n}\n\n.close-icon {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nnav ul li:hover{\n    cursor: pointer;\n    color: #000;\n}\n\n/* Homepage */\n\n.images-grid {\n    flex: 1;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n}\n\n.col {\n    flex: 1;\n    max-width: 50%;\n}\n\n.col .img {\n  width: 100%;\n  margin-top: 10px;\n  vertical-align: middle;\n}\n\n.description {\n    text-align: center;\n    width: 70%;\n    font-family: var(--main-font);\n    font-weight: 400;\n    font-style: italic;\n    font-size: 2rem;\n}\n\n.lower-grid {\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 10px;\n}\n\n.lower-grid .row {\n    display: flex;\n    gap: 10px;\n}\n\n.lower-grid .img {\n    flex: 1;\n    width: 100%;\n}\n\n.menu-div, .location-div {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    \n}\n\n.text-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 20px;\n    padding: 50px 50px ;\n    font-family: var(--main-font);\n    font-size: 1.3rem;\n}\n\n.text-wrapper h2 {\n    font-weight: 700;\n    font-style: italic;\n    font-size: 2.6rem;\n}\n\n.text-wrapper p {\n    font-weight: 400;\n}\n\n.lower-grid .btn {\n    width: 200px;\n    padding: 10px;\n    background-color: #FFF;\n    border: 1px solid var(--main-color);\n    color: var(--main-color);\n    margin-top: 50px;\n    font-family: var(--main-font);\n    font-weight: 600;\n    font-size: 1.1rem;\n}\n\n.lower-grid .btn:hover {\n    cursor: pointer;\n    border: 1px solid #000;\n    color: #000;\n}\n\n/* Menu Css */\n.menus-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    max-width: 1000px;\n    gap: 15px;\n    font-family: var(--main-font);\n    font-size: 1.3rem;\n}\n\n.menu-section {\n    max-width: 450px;\n    padding: 15px;\n}\n\n.menu-section h3 {\n    padding-bottom: 20px;\n    font-style: italic;\n    font-weight: 700;\n}\n\n.menu-section ul {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.menu-section li p {\n    font-style: italic;\n    padding-top: 10px;\n}\n\n.menu-section li h4 {\n    display: flex;\n    justify-content: space-between;\n}\n\n/* Hours and Location Page */\n\n.hours-location {\n    display: flex;\n    width: 600px;\n    justify-content: space-between;\n    font-family: var(--main-font);\n    font-weight: 400;\n    font-size: 1.3rem;\n}\n\n.map iframe{\n    width: 600px;\n    height: 450px;\n}\n\n\n@media only screen and (max-width: 980px) {\n    #content{\n        flex-direction: column;\n    }\n\n    .header {\n        flex: 0 1 100px;\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-around;\n    }\n\n    .logo {\n        width: 150px;\n    }\n\n    .location{\n        display: none;\n    }\n\n    nav ul{\n        display: none;\n    }\n\n    .open-icon, .close-icon {\n        display: inline-block;\n    }\n\n\n    .responsive-nav {\n        width: 100%;\n        min-height: calc(100vh - 100px);\n        display: flex;\n        padding-top: 20px;\n        position: absolute;\n        top: 100px;\n        left: 0;\n        background-color: #FFF;\n        border-top: 1px gray solid;\n    }\n\n    .description{\n        width: 95%;\n    }\n\n    .lower-grid .row {\n        flex-direction: column-reverse;\n    }\n\n\n    .menu-div, .location-div {\n        min-height: 400px;\n    }\n\n    .lower-grid > .row ~.row {\n        flex-direction: column;\n    }\n\n    .text-wrapper {\n        padding: 20px 20px;\n    }\n\n    .hero-img .logo {\n        width: 100px;\n        left: calc(50vw - 50px);\n    }\n\n    .menus-container {\n        justify-content: center;\n    }\n    \n}\n\n@media only screen and (max-width: 600px) {\n    .images-grid {\n        flex-direction: column;\n        gap: 0;\n    }\n\n    .col {\n        max-width: 100%;\n    }\n\n    .description{\n        width: 100%;\n    }\n    \n    .map iframe, .hours-location{\n        width: 300px;\n    }\n\n    .hours-location {\n        flex-direction: column;\n        gap: 20px;\n    }\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap');\n\n:root{\n    --main-color: #701515;\n    --main-font: 'Cormorant Garamond', serif;\n    --tall-pic-height: 700px;\n    --short-pic-height: 350px;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Hero Image for each page */\n\n.hero-img {\n    position: relative;\n    width: 100%;\n    padding-top: 10px;\n    z-index: -100;\n    \n}\n\n.hero-img img{\n    display: block;\n    width: 100%;\n    height: auto;\n}\n\n.hero-img .logo {\n    position: absolute;\n    width: 200px;\n    bottom: 5%;\n    left: calc(50% - 100px);\n\n    \n}\n\n/* Description for each page */\n\n.description-wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-family: var(--main-font);\n    font-size: 1.2rem;\n    max-width: 1000px;\n    padding: 10px;\n}\n\n.description-wrapper h2 {\n    text-align: center;\n    font-style: italic;\n    font-weight: 700;\n    font-size: 3rem;\n}\n\n/* Main content and and nav bar */\n\n#content {\n    display: flex;\n    min-height: 100vh;\n}\n\n.header {\n    flex: 0 1 250px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    padding: 15px;\n    background-color: #FFF;\n    position: sticky;\n    top: 0;\n    height: 100%;\n}\n\nmain {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    padding: 0 10px;\n    gap: 80px;\n    align-items: center;\n    padding-bottom: 80px;\n\n}\n\n.logo {\n    width: 200px;\n}\n\n.location {\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    padding: 20px;\n    padding-top: 30px;\n    padding-bottom: 30px;\n}\n\n.location a{\n    text-decoration: none;\n    color: var(--main-color);\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    font-family: var(--main-font);\n    font-style: italic;\n    font-weight: 400;\n    font-size: 1.2rem;\n}\n\n.location a:hover{\n    color: #000;\n}\n\nnav ul {\n    list-style-type: none;\n    color: var(--main-color);\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    align-items: center;\n    font-family: var(--main-font);\n    font-weight: 700;\n    font-size: 1.2rem;\n}\n\n.open-icon, .close-icon {\n    background-color: var(--main-color);\n    -webkit-mask-image: url('imgs/menu.svg');\n    mask-image: url('imgs/menu.svg');\n    background-repeat: no-repeat;\n    width: 50px;\n    height: 50px;\n    display: none;\n}\n\n.close-icon {\n    -webkit-mask-image: url('imgs/close.svg');\n    mask-image: url('imgs/close.svg');\n}\n\nnav ul li:hover{\n    cursor: pointer;\n    color: #000;\n}\n\n/* Homepage */\n\n.images-grid {\n    flex: 1;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n}\n\n.col {\n    flex: 1;\n    max-width: 50%;\n}\n\n.col .img {\n  width: 100%;\n  margin-top: 10px;\n  vertical-align: middle;\n}\n\n.description {\n    text-align: center;\n    width: 70%;\n    font-family: var(--main-font);\n    font-weight: 400;\n    font-style: italic;\n    font-size: 2rem;\n}\n\n.lower-grid {\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 10px;\n}\n\n.lower-grid .row {\n    display: flex;\n    gap: 10px;\n}\n\n.lower-grid .img {\n    flex: 1;\n    width: 100%;\n}\n\n.menu-div, .location-div {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    \n}\n\n.text-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 20px;\n    padding: 50px 50px ;\n    font-family: var(--main-font);\n    font-size: 1.3rem;\n}\n\n.text-wrapper h2 {\n    font-weight: 700;\n    font-style: italic;\n    font-size: 2.6rem;\n}\n\n.text-wrapper p {\n    font-weight: 400;\n}\n\n.lower-grid .btn {\n    width: 200px;\n    padding: 10px;\n    background-color: #FFF;\n    border: 1px solid var(--main-color);\n    color: var(--main-color);\n    margin-top: 50px;\n    font-family: var(--main-font);\n    font-weight: 600;\n    font-size: 1.1rem;\n}\n\n.lower-grid .btn:hover {\n    cursor: pointer;\n    border: 1px solid #000;\n    color: #000;\n}\n\n/* Menu Css */\n.menus-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    max-width: 1000px;\n    gap: 15px;\n    font-family: var(--main-font);\n    font-size: 1.3rem;\n}\n\n.menu-section {\n    max-width: 450px;\n    padding: 15px;\n}\n\n.menu-section h3 {\n    padding-bottom: 20px;\n    font-style: italic;\n    font-weight: 700;\n}\n\n.menu-section ul {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.menu-section li p {\n    font-style: italic;\n    padding-top: 10px;\n}\n\n.menu-section li h4 {\n    display: flex;\n    justify-content: space-between;\n}\n\n/* Hours and Location Page */\n\n.hours-location {\n    display: flex;\n    width: 600px;\n    justify-content: space-between;\n    font-family: var(--main-font);\n    font-weight: 400;\n    font-size: 1.3rem;\n}\n\n.map iframe{\n    width: 600px;\n    height: 450px;\n}\n\n\n@media only screen and (max-width: 980px) {\n    #content{\n        flex-direction: column;\n    }\n\n    .header {\n        flex: 0 1 100px;\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-around;\n    }\n\n    .logo {\n        width: 150px;\n    }\n\n    .location{\n        display: none;\n    }\n\n    nav ul{\n        display: none;\n    }\n\n    .open-icon, .close-icon {\n        display: inline-block;\n    }\n\n\n    .responsive-nav {\n        width: 100%;\n        min-height: calc(100vh - 100px);\n        display: flex;\n        padding-top: 20px;\n        position: absolute;\n        top: 100px;\n        left: 0;\n        background-color: #FFF;\n        border-top: 1px gray solid;\n    }\n\n    .description{\n        width: 95%;\n    }\n\n    .lower-grid .row {\n        flex-direction: column-reverse;\n    }\n\n\n    .menu-div, .location-div {\n        min-height: 400px;\n    }\n\n    .lower-grid > .row ~.row {\n        flex-direction: column;\n    }\n\n    .text-wrapper {\n        padding: 20px 20px;\n    }\n\n    .hero-img .logo {\n        width: 100px;\n        left: calc(50vw - 50px);\n    }\n\n    .menus-container {\n        justify-content: center;\n    }\n    \n}\n\n@media only screen and (max-width: 600px) {\n    .images-grid {\n        flex-direction: column;\n        gap: 0;\n    }\n\n    .col {\n        max-width: 100%;\n    }\n\n    .description{\n        width: 100%;\n    }\n    \n    .map iframe, .hours-location{\n        width: 300px;\n    }\n\n    .hours-location {\n        flex-direction: column;\n        gap: 20px;\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/community.js":
/*!**************************!*\
  !*** ./src/community.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_community_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/community.jpg */ "./src/imgs/community.jpg");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");



const createCommunity = (() => {
    const main = document.createElement('main');
    main.appendChild((0,_util__WEBPACK_IMPORTED_MODULE_1__.createHeroImage)(_imgs_community_jpg__WEBPACK_IMPORTED_MODULE_0__));
    const description = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createDescription)('Community', 'At our restaurant, we believe in the power of giving back to the community that has supported us throughout the years. We have formed strong partnerships with local charities and organizations, collaborating on initiatives to make a positive impact. One of our proudest achievements is our ongoing commitment to feeding the homeless and refugees in our community. Through regular meal donations and volunteer efforts, we strive to provide nourishment and a sense of hope to those in need. We believe that everyone deserves a warm meal and a welcoming environment, and we are dedicated to creating just that.<br> In addition to our support for the homeless and refugees, we have created a warm and supportive environment for vulnerable individuals within our community. We have established programs to provide job training and opportunities for those facing employment challenges, helping them gain valuable skills and regain their confidence. Furthermore, we frequently host fundraising events and charity dinners, where proceeds are directed towards local causes that focus on education, healthcare, and social welfare. We are proud to be a restaurant that not only serves exquisite cuisine but also serves as a pillar of support and compassion for our community, standing side by side with those who need it most.');
    main.appendChild(description);

    return {
        main,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCommunity);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_dish1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/dish1.jpg */ "./src/imgs/dish1.jpg");
/* harmony import */ var _imgs_dish2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/dish2.jpg */ "./src/imgs/dish2.jpg");
/* harmony import */ var _imgs_dish3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/dish3.jpg */ "./src/imgs/dish3.jpg");
/* harmony import */ var _imgs_dish4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/dish4.jpg */ "./src/imgs/dish4.jpg");
/* harmony import */ var _imgs_dish5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/dish5.jpg */ "./src/imgs/dish5.jpg");
/* harmony import */ var _imgs_dish6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgs/dish6.jpg */ "./src/imgs/dish6.jpg");
/* harmony import */ var _imgs_dish7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imgs/dish7.jpg */ "./src/imgs/dish7.jpg");
/* harmony import */ var _imgs_dish8_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imgs/dish8.jpg */ "./src/imgs/dish8.jpg");
/* harmony import */ var _imgs_menu_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./imgs/menu.jpg */ "./src/imgs/menu.jpg");
/* harmony import */ var _imgs_location_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./imgs/location.jpg */ "./src/imgs/location.jpg");











const images = [_imgs_dish1_jpg__WEBPACK_IMPORTED_MODULE_0__, _imgs_dish2_jpg__WEBPACK_IMPORTED_MODULE_1__, _imgs_dish3_jpg__WEBPACK_IMPORTED_MODULE_2__, _imgs_dish4_jpg__WEBPACK_IMPORTED_MODULE_3__, _imgs_dish5_jpg__WEBPACK_IMPORTED_MODULE_4__, _imgs_dish6_jpg__WEBPACK_IMPORTED_MODULE_5__, _imgs_dish7_jpg__WEBPACK_IMPORTED_MODULE_6__, _imgs_dish8_jpg__WEBPACK_IMPORTED_MODULE_7__];

const appendImages = (image, parent) => {
    const newImage = new Image();
    newImage.src = image;
    newImage.classList.add('img');
    parent.appendChild(newImage);
};

const createHome = (() => {
    const main = document.createElement('main');

    const imagesGrid = document.createElement('div');
    imagesGrid.classList.add('images-grid');
    const gridColumn1 = document.createElement('div');
    gridColumn1.classList.add('col');
    const gridColumn2 = document.createElement('div');
    gridColumn2.classList.add('col');
    imagesGrid.appendChild(gridColumn1);
    imagesGrid.appendChild(gridColumn2);

    for (let i = 0; i < 8; i++) {
        if ((i + 1) % 2 == 0) {
            appendImages(images[i], gridColumn2);
        } else {
            appendImages(images[i], gridColumn1);
        }
    }

    main.appendChild(imagesGrid);

    const mainDescription = document.createElement('h2');
    mainDescription.textContent = 'Our fine dining restaurant offers an elegant ambiance, a tantalizing menu of classic French cuisine, and impeccable service, creating an unforgettable dining experience.';
    mainDescription.classList.add('description');
    main.appendChild(mainDescription);

    const lowerGrid = document.createElement('div');
    lowerGrid.classList.add('lower-grid');

    const textWrapper1 = document.createElement('div');
    textWrapper1.classList.add('text-wrapper');
    const textWrapper2 = document.createElement('div');
    textWrapper2.classList.add('text-wrapper');

    const row1 = document.createElement('div');
    row1.classList.add('row');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Menu';
    const menuText = document.createElement('p');
    menuText.textContent = 'Indulge in an exquisite culinary journey through France with our menu, crafted to delight your senses and satisfy your appetite.';
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'MENU';
    menuBtn.classList.add('btn');
    textWrapper1.appendChild(menuTitle);
    textWrapper1.appendChild(menuText);
    textWrapper1.appendChild(menuBtn);
    menuDiv.appendChild(textWrapper1);
    row1.appendChild(menuDiv);
    appendImages(_imgs_menu_jpg__WEBPACK_IMPORTED_MODULE_8__, row1);

    const row2 = document.createElement('div');
    row2.classList.add('row');
    const locationDiv = document.createElement('div');
    locationDiv.classList.add('location-div');
    const locationTitle = document.createElement('h2');
    locationTitle.textContent = 'Location';
    const locationText = document.createElement('p');
    locationText.textContent = ' Nestled in the heart of the city, our restaurant offers an idyllic and charming setting that will transport you to the French countryside. ';
    const locationBtn = document.createElement('button');
    locationBtn.textContent = 'HOURS & LOCATION';
    locationBtn.classList.add('btn');
    textWrapper2.appendChild(locationTitle);
    textWrapper2.appendChild(locationText);
    textWrapper2.appendChild(locationBtn);
    locationDiv.appendChild(textWrapper2);
    appendImages(_imgs_location_jpg__WEBPACK_IMPORTED_MODULE_9__, row2);
    row2.appendChild(locationDiv);

    lowerGrid.appendChild(row1);
    lowerGrid.appendChild(row2);
    main.appendChild(lowerGrid);
    return {
        main,
        menuBtn,
        locationBtn,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);


/***/ }),

/***/ "./src/location.js":
/*!*************************!*\
  !*** ./src/location.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_hoursAndLocation_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/hoursAndLocation.jpg */ "./src/imgs/hoursAndLocation.jpg");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");



const createHoursAndLocation = (() => {
    const main = document.createElement('main');
    main.appendChild((0,_util__WEBPACK_IMPORTED_MODULE_1__.createHeroImage)(_imgs_hoursAndLocation_jpg__WEBPACK_IMPORTED_MODULE_0__));
    const description = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createDescription)('Hours and Location', 'Nestled in the heart of the city, our restaurant boasts a captivating location that exudes charm and allure. As you step through our doors, you\'ll be transported to a world of refined elegance and enchantment. The intimate and inviting atmosphere creates the perfect backdrop for an unforgettable dining experience. Soft ambient lighting casts a warm glow over the meticulously curated decor, showcasing a harmonious blend of modern sophistication and timeless beauty. From the carefully chosen furnishings to the tasteful artwork adorning the walls, every detail has been thoughtfully selected to create a captivating ambiance that captivates and delights. Whether you\'re seeking a romantic dinner for two or an elegant gathering with friends, our restaurant provides the ideal setting to indulge in culinary excellence while immersing yourself in an atmosphere of refined luxury.');
    main.appendChild(description);

    const hoursAndAddressDiv = document.createElement('div');
    hoursAndAddressDiv.classList.add('hours-location');
    const hoursDiv = document.createElement('div');
    hoursDiv.innerHTML = 'Open Six Days A Week<br> Sunday Noon - 11PM<br> Monday CLOSED<br> Tuesday & Wednesday 2PM - 11PM<br> Thursday & Friday 2PM - Midnight<br> Saturday Noon - 11PM';
    hoursAndAddressDiv.appendChild(hoursDiv);
    const addressDiv = document.createElement('div');
    addressDiv.innerHTML = 'Char. Trikoupi 245,<br> Kifisia 145 64';
    hoursAndAddressDiv.appendChild(addressDiv);
    main.appendChild(hoursAndAddressDiv);

    const map = document.createElement('div');
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.2816518819527!2d23.801349500000004!3d38.08710740000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a19f1adb6d5b17%3A0x4d7c9413447cd01a!2zzqfOsc-BLiDOpM-BzrnOus6_z43PgM63IDI0NSwgzprOt8-GzrnPg865zqwgMTQ1IDY0!5e0!3m2!1sel!2sgr!4v1682752931862!5m2!1sel!2sgr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    map.classList.add('map');
    main.appendChild(map);

    return {
        main,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHoursAndLocation);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_menuImg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/menuImg.jpg */ "./src/imgs/menuImg.jpg");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");



const createMenuItem = (dish, price, description) => {
    const item = document.createElement('li');
    const title = document.createElement('h4');
    title.textContent = dish;
    const priceSpan = document.createElement('span');
    priceSpan.textContent = `${price}€`;
    title.appendChild(priceSpan);
    item.appendChild(title);
    const paragraph = document.createElement('p');
    paragraph.textContent = description;
    item.appendChild(paragraph);

    return item;
};

const createMenuComponent = (title, dishes, prices, descriptions) => {
    const menuSection = document.createElement('section');
    menuSection.classList.add('menu-section');
    const newTitle = document.createElement('h3');
    newTitle.textContent = title;
    menuSection.appendChild(newTitle);
    const menuList = document.createElement('ul');
    for (let i = 0; i < dishes.length; i++) {
        menuList.appendChild(createMenuItem(dishes[i], prices[i], descriptions[i]));
    }
    menuSection.appendChild(menuList);

    return menuSection;
};

const createMenu = (() => {
    const appetizersNames = ['Escargots à la Bourguignonne', 'Pissaladière', 'Quenelles de Brochet', 'Soupe à l\'Oignon Gratinée', 'Coquilles Saint-Jacques'];
    const appetizersPrices = ['18.50', '15.00', '22.00', '16.00', '28.00'];
    const appetizersDescriptions = ['A classic French appetizer, this dish features tender snails cooked in a rich garlic butter sauce. Served with crusty bread for dipping.', 'A delicious vegetarian option, this tart features a flaky pastry base topped with caramelized onions, and olives.', 'A French delicacy, these dumplings are made from ground pike fish and served in a creamy lobster sauce.', 'A classic French soup, this dish features caramelized onions in a rich beef broth, topped with melted cheese and served with crusty bread.', 'A seafood favorite, this dish features tender scallops baked in a rich, creamy sauce and topped with breadcrumbs. Can be made vegan by replacing the scallops with mushrooms.'];

    const saladsNames = ['Salade Niçoise', 'Salade de Chevre Chaud', 'Salade Lyonnaise', 'Salade de Magret de Canard', 'Salade Verte', 'Salade de Celeri-rave'];
    const saladsPrices = ['18.50', '17.00', '14.50', '22.00', '10.00', '16.00'];
    const saladsDescriptions = ['A classic French salad, this dish features mixed greens, boiled potatoes, green beans, tomatoes, olives, and tuna. Can be made vegan by omitting the tuna.', 'A delicious vegetarian option, this salad features warm, creamy goat cheese served on a bed of mixed greens with a honey vinaigrette.', 'As mentioned in the previous answer, this simple yet delicious salad features frisée lettuce, crispy bacon, and a perfectly poached egg. Can be made vegan by omitting the bacon and egg and replacing with roasted vegetables.', 'This salad features tender slices of seared duck breast served on a bed of mixed greens with a raspberry vinaigrette. Can be made vegan by replacing the duck breast with roasted vegetables.', 'A simple yet elegant salad, this dish features mixed greens tossed in a light vinaigrette dressing.', 'This vegan salad features thinly sliced celery root, apples, and walnuts served on a bed of mixed greens with a lemon vinaigrette.'];

    const mainNames = ['Boeuf Bourguignon', 'Coq au Vin', 'Cassoulet', 'Ratatouille', 'Quiche Lorraine', 'Sole Meunière', 'Duck Confit', 'Tournedos Rossini', 'Navarin d\'Agneau', 'Mushroom Bourguignon'];
    const mainPrices = ['36.00', '32.00', '28.00', '26.00', '22.00', '38.00', '34.00', '48.00', '42.00', '28.00'];
    const mainDescriptions = ['A classic French dish, this stew features tender beef slow-cooked in red wine with carrots, onions, and bacon. Served with crusty bread and mashed potatoes.', 'Another classic French dish, this one features chicken cooked in red wine with bacon, mushrooms, and pearl onions. Served with mashed potatoes.', 'This hearty stew features white beans slow-cooked with pork sausage, bacon, and duck confit. Served with crusty bread.', 'A delicious vegetarian option, this dish features eggplant, zucchini, bell peppers, onions, and tomatoes stewed together in a flavorful sauce. Served with crusty bread.', 'A French classic, this quiche features a flaky pastry crust filled with bacon, cheese, and a creamy custard. Served with mixed greens.', 'This seafood dish features tender fillets of sole sautéed in a butter sauce with capers and lemon. Served with roasted potatoes and seasonal vegetables.', 'A French delicacy, this dish features duck leg slowly cooked in its own fat until it becomes tender and flavorful. Served with roasted potatoes and seasonal vegetables.', 'A luxurious dish, this one features a tender beef filet topped with seared foie gras and a rich red wine sauce. Served with roasted potatoes and seasonal vegetables.', 'This hearty stew features tender lamb slow-cooked with carrots, onions, and potatoes in a flavorful broth. Served with crusty bread.', 'A delicious vegan option, this dish features mushrooms slow-cooked in red wine with carrots, onions, and garlic. Served with crusty bread.'];

    const dessertsNames = ['Crème Brûlée', 'Tarte Tatin', 'Profiteroles', 'Sorbet', 'Mousse au Chocolat'];
    const dessertsPrices = ['12.00', '14.00', '16.00', '10.00', '14.00'];
    const dessertsDescriptions = ['A classic French dessert, this custard is topped with a layer of caramelized sugar. Served with fresh berries.', 'A delicious dessert, this tart features caramelized apples baked in a buttery pastry crust. Served with vanilla ice cream.', 'These light and airy cream puffs are filled with vanilla ice cream and topped with warm chocolate sauce.', 'A refreshing vegan option, this sorbet features seasonal fruit flavors such as raspberry or mango. Served with fresh fruit.', 'This rich and decadent dessert features a light and airy chocolate mousse. Served with fresh berries and whipped cream.'];

    const main = document.createElement('main');
    main.appendChild((0,_util__WEBPACK_IMPORTED_MODULE_1__.createHeroImage)(_imgs_menuImg_jpg__WEBPACK_IMPORTED_MODULE_0__));
    const description = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createDescription)('Menus', ' Step into our world of fine French cuisine, where every dish tells a story of passion and artistry. Our menu is a celebration of the rich culinary traditions of France, featuring classic dishes such as Coq au Vin, Sole Meunière, and Crème Brûlée. Our ingredients are sourced from the finest suppliers, and our chefs use only the freshest and most flavorful ingredients to create each dish. Whether you\'re a connoisseur of French cuisine or simply looking for a memorable dining experience, we invite you to join us and indulge in the ultimate culinary journey through France.');
    main.appendChild(description);

    const menusDiv = document.createElement('div');
    menusDiv.classList.add('menus-container');
    main.appendChild(menusDiv);

    const appetizersMenu = createMenuComponent('APPETIZERS', appetizersNames, appetizersPrices, appetizersDescriptions);
    menusDiv.appendChild(appetizersMenu);

    const saladsMenu = createMenuComponent('SALADS', saladsNames, saladsPrices, saladsDescriptions);
    menusDiv.appendChild(saladsMenu);

    const mainMenu = createMenuComponent('MAIN DISHES', mainNames, mainPrices, mainDescriptions);
    menusDiv.appendChild(mainMenu);

    const dessertsMenu = createMenuComponent('DESSERTS', dessertsNames, dessertsPrices, dessertsDescriptions);
    menusDiv.appendChild(dessertsMenu);

    return {
        main,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);


/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_logo_red_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/logo-red.png */ "./src/imgs/logo-red.png");


const createNavBar = (() => {
    const body = document.querySelector('body');
    const header = document.createElement('header');
    header.classList.add('header');

    const navLogo = new Image();
    navLogo.src = _imgs_logo_red_png__WEBPACK_IMPORTED_MODULE_0__;
    navLogo.classList.add('logo');
    header.appendChild(navLogo);

    const location = document.createElement('div');
    location.classList.add('location');
    const locationlink = document.createElement('a');
    locationlink.target = '_blank';
    locationlink.href = 'https://www.google.com/maps/place/%CE%A7%CE%B1%CF%81.+%CE%A4%CF%81%CE%B9%CE%BA%CE%BF%CF%8D%CF%80%CE%B7+245,+%CE%9A%CE%B7%CF%86%CE%B9%CF%83%CE%B9%CE%AC+145+64/@38.0871074,23.7987746,17z/data=!3m1!4b1!4m6!3m5!1s0x14a19f1adb6d5b17:0x4d7c9413447cd01a!8m2!3d38.0871074!4d23.8013495!16s%2Fg%2F11csd8_k91';
    locationlink.innerHTML = '<span>Char. Trikoupi 245, </span><span>Kifisia 145 64</span>';
    location.appendChild(locationlink);
    header.appendChild(location);

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    const menuLink = document.createElement('li');
    menuLink.textContent = 'MENU';
    ul.appendChild(menuLink);

    const ourStoryLink = document.createElement('li');
    ourStoryLink.textContent = 'OUR STORY';
    ul.appendChild(ourStoryLink);

    const hoursLink = document.createElement('li');
    hoursLink.textContent = 'HOURS & LOCATION';
    ul.appendChild(hoursLink);

    const communityLink = document.createElement('li');
    communityLink.textContent = 'COMMUNITY';
    ul.appendChild(communityLink);

    const contactLink = document.createElement('li');
    contactLink.textContent = 'CONTACT';
    ul.appendChild(contactLink);

    nav.appendChild(ul);
    header.appendChild(nav);

    const menuBtn = document.createElement('div');
    menuBtn.classList.add('open-icon');
    header.appendChild(menuBtn);
    menuBtn.addEventListener('click', () => {
        ul.classList.toggle('responsive-nav');
        menuBtn.classList.toggle('open-icon');
        menuBtn.classList.toggle('close-icon');
        body.style.overflow = body.style.overflow === 'hidden' ? 'auto' : 'hidden';
    });

    return {
        header,
        menuLink,
        ourStoryLink,
        hoursLink,
        communityLink,
        contactLink,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavBar);


/***/ }),

/***/ "./src/story.js":
/*!**********************!*\
  !*** ./src/story.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_ourstory_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/ourstory.jpg */ "./src/imgs/ourstory.jpg");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");



const createOurStory = (() => {
    const main = document.createElement('main');
    main.appendChild((0,_util__WEBPACK_IMPORTED_MODULE_1__.createHeroImage)(_imgs_ourstory_jpg__WEBPACK_IMPORTED_MODULE_0__));
    const description = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createDescription)('Our Story', 'Our restaurant has a rich and inspiring history that spans over three decades. It was founded by a struggling immigrant, Jule, who had a deep love for cooking and especially French cuisine. Coming from humble beginnings, Jule had always dreamed of owning her own restaurant and sharing her culinary creations with the world. Her passion and dedication eventually paid off, and she was able to open her own restaurant in the heart of the city.<br> The neighborhood where our restaurant is located is steeped in history and has a rich cultural heritage. It is a place where artists, writers, and musicians have frequented for decades, seeking inspiration and creativity. Jule was drawn to this area because of its bohemian atmosphere and artistic energy, which she found to be a perfect match for her own creative spirit.<br> Over the years, our restaurant has become a beloved institution in the community, known for its exquisite French cuisine, elegant ambiance, and impeccable service. Jule\'s dedication and hard work have paid off, and she has become an inspiration to many, both in the culinary world and beyond. Today, our restaurant continues to honor Jule\'s legacy, serving up the same delicious French dishes that have been delighting diners for over 30 years.');
    main.appendChild(description);

    return {
        main,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createOurStory);


/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDescription": () => (/* binding */ createDescription),
/* harmony export */   "createHeroImage": () => (/* binding */ createHeroImage)
/* harmony export */ });
/* harmony import */ var _imgs_logo_white_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/logo-white.png */ "./src/imgs/logo-white.png");


const createHeroImage = (image) => {
    const Logo = new Image();
    Logo.src = _imgs_logo_white_png__WEBPACK_IMPORTED_MODULE_0__;
    Logo.classList.add('logo');
    const newImage = new Image();
    newImage.src = image;
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('hero-img');
    imageDiv.appendChild(newImage);
    imageDiv.appendChild(Logo);

    return imageDiv;
};

const createDescription = (title, text) => {
    const newDescription = document.createElement('section');
    newDescription.classList.add('description-wrapper');
    const newTitle = document.createElement('h2');
    newTitle.textContent = title;
    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = text;
    newDescription.appendChild(newTitle);
    newDescription.appendChild(newParagraph);
    return newDescription;
};




/***/ }),

/***/ "./src/imgs/close.svg":
/*!****************************!*\
  !*** ./src/imgs/close.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97d4c0a10ac97607dc65.svg";

/***/ }),

/***/ "./src/imgs/community.jpg":
/*!********************************!*\
  !*** ./src/imgs/community.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fcfcf3db91f500af036b.jpg";

/***/ }),

/***/ "./src/imgs/dish1.jpg":
/*!****************************!*\
  !*** ./src/imgs/dish1.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6f32a3bf236d715ef76.jpg";

/***/ }),

/***/ "./src/imgs/dish2.jpg":
/*!****************************!*\
  !*** ./src/imgs/dish2.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0eeadeb79989dcf14903.jpg";

/***/ }),

/***/ "./src/imgs/dish3.jpg":
/*!****************************!*\
  !*** ./src/imgs/dish3.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15e20c686658b83d2f47.jpg";

/***/ }),

/***/ "./src/imgs/dish4.jpg":
/*!****************************!*\
  !*** ./src/imgs/dish4.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c3b74e589d2f482a898.jpg";

/***/ }),

/***/ "./src/imgs/dish5.jpg":
/*!****************************!*\
  !*** ./src/imgs/dish5.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "507f8f5e10d4d12adc51.jpg";

/***/ }),

/***/ "./src/imgs/dish6.jpg":
/*!****************************!*\
  !*** ./src/imgs/dish6.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c488c191856ab0616479.jpg";

/***/ }),

/***/ "./src/imgs/dish7.jpg":
/*!****************************!*\
  !*** ./src/imgs/dish7.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dbdce644618928f56116.jpg";

/***/ }),

/***/ "./src/imgs/dish8.jpg":
/*!****************************!*\
  !*** ./src/imgs/dish8.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c980fce227dedc10ac00.jpg";

/***/ }),

/***/ "./src/imgs/hoursAndLocation.jpg":
/*!***************************************!*\
  !*** ./src/imgs/hoursAndLocation.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9fc1d71835d144cffc6.jpg";

/***/ }),

/***/ "./src/imgs/location.jpg":
/*!*******************************!*\
  !*** ./src/imgs/location.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb23f83a977cf95716ed.jpg";

/***/ }),

/***/ "./src/imgs/logo-red.png":
/*!*******************************!*\
  !*** ./src/imgs/logo-red.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2711634fd92d74497f5d.png";

/***/ }),

/***/ "./src/imgs/logo-white.png":
/*!*********************************!*\
  !*** ./src/imgs/logo-white.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a818c88971d0b5c126d3.png";

/***/ }),

/***/ "./src/imgs/menu.jpg":
/*!***************************!*\
  !*** ./src/imgs/menu.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18351870d2a72d2be804.jpg";

/***/ }),

/***/ "./src/imgs/menu.svg":
/*!***************************!*\
  !*** ./src/imgs/menu.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d4061552fac064ed076.svg";

/***/ }),

/***/ "./src/imgs/menuImg.jpg":
/*!******************************!*\
  !*** ./src/imgs/menuImg.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ed809333db119ad4b6d.jpg";

/***/ }),

/***/ "./src/imgs/ourstory.jpg":
/*!*******************************!*\
  !*** ./src/imgs/ourstory.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d336db97886f86ecdba.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _story__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./story */ "./src/story.js");
/* harmony import */ var _community__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./community */ "./src/community.js");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location */ "./src/location.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








const content = document.getElementById('content');
content.appendChild(_navbar__WEBPACK_IMPORTED_MODULE_0__["default"].header);

// content.appendChild(Home.main);
// content.appendChild(Menu.main);
// content.appendChild(OurStory.main);
// content.appendChild(Community.main);
content.appendChild(_location__WEBPACK_IMPORTED_MODULE_5__["default"].main);

// NavBar.menuLink.addEventListener('click', () => {
//     main.innerHTML = '';
//     main.appendChild(Menu.menu);
// });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsUUFBUSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxP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QTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOEI7QUFDSjtBQUNBO0FBQ0s7QUFDSztBQUNNO0FBQ3JCOztBQUVyQjtBQUNBLG9CQUFvQixzREFBYTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQXFCOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbW11bml0eS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3RvcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImltZ3MvbWVudS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJpbWdzL2Nsb3NlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29ybW9yYW50K0dhcmFtb25kOml0YWwsd2dodEAwLDQwMDswLDYwMDswLDcwMDsxLDQwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLW1haW4tY29sb3I6ICM3MDE1MTU7XFxuICAgIC0tbWFpbi1mb250OiAnQ29ybW9yYW50IEdhcmFtb25kJywgc2VyaWY7XFxuICAgIC0tdGFsbC1waWMtaGVpZ2h0OiA3MDBweDtcXG4gICAgLS1zaG9ydC1waWMtaGVpZ2h0OiAzNTBweDtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogSGVybyBJbWFnZSBmb3IgZWFjaCBwYWdlICovXFxuXFxuLmhlcm8taW1nIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHotaW5kZXg6IC0xMDA7XFxuICAgIFxcbn1cXG5cXG4uaGVyby1pbWcgaW1ne1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmhlcm8taW1nIC5sb2dvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJvdHRvbTogNSU7XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xcblxcbiAgICBcXG59XFxuXFxuLyogRGVzY3JpcHRpb24gZm9yIGVhY2ggcGFnZSAqL1xcblxcbi5kZXNjcmlwdGlvbi13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24td3JhcHBlciBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi8qIE1haW4gY29udGVudCBhbmQgYW5kIG5hdiBiYXIgKi9cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZmxleDogMCAxIDI1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBnYXA6IDgwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcblxcbn1cXG5cXG4ubG9nbyB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLmxvY2F0aW9uIGF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubG9jYXRpb24gYTpob3ZlcntcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbm5hdiB1bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLm9wZW4taWNvbiwgLmNsb3NlLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2xvc2UtaWNvbiB7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxubmF2IHVsIGxpOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKiBIb21lcGFnZSAqL1xcblxcbi5pbWFnZXMtZ3JpZCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY29sIHtcXG4gICAgZmxleDogMTtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxufVxcblxcbi5jb2wgLmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmxvd2VyLWdyaWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmxvd2VyLWdyaWQgLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmxvd2VyLWdyaWQgLmltZyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWVudS1kaXYsIC5sb2NhdGlvbi1kaXYge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLnRleHQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDUwcHggNTBweCA7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnRleHQtd3JhcHBlciBoMiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAyLjZyZW07XFxufVxcblxcbi50ZXh0LXdyYXBwZXIgcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5sb3dlci1ncmlkIC5idG4ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmxvd2VyLWdyaWQgLmJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi8qIE1lbnUgQ3NzICovXFxuLm1lbnVzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5tZW51LXNlY3Rpb24ge1xcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uIGgzIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbiB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbiBsaSBwIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbiBsaSBoNCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogSG91cnMgYW5kIExvY2F0aW9uIFBhZ2UgKi9cXG5cXG4uaG91cnMtbG9jYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubWFwIGlmcmFtZXtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XFxuICAgICNjb250ZW50e1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyIHtcXG4gICAgICAgIGZsZXg6IDAgMSAxMDBweDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIH1cXG5cXG4gICAgLmxvZ28ge1xcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5sb2NhdGlvbntcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgbmF2IHVse1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAub3Blbi1pY29uLCAuY2xvc2UtaWNvbiB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIH1cXG5cXG5cXG4gICAgLnJlc3BvbnNpdmUtbmF2IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMTAwcHg7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBncmF5IHNvbGlkO1xcbiAgICB9XFxuXFxuICAgIC5kZXNjcmlwdGlvbntcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgIH1cXG5cXG4gICAgLmxvd2VyLWdyaWQgLnJvdyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIH1cXG5cXG5cXG4gICAgLm1lbnUtZGl2LCAubG9jYXRpb24tZGl2IHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5sb3dlci1ncmlkID4gLnJvdyB+LnJvdyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC50ZXh0LXdyYXBwZXIge1xcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5oZXJvLWltZyAubG9nbyB7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBsZWZ0OiBjYWxjKDUwdncgLSA1MHB4KTtcXG4gICAgfVxcblxcbiAgICAubWVudXMtY29udGFpbmVyIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICAgIFxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5pbWFnZXMtZ3JpZCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAwO1xcbiAgICB9XFxuXFxuICAgIC5jb2wge1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5kZXNjcmlwdGlvbntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWFwIGlmcmFtZSwgLmhvdXJzLWxvY2F0aW9ue1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5ob3Vycy1sb2NhdGlvbiB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICB9XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxxQkFBcUI7SUFDckIsd0NBQXdDO0lBQ3hDLHdCQUF3QjtJQUN4Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQSw2QkFBNkI7O0FBRTdCO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVix1QkFB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WTtJQUNoQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixTQUFTO0lBQ2I7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db3Jtb3JhbnQrR2FyYW1vbmQ6aXRhbCx3Z2h0QDAsNDAwOzAsNjAwOzAsNzAwOzEsNDAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290e1xcbiAgICAtLW1haW4tY29sb3I6ICM3MDE1MTU7XFxuICAgIC0tbWFpbi1mb250OiAnQ29ybW9yYW50IEdhcmFtb25kJywgc2VyaWY7XFxuICAgIC0tdGFsbC1waWMtaGVpZ2h0OiA3MDBweDtcXG4gICAgLS1zaG9ydC1waWMtaGVpZ2h0OiAzNTBweDtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogSGVybyBJbWFnZSBmb3IgZWFjaCBwYWdlICovXFxuXFxuLmhlcm8taW1nIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHotaW5kZXg6IC0xMDA7XFxuICAgIFxcbn1cXG5cXG4uaGVyby1pbWcgaW1ne1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmhlcm8taW1nIC5sb2dvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJvdHRvbTogNSU7XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xcblxcbiAgICBcXG59XFxuXFxuLyogRGVzY3JpcHRpb24gZm9yIGVhY2ggcGFnZSAqL1xcblxcbi5kZXNjcmlwdGlvbi13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24td3JhcHBlciBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi8qIE1haW4gY29udGVudCBhbmQgYW5kIG5hdiBiYXIgKi9cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZmxleDogMCAxIDI1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBnYXA6IDgwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcblxcbn1cXG5cXG4ubG9nbyB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLmxvY2F0aW9uIGF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubG9jYXRpb24gYTpob3ZlcntcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbm5hdiB1bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLm9wZW4taWNvbiwgLmNsb3NlLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2ltZ3MvbWVudS5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdpbWdzL21lbnUuc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jbG9zZS1pY29uIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2ltZ3MvY2xvc2Uuc3ZnJyk7XFxuICAgIG1hc2staW1hZ2U6IHVybCgnaW1ncy9jbG9zZS5zdmcnKTtcXG59XFxuXFxubmF2IHVsIGxpOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKiBIb21lcGFnZSAqL1xcblxcbi5pbWFnZXMtZ3JpZCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY29sIHtcXG4gICAgZmxleDogMTtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxufVxcblxcbi5jb2wgLmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmxvd2VyLWdyaWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmxvd2VyLWdyaWQgLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmxvd2VyLWdyaWQgLmltZyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWVudS1kaXYsIC5sb2NhdGlvbi1kaXYge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLnRleHQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDUwcHggNTBweCA7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnRleHQtd3JhcHBlciBoMiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAyLjZyZW07XFxufVxcblxcbi50ZXh0LXdyYXBwZXIgcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5sb3dlci1ncmlkIC5idG4ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmxvd2VyLWdyaWQgLmJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi8qIE1lbnUgQ3NzICovXFxuLm1lbnVzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5tZW51LXNlY3Rpb24ge1xcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uIGgzIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbiB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbiBsaSBwIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbiBsaSBoNCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogSG91cnMgYW5kIExvY2F0aW9uIFBhZ2UgKi9cXG5cXG4uaG91cnMtbG9jYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubWFwIGlmcmFtZXtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XFxuICAgICNjb250ZW50e1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyIHtcXG4gICAgICAgIGZsZXg6IDAgMSAxMDBweDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIH1cXG5cXG4gICAgLmxvZ28ge1xcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5sb2NhdGlvbntcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgbmF2IHVse1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAub3Blbi1pY29uLCAuY2xvc2UtaWNvbiB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIH1cXG5cXG5cXG4gICAgLnJlc3BvbnNpdmUtbmF2IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMTAwcHg7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBncmF5IHNvbGlkO1xcbiAgICB9XFxuXFxuICAgIC5kZXNjcmlwdGlvbntcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgIH1cXG5cXG4gICAgLmxvd2VyLWdyaWQgLnJvdyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIH1cXG5cXG5cXG4gICAgLm1lbnUtZGl2LCAubG9jYXRpb24tZGl2IHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5sb3dlci1ncmlkID4gLnJvdyB+LnJvdyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC50ZXh0LXdyYXBwZXIge1xcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5oZXJvLWltZyAubG9nbyB7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBsZWZ0OiBjYWxjKDUwdncgLSA1MHB4KTtcXG4gICAgfVxcblxcbiAgICAubWVudXMtY29udGFpbmVyIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICAgIFxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5pbWFnZXMtZ3JpZCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAwO1xcbiAgICB9XFxuXFxuICAgIC5jb2wge1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5kZXNjcmlwdGlvbntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWFwIGlmcmFtZSwgLmhvdXJzLWxvY2F0aW9ue1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5ob3Vycy1sb2NhdGlvbiB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICB9XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEltYWdlIGZyb20gJy4vaW1ncy9jb21tdW5pdHkuanBnJztcbmltcG9ydCB7IGNyZWF0ZUhlcm9JbWFnZSwgY3JlYXRlRGVzY3JpcHRpb24gfSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBjcmVhdGVDb21tdW5pdHkgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIZXJvSW1hZ2UoSW1hZ2UpKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZURlc2NyaXB0aW9uKCdDb21tdW5pdHknLCAnQXQgb3VyIHJlc3RhdXJhbnQsIHdlIGJlbGlldmUgaW4gdGhlIHBvd2VyIG9mIGdpdmluZyBiYWNrIHRvIHRoZSBjb21tdW5pdHkgdGhhdCBoYXMgc3VwcG9ydGVkIHVzIHRocm91Z2hvdXQgdGhlIHllYXJzLiBXZSBoYXZlIGZvcm1lZCBzdHJvbmcgcGFydG5lcnNoaXBzIHdpdGggbG9jYWwgY2hhcml0aWVzIGFuZCBvcmdhbml6YXRpb25zLCBjb2xsYWJvcmF0aW5nIG9uIGluaXRpYXRpdmVzIHRvIG1ha2UgYSBwb3NpdGl2ZSBpbXBhY3QuIE9uZSBvZiBvdXIgcHJvdWRlc3QgYWNoaWV2ZW1lbnRzIGlzIG91ciBvbmdvaW5nIGNvbW1pdG1lbnQgdG8gZmVlZGluZyB0aGUgaG9tZWxlc3MgYW5kIHJlZnVnZWVzIGluIG91ciBjb21tdW5pdHkuIFRocm91Z2ggcmVndWxhciBtZWFsIGRvbmF0aW9ucyBhbmQgdm9sdW50ZWVyIGVmZm9ydHMsIHdlIHN0cml2ZSB0byBwcm92aWRlIG5vdXJpc2htZW50IGFuZCBhIHNlbnNlIG9mIGhvcGUgdG8gdGhvc2UgaW4gbmVlZC4gV2UgYmVsaWV2ZSB0aGF0IGV2ZXJ5b25lIGRlc2VydmVzIGEgd2FybSBtZWFsIGFuZCBhIHdlbGNvbWluZyBlbnZpcm9ubWVudCwgYW5kIHdlIGFyZSBkZWRpY2F0ZWQgdG8gY3JlYXRpbmcganVzdCB0aGF0Ljxicj4gSW4gYWRkaXRpb24gdG8gb3VyIHN1cHBvcnQgZm9yIHRoZSBob21lbGVzcyBhbmQgcmVmdWdlZXMsIHdlIGhhdmUgY3JlYXRlZCBhIHdhcm0gYW5kIHN1cHBvcnRpdmUgZW52aXJvbm1lbnQgZm9yIHZ1bG5lcmFibGUgaW5kaXZpZHVhbHMgd2l0aGluIG91ciBjb21tdW5pdHkuIFdlIGhhdmUgZXN0YWJsaXNoZWQgcHJvZ3JhbXMgdG8gcHJvdmlkZSBqb2IgdHJhaW5pbmcgYW5kIG9wcG9ydHVuaXRpZXMgZm9yIHRob3NlIGZhY2luZyBlbXBsb3ltZW50IGNoYWxsZW5nZXMsIGhlbHBpbmcgdGhlbSBnYWluIHZhbHVhYmxlIHNraWxscyBhbmQgcmVnYWluIHRoZWlyIGNvbmZpZGVuY2UuIEZ1cnRoZXJtb3JlLCB3ZSBmcmVxdWVudGx5IGhvc3QgZnVuZHJhaXNpbmcgZXZlbnRzIGFuZCBjaGFyaXR5IGRpbm5lcnMsIHdoZXJlIHByb2NlZWRzIGFyZSBkaXJlY3RlZCB0b3dhcmRzIGxvY2FsIGNhdXNlcyB0aGF0IGZvY3VzIG9uIGVkdWNhdGlvbiwgaGVhbHRoY2FyZSwgYW5kIHNvY2lhbCB3ZWxmYXJlLiBXZSBhcmUgcHJvdWQgdG8gYmUgYSByZXN0YXVyYW50IHRoYXQgbm90IG9ubHkgc2VydmVzIGV4cXVpc2l0ZSBjdWlzaW5lIGJ1dCBhbHNvIHNlcnZlcyBhcyBhIHBpbGxhciBvZiBzdXBwb3J0IGFuZCBjb21wYXNzaW9uIGZvciBvdXIgY29tbXVuaXR5LCBzdGFuZGluZyBzaWRlIGJ5IHNpZGUgd2l0aCB0aG9zZSB3aG8gbmVlZCBpdCBtb3N0LicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbixcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tbXVuaXR5O1xuIiwiaW1wb3J0IGRpc2gxIGZyb20gJy4vaW1ncy9kaXNoMS5qcGcnO1xuaW1wb3J0IGRpc2gyIGZyb20gJy4vaW1ncy9kaXNoMi5qcGcnO1xuaW1wb3J0IGRpc2gzIGZyb20gJy4vaW1ncy9kaXNoMy5qcGcnO1xuaW1wb3J0IGRpc2g0IGZyb20gJy4vaW1ncy9kaXNoNC5qcGcnO1xuaW1wb3J0IGRpc2g1IGZyb20gJy4vaW1ncy9kaXNoNS5qcGcnO1xuaW1wb3J0IGRpc2g2IGZyb20gJy4vaW1ncy9kaXNoNi5qcGcnO1xuaW1wb3J0IGRpc2g3IGZyb20gJy4vaW1ncy9kaXNoNy5qcGcnO1xuaW1wb3J0IGRpc2g4IGZyb20gJy4vaW1ncy9kaXNoOC5qcGcnO1xuaW1wb3J0IG1lbnVJbWcgZnJvbSAnLi9pbWdzL21lbnUuanBnJztcbmltcG9ydCBsb2NhdGlvbkltZyBmcm9tICcuL2ltZ3MvbG9jYXRpb24uanBnJztcblxuY29uc3QgaW1hZ2VzID0gW2Rpc2gxLCBkaXNoMiwgZGlzaDMsIGRpc2g0LCBkaXNoNSwgZGlzaDYsIGRpc2g3LCBkaXNoOF07XG5cbmNvbnN0IGFwcGVuZEltYWdlcyA9IChpbWFnZSwgcGFyZW50KSA9PiB7XG4gICAgY29uc3QgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBuZXdJbWFnZS5zcmMgPSBpbWFnZTtcbiAgICBuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKCdpbWcnKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3SW1hZ2UpO1xufTtcblxuY29uc3QgY3JlYXRlSG9tZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICAgIGNvbnN0IGltYWdlc0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZXNHcmlkLmNsYXNzTGlzdC5hZGQoJ2ltYWdlcy1ncmlkJyk7XG4gICAgY29uc3QgZ3JpZENvbHVtbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkQ29sdW1uMS5jbGFzc0xpc3QuYWRkKCdjb2wnKTtcbiAgICBjb25zdCBncmlkQ29sdW1uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWRDb2x1bW4yLmNsYXNzTGlzdC5hZGQoJ2NvbCcpO1xuICAgIGltYWdlc0dyaWQuYXBwZW5kQ2hpbGQoZ3JpZENvbHVtbjEpO1xuICAgIGltYWdlc0dyaWQuYXBwZW5kQ2hpbGQoZ3JpZENvbHVtbjIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgaWYgKChpICsgMSkgJSAyID09IDApIHtcbiAgICAgICAgICAgIGFwcGVuZEltYWdlcyhpbWFnZXNbaV0sIGdyaWRDb2x1bW4yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFwcGVuZEltYWdlcyhpbWFnZXNbaV0sIGdyaWRDb2x1bW4xKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaW1hZ2VzR3JpZCk7XG5cbiAgICBjb25zdCBtYWluRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1haW5EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdPdXIgZmluZSBkaW5pbmcgcmVzdGF1cmFudCBvZmZlcnMgYW4gZWxlZ2FudCBhbWJpYW5jZSwgYSB0YW50YWxpemluZyBtZW51IG9mIGNsYXNzaWMgRnJlbmNoIGN1aXNpbmUsIGFuZCBpbXBlY2NhYmxlIHNlcnZpY2UsIGNyZWF0aW5nIGFuIHVuZm9yZ2V0dGFibGUgZGluaW5nIGV4cGVyaWVuY2UuJztcbiAgICBtYWluRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5EZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBsb3dlckdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb3dlckdyaWQuY2xhc3NMaXN0LmFkZCgnbG93ZXItZ3JpZCcpO1xuXG4gICAgY29uc3QgdGV4dFdyYXBwZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dFdyYXBwZXIxLmNsYXNzTGlzdC5hZGQoJ3RleHQtd3JhcHBlcicpO1xuICAgIGNvbnN0IHRleHRXcmFwcGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHRXcmFwcGVyMi5jbGFzc0xpc3QuYWRkKCd0ZXh0LXdyYXBwZXInKTtcblxuICAgIGNvbnN0IHJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cxLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtZGl2Jyk7XG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgY29uc3QgbWVudVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudVRleHQudGV4dENvbnRlbnQgPSAnSW5kdWxnZSBpbiBhbiBleHF1aXNpdGUgY3VsaW5hcnkgam91cm5leSB0aHJvdWdoIEZyYW5jZSB3aXRoIG91ciBtZW51LCBjcmFmdGVkIHRvIGRlbGlnaHQgeW91ciBzZW5zZXMgYW5kIHNhdGlzZnkgeW91ciBhcHBldGl0ZS4nO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnRuLnRleHRDb250ZW50ID0gJ01FTlUnO1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgdGV4dFdyYXBwZXIxLmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG4gICAgdGV4dFdyYXBwZXIxLmFwcGVuZENoaWxkKG1lbnVUZXh0KTtcbiAgICB0ZXh0V3JhcHBlcjEuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZCh0ZXh0V3JhcHBlcjEpO1xuICAgIHJvdzEuYXBwZW5kQ2hpbGQobWVudURpdik7XG4gICAgYXBwZW5kSW1hZ2VzKG1lbnVJbWcsIHJvdzEpO1xuXG4gICAgY29uc3Qgcm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdzIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2NhdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbi1kaXYnKTtcbiAgICBjb25zdCBsb2NhdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBsb2NhdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJztcbiAgICBjb25zdCBsb2NhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbG9jYXRpb25UZXh0LnRleHRDb250ZW50ID0gJyBOZXN0bGVkIGluIHRoZSBoZWFydCBvZiB0aGUgY2l0eSwgb3VyIHJlc3RhdXJhbnQgb2ZmZXJzIGFuIGlkeWxsaWMgYW5kIGNoYXJtaW5nIHNldHRpbmcgdGhhdCB3aWxsIHRyYW5zcG9ydCB5b3UgdG8gdGhlIEZyZW5jaCBjb3VudHJ5c2lkZS4gJztcbiAgICBjb25zdCBsb2NhdGlvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxvY2F0aW9uQnRuLnRleHRDb250ZW50ID0gJ0hPVVJTICYgTE9DQVRJT04nO1xuICAgIGxvY2F0aW9uQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIHRleHRXcmFwcGVyMi5hcHBlbmRDaGlsZChsb2NhdGlvblRpdGxlKTtcbiAgICB0ZXh0V3JhcHBlcjIuYXBwZW5kQ2hpbGQobG9jYXRpb25UZXh0KTtcbiAgICB0ZXh0V3JhcHBlcjIuYXBwZW5kQ2hpbGQobG9jYXRpb25CdG4pO1xuICAgIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKHRleHRXcmFwcGVyMik7XG4gICAgYXBwZW5kSW1hZ2VzKGxvY2F0aW9uSW1nLCByb3cyKTtcbiAgICByb3cyLmFwcGVuZENoaWxkKGxvY2F0aW9uRGl2KTtcblxuICAgIGxvd2VyR3JpZC5hcHBlbmRDaGlsZChyb3cxKTtcbiAgICBsb3dlckdyaWQuYXBwZW5kQ2hpbGQocm93Mik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChsb3dlckdyaWQpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG1haW4sXG4gICAgICAgIG1lbnVCdG4sXG4gICAgICAgIGxvY2F0aW9uQnRuLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lO1xuIiwiaW1wb3J0IEltYWdlIGZyb20gJy4vaW1ncy9ob3Vyc0FuZExvY2F0aW9uLmpwZyc7XG5pbXBvcnQgeyBjcmVhdGVIZXJvSW1hZ2UsIGNyZWF0ZURlc2NyaXB0aW9uIH0gZnJvbSAnLi91dGlsJztcblxuY29uc3QgY3JlYXRlSG91cnNBbmRMb2NhdGlvbiA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhlcm9JbWFnZShJbWFnZSkpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlRGVzY3JpcHRpb24oJ0hvdXJzIGFuZCBMb2NhdGlvbicsICdOZXN0bGVkIGluIHRoZSBoZWFydCBvZiB0aGUgY2l0eSwgb3VyIHJlc3RhdXJhbnQgYm9hc3RzIGEgY2FwdGl2YXRpbmcgbG9jYXRpb24gdGhhdCBleHVkZXMgY2hhcm0gYW5kIGFsbHVyZS4gQXMgeW91IHN0ZXAgdGhyb3VnaCBvdXIgZG9vcnMsIHlvdVxcJ2xsIGJlIHRyYW5zcG9ydGVkIHRvIGEgd29ybGQgb2YgcmVmaW5lZCBlbGVnYW5jZSBhbmQgZW5jaGFudG1lbnQuIFRoZSBpbnRpbWF0ZSBhbmQgaW52aXRpbmcgYXRtb3NwaGVyZSBjcmVhdGVzIHRoZSBwZXJmZWN0IGJhY2tkcm9wIGZvciBhbiB1bmZvcmdldHRhYmxlIGRpbmluZyBleHBlcmllbmNlLiBTb2Z0IGFtYmllbnQgbGlnaHRpbmcgY2FzdHMgYSB3YXJtIGdsb3cgb3ZlciB0aGUgbWV0aWN1bG91c2x5IGN1cmF0ZWQgZGVjb3IsIHNob3djYXNpbmcgYSBoYXJtb25pb3VzIGJsZW5kIG9mIG1vZGVybiBzb3BoaXN0aWNhdGlvbiBhbmQgdGltZWxlc3MgYmVhdXR5LiBGcm9tIHRoZSBjYXJlZnVsbHkgY2hvc2VuIGZ1cm5pc2hpbmdzIHRvIHRoZSB0YXN0ZWZ1bCBhcnR3b3JrIGFkb3JuaW5nIHRoZSB3YWxscywgZXZlcnkgZGV0YWlsIGhhcyBiZWVuIHRob3VnaHRmdWxseSBzZWxlY3RlZCB0byBjcmVhdGUgYSBjYXB0aXZhdGluZyBhbWJpYW5jZSB0aGF0IGNhcHRpdmF0ZXMgYW5kIGRlbGlnaHRzLiBXaGV0aGVyIHlvdVxcJ3JlIHNlZWtpbmcgYSByb21hbnRpYyBkaW5uZXIgZm9yIHR3byBvciBhbiBlbGVnYW50IGdhdGhlcmluZyB3aXRoIGZyaWVuZHMsIG91ciByZXN0YXVyYW50IHByb3ZpZGVzIHRoZSBpZGVhbCBzZXR0aW5nIHRvIGluZHVsZ2UgaW4gY3VsaW5hcnkgZXhjZWxsZW5jZSB3aGlsZSBpbW1lcnNpbmcgeW91cnNlbGYgaW4gYW4gYXRtb3NwaGVyZSBvZiByZWZpbmVkIGx1eHVyeS4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IGhvdXJzQW5kQWRkcmVzc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJzQW5kQWRkcmVzc0Rpdi5jbGFzc0xpc3QuYWRkKCdob3Vycy1sb2NhdGlvbicpO1xuICAgIGNvbnN0IGhvdXJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91cnNEaXYuaW5uZXJIVE1MID0gJ09wZW4gU2l4IERheXMgQSBXZWVrPGJyPiBTdW5kYXkgTm9vbiAtIDExUE08YnI+IE1vbmRheSBDTE9TRUQ8YnI+IFR1ZXNkYXkgJiBXZWRuZXNkYXkgMlBNIC0gMTFQTTxicj4gVGh1cnNkYXkgJiBGcmlkYXkgMlBNIC0gTWlkbmlnaHQ8YnI+IFNhdHVyZGF5IE5vb24gLSAxMVBNJztcbiAgICBob3Vyc0FuZEFkZHJlc3NEaXYuYXBwZW5kQ2hpbGQoaG91cnNEaXYpO1xuICAgIGNvbnN0IGFkZHJlc3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRyZXNzRGl2LmlubmVySFRNTCA9ICdDaGFyLiBUcmlrb3VwaSAyNDUsPGJyPiBLaWZpc2lhIDE0NSA2NCc7XG4gICAgaG91cnNBbmRBZGRyZXNzRGl2LmFwcGVuZENoaWxkKGFkZHJlc3NEaXYpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaG91cnNBbmRBZGRyZXNzRGl2KTtcblxuICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1hcC5pbm5lckhUTUwgPSAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQzMTQwLjI4MTY1MTg4MTk1MjchMmQyMy44MDEzNDk1MDAwMDAwMDQhM2QzOC4wODcxMDc0MDAwMDAwMSEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MTRhMTlmMWFkYjZkNWIxNyUzQTB4NGQ3Yzk0MTM0NDdjZDAxYSEyenpxZk9zYy1CTGlET3BNLUJ6cm5PdXM2X3o0M1BnTTYzSURJME5Td2d6cHJPdDgtR3pyblBnODY1enF3Z01UUTFJRFkwITVlMCEzbTIhMXNlbCEyc2dyITR2MTY4Mjc1MjkzMTg2MiE1bTIhMXNlbCEyc2dyXCIgc3R5bGU9XCJib3JkZXI6MDtcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT4nO1xuICAgIG1hcC5jbGFzc0xpc3QuYWRkKCdtYXAnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1hcCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb3Vyc0FuZExvY2F0aW9uO1xuIiwiaW1wb3J0IEltYWdlIGZyb20gJy4vaW1ncy9tZW51SW1nLmpwZyc7XG5pbXBvcnQgeyBjcmVhdGVIZXJvSW1hZ2UsIGNyZWF0ZURlc2NyaXB0aW9uIH0gZnJvbSAnLi91dGlsJztcblxuY29uc3QgY3JlYXRlTWVudUl0ZW0gPSAoZGlzaCwgcHJpY2UsIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gZGlzaDtcbiAgICBjb25zdCBwcmljZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcHJpY2VTcGFuLnRleHRDb250ZW50ID0gYCR7cHJpY2V94oKsYDtcbiAgICB0aXRsZS5hcHBlbmRDaGlsZChwcmljZVNwYW4pO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICBpdGVtLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgICByZXR1cm4gaXRlbTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1lbnVDb21wb25lbnQgPSAodGl0bGUsIGRpc2hlcywgcHJpY2VzLCBkZXNjcmlwdGlvbnMpID0+IHtcbiAgICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBtZW51U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24nKTtcbiAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbmV3VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChuZXdUaXRsZSk7XG4gICAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKGRpc2hlc1tpXSwgcHJpY2VzW2ldLCBkZXNjcmlwdGlvbnNbaV0pKTtcbiAgICB9XG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xuXG4gICAgcmV0dXJuIG1lbnVTZWN0aW9uO1xufTtcblxuY29uc3QgY3JlYXRlTWVudSA9ICgoKSA9PiB7XG4gICAgY29uc3QgYXBwZXRpemVyc05hbWVzID0gWydFc2NhcmdvdHMgw6AgbGEgQm91cmd1aWdub25uZScsICdQaXNzYWxhZGnDqHJlJywgJ1F1ZW5lbGxlcyBkZSBCcm9jaGV0JywgJ1NvdXBlIMOgIGxcXCdPaWdub24gR3JhdGluw6llJywgJ0NvcXVpbGxlcyBTYWludC1KYWNxdWVzJ107XG4gICAgY29uc3QgYXBwZXRpemVyc1ByaWNlcyA9IFsnMTguNTAnLCAnMTUuMDAnLCAnMjIuMDAnLCAnMTYuMDAnLCAnMjguMDAnXTtcbiAgICBjb25zdCBhcHBldGl6ZXJzRGVzY3JpcHRpb25zID0gWydBIGNsYXNzaWMgRnJlbmNoIGFwcGV0aXplciwgdGhpcyBkaXNoIGZlYXR1cmVzIHRlbmRlciBzbmFpbHMgY29va2VkIGluIGEgcmljaCBnYXJsaWMgYnV0dGVyIHNhdWNlLiBTZXJ2ZWQgd2l0aCBjcnVzdHkgYnJlYWQgZm9yIGRpcHBpbmcuJywgJ0EgZGVsaWNpb3VzIHZlZ2V0YXJpYW4gb3B0aW9uLCB0aGlzIHRhcnQgZmVhdHVyZXMgYSBmbGFreSBwYXN0cnkgYmFzZSB0b3BwZWQgd2l0aCBjYXJhbWVsaXplZCBvbmlvbnMsIGFuZCBvbGl2ZXMuJywgJ0EgRnJlbmNoIGRlbGljYWN5LCB0aGVzZSBkdW1wbGluZ3MgYXJlIG1hZGUgZnJvbSBncm91bmQgcGlrZSBmaXNoIGFuZCBzZXJ2ZWQgaW4gYSBjcmVhbXkgbG9ic3RlciBzYXVjZS4nLCAnQSBjbGFzc2ljIEZyZW5jaCBzb3VwLCB0aGlzIGRpc2ggZmVhdHVyZXMgY2FyYW1lbGl6ZWQgb25pb25zIGluIGEgcmljaCBiZWVmIGJyb3RoLCB0b3BwZWQgd2l0aCBtZWx0ZWQgY2hlZXNlIGFuZCBzZXJ2ZWQgd2l0aCBjcnVzdHkgYnJlYWQuJywgJ0Egc2VhZm9vZCBmYXZvcml0ZSwgdGhpcyBkaXNoIGZlYXR1cmVzIHRlbmRlciBzY2FsbG9wcyBiYWtlZCBpbiBhIHJpY2gsIGNyZWFteSBzYXVjZSBhbmQgdG9wcGVkIHdpdGggYnJlYWRjcnVtYnMuIENhbiBiZSBtYWRlIHZlZ2FuIGJ5IHJlcGxhY2luZyB0aGUgc2NhbGxvcHMgd2l0aCBtdXNocm9vbXMuJ107XG5cbiAgICBjb25zdCBzYWxhZHNOYW1lcyA9IFsnU2FsYWRlIE5pw6dvaXNlJywgJ1NhbGFkZSBkZSBDaGV2cmUgQ2hhdWQnLCAnU2FsYWRlIEx5b25uYWlzZScsICdTYWxhZGUgZGUgTWFncmV0IGRlIENhbmFyZCcsICdTYWxhZGUgVmVydGUnLCAnU2FsYWRlIGRlIENlbGVyaS1yYXZlJ107XG4gICAgY29uc3Qgc2FsYWRzUHJpY2VzID0gWycxOC41MCcsICcxNy4wMCcsICcxNC41MCcsICcyMi4wMCcsICcxMC4wMCcsICcxNi4wMCddO1xuICAgIGNvbnN0IHNhbGFkc0Rlc2NyaXB0aW9ucyA9IFsnQSBjbGFzc2ljIEZyZW5jaCBzYWxhZCwgdGhpcyBkaXNoIGZlYXR1cmVzIG1peGVkIGdyZWVucywgYm9pbGVkIHBvdGF0b2VzLCBncmVlbiBiZWFucywgdG9tYXRvZXMsIG9saXZlcywgYW5kIHR1bmEuIENhbiBiZSBtYWRlIHZlZ2FuIGJ5IG9taXR0aW5nIHRoZSB0dW5hLicsICdBIGRlbGljaW91cyB2ZWdldGFyaWFuIG9wdGlvbiwgdGhpcyBzYWxhZCBmZWF0dXJlcyB3YXJtLCBjcmVhbXkgZ29hdCBjaGVlc2Ugc2VydmVkIG9uIGEgYmVkIG9mIG1peGVkIGdyZWVucyB3aXRoIGEgaG9uZXkgdmluYWlncmV0dGUuJywgJ0FzIG1lbnRpb25lZCBpbiB0aGUgcHJldmlvdXMgYW5zd2VyLCB0aGlzIHNpbXBsZSB5ZXQgZGVsaWNpb3VzIHNhbGFkIGZlYXR1cmVzIGZyaXPDqWUgbGV0dHVjZSwgY3Jpc3B5IGJhY29uLCBhbmQgYSBwZXJmZWN0bHkgcG9hY2hlZCBlZ2cuIENhbiBiZSBtYWRlIHZlZ2FuIGJ5IG9taXR0aW5nIHRoZSBiYWNvbiBhbmQgZWdnIGFuZCByZXBsYWNpbmcgd2l0aCByb2FzdGVkIHZlZ2V0YWJsZXMuJywgJ1RoaXMgc2FsYWQgZmVhdHVyZXMgdGVuZGVyIHNsaWNlcyBvZiBzZWFyZWQgZHVjayBicmVhc3Qgc2VydmVkIG9uIGEgYmVkIG9mIG1peGVkIGdyZWVucyB3aXRoIGEgcmFzcGJlcnJ5IHZpbmFpZ3JldHRlLiBDYW4gYmUgbWFkZSB2ZWdhbiBieSByZXBsYWNpbmcgdGhlIGR1Y2sgYnJlYXN0IHdpdGggcm9hc3RlZCB2ZWdldGFibGVzLicsICdBIHNpbXBsZSB5ZXQgZWxlZ2FudCBzYWxhZCwgdGhpcyBkaXNoIGZlYXR1cmVzIG1peGVkIGdyZWVucyB0b3NzZWQgaW4gYSBsaWdodCB2aW5haWdyZXR0ZSBkcmVzc2luZy4nLCAnVGhpcyB2ZWdhbiBzYWxhZCBmZWF0dXJlcyB0aGlubHkgc2xpY2VkIGNlbGVyeSByb290LCBhcHBsZXMsIGFuZCB3YWxudXRzIHNlcnZlZCBvbiBhIGJlZCBvZiBtaXhlZCBncmVlbnMgd2l0aCBhIGxlbW9uIHZpbmFpZ3JldHRlLiddO1xuXG4gICAgY29uc3QgbWFpbk5hbWVzID0gWydCb2V1ZiBCb3VyZ3VpZ25vbicsICdDb3EgYXUgVmluJywgJ0Nhc3NvdWxldCcsICdSYXRhdG91aWxsZScsICdRdWljaGUgTG9ycmFpbmUnLCAnU29sZSBNZXVuacOocmUnLCAnRHVjayBDb25maXQnLCAnVG91cm5lZG9zIFJvc3NpbmknLCAnTmF2YXJpbiBkXFwnQWduZWF1JywgJ011c2hyb29tIEJvdXJndWlnbm9uJ107XG4gICAgY29uc3QgbWFpblByaWNlcyA9IFsnMzYuMDAnLCAnMzIuMDAnLCAnMjguMDAnLCAnMjYuMDAnLCAnMjIuMDAnLCAnMzguMDAnLCAnMzQuMDAnLCAnNDguMDAnLCAnNDIuMDAnLCAnMjguMDAnXTtcbiAgICBjb25zdCBtYWluRGVzY3JpcHRpb25zID0gWydBIGNsYXNzaWMgRnJlbmNoIGRpc2gsIHRoaXMgc3RldyBmZWF0dXJlcyB0ZW5kZXIgYmVlZiBzbG93LWNvb2tlZCBpbiByZWQgd2luZSB3aXRoIGNhcnJvdHMsIG9uaW9ucywgYW5kIGJhY29uLiBTZXJ2ZWQgd2l0aCBjcnVzdHkgYnJlYWQgYW5kIG1hc2hlZCBwb3RhdG9lcy4nLCAnQW5vdGhlciBjbGFzc2ljIEZyZW5jaCBkaXNoLCB0aGlzIG9uZSBmZWF0dXJlcyBjaGlja2VuIGNvb2tlZCBpbiByZWQgd2luZSB3aXRoIGJhY29uLCBtdXNocm9vbXMsIGFuZCBwZWFybCBvbmlvbnMuIFNlcnZlZCB3aXRoIG1hc2hlZCBwb3RhdG9lcy4nLCAnVGhpcyBoZWFydHkgc3RldyBmZWF0dXJlcyB3aGl0ZSBiZWFucyBzbG93LWNvb2tlZCB3aXRoIHBvcmsgc2F1c2FnZSwgYmFjb24sIGFuZCBkdWNrIGNvbmZpdC4gU2VydmVkIHdpdGggY3J1c3R5IGJyZWFkLicsICdBIGRlbGljaW91cyB2ZWdldGFyaWFuIG9wdGlvbiwgdGhpcyBkaXNoIGZlYXR1cmVzIGVnZ3BsYW50LCB6dWNjaGluaSwgYmVsbCBwZXBwZXJzLCBvbmlvbnMsIGFuZCB0b21hdG9lcyBzdGV3ZWQgdG9nZXRoZXIgaW4gYSBmbGF2b3JmdWwgc2F1Y2UuIFNlcnZlZCB3aXRoIGNydXN0eSBicmVhZC4nLCAnQSBGcmVuY2ggY2xhc3NpYywgdGhpcyBxdWljaGUgZmVhdHVyZXMgYSBmbGFreSBwYXN0cnkgY3J1c3QgZmlsbGVkIHdpdGggYmFjb24sIGNoZWVzZSwgYW5kIGEgY3JlYW15IGN1c3RhcmQuIFNlcnZlZCB3aXRoIG1peGVkIGdyZWVucy4nLCAnVGhpcyBzZWFmb29kIGRpc2ggZmVhdHVyZXMgdGVuZGVyIGZpbGxldHMgb2Ygc29sZSBzYXV0w6llZCBpbiBhIGJ1dHRlciBzYXVjZSB3aXRoIGNhcGVycyBhbmQgbGVtb24uIFNlcnZlZCB3aXRoIHJvYXN0ZWQgcG90YXRvZXMgYW5kIHNlYXNvbmFsIHZlZ2V0YWJsZXMuJywgJ0EgRnJlbmNoIGRlbGljYWN5LCB0aGlzIGRpc2ggZmVhdHVyZXMgZHVjayBsZWcgc2xvd2x5IGNvb2tlZCBpbiBpdHMgb3duIGZhdCB1bnRpbCBpdCBiZWNvbWVzIHRlbmRlciBhbmQgZmxhdm9yZnVsLiBTZXJ2ZWQgd2l0aCByb2FzdGVkIHBvdGF0b2VzIGFuZCBzZWFzb25hbCB2ZWdldGFibGVzLicsICdBIGx1eHVyaW91cyBkaXNoLCB0aGlzIG9uZSBmZWF0dXJlcyBhIHRlbmRlciBiZWVmIGZpbGV0IHRvcHBlZCB3aXRoIHNlYXJlZCBmb2llIGdyYXMgYW5kIGEgcmljaCByZWQgd2luZSBzYXVjZS4gU2VydmVkIHdpdGggcm9hc3RlZCBwb3RhdG9lcyBhbmQgc2Vhc29uYWwgdmVnZXRhYmxlcy4nLCAnVGhpcyBoZWFydHkgc3RldyBmZWF0dXJlcyB0ZW5kZXIgbGFtYiBzbG93LWNvb2tlZCB3aXRoIGNhcnJvdHMsIG9uaW9ucywgYW5kIHBvdGF0b2VzIGluIGEgZmxhdm9yZnVsIGJyb3RoLiBTZXJ2ZWQgd2l0aCBjcnVzdHkgYnJlYWQuJywgJ0EgZGVsaWNpb3VzIHZlZ2FuIG9wdGlvbiwgdGhpcyBkaXNoIGZlYXR1cmVzIG11c2hyb29tcyBzbG93LWNvb2tlZCBpbiByZWQgd2luZSB3aXRoIGNhcnJvdHMsIG9uaW9ucywgYW5kIGdhcmxpYy4gU2VydmVkIHdpdGggY3J1c3R5IGJyZWFkLiddO1xuXG4gICAgY29uc3QgZGVzc2VydHNOYW1lcyA9IFsnQ3LDqG1lIEJyw7tsw6llJywgJ1RhcnRlIFRhdGluJywgJ1Byb2ZpdGVyb2xlcycsICdTb3JiZXQnLCAnTW91c3NlIGF1IENob2NvbGF0J107XG4gICAgY29uc3QgZGVzc2VydHNQcmljZXMgPSBbJzEyLjAwJywgJzE0LjAwJywgJzE2LjAwJywgJzEwLjAwJywgJzE0LjAwJ107XG4gICAgY29uc3QgZGVzc2VydHNEZXNjcmlwdGlvbnMgPSBbJ0EgY2xhc3NpYyBGcmVuY2ggZGVzc2VydCwgdGhpcyBjdXN0YXJkIGlzIHRvcHBlZCB3aXRoIGEgbGF5ZXIgb2YgY2FyYW1lbGl6ZWQgc3VnYXIuIFNlcnZlZCB3aXRoIGZyZXNoIGJlcnJpZXMuJywgJ0EgZGVsaWNpb3VzIGRlc3NlcnQsIHRoaXMgdGFydCBmZWF0dXJlcyBjYXJhbWVsaXplZCBhcHBsZXMgYmFrZWQgaW4gYSBidXR0ZXJ5IHBhc3RyeSBjcnVzdC4gU2VydmVkIHdpdGggdmFuaWxsYSBpY2UgY3JlYW0uJywgJ1RoZXNlIGxpZ2h0IGFuZCBhaXJ5IGNyZWFtIHB1ZmZzIGFyZSBmaWxsZWQgd2l0aCB2YW5pbGxhIGljZSBjcmVhbSBhbmQgdG9wcGVkIHdpdGggd2FybSBjaG9jb2xhdGUgc2F1Y2UuJywgJ0EgcmVmcmVzaGluZyB2ZWdhbiBvcHRpb24sIHRoaXMgc29yYmV0IGZlYXR1cmVzIHNlYXNvbmFsIGZydWl0IGZsYXZvcnMgc3VjaCBhcyByYXNwYmVycnkgb3IgbWFuZ28uIFNlcnZlZCB3aXRoIGZyZXNoIGZydWl0LicsICdUaGlzIHJpY2ggYW5kIGRlY2FkZW50IGRlc3NlcnQgZmVhdHVyZXMgYSBsaWdodCBhbmQgYWlyeSBjaG9jb2xhdGUgbW91c3NlLiBTZXJ2ZWQgd2l0aCBmcmVzaCBiZXJyaWVzIGFuZCB3aGlwcGVkIGNyZWFtLiddO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhlcm9JbWFnZShJbWFnZSkpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlRGVzY3JpcHRpb24oJ01lbnVzJywgJyBTdGVwIGludG8gb3VyIHdvcmxkIG9mIGZpbmUgRnJlbmNoIGN1aXNpbmUsIHdoZXJlIGV2ZXJ5IGRpc2ggdGVsbHMgYSBzdG9yeSBvZiBwYXNzaW9uIGFuZCBhcnRpc3RyeS4gT3VyIG1lbnUgaXMgYSBjZWxlYnJhdGlvbiBvZiB0aGUgcmljaCBjdWxpbmFyeSB0cmFkaXRpb25zIG9mIEZyYW5jZSwgZmVhdHVyaW5nIGNsYXNzaWMgZGlzaGVzIHN1Y2ggYXMgQ29xIGF1IFZpbiwgU29sZSBNZXVuacOocmUsIGFuZCBDcsOobWUgQnLDu2zDqWUuIE91ciBpbmdyZWRpZW50cyBhcmUgc291cmNlZCBmcm9tIHRoZSBmaW5lc3Qgc3VwcGxpZXJzLCBhbmQgb3VyIGNoZWZzIHVzZSBvbmx5IHRoZSBmcmVzaGVzdCBhbmQgbW9zdCBmbGF2b3JmdWwgaW5ncmVkaWVudHMgdG8gY3JlYXRlIGVhY2ggZGlzaC4gV2hldGhlciB5b3VcXCdyZSBhIGNvbm5vaXNzZXVyIG9mIEZyZW5jaCBjdWlzaW5lIG9yIHNpbXBseSBsb29raW5nIGZvciBhIG1lbW9yYWJsZSBkaW5pbmcgZXhwZXJpZW5jZSwgd2UgaW52aXRlIHlvdSB0byBqb2luIHVzIGFuZCBpbmR1bGdlIGluIHRoZSB1bHRpbWF0ZSBjdWxpbmFyeSBqb3VybmV5IHRocm91Z2ggRnJhbmNlLicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgbWVudXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51c0Rpdi5jbGFzc0xpc3QuYWRkKCdtZW51cy1jb250YWluZXInKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVzRGl2KTtcblxuICAgIGNvbnN0IGFwcGV0aXplcnNNZW51ID0gY3JlYXRlTWVudUNvbXBvbmVudCgnQVBQRVRJWkVSUycsIGFwcGV0aXplcnNOYW1lcywgYXBwZXRpemVyc1ByaWNlcywgYXBwZXRpemVyc0Rlc2NyaXB0aW9ucyk7XG4gICAgbWVudXNEaXYuYXBwZW5kQ2hpbGQoYXBwZXRpemVyc01lbnUpO1xuXG4gICAgY29uc3Qgc2FsYWRzTWVudSA9IGNyZWF0ZU1lbnVDb21wb25lbnQoJ1NBTEFEUycsIHNhbGFkc05hbWVzLCBzYWxhZHNQcmljZXMsIHNhbGFkc0Rlc2NyaXB0aW9ucyk7XG4gICAgbWVudXNEaXYuYXBwZW5kQ2hpbGQoc2FsYWRzTWVudSk7XG5cbiAgICBjb25zdCBtYWluTWVudSA9IGNyZWF0ZU1lbnVDb21wb25lbnQoJ01BSU4gRElTSEVTJywgbWFpbk5hbWVzLCBtYWluUHJpY2VzLCBtYWluRGVzY3JpcHRpb25zKTtcbiAgICBtZW51c0Rpdi5hcHBlbmRDaGlsZChtYWluTWVudSk7XG5cbiAgICBjb25zdCBkZXNzZXJ0c01lbnUgPSBjcmVhdGVNZW51Q29tcG9uZW50KCdERVNTRVJUUycsIGRlc3NlcnRzTmFtZXMsIGRlc3NlcnRzUHJpY2VzLCBkZXNzZXJ0c0Rlc2NyaXB0aW9ucyk7XG4gICAgbWVudXNEaXYuYXBwZW5kQ2hpbGQoZGVzc2VydHNNZW51KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW4sXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7XG4iLCJpbXBvcnQgUmVkTG9nbyBmcm9tICcuL2ltZ3MvbG9nby1yZWQucG5nJztcblxuY29uc3QgY3JlYXRlTmF2QmFyID0gKCgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIGNvbnN0IG5hdkxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBuYXZMb2dvLnNyYyA9IFJlZExvZ287XG4gICAgbmF2TG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkxvZ28pO1xuXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xuICAgIGNvbnN0IGxvY2F0aW9ubGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsb2NhdGlvbmxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgbG9jYXRpb25saW5rLmhyZWYgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3BsYWNlLyVDRSVBNyVDRSVCMSVDRiU4MS4rJUNFJUE0JUNGJTgxJUNFJUI5JUNFJUJBJUNFJUJGJUNGJThEJUNGJTgwJUNFJUI3KzI0NSwrJUNFJTlBJUNFJUI3JUNGJTg2JUNFJUI5JUNGJTgzJUNFJUI5JUNFJUFDKzE0NSs2NC9AMzguMDg3MTA3NCwyMy43OTg3NzQ2LDE3ei9kYXRhPSEzbTEhNGIxITRtNiEzbTUhMXMweDE0YTE5ZjFhZGI2ZDViMTc6MHg0ZDdjOTQxMzQ0N2NkMDFhIThtMiEzZDM4LjA4NzEwNzQhNGQyMy44MDEzNDk1ITE2cyUyRmclMkYxMWNzZDhfazkxJztcbiAgICBsb2NhdGlvbmxpbmsuaW5uZXJIVE1MID0gJzxzcGFuPkNoYXIuIFRyaWtvdXBpIDI0NSwgPC9zcGFuPjxzcGFuPktpZmlzaWEgMTQ1IDY0PC9zcGFuPic7XG4gICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25saW5rKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1lbnVMaW5rLnRleHRDb250ZW50ID0gJ01FTlUnO1xuICAgIHVsLmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcblxuICAgIGNvbnN0IG91clN0b3J5TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgb3VyU3RvcnlMaW5rLnRleHRDb250ZW50ID0gJ09VUiBTVE9SWSc7XG4gICAgdWwuYXBwZW5kQ2hpbGQob3VyU3RvcnlMaW5rKTtcblxuICAgIGNvbnN0IGhvdXJzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaG91cnNMaW5rLnRleHRDb250ZW50ID0gJ0hPVVJTICYgTE9DQVRJT04nO1xuICAgIHVsLmFwcGVuZENoaWxkKGhvdXJzTGluayk7XG5cbiAgICBjb25zdCBjb21tdW5pdHlMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb21tdW5pdHlMaW5rLnRleHRDb250ZW50ID0gJ0NPTU1VTklUWSc7XG4gICAgdWwuYXBwZW5kQ2hpbGQoY29tbXVuaXR5TGluayk7XG5cbiAgICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29udGFjdExpbmsudGV4dENvbnRlbnQgPSAnQ09OVEFDVCc7XG4gICAgdWwuYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ29wZW4taWNvbicpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB1bC5jbGFzc0xpc3QudG9nZ2xlKCdyZXNwb25zaXZlLW5hdicpO1xuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4taWNvbicpO1xuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC50b2dnbGUoJ2Nsb3NlLWljb24nKTtcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IGJvZHkuc3R5bGUub3ZlcmZsb3cgPT09ICdoaWRkZW4nID8gJ2F1dG8nIDogJ2hpZGRlbic7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXIsXG4gICAgICAgIG1lbnVMaW5rLFxuICAgICAgICBvdXJTdG9yeUxpbmssXG4gICAgICAgIGhvdXJzTGluayxcbiAgICAgICAgY29tbXVuaXR5TGluayxcbiAgICAgICAgY29udGFjdExpbmssXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdkJhcjtcbiIsImltcG9ydCBJbWFnZSBmcm9tICcuL2ltZ3Mvb3Vyc3RvcnkuanBnJztcbmltcG9ydCB7IGNyZWF0ZUhlcm9JbWFnZSwgY3JlYXRlRGVzY3JpcHRpb24gfSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBjcmVhdGVPdXJTdG9yeSA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhlcm9JbWFnZShJbWFnZSkpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlRGVzY3JpcHRpb24oJ091ciBTdG9yeScsICdPdXIgcmVzdGF1cmFudCBoYXMgYSByaWNoIGFuZCBpbnNwaXJpbmcgaGlzdG9yeSB0aGF0IHNwYW5zIG92ZXIgdGhyZWUgZGVjYWRlcy4gSXQgd2FzIGZvdW5kZWQgYnkgYSBzdHJ1Z2dsaW5nIGltbWlncmFudCwgSnVsZSwgd2hvIGhhZCBhIGRlZXAgbG92ZSBmb3IgY29va2luZyBhbmQgZXNwZWNpYWxseSBGcmVuY2ggY3Vpc2luZS4gQ29taW5nIGZyb20gaHVtYmxlIGJlZ2lubmluZ3MsIEp1bGUgaGFkIGFsd2F5cyBkcmVhbWVkIG9mIG93bmluZyBoZXIgb3duIHJlc3RhdXJhbnQgYW5kIHNoYXJpbmcgaGVyIGN1bGluYXJ5IGNyZWF0aW9ucyB3aXRoIHRoZSB3b3JsZC4gSGVyIHBhc3Npb24gYW5kIGRlZGljYXRpb24gZXZlbnR1YWxseSBwYWlkIG9mZiwgYW5kIHNoZSB3YXMgYWJsZSB0byBvcGVuIGhlciBvd24gcmVzdGF1cmFudCBpbiB0aGUgaGVhcnQgb2YgdGhlIGNpdHkuPGJyPiBUaGUgbmVpZ2hib3Job29kIHdoZXJlIG91ciByZXN0YXVyYW50IGlzIGxvY2F0ZWQgaXMgc3RlZXBlZCBpbiBoaXN0b3J5IGFuZCBoYXMgYSByaWNoIGN1bHR1cmFsIGhlcml0YWdlLiBJdCBpcyBhIHBsYWNlIHdoZXJlIGFydGlzdHMsIHdyaXRlcnMsIGFuZCBtdXNpY2lhbnMgaGF2ZSBmcmVxdWVudGVkIGZvciBkZWNhZGVzLCBzZWVraW5nIGluc3BpcmF0aW9uIGFuZCBjcmVhdGl2aXR5LiBKdWxlIHdhcyBkcmF3biB0byB0aGlzIGFyZWEgYmVjYXVzZSBvZiBpdHMgYm9oZW1pYW4gYXRtb3NwaGVyZSBhbmQgYXJ0aXN0aWMgZW5lcmd5LCB3aGljaCBzaGUgZm91bmQgdG8gYmUgYSBwZXJmZWN0IG1hdGNoIGZvciBoZXIgb3duIGNyZWF0aXZlIHNwaXJpdC48YnI+IE92ZXIgdGhlIHllYXJzLCBvdXIgcmVzdGF1cmFudCBoYXMgYmVjb21lIGEgYmVsb3ZlZCBpbnN0aXR1dGlvbiBpbiB0aGUgY29tbXVuaXR5LCBrbm93biBmb3IgaXRzIGV4cXVpc2l0ZSBGcmVuY2ggY3Vpc2luZSwgZWxlZ2FudCBhbWJpYW5jZSwgYW5kIGltcGVjY2FibGUgc2VydmljZS4gSnVsZVxcJ3MgZGVkaWNhdGlvbiBhbmQgaGFyZCB3b3JrIGhhdmUgcGFpZCBvZmYsIGFuZCBzaGUgaGFzIGJlY29tZSBhbiBpbnNwaXJhdGlvbiB0byBtYW55LCBib3RoIGluIHRoZSBjdWxpbmFyeSB3b3JsZCBhbmQgYmV5b25kLiBUb2RheSwgb3VyIHJlc3RhdXJhbnQgY29udGludWVzIHRvIGhvbm9yIEp1bGVcXCdzIGxlZ2FjeSwgc2VydmluZyB1cCB0aGUgc2FtZSBkZWxpY2lvdXMgRnJlbmNoIGRpc2hlcyB0aGF0IGhhdmUgYmVlbiBkZWxpZ2h0aW5nIGRpbmVycyBmb3Igb3ZlciAzMCB5ZWFycy4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW4sXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU91clN0b3J5O1xuIiwiaW1wb3J0IHdoaXRlTG9nbyBmcm9tICcuL2ltZ3MvbG9nby13aGl0ZS5wbmcnO1xuXG5jb25zdCBjcmVhdGVIZXJvSW1hZ2UgPSAoaW1hZ2UpID0+IHtcbiAgICBjb25zdCBMb2dvID0gbmV3IEltYWdlKCk7XG4gICAgTG9nby5zcmMgPSB3aGl0ZUxvZ287XG4gICAgTG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICAgY29uc3QgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBuZXdJbWFnZS5zcmMgPSBpbWFnZTtcbiAgICBjb25zdCBpbWFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ2hlcm8taW1nJyk7XG4gICAgaW1hZ2VEaXYuYXBwZW5kQ2hpbGQobmV3SW1hZ2UpO1xuICAgIGltYWdlRGl2LmFwcGVuZENoaWxkKExvZ28pO1xuXG4gICAgcmV0dXJuIGltYWdlRGl2O1xufTtcblxuY29uc3QgY3JlYXRlRGVzY3JpcHRpb24gPSAodGl0bGUsIHRleHQpID0+IHtcbiAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBuZXdEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi13cmFwcGVyJyk7XG4gICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG5ld1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgY29uc3QgbmV3UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5ld1BhcmFncmFwaC5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIG5ld0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcbiAgICBuZXdEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChuZXdQYXJhZ3JhcGgpO1xuICAgIHJldHVybiBuZXdEZXNjcmlwdGlvbjtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUhlcm9JbWFnZSwgY3JlYXRlRGVzY3JpcHRpb24gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IE5hdkJhciBmcm9tICcuL25hdmJhcic7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBPdXJTdG9yeSBmcm9tICcuL3N0b3J5JztcbmltcG9ydCBDb21tdW5pdHkgZnJvbSAnLi9jb21tdW5pdHknO1xuaW1wb3J0IEhvdXJzQW5kTG9jYXRpb24gZnJvbSAnLi9sb2NhdGlvbic7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb250ZW50LmFwcGVuZENoaWxkKE5hdkJhci5oZWFkZXIpO1xuXG4vLyBjb250ZW50LmFwcGVuZENoaWxkKEhvbWUubWFpbik7XG4vLyBjb250ZW50LmFwcGVuZENoaWxkKE1lbnUubWFpbik7XG4vLyBjb250ZW50LmFwcGVuZENoaWxkKE91clN0b3J5Lm1haW4pO1xuLy8gY29udGVudC5hcHBlbmRDaGlsZChDb21tdW5pdHkubWFpbik7XG5jb250ZW50LmFwcGVuZENoaWxkKEhvdXJzQW5kTG9jYXRpb24ubWFpbik7XG5cbi8vIE5hdkJhci5tZW51TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuLy8gICAgIG1haW4uYXBwZW5kQ2hpbGQoTWVudS5tZW51KTtcbi8vIH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9