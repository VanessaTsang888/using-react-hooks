"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/ImageChangeOnScroll";
exports.ids = ["pages/ImageChangeOnScroll"];
exports.modules = {

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\n\nvar _jsxFileName = \"/Users/vtsang/OneDrive - Capgemini/code/using-react-hooks/pages/ImageChangeOnScroll.js\";\n\n/* Show colorising when the mouse enters and leaves each image with new code that displays images in a vertical list so wehave something to scroll. \n\nWriting a JS expression with speaker id allows us to dynamically use the speaker images within the speakers folder. Then maps will iterate over them.\nEach ID then gets it's own 'ImageToggleOnScroll' component rendered and because they are separated by divs they stack vertically. */\n// To add a 'moseover event' to every speaker image that sets the title of our browser window to the speaker ID, need to maintain in state what the\n// current mouseover speak ID is so need to create that state -> useState Hook:\n\n\n\nconst ImageChangeOnScroll = () => {\n  /* state instant to maintain in state what the current mouseover speak ID is. Then I can add a 'moseover event' to every speaker image that sets the\n  title of the user's browser window to the speaker ID. Initialise useState to '0' */\n  const {\n    0: currentSpeakerId,\n    1: setCurrentSpeakerId\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // Need a State to create a counter at top of app that displays the total number of mouse events that have occurred while the app is running.\n\n  const {\n    0: mouseEventCnt,\n    1: setMouseEventCnt\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // In the onMouseOver event, increment the counter. Then in the return, output that value using span element/tag.\n\n  /* Listen for the mouseover event. Mouseover event execution - calling 'setCurrentSpeakerId' to the current speaker that this image component renders.\n  Console.log that speaker ID as changes is invisible to the UI and I need know what happens when I test this event by mouseover an image. */\n  // Assign the fn inside useEffect Hook to window.document.title of the browser.\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    window.document.title = `SpeakerId: ${currentSpeakerId}`;\n    console.log(`useEffect: setting title to ${currentSpeakerId}`);\n  }, [currentSpeakerId]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: [\"mouseEventCnt: \", mouseEventCnt]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, undefined), [1124, 187, 823, 1269, 1530].map(speakerId => {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onMouseOver: () => {\n          setCurrentSpeakerId(speakerId);\n          setMouseEventCnt(mouseEventCnt + 1);\n          console.log(`onMouseOver:${speakerId}`);\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__.default, {\n          primaryImg: `/static/speakers/bw/Speaker-${speakerId}.jpg`,\n          secondaryImg: `/static/speakers/Speaker-${speakerId}.jpg`,\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 13\n        }, undefined)\n      }, speakerId, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, undefined);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageChangeOnScroll);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbWFnZUNoYW5nZU9uU2Nyb2xsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUksbUJBQW1CLEdBQUcsTUFBTTtBQUNoQztBQUNGO0FBQ0UsUUFBTTtBQUFBLE9BQUNDLGdCQUFEO0FBQUEsT0FBbUJDO0FBQW5CLE1BQTBDTCwrQ0FBUSxDQUFDLENBQUQsQ0FBeEQsQ0FIZ0MsQ0FJaEM7O0FBQ0EsUUFBTTtBQUFBLE9BQUNNLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NQLCtDQUFRLENBQUMsQ0FBRCxDQUFsRCxDQUxnQyxDQU1oQzs7QUFDQTtBQUNGO0FBQ0U7O0FBQ0FDLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkTyxJQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLEtBQWhCLEdBQXlCLGNBQWFOLGdCQUFpQixFQUF2RDtBQUNBTyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSwrQkFBOEJSLGdCQUFpQixFQUE1RDtBQUNELEdBSFEsRUFHTixDQUFDQSxnQkFBRCxDQUhNLENBQVQ7QUFJQSxzQkFDRTtBQUFBLDRCQUVFO0FBQUEsb0NBQXNCRSxhQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsRUFHRyxDQUFDLElBQUQsRUFBTyxHQUFQLEVBQVksR0FBWixFQUFpQixJQUFqQixFQUF1QixJQUF2QixFQUE2Qk8sR0FBN0IsQ0FBa0NDLFNBQUQsSUFBZTtBQUMvQywwQkFDRTtBQUVFLG1CQUFXLEVBQUUsTUFBTTtBQUNqQlQsVUFBQUEsbUJBQW1CLENBQUNTLFNBQUQsQ0FBbkI7QUFDQVAsVUFBQUEsZ0JBQWdCLENBQUNELGFBQWEsR0FBRyxDQUFqQixDQUFoQjtBQUNBSyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxlQUFjRSxTQUFVLEVBQXJDO0FBQ0QsU0FOSDtBQUFBLCtCQU9FLDhEQUFDLDZEQUFEO0FBQ0Usb0JBQVUsRUFBRywrQkFBOEJBLFNBQVUsTUFEdkQ7QUFFRSxzQkFBWSxFQUFHLDRCQUEyQkEsU0FBVSxNQUZ0RDtBQUdFLGFBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRixTQUNPQSxTQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFlRCxLQWhCQSxDQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBdUJELENBckNEOztBQXVDQSxpRUFBZVgsbUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNpYy1yZWFjdC1ob29rcy8uL3BhZ2VzL0ltYWdlQ2hhbmdlT25TY3JvbGwuanM/ZDg2OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTaG93IGNvbG9yaXNpbmcgd2hlbiB0aGUgbW91c2UgZW50ZXJzIGFuZCBsZWF2ZXMgZWFjaCBpbWFnZSB3aXRoIG5ldyBjb2RlIHRoYXQgZGlzcGxheXMgaW1hZ2VzIGluIGEgdmVydGljYWwgbGlzdCBzbyB3ZWhhdmUgc29tZXRoaW5nIHRvIHNjcm9sbC4gXG5cbldyaXRpbmcgYSBKUyBleHByZXNzaW9uIHdpdGggc3BlYWtlciBpZCBhbGxvd3MgdXMgdG8gZHluYW1pY2FsbHkgdXNlIHRoZSBzcGVha2VyIGltYWdlcyB3aXRoaW4gdGhlIHNwZWFrZXJzIGZvbGRlci4gVGhlbiBtYXBzIHdpbGwgaXRlcmF0ZSBvdmVyIHRoZW0uXG5FYWNoIElEIHRoZW4gZ2V0cyBpdCdzIG93biAnSW1hZ2VUb2dnbGVPblNjcm9sbCcgY29tcG9uZW50IHJlbmRlcmVkIGFuZCBiZWNhdXNlIHRoZXkgYXJlIHNlcGFyYXRlZCBieSBkaXZzIHRoZXkgc3RhY2sgdmVydGljYWxseS4gKi9cblxuLy8gVG8gYWRkIGEgJ21vc2VvdmVyIGV2ZW50JyB0byBldmVyeSBzcGVha2VyIGltYWdlIHRoYXQgc2V0cyB0aGUgdGl0bGUgb2Ygb3VyIGJyb3dzZXIgd2luZG93IHRvIHRoZSBzcGVha2VyIElELCBuZWVkIHRvIG1haW50YWluIGluIHN0YXRlIHdoYXQgdGhlXG4vLyBjdXJyZW50IG1vdXNlb3ZlciBzcGVhayBJRCBpcyBzbyBuZWVkIHRvIGNyZWF0ZSB0aGF0IHN0YXRlIC0+IHVzZVN0YXRlIEhvb2s6XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlVG9nZ2xlT25TY3JvbGwgZnJvbSBcIi4uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsXCI7XG5cbmNvbnN0IEltYWdlQ2hhbmdlT25TY3JvbGwgPSAoKSA9PiB7XG4gIC8qIHN0YXRlIGluc3RhbnQgdG8gbWFpbnRhaW4gaW4gc3RhdGUgd2hhdCB0aGUgY3VycmVudCBtb3VzZW92ZXIgc3BlYWsgSUQgaXMuIFRoZW4gSSBjYW4gYWRkIGEgJ21vc2VvdmVyIGV2ZW50JyB0byBldmVyeSBzcGVha2VyIGltYWdlIHRoYXQgc2V0cyB0aGVcbiAgdGl0bGUgb2YgdGhlIHVzZXIncyBicm93c2VyIHdpbmRvdyB0byB0aGUgc3BlYWtlciBJRC4gSW5pdGlhbGlzZSB1c2VTdGF0ZSB0byAnMCcgKi9cbiAgY29uc3QgW2N1cnJlbnRTcGVha2VySWQsIHNldEN1cnJlbnRTcGVha2VySWRdID0gdXNlU3RhdGUoMCk7XG4gIC8vIE5lZWQgYSBTdGF0ZSB0byBjcmVhdGUgYSBjb3VudGVyIGF0IHRvcCBvZiBhcHAgdGhhdCBkaXNwbGF5cyB0aGUgdG90YWwgbnVtYmVyIG9mIG1vdXNlIGV2ZW50cyB0aGF0IGhhdmUgb2NjdXJyZWQgd2hpbGUgdGhlIGFwcCBpcyBydW5uaW5nLlxuICBjb25zdCBbbW91c2VFdmVudENudCwgc2V0TW91c2VFdmVudENudF0gPSB1c2VTdGF0ZSgwKTtcbiAgLy8gSW4gdGhlIG9uTW91c2VPdmVyIGV2ZW50LCBpbmNyZW1lbnQgdGhlIGNvdW50ZXIuIFRoZW4gaW4gdGhlIHJldHVybiwgb3V0cHV0IHRoYXQgdmFsdWUgdXNpbmcgc3BhbiBlbGVtZW50L3RhZy5cbiAgLyogTGlzdGVuIGZvciB0aGUgbW91c2VvdmVyIGV2ZW50LiBNb3VzZW92ZXIgZXZlbnQgZXhlY3V0aW9uIC0gY2FsbGluZyAnc2V0Q3VycmVudFNwZWFrZXJJZCcgdG8gdGhlIGN1cnJlbnQgc3BlYWtlciB0aGF0IHRoaXMgaW1hZ2UgY29tcG9uZW50IHJlbmRlcnMuXG4gIENvbnNvbGUubG9nIHRoYXQgc3BlYWtlciBJRCBhcyBjaGFuZ2VzIGlzIGludmlzaWJsZSB0byB0aGUgVUkgYW5kIEkgbmVlZCBrbm93IHdoYXQgaGFwcGVucyB3aGVuIEkgdGVzdCB0aGlzIGV2ZW50IGJ5IG1vdXNlb3ZlciBhbiBpbWFnZS4gKi9cbiAgLy8gQXNzaWduIHRoZSBmbiBpbnNpZGUgdXNlRWZmZWN0IEhvb2sgdG8gd2luZG93LmRvY3VtZW50LnRpdGxlIG9mIHRoZSBicm93c2VyLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5kb2N1bWVudC50aXRsZSA9IGBTcGVha2VySWQ6ICR7Y3VycmVudFNwZWFrZXJJZH1gO1xuICAgIGNvbnNvbGUubG9nKGB1c2VFZmZlY3Q6IHNldHRpbmcgdGl0bGUgdG8gJHtjdXJyZW50U3BlYWtlcklkfWApO1xuICB9LCBbY3VycmVudFNwZWFrZXJJZF0pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7LyogT3V0cHV0IHRoZSBjb3VudGVyIHZhbHVlIHRoYXQgaXMgaW5zaWRlIHRoZSBvbk1vdXNlT3ZlciBhdHRyaWJ1dGUgKi99XG4gICAgICA8c3Bhbj5tb3VzZUV2ZW50Q250OiB7bW91c2VFdmVudENudH08L3NwYW4+XG4gICAgICB7WzExMjQsIDE4NywgODIzLCAxMjY5LCAxNTMwXS5tYXAoKHNwZWFrZXJJZCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17c3BlYWtlcklkfVxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0Q3VycmVudFNwZWFrZXJJZChzcGVha2VySWQpO1xuICAgICAgICAgICAgICBzZXRNb3VzZUV2ZW50Q250KG1vdXNlRXZlbnRDbnQgKyAxKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYG9uTW91c2VPdmVyOiR7c3BlYWtlcklkfWApO1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbFxuICAgICAgICAgICAgICBwcmltYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9idy9TcGVha2VyLSR7c3BlYWtlcklkfS5qcGdgfVxuICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL1NwZWFrZXItJHtzcGVha2VySWR9LmpwZ2B9XG4gICAgICAgICAgICAgIGFsdD0nJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDaGFuZ2VPblNjcm9sbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2VUb2dnbGVPblNjcm9sbCIsIkltYWdlQ2hhbmdlT25TY3JvbGwiLCJjdXJyZW50U3BlYWtlcklkIiwic2V0Q3VycmVudFNwZWFrZXJJZCIsIm1vdXNlRXZlbnRDbnQiLCJzZXRNb3VzZUV2ZW50Q250Iiwid2luZG93IiwiZG9jdW1lbnQiLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJzcGVha2VySWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ImageChangeOnScroll.js\n");

/***/ }),

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/vtsang/OneDrive - Capgemini/code/using-react-hooks/src/ImageToggleOnScroll.js\";\n\n/* \n\nColourising on Scroll based on if the photos is in full view of the browser and allow for scrolling to trigger the calculation to determin that.\nThe first parameter in this hook is a function that gets exectuted when the component mounts, which we have to remove before the component unmounts,\nso the return function inside this arrow function removes the listener.\nThe second parameter within useEffect function is an array that contains dependancies. Since don't need to add and remove the scroll listeners on every\ncomponent updates, can use an empty array which tells useEffect to only run when the component is first rendered.\nTrack if image is completely in the broswer showing window. By default let's say we have a large list of images and they are not inview.\nSo we use 'false' for the initial setting.\nReference the useEffect and useState Hooks in the import statement.\nWe use the: ref attribute (ref={}) to figure out where on page the image is.\nCode the scroll handler to set the inView state based on whether the image is actually in view. Each time the page scrolls, this is calculated again.\n\nSet the src attribute of image to sow a color image when this when this image component is in view and a black and white image one when it is not.\nPrimary image = b&w, secondary image is color.\n\nImproving & Fixing Our Scrolling Colourising issues: The pages loaded all images showed as b&w instead of the ones fully in view in colour and rest in b&w.\nOnce we scrolled down the page, everything was good, but not the initial display.\nAfter we setup imageRef and setup useEffect call, we create the inView state using useState and set the default value to false, which means the image is\nnot in view and the images should display in b&w. After the image renders the first time, we never check to see if it's in view. To fix this, within useEffect\na call to the state setter 'setInView', that calls 'isInView' when the component first mounts. \nuseEffect gets called after the DOM is fully constructed and the component is rendered, set isLoading to false. This state change will allow React to react and do\nanother render but this time with isLoading set to false.\n\n*/\n\n\nconst ImageToggleOnScroll = ({\n  primaryImg,\n  secondaryImg\n}) => {\n  const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  /* Add state: isLoading as useEffect fn runs after the first render is completed, and in this component we set the default image to b&w.\n  To fix this, need to show the image when component first runs as the DOM has not been constructed and we don't know yet whether this image will\n  be in view or not. */\n\n  const {\n    0: isLoading,\n    1: setIsLoading\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n  /* Two line function isInView that returns whether the image is showing in the scrollable area or not. getBoundingClientREact combined with the size of the\n  image retangle works for us. */\n\n  const isInView = () => {\n    const rect = imageRef.current.getBoundingClientRect();\n    return rect.top >= 0 && rect.bottom <= window.innerHeight;\n  };\n  /* track if image is completely in the broswer showing window. By default let's say we have a large list of images and they are not inview.\n  So we use 'false' for the initial setting. */\n\n\n  const {\n    0: inView,\n    1: setInView\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Add 'scroll event listener' by adding the useEffect Hook when the component first mounts.\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    // Set 'isLoading' to false. This state change will allow React to react and do another render but this time with 'isLoading' set to false:\n    setIsLoading(false); // On initial page render, set the images in view to the colour images:\n\n    setInView(isInView());\n    window.addEventListener(\"scroll\", scrollHandler); // the return function inside this arrow function removes the listener:\n\n    return () => {\n      window.removeEventListener(\"scroll\", scrollHandler);\n    };\n  }, []); // Scroll handler to set the inView state based on whether the image is actually in view. Each time the page scrolls, this is calculated again.\n\n  const scrollHandler = () => {\n    setInView(isInView());\n  };\n  /* Check in the img element source tag for 'isLoading'. Ternary expression that overrides displaying the secondary and primary images with a transpartent\n  GIF if 'isLoading' is true */\n\n  /* Set the src attribute of image to sow a color image when this when this image component is in view and a black and white image one when it is not.\n  Primary image = b&w, secondary image is color. */\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n    src: isLoading ? \"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\" : inView ? secondaryImg : primaryImg,\n    alt: \"\",\n    ref: imageRef\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageToggleOnScroll);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUksbUJBQW1CLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxVQUFGO0FBQWNDLEVBQUFBO0FBQWQsQ0FBRCxLQUFrQztBQUM1RCxRQUFNQyxRQUFRLEdBQUdMLDZDQUFNLENBQUMsSUFBRCxDQUF2QjtBQUNBO0FBQ0Y7QUFDQTs7QUFDRSxRQUFNO0FBQUEsT0FBQ00sU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJOLCtDQUFRLENBQUMsSUFBRCxDQUExQztBQUVBO0FBQ0Y7O0FBQ0UsUUFBTU8sUUFBUSxHQUFHLE1BQU07QUFDckIsVUFBTUMsSUFBSSxHQUFHSixRQUFRLENBQUNLLE9BQVQsQ0FBaUJDLHFCQUFqQixFQUFiO0FBQ0EsV0FBT0YsSUFBSSxDQUFDRyxHQUFMLElBQVksQ0FBWixJQUFpQkgsSUFBSSxDQUFDSSxNQUFMLElBQWVDLE1BQU0sQ0FBQ0MsV0FBOUM7QUFDRCxHQUhEO0FBS0E7QUFDRjs7O0FBQ0UsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCaEIsK0NBQVEsQ0FBQyxLQUFELENBQXBDLENBaEI0RCxDQWtCNUQ7O0FBQ0FGLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkO0FBQ0FRLElBQUFBLFlBQVksQ0FBQyxLQUFELENBQVosQ0FGYyxDQUdkOztBQUNBVSxJQUFBQSxTQUFTLENBQUNULFFBQVEsRUFBVCxDQUFUO0FBQ0FNLElBQUFBLE1BQU0sQ0FBQ0ksZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLGFBQWxDLEVBTGMsQ0FNZDs7QUFDQSxXQUFPLE1BQU07QUFDWEwsTUFBQUEsTUFBTSxDQUFDTSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0QsYUFBckM7QUFDRCxLQUZEO0FBR0QsR0FWUSxFQVVOLEVBVk0sQ0FBVCxDQW5CNEQsQ0ErQjVEOztBQUNBLFFBQU1BLGFBQWEsR0FBRyxNQUFNO0FBQzFCRixJQUFBQSxTQUFTLENBQUNULFFBQVEsRUFBVCxDQUFUO0FBQ0QsR0FGRDtBQUlBO0FBQ0Y7O0FBQ0U7QUFDRjs7O0FBQ0Usc0JBQ0U7QUFDRSxPQUFHLEVBQ0RGLFNBQVMsR0FDTCxvRkFESyxHQUVMVSxNQUFNLEdBQ05aLFlBRE0sR0FFTkQsVUFOUjtBQVFFLE9BQUcsRUFBQyxFQVJOO0FBU0UsT0FBRyxFQUFFRTtBQVRQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWFELENBckREOztBQXVEQSxpRUFBZUgsbUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNpYy1yZWFjdC1ob29rcy8uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsLmpzPzk2NjIiXSwic291cmNlc0NvbnRlbnQiOlsiLyogXG5cbkNvbG91cmlzaW5nIG9uIFNjcm9sbCBiYXNlZCBvbiBpZiB0aGUgcGhvdG9zIGlzIGluIGZ1bGwgdmlldyBvZiB0aGUgYnJvd3NlciBhbmQgYWxsb3cgZm9yIHNjcm9sbGluZyB0byB0cmlnZ2VyIHRoZSBjYWxjdWxhdGlvbiB0byBkZXRlcm1pbiB0aGF0LlxuVGhlIGZpcnN0IHBhcmFtZXRlciBpbiB0aGlzIGhvb2sgaXMgYSBmdW5jdGlvbiB0aGF0IGdldHMgZXhlY3R1dGVkIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHMsIHdoaWNoIHdlIGhhdmUgdG8gcmVtb3ZlIGJlZm9yZSB0aGUgY29tcG9uZW50IHVubW91bnRzLFxuc28gdGhlIHJldHVybiBmdW5jdGlvbiBpbnNpZGUgdGhpcyBhcnJvdyBmdW5jdGlvbiByZW1vdmVzIHRoZSBsaXN0ZW5lci5cblRoZSBzZWNvbmQgcGFyYW1ldGVyIHdpdGhpbiB1c2VFZmZlY3QgZnVuY3Rpb24gaXMgYW4gYXJyYXkgdGhhdCBjb250YWlucyBkZXBlbmRhbmNpZXMuIFNpbmNlIGRvbid0IG5lZWQgdG8gYWRkIGFuZCByZW1vdmUgdGhlIHNjcm9sbCBsaXN0ZW5lcnMgb24gZXZlcnlcbmNvbXBvbmVudCB1cGRhdGVzLCBjYW4gdXNlIGFuIGVtcHR5IGFycmF5IHdoaWNoIHRlbGxzIHVzZUVmZmVjdCB0byBvbmx5IHJ1biB3aGVuIHRoZSBjb21wb25lbnQgaXMgZmlyc3QgcmVuZGVyZWQuXG5UcmFjayBpZiBpbWFnZSBpcyBjb21wbGV0ZWx5IGluIHRoZSBicm9zd2VyIHNob3dpbmcgd2luZG93LiBCeSBkZWZhdWx0IGxldCdzIHNheSB3ZSBoYXZlIGEgbGFyZ2UgbGlzdCBvZiBpbWFnZXMgYW5kIHRoZXkgYXJlIG5vdCBpbnZpZXcuXG5TbyB3ZSB1c2UgJ2ZhbHNlJyBmb3IgdGhlIGluaXRpYWwgc2V0dGluZy5cblJlZmVyZW5jZSB0aGUgdXNlRWZmZWN0IGFuZCB1c2VTdGF0ZSBIb29rcyBpbiB0aGUgaW1wb3J0IHN0YXRlbWVudC5cbldlIHVzZSB0aGU6IHJlZiBhdHRyaWJ1dGUgKHJlZj17fSkgdG8gZmlndXJlIG91dCB3aGVyZSBvbiBwYWdlIHRoZSBpbWFnZSBpcy5cbkNvZGUgdGhlIHNjcm9sbCBoYW5kbGVyIHRvIHNldCB0aGUgaW5WaWV3IHN0YXRlIGJhc2VkIG9uIHdoZXRoZXIgdGhlIGltYWdlIGlzIGFjdHVhbGx5IGluIHZpZXcuIEVhY2ggdGltZSB0aGUgcGFnZSBzY3JvbGxzLCB0aGlzIGlzIGNhbGN1bGF0ZWQgYWdhaW4uXG5cblNldCB0aGUgc3JjIGF0dHJpYnV0ZSBvZiBpbWFnZSB0byBzb3cgYSBjb2xvciBpbWFnZSB3aGVuIHRoaXMgd2hlbiB0aGlzIGltYWdlIGNvbXBvbmVudCBpcyBpbiB2aWV3IGFuZCBhIGJsYWNrIGFuZCB3aGl0ZSBpbWFnZSBvbmUgd2hlbiBpdCBpcyBub3QuXG5QcmltYXJ5IGltYWdlID0gYiZ3LCBzZWNvbmRhcnkgaW1hZ2UgaXMgY29sb3IuXG5cbkltcHJvdmluZyAmIEZpeGluZyBPdXIgU2Nyb2xsaW5nIENvbG91cmlzaW5nIGlzc3VlczogVGhlIHBhZ2VzIGxvYWRlZCBhbGwgaW1hZ2VzIHNob3dlZCBhcyBiJncgaW5zdGVhZCBvZiB0aGUgb25lcyBmdWxseSBpbiB2aWV3IGluIGNvbG91ciBhbmQgcmVzdCBpbiBiJncuXG5PbmNlIHdlIHNjcm9sbGVkIGRvd24gdGhlIHBhZ2UsIGV2ZXJ5dGhpbmcgd2FzIGdvb2QsIGJ1dCBub3QgdGhlIGluaXRpYWwgZGlzcGxheS5cbkFmdGVyIHdlIHNldHVwIGltYWdlUmVmIGFuZCBzZXR1cCB1c2VFZmZlY3QgY2FsbCwgd2UgY3JlYXRlIHRoZSBpblZpZXcgc3RhdGUgdXNpbmcgdXNlU3RhdGUgYW5kIHNldCB0aGUgZGVmYXVsdCB2YWx1ZSB0byBmYWxzZSwgd2hpY2ggbWVhbnMgdGhlIGltYWdlIGlzXG5ub3QgaW4gdmlldyBhbmQgdGhlIGltYWdlcyBzaG91bGQgZGlzcGxheSBpbiBiJncuIEFmdGVyIHRoZSBpbWFnZSByZW5kZXJzIHRoZSBmaXJzdCB0aW1lLCB3ZSBuZXZlciBjaGVjayB0byBzZWUgaWYgaXQncyBpbiB2aWV3LiBUbyBmaXggdGhpcywgd2l0aGluIHVzZUVmZmVjdFxuYSBjYWxsIHRvIHRoZSBzdGF0ZSBzZXR0ZXIgJ3NldEluVmlldycsIHRoYXQgY2FsbHMgJ2lzSW5WaWV3JyB3aGVuIHRoZSBjb21wb25lbnQgZmlyc3QgbW91bnRzLiBcbnVzZUVmZmVjdCBnZXRzIGNhbGxlZCBhZnRlciB0aGUgRE9NIGlzIGZ1bGx5IGNvbnN0cnVjdGVkIGFuZCB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmVkLCBzZXQgaXNMb2FkaW5nIHRvIGZhbHNlLiBUaGlzIHN0YXRlIGNoYW5nZSB3aWxsIGFsbG93IFJlYWN0IHRvIHJlYWN0IGFuZCBkb1xuYW5vdGhlciByZW5kZXIgYnV0IHRoaXMgdGltZSB3aXRoIGlzTG9hZGluZyBzZXQgdG8gZmFsc2UuXG5cbiovXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSW1hZ2VUb2dnbGVPblNjcm9sbCA9ICh7IHByaW1hcnlJbWcsIHNlY29uZGFyeUltZyB9KSA9PiB7XG4gIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKG51bGwpO1xuICAvKiBBZGQgc3RhdGU6IGlzTG9hZGluZyBhcyB1c2VFZmZlY3QgZm4gcnVucyBhZnRlciB0aGUgZmlyc3QgcmVuZGVyIGlzIGNvbXBsZXRlZCwgYW5kIGluIHRoaXMgY29tcG9uZW50IHdlIHNldCB0aGUgZGVmYXVsdCBpbWFnZSB0byBiJncuXG4gIFRvIGZpeCB0aGlzLCBuZWVkIHRvIHNob3cgdGhlIGltYWdlIHdoZW4gY29tcG9uZW50IGZpcnN0IHJ1bnMgYXMgdGhlIERPTSBoYXMgbm90IGJlZW4gY29uc3RydWN0ZWQgYW5kIHdlIGRvbid0IGtub3cgeWV0IHdoZXRoZXIgdGhpcyBpbWFnZSB3aWxsXG4gIGJlIGluIHZpZXcgb3Igbm90LiAqL1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgLyogVHdvIGxpbmUgZnVuY3Rpb24gaXNJblZpZXcgdGhhdCByZXR1cm5zIHdoZXRoZXIgdGhlIGltYWdlIGlzIHNob3dpbmcgaW4gdGhlIHNjcm9sbGFibGUgYXJlYSBvciBub3QuIGdldEJvdW5kaW5nQ2xpZW50UkVhY3QgY29tYmluZWQgd2l0aCB0aGUgc2l6ZSBvZiB0aGVcbiAgaW1hZ2UgcmV0YW5nbGUgd29ya3MgZm9yIHVzLiAqL1xuICBjb25zdCBpc0luVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH07XG5cbiAgLyogdHJhY2sgaWYgaW1hZ2UgaXMgY29tcGxldGVseSBpbiB0aGUgYnJvc3dlciBzaG93aW5nIHdpbmRvdy4gQnkgZGVmYXVsdCBsZXQncyBzYXkgd2UgaGF2ZSBhIGxhcmdlIGxpc3Qgb2YgaW1hZ2VzIGFuZCB0aGV5IGFyZSBub3QgaW52aWV3LlxuICBTbyB3ZSB1c2UgJ2ZhbHNlJyBmb3IgdGhlIGluaXRpYWwgc2V0dGluZy4gKi9cbiAgY29uc3QgW2luVmlldywgc2V0SW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBBZGQgJ3Njcm9sbCBldmVudCBsaXN0ZW5lcicgYnkgYWRkaW5nIHRoZSB1c2VFZmZlY3QgSG9vayB3aGVuIHRoZSBjb21wb25lbnQgZmlyc3QgbW91bnRzLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFNldCAnaXNMb2FkaW5nJyB0byBmYWxzZS4gVGhpcyBzdGF0ZSBjaGFuZ2Ugd2lsbCBhbGxvdyBSZWFjdCB0byByZWFjdCBhbmQgZG8gYW5vdGhlciByZW5kZXIgYnV0IHRoaXMgdGltZSB3aXRoICdpc0xvYWRpbmcnIHNldCB0byBmYWxzZTpcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIC8vIE9uIGluaXRpYWwgcGFnZSByZW5kZXIsIHNldCB0aGUgaW1hZ2VzIGluIHZpZXcgdG8gdGhlIGNvbG91ciBpbWFnZXM6XG4gICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpO1xuICAgIC8vIHRoZSByZXR1cm4gZnVuY3Rpb24gaW5zaWRlIHRoaXMgYXJyb3cgZnVuY3Rpb24gcmVtb3ZlcyB0aGUgbGlzdGVuZXI6XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICAvLyBTY3JvbGwgaGFuZGxlciB0byBzZXQgdGhlIGluVmlldyBzdGF0ZSBiYXNlZCBvbiB3aGV0aGVyIHRoZSBpbWFnZSBpcyBhY3R1YWxseSBpbiB2aWV3LiBFYWNoIHRpbWUgdGhlIHBhZ2Ugc2Nyb2xscywgdGhpcyBpcyBjYWxjdWxhdGVkIGFnYWluLlxuICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldEluVmlldyhpc0luVmlldygpKTtcbiAgfTtcblxuICAvKiBDaGVjayBpbiB0aGUgaW1nIGVsZW1lbnQgc291cmNlIHRhZyBmb3IgJ2lzTG9hZGluZycuIFRlcm5hcnkgZXhwcmVzc2lvbiB0aGF0IG92ZXJyaWRlcyBkaXNwbGF5aW5nIHRoZSBzZWNvbmRhcnkgYW5kIHByaW1hcnkgaW1hZ2VzIHdpdGggYSB0cmFuc3BhcnRlbnRcbiAgR0lGIGlmICdpc0xvYWRpbmcnIGlzIHRydWUgKi9cbiAgLyogU2V0IHRoZSBzcmMgYXR0cmlidXRlIG9mIGltYWdlIHRvIHNvdyBhIGNvbG9yIGltYWdlIHdoZW4gdGhpcyB3aGVuIHRoaXMgaW1hZ2UgY29tcG9uZW50IGlzIGluIHZpZXcgYW5kIGEgYmxhY2sgYW5kIHdoaXRlIGltYWdlIG9uZSB3aGVuIGl0IGlzIG5vdC5cbiAgUHJpbWFyeSBpbWFnZSA9IGImdywgc2Vjb25kYXJ5IGltYWdlIGlzIGNvbG9yLiAqL1xuICByZXR1cm4gKFxuICAgIDxpbWdcbiAgICAgIHNyYz17XG4gICAgICAgIGlzTG9hZGluZ1xuICAgICAgICAgID8gXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFQLy8vd0FBQUNINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQ1JBRUFPdz09XCJcbiAgICAgICAgICA6IGluVmlld1xuICAgICAgICAgID8gc2Vjb25kYXJ5SW1nXG4gICAgICAgICAgOiBwcmltYXJ5SW1nXG4gICAgICB9XG4gICAgICBhbHQ9JydcbiAgICAgIHJlZj17aW1hZ2VSZWZ9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlVG9nZ2xlT25TY3JvbGw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiaW1hZ2VSZWYiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0luVmlldyIsInJlY3QiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJpblZpZXciLCJzZXRJblZpZXciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ImageToggleOnScroll.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/ImageChangeOnScroll.js"));
module.exports = __webpack_exports__;

})();