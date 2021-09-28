/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ConfigContext\": function() { return /* binding */ ConfigContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ \"./src/Home.js\");\n/* harmony import */ var _Speakers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Speakers */ \"./src/Speakers.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/vtsang/OneDrive - Capgemini/code/using-react-hooks/03-More-React-Hooks-useContext-useReducer-useCallback-useMemo/clip05-Preparing-React-Context-For-useContext/src/App.js\",\n    _this = undefined;\n\n/* \n\nWhen we created our Speaker and Home pages, we had them both call the App component with a property to differentiate that is pageName=\"Speaker\"\nor pageName=\"Home\". That App component is where we want to create our shared Context for the entire app as all the routes we ever plan to\nmake will share this App component. This allows a single root in our source directory that all our pages can share from. \n\n*/\n\n\n // Create a Context for our entire app and export it so other components can import the Context to use it.\n// Hooks will come in when we consume this context.\n\nvar ConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\n\nvar pageToShow = function pageToShow(pageName) {\n  if (pageName === 'Home') return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 35\n  }, _this);\n  if (pageName === 'Speakers') return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speakers__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 39\n  }, _this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: \"Not Found\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 10\n  }, _this);\n}; // Wrap to show with ConfigContext.Provider that includes our configValue object. This value can be accessed from any component that's below this\n// component app.\n// Pass the attributes value to the provider which can be any JS object.\n// This one is called 'configValue' and added an attribute to it 'showSpeakerSpeakingDays' and set that attribut to ture for now.\n// Assign that to the value attribut of the ConfigContext.Provider.\n// Implement config options in React app.\n\n\nvar configValue = {\n  showSignMeUp: true,\n  showSpeakerSpeakingDays: true\n};\n\nvar App = function App(_ref) {\n  var pageName = _ref.pageName;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConfigContext.Provider, {\n    value: configValue,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: pageToShow(pageName)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0FwcC5qcz9iZTk0Il0sIm5hbWVzIjpbIkNvbmZpZ0NvbnRleHQiLCJSZWFjdCIsInBhZ2VUb1Nob3ciLCJwYWdlTmFtZSIsImNvbmZpZ1ZhbHVlIiwic2hvd1NpZ25NZVVwIiwic2hvd1NwZWFrZXJTcGVha2luZ0RheXMiLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Q0FHQTtBQUNBOztBQUNPLElBQU1BLGFBQWEsZ0JBQUdDLDBEQUFBLEVBQXRCOztBQUVQLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLFFBQUQsRUFBYztBQUMvQixNQUFJQSxRQUFRLEtBQUssTUFBakIsRUFBeUIsb0JBQU8sOERBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ3pCLE1BQUlBLFFBQVEsS0FBSyxVQUFqQixFQUE2QixvQkFBTyw4REFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDN0Isc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBSkQsQyxDQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCQyxjQUFZLEVBQUUsSUFESTtBQUVsQkMseUJBQXVCLEVBQUU7QUFGUCxDQUFwQjs7QUFJQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFrQjtBQUFBLE1BQWZKLFFBQWUsUUFBZkEsUUFBZTtBQUM1QixzQkFDRSw4REFBQyxhQUFELENBQWUsUUFBZjtBQUF3QixTQUFLLEVBQUVDLFdBQS9CO0FBQUEsMkJBQ0U7QUFBQSxnQkFBTUYsVUFBVSxDQUFDQyxRQUFEO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQU5EOztLQUFNSSxHO0FBUU4sK0RBQWVBLEdBQWYiLCJmaWxlIjoiLi9zcmMvQXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG5cbldoZW4gd2UgY3JlYXRlZCBvdXIgU3BlYWtlciBhbmQgSG9tZSBwYWdlcywgd2UgaGFkIHRoZW0gYm90aCBjYWxsIHRoZSBBcHAgY29tcG9uZW50IHdpdGggYSBwcm9wZXJ0eSB0byBkaWZmZXJlbnRpYXRlIHRoYXQgaXMgcGFnZU5hbWU9XCJTcGVha2VyXCJcbm9yIHBhZ2VOYW1lPVwiSG9tZVwiLiBUaGF0IEFwcCBjb21wb25lbnQgaXMgd2hlcmUgd2Ugd2FudCB0byBjcmVhdGUgb3VyIHNoYXJlZCBDb250ZXh0IGZvciB0aGUgZW50aXJlIGFwcCBhcyBhbGwgdGhlIHJvdXRlcyB3ZSBldmVyIHBsYW4gdG9cbm1ha2Ugd2lsbCBzaGFyZSB0aGlzIEFwcCBjb21wb25lbnQuIFRoaXMgYWxsb3dzIGEgc2luZ2xlIHJvb3QgaW4gb3VyIHNvdXJjZSBkaXJlY3RvcnkgdGhhdCBhbGwgb3VyIHBhZ2VzIGNhbiBzaGFyZSBmcm9tLiBcblxuKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XG5pbXBvcnQgU3BlYWtlcnMgZnJvbSAnLi9TcGVha2Vycyc7XG5cbi8vIENyZWF0ZSBhIENvbnRleHQgZm9yIG91ciBlbnRpcmUgYXBwIGFuZCBleHBvcnQgaXQgc28gb3RoZXIgY29tcG9uZW50cyBjYW4gaW1wb3J0IHRoZSBDb250ZXh0IHRvIHVzZSBpdC5cbi8vIEhvb2tzIHdpbGwgY29tZSBpbiB3aGVuIHdlIGNvbnN1bWUgdGhpcyBjb250ZXh0LlxuZXhwb3J0IGNvbnN0IENvbmZpZ0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IHBhZ2VUb1Nob3cgPSAocGFnZU5hbWUpID0+IHtcbiAgaWYgKHBhZ2VOYW1lID09PSAnSG9tZScpIHJldHVybiA8SG9tZSAvPjtcbiAgaWYgKHBhZ2VOYW1lID09PSAnU3BlYWtlcnMnKSByZXR1cm4gPFNwZWFrZXJzIC8+O1xuICByZXR1cm4gPGRpdj5Ob3QgRm91bmQ8L2Rpdj47XG59O1xuLy8gV3JhcCB0byBzaG93IHdpdGggQ29uZmlnQ29udGV4dC5Qcm92aWRlciB0aGF0IGluY2x1ZGVzIG91ciBjb25maWdWYWx1ZSBvYmplY3QuIFRoaXMgdmFsdWUgY2FuIGJlIGFjY2Vzc2VkIGZyb20gYW55IGNvbXBvbmVudCB0aGF0J3MgYmVsb3cgdGhpc1xuLy8gY29tcG9uZW50IGFwcC5cbi8vIFBhc3MgdGhlIGF0dHJpYnV0ZXMgdmFsdWUgdG8gdGhlIHByb3ZpZGVyIHdoaWNoIGNhbiBiZSBhbnkgSlMgb2JqZWN0LlxuLy8gVGhpcyBvbmUgaXMgY2FsbGVkICdjb25maWdWYWx1ZScgYW5kIGFkZGVkIGFuIGF0dHJpYnV0ZSB0byBpdCAnc2hvd1NwZWFrZXJTcGVha2luZ0RheXMnIGFuZCBzZXQgdGhhdCBhdHRyaWJ1dCB0byB0dXJlIGZvciBub3cuXG4vLyBBc3NpZ24gdGhhdCB0byB0aGUgdmFsdWUgYXR0cmlidXQgb2YgdGhlIENvbmZpZ0NvbnRleHQuUHJvdmlkZXIuXG4vLyBJbXBsZW1lbnQgY29uZmlnIG9wdGlvbnMgaW4gUmVhY3QgYXBwLlxuY29uc3QgY29uZmlnVmFsdWUgPSB7XG4gIHNob3dTaWduTWVVcDogdHJ1ZSxcbiAgc2hvd1NwZWFrZXJTcGVha2luZ0RheXM6IHRydWUsXG59O1xuY29uc3QgQXBwID0gKHsgcGFnZU5hbWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb25maWdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb25maWdWYWx1ZX0+XG4gICAgICA8ZGl2PntwYWdlVG9TaG93KHBhZ2VOYW1lKX08L2Rpdj5cbiAgICA8L0NvbmZpZ0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App.js\n");

/***/ })

});