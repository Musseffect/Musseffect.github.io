webpackHotUpdate("app",{

/***/ "./src/components/postPreview.jsx":
/*!****************************************!*\
  !*** ./src/components/postPreview.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _tag = __webpack_require__(/*! ./tag.jsx */ "./src/components/tag.jsx");

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostPreview = function (_Component) {
  _inherits(PostPreview, _Component);

  function PostPreview(props) {
    _classCallCheck(this, PostPreview);

    return _possibleConstructorReturn(this, (PostPreview.__proto__ || Object.getPrototypeOf(PostPreview)).call(this, props));
  }

  _createClass(PostPreview, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          tags = _props.tags,
          link = _props.link,
          img = _props.img,
          active = _props.active;

      return _react2.default.createElement(
        'div',
        { className: 'postPreviewContainer', style: active ? { opacity: 1.0 } : { opacity: 0.2 } },
        _react2.default.createElement('img', { className: 'postPreviewImg', src: img }),
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { key: 'link_1', exact: true, to: '/posts/' + link, className: 'postHeaderLink h6' },
          name
        ),
        _react2.default.createElement(
          'div',
          { className: 'postPreviewTags' },
          tags.map(function (value, index) {
            return _react2.default.createElement(_tag2.default, { key: index, name: value.name, active: value.active, click: function click() {
                return clickOnTag(value);
              } });
          })
        )
      );
    }
  }]);

  return PostPreview;
}(_react.Component);

exports.default = PostPreview;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3N0UHJldmlldy5qc3giXSwibmFtZXMiOlsiUG9zdFByZXZpZXciLCJwcm9wcyIsIm5hbWUiLCJ0YWdzIiwibGluayIsImltZyIsImFjdGl2ZSIsIm9wYWNpdHkiLCJtYXAiLCJ2YWx1ZSIsImluZGV4IiwiY2xpY2tPblRhZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR01BLFc7OztBQUNKLHVCQUFZQyxLQUFaLEVBQ0E7QUFBQTs7QUFBQSxxSEFDVUEsS0FEVjtBQUVDOzs7OzZCQUNRO0FBQUEsbUJBQzJCLEtBQUtBLEtBRGhDO0FBQUEsVUFDRkMsSUFERSxVQUNGQSxJQURFO0FBQUEsVUFDR0MsSUFESCxVQUNHQSxJQURIO0FBQUEsVUFDUUMsSUFEUixVQUNRQSxJQURSO0FBQUEsVUFDYUMsR0FEYixVQUNhQSxHQURiO0FBQUEsVUFDaUJDLE1BRGpCLFVBQ2lCQSxNQURqQjs7QUFFUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsc0JBQWYsRUFBc0MsT0FBT0EsU0FBTyxFQUFDQyxTQUFRLEdBQVQsRUFBUCxHQUFxQixFQUFDQSxTQUFRLEdBQVQsRUFBbEU7QUFDRSwrQ0FBSyxXQUFVLGdCQUFmLEVBQWdDLEtBQUtGLEdBQXJDLEdBREY7QUFFRTtBQUFDLGlDQUFEO0FBQUEsWUFBUyxLQUFJLFFBQWIsRUFBc0IsV0FBdEIsRUFBNEIsSUFBSSxZQUFVRCxJQUExQyxFQUFnRCxXQUFVLG1CQUExRDtBQUErRUY7QUFBL0UsU0FGRjtBQUdFO0FBQUE7QUFBQSxZQUFLLFdBQVUsaUJBQWY7QUFFSUMsZUFBS0ssR0FBTCxDQUFTLFVBQVNDLEtBQVQsRUFBZUMsS0FBZixFQUNUO0FBQ0UsbUJBQVEsOEJBQUMsYUFBRCxJQUFLLEtBQUtBLEtBQVYsRUFBaUIsTUFBTUQsTUFBTVAsSUFBN0IsRUFBbUMsUUFBUU8sTUFBTUgsTUFBakQsRUFBeUQsT0FBTztBQUFBLHVCQUFJSyxXQUFXRixLQUFYLENBQUo7QUFBQSxlQUFoRSxHQUFSO0FBQ0QsV0FIRDtBQUZKO0FBSEYsT0FERjtBQWNEOzs7O0VBckJ1QkcsZ0I7O2tCQXdCWFosVyIsImZpbGUiOiJhcHAuNzFjODEwN2Y5YmI1ZTY5ZThjZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmssIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFRhZyBmcm9tIFwiLi90YWcuanN4XCI7XHJcblxyXG5cclxuY2xhc3MgUG9zdFByZXZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKVxyXG4gIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQge25hbWUsdGFncyxsaW5rLGltZyxhY3RpdmV9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb3N0UHJldmlld0NvbnRhaW5lcicgc3R5bGU9e2FjdGl2ZT97b3BhY2l0eToxLjB9OntvcGFjaXR5OjAuMn19PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdwb3N0UHJldmlld0ltZycgc3JjPXtpbWd9Lz5cclxuICAgICAgICA8TmF2TGluayBrZXk9XCJsaW5rXzFcIiBleGFjdCB0bz17Jy9wb3N0cy8nK2xpbmt9IGNsYXNzTmFtZT1cInBvc3RIZWFkZXJMaW5rIGg2XCI+e25hbWV9PC9OYXZMaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb3N0UHJldmlld1RhZ3MnPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRhZ3MubWFwKGZ1bmN0aW9uKHZhbHVlLGluZGV4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICg8VGFnIGtleT17aW5kZXh9IG5hbWU9e3ZhbHVlLm5hbWV9IGFjdGl2ZT17dmFsdWUuYWN0aXZlfSBjbGljaz17KCk9PmNsaWNrT25UYWcodmFsdWUpfS8+KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RQcmV2aWV3OyJdLCJzb3VyY2VSb290IjoiIn0=