webpackHotUpdate("app",{

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

PostsPage.defaultProps = {
  tags: [{ name: 'huj', active: true }],
  posts: [{ name: 'Name', img: '', tags: ['huj', 'pizda', 'jigurda'] }]
};

exports.default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PostsPage));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUG9zdHNQYWdlLmpzIl0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJzZXRUaXRsZSIsInRpdGxlIiwiY2xpY2tPblRhZyIsInZhbHVlIiwiUG9zdHNQYWdlIiwicHJvcHMiLCJwb3N0cyIsInRhZ3MiLCJhY3RpdmVUYWdzIiwiZm9yRWFjaCIsImFjdGl2ZSIsInB1c2giLCJuYW1lIiwibWFwIiwiaW5kZXgiLCJ0YWdBY3RpdmUiLCJpbmNsdWRlcyIsImltZyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBZ0IsU0FBaEJBLGVBQWdCLENBQVNDLEtBQVQsRUFDdEI7QUFDRSxTQUFPO0FBQ0w7QUFDQTtBQUZLLEdBQVA7QUFJRCxDQU5EOztBQVFBLElBQU1DLHFCQUFtQixTQUFuQkEsa0JBQW1CLENBQVNDLFFBQVQsRUFDekI7QUFDRSxTQUFRO0FBQ047QUFDQUMsY0FBUyxrQkFBU0MsS0FBVCxFQUFlO0FBQUNGLGVBQVMsdUJBQVNFLEtBQVQsQ0FBVDtBQUEyQixLQUY5QztBQUdOQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxNQUFXLFVBQVNDLEtBQVQsRUFBZTtBQUFDSixlQUFTRyxXQUFXQyxLQUFYLENBQVQ7QUFBNkIsS0FBeEQ7QUFITSxHQUFSO0FBS0QsQ0FQRDs7SUFTTUMsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFDQTtBQUFBOztBQUFBLGlIQUNVQSxLQURWO0FBRUM7Ozs7d0NBRUQ7QUFDRSxXQUFLQSxLQUFMLENBQVdMLFFBQVgsQ0FBb0IsTUFBcEI7QUFDRDs7OzZCQUNRO0FBQUEsbUJBQ3VCLEtBQUtLLEtBRDVCO0FBQUEsVUFDRkMsS0FERSxVQUNGQSxLQURFO0FBQUEsVUFDSUMsSUFESixVQUNJQSxJQURKO0FBQUEsVUFDU0wsVUFEVCxVQUNTQSxVQURUOztBQUVQLFVBQUlNLGFBQVcsRUFBZjtBQUNBRCxXQUFLRSxPQUFMLENBQWEsVUFBU04sS0FBVCxFQUNiO0FBQ0UsWUFBR0EsTUFBTU8sTUFBTixJQUFjLElBQWpCLEVBQ0E7QUFDRUYscUJBQVdHLElBQVgsQ0FBZ0JSLE1BQU1TLElBQXRCO0FBQ0Q7QUFDRixPQU5EO0FBT0EsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLDhCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxxQkFBZjtBQUVJTCxlQUFLTSxHQUFMLENBQVMsVUFBU1YsS0FBVCxFQUFlVyxLQUFmLEVBQ1Q7QUFDRSxtQkFBUSw4QkFBQyxhQUFELElBQUssS0FBS0EsS0FBVixFQUFpQixNQUFNWCxNQUFNUyxJQUE3QixFQUFtQyxRQUFRVCxNQUFNTyxNQUFqRCxFQUF5RCxPQUFPO0FBQUEsdUJBQUlSLFdBQVdDLEtBQVgsQ0FBSjtBQUFBLGVBQWhFLEdBQVI7QUFDRCxXQUhEO0FBRkosU0FERjtBQVNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZjtBQUVFRyxnQkFBTU8sR0FBTixDQUFVLFVBQVNWLEtBQVQsRUFBZVcsS0FBZixFQUNWO0FBQ0UsZ0JBQUlKLFNBQVMsS0FBYjtBQUNBLGdCQUFJSCxPQUFPSixNQUFNSSxJQUFOLENBQVdNLEdBQVgsQ0FBZSxVQUFTVixLQUFULEVBQzFCO0FBQ0Usa0JBQUlZLFlBQVlQLFdBQVdRLFFBQVgsQ0FBb0JiLEtBQXBCLENBQWhCO0FBQ0FPLHdCQUFRSyxTQUFSO0FBQ0EscUJBQU8sRUFBQ0wsUUFBT0ssU0FBUixFQUFrQkgsTUFBS1QsS0FBdkIsRUFBUDtBQUNELGFBTFUsQ0FBWDtBQU1BLG1CQUFRLDhCQUFDLHFCQUFELElBQWEsS0FBS1csS0FBbEIsRUFBeUIsTUFBTVgsTUFBTVMsSUFBckMsRUFBMkMsTUFBTUUsS0FBakQsRUFBd0QsS0FBS1gsTUFBTWMsR0FBbkUsRUFBd0UsTUFBTVYsSUFBOUUsRUFBb0YsUUFBUUcsTUFBNUYsR0FBUjtBQUNELFdBVkQ7QUFGRjtBQVRGLE9BREY7QUEyQkQ7Ozs7RUE5Q3FCUSxnQjs7QUFpRHhCZCxVQUFVZSxZQUFWLEdBQ0E7QUFDRVosUUFBSyxDQUFDLEVBQUNLLE1BQUssS0FBTixFQUFZRixRQUFPLElBQW5CLEVBQUQsQ0FEUDtBQUVFSixTQUFNLENBQUMsRUFBQ00sTUFBSyxNQUFOLEVBQWFLLEtBQUksRUFBakIsRUFBb0JWLE1BQUssQ0FBQyxLQUFELEVBQU8sT0FBUCxFQUFlLFNBQWYsQ0FBekIsRUFBRDtBQUZSLENBREE7O2tCQU1lLDZCQUFXLHlCQUFRWCxlQUFSLEVBQXdCRSxrQkFBeEIsRUFBNENNLFNBQTVDLENBQVgsQyIsImZpbGUiOiJhcHAuZDIyOWJmYzE5MjBiNDE3YzZmZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTmF2TGluaywgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IFBvc3RQcmV2aWV3IGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdFByZXZpZXcuanN4JztcclxuaW1wb3J0IFRhZyBmcm9tIFwiLi4vY29tcG9uZW50cy90YWcuanN4XCI7XHJcbmltcG9ydCB7c3dpdGNoTGFuZ3VhZ2UsIHNldFRpdGxlfSBmcm9tIFwiLi4vYWN0aW9ucy9hY3Rpb25zLmpzXCI7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHM9ZnVuY3Rpb24oc3RhdGUpXHJcbntcclxuICByZXR1cm4ge1xyXG4gICAgLy9wb3N0czpzdGF0ZS5wb3N0cyxcclxuICAgIC8vdGFnczpzdGF0ZS50YWdzXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcz1mdW5jdGlvbihkaXNwYXRjaClcclxue1xyXG4gIHJldHVybiAoe1xyXG4gICAgLy9zd2l0Y2hMYW5ndWFnZTpmdW5jdGlvbigpe2Rpc3BhdGNoKHN3aXRjaExhbmd1YWdlKCkpO31cclxuICAgIHNldFRpdGxlOmZ1bmN0aW9uKHRpdGxlKXtkaXNwYXRjaChzZXRUaXRsZSh0aXRsZSkpO30sXHJcbiAgICBjbGlja09uVGFnOmZ1bmN0aW9uKHZhbHVlKXtkaXNwYXRjaChjbGlja09uVGFnKHZhbHVlKSk7fVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY2xhc3MgUG9zdHNQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcylcclxuICB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKVxyXG4gIHtcclxuICAgIHRoaXMucHJvcHMuc2V0VGl0bGUoXCJQb3N0XCIpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQge3Bvc3RzLHRhZ3MsY2xpY2tPblRhZ30gPSB0aGlzLnByb3BzO1xyXG4gICAgbGV0IGFjdGl2ZVRhZ3M9W107XHJcbiAgICB0YWdzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpXHJcbiAgICB7XHJcbiAgICAgIGlmKHZhbHVlLmFjdGl2ZT09dHJ1ZSlcclxuICAgICAge1xyXG4gICAgICAgIGFjdGl2ZVRhZ3MucHVzaCh2YWx1ZS5uYW1lKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb3N0c0NvbnRhaW5lciBwYWdlQ29udGFpbmVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2xvYmFsVGFnc0NvbnRhaW5lcic+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRhZ3MubWFwKGZ1bmN0aW9uKHZhbHVlLGluZGV4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICg8VGFnIGtleT17aW5kZXh9IG5hbWU9e3ZhbHVlLm5hbWV9IGFjdGl2ZT17dmFsdWUuYWN0aXZlfSBjbGljaz17KCk9PmNsaWNrT25UYWcodmFsdWUpfS8+KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9zdHMnPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBvc3RzLm1hcChmdW5jdGlvbih2YWx1ZSxpbmRleClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgdGFncyA9IHZhbHVlLnRhZ3MubWFwKGZ1bmN0aW9uKHZhbHVlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGV0IHRhZ0FjdGl2ZSA9IGFjdGl2ZVRhZ3MuaW5jbHVkZXModmFsdWUpO1xyXG4gICAgICAgICAgICAgIGFjdGl2ZXw9dGFnQWN0aXZlO1xyXG4gICAgICAgICAgICAgIHJldHVybiB7YWN0aXZlOnRhZ0FjdGl2ZSxuYW1lOnZhbHVlfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoPFBvc3RQcmV2aWV3IGtleT17aW5kZXh9IG5hbWU9e3ZhbHVlLm5hbWV9IGxpbms9e2luZGV4fSBpbWc9e3ZhbHVlLmltZ30gdGFncz17dGFnc30gYWN0aXZlPXthY3RpdmV9Lz4pO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuUG9zdHNQYWdlLmRlZmF1bHRQcm9wcyA9IFxyXG57XHJcbiAgdGFnczpbe25hbWU6J2h1aicsYWN0aXZlOnRydWV9XSxcclxuICBwb3N0czpbe25hbWU6J05hbWUnLGltZzonJyx0YWdzOlsnaHVqJywncGl6ZGEnLCdqaWd1cmRhJ119XVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoUG9zdHNQYWdlKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==