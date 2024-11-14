/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\r\n  const content = document.createElement(\"div\");\r\n  content.innerHTML = `\r\n        <h2>Contact Us</h2>\r\n        <p>Email: DNR@restaurant.com</p>\r\n        <p>Phone: 91+ 1245678967</p>\r\n    `;\r\n  return content;\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanM/ZDU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGgyPkNvbnRhY3QgVXM8L2gyPlxyXG4gICAgICAgIDxwPkVtYWlsOiBETlJAcmVzdGF1cmFudC5jb208L3A+XHJcbiAgICAgICAgPHA+UGhvbmU6IDkxKyAxMjQ1Njc4OTY3PC9wPlxyXG4gICAgYDtcclxuICByZXR1cm4gY29udGVudDtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contact.js\n");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\r\n  const content = document.createElement(\"div\");\r\n  content.innerHTML = `\r\n        <h2>Welcome to Our DNR Restaurant!</h2>\r\n        <p>Enjoy a fantastic dining experience with us.</p>\r\n    `;\r\n  return content;\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzPzdiNDEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxoMj5XZWxjb21lIHRvIE91ciBETlIgUmVzdGF1cmFudCE8L2gyPlxyXG4gICAgICAgIDxwPkVuam95IGEgZmFudGFzdGljIGRpbmluZyBleHBlcmllbmNlIHdpdGggdXMuPC9wPlxyXG4gICAgYDtcclxuICByZXR1cm4gY29udGVudDtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/home.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nconst contentDiv = document.getElementById(\"content\");\r\nconst textContainer = document.createElement(\"div\");\r\ntextContainer.classList.add(\"text-container\");\r\ncontentDiv.appendChild(textContainer);\r\n\r\nfunction clearContent() {\r\n  textContainer.innerHTML = \"\";\r\n}\r\nfunction navigateTo(section) {\r\n  clearContent();\r\n  switch (section) {\r\n    case \"home\":\r\n      textContainer.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)());\r\n      break;\r\n    case \"menu\":\r\n      textContainer.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu)());\r\n      break;\r\n    case \"contact\":\r\n      textContainer.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContact)());\r\n      break;\r\n    default:\r\n      textContainer.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)());\r\n  }\r\n}\r\n\r\nnavigateTo(\"home\");\r\n\r\ndocument\r\n  .getElementById(\"home-btn\")\r\n  .addEventListener(\"click\", () => navigateTo(\"home\"));\r\ndocument\r\n  .getElementById(\"menu-btn\")\r\n  .addEventListener(\"click\", () => navigateTo(\"menu\"));\r\ndocument\r\n  .getElementById(\"contact-btn\")\r\n  .addEventListener(\"click\", () => navigateTo(\"contact\"));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFxQztBQUNBO0FBQ007QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msa0RBQVE7QUFDeEM7QUFDQTtBQUNBLGdDQUFnQyxrREFBUTtBQUN4QztBQUNBO0FBQ0EsZ0NBQWdDLHdEQUFXO0FBQzNDO0FBQ0E7QUFDQSxnQ0FBZ0Msa0RBQVE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRIb21lIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xyXG5pbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gXCIuL21lbnUuanNcIjtcclxuaW1wb3J0IHsgbG9hZENvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0LmpzXCI7XHJcblxyXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG5jb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGV4dC1jb250YWluZXJcIik7XHJcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XHJcblxyXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XHJcbiAgdGV4dENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG59XHJcbmZ1bmN0aW9uIG5hdmlnYXRlVG8oc2VjdGlvbikge1xyXG4gIGNsZWFyQ29udGVudCgpO1xyXG4gIHN3aXRjaCAoc2VjdGlvbikge1xyXG4gICAgY2FzZSBcImhvbWVcIjpcclxuICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkSG9tZSgpKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwibWVudVwiOlxyXG4gICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRNZW51KCkpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJjb250YWN0XCI6XHJcbiAgICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZENvbnRhY3QoKSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkSG9tZSgpKTtcclxuICB9XHJcbn1cclxuXHJcbm5hdmlnYXRlVG8oXCJob21lXCIpO1xyXG5cclxuZG9jdW1lbnRcclxuICAuZ2V0RWxlbWVudEJ5SWQoXCJob21lLWJ0blwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbmF2aWdhdGVUbyhcImhvbWVcIikpO1xyXG5kb2N1bWVudFxyXG4gIC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnRuXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBuYXZpZ2F0ZVRvKFwibWVudVwiKSk7XHJcbmRvY3VtZW50XHJcbiAgLmdldEVsZW1lbnRCeUlkKFwiY29udGFjdC1idG5cIilcclxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IG5hdmlnYXRlVG8oXCJjb250YWN0XCIpKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\r\n  const content = document.createElement(\"div\");\r\n  content.innerHTML = `\r\n    <h2>Our Menu</h2>\r\n    <ul>\r\n        <li>Pizza - $10</li>\r\n        <li>Burger - $8</li>\r\n        <li>Pasta - $12</li>\r\n        <li>Tacos - $5</li>\r\n        <li>Fried Chicken - $11</li>\r\n        <li>Soup - $6</li>\r\n        <li>Sushi - $15</li>\r\n    </ul>\r\n`;\r\n\r\n  return content;\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgPGgyPk91ciBNZW51PC9oMj5cclxuICAgIDx1bD5cclxuICAgICAgICA8bGk+UGl6emEgLSAkMTA8L2xpPlxyXG4gICAgICAgIDxsaT5CdXJnZXIgLSAkODwvbGk+XHJcbiAgICAgICAgPGxpPlBhc3RhIC0gJDEyPC9saT5cclxuICAgICAgICA8bGk+VGFjb3MgLSAkNTwvbGk+XHJcbiAgICAgICAgPGxpPkZyaWVkIENoaWNrZW4gLSAkMTE8L2xpPlxyXG4gICAgICAgIDxsaT5Tb3VwIC0gJDY8L2xpPlxyXG4gICAgICAgIDxsaT5TdXNoaSAtICQxNTwvbGk+XHJcbiAgICA8L3VsPlxyXG5gO1xyXG5cclxuICByZXR1cm4gY29udGVudDtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;