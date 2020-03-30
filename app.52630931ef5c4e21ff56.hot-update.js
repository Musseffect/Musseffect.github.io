webpackHotUpdate("app",{

/***/ "./src/pages/LinksPage.js":
/*!********************************!*\
  !*** ./src/pages/LinksPage.js ***!
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

var _actions = __webpack_require__(/*! ../actions/actions.js */ "./src/actions/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    links: state.links
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    //switchLanguage:function(){dispatch(switchLanguage());}
  };
};

var LinksPage = function (_Component) {
  _inherits(LinksPage, _Component);

  function LinksPage(props) {
    _classCallCheck(this, LinksPage);

    return _possibleConstructorReturn(this, (LinksPage.__proto__ || Object.getPrototypeOf(LinksPage)).call(this, props));
  }

  _createClass(LinksPage, [{
    key: 'render',
    value: function render() {
      var links = this.props.links;

      var elements = [];
      for (var i = 0; i < links.length; i++) {
        var linkItem = links[i];
        elements.push(_react2.default.createElement(
          'div',
          { key: i, className: 'linkContainer' },
          _react2.default.createElement(
            'a',
            { className: 'linkItem', href: linkItem.link },
            linkItem.link
          ),
          linkItem.description != undefined && _react2.default.createElement(
            'div',
            { className: 'linkDescription' },
            linkItem.description
          )
        ));
      }
      return _react2.default.createElement(
        'div',
        { className: 'linksContainer pageContainer' },
        _react2.default.createElement(
          'div',
          { className: 'linksGroup' },
          _react2.default.createElement(
            'div',
            { className: 'linksHeader' },
            'Ray tracing'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'linksList' },
            _react2.default.createElement(
              'li',
              null,
              'item 1'
            ),
            _react2.default.createElement(
              'li',
              null,
              'item 2'
            ),
            _react2.default.createElement(
              'li',
              null,
              'item 3'
            ),
            _react2.default.createElement(
              'li',
              null,
              'item 4'
            )
          )
        )
      );
    }
  }]);

  return LinksPage;
}(_react.Component);

exports.default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LinksPage));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTGlua3NQYWdlLmpzIl0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibGlua3MiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIkxpbmtzUGFnZSIsInByb3BzIiwiZWxlbWVudHMiLCJpIiwibGVuZ3RoIiwibGlua0l0ZW0iLCJwdXNoIiwibGluayIsImRlc2NyaXB0aW9uIiwidW5kZWZpbmVkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBR0EsSUFBTUEsa0JBQWdCLFNBQWhCQSxlQUFnQixDQUFTQyxLQUFULEVBQ3RCO0FBQ0UsU0FBTztBQUNMQyxXQUFNRCxNQUFNQztBQURQLEdBQVA7QUFHRCxDQUxEOztBQU9BLElBQU1DLHFCQUFtQixTQUFuQkEsa0JBQW1CLENBQVNDLFFBQVQsRUFDekI7QUFDRSxTQUFRO0FBQ047QUFETSxHQUFSO0FBR0QsQ0FMRDs7SUFPTUMsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFDQTtBQUFBOztBQUFBLGlIQUNVQSxLQURWO0FBRUM7Ozs7NkJBQ1E7QUFBQSxVQUNGSixLQURFLEdBQ08sS0FBS0ksS0FEWixDQUNGSixLQURFOztBQUVQLFVBQUlLLFdBQVMsRUFBYjtBQUNBLFdBQUksSUFBSUMsSUFBRSxDQUFWLEVBQVlBLElBQUVOLE1BQU1PLE1BQXBCLEVBQTJCRCxHQUEzQixFQUNBO0FBQ0UsWUFBSUUsV0FBU1IsTUFBTU0sQ0FBTixDQUFiO0FBQ0FELGlCQUFTSSxJQUFULENBQWM7QUFBQTtBQUFBLFlBQUssS0FBS0gsQ0FBVixFQUFhLFdBQVUsZUFBdkI7QUFDWjtBQUFBO0FBQUEsY0FBRyxXQUFVLFVBQWIsRUFBd0IsTUFBTUUsU0FBU0UsSUFBdkM7QUFBOENGLHFCQUFTRTtBQUF2RCxXQURZO0FBR1hGLG1CQUFTRyxXQUFULElBQXNCQyxTQUF0QixJQUFpQztBQUFBO0FBQUEsY0FBSyxXQUFVLGlCQUFmO0FBQy9CSixxQkFBU0c7QUFEc0I7QUFIdEIsU0FBZDtBQU9EO0FBQ0QsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLDhCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBWSxZQUFqQjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsYUFBZjtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFJLFdBQVUsV0FBZDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUZGO0FBREYsT0FERjtBQWFEOzs7O0VBaENxQkUsZ0I7O2tCQW9DVCw2QkFBVyx5QkFBUWYsZUFBUixFQUF3Qkcsa0JBQXhCLEVBQTRDRSxTQUE1QyxDQUFYLEMiLCJmaWxlIjoiYXBwLjUyNjMwOTMxZWY1YzRlMjFmZjU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IE5hdkxpbmssIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7c3dpdGNoTGFuZ3VhZ2Usc2V0VGl0bGV9IGZyb20gXCIuLi9hY3Rpb25zL2FjdGlvbnMuanNcIjtcclxuXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHM9ZnVuY3Rpb24oc3RhdGUpXHJcbntcclxuICByZXR1cm4ge1xyXG4gICAgbGlua3M6c3RhdGUubGlua3NcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzPWZ1bmN0aW9uKGRpc3BhdGNoKVxyXG57XHJcbiAgcmV0dXJuICh7XHJcbiAgICAvL3N3aXRjaExhbmd1YWdlOmZ1bmN0aW9uKCl7ZGlzcGF0Y2goc3dpdGNoTGFuZ3VhZ2UoKSk7fVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY2xhc3MgTGlua3NQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcylcclxuICB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHtsaW5rc30gPSB0aGlzLnByb3BzO1xyXG4gICAgbGV0IGVsZW1lbnRzPVtdO1xyXG4gICAgZm9yKHZhciBpPTA7aTxsaW5rcy5sZW5ndGg7aSsrKVxyXG4gICAge1xyXG4gICAgICBsZXQgbGlua0l0ZW09bGlua3NbaV07XHJcbiAgICAgIGVsZW1lbnRzLnB1c2goPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT0nbGlua0NvbnRhaW5lcic+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPSdsaW5rSXRlbScgaHJlZj17bGlua0l0ZW0ubGlua30+e2xpbmtJdGVtLmxpbmt9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIHtsaW5rSXRlbS5kZXNjcmlwdGlvbiE9dW5kZWZpbmVkJiY8ZGl2IGNsYXNzTmFtZT0nbGlua0Rlc2NyaXB0aW9uJz5cclxuICAgICAgICAgIHtsaW5rSXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj4pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmtzQ29udGFpbmVyIHBhZ2VDb250YWluZXInPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2xpbmtzR3JvdXAnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmtzSGVhZGVyJz5SYXkgdHJhY2luZzwvZGl2PlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbGlua3NMaXN0Jz5cclxuICAgICAgICAgICAgPGxpPml0ZW0gMTwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5pdGVtIDI8L2xpPlxyXG4gICAgICAgICAgICA8bGk+aXRlbSAzPC9saT5cclxuICAgICAgICAgICAgPGxpPml0ZW0gNDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoTGlua3NQYWdlKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==