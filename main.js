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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --main-color: #701515;\n    --main-font: 'Cormorant Garamond', serif;\n    --tall-pic-height: 700px;\n    --short-pic-height: 350px;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Hero Image for each page */\n\n.hero-img {\n    position: relative;\n    width: 100%;\n    padding-top: 10px;\n    z-index: -100;\n    \n}\n\n.hero-img img{\n    display: block;\n    width: 100%;\n    height: auto;\n}\n\n.hero-img .logo {\n    position: absolute;\n    width: 200px;\n    bottom: 5%;\n    left: calc(50% - 100px);\n\n    \n}\n\n/* Description for each page */\n\n.description-wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-family: var(--main-font);\n    font-size: 1.2rem;\n    max-width: 1000px;\n    padding: 10px;\n}\n\n.description-wrapper h2 {\n    text-align: center;\n    font-style: italic;\n    font-weight: 700;\n    font-size: 3rem;\n}\n\n/* Main content and and nav bar */\n\n#content {\n    display: flex;\n    min-height: 100vh;\n}\n\n.header {\n    flex: 0 1 250px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    padding: 15px;\n    background-color: #FFF;\n    position: sticky;\n    top: 0;\n    height: 100%;\n}\n\nmain {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    padding: 0 10px;\n    gap: 80px;\n    align-items: center;\n    padding-bottom: 80px;\n\n}\n\n.logo {\n    width: 200px;\n}\n\n.location {\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    padding: 20px;\n    padding-top: 30px;\n    padding-bottom: 30px;\n}\n\n.location a{\n    text-decoration: none;\n    color: var(--main-color);\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    font-family: var(--main-font);\n    font-style: italic;\n    font-weight: 400;\n    font-size: 1.2rem;\n}\n\n.location a:hover{\n    color: #000;\n}\n\nnav ul {\n    list-style-type: none;\n    color: var(--main-color);\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    align-items: center;\n    font-family: var(--main-font);\n    font-weight: 700;\n    font-size: 1.2rem;\n}\n\n.open-icon, .close-icon {\n    background-color: var(--main-color);\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    width: 50px;\n    height: 50px;\n    display: none;\n}\n\n.close-icon {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nnav ul li:hover{\n    cursor: pointer;\n    color: #000;\n}\n\n/* Homepage */\n\n.images-grid {\n    flex: 1;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n}\n\n.col {\n    flex: 1;\n    max-width: 50%;\n}\n\n.col .img {\n  width: 100%;\n  margin-top: 10px;\n  vertical-align: middle;\n}\n\n.description {\n    text-align: center;\n    width: 70%;\n    font-family: var(--main-font);\n    font-weight: 400;\n    font-style: italic;\n    font-size: 2rem;\n}\n\n.lower-grid {\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 10px;\n}\n\n.lower-grid .row {\n    display: flex;\n    gap: 10px;\n}\n\n.lower-grid .img {\n    flex: 1;\n    width: 100%;\n}\n\n.menu-div, .location-div {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    \n}\n\n.text-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 20px;\n    padding: 50px 50px ;\n    font-family: var(--main-font);\n    font-size: 1.3rem;\n}\n\n.text-wrapper h2 {\n    font-weight: 700;\n    font-style: italic;\n    font-size: 2.6rem;\n}\n\n.text-wrapper p {\n    font-weight: 400;\n}\n\n.btn {\n    width: 200px;\n    padding: 10px;\n    background-color: #FFF;\n    border: 1px solid var(--main-color);\n    color: var(--main-color);\n    margin-top: 50px;\n    font-family: var(--main-font);\n    font-weight: 600;\n    font-size: 1.1rem;\n}\n\n.btn:hover {\n    cursor: pointer;\n    border: 1px solid #000;\n    color: #000;\n}\n\n/* Menu Css */\n.menus-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    max-width: 1000px;\n    gap: 15px;\n    font-family: var(--main-font);\n    font-size: 1.3rem;\n}\n\n.menu-section {\n    max-width: 450px;\n    padding: 15px;\n}\n\n.menu-section h3 {\n    padding-bottom: 20px;\n    font-style: italic;\n    font-weight: 700;\n}\n\n.menu-section ul {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.menu-section li p {\n    font-style: italic;\n    padding-top: 10px;\n}\n\n.menu-section li h4 {\n    display: flex;\n    justify-content: space-between;\n}\n\n/* Hours and Location Page */\n\n.hours-location {\n    display: flex;\n    width: 600px;\n    justify-content: space-between;\n    font-family: var(--main-font);\n    font-weight: 400;\n    font-size: 1.3rem;\n}\n\n.map iframe{\n    width: 600px;\n    height: 450px;\n}\n\n/* Contact page */\n\n.contact-form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 600px;\n    font-family: var(--main-font);\n}\n\n.contact-form label{\n    font-weight: 600;\n}\n\n.contact-form label span {\n    color: rgb(126, 126, 126);\n    font-style: italic;\n\n}\n\n.contact-form input, .contact-form textarea {\n    width: 100%;\n    padding: 15px;\n    border: 1px solid #000;\n    font-family: var(--main-font);\n    font-size: 1.3rem;\n}\n\n.contact-form input::placeholder, .contact-form textarea::placeholder{\n    font-family: var(--main-font);\n    font-size: 1.3rem;\n    font-weight: 400;\n    color: rgb(126, 126, 126);\n    opacity: 1;\n}\n\n\n@media only screen and (max-width: 980px) {\n    #content{\n        flex-direction: column;\n    }\n\n    .header {\n        flex: 0 1 100px;\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-around;\n    }\n\n    .logo {\n        width: 150px;\n    }\n\n    .location{\n        display: none;\n    }\n\n    nav ul{\n        display: none;\n    }\n\n    .open-icon, .close-icon {\n        display: inline-block;\n    }\n\n\n    .responsive-nav {\n        width: 100%;\n        min-height: calc(100vh - 100px);\n        display: flex;\n        padding-top: 20px;\n        position: absolute;\n        top: 100px;\n        left: 0;\n        background-color: #FFF;\n        border-top: 1px gray solid;\n    }\n\n    .description{\n        width: 95%;\n    }\n\n    .lower-grid .row {\n        flex-direction: column-reverse;\n    }\n\n\n    .menu-div, .location-div {\n        min-height: 400px;\n    }\n\n    .lower-grid > .row ~.row {\n        flex-direction: column;\n    }\n\n    .text-wrapper {\n        padding: 20px 20px;\n    }\n\n    .hero-img .logo {\n        width: 100px;\n        left: calc(50vw - 50px);\n    }\n\n    .menus-container {\n        justify-content: center;\n    }\n    \n}\n\n@media only screen and (max-width: 600px) {\n    .images-grid {\n        flex-direction: column;\n        gap: 0;\n    }\n\n    .col {\n        max-width: 100%;\n    }\n\n    .description{\n        width: 100%;\n    }\n    \n    .map iframe, .hours-location, .contact-form{\n        width: 300px;\n    }\n\n    .hours-location {\n        flex-direction: column;\n        gap: 20px;\n    }\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap');\n\n:root{\n    --main-color: #701515;\n    --main-font: 'Cormorant Garamond', serif;\n    --tall-pic-height: 700px;\n    --short-pic-height: 350px;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Hero Image for each page */\n\n.hero-img {\n    position: relative;\n    width: 100%;\n    padding-top: 10px;\n    z-index: -100;\n    \n}\n\n.hero-img img{\n    display: block;\n    width: 100%;\n    height: auto;\n}\n\n.hero-img .logo {\n    position: absolute;\n    width: 200px;\n    bottom: 5%;\n    left: calc(50% - 100px);\n\n    \n}\n\n/* Description for each page */\n\n.description-wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-family: var(--main-font);\n    font-size: 1.2rem;\n    max-width: 1000px;\n    padding: 10px;\n}\n\n.description-wrapper h2 {\n    text-align: center;\n    font-style: italic;\n    font-weight: 700;\n    font-size: 3rem;\n}\n\n/* Main content and and nav bar */\n\n#content {\n    display: flex;\n    min-height: 100vh;\n}\n\n.header {\n    flex: 0 1 250px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    padding: 15px;\n    background-color: #FFF;\n    position: sticky;\n    top: 0;\n    height: 100%;\n}\n\nmain {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    padding: 0 10px;\n    gap: 80px;\n    align-items: center;\n    padding-bottom: 80px;\n\n}\n\n.logo {\n    width: 200px;\n}\n\n.location {\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    padding: 20px;\n    padding-top: 30px;\n    padding-bottom: 30px;\n}\n\n.location a{\n    text-decoration: none;\n    color: var(--main-color);\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    font-family: var(--main-font);\n    font-style: italic;\n    font-weight: 400;\n    font-size: 1.2rem;\n}\n\n.location a:hover{\n    color: #000;\n}\n\nnav ul {\n    list-style-type: none;\n    color: var(--main-color);\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    align-items: center;\n    font-family: var(--main-font);\n    font-weight: 700;\n    font-size: 1.2rem;\n}\n\n.open-icon, .close-icon {\n    background-color: var(--main-color);\n    -webkit-mask-image: url('imgs/menu.svg');\n    mask-image: url('imgs/menu.svg');\n    background-repeat: no-repeat;\n    width: 50px;\n    height: 50px;\n    display: none;\n}\n\n.close-icon {\n    -webkit-mask-image: url('imgs/close.svg');\n    mask-image: url('imgs/close.svg');\n}\n\nnav ul li:hover{\n    cursor: pointer;\n    color: #000;\n}\n\n/* Homepage */\n\n.images-grid {\n    flex: 1;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n}\n\n.col {\n    flex: 1;\n    max-width: 50%;\n}\n\n.col .img {\n  width: 100%;\n  margin-top: 10px;\n  vertical-align: middle;\n}\n\n.description {\n    text-align: center;\n    width: 70%;\n    font-family: var(--main-font);\n    font-weight: 400;\n    font-style: italic;\n    font-size: 2rem;\n}\n\n.lower-grid {\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 10px;\n}\n\n.lower-grid .row {\n    display: flex;\n    gap: 10px;\n}\n\n.lower-grid .img {\n    flex: 1;\n    width: 100%;\n}\n\n.menu-div, .location-div {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    \n}\n\n.text-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 20px;\n    padding: 50px 50px ;\n    font-family: var(--main-font);\n    font-size: 1.3rem;\n}\n\n.text-wrapper h2 {\n    font-weight: 700;\n    font-style: italic;\n    font-size: 2.6rem;\n}\n\n.text-wrapper p {\n    font-weight: 400;\n}\n\n.btn {\n    width: 200px;\n    padding: 10px;\n    background-color: #FFF;\n    border: 1px solid var(--main-color);\n    color: var(--main-color);\n    margin-top: 50px;\n    font-family: var(--main-font);\n    font-weight: 600;\n    font-size: 1.1rem;\n}\n\n.btn:hover {\n    cursor: pointer;\n    border: 1px solid #000;\n    color: #000;\n}\n\n/* Menu Css */\n.menus-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    max-width: 1000px;\n    gap: 15px;\n    font-family: var(--main-font);\n    font-size: 1.3rem;\n}\n\n.menu-section {\n    max-width: 450px;\n    padding: 15px;\n}\n\n.menu-section h3 {\n    padding-bottom: 20px;\n    font-style: italic;\n    font-weight: 700;\n}\n\n.menu-section ul {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.menu-section li p {\n    font-style: italic;\n    padding-top: 10px;\n}\n\n.menu-section li h4 {\n    display: flex;\n    justify-content: space-between;\n}\n\n/* Hours and Location Page */\n\n.hours-location {\n    display: flex;\n    width: 600px;\n    justify-content: space-between;\n    font-family: var(--main-font);\n    font-weight: 400;\n    font-size: 1.3rem;\n}\n\n.map iframe{\n    width: 600px;\n    height: 450px;\n}\n\n/* Contact page */\n\n.contact-form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 600px;\n    font-family: var(--main-font);\n}\n\n.contact-form label{\n    font-weight: 600;\n}\n\n.contact-form label span {\n    color: rgb(126, 126, 126);\n    font-style: italic;\n\n}\n\n.contact-form input, .contact-form textarea {\n    width: 100%;\n    padding: 15px;\n    border: 1px solid #000;\n    font-family: var(--main-font);\n    font-size: 1.3rem;\n}\n\n.contact-form input::placeholder, .contact-form textarea::placeholder{\n    font-family: var(--main-font);\n    font-size: 1.3rem;\n    font-weight: 400;\n    color: rgb(126, 126, 126);\n    opacity: 1;\n}\n\n\n@media only screen and (max-width: 980px) {\n    #content{\n        flex-direction: column;\n    }\n\n    .header {\n        flex: 0 1 100px;\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-around;\n    }\n\n    .logo {\n        width: 150px;\n    }\n\n    .location{\n        display: none;\n    }\n\n    nav ul{\n        display: none;\n    }\n\n    .open-icon, .close-icon {\n        display: inline-block;\n    }\n\n\n    .responsive-nav {\n        width: 100%;\n        min-height: calc(100vh - 100px);\n        display: flex;\n        padding-top: 20px;\n        position: absolute;\n        top: 100px;\n        left: 0;\n        background-color: #FFF;\n        border-top: 1px gray solid;\n    }\n\n    .description{\n        width: 95%;\n    }\n\n    .lower-grid .row {\n        flex-direction: column-reverse;\n    }\n\n\n    .menu-div, .location-div {\n        min-height: 400px;\n    }\n\n    .lower-grid > .row ~.row {\n        flex-direction: column;\n    }\n\n    .text-wrapper {\n        padding: 20px 20px;\n    }\n\n    .hero-img .logo {\n        width: 100px;\n        left: calc(50vw - 50px);\n    }\n\n    .menus-container {\n        justify-content: center;\n    }\n    \n}\n\n@media only screen and (max-width: 600px) {\n    .images-grid {\n        flex-direction: column;\n        gap: 0;\n    }\n\n    .col {\n        max-width: 100%;\n    }\n\n    .description{\n        width: 100%;\n    }\n    \n    .map iframe, .hours-location, .contact-form{\n        width: 300px;\n    }\n\n    .hours-location {\n        flex-direction: column;\n        gap: 20px;\n    }\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_Contact_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/Contact.jpg */ "./src/imgs/Contact.jpg");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");



const createInput = (type, name) => {
    const label = document.createElement('label');
    label.htmlFor = name;
    label.innerHTML = `${name} - <span>Required</span>`;

    const input = type === 'textarea' ? document.createElement(type) : document.createElement('input');
    if (type !== 'textarea') {
        input.type = type;
    }
    input.placeholder = name;
    input.name = name;
    input.id = name;
    input.required = true;

    const div = document.createElement('div');
    div.appendChild(label);
    div.appendChild(input);

    return div;
};

const createContact = (() => {
    const main = document.createElement('main');
    main.appendChild((0,_util__WEBPACK_IMPORTED_MODULE_1__.createHeroImage)(_imgs_Contact_jpg__WEBPACK_IMPORTED_MODULE_0__));
    const description = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createDescription)('Contact', 'For inquiries about hosting your dream wedding or any other special event at our enchanting venue, please don\'t hesitate to reach out to our dedicated events team. We would be delighted to assist you in creating an unforgettable experience tailored to your needs. To savor an exquisite dining experience or to make a reservation, kindly contact our friendly staff who will be delighted to assist you in securing a table for an unforgettable culinary journey.');
    main.appendChild(description);

    const form = document.createElement('form');
    form.classList.add('contact-form');
    main.appendChild(form);

    form.appendChild(createInput('text', 'Name'));
    form.appendChild(createInput('email', 'Email'));
    form.appendChild(createInput('number', 'Phone Number'));
    form.appendChild(createInput('textarea', 'Your Message'));

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('btn');
    submitBtn.type = 'submit';
    submitBtn.innerHTML = 'Send';
    form.appendChild(submitBtn);

    return {
        main,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);


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

/***/ "./src/imgs/Contact.jpg":
/*!******************************!*\
  !*** ./src/imgs/Contact.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4daf067edb208ce850e7.jpg";

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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./src/style.css");









const content = document.getElementById('content');
content.appendChild(_navbar__WEBPACK_IMPORTED_MODULE_0__["default"].header);

// content.appendChild(Home.main);
// content.appendChild(Menu.main);
// content.appendChild(OurStory.main);
// content.appendChild(Community.main);
// content.appendChild(HoursAndLocation.main);
content.appendChild(_contact__WEBPACK_IMPORTED_MODULE_6__["default"].main);

// NavBar.menuLink.addEventListener('click', () => {
//     main.innerHTML = '';
//     main.appendChild(Menu.menu);
// });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFB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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQThCO0FBQ0o7QUFDQTtBQUNLO0FBQ0s7QUFDTTtBQUNWO0FBQ1g7O0FBRXJCO0FBQ0Esb0JBQW9CLHNEQUFhOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFEQUFZOztBQUVoQztBQUNBO0FBQ0E7QUFDQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbW11bml0eS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3RvcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImltZ3MvbWVudS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJpbWdzL2Nsb3NlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29ybW9yYW50K0dhcmFtb25kOml0YWwsd2dodEAwLDQwMDswLDYwMDswLDcwMDsxLDQwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLW1haW4tY29sb3I6ICM3MDE1MTU7XFxuICAgIC0tbWFpbi1mb250OiAnQ29ybW9yYW50IEdhcmFtb25kJywgc2VyaWY7XFxuICAgIC0tdGFsbC1waWMtaGVpZ2h0OiA3MDBweDtcXG4gICAgLS1zaG9ydC1waWMtaGVpZ2h0OiAzNTBweDtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogSGVybyBJbWFnZSBmb3IgZWFjaCBwYWdlICovXFxuXFxuLmhlcm8taW1nIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHotaW5kZXg6IC0xMDA7XFxuICAgIFxcbn1cXG5cXG4uaGVyby1pbWcgaW1ne1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmhlcm8taW1nIC5sb2dvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJvdHRvbTogNSU7XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xcblxcbiAgICBcXG59XFxuXFxuLyogRGVzY3JpcHRpb24gZm9yIGVhY2ggcGFnZSAqL1xcblxcbi5kZXNjcmlwdGlvbi13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24td3JhcHBlciBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi8qIE1haW4gY29udGVudCBhbmQgYW5kIG5hdiBiYXIgKi9cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZmxleDogMCAxIDI1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBnYXA6IDgwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcblxcbn1cXG5cXG4ubG9nbyB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLmxvY2F0aW9uIGF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubG9jYXRpb24gYTpob3ZlcntcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbm5hdiB1bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLm9wZW4taWNvbiwgLmNsb3NlLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2xvc2UtaWNvbiB7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxubmF2IHVsIGxpOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKiBIb21lcGFnZSAqL1xcblxcbi5pbWFnZXMtZ3JpZCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY29sIHtcXG4gICAgZmxleDogMTtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxufVxcblxcbi5jb2wgLmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmxvd2VyLWdyaWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmxvd2VyLWdyaWQgLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmxvd2VyLWdyaWQgLmltZyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWVudS1kaXYsIC5sb2NhdGlvbi1kaXYge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLnRleHQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDUwcHggNTBweCA7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnRleHQtd3JhcHBlciBoMiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAyLjZyZW07XFxufVxcblxcbi50ZXh0LXdyYXBwZXIgcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5idG4ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi8qIE1lbnUgQ3NzICovXFxuLm1lbnVzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5tZW51LXNlY3Rpb24ge1xcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uIGgzIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbiB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbiBsaSBwIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbiBsaSBoNCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogSG91cnMgYW5kIExvY2F0aW9uIFBhZ2UgKi9cXG5cXG4uaG91cnMtbG9jYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubWFwIGlmcmFtZXtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcbn1cXG5cXG4vKiBDb250YWN0IHBhZ2UgKi9cXG5cXG4uY29udGFjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbn1cXG5cXG4uY29udGFjdC1mb3JtIGxhYmVse1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uY29udGFjdC1mb3JtIGxhYmVsIHNwYW4ge1xcbiAgICBjb2xvcjogcmdiKDEyNiwgMTI2LCAxMjYpO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuXFxufVxcblxcbi5jb250YWN0LWZvcm0gaW5wdXQsIC5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uY29udGFjdC1mb3JtIGlucHV0OjpwbGFjZWhvbGRlciwgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgY29sb3I6IHJnYigxMjYsIDEyNiwgMTI2KTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xcbiAgICAjY29udGVudHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciB7XFxuICAgICAgICBmbGV4OiAwIDEgMTAwcHg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICB9XFxuXFxuICAgIC5sb2dvIHtcXG4gICAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgfVxcblxcbiAgICAubG9jYXRpb257XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIG5hdiB1bHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm9wZW4taWNvbiwgLmNsb3NlLWljb24ge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB9XFxuXFxuXFxuICAgIC5yZXNwb25zaXZlLW5hdiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDEwMHB4O1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggZ3JheSBzb2xpZDtcXG4gICAgfVxcblxcbiAgICAuZGVzY3JpcHRpb257XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICB9XFxuXFxuICAgIC5sb3dlci1ncmlkIC5yb3cge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICB9XFxuXFxuXFxuICAgIC5tZW51LWRpdiwgLmxvY2F0aW9uLWRpdiB7XFxuICAgICAgICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gICAgfVxcblxcbiAgICAubG93ZXItZ3JpZCA+IC5yb3cgfi5yb3cge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAudGV4dC13cmFwcGVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcXG4gICAgfVxcblxcbiAgICAuaGVyby1pbWcgLmxvZ28ge1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgbGVmdDogY2FsYyg1MHZ3IC0gNTBweCk7XFxuICAgIH1cXG5cXG4gICAgLm1lbnVzLWNvbnRhaW5lciB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbiAgICBcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuaW1hZ2VzLWdyaWQge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMDtcXG4gICAgfVxcblxcbiAgICAuY29sIHtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAuZGVzY3JpcHRpb257XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1hcCBpZnJhbWUsIC5ob3Vycy1sb2NhdGlvbiwgLmNvbnRhY3QtZm9ybXtcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgfVxcblxcbiAgICAuaG91cnMtbG9jYXRpb24ge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMjBweDtcXG4gICAgfVxcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHdDQUF3QztJQUN4Qyx3QkFBd0I7SUFDeEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUEsNkJBQTZCOztBQUU3QjtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsdUJBQXVCOzs7QUFHM0I7O0FBRUEsOEJBQThCOztBQUU5QjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBLGlDQUFpQzs7QUFFakM7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sWUFBWTtBQUNoQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsMkRBQXdDO0lBQ3hDLG1EQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMkRBQXlDO0lBQ3pDLG1EQUFpQztBQUNyQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUEsYUFBYTs7QUFFYjtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLE9BQU87SUFDUCxjQUFjO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsV0FBVztBQUNmOztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztJQUNULG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBLGFBQWE7QUFDYjtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQSw0QkFBNEI7O0FBRTVCO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQSxpQkFBaUI7O0FBRWpCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixVQUFVO0FBQ2Q7OztBQUdBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxxQkFBcUI7SUFDekI7OztJQUdBO1FBQ0ksV0FBVztRQUNYLCtCQUErQjtRQUMvQixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsT0FBTztRQUNQLHNCQUFzQjtRQUN0QiwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSw4QkFBOEI7SUFDbEM7OztJQUdBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLHVCQUF1QjtJQUMzQjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLE1BQU07SUFDVjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLFNBQVM7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvcm1vcmFudCtHYXJhbW9uZDppdGFsLHdnaHRAMCw0MDA7MCw2MDA7MCw3MDA7MSw0MDA7MSw2MDA7MSw3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3R7XFxuICAgIC0tbWFpbi1jb2xvcjogIzcwMTUxNTtcXG4gICAgLS1tYWluLWZvbnQ6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcXG4gICAgLS10YWxsLXBpYy1oZWlnaHQ6IDcwMHB4O1xcbiAgICAtLXNob3J0LXBpYy1oZWlnaHQ6IDM1MHB4O1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBIZXJvIEltYWdlIGZvciBlYWNoIHBhZ2UgKi9cXG5cXG4uaGVyby1pbWcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgei1pbmRleDogLTEwMDtcXG4gICAgXFxufVxcblxcbi5oZXJvLWltZyBpbWd7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uaGVyby1pbWcgLmxvZ28ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm90dG9tOiA1JTtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XFxuXFxuICAgIFxcbn1cXG5cXG4vKiBEZXNjcmlwdGlvbiBmb3IgZWFjaCBwYWdlICovXFxuXFxuLmRlc2NyaXB0aW9uLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbi13cmFwcGVyIGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLyogTWFpbiBjb250ZW50IGFuZCBhbmQgbmF2IGJhciAqL1xcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBmbGV4OiAwIDEgMjUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbm1haW4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIGdhcDogODBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XFxuXFxufVxcblxcbi5sb2dvIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4ubG9jYXRpb24gYXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5sb2NhdGlvbiBhOmhvdmVye1xcbiAgICBjb2xvcjogIzAwMDtcXG59XFxuXFxubmF2IHVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ub3Blbi1pY29uLCAuY2xvc2UtaWNvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnaW1ncy9tZW51LnN2ZycpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoJ2ltZ3MvbWVudS5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNsb3NlLWljb24ge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnaW1ncy9jbG9zZS5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdpbWdzL2Nsb3NlLnN2ZycpO1xcbn1cXG5cXG5uYXYgdWwgbGk6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi8qIEhvbWVwYWdlICovXFxuXFxuLmltYWdlcy1ncmlkIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5jb2wge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG59XFxuXFxuLmNvbCAuaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubG93ZXItZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubG93ZXItZ3JpZCAucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubG93ZXItZ3JpZCAuaW1nIHtcXG4gICAgZmxleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tZW51LWRpdiwgLmxvY2F0aW9uLWRpdiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4udGV4dC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogNTBweCA1MHB4IDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4udGV4dC13cmFwcGVyIGgyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDIuNnJlbTtcXG59XFxuXFxuLnRleHQtd3JhcHBlciBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmJ0biB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLyogTWVudSBDc3MgKi9cXG4ubWVudXMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbiB7XFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5tZW51LXNlY3Rpb24gaDMge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uIHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uIGxpIHAge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uIGxpIGg0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiBIb3VycyBhbmQgTG9jYXRpb24gUGFnZSAqL1xcblxcbi5ob3Vycy1sb2NhdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5tYXAgaWZyYW1le1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGhlaWdodDogNDUwcHg7XFxufVxcblxcbi8qIENvbnRhY3QgcGFnZSAqL1xcblxcbi5jb250YWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxufVxcblxcbi5jb250YWN0LWZvcm0gbGFiZWx7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5jb250YWN0LWZvcm0gbGFiZWwgc3BhbiB7XFxuICAgIGNvbG9yOiByZ2IoMTI2LCAxMjYsIDEyNik7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXG59XFxuXFxuLmNvbnRhY3QtZm9ybSBpbnB1dCwgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5jb250YWN0LWZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLCAuY29udGFjdC1mb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlcntcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBjb2xvcjogcmdiKDEyNiwgMTI2LCAxMjYpO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XFxuICAgICNjb250ZW50e1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyIHtcXG4gICAgICAgIGZsZXg6IDAgMSAxMDBweDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIH1cXG5cXG4gICAgLmxvZ28ge1xcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5sb2NhdGlvbntcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgbmF2IHVse1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAub3Blbi1pY29uLCAuY2xvc2UtaWNvbiB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIH1cXG5cXG5cXG4gICAgLnJlc3BvbnNpdmUtbmF2IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMTAwcHg7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBncmF5IHNvbGlkO1xcbiAgICB9XFxuXFxuICAgIC5kZXNjcmlwdGlvbntcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgIH1cXG5cXG4gICAgLmxvd2VyLWdyaWQgLnJvdyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIH1cXG5cXG5cXG4gICAgLm1lbnUtZGl2LCAubG9jYXRpb24tZGl2IHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5sb3dlci1ncmlkID4gLnJvdyB+LnJvdyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC50ZXh0LXdyYXBwZXIge1xcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5oZXJvLWltZyAubG9nbyB7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBsZWZ0OiBjYWxjKDUwdncgLSA1MHB4KTtcXG4gICAgfVxcblxcbiAgICAubWVudXMtY29udGFpbmVyIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICAgIFxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5pbWFnZXMtZ3JpZCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAwO1xcbiAgICB9XFxuXFxuICAgIC5jb2wge1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5kZXNjcmlwdGlvbntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWFwIGlmcmFtZSwgLmhvdXJzLWxvY2F0aW9uLCAuY29udGFjdC1mb3Jte1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5ob3Vycy1sb2NhdGlvbiB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICB9XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEltYWdlIGZyb20gJy4vaW1ncy9jb21tdW5pdHkuanBnJztcbmltcG9ydCB7IGNyZWF0ZUhlcm9JbWFnZSwgY3JlYXRlRGVzY3JpcHRpb24gfSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBjcmVhdGVDb21tdW5pdHkgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIZXJvSW1hZ2UoSW1hZ2UpKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZURlc2NyaXB0aW9uKCdDb21tdW5pdHknLCAnQXQgb3VyIHJlc3RhdXJhbnQsIHdlIGJlbGlldmUgaW4gdGhlIHBvd2VyIG9mIGdpdmluZyBiYWNrIHRvIHRoZSBjb21tdW5pdHkgdGhhdCBoYXMgc3VwcG9ydGVkIHVzIHRocm91Z2hvdXQgdGhlIHllYXJzLiBXZSBoYXZlIGZvcm1lZCBzdHJvbmcgcGFydG5lcnNoaXBzIHdpdGggbG9jYWwgY2hhcml0aWVzIGFuZCBvcmdhbml6YXRpb25zLCBjb2xsYWJvcmF0aW5nIG9uIGluaXRpYXRpdmVzIHRvIG1ha2UgYSBwb3NpdGl2ZSBpbXBhY3QuIE9uZSBvZiBvdXIgcHJvdWRlc3QgYWNoaWV2ZW1lbnRzIGlzIG91ciBvbmdvaW5nIGNvbW1pdG1lbnQgdG8gZmVlZGluZyB0aGUgaG9tZWxlc3MgYW5kIHJlZnVnZWVzIGluIG91ciBjb21tdW5pdHkuIFRocm91Z2ggcmVndWxhciBtZWFsIGRvbmF0aW9ucyBhbmQgdm9sdW50ZWVyIGVmZm9ydHMsIHdlIHN0cml2ZSB0byBwcm92aWRlIG5vdXJpc2htZW50IGFuZCBhIHNlbnNlIG9mIGhvcGUgdG8gdGhvc2UgaW4gbmVlZC4gV2UgYmVsaWV2ZSB0aGF0IGV2ZXJ5b25lIGRlc2VydmVzIGEgd2FybSBtZWFsIGFuZCBhIHdlbGNvbWluZyBlbnZpcm9ubWVudCwgYW5kIHdlIGFyZSBkZWRpY2F0ZWQgdG8gY3JlYXRpbmcganVzdCB0aGF0Ljxicj4gSW4gYWRkaXRpb24gdG8gb3VyIHN1cHBvcnQgZm9yIHRoZSBob21lbGVzcyBhbmQgcmVmdWdlZXMsIHdlIGhhdmUgY3JlYXRlZCBhIHdhcm0gYW5kIHN1cHBvcnRpdmUgZW52aXJvbm1lbnQgZm9yIHZ1bG5lcmFibGUgaW5kaXZpZHVhbHMgd2l0aGluIG91ciBjb21tdW5pdHkuIFdlIGhhdmUgZXN0YWJsaXNoZWQgcHJvZ3JhbXMgdG8gcHJvdmlkZSBqb2IgdHJhaW5pbmcgYW5kIG9wcG9ydHVuaXRpZXMgZm9yIHRob3NlIGZhY2luZyBlbXBsb3ltZW50IGNoYWxsZW5nZXMsIGhlbHBpbmcgdGhlbSBnYWluIHZhbHVhYmxlIHNraWxscyBhbmQgcmVnYWluIHRoZWlyIGNvbmZpZGVuY2UuIEZ1cnRoZXJtb3JlLCB3ZSBmcmVxdWVudGx5IGhvc3QgZnVuZHJhaXNpbmcgZXZlbnRzIGFuZCBjaGFyaXR5IGRpbm5lcnMsIHdoZXJlIHByb2NlZWRzIGFyZSBkaXJlY3RlZCB0b3dhcmRzIGxvY2FsIGNhdXNlcyB0aGF0IGZvY3VzIG9uIGVkdWNhdGlvbiwgaGVhbHRoY2FyZSwgYW5kIHNvY2lhbCB3ZWxmYXJlLiBXZSBhcmUgcHJvdWQgdG8gYmUgYSByZXN0YXVyYW50IHRoYXQgbm90IG9ubHkgc2VydmVzIGV4cXVpc2l0ZSBjdWlzaW5lIGJ1dCBhbHNvIHNlcnZlcyBhcyBhIHBpbGxhciBvZiBzdXBwb3J0IGFuZCBjb21wYXNzaW9uIGZvciBvdXIgY29tbXVuaXR5LCBzdGFuZGluZyBzaWRlIGJ5IHNpZGUgd2l0aCB0aG9zZSB3aG8gbmVlZCBpdCBtb3N0LicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbixcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tbXVuaXR5O1xuIiwiaW1wb3J0IEltYWdlIGZyb20gJy4vaW1ncy9Db250YWN0LmpwZyc7XG5pbXBvcnQgeyBjcmVhdGVIZXJvSW1hZ2UsIGNyZWF0ZURlc2NyaXB0aW9uIH0gZnJvbSAnLi91dGlsJztcblxuY29uc3QgY3JlYXRlSW5wdXQgPSAodHlwZSwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5odG1sRm9yID0gbmFtZTtcbiAgICBsYWJlbC5pbm5lckhUTUwgPSBgJHtuYW1lfSAtIDxzcGFuPlJlcXVpcmVkPC9zcGFuPmA7XG5cbiAgICBjb25zdCBpbnB1dCA9IHR5cGUgPT09ICd0ZXh0YXJlYScgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpZiAodHlwZSAhPT0gJ3RleHRhcmVhJykge1xuICAgICAgICBpbnB1dC50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBuYW1lO1xuICAgIGlucHV0Lm5hbWUgPSBuYW1lO1xuICAgIGlucHV0LmlkID0gbmFtZTtcbiAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4gZGl2O1xufTtcblxuY29uc3QgY3JlYXRlQ29udGFjdCA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhlcm9JbWFnZShJbWFnZSkpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlRGVzY3JpcHRpb24oJ0NvbnRhY3QnLCAnRm9yIGlucXVpcmllcyBhYm91dCBob3N0aW5nIHlvdXIgZHJlYW0gd2VkZGluZyBvciBhbnkgb3RoZXIgc3BlY2lhbCBldmVudCBhdCBvdXIgZW5jaGFudGluZyB2ZW51ZSwgcGxlYXNlIGRvblxcJ3QgaGVzaXRhdGUgdG8gcmVhY2ggb3V0IHRvIG91ciBkZWRpY2F0ZWQgZXZlbnRzIHRlYW0uIFdlIHdvdWxkIGJlIGRlbGlnaHRlZCB0byBhc3Npc3QgeW91IGluIGNyZWF0aW5nIGFuIHVuZm9yZ2V0dGFibGUgZXhwZXJpZW5jZSB0YWlsb3JlZCB0byB5b3VyIG5lZWRzLiBUbyBzYXZvciBhbiBleHF1aXNpdGUgZGluaW5nIGV4cGVyaWVuY2Ugb3IgdG8gbWFrZSBhIHJlc2VydmF0aW9uLCBraW5kbHkgY29udGFjdCBvdXIgZnJpZW5kbHkgc3RhZmYgd2hvIHdpbGwgYmUgZGVsaWdodGVkIHRvIGFzc2lzdCB5b3UgaW4gc2VjdXJpbmcgYSB0YWJsZSBmb3IgYW4gdW5mb3JnZXR0YWJsZSBjdWxpbmFyeSBqb3VybmV5LicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZm9ybScpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUlucHV0KCd0ZXh0JywgJ05hbWUnKSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVJbnB1dCgnZW1haWwnLCAnRW1haWwnKSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVJbnB1dCgnbnVtYmVyJywgJ1Bob25lIE51bWJlcicpKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUlucHV0KCd0ZXh0YXJlYScsICdZb3VyIE1lc3NhZ2UnKSk7XG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgc3VibWl0QnRuLnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ1NlbmQnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW4sXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3Q7XG4iLCJpbXBvcnQgZGlzaDEgZnJvbSAnLi9pbWdzL2Rpc2gxLmpwZyc7XG5pbXBvcnQgZGlzaDIgZnJvbSAnLi9pbWdzL2Rpc2gyLmpwZyc7XG5pbXBvcnQgZGlzaDMgZnJvbSAnLi9pbWdzL2Rpc2gzLmpwZyc7XG5pbXBvcnQgZGlzaDQgZnJvbSAnLi9pbWdzL2Rpc2g0LmpwZyc7XG5pbXBvcnQgZGlzaDUgZnJvbSAnLi9pbWdzL2Rpc2g1LmpwZyc7XG5pbXBvcnQgZGlzaDYgZnJvbSAnLi9pbWdzL2Rpc2g2LmpwZyc7XG5pbXBvcnQgZGlzaDcgZnJvbSAnLi9pbWdzL2Rpc2g3LmpwZyc7XG5pbXBvcnQgZGlzaDggZnJvbSAnLi9pbWdzL2Rpc2g4LmpwZyc7XG5pbXBvcnQgbWVudUltZyBmcm9tICcuL2ltZ3MvbWVudS5qcGcnO1xuaW1wb3J0IGxvY2F0aW9uSW1nIGZyb20gJy4vaW1ncy9sb2NhdGlvbi5qcGcnO1xuXG5jb25zdCBpbWFnZXMgPSBbZGlzaDEsIGRpc2gyLCBkaXNoMywgZGlzaDQsIGRpc2g1LCBkaXNoNiwgZGlzaDcsIGRpc2g4XTtcblxuY29uc3QgYXBwZW5kSW1hZ2VzID0gKGltYWdlLCBwYXJlbnQpID0+IHtcbiAgICBjb25zdCBuZXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIG5ld0ltYWdlLnNyYyA9IGltYWdlO1xuICAgIG5ld0ltYWdlLmNsYXNzTGlzdC5hZGQoJ2ltZycpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XG59O1xuXG5jb25zdCBjcmVhdGVIb21lID0gKCgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gICAgY29uc3QgaW1hZ2VzR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlc0dyaWQuY2xhc3NMaXN0LmFkZCgnaW1hZ2VzLWdyaWQnKTtcbiAgICBjb25zdCBncmlkQ29sdW1uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWRDb2x1bW4xLmNsYXNzTGlzdC5hZGQoJ2NvbCcpO1xuICAgIGNvbnN0IGdyaWRDb2x1bW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZENvbHVtbjIuY2xhc3NMaXN0LmFkZCgnY29sJyk7XG4gICAgaW1hZ2VzR3JpZC5hcHBlbmRDaGlsZChncmlkQ29sdW1uMSk7XG4gICAgaW1hZ2VzR3JpZC5hcHBlbmRDaGlsZChncmlkQ29sdW1uMik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICBpZiAoKGkgKyAxKSAlIDIgPT0gMCkge1xuICAgICAgICAgICAgYXBwZW5kSW1hZ2VzKGltYWdlc1tpXSwgZ3JpZENvbHVtbjIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXBwZW5kSW1hZ2VzKGltYWdlc1tpXSwgZ3JpZENvbHVtbjEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChpbWFnZXNHcmlkKTtcblxuICAgIGNvbnN0IG1haW5EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWFpbkRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ091ciBmaW5lIGRpbmluZyByZXN0YXVyYW50IG9mZmVycyBhbiBlbGVnYW50IGFtYmlhbmNlLCBhIHRhbnRhbGl6aW5nIG1lbnUgb2YgY2xhc3NpYyBGcmVuY2ggY3Vpc2luZSwgYW5kIGltcGVjY2FibGUgc2VydmljZSwgY3JlYXRpbmcgYW4gdW5mb3JnZXR0YWJsZSBkaW5pbmcgZXhwZXJpZW5jZS4nO1xuICAgIG1haW5EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbkRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IGxvd2VyR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvd2VyR3JpZC5jbGFzc0xpc3QuYWRkKCdsb3dlci1ncmlkJyk7XG5cbiAgICBjb25zdCB0ZXh0V3JhcHBlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0V3JhcHBlcjEuY2xhc3NMaXN0LmFkZCgndGV4dC13cmFwcGVyJyk7XG4gICAgY29uc3QgdGV4dFdyYXBwZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dFdyYXBwZXIyLmNsYXNzTGlzdC5hZGQoJ3RleHQtd3JhcHBlcicpO1xuXG4gICAgY29uc3Qgcm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdzEuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1kaXYnKTtcbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBjb25zdCBtZW51VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51VGV4dC50ZXh0Q29udGVudCA9ICdJbmR1bGdlIGluIGFuIGV4cXVpc2l0ZSBjdWxpbmFyeSBqb3VybmV5IHRocm91Z2ggRnJhbmNlIHdpdGggb3VyIG1lbnUsIGNyYWZ0ZWQgdG8gZGVsaWdodCB5b3VyIHNlbnNlcyBhbmQgc2F0aXNmeSB5b3VyIGFwcGV0aXRlLic7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSAnTUVOVSc7XG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICB0ZXh0V3JhcHBlcjEuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgICB0ZXh0V3JhcHBlcjEuYXBwZW5kQ2hpbGQobWVudVRleHQpO1xuICAgIHRleHRXcmFwcGVyMS5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKHRleHRXcmFwcGVyMSk7XG4gICAgcm93MS5hcHBlbmRDaGlsZChtZW51RGl2KTtcbiAgICBhcHBlbmRJbWFnZXMobWVudUltZywgcm93MSk7XG5cbiAgICBjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93Mi5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICBjb25zdCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY2F0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uLWRpdicpO1xuICAgIGNvbnN0IGxvY2F0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxvY2F0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnTG9jYXRpb24nO1xuICAgIGNvbnN0IGxvY2F0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsb2NhdGlvblRleHQudGV4dENvbnRlbnQgPSAnIE5lc3RsZWQgaW4gdGhlIGhlYXJ0IG9mIHRoZSBjaXR5LCBvdXIgcmVzdGF1cmFudCBvZmZlcnMgYW4gaWR5bGxpYyBhbmQgY2hhcm1pbmcgc2V0dGluZyB0aGF0IHdpbGwgdHJhbnNwb3J0IHlvdSB0byB0aGUgRnJlbmNoIGNvdW50cnlzaWRlLiAnO1xuICAgIGNvbnN0IGxvY2F0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbG9jYXRpb25CdG4udGV4dENvbnRlbnQgPSAnSE9VUlMgJiBMT0NBVElPTic7XG4gICAgbG9jYXRpb25CdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgdGV4dFdyYXBwZXIyLmFwcGVuZENoaWxkKGxvY2F0aW9uVGl0bGUpO1xuICAgIHRleHRXcmFwcGVyMi5hcHBlbmRDaGlsZChsb2NhdGlvblRleHQpO1xuICAgIHRleHRXcmFwcGVyMi5hcHBlbmRDaGlsZChsb2NhdGlvbkJ0bik7XG4gICAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQodGV4dFdyYXBwZXIyKTtcbiAgICBhcHBlbmRJbWFnZXMobG9jYXRpb25JbWcsIHJvdzIpO1xuICAgIHJvdzIuYXBwZW5kQ2hpbGQobG9jYXRpb25EaXYpO1xuXG4gICAgbG93ZXJHcmlkLmFwcGVuZENoaWxkKHJvdzEpO1xuICAgIGxvd2VyR3JpZC5hcHBlbmRDaGlsZChyb3cyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGxvd2VyR3JpZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbixcbiAgICAgICAgbWVudUJ0bixcbiAgICAgICAgbG9jYXRpb25CdG4sXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7XG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSAnLi9pbWdzL2hvdXJzQW5kTG9jYXRpb24uanBnJztcbmltcG9ydCB7IGNyZWF0ZUhlcm9JbWFnZSwgY3JlYXRlRGVzY3JpcHRpb24gfSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBjcmVhdGVIb3Vyc0FuZExvY2F0aW9uID0gKCgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSGVyb0ltYWdlKEltYWdlKSk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVEZXNjcmlwdGlvbignSG91cnMgYW5kIExvY2F0aW9uJywgJ05lc3RsZWQgaW4gdGhlIGhlYXJ0IG9mIHRoZSBjaXR5LCBvdXIgcmVzdGF1cmFudCBib2FzdHMgYSBjYXB0aXZhdGluZyBsb2NhdGlvbiB0aGF0IGV4dWRlcyBjaGFybSBhbmQgYWxsdXJlLiBBcyB5b3Ugc3RlcCB0aHJvdWdoIG91ciBkb29ycywgeW91XFwnbGwgYmUgdHJhbnNwb3J0ZWQgdG8gYSB3b3JsZCBvZiByZWZpbmVkIGVsZWdhbmNlIGFuZCBlbmNoYW50bWVudC4gVGhlIGludGltYXRlIGFuZCBpbnZpdGluZyBhdG1vc3BoZXJlIGNyZWF0ZXMgdGhlIHBlcmZlY3QgYmFja2Ryb3AgZm9yIGFuIHVuZm9yZ2V0dGFibGUgZGluaW5nIGV4cGVyaWVuY2UuIFNvZnQgYW1iaWVudCBsaWdodGluZyBjYXN0cyBhIHdhcm0gZ2xvdyBvdmVyIHRoZSBtZXRpY3Vsb3VzbHkgY3VyYXRlZCBkZWNvciwgc2hvd2Nhc2luZyBhIGhhcm1vbmlvdXMgYmxlbmQgb2YgbW9kZXJuIHNvcGhpc3RpY2F0aW9uIGFuZCB0aW1lbGVzcyBiZWF1dHkuIEZyb20gdGhlIGNhcmVmdWxseSBjaG9zZW4gZnVybmlzaGluZ3MgdG8gdGhlIHRhc3RlZnVsIGFydHdvcmsgYWRvcm5pbmcgdGhlIHdhbGxzLCBldmVyeSBkZXRhaWwgaGFzIGJlZW4gdGhvdWdodGZ1bGx5IHNlbGVjdGVkIHRvIGNyZWF0ZSBhIGNhcHRpdmF0aW5nIGFtYmlhbmNlIHRoYXQgY2FwdGl2YXRlcyBhbmQgZGVsaWdodHMuIFdoZXRoZXIgeW91XFwncmUgc2Vla2luZyBhIHJvbWFudGljIGRpbm5lciBmb3IgdHdvIG9yIGFuIGVsZWdhbnQgZ2F0aGVyaW5nIHdpdGggZnJpZW5kcywgb3VyIHJlc3RhdXJhbnQgcHJvdmlkZXMgdGhlIGlkZWFsIHNldHRpbmcgdG8gaW5kdWxnZSBpbiBjdWxpbmFyeSBleGNlbGxlbmNlIHdoaWxlIGltbWVyc2luZyB5b3Vyc2VsZiBpbiBhbiBhdG1vc3BoZXJlIG9mIHJlZmluZWQgbHV4dXJ5LicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgaG91cnNBbmRBZGRyZXNzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91cnNBbmRBZGRyZXNzRGl2LmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWxvY2F0aW9uJyk7XG4gICAgY29uc3QgaG91cnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vyc0Rpdi5pbm5lckhUTUwgPSAnT3BlbiBTaXggRGF5cyBBIFdlZWs8YnI+IFN1bmRheSBOb29uIC0gMTFQTTxicj4gTW9uZGF5IENMT1NFRDxicj4gVHVlc2RheSAmIFdlZG5lc2RheSAyUE0gLSAxMVBNPGJyPiBUaHVyc2RheSAmIEZyaWRheSAyUE0gLSBNaWRuaWdodDxicj4gU2F0dXJkYXkgTm9vbiAtIDExUE0nO1xuICAgIGhvdXJzQW5kQWRkcmVzc0Rpdi5hcHBlbmRDaGlsZChob3Vyc0Rpdik7XG4gICAgY29uc3QgYWRkcmVzc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZHJlc3NEaXYuaW5uZXJIVE1MID0gJ0NoYXIuIFRyaWtvdXBpIDI0NSw8YnI+IEtpZmlzaWEgMTQ1IDY0JztcbiAgICBob3Vyc0FuZEFkZHJlc3NEaXYuYXBwZW5kQ2hpbGQoYWRkcmVzc0Rpdik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChob3Vyc0FuZEFkZHJlc3NEaXYpO1xuXG4gICAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFwLmlubmVySFRNTCA9ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDMxNDAuMjgxNjUxODgxOTUyNyEyZDIzLjgwMTM0OTUwMDAwMDAwNCEzZDM4LjA4NzEwNzQwMDAwMDAxITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgxNGExOWYxYWRiNmQ1YjE3JTNBMHg0ZDdjOTQxMzQ0N2NkMDFhITJ6enFmT3NjLUJMaURPcE0tQnpybk91czZfejQzUGdNNjNJREkwTlN3Z3pwck90OC1HenJuUGc4NjV6cXdnTVRRMUlEWTAhNWUwITNtMiExc2VsITJzZ3IhNHYxNjgyNzUyOTMxODYyITVtMiExc2VsITJzZ3JcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiPjwvaWZyYW1lPic7XG4gICAgbWFwLmNsYXNzTGlzdC5hZGQoJ21hcCcpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFwKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW4sXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvdXJzQW5kTG9jYXRpb247XG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSAnLi9pbWdzL21lbnVJbWcuanBnJztcbmltcG9ydCB7IGNyZWF0ZUhlcm9JbWFnZSwgY3JlYXRlRGVzY3JpcHRpb24gfSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBjcmVhdGVNZW51SXRlbSA9IChkaXNoLCBwcmljZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBkaXNoO1xuICAgIGNvbnN0IHByaWNlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcmljZVNwYW4udGV4dENvbnRlbnQgPSBgJHtwcmljZX3igqxgO1xuICAgIHRpdGxlLmFwcGVuZENoaWxkKHByaWNlU3Bhbik7XG4gICAgaXRlbS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgIHJldHVybiBpdGVtO1xufTtcblxuY29uc3QgY3JlYXRlTWVudUNvbXBvbmVudCA9ICh0aXRsZSwgZGlzaGVzLCBwcmljZXMsIGRlc2NyaXB0aW9ucykgPT4ge1xuICAgIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIG1lbnVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtc2VjdGlvbicpO1xuICAgIGNvbnN0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBuZXdUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcbiAgICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oZGlzaGVzW2ldLCBwcmljZXNbaV0sIGRlc2NyaXB0aW9uc1tpXSkpO1xuICAgIH1cbiAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChtZW51TGlzdCk7XG5cbiAgICByZXR1cm4gbWVudVNlY3Rpb247XG59O1xuXG5jb25zdCBjcmVhdGVNZW51ID0gKCgpID0+IHtcbiAgICBjb25zdCBhcHBldGl6ZXJzTmFtZXMgPSBbJ0VzY2FyZ290cyDDoCBsYSBCb3VyZ3VpZ25vbm5lJywgJ1Bpc3NhbGFkacOocmUnLCAnUXVlbmVsbGVzIGRlIEJyb2NoZXQnLCAnU291cGUgw6AgbFxcJ09pZ25vbiBHcmF0aW7DqWUnLCAnQ29xdWlsbGVzIFNhaW50LUphY3F1ZXMnXTtcbiAgICBjb25zdCBhcHBldGl6ZXJzUHJpY2VzID0gWycxOC41MCcsICcxNS4wMCcsICcyMi4wMCcsICcxNi4wMCcsICcyOC4wMCddO1xuICAgIGNvbnN0IGFwcGV0aXplcnNEZXNjcmlwdGlvbnMgPSBbJ0EgY2xhc3NpYyBGcmVuY2ggYXBwZXRpemVyLCB0aGlzIGRpc2ggZmVhdHVyZXMgdGVuZGVyIHNuYWlscyBjb29rZWQgaW4gYSByaWNoIGdhcmxpYyBidXR0ZXIgc2F1Y2UuIFNlcnZlZCB3aXRoIGNydXN0eSBicmVhZCBmb3IgZGlwcGluZy4nLCAnQSBkZWxpY2lvdXMgdmVnZXRhcmlhbiBvcHRpb24sIHRoaXMgdGFydCBmZWF0dXJlcyBhIGZsYWt5IHBhc3RyeSBiYXNlIHRvcHBlZCB3aXRoIGNhcmFtZWxpemVkIG9uaW9ucywgYW5kIG9saXZlcy4nLCAnQSBGcmVuY2ggZGVsaWNhY3ksIHRoZXNlIGR1bXBsaW5ncyBhcmUgbWFkZSBmcm9tIGdyb3VuZCBwaWtlIGZpc2ggYW5kIHNlcnZlZCBpbiBhIGNyZWFteSBsb2JzdGVyIHNhdWNlLicsICdBIGNsYXNzaWMgRnJlbmNoIHNvdXAsIHRoaXMgZGlzaCBmZWF0dXJlcyBjYXJhbWVsaXplZCBvbmlvbnMgaW4gYSByaWNoIGJlZWYgYnJvdGgsIHRvcHBlZCB3aXRoIG1lbHRlZCBjaGVlc2UgYW5kIHNlcnZlZCB3aXRoIGNydXN0eSBicmVhZC4nLCAnQSBzZWFmb29kIGZhdm9yaXRlLCB0aGlzIGRpc2ggZmVhdHVyZXMgdGVuZGVyIHNjYWxsb3BzIGJha2VkIGluIGEgcmljaCwgY3JlYW15IHNhdWNlIGFuZCB0b3BwZWQgd2l0aCBicmVhZGNydW1icy4gQ2FuIGJlIG1hZGUgdmVnYW4gYnkgcmVwbGFjaW5nIHRoZSBzY2FsbG9wcyB3aXRoIG11c2hyb29tcy4nXTtcblxuICAgIGNvbnN0IHNhbGFkc05hbWVzID0gWydTYWxhZGUgTmnDp29pc2UnLCAnU2FsYWRlIGRlIENoZXZyZSBDaGF1ZCcsICdTYWxhZGUgTHlvbm5haXNlJywgJ1NhbGFkZSBkZSBNYWdyZXQgZGUgQ2FuYXJkJywgJ1NhbGFkZSBWZXJ0ZScsICdTYWxhZGUgZGUgQ2VsZXJpLXJhdmUnXTtcbiAgICBjb25zdCBzYWxhZHNQcmljZXMgPSBbJzE4LjUwJywgJzE3LjAwJywgJzE0LjUwJywgJzIyLjAwJywgJzEwLjAwJywgJzE2LjAwJ107XG4gICAgY29uc3Qgc2FsYWRzRGVzY3JpcHRpb25zID0gWydBIGNsYXNzaWMgRnJlbmNoIHNhbGFkLCB0aGlzIGRpc2ggZmVhdHVyZXMgbWl4ZWQgZ3JlZW5zLCBib2lsZWQgcG90YXRvZXMsIGdyZWVuIGJlYW5zLCB0b21hdG9lcywgb2xpdmVzLCBhbmQgdHVuYS4gQ2FuIGJlIG1hZGUgdmVnYW4gYnkgb21pdHRpbmcgdGhlIHR1bmEuJywgJ0EgZGVsaWNpb3VzIHZlZ2V0YXJpYW4gb3B0aW9uLCB0aGlzIHNhbGFkIGZlYXR1cmVzIHdhcm0sIGNyZWFteSBnb2F0IGNoZWVzZSBzZXJ2ZWQgb24gYSBiZWQgb2YgbWl4ZWQgZ3JlZW5zIHdpdGggYSBob25leSB2aW5haWdyZXR0ZS4nLCAnQXMgbWVudGlvbmVkIGluIHRoZSBwcmV2aW91cyBhbnN3ZXIsIHRoaXMgc2ltcGxlIHlldCBkZWxpY2lvdXMgc2FsYWQgZmVhdHVyZXMgZnJpc8OpZSBsZXR0dWNlLCBjcmlzcHkgYmFjb24sIGFuZCBhIHBlcmZlY3RseSBwb2FjaGVkIGVnZy4gQ2FuIGJlIG1hZGUgdmVnYW4gYnkgb21pdHRpbmcgdGhlIGJhY29uIGFuZCBlZ2cgYW5kIHJlcGxhY2luZyB3aXRoIHJvYXN0ZWQgdmVnZXRhYmxlcy4nLCAnVGhpcyBzYWxhZCBmZWF0dXJlcyB0ZW5kZXIgc2xpY2VzIG9mIHNlYXJlZCBkdWNrIGJyZWFzdCBzZXJ2ZWQgb24gYSBiZWQgb2YgbWl4ZWQgZ3JlZW5zIHdpdGggYSByYXNwYmVycnkgdmluYWlncmV0dGUuIENhbiBiZSBtYWRlIHZlZ2FuIGJ5IHJlcGxhY2luZyB0aGUgZHVjayBicmVhc3Qgd2l0aCByb2FzdGVkIHZlZ2V0YWJsZXMuJywgJ0Egc2ltcGxlIHlldCBlbGVnYW50IHNhbGFkLCB0aGlzIGRpc2ggZmVhdHVyZXMgbWl4ZWQgZ3JlZW5zIHRvc3NlZCBpbiBhIGxpZ2h0IHZpbmFpZ3JldHRlIGRyZXNzaW5nLicsICdUaGlzIHZlZ2FuIHNhbGFkIGZlYXR1cmVzIHRoaW5seSBzbGljZWQgY2VsZXJ5IHJvb3QsIGFwcGxlcywgYW5kIHdhbG51dHMgc2VydmVkIG9uIGEgYmVkIG9mIG1peGVkIGdyZWVucyB3aXRoIGEgbGVtb24gdmluYWlncmV0dGUuJ107XG5cbiAgICBjb25zdCBtYWluTmFtZXMgPSBbJ0JvZXVmIEJvdXJndWlnbm9uJywgJ0NvcSBhdSBWaW4nLCAnQ2Fzc291bGV0JywgJ1JhdGF0b3VpbGxlJywgJ1F1aWNoZSBMb3JyYWluZScsICdTb2xlIE1ldW5pw6hyZScsICdEdWNrIENvbmZpdCcsICdUb3VybmVkb3MgUm9zc2luaScsICdOYXZhcmluIGRcXCdBZ25lYXUnLCAnTXVzaHJvb20gQm91cmd1aWdub24nXTtcbiAgICBjb25zdCBtYWluUHJpY2VzID0gWyczNi4wMCcsICczMi4wMCcsICcyOC4wMCcsICcyNi4wMCcsICcyMi4wMCcsICczOC4wMCcsICczNC4wMCcsICc0OC4wMCcsICc0Mi4wMCcsICcyOC4wMCddO1xuICAgIGNvbnN0IG1haW5EZXNjcmlwdGlvbnMgPSBbJ0EgY2xhc3NpYyBGcmVuY2ggZGlzaCwgdGhpcyBzdGV3IGZlYXR1cmVzIHRlbmRlciBiZWVmIHNsb3ctY29va2VkIGluIHJlZCB3aW5lIHdpdGggY2Fycm90cywgb25pb25zLCBhbmQgYmFjb24uIFNlcnZlZCB3aXRoIGNydXN0eSBicmVhZCBhbmQgbWFzaGVkIHBvdGF0b2VzLicsICdBbm90aGVyIGNsYXNzaWMgRnJlbmNoIGRpc2gsIHRoaXMgb25lIGZlYXR1cmVzIGNoaWNrZW4gY29va2VkIGluIHJlZCB3aW5lIHdpdGggYmFjb24sIG11c2hyb29tcywgYW5kIHBlYXJsIG9uaW9ucy4gU2VydmVkIHdpdGggbWFzaGVkIHBvdGF0b2VzLicsICdUaGlzIGhlYXJ0eSBzdGV3IGZlYXR1cmVzIHdoaXRlIGJlYW5zIHNsb3ctY29va2VkIHdpdGggcG9yayBzYXVzYWdlLCBiYWNvbiwgYW5kIGR1Y2sgY29uZml0LiBTZXJ2ZWQgd2l0aCBjcnVzdHkgYnJlYWQuJywgJ0EgZGVsaWNpb3VzIHZlZ2V0YXJpYW4gb3B0aW9uLCB0aGlzIGRpc2ggZmVhdHVyZXMgZWdncGxhbnQsIHp1Y2NoaW5pLCBiZWxsIHBlcHBlcnMsIG9uaW9ucywgYW5kIHRvbWF0b2VzIHN0ZXdlZCB0b2dldGhlciBpbiBhIGZsYXZvcmZ1bCBzYXVjZS4gU2VydmVkIHdpdGggY3J1c3R5IGJyZWFkLicsICdBIEZyZW5jaCBjbGFzc2ljLCB0aGlzIHF1aWNoZSBmZWF0dXJlcyBhIGZsYWt5IHBhc3RyeSBjcnVzdCBmaWxsZWQgd2l0aCBiYWNvbiwgY2hlZXNlLCBhbmQgYSBjcmVhbXkgY3VzdGFyZC4gU2VydmVkIHdpdGggbWl4ZWQgZ3JlZW5zLicsICdUaGlzIHNlYWZvb2QgZGlzaCBmZWF0dXJlcyB0ZW5kZXIgZmlsbGV0cyBvZiBzb2xlIHNhdXTDqWVkIGluIGEgYnV0dGVyIHNhdWNlIHdpdGggY2FwZXJzIGFuZCBsZW1vbi4gU2VydmVkIHdpdGggcm9hc3RlZCBwb3RhdG9lcyBhbmQgc2Vhc29uYWwgdmVnZXRhYmxlcy4nLCAnQSBGcmVuY2ggZGVsaWNhY3ksIHRoaXMgZGlzaCBmZWF0dXJlcyBkdWNrIGxlZyBzbG93bHkgY29va2VkIGluIGl0cyBvd24gZmF0IHVudGlsIGl0IGJlY29tZXMgdGVuZGVyIGFuZCBmbGF2b3JmdWwuIFNlcnZlZCB3aXRoIHJvYXN0ZWQgcG90YXRvZXMgYW5kIHNlYXNvbmFsIHZlZ2V0YWJsZXMuJywgJ0EgbHV4dXJpb3VzIGRpc2gsIHRoaXMgb25lIGZlYXR1cmVzIGEgdGVuZGVyIGJlZWYgZmlsZXQgdG9wcGVkIHdpdGggc2VhcmVkIGZvaWUgZ3JhcyBhbmQgYSByaWNoIHJlZCB3aW5lIHNhdWNlLiBTZXJ2ZWQgd2l0aCByb2FzdGVkIHBvdGF0b2VzIGFuZCBzZWFzb25hbCB2ZWdldGFibGVzLicsICdUaGlzIGhlYXJ0eSBzdGV3IGZlYXR1cmVzIHRlbmRlciBsYW1iIHNsb3ctY29va2VkIHdpdGggY2Fycm90cywgb25pb25zLCBhbmQgcG90YXRvZXMgaW4gYSBmbGF2b3JmdWwgYnJvdGguIFNlcnZlZCB3aXRoIGNydXN0eSBicmVhZC4nLCAnQSBkZWxpY2lvdXMgdmVnYW4gb3B0aW9uLCB0aGlzIGRpc2ggZmVhdHVyZXMgbXVzaHJvb21zIHNsb3ctY29va2VkIGluIHJlZCB3aW5lIHdpdGggY2Fycm90cywgb25pb25zLCBhbmQgZ2FybGljLiBTZXJ2ZWQgd2l0aCBjcnVzdHkgYnJlYWQuJ107XG5cbiAgICBjb25zdCBkZXNzZXJ0c05hbWVzID0gWydDcsOobWUgQnLDu2zDqWUnLCAnVGFydGUgVGF0aW4nLCAnUHJvZml0ZXJvbGVzJywgJ1NvcmJldCcsICdNb3Vzc2UgYXUgQ2hvY29sYXQnXTtcbiAgICBjb25zdCBkZXNzZXJ0c1ByaWNlcyA9IFsnMTIuMDAnLCAnMTQuMDAnLCAnMTYuMDAnLCAnMTAuMDAnLCAnMTQuMDAnXTtcbiAgICBjb25zdCBkZXNzZXJ0c0Rlc2NyaXB0aW9ucyA9IFsnQSBjbGFzc2ljIEZyZW5jaCBkZXNzZXJ0LCB0aGlzIGN1c3RhcmQgaXMgdG9wcGVkIHdpdGggYSBsYXllciBvZiBjYXJhbWVsaXplZCBzdWdhci4gU2VydmVkIHdpdGggZnJlc2ggYmVycmllcy4nLCAnQSBkZWxpY2lvdXMgZGVzc2VydCwgdGhpcyB0YXJ0IGZlYXR1cmVzIGNhcmFtZWxpemVkIGFwcGxlcyBiYWtlZCBpbiBhIGJ1dHRlcnkgcGFzdHJ5IGNydXN0LiBTZXJ2ZWQgd2l0aCB2YW5pbGxhIGljZSBjcmVhbS4nLCAnVGhlc2UgbGlnaHQgYW5kIGFpcnkgY3JlYW0gcHVmZnMgYXJlIGZpbGxlZCB3aXRoIHZhbmlsbGEgaWNlIGNyZWFtIGFuZCB0b3BwZWQgd2l0aCB3YXJtIGNob2NvbGF0ZSBzYXVjZS4nLCAnQSByZWZyZXNoaW5nIHZlZ2FuIG9wdGlvbiwgdGhpcyBzb3JiZXQgZmVhdHVyZXMgc2Vhc29uYWwgZnJ1aXQgZmxhdm9ycyBzdWNoIGFzIHJhc3BiZXJyeSBvciBtYW5nby4gU2VydmVkIHdpdGggZnJlc2ggZnJ1aXQuJywgJ1RoaXMgcmljaCBhbmQgZGVjYWRlbnQgZGVzc2VydCBmZWF0dXJlcyBhIGxpZ2h0IGFuZCBhaXJ5IGNob2NvbGF0ZSBtb3Vzc2UuIFNlcnZlZCB3aXRoIGZyZXNoIGJlcnJpZXMgYW5kIHdoaXBwZWQgY3JlYW0uJ107XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSGVyb0ltYWdlKEltYWdlKSk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVEZXNjcmlwdGlvbignTWVudXMnLCAnIFN0ZXAgaW50byBvdXIgd29ybGQgb2YgZmluZSBGcmVuY2ggY3Vpc2luZSwgd2hlcmUgZXZlcnkgZGlzaCB0ZWxscyBhIHN0b3J5IG9mIHBhc3Npb24gYW5kIGFydGlzdHJ5LiBPdXIgbWVudSBpcyBhIGNlbGVicmF0aW9uIG9mIHRoZSByaWNoIGN1bGluYXJ5IHRyYWRpdGlvbnMgb2YgRnJhbmNlLCBmZWF0dXJpbmcgY2xhc3NpYyBkaXNoZXMgc3VjaCBhcyBDb3EgYXUgVmluLCBTb2xlIE1ldW5pw6hyZSwgYW5kIENyw6htZSBCcsO7bMOpZS4gT3VyIGluZ3JlZGllbnRzIGFyZSBzb3VyY2VkIGZyb20gdGhlIGZpbmVzdCBzdXBwbGllcnMsIGFuZCBvdXIgY2hlZnMgdXNlIG9ubHkgdGhlIGZyZXNoZXN0IGFuZCBtb3N0IGZsYXZvcmZ1bCBpbmdyZWRpZW50cyB0byBjcmVhdGUgZWFjaCBkaXNoLiBXaGV0aGVyIHlvdVxcJ3JlIGEgY29ubm9pc3NldXIgb2YgRnJlbmNoIGN1aXNpbmUgb3Igc2ltcGx5IGxvb2tpbmcgZm9yIGEgbWVtb3JhYmxlIGRpbmluZyBleHBlcmllbmNlLCB3ZSBpbnZpdGUgeW91IHRvIGpvaW4gdXMgYW5kIGluZHVsZ2UgaW4gdGhlIHVsdGltYXRlIGN1bGluYXJ5IGpvdXJuZXkgdGhyb3VnaCBGcmFuY2UuJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBtZW51c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVzRGl2LmNsYXNzTGlzdC5hZGQoJ21lbnVzLWNvbnRhaW5lcicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudXNEaXYpO1xuXG4gICAgY29uc3QgYXBwZXRpemVyc01lbnUgPSBjcmVhdGVNZW51Q29tcG9uZW50KCdBUFBFVElaRVJTJywgYXBwZXRpemVyc05hbWVzLCBhcHBldGl6ZXJzUHJpY2VzLCBhcHBldGl6ZXJzRGVzY3JpcHRpb25zKTtcbiAgICBtZW51c0Rpdi5hcHBlbmRDaGlsZChhcHBldGl6ZXJzTWVudSk7XG5cbiAgICBjb25zdCBzYWxhZHNNZW51ID0gY3JlYXRlTWVudUNvbXBvbmVudCgnU0FMQURTJywgc2FsYWRzTmFtZXMsIHNhbGFkc1ByaWNlcywgc2FsYWRzRGVzY3JpcHRpb25zKTtcbiAgICBtZW51c0Rpdi5hcHBlbmRDaGlsZChzYWxhZHNNZW51KTtcblxuICAgIGNvbnN0IG1haW5NZW51ID0gY3JlYXRlTWVudUNvbXBvbmVudCgnTUFJTiBESVNIRVMnLCBtYWluTmFtZXMsIG1haW5QcmljZXMsIG1haW5EZXNjcmlwdGlvbnMpO1xuICAgIG1lbnVzRGl2LmFwcGVuZENoaWxkKG1haW5NZW51KTtcblxuICAgIGNvbnN0IGRlc3NlcnRzTWVudSA9IGNyZWF0ZU1lbnVDb21wb25lbnQoJ0RFU1NFUlRTJywgZGVzc2VydHNOYW1lcywgZGVzc2VydHNQcmljZXMsIGRlc3NlcnRzRGVzY3JpcHRpb25zKTtcbiAgICBtZW51c0Rpdi5hcHBlbmRDaGlsZChkZXNzZXJ0c01lbnUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbixcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudTtcbiIsImltcG9ydCBSZWRMb2dvIGZyb20gJy4vaW1ncy9sb2dvLXJlZC5wbmcnO1xuXG5jb25zdCBjcmVhdGVOYXZCYXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgbmF2TG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIG5hdkxvZ28uc3JjID0gUmVkTG9nbztcbiAgICBuYXZMb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2TG9nbyk7XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uJyk7XG4gICAgY29uc3QgbG9jYXRpb25saW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxvY2F0aW9ubGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBsb2NhdGlvbmxpbmsuaHJlZiA9ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvcGxhY2UvJUNFJUE3JUNFJUIxJUNGJTgxLislQ0UlQTQlQ0YlODElQ0UlQjklQ0UlQkElQ0UlQkYlQ0YlOEQlQ0YlODAlQ0UlQjcrMjQ1LCslQ0UlOUElQ0UlQjclQ0YlODYlQ0UlQjklQ0YlODMlQ0UlQjklQ0UlQUMrMTQ1KzY0L0AzOC4wODcxMDc0LDIzLjc5ODc3NDYsMTd6L2RhdGE9ITNtMSE0YjEhNG02ITNtNSExczB4MTRhMTlmMWFkYjZkNWIxNzoweDRkN2M5NDEzNDQ3Y2QwMWEhOG0yITNkMzguMDg3MTA3NCE0ZDIzLjgwMTM0OTUhMTZzJTJGZyUyRjExY3NkOF9rOTEnO1xuICAgIGxvY2F0aW9ubGluay5pbm5lckhUTUwgPSAnPHNwYW4+Q2hhci4gVHJpa291cGkgMjQ1LCA8L3NwYW4+PHNwYW4+S2lmaXNpYSAxNDUgNjQ8L3NwYW4+JztcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbmxpbmspO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBjb25zdCBtZW51TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbWVudUxpbmsudGV4dENvbnRlbnQgPSAnTUVOVSc7XG4gICAgdWwuYXBwZW5kQ2hpbGQobWVudUxpbmspO1xuXG4gICAgY29uc3Qgb3VyU3RvcnlMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBvdXJTdG9yeUxpbmsudGV4dENvbnRlbnQgPSAnT1VSIFNUT1JZJztcbiAgICB1bC5hcHBlbmRDaGlsZChvdXJTdG9yeUxpbmspO1xuXG4gICAgY29uc3QgaG91cnNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBob3Vyc0xpbmsudGV4dENvbnRlbnQgPSAnSE9VUlMgJiBMT0NBVElPTic7XG4gICAgdWwuYXBwZW5kQ2hpbGQoaG91cnNMaW5rKTtcblxuICAgIGNvbnN0IGNvbW11bml0eUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbW11bml0eUxpbmsudGV4dENvbnRlbnQgPSAnQ09NTVVOSVRZJztcbiAgICB1bC5hcHBlbmRDaGlsZChjb21tdW5pdHlMaW5rKTtcblxuICAgIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb250YWN0TGluay50ZXh0Q29udGVudCA9ICdDT05UQUNUJztcbiAgICB1bC5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnb3Blbi1pY29uJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHVsLmNsYXNzTGlzdC50b2dnbGUoJ3Jlc3BvbnNpdmUtbmF2Jyk7XG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnb3Blbi1pY29uJyk7XG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnY2xvc2UtaWNvbicpO1xuICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gYm9keS5zdHlsZS5vdmVyZmxvdyA9PT0gJ2hpZGRlbicgPyAnYXV0bycgOiAnaGlkZGVuJztcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgbWVudUxpbmssXG4gICAgICAgIG91clN0b3J5TGluayxcbiAgICAgICAgaG91cnNMaW5rLFxuICAgICAgICBjb21tdW5pdHlMaW5rLFxuICAgICAgICBjb250YWN0TGluayxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2QmFyO1xuIiwiaW1wb3J0IEltYWdlIGZyb20gJy4vaW1ncy9vdXJzdG9yeS5qcGcnO1xuaW1wb3J0IHsgY3JlYXRlSGVyb0ltYWdlLCBjcmVhdGVEZXNjcmlwdGlvbiB9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IGNyZWF0ZU91clN0b3J5ID0gKCgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSGVyb0ltYWdlKEltYWdlKSk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVEZXNjcmlwdGlvbignT3VyIFN0b3J5JywgJ091ciByZXN0YXVyYW50IGhhcyBhIHJpY2ggYW5kIGluc3BpcmluZyBoaXN0b3J5IHRoYXQgc3BhbnMgb3ZlciB0aHJlZSBkZWNhZGVzLiBJdCB3YXMgZm91bmRlZCBieSBhIHN0cnVnZ2xpbmcgaW1taWdyYW50LCBKdWxlLCB3aG8gaGFkIGEgZGVlcCBsb3ZlIGZvciBjb29raW5nIGFuZCBlc3BlY2lhbGx5IEZyZW5jaCBjdWlzaW5lLiBDb21pbmcgZnJvbSBodW1ibGUgYmVnaW5uaW5ncywgSnVsZSBoYWQgYWx3YXlzIGRyZWFtZWQgb2Ygb3duaW5nIGhlciBvd24gcmVzdGF1cmFudCBhbmQgc2hhcmluZyBoZXIgY3VsaW5hcnkgY3JlYXRpb25zIHdpdGggdGhlIHdvcmxkLiBIZXIgcGFzc2lvbiBhbmQgZGVkaWNhdGlvbiBldmVudHVhbGx5IHBhaWQgb2ZmLCBhbmQgc2hlIHdhcyBhYmxlIHRvIG9wZW4gaGVyIG93biByZXN0YXVyYW50IGluIHRoZSBoZWFydCBvZiB0aGUgY2l0eS48YnI+IFRoZSBuZWlnaGJvcmhvb2Qgd2hlcmUgb3VyIHJlc3RhdXJhbnQgaXMgbG9jYXRlZCBpcyBzdGVlcGVkIGluIGhpc3RvcnkgYW5kIGhhcyBhIHJpY2ggY3VsdHVyYWwgaGVyaXRhZ2UuIEl0IGlzIGEgcGxhY2Ugd2hlcmUgYXJ0aXN0cywgd3JpdGVycywgYW5kIG11c2ljaWFucyBoYXZlIGZyZXF1ZW50ZWQgZm9yIGRlY2FkZXMsIHNlZWtpbmcgaW5zcGlyYXRpb24gYW5kIGNyZWF0aXZpdHkuIEp1bGUgd2FzIGRyYXduIHRvIHRoaXMgYXJlYSBiZWNhdXNlIG9mIGl0cyBib2hlbWlhbiBhdG1vc3BoZXJlIGFuZCBhcnRpc3RpYyBlbmVyZ3ksIHdoaWNoIHNoZSBmb3VuZCB0byBiZSBhIHBlcmZlY3QgbWF0Y2ggZm9yIGhlciBvd24gY3JlYXRpdmUgc3Bpcml0Ljxicj4gT3ZlciB0aGUgeWVhcnMsIG91ciByZXN0YXVyYW50IGhhcyBiZWNvbWUgYSBiZWxvdmVkIGluc3RpdHV0aW9uIGluIHRoZSBjb21tdW5pdHksIGtub3duIGZvciBpdHMgZXhxdWlzaXRlIEZyZW5jaCBjdWlzaW5lLCBlbGVnYW50IGFtYmlhbmNlLCBhbmQgaW1wZWNjYWJsZSBzZXJ2aWNlLiBKdWxlXFwncyBkZWRpY2F0aW9uIGFuZCBoYXJkIHdvcmsgaGF2ZSBwYWlkIG9mZiwgYW5kIHNoZSBoYXMgYmVjb21lIGFuIGluc3BpcmF0aW9uIHRvIG1hbnksIGJvdGggaW4gdGhlIGN1bGluYXJ5IHdvcmxkIGFuZCBiZXlvbmQuIFRvZGF5LCBvdXIgcmVzdGF1cmFudCBjb250aW51ZXMgdG8gaG9ub3IgSnVsZVxcJ3MgbGVnYWN5LCBzZXJ2aW5nIHVwIHRoZSBzYW1lIGRlbGljaW91cyBGcmVuY2ggZGlzaGVzIHRoYXQgaGF2ZSBiZWVuIGRlbGlnaHRpbmcgZGluZXJzIGZvciBvdmVyIDMwIHllYXJzLicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbixcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlT3VyU3Rvcnk7XG4iLCJpbXBvcnQgd2hpdGVMb2dvIGZyb20gJy4vaW1ncy9sb2dvLXdoaXRlLnBuZyc7XG5cbmNvbnN0IGNyZWF0ZUhlcm9JbWFnZSA9IChpbWFnZSkgPT4ge1xuICAgIGNvbnN0IExvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBMb2dvLnNyYyA9IHdoaXRlTG9nbztcbiAgICBMb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICBjb25zdCBuZXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIG5ld0ltYWdlLnNyYyA9IGltYWdlO1xuICAgIGNvbnN0IGltYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VEaXYuY2xhc3NMaXN0LmFkZCgnaGVyby1pbWcnKTtcbiAgICBpbWFnZURpdi5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XG4gICAgaW1hZ2VEaXYuYXBwZW5kQ2hpbGQoTG9nbyk7XG5cbiAgICByZXR1cm4gaW1hZ2VEaXY7XG59O1xuXG5jb25zdCBjcmVhdGVEZXNjcmlwdGlvbiA9ICh0aXRsZSwgdGV4dCkgPT4ge1xuICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIG5ld0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLXdyYXBwZXInKTtcbiAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbmV3VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICBjb25zdCBuZXdQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbmV3UGFyYWdyYXBoLmlubmVySFRNTCA9IHRleHQ7XG4gICAgbmV3RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQobmV3VGl0bGUpO1xuICAgIG5ld0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKG5ld1BhcmFncmFwaCk7XG4gICAgcmV0dXJuIG5ld0Rlc2NyaXB0aW9uO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlSGVyb0ltYWdlLCBjcmVhdGVEZXNjcmlwdGlvbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgTmF2QmFyIGZyb20gJy4vbmF2YmFyJztcbmltcG9ydCBIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IE91clN0b3J5IGZyb20gJy4vc3RvcnknO1xuaW1wb3J0IENvbW11bml0eSBmcm9tICcuL2NvbW11bml0eSc7XG5pbXBvcnQgSG91cnNBbmRMb2NhdGlvbiBmcm9tICcuL2xvY2F0aW9uJztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb250ZW50LmFwcGVuZENoaWxkKE5hdkJhci5oZWFkZXIpO1xuXG4vLyBjb250ZW50LmFwcGVuZENoaWxkKEhvbWUubWFpbik7XG4vLyBjb250ZW50LmFwcGVuZENoaWxkKE1lbnUubWFpbik7XG4vLyBjb250ZW50LmFwcGVuZENoaWxkKE91clN0b3J5Lm1haW4pO1xuLy8gY29udGVudC5hcHBlbmRDaGlsZChDb21tdW5pdHkubWFpbik7XG4vLyBjb250ZW50LmFwcGVuZENoaWxkKEhvdXJzQW5kTG9jYXRpb24ubWFpbik7XG5jb250ZW50LmFwcGVuZENoaWxkKENvbnRhY3QubWFpbik7XG5cbi8vIE5hdkJhci5tZW51TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuLy8gICAgIG1haW4uYXBwZW5kQ2hpbGQoTWVudS5tZW51KTtcbi8vIH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9