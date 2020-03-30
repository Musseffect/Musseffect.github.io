webpackHotUpdate("app",{

/***/ "./src/pages/PostPage.js":
/*!*******************************!*\
  !*** ./src/pages/PostPage.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _tag = __webpack_require__(/*! ../components/tag.jsx */ "./src/components/tag.jsx");

var _tag2 = _interopRequireDefault(_tag);

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    //switchLanguage:function(){dispatch(switchLanguage());}
  };
};
//TODO:add React-markdown

var PostPage = function (_Component) {
  _inherits(PostPage, _Component);

  function PostPage(props) {
    _classCallCheck(this, PostPage);

    return _possibleConstructorReturn(this, (PostPage.__proto__ || Object.getPrototypeOf(PostPage)).call(this, props));
  }

  _createClass(PostPage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          description = _props.description,
          tags = _props.tags,
          images = _props.images,
          mainImg = _props.mainImg;

      return _react2.default.createElement(
        'div',
        { className: 'postContainer pageContainer' },
        _react2.default.createElement(
          'div',
          { className: 'postContent' },
          _react2.default.createElement('img', { className: 'postMainImg', src: mainImg }),
          _react2.default.createElement(
            'div',
            { className: 'postName' },
            name
          ),
          _react2.default.createElement(
            'div',
            { className: 'postTags' },
            tags.map(function (value, index) {
              return _react2.default.createElement(_tag2.default, { key: index, name: value, active: true });
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'postContent' },
            description
          ),
          _react2.default.createElement(
            'div',
            { className: 'postImages' },
            images.map(function (value, index) {
              return _react2.default.createElement('img', { 'class': 'postImg', src: value });
            })
          )
        )
      );
    }
  }]);

  return PostPage;
}(_react.Component);

exports.default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapDispatchToProps)(PostPage));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUG9zdFBhZ2UuanMiXSwibmFtZXMiOlsibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJQb3N0UGFnZSIsInByb3BzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidGFncyIsImltYWdlcyIsIm1haW5JbWciLCJtYXAiLCJ2YWx1ZSIsImluZGV4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxxQkFBbUIsU0FBbkJBLGtCQUFtQixDQUFTQyxRQUFULEVBQ3pCO0FBQ0UsU0FBUTtBQUNOO0FBRE0sR0FBUjtBQUdELENBTEQ7QUFNQTs7SUFDTUMsUTs7O0FBQ0osb0JBQVlDLEtBQVosRUFDQTtBQUFBOztBQUFBLCtHQUNVQSxLQURWO0FBRUM7Ozs7NkJBQ1E7QUFBQSxtQkFPSCxLQUFLQSxLQVBGO0FBQUEsVUFFTEMsSUFGSyxVQUVMQSxJQUZLO0FBQUEsVUFHTEMsV0FISyxVQUdMQSxXQUhLO0FBQUEsVUFJTEMsSUFKSyxVQUlMQSxJQUpLO0FBQUEsVUFLTEMsTUFMSyxVQUtMQSxNQUxLO0FBQUEsVUFNTEMsT0FOSyxVQU1MQSxPQU5LOztBQVFQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSw2QkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsYUFBZjtBQUNFLGlEQUFLLFdBQVUsYUFBZixFQUE2QixLQUFLQSxPQUFsQyxHQURGO0FBRUU7QUFBQTtBQUFBLGNBQUssV0FBVSxVQUFmO0FBQ0dKO0FBREgsV0FGRjtBQUtFO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUVJRSxpQkFBS0csR0FBTCxDQUFTLFVBQVNDLEtBQVQsRUFBZUMsS0FBZixFQUNUO0FBQ0UscUJBQVEsOEJBQUMsYUFBRCxJQUFLLEtBQUtBLEtBQVYsRUFBaUIsTUFBTUQsS0FBdkIsRUFBOEIsUUFBUSxJQUF0QyxHQUFSO0FBQ0QsYUFIRDtBQUZKLFdBTEY7QUFhSTtBQUFBO0FBQUEsY0FBSyxXQUFVLGFBQWY7QUFDR0w7QUFESCxXQWJKO0FBZ0JJO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZjtBQUNHRSxtQkFBT0UsR0FBUCxDQUFXLFVBQVNDLEtBQVQsRUFBZUMsS0FBZixFQUNaO0FBQ0UscUJBQVEsdUNBQUssU0FBTSxTQUFYLEVBQXFCLEtBQUtELEtBQTFCLEdBQVI7QUFDRCxhQUhBO0FBREg7QUFoQko7QUFERixPQURGO0FBMkJEOzs7O0VBeENvQkUsZ0I7O2tCQTRDUiw2QkFBVyx5QkFBUVosa0JBQVIsRUFBNEJFLFFBQTVCLENBQVgsQyIsImZpbGUiOiJhcHAuMjQ1Y2U4NzE5YTY2YTZlOWQyMzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTmF2TGluaywgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgVGFnIGZyb20gXCIuLi9jb21wb25lbnRzL3RhZy5qc3hcIjtcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHM9ZnVuY3Rpb24oZGlzcGF0Y2gpXHJcbntcclxuICByZXR1cm4gKHtcclxuICAgIC8vc3dpdGNoTGFuZ3VhZ2U6ZnVuY3Rpb24oKXtkaXNwYXRjaChzd2l0Y2hMYW5ndWFnZSgpKTt9XHJcbiAgfSk7XHJcbn07XHJcbi8vVE9ETzphZGQgUmVhY3QtbWFya2Rvd25cclxuY2xhc3MgUG9zdFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKVxyXG4gIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgdGFncyxcclxuICAgICAgaW1hZ2VzLFxyXG4gICAgICBtYWluSW1nXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb3N0Q29udGFpbmVyIHBhZ2VDb250YWluZXInPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb3N0Q29udGVudCc+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvc3RNYWluSW1nXCIgc3JjPXttYWluSW1nfS8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3ROYW1lXCI+XHJcbiAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RUYWdzXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0YWdzLm1hcChmdW5jdGlvbih2YWx1ZSxpbmRleClcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxUYWcga2V5PXtpbmRleH0gbmFtZT17dmFsdWV9IGFjdGl2ZT17dHJ1ZX0vPik7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdENvbnRlbnRcIj5cclxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RJbWFnZXNcIj5cclxuICAgICAgICAgICAgICB7aW1hZ2VzLm1hcChmdW5jdGlvbih2YWx1ZSxpbmRleClcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgY2xhc3M9XCJwb3N0SW1nXCIgc3JjPXt2YWx1ZX0+PC9pbWc+KTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBEaXNwYXRjaFRvUHJvcHMpKFBvc3RQYWdlKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==