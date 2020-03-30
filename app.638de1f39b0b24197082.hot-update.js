webpackHotUpdate("app",{

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _rootReducer = __webpack_require__(/*! ../reducers/rootReducer.js */ "./src/reducers/rootReducer.js");

var _rootReducer2 = _interopRequireDefault(_rootReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gallery = [{
	previewSrc: "https://live.staticflickr.com/65535/48511156301_be8169d7f0_b.jpg",
	name: "Ray tracing 1",
	imgs: ["http://2008.sub.blue/assets/0000/3045/Glynn2_preview.jpg", "https://live.staticflickr.com/65535/48511156301_be8169d7f0_b.jpg"],
	description: 'this is a description' }, {
	previewSrc: "http://2008.sub.blue/assets/0000/3045/Glynn2_preview.jpg",
	name: "Ray tracing 2",
	imgs: ["http://2008.sub.blue/assets/0000/3045/Glynn2_preview.jpg", "https://live.staticflickr.com/65535/48511156301_be8169d7f0_b.jpg"],
	description: 'this is a description' }, {
	previewSrc: "https://live.staticflickr.com/65535/48511156301_be8169d7f0_b.jpg",
	name: "Ray tracing 3",
	imgs: ["http://2008.sub.blue/assets/0000/3045/Glynn2_preview.jpg", "https://live.staticflickr.com/65535/48511156301_be8169d7f0_b.jpg"],
	description: 'this is a description' }];

var initialState = function () {
	var state = {};
	state.gallery = gallery;
	var links = [{ link: '',
		description: 'Link to some great site whatever fuck this shit gay earth im out ok fine nvm brb asap fubar afk' }];
	state.links = links;
	var about = [];
	state.about = about;
	return state;
}();

var store = (0, _redux.createStore)(_rootReducer2.default, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

exports.default = store;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc3RvcmUuanMiXSwibmFtZXMiOlsiZ2FsbGVyeSIsInByZXZpZXdTcmMiLCJuYW1lIiwiaW1ncyIsImRlc2NyaXB0aW9uIiwiaW5pdGlhbFN0YXRlIiwic3RhdGUiLCJsaW5rcyIsImxpbmsiLCJhYm91dCIsInN0b3JlIiwicm9vdFJlZHVjZXIiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUdBLElBQUlBLFVBQVEsQ0FDWDtBQUNDQyxhQUFXLGtFQURaO0FBRUNDLE9BQUssZUFGTjtBQUdDQyxPQUFLLENBQ0osMERBREksRUFFSixrRUFGSSxDQUhOO0FBT0NDLGNBQVksdUJBUGIsRUFEVyxFQVNYO0FBQ0NILGFBQVcsMERBRFo7QUFFQ0MsT0FBSyxlQUZOO0FBR0NDLE9BQUssQ0FDSiwwREFESSxFQUVKLGtFQUZJLENBSE47QUFPQ0MsY0FBWSx1QkFQYixFQVRXLEVBaUJYO0FBQ0NILGFBQVcsa0VBRFo7QUFFQ0MsT0FBSyxlQUZOO0FBR0NDLE9BQUssQ0FDSiwwREFESSxFQUVKLGtFQUZJLENBSE47QUFPQ0MsY0FBWSx1QkFQYixFQWpCVyxDQUFaOztBQTJCQSxJQUFNQyxlQUFjLFlBQVU7QUFDNUIsS0FBSUMsUUFBTSxFQUFWO0FBQ0FBLE9BQU1OLE9BQU4sR0FBY0EsT0FBZDtBQUNBLEtBQUlPLFFBQU0sQ0FBQyxFQUFDQyxNQUFLLEVBQU47QUFDWEosZUFBWSxpR0FERCxFQUFELENBQVY7QUFFQUUsT0FBTUMsS0FBTixHQUFZQSxLQUFaO0FBQ0EsS0FBSUUsUUFBTSxFQUFWO0FBQ0FILE9BQU1HLEtBQU4sR0FBWUEsS0FBWjtBQUNBLFFBQU9ILEtBQVA7QUFDRCxDQVRrQixFQUFuQjs7QUFZQSxJQUFNSSxRQUFRLHdCQUFZQyxxQkFBWixFQUF3Qk4sWUFBeEIsRUFDWk8sT0FBT0MsNEJBQVAsSUFBdUNELE9BQU9DLDRCQUFQLEVBRDNCLENBQWQ7O2tCQUllSCxLIiwiZmlsZSI6ImFwcC42MzhkZTFmMzliMGIyNDE5NzA4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjsgXHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnMvcm9vdFJlZHVjZXIuanNcIjtcclxuXHJcblxyXG5sZXQgZ2FsbGVyeT1bXHJcblx0e1xyXG5cdFx0cHJldmlld1NyYzpcImh0dHBzOi8vbGl2ZS5zdGF0aWNmbGlja3IuY29tLzY1NTM1LzQ4NTExMTU2MzAxX2JlODE2OWQ3ZjBfYi5qcGdcIixcclxuXHRcdG5hbWU6XCJSYXkgdHJhY2luZyAxXCIsXHJcblx0XHRpbWdzOltcclxuXHRcdFx0XCJodHRwOi8vMjAwOC5zdWIuYmx1ZS9hc3NldHMvMDAwMC8zMDQ1L0dseW5uMl9wcmV2aWV3LmpwZ1wiLFxyXG5cdFx0XHRcImh0dHBzOi8vbGl2ZS5zdGF0aWNmbGlja3IuY29tLzY1NTM1LzQ4NTExMTU2MzAxX2JlODE2OWQ3ZjBfYi5qcGdcIlxyXG5cdFx0XSxcclxuXHRcdGRlc2NyaXB0aW9uOid0aGlzIGlzIGEgZGVzY3JpcHRpb24nfSxcclxuXHR7XHJcblx0XHRwcmV2aWV3U3JjOlwiaHR0cDovLzIwMDguc3ViLmJsdWUvYXNzZXRzLzAwMDAvMzA0NS9HbHlubjJfcHJldmlldy5qcGdcIixcclxuXHRcdG5hbWU6XCJSYXkgdHJhY2luZyAyXCIsXHJcblx0XHRpbWdzOltcclxuXHRcdFx0XCJodHRwOi8vMjAwOC5zdWIuYmx1ZS9hc3NldHMvMDAwMC8zMDQ1L0dseW5uMl9wcmV2aWV3LmpwZ1wiLFxyXG5cdFx0XHRcImh0dHBzOi8vbGl2ZS5zdGF0aWNmbGlja3IuY29tLzY1NTM1LzQ4NTExMTU2MzAxX2JlODE2OWQ3ZjBfYi5qcGdcIlxyXG5cdFx0XSxcclxuXHRcdGRlc2NyaXB0aW9uOid0aGlzIGlzIGEgZGVzY3JpcHRpb24nfSxcclxuXHR7XHJcblx0XHRwcmV2aWV3U3JjOlwiaHR0cHM6Ly9saXZlLnN0YXRpY2ZsaWNrci5jb20vNjU1MzUvNDg1MTExNTYzMDFfYmU4MTY5ZDdmMF9iLmpwZ1wiLFxyXG5cdFx0bmFtZTpcIlJheSB0cmFjaW5nIDNcIixcclxuXHRcdGltZ3M6W1xyXG5cdFx0XHRcImh0dHA6Ly8yMDA4LnN1Yi5ibHVlL2Fzc2V0cy8wMDAwLzMwNDUvR2x5bm4yX3ByZXZpZXcuanBnXCIsXHJcblx0XHRcdFwiaHR0cHM6Ly9saXZlLnN0YXRpY2ZsaWNrci5jb20vNjU1MzUvNDg1MTExNTYzMDFfYmU4MTY5ZDdmMF9iLmpwZ1wiXHJcblx0XHRdLFxyXG5cdFx0ZGVzY3JpcHRpb246J3RoaXMgaXMgYSBkZXNjcmlwdGlvbid9XHJcbl07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU9KGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgc3RhdGU9e307XHJcblx0XHRzdGF0ZS5nYWxsZXJ5PWdhbGxlcnk7XHJcblx0XHRsZXQgbGlua3M9W3tsaW5rOicnLFxyXG5cdFx0ZGVzY3JpcHRpb246J0xpbmsgdG8gc29tZSBncmVhdCBzaXRlIHdoYXRldmVyIGZ1Y2sgdGhpcyBzaGl0IGdheSBlYXJ0aCBpbSBvdXQgb2sgZmluZSBudm0gYnJiIGFzYXAgZnViYXIgYWZrJ31dO1xyXG5cdFx0c3RhdGUubGlua3M9bGlua3M7XHJcblx0XHRsZXQgYWJvdXQ9W107XHJcblx0XHRzdGF0ZS5hYm91dD1hYm91dDtcclxuXHRcdHJldHVybiBzdGF0ZTtcclxufSkoKTtcclxuXHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLGluaXRpYWxTdGF0ZVxyXG5cdCx3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpKTsgIFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlOyJdLCJzb3VyY2VSb290IjoiIn0=