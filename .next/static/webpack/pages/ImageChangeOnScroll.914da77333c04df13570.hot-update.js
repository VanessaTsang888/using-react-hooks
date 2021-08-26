"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ImageChangeOnScroll",{

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/vtsang/OneDrive - Capgemini/code/using-react-hooks/pages/ImageChangeOnScroll.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/* \nShow colorising when the mouse enters and leaves each image with new code that displays images in a vertical list so wehave something to scroll.\n\nWriting a JS expression with speaker id allows us to dynamically use the speaker images within the speakers folder. Then maps will iterate over them.\nEach ID then gets it's own 'ImageToggleOnScroll' component rendered and because they are separated by divs they stack vertically.\n*/\n// To add a 'moseover event' to every speaker image that sets the title of our browser window to the speaker ID, need to maintain in state what the\n// current mouseover speak ID is so need to create that state -> useState Hook:\n\n\n\nvar ImageChangeOnScroll = function ImageChangeOnScroll() {\n  _s();\n\n  /* state instant to maintain in state what the current mouseover speak ID is. Then I can add a 'moseover event' to every speaker image that sets the\n  title of the user's browser window to the speaker ID. Initialise useState to '0' */\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      currentSpeakerId = _useState[0],\n      setCurrentSpeakerId = _useState[1]; // Need a State to create a counter at top of app that displays the total number of mouse events that have occurred while the app is running.\n\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      mouseEventCnt = _useState2[0],\n      setMouseEventCnt = _useState2[1]; // In the onMouseOver event, increment the counter. Then in the return, output that value using span element/tag.\n\n  /* Listen for the mouseover event. Mouseover event execution - calling 'setCurrentSpeakerId' to the current speaker that this image component renders.\n  Console.log that speaker ID as changes is invisible to the UI and I need know what happens when I test this event by mouseover an image. */\n  // Assign the fn inside useEffect Hook to window.document.title of the browser.\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    window.document.title = \"SpeakerId: \".concat(currentSpeakerId);\n    console.log(\"useEffect: setting title to \".concat(currentSpeakerId));\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: [\"mouseEventCnt: $\", mouseEventCnt]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this), \" \", [1124, 187, 823, 1269, 1530].map(function (speakerId) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onMouseOver: function onMouseOver() {\n          setCurrentSpeakerId(speakerId);\n          setMouseEventCnt(mouseEventCnt + 1);\n          console.log(\"onMouseOver:\".concat(speakerId));\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__.default, {\n          primaryImg: \"/static/speakers/bw/Speaker-\".concat(speakerId, \".jpg\"),\n          secondaryImg: \"/static/speakers/Speaker-\".concat(speakerId, \".jpg\"),\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, _this)\n      }, speakerId, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ImageChangeOnScroll, \"XDXVveCh0mFDHA6S/A4AclRGIAU=\");\n\n_c = ImageChangeOnScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageChangeOnScroll);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageChangeOnScroll\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbWFnZUNoYW5nZU9uU2Nyb2xsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFBQTs7QUFDaEM7QUFDRjtBQUZrQyxrQkFHZ0JILCtDQUFRLENBQUMsQ0FBRCxDQUh4QjtBQUFBLE1BR3pCSSxnQkFIeUI7QUFBQSxNQUdQQyxtQkFITyxpQkFJaEM7OztBQUpnQyxtQkFLVUwsK0NBQVEsQ0FBQyxDQUFELENBTGxCO0FBQUEsTUFLekJNLGFBTHlCO0FBQUEsTUFLVkMsZ0JBTFUsa0JBTWhDOztBQUNBO0FBQ0Y7QUFDRTs7O0FBQ0FOLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkTyxJQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLEtBQWhCLHdCQUFzQ04sZ0JBQXRDO0FBQ0FPLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUix1Q0FBMkNSLGdCQUEzQztBQUNELEdBSFEsQ0FBVDtBQUlBLHNCQUNFO0FBQUEsNEJBRUU7QUFBQSxxQ0FBdUJFLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLEVBRStDLEdBRi9DLEVBR0csQ0FBQyxJQUFELEVBQU8sR0FBUCxFQUFZLEdBQVosRUFBaUIsSUFBakIsRUFBdUIsSUFBdkIsRUFBNkJPLEdBQTdCLENBQWlDLFVBQUNDLFNBQUQsRUFBZTtBQUMvQywwQkFDRTtBQUVFLG1CQUFXLEVBQUUsdUJBQU07QUFDakJULFVBQUFBLG1CQUFtQixDQUFDUyxTQUFELENBQW5CO0FBQ0FQLFVBQUFBLGdCQUFnQixDQUFDRCxhQUFhLEdBQUcsQ0FBakIsQ0FBaEI7QUFDQUssVUFBQUEsT0FBTyxDQUFDQyxHQUFSLHVCQUEyQkUsU0FBM0I7QUFDRCxTQU5IO0FBQUEsK0JBT0UsOERBQUMsNkRBQUQ7QUFDRSxvQkFBVSx3Q0FBaUNBLFNBQWpDLFNBRFo7QUFFRSxzQkFBWSxxQ0FBOEJBLFNBQTlCLFNBRmQ7QUFHRSxhQUFHLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEYsU0FDT0EsU0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFlRCxLQWhCQSxDQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBckNEOztHQUFNWDs7S0FBQUE7QUF1Q04sK0RBQWVBLG1CQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0ltYWdlQ2hhbmdlT25TY3JvbGwuanM/ZDg2OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcblNob3cgY29sb3Jpc2luZyB3aGVuIHRoZSBtb3VzZSBlbnRlcnMgYW5kIGxlYXZlcyBlYWNoIGltYWdlIHdpdGggbmV3IGNvZGUgdGhhdCBkaXNwbGF5cyBpbWFnZXMgaW4gYSB2ZXJ0aWNhbCBsaXN0IHNvIHdlaGF2ZSBzb21ldGhpbmcgdG8gc2Nyb2xsLlxuXG5Xcml0aW5nIGEgSlMgZXhwcmVzc2lvbiB3aXRoIHNwZWFrZXIgaWQgYWxsb3dzIHVzIHRvIGR5bmFtaWNhbGx5IHVzZSB0aGUgc3BlYWtlciBpbWFnZXMgd2l0aGluIHRoZSBzcGVha2VycyBmb2xkZXIuIFRoZW4gbWFwcyB3aWxsIGl0ZXJhdGUgb3ZlciB0aGVtLlxuRWFjaCBJRCB0aGVuIGdldHMgaXQncyBvd24gJ0ltYWdlVG9nZ2xlT25TY3JvbGwnIGNvbXBvbmVudCByZW5kZXJlZCBhbmQgYmVjYXVzZSB0aGV5IGFyZSBzZXBhcmF0ZWQgYnkgZGl2cyB0aGV5IHN0YWNrIHZlcnRpY2FsbHkuXG4qL1xuXG4vLyBUbyBhZGQgYSAnbW9zZW92ZXIgZXZlbnQnIHRvIGV2ZXJ5IHNwZWFrZXIgaW1hZ2UgdGhhdCBzZXRzIHRoZSB0aXRsZSBvZiBvdXIgYnJvd3NlciB3aW5kb3cgdG8gdGhlIHNwZWFrZXIgSUQsIG5lZWQgdG8gbWFpbnRhaW4gaW4gc3RhdGUgd2hhdCB0aGVcbi8vIGN1cnJlbnQgbW91c2VvdmVyIHNwZWFrIElEIGlzIHNvIG5lZWQgdG8gY3JlYXRlIHRoYXQgc3RhdGUgLT4gdXNlU3RhdGUgSG9vazpcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2VUb2dnbGVPblNjcm9sbCBmcm9tIFwiLi4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGxcIjtcblxuY29uc3QgSW1hZ2VDaGFuZ2VPblNjcm9sbCA9ICgpID0+IHtcbiAgLyogc3RhdGUgaW5zdGFudCB0byBtYWludGFpbiBpbiBzdGF0ZSB3aGF0IHRoZSBjdXJyZW50IG1vdXNlb3ZlciBzcGVhayBJRCBpcy4gVGhlbiBJIGNhbiBhZGQgYSAnbW9zZW92ZXIgZXZlbnQnIHRvIGV2ZXJ5IHNwZWFrZXIgaW1hZ2UgdGhhdCBzZXRzIHRoZVxuICB0aXRsZSBvZiB0aGUgdXNlcidzIGJyb3dzZXIgd2luZG93IHRvIHRoZSBzcGVha2VyIElELiBJbml0aWFsaXNlIHVzZVN0YXRlIHRvICcwJyAqL1xuICBjb25zdCBbY3VycmVudFNwZWFrZXJJZCwgc2V0Q3VycmVudFNwZWFrZXJJZF0gPSB1c2VTdGF0ZSgwKTtcbiAgLy8gTmVlZCBhIFN0YXRlIHRvIGNyZWF0ZSBhIGNvdW50ZXIgYXQgdG9wIG9mIGFwcCB0aGF0IGRpc3BsYXlzIHRoZSB0b3RhbCBudW1iZXIgb2YgbW91c2UgZXZlbnRzIHRoYXQgaGF2ZSBvY2N1cnJlZCB3aGlsZSB0aGUgYXBwIGlzIHJ1bm5pbmcuXG4gIGNvbnN0IFttb3VzZUV2ZW50Q250LCBzZXRNb3VzZUV2ZW50Q250XSA9IHVzZVN0YXRlKDApO1xuICAvLyBJbiB0aGUgb25Nb3VzZU92ZXIgZXZlbnQsIGluY3JlbWVudCB0aGUgY291bnRlci4gVGhlbiBpbiB0aGUgcmV0dXJuLCBvdXRwdXQgdGhhdCB2YWx1ZSB1c2luZyBzcGFuIGVsZW1lbnQvdGFnLlxuICAvKiBMaXN0ZW4gZm9yIHRoZSBtb3VzZW92ZXIgZXZlbnQuIE1vdXNlb3ZlciBldmVudCBleGVjdXRpb24gLSBjYWxsaW5nICdzZXRDdXJyZW50U3BlYWtlcklkJyB0byB0aGUgY3VycmVudCBzcGVha2VyIHRoYXQgdGhpcyBpbWFnZSBjb21wb25lbnQgcmVuZGVycy5cbiAgQ29uc29sZS5sb2cgdGhhdCBzcGVha2VyIElEIGFzIGNoYW5nZXMgaXMgaW52aXNpYmxlIHRvIHRoZSBVSSBhbmQgSSBuZWVkIGtub3cgd2hhdCBoYXBwZW5zIHdoZW4gSSB0ZXN0IHRoaXMgZXZlbnQgYnkgbW91c2VvdmVyIGFuIGltYWdlLiAqL1xuICAvLyBBc3NpZ24gdGhlIGZuIGluc2lkZSB1c2VFZmZlY3QgSG9vayB0byB3aW5kb3cuZG9jdW1lbnQudGl0bGUgb2YgdGhlIGJyb3dzZXIuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmRvY3VtZW50LnRpdGxlID0gYFNwZWFrZXJJZDogJHtjdXJyZW50U3BlYWtlcklkfWA7XG4gICAgY29uc29sZS5sb2coYHVzZUVmZmVjdDogc2V0dGluZyB0aXRsZSB0byAke2N1cnJlbnRTcGVha2VySWR9YCk7XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7LyogT3V0cHV0IHRoZSBjb3VudGVyIHZhbHVlIHRoYXQgaXMgaW5zaWRlIHRoZSBvbk1vdXNlT3ZlciBhdHRyaWJ1dGUgKi99XG4gICAgICA8c3Bhbj5tb3VzZUV2ZW50Q250OiAke21vdXNlRXZlbnRDbnR9PC9zcGFuPntcIiBcIn1cbiAgICAgIHtbMTEyNCwgMTg3LCA4MjMsIDEyNjksIDE1MzBdLm1hcCgoc3BlYWtlcklkKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtzcGVha2VySWR9XG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRDdXJyZW50U3BlYWtlcklkKHNwZWFrZXJJZCk7XG4gICAgICAgICAgICAgIHNldE1vdXNlRXZlbnRDbnQobW91c2VFdmVudENudCArIDEpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgb25Nb3VzZU92ZXI6JHtzcGVha2VySWR9YCk7XG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsXG4gICAgICAgICAgICAgIHByaW1hcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL2J3L1NwZWFrZXItJHtzcGVha2VySWR9LmpwZ2B9XG4gICAgICAgICAgICAgIHNlY29uZGFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvU3BlYWtlci0ke3NwZWFrZXJJZH0uanBnYH1cbiAgICAgICAgICAgICAgYWx0PScnXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNoYW5nZU9uU2Nyb2xsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZVRvZ2dsZU9uU2Nyb2xsIiwiSW1hZ2VDaGFuZ2VPblNjcm9sbCIsImN1cnJlbnRTcGVha2VySWQiLCJzZXRDdXJyZW50U3BlYWtlcklkIiwibW91c2VFdmVudENudCIsInNldE1vdXNlRXZlbnRDbnQiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInNwZWFrZXJJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ImageChangeOnScroll.js\n");

/***/ })

});