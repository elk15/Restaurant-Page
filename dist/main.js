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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --main-color: #701515;\n    --main-font: 'Cormorant Garamond', serif;\n    --tall-pic-height: 700px;\n    --short-pic-height: 350px;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Hero Image for each page */\n\n.hero-img {\n    position: relative;\n    width: 100%;\n    padding-top: 10px;\n    z-index: -100;\n    \n}\n\n.hero-img img{\n    display: block;\n    width: 100%;\n    height: auto;\n}\n\n.hero-img .logo {\n    position: absolute;\n    width: 200px;\n    bottom: 5%;\n    left: calc(50% - 100px);\n\n    \n}\n\n/* Description for each page */\n\n.description-wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-family: var(--main-font);\n    font-size: 1.2rem;\n    max-width: 1000px;\n    padding: 10px;\n}\n\n.description-wrapper h2 {\n    text-align: center;\n    font-style: italic;\n    font-weight: 700;\n    font-size: 3rem;\n}\n\n/* Main content and and nav bar */\n\n#content {\n    display: flex;\n    min-height: 100vh;\n}\n\n#content > div {\n    width: 100%;\n}\n\n.header {\n    flex: 0 1 250px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    padding: 15px;\n    background-color: #FFF;\n    position: sticky;\n    top: 0;\n    height: 100%;\n}\n\nmain {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    padding: 0 10px;\n    gap: 80px;\n    align-items: center;\n    padding-bottom: 80px;\n\n}\n\n.logo {\n    width: 200px;\n}\n\n.location {\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    padding: 20px;\n    padding-top: 30px;\n    padding-bottom: 30px;\n}\n\n.location a{\n    text-decoration: none;\n    color: var(--main-color);\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    font-family: var(--main-font);\n    font-style: italic;\n    font-weight: 400;\n    font-size: 1.2rem;\n}\n\n.location a:hover{\n    color: #000;\n}\n\nnav ul {\n    list-style-type: none;\n    color: var(--main-color);\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    align-items: center;\n    font-family: var(--main-font);\n    font-weight: 700;\n    font-size: 1.2rem;\n}\n\n.open-icon, .close-icon {\n    background-color: var(--main-color);\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    width: 50px;\n    height: 50px;\n    display: none;\n}\n\n.close-icon {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nnav ul li:hover{\n    cursor: pointer;\n    color: #000;\n}\n\n/* Homepage */\n\n.images-grid {\n    flex: 1;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n}\n\n.col {\n    flex: 1;\n    max-width: 50%;\n}\n\n.col .img {\n  width: 100%;\n  margin-top: 10px;\n  vertical-align: middle;\n}\n\n.description {\n    text-align: center;\n    width: 70%;\n    font-family: var(--main-font);\n    font-weight: 400;\n    font-style: italic;\n    font-size: 2rem;\n}\n\n.lower-grid {\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 10px;\n}\n\n.lower-grid .row {\n    display: flex;\n    gap: 10px;\n}\n\n.lower-grid .img {\n    flex: 1;\n    width: 100%;\n}\n\n.menu-div, .location-div {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    \n}\n\n.text-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 20px;\n    padding: 50px 50px ;\n    font-family: var(--main-font);\n    font-size: 1.3rem;\n}\n\n.text-wrapper h2 {\n    font-weight: 700;\n    font-style: italic;\n    font-size: 2.6rem;\n}\n\n.text-wrapper p {\n    font-weight: 400;\n}\n\n.btn {\n    width: 200px;\n    padding: 10px;\n    background-color: #FFF;\n    border: 1px solid var(--main-color);\n    color: var(--main-color);\n    margin-top: 50px;\n    font-family: var(--main-font);\n    font-weight: 600;\n    font-size: 1.1rem;\n}\n\n.btn:hover {\n    cursor: pointer;\n    border: 1px solid #000;\n    color: #000;\n}\n\n/* Menu Css */\n.menus-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    max-width: 1000px;\n    gap: 15px;\n    font-family: var(--main-font);\n    font-size: 1.3rem;\n}\n\n.menu-section {\n    max-width: 450px;\n    padding: 15px;\n}\n\n.menu-section h3 {\n    padding-bottom: 20px;\n    font-style: italic;\n    font-weight: 700;\n}\n\n.menu-section ul {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.menu-section li p {\n    font-style: italic;\n    padding-top: 10px;\n}\n\n.menu-section li h4 {\n    display: flex;\n    justify-content: space-between;\n}\n\n/* Hours and Location Page */\n\n.hours-location {\n    display: flex;\n    width: 600px;\n    justify-content: space-between;\n    font-family: var(--main-font);\n    font-weight: 400;\n    font-size: 1.3rem;\n}\n\n.map iframe{\n    width: 600px;\n    height: 450px;\n}\n\n/* Contact page */\n\n.contact-form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 600px;\n    font-family: var(--main-font);\n}\n\n.contact-form label{\n    font-weight: 600;\n}\n\n.contact-form label span {\n    color: rgb(126, 126, 126);\n    font-style: italic;\n\n}\n\n.contact-form input, .contact-form textarea {\n    width: 100%;\n    padding: 15px;\n    border: 1px solid #000;\n    font-family: var(--main-font);\n    font-size: 1.3rem;\n}\n\n.contact-form input::placeholder, .contact-form textarea::placeholder{\n    font-family: var(--main-font);\n    font-size: 1.3rem;\n    font-weight: 400;\n    color: rgb(126, 126, 126);\n    opacity: 1;\n}\n\n\n@media only screen and (max-width: 980px) {\n    #content{\n        flex-direction: column;\n    }\n\n    .header {\n        flex: 0 1 100px;\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-around;\n    }\n\n    .logo {\n        width: 150px;\n    }\n\n    .location{\n        display: none;\n    }\n\n    nav ul{\n        display: none;\n    }\n\n    .open-icon, .close-icon {\n        display: inline-block;\n    }\n\n\n    .responsive-nav {\n        width: 100%;\n        min-height: calc(100vh - 100px);\n        display: flex;\n        padding-top: 20px;\n        position: absolute;\n        top: 100px;\n        left: 0;\n        background-color: #FFF;\n        border-top: 1px gray solid;\n    }\n\n    .description{\n        width: 95%;\n    }\n\n    .lower-grid .row {\n        flex-direction: column-reverse;\n    }\n\n\n    .menu-div, .location-div {\n        min-height: 400px;\n    }\n\n    .lower-grid > .row ~.row {\n        flex-direction: column;\n    }\n\n    .text-wrapper {\n        padding: 20px 20px;\n    }\n\n    .hero-img .logo {\n        width: 100px;\n        left: calc(50vw - 50px);\n    }\n\n    .menus-container {\n        justify-content: center;\n    }\n    \n}\n\n@media only screen and (max-width: 600px) {\n    .images-grid {\n        flex-direction: column;\n        gap: 0;\n    }\n\n    .col {\n        max-width: 100%;\n    }\n\n    .description{\n        width: 100%;\n    }\n    \n    .map iframe, .hours-location, .contact-form{\n        width: 300px;\n    }\n\n    .hours-location {\n        flex-direction: column;\n        gap: 20px;\n    }\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap');\n\n:root{\n    --main-color: #701515;\n    --main-font: 'Cormorant Garamond', serif;\n    --tall-pic-height: 700px;\n    --short-pic-height: 350px;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Hero Image for each page */\n\n.hero-img {\n    position: relative;\n    width: 100%;\n    padding-top: 10px;\n    z-index: -100;\n    \n}\n\n.hero-img img{\n    display: block;\n    width: 100%;\n    height: auto;\n}\n\n.hero-img .logo {\n    position: absolute;\n    width: 200px;\n    bottom: 5%;\n    left: calc(50% - 100px);\n\n    \n}\n\n/* Description for each page */\n\n.description-wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-family: var(--main-font);\n    font-size: 1.2rem;\n    max-width: 1000px;\n    padding: 10px;\n}\n\n.description-wrapper h2 {\n    text-align: center;\n    font-style: italic;\n    font-weight: 700;\n    font-size: 3rem;\n}\n\n/* Main content and and nav bar */\n\n#content {\n    display: flex;\n    min-height: 100vh;\n}\n\n#content > div {\n    width: 100%;\n}\n\n.header {\n    flex: 0 1 250px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    padding: 15px;\n    background-color: #FFF;\n    position: sticky;\n    top: 0;\n    height: 100%;\n}\n\nmain {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    padding: 0 10px;\n    gap: 80px;\n    align-items: center;\n    padding-bottom: 80px;\n\n}\n\n.logo {\n    width: 200px;\n}\n\n.location {\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    padding: 20px;\n    padding-top: 30px;\n    padding-bottom: 30px;\n}\n\n.location a{\n    text-decoration: none;\n    color: var(--main-color);\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    font-family: var(--main-font);\n    font-style: italic;\n    font-weight: 400;\n    font-size: 1.2rem;\n}\n\n.location a:hover{\n    color: #000;\n}\n\nnav ul {\n    list-style-type: none;\n    color: var(--main-color);\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    align-items: center;\n    font-family: var(--main-font);\n    font-weight: 700;\n    font-size: 1.2rem;\n}\n\n.open-icon, .close-icon {\n    background-color: var(--main-color);\n    -webkit-mask-image: url('imgs/menu.svg');\n    mask-image: url('imgs/menu.svg');\n    background-repeat: no-repeat;\n    width: 50px;\n    height: 50px;\n    display: none;\n}\n\n.close-icon {\n    -webkit-mask-image: url('imgs/close.svg');\n    mask-image: url('imgs/close.svg');\n}\n\nnav ul li:hover{\n    cursor: pointer;\n    color: #000;\n}\n\n/* Homepage */\n\n.images-grid {\n    flex: 1;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n}\n\n.col {\n    flex: 1;\n    max-width: 50%;\n}\n\n.col .img {\n  width: 100%;\n  margin-top: 10px;\n  vertical-align: middle;\n}\n\n.description {\n    text-align: center;\n    width: 70%;\n    font-family: var(--main-font);\n    font-weight: 400;\n    font-style: italic;\n    font-size: 2rem;\n}\n\n.lower-grid {\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 10px;\n}\n\n.lower-grid .row {\n    display: flex;\n    gap: 10px;\n}\n\n.lower-grid .img {\n    flex: 1;\n    width: 100%;\n}\n\n.menu-div, .location-div {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    \n}\n\n.text-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 20px;\n    padding: 50px 50px ;\n    font-family: var(--main-font);\n    font-size: 1.3rem;\n}\n\n.text-wrapper h2 {\n    font-weight: 700;\n    font-style: italic;\n    font-size: 2.6rem;\n}\n\n.text-wrapper p {\n    font-weight: 400;\n}\n\n.btn {\n    width: 200px;\n    padding: 10px;\n    background-color: #FFF;\n    border: 1px solid var(--main-color);\n    color: var(--main-color);\n    margin-top: 50px;\n    font-family: var(--main-font);\n    font-weight: 600;\n    font-size: 1.1rem;\n}\n\n.btn:hover {\n    cursor: pointer;\n    border: 1px solid #000;\n    color: #000;\n}\n\n/* Menu Css */\n.menus-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    max-width: 1000px;\n    gap: 15px;\n    font-family: var(--main-font);\n    font-size: 1.3rem;\n}\n\n.menu-section {\n    max-width: 450px;\n    padding: 15px;\n}\n\n.menu-section h3 {\n    padding-bottom: 20px;\n    font-style: italic;\n    font-weight: 700;\n}\n\n.menu-section ul {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.menu-section li p {\n    font-style: italic;\n    padding-top: 10px;\n}\n\n.menu-section li h4 {\n    display: flex;\n    justify-content: space-between;\n}\n\n/* Hours and Location Page */\n\n.hours-location {\n    display: flex;\n    width: 600px;\n    justify-content: space-between;\n    font-family: var(--main-font);\n    font-weight: 400;\n    font-size: 1.3rem;\n}\n\n.map iframe{\n    width: 600px;\n    height: 450px;\n}\n\n/* Contact page */\n\n.contact-form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 600px;\n    font-family: var(--main-font);\n}\n\n.contact-form label{\n    font-weight: 600;\n}\n\n.contact-form label span {\n    color: rgb(126, 126, 126);\n    font-style: italic;\n\n}\n\n.contact-form input, .contact-form textarea {\n    width: 100%;\n    padding: 15px;\n    border: 1px solid #000;\n    font-family: var(--main-font);\n    font-size: 1.3rem;\n}\n\n.contact-form input::placeholder, .contact-form textarea::placeholder{\n    font-family: var(--main-font);\n    font-size: 1.3rem;\n    font-weight: 400;\n    color: rgb(126, 126, 126);\n    opacity: 1;\n}\n\n\n@media only screen and (max-width: 980px) {\n    #content{\n        flex-direction: column;\n    }\n\n    .header {\n        flex: 0 1 100px;\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-around;\n    }\n\n    .logo {\n        width: 150px;\n    }\n\n    .location{\n        display: none;\n    }\n\n    nav ul{\n        display: none;\n    }\n\n    .open-icon, .close-icon {\n        display: inline-block;\n    }\n\n\n    .responsive-nav {\n        width: 100%;\n        min-height: calc(100vh - 100px);\n        display: flex;\n        padding-top: 20px;\n        position: absolute;\n        top: 100px;\n        left: 0;\n        background-color: #FFF;\n        border-top: 1px gray solid;\n    }\n\n    .description{\n        width: 95%;\n    }\n\n    .lower-grid .row {\n        flex-direction: column-reverse;\n    }\n\n\n    .menu-div, .location-div {\n        min-height: 400px;\n    }\n\n    .lower-grid > .row ~.row {\n        flex-direction: column;\n    }\n\n    .text-wrapper {\n        padding: 20px 20px;\n    }\n\n    .hero-img .logo {\n        width: 100px;\n        left: calc(50vw - 50px);\n    }\n\n    .menus-container {\n        justify-content: center;\n    }\n    \n}\n\n@media only screen and (max-width: 600px) {\n    .images-grid {\n        flex-direction: column;\n        gap: 0;\n    }\n\n    .col {\n        max-width: 100%;\n    }\n\n    .description{\n        width: 100%;\n    }\n    \n    .map iframe, .hours-location, .contact-form{\n        width: 300px;\n    }\n\n    .hours-location {\n        flex-direction: column;\n        gap: 20px;\n    }\n}\n\n"],"sourceRoot":""}]);
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

    const controlResponsiveNav = () => {
        ul.classList.toggle('responsive-nav');
        menuBtn.classList.toggle('open-icon');
        menuBtn.classList.toggle('close-icon');
        body.style.overflow = body.style.overflow === 'hidden' ? 'auto' : 'hidden';
    };
    menuBtn.addEventListener('click', () => {
        controlResponsiveNav();
    });

    return {
        header,
        menuLink,
        ourStoryLink,
        hoursLink,
        communityLink,
        contactLink,
        controlResponsiveNav,
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

const main = document.createElement('div');
content.appendChild(main);
main.appendChild(_home__WEBPACK_IMPORTED_MODULE_1__["default"].main);

const redirectToPage = (Page) => {
    let width = window.innerWidth;
    console.log(width);
    main.innerHTML = '';
    main.appendChild(Page.main);
    if (width <= 900) {
        _navbar__WEBPACK_IMPORTED_MODULE_0__["default"].controlResponsiveNav();
    }
};

_navbar__WEBPACK_IMPORTED_MODULE_0__["default"].menuLink.addEventListener('click', () => {
    redirectToPage(_menu__WEBPACK_IMPORTED_MODULE_2__["default"]);
});

_navbar__WEBPACK_IMPORTED_MODULE_0__["default"].ourStoryLink.addEventListener('click', () => {
    redirectToPage(_story__WEBPACK_IMPORTED_MODULE_3__["default"]);
});

_navbar__WEBPACK_IMPORTED_MODULE_0__["default"].hoursLink.addEventListener('click', () => {
    redirectToPage(_location__WEBPACK_IMPORTED_MODULE_5__["default"]);
});

_navbar__WEBPACK_IMPORTED_MODULE_0__["default"].communityLink.addEventListener('click', () => {
    redirectToPage(_community__WEBPACK_IMPORTED_MODULE_4__["default"]);
});

_navbar__WEBPACK_IMPORTED_MODULE_0__["default"].contactLink.addEventListener('click', () => {
    redirectToPage(_contact__WEBPACK_IMPORTED_MODULE_6__["default"]);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxhQUFhLFdBQVcsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFB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QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOEI7QUFDSjtBQUNBO0FBQ0s7QUFDSztBQUNNO0FBQ1Y7QUFDWDs7QUFFckI7QUFDQSxvQkFBb0Isc0RBQWE7O0FBRWpDO0FBQ0E7QUFDQSxpQkFBaUIsa0RBQVM7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0VBQTJCO0FBQ25DO0FBQ0E7O0FBRUEseUVBQWdDO0FBQ2hDLG1CQUFtQiw2Q0FBSTtBQUN2QixDQUFDOztBQUVELDZFQUFvQztBQUNwQyxtQkFBbUIsOENBQVE7QUFDM0IsQ0FBQzs7QUFFRCwwRUFBaUM7QUFDakMsbUJBQW1CLGlEQUFnQjtBQUNuQyxDQUFDOztBQUVELDhFQUFxQztBQUNyQyxtQkFBbUIsa0RBQVM7QUFDNUIsQ0FBQzs7QUFFRCw0RUFBbUM7QUFDbkMsbUJBQW1CLGdEQUFPO0FBQzFCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tbXVuaXR5LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdG9yeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaW1ncy9tZW51LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImltZ3MvY2xvc2Uuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db3Jtb3JhbnQrR2FyYW1vbmQ6aXRhbCx3Z2h0QDAsNDAwOzAsNjAwOzAsNzAwOzEsNDAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0tbWFpbi1jb2xvcjogIzcwMTUxNTtcXG4gICAgLS1tYWluLWZvbnQ6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcXG4gICAgLS10YWxsLXBpYy1oZWlnaHQ6IDcwMHB4O1xcbiAgICAtLXNob3J0LXBpYy1oZWlnaHQ6IDM1MHB4O1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBIZXJvIEltYWdlIGZvciBlYWNoIHBhZ2UgKi9cXG5cXG4uaGVyby1pbWcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgei1pbmRleDogLTEwMDtcXG4gICAgXFxufVxcblxcbi5oZXJvLWltZyBpbWd7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uaGVyby1pbWcgLmxvZ28ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm90dG9tOiA1JTtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XFxuXFxuICAgIFxcbn1cXG5cXG4vKiBEZXNjcmlwdGlvbiBmb3IgZWFjaCBwYWdlICovXFxuXFxuLmRlc2NyaXB0aW9uLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbi13cmFwcGVyIGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLyogTWFpbiBjb250ZW50IGFuZCBhbmQgbmF2IGJhciAqL1xcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbiNjb250ZW50ID4gZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBmbGV4OiAwIDEgMjUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbm1haW4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIGdhcDogODBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XFxuXFxufVxcblxcbi5sb2dvIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4ubG9jYXRpb24gYXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5sb2NhdGlvbiBhOmhvdmVye1xcbiAgICBjb2xvcjogIzAwMDtcXG59XFxuXFxubmF2IHVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ub3Blbi1pY29uLCAuY2xvc2UtaWNvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jbG9zZS1pY29uIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG5uYXYgdWwgbGk6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi8qIEhvbWVwYWdlICovXFxuXFxuLmltYWdlcy1ncmlkIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5jb2wge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG59XFxuXFxuLmNvbCAuaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubG93ZXItZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubG93ZXItZ3JpZCAucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubG93ZXItZ3JpZCAuaW1nIHtcXG4gICAgZmxleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tZW51LWRpdiwgLmxvY2F0aW9uLWRpdiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4udGV4dC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogNTBweCA1MHB4IDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4udGV4dC13cmFwcGVyIGgyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDIuNnJlbTtcXG59XFxuXFxuLnRleHQtd3JhcHBlciBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmJ0biB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLyogTWVudSBDc3MgKi9cXG4ubWVudXMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbiB7XFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5tZW51LXNlY3Rpb24gaDMge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uIHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uIGxpIHAge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uIGxpIGg0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiBIb3VycyBhbmQgTG9jYXRpb24gUGFnZSAqL1xcblxcbi5ob3Vycy1sb2NhdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5tYXAgaWZyYW1le1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGhlaWdodDogNDUwcHg7XFxufVxcblxcbi8qIENvbnRhY3QgcGFnZSAqL1xcblxcbi5jb250YWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxufVxcblxcbi5jb250YWN0LWZvcm0gbGFiZWx7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5jb250YWN0LWZvcm0gbGFiZWwgc3BhbiB7XFxuICAgIGNvbG9yOiByZ2IoMTI2LCAxMjYsIDEyNik7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXG59XFxuXFxuLmNvbnRhY3QtZm9ybSBpbnB1dCwgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5jb250YWN0LWZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLCAuY29udGFjdC1mb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlcntcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBjb2xvcjogcmdiKDEyNiwgMTI2LCAxMjYpO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XFxuICAgICNjb250ZW50e1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyIHtcXG4gICAgICAgIGZsZXg6IDAgMSAxMDBweDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIH1cXG5cXG4gICAgLmxvZ28ge1xcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5sb2NhdGlvbntcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgbmF2IHVse1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAub3Blbi1pY29uLCAuY2xvc2UtaWNvbiB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIH1cXG5cXG5cXG4gICAgLnJlc3BvbnNpdmUtbmF2IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMTAwcHg7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBncmF5IHNvbGlkO1xcbiAgICB9XFxuXFxuICAgIC5kZXNjcmlwdGlvbntcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgIH1cXG5cXG4gICAgLmxvd2VyLWdyaWQgLnJvdyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIH1cXG5cXG5cXG4gICAgLm1lbnUtZGl2LCAubG9jYXRpb24tZGl2IHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5sb3dlci1ncmlkID4gLnJvdyB+LnJvdyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC50ZXh0LXdyYXBwZXIge1xcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5oZXJvLWltZyAubG9nbyB7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBsZWZ0OiBjYWxjKDUwdncgLSA1MHB4KTtcXG4gICAgfVxcblxcbiAgICAubWVudXMtY29udGFpbmVyIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICAgIFxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5pbWFnZXMtZ3JpZCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAwO1xcbiAgICB9XFxuXFxuICAgIC5jb2wge1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5kZXNjcmlwdGlvbntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWFwIGlmcmFtZSwgLmhvdXJzLWxvY2F0aW9uLCAuY29udGFjdC1mb3Jte1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5ob3Vycy1sb2NhdGlvbiB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICB9XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxxQkFBcUI7SUFDckIsd0NBQXdDO0lBQ3hDLHdCQUF3QjtJQUN4Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFF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aEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHFCQUFxQjtJQUN6Qjs7O0lBR0E7UUFDSSxXQUFXO1FBQ1gsK0JBQStCO1FBQy9CLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixPQUFPO1FBQ1Asc0JBQXNCO1FBQ3RCLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLDhCQUE4QjtJQUNsQzs7O0lBR0E7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCOztBQUVKOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsTUFBTTtJQUNWOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsU0FBUztJQUNiO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29ybW9yYW50K0dhcmFtb25kOml0YWwsd2dodEAwLDQwMDswLDYwMDswLDcwMDsxLDQwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdHtcXG4gICAgLS1tYWluLWNvbG9yOiAjNzAxNTE1O1xcbiAgICAtLW1haW4tZm9udDogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIHNlcmlmO1xcbiAgICAtLXRhbGwtcGljLWhlaWdodDogNzAwcHg7XFxuICAgIC0tc2hvcnQtcGljLWhlaWdodDogMzUwcHg7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIEhlcm8gSW1hZ2UgZm9yIGVhY2ggcGFnZSAqL1xcblxcbi5oZXJvLWltZyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICB6LWluZGV4OiAtMTAwO1xcbiAgICBcXG59XFxuXFxuLmhlcm8taW1nIGltZ3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5oZXJvLWltZyAubG9nbyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBib3R0b206IDUlO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcXG5cXG4gICAgXFxufVxcblxcbi8qIERlc2NyaXB0aW9uIGZvciBlYWNoIHBhZ2UgKi9cXG5cXG4uZGVzY3JpcHRpb24td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXdyYXBwZXIgaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4vKiBNYWluIGNvbnRlbnQgYW5kIGFuZCBuYXYgYmFyICovXFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2NvbnRlbnQgPiBkaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGZsZXg6IDAgMSAyNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgZ2FwOiA4MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcXG5cXG59XFxuXFxuLmxvZ28ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi5sb2NhdGlvbiBhe1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmxvY2F0aW9uIGE6aG92ZXJ7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5vcGVuLWljb24sIC5jbG9zZS1pY29uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCdpbWdzL21lbnUuc3ZnJyk7XFxuICAgIG1hc2staW1hZ2U6IHVybCgnaW1ncy9tZW51LnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2xvc2UtaWNvbiB7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCdpbWdzL2Nsb3NlLnN2ZycpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoJ2ltZ3MvY2xvc2Uuc3ZnJyk7XFxufVxcblxcbm5hdiB1bCBsaTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLyogSG9tZXBhZ2UgKi9cXG5cXG4uaW1hZ2VzLWdyaWQge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmNvbCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbn1cXG5cXG4uY29sIC5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5sb3dlci1ncmlkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5sb3dlci1ncmlkIC5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5sb3dlci1ncmlkIC5pbWcge1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1lbnUtZGl2LCAubG9jYXRpb24tZGl2IHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi50ZXh0LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1MHB4IDUwcHggO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi50ZXh0LXdyYXBwZXIgaDIge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMi42cmVtO1xcbn1cXG5cXG4udGV4dC13cmFwcGVyIHAge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKiBNZW51IENzcyAqL1xcbi5tZW51cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uIHtcXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbiBoMyB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5tZW51LXNlY3Rpb24gdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5tZW51LXNlY3Rpb24gbGkgcCB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbi5tZW51LXNlY3Rpb24gbGkgaDQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8qIEhvdXJzIGFuZCBMb2NhdGlvbiBQYWdlICovXFxuXFxuLmhvdXJzLWxvY2F0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLm1hcCBpZnJhbWV7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgaGVpZ2h0OiA0NTBweDtcXG59XFxuXFxuLyogQ29udGFjdCBwYWdlICovXFxuXFxuLmNvbnRhY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSBsYWJlbHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSBsYWJlbCBzcGFuIHtcXG4gICAgY29sb3I6IHJnYigxMjYsIDEyNiwgMTI2KTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcblxcbn1cXG5cXG4uY29udGFjdC1mb3JtIGlucHV0LCAuY29udGFjdC1mb3JtIHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsIC5jb250YWN0LWZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVye1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGNvbG9yOiByZ2IoMTI2LCAxMjYsIDEyNik7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcXG4gICAgI2NvbnRlbnR7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5oZWFkZXIge1xcbiAgICAgICAgZmxleDogMCAxIDEwMHB4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgfVxcblxcbiAgICAubG9nbyB7XFxuICAgICAgICB3aWR0aDogMTUwcHg7XFxuICAgIH1cXG5cXG4gICAgLmxvY2F0aW9ue1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBuYXYgdWx7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5vcGVuLWljb24sIC5jbG9zZS1pY29uIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgfVxcblxcblxcbiAgICAucmVzcG9uc2l2ZS1uYXYge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAxMDBweDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IGdyYXkgc29saWQ7XFxuICAgIH1cXG5cXG4gICAgLmRlc2NyaXB0aW9ue1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgfVxcblxcbiAgICAubG93ZXItZ3JpZCAucm93IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgfVxcblxcblxcbiAgICAubWVudS1kaXYsIC5sb2NhdGlvbi1kaXYge1xcbiAgICAgICAgbWluLWhlaWdodDogNDAwcHg7XFxuICAgIH1cXG5cXG4gICAgLmxvd2VyLWdyaWQgPiAucm93IH4ucm93IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLnRleHQtd3JhcHBlciB7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLmhlcm8taW1nIC5sb2dvIHtcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIGxlZnQ6IGNhbGMoNTB2dyAtIDUwcHgpO1xcbiAgICB9XFxuXFxuICAgIC5tZW51cy1jb250YWluZXIge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gICAgXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLmltYWdlcy1ncmlkIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDA7XFxuICAgIH1cXG5cXG4gICAgLmNvbCB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLmRlc2NyaXB0aW9ue1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tYXAgaWZyYW1lLCAuaG91cnMtbG9jYXRpb24sIC5jb250YWN0LWZvcm17XFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgIH1cXG5cXG4gICAgLmhvdXJzLWxvY2F0aW9uIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDIwcHg7XFxuICAgIH1cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgSW1hZ2UgZnJvbSAnLi9pbWdzL2NvbW11bml0eS5qcGcnO1xuaW1wb3J0IHsgY3JlYXRlSGVyb0ltYWdlLCBjcmVhdGVEZXNjcmlwdGlvbiB9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IGNyZWF0ZUNvbW11bml0eSA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhlcm9JbWFnZShJbWFnZSkpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlRGVzY3JpcHRpb24oJ0NvbW11bml0eScsICdBdCBvdXIgcmVzdGF1cmFudCwgd2UgYmVsaWV2ZSBpbiB0aGUgcG93ZXIgb2YgZ2l2aW5nIGJhY2sgdG8gdGhlIGNvbW11bml0eSB0aGF0IGhhcyBzdXBwb3J0ZWQgdXMgdGhyb3VnaG91dCB0aGUgeWVhcnMuIFdlIGhhdmUgZm9ybWVkIHN0cm9uZyBwYXJ0bmVyc2hpcHMgd2l0aCBsb2NhbCBjaGFyaXRpZXMgYW5kIG9yZ2FuaXphdGlvbnMsIGNvbGxhYm9yYXRpbmcgb24gaW5pdGlhdGl2ZXMgdG8gbWFrZSBhIHBvc2l0aXZlIGltcGFjdC4gT25lIG9mIG91ciBwcm91ZGVzdCBhY2hpZXZlbWVudHMgaXMgb3VyIG9uZ29pbmcgY29tbWl0bWVudCB0byBmZWVkaW5nIHRoZSBob21lbGVzcyBhbmQgcmVmdWdlZXMgaW4gb3VyIGNvbW11bml0eS4gVGhyb3VnaCByZWd1bGFyIG1lYWwgZG9uYXRpb25zIGFuZCB2b2x1bnRlZXIgZWZmb3J0cywgd2Ugc3RyaXZlIHRvIHByb3ZpZGUgbm91cmlzaG1lbnQgYW5kIGEgc2Vuc2Ugb2YgaG9wZSB0byB0aG9zZSBpbiBuZWVkLiBXZSBiZWxpZXZlIHRoYXQgZXZlcnlvbmUgZGVzZXJ2ZXMgYSB3YXJtIG1lYWwgYW5kIGEgd2VsY29taW5nIGVudmlyb25tZW50LCBhbmQgd2UgYXJlIGRlZGljYXRlZCB0byBjcmVhdGluZyBqdXN0IHRoYXQuPGJyPiBJbiBhZGRpdGlvbiB0byBvdXIgc3VwcG9ydCBmb3IgdGhlIGhvbWVsZXNzIGFuZCByZWZ1Z2Vlcywgd2UgaGF2ZSBjcmVhdGVkIGEgd2FybSBhbmQgc3VwcG9ydGl2ZSBlbnZpcm9ubWVudCBmb3IgdnVsbmVyYWJsZSBpbmRpdmlkdWFscyB3aXRoaW4gb3VyIGNvbW11bml0eS4gV2UgaGF2ZSBlc3RhYmxpc2hlZCBwcm9ncmFtcyB0byBwcm92aWRlIGpvYiB0cmFpbmluZyBhbmQgb3Bwb3J0dW5pdGllcyBmb3IgdGhvc2UgZmFjaW5nIGVtcGxveW1lbnQgY2hhbGxlbmdlcywgaGVscGluZyB0aGVtIGdhaW4gdmFsdWFibGUgc2tpbGxzIGFuZCByZWdhaW4gdGhlaXIgY29uZmlkZW5jZS4gRnVydGhlcm1vcmUsIHdlIGZyZXF1ZW50bHkgaG9zdCBmdW5kcmFpc2luZyBldmVudHMgYW5kIGNoYXJpdHkgZGlubmVycywgd2hlcmUgcHJvY2VlZHMgYXJlIGRpcmVjdGVkIHRvd2FyZHMgbG9jYWwgY2F1c2VzIHRoYXQgZm9jdXMgb24gZWR1Y2F0aW9uLCBoZWFsdGhjYXJlLCBhbmQgc29jaWFsIHdlbGZhcmUuIFdlIGFyZSBwcm91ZCB0byBiZSBhIHJlc3RhdXJhbnQgdGhhdCBub3Qgb25seSBzZXJ2ZXMgZXhxdWlzaXRlIGN1aXNpbmUgYnV0IGFsc28gc2VydmVzIGFzIGEgcGlsbGFyIG9mIHN1cHBvcnQgYW5kIGNvbXBhc3Npb24gZm9yIG91ciBjb21tdW5pdHksIHN0YW5kaW5nIHNpZGUgYnkgc2lkZSB3aXRoIHRob3NlIHdobyBuZWVkIGl0IG1vc3QuJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21tdW5pdHk7XG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSAnLi9pbWdzL0NvbnRhY3QuanBnJztcbmltcG9ydCB7IGNyZWF0ZUhlcm9JbWFnZSwgY3JlYXRlRGVzY3JpcHRpb24gfSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBjcmVhdGVJbnB1dCA9ICh0eXBlLCBuYW1lKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsLmh0bWxGb3IgPSBuYW1lO1xuICAgIGxhYmVsLmlubmVySFRNTCA9IGAke25hbWV9IC0gPHNwYW4+UmVxdWlyZWQ8L3NwYW4+YDtcblxuICAgIGNvbnN0IGlucHV0ID0gdHlwZSA9PT0gJ3RleHRhcmVhJyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSkgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlmICh0eXBlICE9PSAndGV4dGFyZWEnKSB7XG4gICAgICAgIGlucHV0LnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IG5hbWU7XG4gICAgaW5wdXQubmFtZSA9IG5hbWU7XG4gICAgaW5wdXQuaWQgPSBuYW1lO1xuICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBjcmVhdGVDb250YWN0ID0gKCgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSGVyb0ltYWdlKEltYWdlKSk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVEZXNjcmlwdGlvbignQ29udGFjdCcsICdGb3IgaW5xdWlyaWVzIGFib3V0IGhvc3RpbmcgeW91ciBkcmVhbSB3ZWRkaW5nIG9yIGFueSBvdGhlciBzcGVjaWFsIGV2ZW50IGF0IG91ciBlbmNoYW50aW5nIHZlbnVlLCBwbGVhc2UgZG9uXFwndCBoZXNpdGF0ZSB0byByZWFjaCBvdXQgdG8gb3VyIGRlZGljYXRlZCBldmVudHMgdGVhbS4gV2Ugd291bGQgYmUgZGVsaWdodGVkIHRvIGFzc2lzdCB5b3UgaW4gY3JlYXRpbmcgYW4gdW5mb3JnZXR0YWJsZSBleHBlcmllbmNlIHRhaWxvcmVkIHRvIHlvdXIgbmVlZHMuIFRvIHNhdm9yIGFuIGV4cXVpc2l0ZSBkaW5pbmcgZXhwZXJpZW5jZSBvciB0byBtYWtlIGEgcmVzZXJ2YXRpb24sIGtpbmRseSBjb250YWN0IG91ciBmcmllbmRseSBzdGFmZiB3aG8gd2lsbCBiZSBkZWxpZ2h0ZWQgdG8gYXNzaXN0IHlvdSBpbiBzZWN1cmluZyBhIHRhYmxlIGZvciBhbiB1bmZvcmdldHRhYmxlIGN1bGluYXJ5IGpvdXJuZXkuJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1mb3JtJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlSW5wdXQoJ3RleHQnLCAnTmFtZScpKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUlucHV0KCdlbWFpbCcsICdFbWFpbCcpKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUlucHV0KCdudW1iZXInLCAnUGhvbmUgTnVtYmVyJykpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlSW5wdXQoJ3RleHRhcmVhJywgJ1lvdXIgTWVzc2FnZScpKTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBzdWJtaXRCdG4udHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnU2VuZCc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbixcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdDtcbiIsImltcG9ydCBkaXNoMSBmcm9tICcuL2ltZ3MvZGlzaDEuanBnJztcbmltcG9ydCBkaXNoMiBmcm9tICcuL2ltZ3MvZGlzaDIuanBnJztcbmltcG9ydCBkaXNoMyBmcm9tICcuL2ltZ3MvZGlzaDMuanBnJztcbmltcG9ydCBkaXNoNCBmcm9tICcuL2ltZ3MvZGlzaDQuanBnJztcbmltcG9ydCBkaXNoNSBmcm9tICcuL2ltZ3MvZGlzaDUuanBnJztcbmltcG9ydCBkaXNoNiBmcm9tICcuL2ltZ3MvZGlzaDYuanBnJztcbmltcG9ydCBkaXNoNyBmcm9tICcuL2ltZ3MvZGlzaDcuanBnJztcbmltcG9ydCBkaXNoOCBmcm9tICcuL2ltZ3MvZGlzaDguanBnJztcbmltcG9ydCBtZW51SW1nIGZyb20gJy4vaW1ncy9tZW51LmpwZyc7XG5pbXBvcnQgbG9jYXRpb25JbWcgZnJvbSAnLi9pbWdzL2xvY2F0aW9uLmpwZyc7XG5cbmNvbnN0IGltYWdlcyA9IFtkaXNoMSwgZGlzaDIsIGRpc2gzLCBkaXNoNCwgZGlzaDUsIGRpc2g2LCBkaXNoNywgZGlzaDhdO1xuXG5jb25zdCBhcHBlbmRJbWFnZXMgPSAoaW1hZ2UsIHBhcmVudCkgPT4ge1xuICAgIGNvbnN0IG5ld0ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgbmV3SW1hZ2Uuc3JjID0gaW1hZ2U7XG4gICAgbmV3SW1hZ2UuY2xhc3NMaXN0LmFkZCgnaW1nJyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5ld0ltYWdlKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUhvbWUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgICBjb25zdCBpbWFnZXNHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VzR3JpZC5jbGFzc0xpc3QuYWRkKCdpbWFnZXMtZ3JpZCcpO1xuICAgIGNvbnN0IGdyaWRDb2x1bW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZENvbHVtbjEuY2xhc3NMaXN0LmFkZCgnY29sJyk7XG4gICAgY29uc3QgZ3JpZENvbHVtbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkQ29sdW1uMi5jbGFzc0xpc3QuYWRkKCdjb2wnKTtcbiAgICBpbWFnZXNHcmlkLmFwcGVuZENoaWxkKGdyaWRDb2x1bW4xKTtcbiAgICBpbWFnZXNHcmlkLmFwcGVuZENoaWxkKGdyaWRDb2x1bW4yKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgIGlmICgoaSArIDEpICUgMiA9PSAwKSB7XG4gICAgICAgICAgICBhcHBlbmRJbWFnZXMoaW1hZ2VzW2ldLCBncmlkQ29sdW1uMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcHBlbmRJbWFnZXMoaW1hZ2VzW2ldLCBncmlkQ29sdW1uMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGltYWdlc0dyaWQpO1xuXG4gICAgY29uc3QgbWFpbkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtYWluRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnT3VyIGZpbmUgZGluaW5nIHJlc3RhdXJhbnQgb2ZmZXJzIGFuIGVsZWdhbnQgYW1iaWFuY2UsIGEgdGFudGFsaXppbmcgbWVudSBvZiBjbGFzc2ljIEZyZW5jaCBjdWlzaW5lLCBhbmQgaW1wZWNjYWJsZSBzZXJ2aWNlLCBjcmVhdGluZyBhbiB1bmZvcmdldHRhYmxlIGRpbmluZyBleHBlcmllbmNlLic7XG4gICAgbWFpbkRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluRGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgbG93ZXJHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG93ZXJHcmlkLmNsYXNzTGlzdC5hZGQoJ2xvd2VyLWdyaWQnKTtcblxuICAgIGNvbnN0IHRleHRXcmFwcGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHRXcmFwcGVyMS5jbGFzc0xpc3QuYWRkKCd0ZXh0LXdyYXBwZXInKTtcbiAgICBjb25zdCB0ZXh0V3JhcHBlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0V3JhcHBlcjIuY2xhc3NMaXN0LmFkZCgndGV4dC13cmFwcGVyJyk7XG5cbiAgICBjb25zdCByb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93MS5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudURpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWRpdicpO1xuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIGNvbnN0IG1lbnVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVUZXh0LnRleHRDb250ZW50ID0gJ0luZHVsZ2UgaW4gYW4gZXhxdWlzaXRlIGN1bGluYXJ5IGpvdXJuZXkgdGhyb3VnaCBGcmFuY2Ugd2l0aCBvdXIgbWVudSwgY3JhZnRlZCB0byBkZWxpZ2h0IHlvdXIgc2Vuc2VzIGFuZCBzYXRpc2Z5IHlvdXIgYXBwZXRpdGUuJztcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ0bi50ZXh0Q29udGVudCA9ICdNRU5VJztcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIHRleHRXcmFwcGVyMS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICAgIHRleHRXcmFwcGVyMS5hcHBlbmRDaGlsZChtZW51VGV4dCk7XG4gICAgdGV4dFdyYXBwZXIxLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQodGV4dFdyYXBwZXIxKTtcbiAgICByb3cxLmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuICAgIGFwcGVuZEltYWdlcyhtZW51SW1nLCByb3cxKTtcblxuICAgIGNvbnN0IHJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgIGNvbnN0IGxvY2F0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9jYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24tZGl2Jyk7XG4gICAgY29uc3QgbG9jYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbG9jYXRpb25UaXRsZS50ZXh0Q29udGVudCA9ICdMb2NhdGlvbic7XG4gICAgY29uc3QgbG9jYXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxvY2F0aW9uVGV4dC50ZXh0Q29udGVudCA9ICcgTmVzdGxlZCBpbiB0aGUgaGVhcnQgb2YgdGhlIGNpdHksIG91ciByZXN0YXVyYW50IG9mZmVycyBhbiBpZHlsbGljIGFuZCBjaGFybWluZyBzZXR0aW5nIHRoYXQgd2lsbCB0cmFuc3BvcnQgeW91IHRvIHRoZSBGcmVuY2ggY291bnRyeXNpZGUuICc7XG4gICAgY29uc3QgbG9jYXRpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsb2NhdGlvbkJ0bi50ZXh0Q29udGVudCA9ICdIT1VSUyAmIExPQ0FUSU9OJztcbiAgICBsb2NhdGlvbkJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICB0ZXh0V3JhcHBlcjIuYXBwZW5kQ2hpbGQobG9jYXRpb25UaXRsZSk7XG4gICAgdGV4dFdyYXBwZXIyLmFwcGVuZENoaWxkKGxvY2F0aW9uVGV4dCk7XG4gICAgdGV4dFdyYXBwZXIyLmFwcGVuZENoaWxkKGxvY2F0aW9uQnRuKTtcbiAgICBsb2NhdGlvbkRpdi5hcHBlbmRDaGlsZCh0ZXh0V3JhcHBlcjIpO1xuICAgIGFwcGVuZEltYWdlcyhsb2NhdGlvbkltZywgcm93Mik7XG4gICAgcm93Mi5hcHBlbmRDaGlsZChsb2NhdGlvbkRpdik7XG5cbiAgICBsb3dlckdyaWQuYXBwZW5kQ2hpbGQocm93MSk7XG4gICAgbG93ZXJHcmlkLmFwcGVuZENoaWxkKHJvdzIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobG93ZXJHcmlkKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluLFxuICAgICAgICBtZW51QnRuLFxuICAgICAgICBsb2NhdGlvbkJ0bixcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTtcbiIsImltcG9ydCBJbWFnZSBmcm9tICcuL2ltZ3MvaG91cnNBbmRMb2NhdGlvbi5qcGcnO1xuaW1wb3J0IHsgY3JlYXRlSGVyb0ltYWdlLCBjcmVhdGVEZXNjcmlwdGlvbiB9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IGNyZWF0ZUhvdXJzQW5kTG9jYXRpb24gPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIZXJvSW1hZ2UoSW1hZ2UpKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZURlc2NyaXB0aW9uKCdIb3VycyBhbmQgTG9jYXRpb24nLCAnTmVzdGxlZCBpbiB0aGUgaGVhcnQgb2YgdGhlIGNpdHksIG91ciByZXN0YXVyYW50IGJvYXN0cyBhIGNhcHRpdmF0aW5nIGxvY2F0aW9uIHRoYXQgZXh1ZGVzIGNoYXJtIGFuZCBhbGx1cmUuIEFzIHlvdSBzdGVwIHRocm91Z2ggb3VyIGRvb3JzLCB5b3VcXCdsbCBiZSB0cmFuc3BvcnRlZCB0byBhIHdvcmxkIG9mIHJlZmluZWQgZWxlZ2FuY2UgYW5kIGVuY2hhbnRtZW50LiBUaGUgaW50aW1hdGUgYW5kIGludml0aW5nIGF0bW9zcGhlcmUgY3JlYXRlcyB0aGUgcGVyZmVjdCBiYWNrZHJvcCBmb3IgYW4gdW5mb3JnZXR0YWJsZSBkaW5pbmcgZXhwZXJpZW5jZS4gU29mdCBhbWJpZW50IGxpZ2h0aW5nIGNhc3RzIGEgd2FybSBnbG93IG92ZXIgdGhlIG1ldGljdWxvdXNseSBjdXJhdGVkIGRlY29yLCBzaG93Y2FzaW5nIGEgaGFybW9uaW91cyBibGVuZCBvZiBtb2Rlcm4gc29waGlzdGljYXRpb24gYW5kIHRpbWVsZXNzIGJlYXV0eS4gRnJvbSB0aGUgY2FyZWZ1bGx5IGNob3NlbiBmdXJuaXNoaW5ncyB0byB0aGUgdGFzdGVmdWwgYXJ0d29yayBhZG9ybmluZyB0aGUgd2FsbHMsIGV2ZXJ5IGRldGFpbCBoYXMgYmVlbiB0aG91Z2h0ZnVsbHkgc2VsZWN0ZWQgdG8gY3JlYXRlIGEgY2FwdGl2YXRpbmcgYW1iaWFuY2UgdGhhdCBjYXB0aXZhdGVzIGFuZCBkZWxpZ2h0cy4gV2hldGhlciB5b3VcXCdyZSBzZWVraW5nIGEgcm9tYW50aWMgZGlubmVyIGZvciB0d28gb3IgYW4gZWxlZ2FudCBnYXRoZXJpbmcgd2l0aCBmcmllbmRzLCBvdXIgcmVzdGF1cmFudCBwcm92aWRlcyB0aGUgaWRlYWwgc2V0dGluZyB0byBpbmR1bGdlIGluIGN1bGluYXJ5IGV4Y2VsbGVuY2Ugd2hpbGUgaW1tZXJzaW5nIHlvdXJzZWxmIGluIGFuIGF0bW9zcGhlcmUgb2YgcmVmaW5lZCBsdXh1cnkuJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBob3Vyc0FuZEFkZHJlc3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vyc0FuZEFkZHJlc3NEaXYuY2xhc3NMaXN0LmFkZCgnaG91cnMtbG9jYXRpb24nKTtcbiAgICBjb25zdCBob3Vyc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJzRGl2LmlubmVySFRNTCA9ICdPcGVuIFNpeCBEYXlzIEEgV2Vlazxicj4gU3VuZGF5IE5vb24gLSAxMVBNPGJyPiBNb25kYXkgQ0xPU0VEPGJyPiBUdWVzZGF5ICYgV2VkbmVzZGF5IDJQTSAtIDExUE08YnI+IFRodXJzZGF5ICYgRnJpZGF5IDJQTSAtIE1pZG5pZ2h0PGJyPiBTYXR1cmRheSBOb29uIC0gMTFQTSc7XG4gICAgaG91cnNBbmRBZGRyZXNzRGl2LmFwcGVuZENoaWxkKGhvdXJzRGl2KTtcbiAgICBjb25zdCBhZGRyZXNzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkcmVzc0Rpdi5pbm5lckhUTUwgPSAnQ2hhci4gVHJpa291cGkgMjQ1LDxicj4gS2lmaXNpYSAxNDUgNjQnO1xuICAgIGhvdXJzQW5kQWRkcmVzc0Rpdi5hcHBlbmRDaGlsZChhZGRyZXNzRGl2KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhvdXJzQW5kQWRkcmVzc0Rpdik7XG5cbiAgICBjb25zdCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYXAuaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMzE0MC4yODE2NTE4ODE5NTI3ITJkMjMuODAxMzQ5NTAwMDAwMDA0ITNkMzguMDg3MTA3NDAwMDAwMDEhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDE0YTE5ZjFhZGI2ZDViMTclM0EweDRkN2M5NDEzNDQ3Y2QwMWEhMnp6cWZPc2MtQkxpRE9wTS1CenJuT3VzNl96NDNQZ002M0lESTBOU3dnenByT3Q4LUd6cm5QZzg2NXpxd2dNVFExSURZMCE1ZTAhM20yITFzZWwhMnNnciE0djE2ODI3NTI5MzE4NjIhNW0yITFzZWwhMnNnclwiIHN0eWxlPVwiYm9yZGVyOjA7XCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlcIiByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCI+PC9pZnJhbWU+JztcbiAgICBtYXAuY2xhc3NMaXN0LmFkZCgnbWFwJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYXApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbixcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG91cnNBbmRMb2NhdGlvbjtcbiIsImltcG9ydCBJbWFnZSBmcm9tICcuL2ltZ3MvbWVudUltZy5qcGcnO1xuaW1wb3J0IHsgY3JlYXRlSGVyb0ltYWdlLCBjcmVhdGVEZXNjcmlwdGlvbiB9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gKGRpc2gsIHByaWNlLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGRpc2g7XG4gICAgY29uc3QgcHJpY2VTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByaWNlU3Bhbi50ZXh0Q29udGVudCA9IGAke3ByaWNlfeKCrGA7XG4gICAgdGl0bGUuYXBwZW5kQ2hpbGQocHJpY2VTcGFuKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgaXRlbS5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gICAgcmV0dXJuIGl0ZW07XG59O1xuXG5jb25zdCBjcmVhdGVNZW51Q29tcG9uZW50ID0gKHRpdGxlLCBkaXNoZXMsIHByaWNlcywgZGVzY3JpcHRpb25zKSA9PiB7XG4gICAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgbWVudVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1zZWN0aW9uJyk7XG4gICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG5ld1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobmV3VGl0bGUpO1xuICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShkaXNoZXNbaV0sIHByaWNlc1tpXSwgZGVzY3JpcHRpb25zW2ldKSk7XG4gICAgfVxuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVMaXN0KTtcblxuICAgIHJldHVybiBtZW51U2VjdGlvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZU1lbnUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFwcGV0aXplcnNOYW1lcyA9IFsnRXNjYXJnb3RzIMOgIGxhIEJvdXJndWlnbm9ubmUnLCAnUGlzc2FsYWRpw6hyZScsICdRdWVuZWxsZXMgZGUgQnJvY2hldCcsICdTb3VwZSDDoCBsXFwnT2lnbm9uIEdyYXRpbsOpZScsICdDb3F1aWxsZXMgU2FpbnQtSmFjcXVlcyddO1xuICAgIGNvbnN0IGFwcGV0aXplcnNQcmljZXMgPSBbJzE4LjUwJywgJzE1LjAwJywgJzIyLjAwJywgJzE2LjAwJywgJzI4LjAwJ107XG4gICAgY29uc3QgYXBwZXRpemVyc0Rlc2NyaXB0aW9ucyA9IFsnQSBjbGFzc2ljIEZyZW5jaCBhcHBldGl6ZXIsIHRoaXMgZGlzaCBmZWF0dXJlcyB0ZW5kZXIgc25haWxzIGNvb2tlZCBpbiBhIHJpY2ggZ2FybGljIGJ1dHRlciBzYXVjZS4gU2VydmVkIHdpdGggY3J1c3R5IGJyZWFkIGZvciBkaXBwaW5nLicsICdBIGRlbGljaW91cyB2ZWdldGFyaWFuIG9wdGlvbiwgdGhpcyB0YXJ0IGZlYXR1cmVzIGEgZmxha3kgcGFzdHJ5IGJhc2UgdG9wcGVkIHdpdGggY2FyYW1lbGl6ZWQgb25pb25zLCBhbmQgb2xpdmVzLicsICdBIEZyZW5jaCBkZWxpY2FjeSwgdGhlc2UgZHVtcGxpbmdzIGFyZSBtYWRlIGZyb20gZ3JvdW5kIHBpa2UgZmlzaCBhbmQgc2VydmVkIGluIGEgY3JlYW15IGxvYnN0ZXIgc2F1Y2UuJywgJ0EgY2xhc3NpYyBGcmVuY2ggc291cCwgdGhpcyBkaXNoIGZlYXR1cmVzIGNhcmFtZWxpemVkIG9uaW9ucyBpbiBhIHJpY2ggYmVlZiBicm90aCwgdG9wcGVkIHdpdGggbWVsdGVkIGNoZWVzZSBhbmQgc2VydmVkIHdpdGggY3J1c3R5IGJyZWFkLicsICdBIHNlYWZvb2QgZmF2b3JpdGUsIHRoaXMgZGlzaCBmZWF0dXJlcyB0ZW5kZXIgc2NhbGxvcHMgYmFrZWQgaW4gYSByaWNoLCBjcmVhbXkgc2F1Y2UgYW5kIHRvcHBlZCB3aXRoIGJyZWFkY3J1bWJzLiBDYW4gYmUgbWFkZSB2ZWdhbiBieSByZXBsYWNpbmcgdGhlIHNjYWxsb3BzIHdpdGggbXVzaHJvb21zLiddO1xuXG4gICAgY29uc3Qgc2FsYWRzTmFtZXMgPSBbJ1NhbGFkZSBOacOnb2lzZScsICdTYWxhZGUgZGUgQ2hldnJlIENoYXVkJywgJ1NhbGFkZSBMeW9ubmFpc2UnLCAnU2FsYWRlIGRlIE1hZ3JldCBkZSBDYW5hcmQnLCAnU2FsYWRlIFZlcnRlJywgJ1NhbGFkZSBkZSBDZWxlcmktcmF2ZSddO1xuICAgIGNvbnN0IHNhbGFkc1ByaWNlcyA9IFsnMTguNTAnLCAnMTcuMDAnLCAnMTQuNTAnLCAnMjIuMDAnLCAnMTAuMDAnLCAnMTYuMDAnXTtcbiAgICBjb25zdCBzYWxhZHNEZXNjcmlwdGlvbnMgPSBbJ0EgY2xhc3NpYyBGcmVuY2ggc2FsYWQsIHRoaXMgZGlzaCBmZWF0dXJlcyBtaXhlZCBncmVlbnMsIGJvaWxlZCBwb3RhdG9lcywgZ3JlZW4gYmVhbnMsIHRvbWF0b2VzLCBvbGl2ZXMsIGFuZCB0dW5hLiBDYW4gYmUgbWFkZSB2ZWdhbiBieSBvbWl0dGluZyB0aGUgdHVuYS4nLCAnQSBkZWxpY2lvdXMgdmVnZXRhcmlhbiBvcHRpb24sIHRoaXMgc2FsYWQgZmVhdHVyZXMgd2FybSwgY3JlYW15IGdvYXQgY2hlZXNlIHNlcnZlZCBvbiBhIGJlZCBvZiBtaXhlZCBncmVlbnMgd2l0aCBhIGhvbmV5IHZpbmFpZ3JldHRlLicsICdBcyBtZW50aW9uZWQgaW4gdGhlIHByZXZpb3VzIGFuc3dlciwgdGhpcyBzaW1wbGUgeWV0IGRlbGljaW91cyBzYWxhZCBmZWF0dXJlcyBmcmlzw6llIGxldHR1Y2UsIGNyaXNweSBiYWNvbiwgYW5kIGEgcGVyZmVjdGx5IHBvYWNoZWQgZWdnLiBDYW4gYmUgbWFkZSB2ZWdhbiBieSBvbWl0dGluZyB0aGUgYmFjb24gYW5kIGVnZyBhbmQgcmVwbGFjaW5nIHdpdGggcm9hc3RlZCB2ZWdldGFibGVzLicsICdUaGlzIHNhbGFkIGZlYXR1cmVzIHRlbmRlciBzbGljZXMgb2Ygc2VhcmVkIGR1Y2sgYnJlYXN0IHNlcnZlZCBvbiBhIGJlZCBvZiBtaXhlZCBncmVlbnMgd2l0aCBhIHJhc3BiZXJyeSB2aW5haWdyZXR0ZS4gQ2FuIGJlIG1hZGUgdmVnYW4gYnkgcmVwbGFjaW5nIHRoZSBkdWNrIGJyZWFzdCB3aXRoIHJvYXN0ZWQgdmVnZXRhYmxlcy4nLCAnQSBzaW1wbGUgeWV0IGVsZWdhbnQgc2FsYWQsIHRoaXMgZGlzaCBmZWF0dXJlcyBtaXhlZCBncmVlbnMgdG9zc2VkIGluIGEgbGlnaHQgdmluYWlncmV0dGUgZHJlc3NpbmcuJywgJ1RoaXMgdmVnYW4gc2FsYWQgZmVhdHVyZXMgdGhpbmx5IHNsaWNlZCBjZWxlcnkgcm9vdCwgYXBwbGVzLCBhbmQgd2FsbnV0cyBzZXJ2ZWQgb24gYSBiZWQgb2YgbWl4ZWQgZ3JlZW5zIHdpdGggYSBsZW1vbiB2aW5haWdyZXR0ZS4nXTtcblxuICAgIGNvbnN0IG1haW5OYW1lcyA9IFsnQm9ldWYgQm91cmd1aWdub24nLCAnQ29xIGF1IFZpbicsICdDYXNzb3VsZXQnLCAnUmF0YXRvdWlsbGUnLCAnUXVpY2hlIExvcnJhaW5lJywgJ1NvbGUgTWV1bmnDqHJlJywgJ0R1Y2sgQ29uZml0JywgJ1RvdXJuZWRvcyBSb3NzaW5pJywgJ05hdmFyaW4gZFxcJ0FnbmVhdScsICdNdXNocm9vbSBCb3VyZ3VpZ25vbiddO1xuICAgIGNvbnN0IG1haW5QcmljZXMgPSBbJzM2LjAwJywgJzMyLjAwJywgJzI4LjAwJywgJzI2LjAwJywgJzIyLjAwJywgJzM4LjAwJywgJzM0LjAwJywgJzQ4LjAwJywgJzQyLjAwJywgJzI4LjAwJ107XG4gICAgY29uc3QgbWFpbkRlc2NyaXB0aW9ucyA9IFsnQSBjbGFzc2ljIEZyZW5jaCBkaXNoLCB0aGlzIHN0ZXcgZmVhdHVyZXMgdGVuZGVyIGJlZWYgc2xvdy1jb29rZWQgaW4gcmVkIHdpbmUgd2l0aCBjYXJyb3RzLCBvbmlvbnMsIGFuZCBiYWNvbi4gU2VydmVkIHdpdGggY3J1c3R5IGJyZWFkIGFuZCBtYXNoZWQgcG90YXRvZXMuJywgJ0Fub3RoZXIgY2xhc3NpYyBGcmVuY2ggZGlzaCwgdGhpcyBvbmUgZmVhdHVyZXMgY2hpY2tlbiBjb29rZWQgaW4gcmVkIHdpbmUgd2l0aCBiYWNvbiwgbXVzaHJvb21zLCBhbmQgcGVhcmwgb25pb25zLiBTZXJ2ZWQgd2l0aCBtYXNoZWQgcG90YXRvZXMuJywgJ1RoaXMgaGVhcnR5IHN0ZXcgZmVhdHVyZXMgd2hpdGUgYmVhbnMgc2xvdy1jb29rZWQgd2l0aCBwb3JrIHNhdXNhZ2UsIGJhY29uLCBhbmQgZHVjayBjb25maXQuIFNlcnZlZCB3aXRoIGNydXN0eSBicmVhZC4nLCAnQSBkZWxpY2lvdXMgdmVnZXRhcmlhbiBvcHRpb24sIHRoaXMgZGlzaCBmZWF0dXJlcyBlZ2dwbGFudCwgenVjY2hpbmksIGJlbGwgcGVwcGVycywgb25pb25zLCBhbmQgdG9tYXRvZXMgc3Rld2VkIHRvZ2V0aGVyIGluIGEgZmxhdm9yZnVsIHNhdWNlLiBTZXJ2ZWQgd2l0aCBjcnVzdHkgYnJlYWQuJywgJ0EgRnJlbmNoIGNsYXNzaWMsIHRoaXMgcXVpY2hlIGZlYXR1cmVzIGEgZmxha3kgcGFzdHJ5IGNydXN0IGZpbGxlZCB3aXRoIGJhY29uLCBjaGVlc2UsIGFuZCBhIGNyZWFteSBjdXN0YXJkLiBTZXJ2ZWQgd2l0aCBtaXhlZCBncmVlbnMuJywgJ1RoaXMgc2VhZm9vZCBkaXNoIGZlYXR1cmVzIHRlbmRlciBmaWxsZXRzIG9mIHNvbGUgc2F1dMOpZWQgaW4gYSBidXR0ZXIgc2F1Y2Ugd2l0aCBjYXBlcnMgYW5kIGxlbW9uLiBTZXJ2ZWQgd2l0aCByb2FzdGVkIHBvdGF0b2VzIGFuZCBzZWFzb25hbCB2ZWdldGFibGVzLicsICdBIEZyZW5jaCBkZWxpY2FjeSwgdGhpcyBkaXNoIGZlYXR1cmVzIGR1Y2sgbGVnIHNsb3dseSBjb29rZWQgaW4gaXRzIG93biBmYXQgdW50aWwgaXQgYmVjb21lcyB0ZW5kZXIgYW5kIGZsYXZvcmZ1bC4gU2VydmVkIHdpdGggcm9hc3RlZCBwb3RhdG9lcyBhbmQgc2Vhc29uYWwgdmVnZXRhYmxlcy4nLCAnQSBsdXh1cmlvdXMgZGlzaCwgdGhpcyBvbmUgZmVhdHVyZXMgYSB0ZW5kZXIgYmVlZiBmaWxldCB0b3BwZWQgd2l0aCBzZWFyZWQgZm9pZSBncmFzIGFuZCBhIHJpY2ggcmVkIHdpbmUgc2F1Y2UuIFNlcnZlZCB3aXRoIHJvYXN0ZWQgcG90YXRvZXMgYW5kIHNlYXNvbmFsIHZlZ2V0YWJsZXMuJywgJ1RoaXMgaGVhcnR5IHN0ZXcgZmVhdHVyZXMgdGVuZGVyIGxhbWIgc2xvdy1jb29rZWQgd2l0aCBjYXJyb3RzLCBvbmlvbnMsIGFuZCBwb3RhdG9lcyBpbiBhIGZsYXZvcmZ1bCBicm90aC4gU2VydmVkIHdpdGggY3J1c3R5IGJyZWFkLicsICdBIGRlbGljaW91cyB2ZWdhbiBvcHRpb24sIHRoaXMgZGlzaCBmZWF0dXJlcyBtdXNocm9vbXMgc2xvdy1jb29rZWQgaW4gcmVkIHdpbmUgd2l0aCBjYXJyb3RzLCBvbmlvbnMsIGFuZCBnYXJsaWMuIFNlcnZlZCB3aXRoIGNydXN0eSBicmVhZC4nXTtcblxuICAgIGNvbnN0IGRlc3NlcnRzTmFtZXMgPSBbJ0Nyw6htZSBCcsO7bMOpZScsICdUYXJ0ZSBUYXRpbicsICdQcm9maXRlcm9sZXMnLCAnU29yYmV0JywgJ01vdXNzZSBhdSBDaG9jb2xhdCddO1xuICAgIGNvbnN0IGRlc3NlcnRzUHJpY2VzID0gWycxMi4wMCcsICcxNC4wMCcsICcxNi4wMCcsICcxMC4wMCcsICcxNC4wMCddO1xuICAgIGNvbnN0IGRlc3NlcnRzRGVzY3JpcHRpb25zID0gWydBIGNsYXNzaWMgRnJlbmNoIGRlc3NlcnQsIHRoaXMgY3VzdGFyZCBpcyB0b3BwZWQgd2l0aCBhIGxheWVyIG9mIGNhcmFtZWxpemVkIHN1Z2FyLiBTZXJ2ZWQgd2l0aCBmcmVzaCBiZXJyaWVzLicsICdBIGRlbGljaW91cyBkZXNzZXJ0LCB0aGlzIHRhcnQgZmVhdHVyZXMgY2FyYW1lbGl6ZWQgYXBwbGVzIGJha2VkIGluIGEgYnV0dGVyeSBwYXN0cnkgY3J1c3QuIFNlcnZlZCB3aXRoIHZhbmlsbGEgaWNlIGNyZWFtLicsICdUaGVzZSBsaWdodCBhbmQgYWlyeSBjcmVhbSBwdWZmcyBhcmUgZmlsbGVkIHdpdGggdmFuaWxsYSBpY2UgY3JlYW0gYW5kIHRvcHBlZCB3aXRoIHdhcm0gY2hvY29sYXRlIHNhdWNlLicsICdBIHJlZnJlc2hpbmcgdmVnYW4gb3B0aW9uLCB0aGlzIHNvcmJldCBmZWF0dXJlcyBzZWFzb25hbCBmcnVpdCBmbGF2b3JzIHN1Y2ggYXMgcmFzcGJlcnJ5IG9yIG1hbmdvLiBTZXJ2ZWQgd2l0aCBmcmVzaCBmcnVpdC4nLCAnVGhpcyByaWNoIGFuZCBkZWNhZGVudCBkZXNzZXJ0IGZlYXR1cmVzIGEgbGlnaHQgYW5kIGFpcnkgY2hvY29sYXRlIG1vdXNzZS4gU2VydmVkIHdpdGggZnJlc2ggYmVycmllcyBhbmQgd2hpcHBlZCBjcmVhbS4nXTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIZXJvSW1hZ2UoSW1hZ2UpKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZURlc2NyaXB0aW9uKCdNZW51cycsICcgU3RlcCBpbnRvIG91ciB3b3JsZCBvZiBmaW5lIEZyZW5jaCBjdWlzaW5lLCB3aGVyZSBldmVyeSBkaXNoIHRlbGxzIGEgc3Rvcnkgb2YgcGFzc2lvbiBhbmQgYXJ0aXN0cnkuIE91ciBtZW51IGlzIGEgY2VsZWJyYXRpb24gb2YgdGhlIHJpY2ggY3VsaW5hcnkgdHJhZGl0aW9ucyBvZiBGcmFuY2UsIGZlYXR1cmluZyBjbGFzc2ljIGRpc2hlcyBzdWNoIGFzIENvcSBhdSBWaW4sIFNvbGUgTWV1bmnDqHJlLCBhbmQgQ3LDqG1lIEJyw7tsw6llLiBPdXIgaW5ncmVkaWVudHMgYXJlIHNvdXJjZWQgZnJvbSB0aGUgZmluZXN0IHN1cHBsaWVycywgYW5kIG91ciBjaGVmcyB1c2Ugb25seSB0aGUgZnJlc2hlc3QgYW5kIG1vc3QgZmxhdm9yZnVsIGluZ3JlZGllbnRzIHRvIGNyZWF0ZSBlYWNoIGRpc2guIFdoZXRoZXIgeW91XFwncmUgYSBjb25ub2lzc2V1ciBvZiBGcmVuY2ggY3Vpc2luZSBvciBzaW1wbHkgbG9va2luZyBmb3IgYSBtZW1vcmFibGUgZGluaW5nIGV4cGVyaWVuY2UsIHdlIGludml0ZSB5b3UgdG8gam9pbiB1cyBhbmQgaW5kdWxnZSBpbiB0aGUgdWx0aW1hdGUgY3VsaW5hcnkgam91cm5leSB0aHJvdWdoIEZyYW5jZS4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IG1lbnVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudXNEaXYuY2xhc3NMaXN0LmFkZCgnbWVudXMtY29udGFpbmVyJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51c0Rpdik7XG5cbiAgICBjb25zdCBhcHBldGl6ZXJzTWVudSA9IGNyZWF0ZU1lbnVDb21wb25lbnQoJ0FQUEVUSVpFUlMnLCBhcHBldGl6ZXJzTmFtZXMsIGFwcGV0aXplcnNQcmljZXMsIGFwcGV0aXplcnNEZXNjcmlwdGlvbnMpO1xuICAgIG1lbnVzRGl2LmFwcGVuZENoaWxkKGFwcGV0aXplcnNNZW51KTtcblxuICAgIGNvbnN0IHNhbGFkc01lbnUgPSBjcmVhdGVNZW51Q29tcG9uZW50KCdTQUxBRFMnLCBzYWxhZHNOYW1lcywgc2FsYWRzUHJpY2VzLCBzYWxhZHNEZXNjcmlwdGlvbnMpO1xuICAgIG1lbnVzRGl2LmFwcGVuZENoaWxkKHNhbGFkc01lbnUpO1xuXG4gICAgY29uc3QgbWFpbk1lbnUgPSBjcmVhdGVNZW51Q29tcG9uZW50KCdNQUlOIERJU0hFUycsIG1haW5OYW1lcywgbWFpblByaWNlcywgbWFpbkRlc2NyaXB0aW9ucyk7XG4gICAgbWVudXNEaXYuYXBwZW5kQ2hpbGQobWFpbk1lbnUpO1xuXG4gICAgY29uc3QgZGVzc2VydHNNZW51ID0gY3JlYXRlTWVudUNvbXBvbmVudCgnREVTU0VSVFMnLCBkZXNzZXJ0c05hbWVzLCBkZXNzZXJ0c1ByaWNlcywgZGVzc2VydHNEZXNjcmlwdGlvbnMpO1xuICAgIG1lbnVzRGl2LmFwcGVuZENoaWxkKGRlc3NlcnRzTWVudSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51O1xuIiwiaW1wb3J0IFJlZExvZ28gZnJvbSAnLi9pbWdzL2xvZ28tcmVkLnBuZyc7XG5cbmNvbnN0IGNyZWF0ZU5hdkJhciA9ICgoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBuYXZMb2dvID0gbmV3IEltYWdlKCk7XG4gICAgbmF2TG9nby5zcmMgPSBSZWRMb2dvO1xuICAgIG5hdkxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXZMb2dvKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcbiAgICBjb25zdCBsb2NhdGlvbmxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbG9jYXRpb25saW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGxvY2F0aW9ubGluay5ocmVmID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS8lQ0UlQTclQ0UlQjElQ0YlODEuKyVDRSVBNCVDRiU4MSVDRSVCOSVDRSVCQSVDRSVCRiVDRiU4RCVDRiU4MCVDRSVCNysyNDUsKyVDRSU5QSVDRSVCNyVDRiU4NiVDRSVCOSVDRiU4MyVDRSVCOSVDRSVBQysxNDUrNjQvQDM4LjA4NzEwNzQsMjMuNzk4Nzc0NiwxN3ovZGF0YT0hM20xITRiMSE0bTYhM201ITFzMHgxNGExOWYxYWRiNmQ1YjE3OjB4NGQ3Yzk0MTM0NDdjZDAxYSE4bTIhM2QzOC4wODcxMDc0ITRkMjMuODAxMzQ5NSExNnMlMkZnJTJGMTFjc2Q4X2s5MSc7XG4gICAgbG9jYXRpb25saW5rLmlubmVySFRNTCA9ICc8c3Bhbj5DaGFyLiBUcmlrb3VwaSAyNDUsIDwvc3Bhbj48c3Bhbj5LaWZpc2lhIDE0NSA2NDwvc3Bhbj4nO1xuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9ubGluayk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBtZW51TGluay50ZXh0Q29udGVudCA9ICdNRU5VJztcbiAgICB1bC5hcHBlbmRDaGlsZChtZW51TGluayk7XG5cbiAgICBjb25zdCBvdXJTdG9yeUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG91clN0b3J5TGluay50ZXh0Q29udGVudCA9ICdPVVIgU1RPUlknO1xuICAgIHVsLmFwcGVuZENoaWxkKG91clN0b3J5TGluayk7XG5cbiAgICBjb25zdCBob3Vyc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGhvdXJzTGluay50ZXh0Q29udGVudCA9ICdIT1VSUyAmIExPQ0FUSU9OJztcbiAgICB1bC5hcHBlbmRDaGlsZChob3Vyc0xpbmspO1xuXG4gICAgY29uc3QgY29tbXVuaXR5TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29tbXVuaXR5TGluay50ZXh0Q29udGVudCA9ICdDT01NVU5JVFknO1xuICAgIHVsLmFwcGVuZENoaWxkKGNvbW11bml0eUxpbmspO1xuXG4gICAgY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnRhY3RMaW5rLnRleHRDb250ZW50ID0gJ0NPTlRBQ1QnO1xuICAgIHVsLmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdvcGVuLWljb24nKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5cbiAgICBjb25zdCBjb250cm9sUmVzcG9uc2l2ZU5hdiA9ICgpID0+IHtcbiAgICAgICAgdWwuY2xhc3NMaXN0LnRvZ2dsZSgncmVzcG9uc2l2ZS1uYXYnKTtcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuLWljb24nKTtcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdjbG9zZS1pY29uJyk7XG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBib2R5LnN0eWxlLm92ZXJmbG93ID09PSAnaGlkZGVuJyA/ICdhdXRvJyA6ICdoaWRkZW4nO1xuICAgIH07XG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29udHJvbFJlc3BvbnNpdmVOYXYoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgbWVudUxpbmssXG4gICAgICAgIG91clN0b3J5TGluayxcbiAgICAgICAgaG91cnNMaW5rLFxuICAgICAgICBjb21tdW5pdHlMaW5rLFxuICAgICAgICBjb250YWN0TGluayxcbiAgICAgICAgY29udHJvbFJlc3BvbnNpdmVOYXYsXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdkJhcjtcbiIsImltcG9ydCBJbWFnZSBmcm9tICcuL2ltZ3Mvb3Vyc3RvcnkuanBnJztcbmltcG9ydCB7IGNyZWF0ZUhlcm9JbWFnZSwgY3JlYXRlRGVzY3JpcHRpb24gfSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBjcmVhdGVPdXJTdG9yeSA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhlcm9JbWFnZShJbWFnZSkpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlRGVzY3JpcHRpb24oJ091ciBTdG9yeScsICdPdXIgcmVzdGF1cmFudCBoYXMgYSByaWNoIGFuZCBpbnNwaXJpbmcgaGlzdG9yeSB0aGF0IHNwYW5zIG92ZXIgdGhyZWUgZGVjYWRlcy4gSXQgd2FzIGZvdW5kZWQgYnkgYSBzdHJ1Z2dsaW5nIGltbWlncmFudCwgSnVsZSwgd2hvIGhhZCBhIGRlZXAgbG92ZSBmb3IgY29va2luZyBhbmQgZXNwZWNpYWxseSBGcmVuY2ggY3Vpc2luZS4gQ29taW5nIGZyb20gaHVtYmxlIGJlZ2lubmluZ3MsIEp1bGUgaGFkIGFsd2F5cyBkcmVhbWVkIG9mIG93bmluZyBoZXIgb3duIHJlc3RhdXJhbnQgYW5kIHNoYXJpbmcgaGVyIGN1bGluYXJ5IGNyZWF0aW9ucyB3aXRoIHRoZSB3b3JsZC4gSGVyIHBhc3Npb24gYW5kIGRlZGljYXRpb24gZXZlbnR1YWxseSBwYWlkIG9mZiwgYW5kIHNoZSB3YXMgYWJsZSB0byBvcGVuIGhlciBvd24gcmVzdGF1cmFudCBpbiB0aGUgaGVhcnQgb2YgdGhlIGNpdHkuPGJyPiBUaGUgbmVpZ2hib3Job29kIHdoZXJlIG91ciByZXN0YXVyYW50IGlzIGxvY2F0ZWQgaXMgc3RlZXBlZCBpbiBoaXN0b3J5IGFuZCBoYXMgYSByaWNoIGN1bHR1cmFsIGhlcml0YWdlLiBJdCBpcyBhIHBsYWNlIHdoZXJlIGFydGlzdHMsIHdyaXRlcnMsIGFuZCBtdXNpY2lhbnMgaGF2ZSBmcmVxdWVudGVkIGZvciBkZWNhZGVzLCBzZWVraW5nIGluc3BpcmF0aW9uIGFuZCBjcmVhdGl2aXR5LiBKdWxlIHdhcyBkcmF3biB0byB0aGlzIGFyZWEgYmVjYXVzZSBvZiBpdHMgYm9oZW1pYW4gYXRtb3NwaGVyZSBhbmQgYXJ0aXN0aWMgZW5lcmd5LCB3aGljaCBzaGUgZm91bmQgdG8gYmUgYSBwZXJmZWN0IG1hdGNoIGZvciBoZXIgb3duIGNyZWF0aXZlIHNwaXJpdC48YnI+IE92ZXIgdGhlIHllYXJzLCBvdXIgcmVzdGF1cmFudCBoYXMgYmVjb21lIGEgYmVsb3ZlZCBpbnN0aXR1dGlvbiBpbiB0aGUgY29tbXVuaXR5LCBrbm93biBmb3IgaXRzIGV4cXVpc2l0ZSBGcmVuY2ggY3Vpc2luZSwgZWxlZ2FudCBhbWJpYW5jZSwgYW5kIGltcGVjY2FibGUgc2VydmljZS4gSnVsZVxcJ3MgZGVkaWNhdGlvbiBhbmQgaGFyZCB3b3JrIGhhdmUgcGFpZCBvZmYsIGFuZCBzaGUgaGFzIGJlY29tZSBhbiBpbnNwaXJhdGlvbiB0byBtYW55LCBib3RoIGluIHRoZSBjdWxpbmFyeSB3b3JsZCBhbmQgYmV5b25kLiBUb2RheSwgb3VyIHJlc3RhdXJhbnQgY29udGludWVzIHRvIGhvbm9yIEp1bGVcXCdzIGxlZ2FjeSwgc2VydmluZyB1cCB0aGUgc2FtZSBkZWxpY2lvdXMgRnJlbmNoIGRpc2hlcyB0aGF0IGhhdmUgYmVlbiBkZWxpZ2h0aW5nIGRpbmVycyBmb3Igb3ZlciAzMCB5ZWFycy4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW4sXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU91clN0b3J5O1xuIiwiaW1wb3J0IHdoaXRlTG9nbyBmcm9tICcuL2ltZ3MvbG9nby13aGl0ZS5wbmcnO1xuXG5jb25zdCBjcmVhdGVIZXJvSW1hZ2UgPSAoaW1hZ2UpID0+IHtcbiAgICBjb25zdCBMb2dvID0gbmV3IEltYWdlKCk7XG4gICAgTG9nby5zcmMgPSB3aGl0ZUxvZ287XG4gICAgTG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICAgY29uc3QgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBuZXdJbWFnZS5zcmMgPSBpbWFnZTtcbiAgICBjb25zdCBpbWFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ2hlcm8taW1nJyk7XG4gICAgaW1hZ2VEaXYuYXBwZW5kQ2hpbGQobmV3SW1hZ2UpO1xuICAgIGltYWdlRGl2LmFwcGVuZENoaWxkKExvZ28pO1xuXG4gICAgcmV0dXJuIGltYWdlRGl2O1xufTtcblxuY29uc3QgY3JlYXRlRGVzY3JpcHRpb24gPSAodGl0bGUsIHRleHQpID0+IHtcbiAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBuZXdEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi13cmFwcGVyJyk7XG4gICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG5ld1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgY29uc3QgbmV3UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5ld1BhcmFncmFwaC5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIG5ld0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcbiAgICBuZXdEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChuZXdQYXJhZ3JhcGgpO1xuICAgIHJldHVybiBuZXdEZXNjcmlwdGlvbjtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUhlcm9JbWFnZSwgY3JlYXRlRGVzY3JpcHRpb24gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IE5hdkJhciBmcm9tICcuL25hdmJhcic7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBPdXJTdG9yeSBmcm9tICcuL3N0b3J5JztcbmltcG9ydCBDb21tdW5pdHkgZnJvbSAnLi9jb21tdW5pdHknO1xuaW1wb3J0IEhvdXJzQW5kTG9jYXRpb24gZnJvbSAnLi9sb2NhdGlvbic7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29udGVudC5hcHBlbmRDaGlsZChOYXZCYXIuaGVhZGVyKTtcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbm1haW4uYXBwZW5kQ2hpbGQoSG9tZS5tYWluKTtcblxuY29uc3QgcmVkaXJlY3RUb1BhZ2UgPSAoUGFnZSkgPT4ge1xuICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnNvbGUubG9nKHdpZHRoKTtcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoUGFnZS5tYWluKTtcbiAgICBpZiAod2lkdGggPD0gOTAwKSB7XG4gICAgICAgIE5hdkJhci5jb250cm9sUmVzcG9uc2l2ZU5hdigpO1xuICAgIH1cbn07XG5cbk5hdkJhci5tZW51TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZWRpcmVjdFRvUGFnZShNZW51KTtcbn0pO1xuXG5OYXZCYXIub3VyU3RvcnlMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlZGlyZWN0VG9QYWdlKE91clN0b3J5KTtcbn0pO1xuXG5OYXZCYXIuaG91cnNMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlZGlyZWN0VG9QYWdlKEhvdXJzQW5kTG9jYXRpb24pO1xufSk7XG5cbk5hdkJhci5jb21tdW5pdHlMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlZGlyZWN0VG9QYWdlKENvbW11bml0eSk7XG59KTtcblxuTmF2QmFyLmNvbnRhY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlZGlyZWN0VG9QYWdlKENvbnRhY3QpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=