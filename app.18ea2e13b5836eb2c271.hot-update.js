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

var _tag = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../tag.jsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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

/***/ }),

/***/ "./src/pages/PostsPage.js":
/*!********************************!*\
  !*** ./src/pages/PostsPage.js ***!
  \********************************/
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

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _postPreview = __webpack_require__(/*! ../components/postPreview.jsx */ "./src/components/postPreview.jsx");

var _postPreview2 = _interopRequireDefault(_postPreview);

var _tag = __webpack_require__(/*! ../components/tag.jsx */ "./src/components/tag.jsx");

var _tag2 = _interopRequireDefault(_tag);

var _actions = __webpack_require__(/*! ../actions/actions.js */ "./src/actions/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    //posts:state.posts,
    //tags:state.tags
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    //switchLanguage:function(){dispatch(switchLanguage());}
    setTitle: function setTitle(title) {
      dispatch((0, _actions.setTitle)(title));
    },
    clickOnTag: function (_clickOnTag) {
      function clickOnTag(_x) {
        return _clickOnTag.apply(this, arguments);
      }

      clickOnTag.toString = function () {
        return _clickOnTag.toString();
      };

      return clickOnTag;
    }(function (value) {
      dispatch(clickOnTag(value));
    })
  };
};

var PostsPage = function (_Component) {
  _inherits(PostsPage, _Component);

  function PostsPage(props) {
    _classCallCheck(this, PostsPage);

    return _possibleConstructorReturn(this, (PostsPage.__proto__ || Object.getPrototypeOf(PostsPage)).call(this, props));
  }

  _createClass(PostsPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.setTitle("Post");
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          posts = _props.posts,
          tags = _props.tags,
          clickOnTag = _props.clickOnTag;

      var activeTags = [];
      tags.forEach(function (value) {
        if (value.active == true) {
          activeTags.push(value.name);
        }
      });
      return _react2.default.createElement(
        'div',
        { className: 'postsContainer pageContainer' },
        _react2.default.createElement(
          'div',
          { className: 'globalTagsContainer' },
          tags.map(function (value, index) {
            return _react2.default.createElement(_tag2.default, { key: index, name: value.name, active: value.active, click: function click() {
                return clickOnTag(value);
              } });
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'posts' },
          posts.map(function (value, index) {
            var active = false;
            var tags = value.tags.map(function (value) {
              var tagActive = activeTags.includes(value);
              active |= tagActive;
              return { active: tagActive, name: value };
            });
            return _react2.default.createElement(_postPreview2.default, { key: index, name: value.name, link: index, img: value.img, tags: tags, active: active });
          })
        )
      );
    }
  }]);

  return PostsPage;
}(_react.Component);

BlogPage.defaultProps = {
  tags: [{ name: 'huj', active: true }],
  posts: [{ name: 'Name', img: '', tags: ['huj', 'pizda', 'jigurda'] }]
};

exports.default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BlogPage));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3N0UHJldmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1Bvc3RzUGFnZS5qcyJdLCJuYW1lcyI6WyJQb3N0UHJldmlldyIsInByb3BzIiwibmFtZSIsInRhZ3MiLCJsaW5rIiwiaW1nIiwiYWN0aXZlIiwib3BhY2l0eSIsIm1hcCIsInZhbHVlIiwiaW5kZXgiLCJjbGlja09uVGFnIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInNldFRpdGxlIiwidGl0bGUiLCJQb3N0c1BhZ2UiLCJwb3N0cyIsImFjdGl2ZVRhZ3MiLCJmb3JFYWNoIiwicHVzaCIsInRhZ0FjdGl2ZSIsImluY2x1ZGVzIiwiQmxvZ1BhZ2UiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdNQSxXOzs7QUFDSix1QkFBWUMsS0FBWixFQUNBO0FBQUE7O0FBQUEscUhBQ1VBLEtBRFY7QUFFQzs7Ozs2QkFDUTtBQUFBLG1CQUMyQixLQUFLQSxLQURoQztBQUFBLFVBQ0ZDLElBREUsVUFDRkEsSUFERTtBQUFBLFVBQ0dDLElBREgsVUFDR0EsSUFESDtBQUFBLFVBQ1FDLElBRFIsVUFDUUEsSUFEUjtBQUFBLFVBQ2FDLEdBRGIsVUFDYUEsR0FEYjtBQUFBLFVBQ2lCQyxNQURqQixVQUNpQkEsTUFEakI7O0FBRVAsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHNCQUFmLEVBQXNDLE9BQU9BLFNBQU8sRUFBQ0MsU0FBUSxHQUFULEVBQVAsR0FBcUIsRUFBQ0EsU0FBUSxHQUFULEVBQWxFO0FBQ0UsK0NBQUssV0FBVSxnQkFBZixFQUFnQyxLQUFLRixHQUFyQyxHQURGO0FBRUU7QUFBQyxpQ0FBRDtBQUFBLFlBQVMsS0FBSSxRQUFiLEVBQXNCLFdBQXRCLEVB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QWpELEVBQXdELEtBQUtELE1BQU1KLEdBQW5FLEVBQXdFLE1BQU1GLElBQTlFLEVBQW9GLFFBQVFHLE1BQTVGLEdBQVI7QUFDRCxXQVZEO0FBRkY7QUFURixPQURGO0FBMkJEOzs7O0VBOUNxQk0sZ0I7O0FBaUR4QmMsU0FBU0MsWUFBVCxHQUNBO0FBQ0V4QixRQUFLLENBQUMsRUFBQ0QsTUFBSyxLQUFOLEVBQVlJLFFBQU8sSUFBbkIsRUFBRCxDQURQO0FBRUVjLFNBQU0sQ0FBQyxFQUFDbEIsTUFBSyxNQUFOLEVBQWFHLEtBQUksRUFBakIsRUFBb0JGLE1BQUssQ0FBQyxLQUFELEVBQU8sT0FBUCxFQUFlLFNBQWYsQ0FBekIsRUFBRDtBQUZSLENBREE7O2tCQU1lLDZCQUFXLHlCQUFRVSxlQUFSLEVBQXdCRSxrQkFBeEIsRUFBNENXLFFBQTVDLENBQVgsQyIsImZpbGUiOiJhcHAuMThlYTJlMTNiNTgzNmViMmMyNzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmssIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFRhZyBmcm9tIFwiLi4vdGFnLmpzeFwiO1xyXG5cclxuXHJcbmNsYXNzIFBvc3RQcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcylcclxuICB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHtuYW1lLHRhZ3MsbGluayxpbWcsYWN0aXZlfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9zdFByZXZpZXdDb250YWluZXInIHN0eWxlPXthY3RpdmU/e29wYWNpdHk6MS4wfTp7b3BhY2l0eTowLjJ9fT5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT0ncG9zdFByZXZpZXdJbWcnIHNyYz17aW1nfS8+XHJcbiAgICAgICAgPE5hdkxpbmsga2V5PVwibGlua18xXCIgZXhhY3QgdG89eycvcG9zdHMvJytsaW5rfSBjbGFzc05hbWU9XCJwb3N0SGVhZGVyTGluayBoNlwiPntuYW1lfTwvTmF2TGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9zdFByZXZpZXdUYWdzJz5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB0YWdzLm1hcChmdW5jdGlvbih2YWx1ZSxpbmRleClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoPFRhZyBrZXk9e2luZGV4fSBuYW1lPXt2YWx1ZS5uYW1lfSBhY3RpdmU9e3ZhbHVlLmFjdGl2ZX0gY2xpY2s9eygpPT5jbGlja09uVGFnKHZhbHVlKX0vPik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0UHJldmlldzsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IE5hdkxpbmssIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBQb3N0UHJldmlldyBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RQcmV2aWV3LmpzeCc7XHJcbmltcG9ydCBUYWcgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGFnLmpzeFwiO1xyXG5pbXBvcnQge3N3aXRjaExhbmd1YWdlLCBzZXRUaXRsZX0gZnJvbSBcIi4uL2FjdGlvbnMvYWN0aW9ucy5qc1wiO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzPWZ1bmN0aW9uKHN0YXRlKVxyXG57XHJcbiAgcmV0dXJuIHtcclxuICAgIC8vcG9zdHM6c3RhdGUucG9zdHMsXHJcbiAgICAvL3RhZ3M6c3RhdGUudGFnc1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHM9ZnVuY3Rpb24oZGlzcGF0Y2gpXHJcbntcclxuICByZXR1cm4gKHtcclxuICAgIC8vc3dpdGNoTGFuZ3VhZ2U6ZnVuY3Rpb24oKXtkaXNwYXRjaChzd2l0Y2hMYW5ndWFnZSgpKTt9XHJcbiAgICBzZXRUaXRsZTpmdW5jdGlvbih0aXRsZSl7ZGlzcGF0Y2goc2V0VGl0bGUodGl0bGUpKTt9LFxyXG4gICAgY2xpY2tPblRhZzpmdW5jdGlvbih2YWx1ZSl7ZGlzcGF0Y2goY2xpY2tPblRhZyh2YWx1ZSkpO31cclxuICB9KTtcclxufTtcclxuXHJcbmNsYXNzIFBvc3RzUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpXHJcbiAge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KClcclxuICB7XHJcbiAgICB0aGlzLnByb3BzLnNldFRpdGxlKFwiUG9zdFwiKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHtwb3N0cyx0YWdzLGNsaWNrT25UYWd9ID0gdGhpcy5wcm9wcztcclxuICAgIGxldCBhY3RpdmVUYWdzPVtdO1xyXG4gICAgdGFncy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKVxyXG4gICAge1xyXG4gICAgICBpZih2YWx1ZS5hY3RpdmU9PXRydWUpXHJcbiAgICAgIHtcclxuICAgICAgICBhY3RpdmVUYWdzLnB1c2godmFsdWUubmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9zdHNDb250YWluZXIgcGFnZUNvbnRhaW5lcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dsb2JhbFRhZ3NDb250YWluZXInPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0YWdzLm1hcChmdW5jdGlvbih2YWx1ZSxpbmRleClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoPFRhZyBrZXk9e2luZGV4fSBuYW1lPXt2YWx1ZS5uYW1lfSBhY3RpdmU9e3ZhbHVlLmFjdGl2ZX0gY2xpY2s9eygpPT5jbGlja09uVGFnKHZhbHVlKX0vPik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Bvc3RzJz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBwb3N0cy5tYXAoZnVuY3Rpb24odmFsdWUsaW5kZXgpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IHRhZ3MgPSB2YWx1ZS50YWdzLm1hcChmdW5jdGlvbih2YWx1ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxldCB0YWdBY3RpdmUgPSBhY3RpdmVUYWdzLmluY2x1ZGVzKHZhbHVlKTtcclxuICAgICAgICAgICAgICBhY3RpdmV8PXRhZ0FjdGl2ZTtcclxuICAgICAgICAgICAgICByZXR1cm4ge2FjdGl2ZTp0YWdBY3RpdmUsbmFtZTp2YWx1ZX07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gKDxQb3N0UHJldmlldyBrZXk9e2luZGV4fSBuYW1lPXt2YWx1ZS5uYW1lfSBsaW5rPXtpbmRleH0gaW1nPXt2YWx1ZS5pbWd9IHRhZ3M9e3RhZ3N9IGFjdGl2ZT17YWN0aXZlfS8+KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbkJsb2dQYWdlLmRlZmF1bHRQcm9wcyA9IFxyXG57XHJcbiAgdGFnczpbe25hbWU6J2h1aicsYWN0aXZlOnRydWV9XSxcclxuICBwb3N0czpbe25hbWU6J05hbWUnLGltZzonJyx0YWdzOlsnaHVqJywncGl6ZGEnLCdqaWd1cmRhJ119XVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoQmxvZ1BhZ2UpKTsiXSwic291cmNlUm9vdCI6IiJ9