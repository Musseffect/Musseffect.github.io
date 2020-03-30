webpackHotUpdate("app",{

/***/ "./src/containers/app.jsx":
/*!********************************!*\
  !*** ./src/containers/app.jsx ***!
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

var _reactResponsive = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/react-responsive.js");

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _MainPage = __webpack_require__(/*! ../pages/MainPage.js */ "./src/pages/MainPage.js");

var _MainPage2 = _interopRequireDefault(_MainPage);

var _AboutPage = __webpack_require__(/*! ../pages/AboutPage.js */ "./src/pages/AboutPage.js");

var _AboutPage2 = _interopRequireDefault(_AboutPage);

var _StereoImagePage = __webpack_require__(/*! ../pages/StereoImagePage.js */ "./src/pages/StereoImagePage.js");

var _StereoImagePage2 = _interopRequireDefault(_StereoImagePage);

var _LinksPage = __webpack_require__(/*! ../pages/LinksPage.js */ "./src/pages/LinksPage.js");

var _LinksPage2 = _interopRequireDefault(_LinksPage);

var _PostsPage = __webpack_require__(/*! ../pages/PostsPage.js */ "./src/pages/PostsPage.js");

var _PostsPage2 = _interopRequireDefault(_PostsPage);

var _PostPage = __webpack_require__(/*! ../pages/PostPage.js */ "./src/pages/PostPage.js");

var _PostPage2 = _interopRequireDefault(_PostPage);

var _windowSizes = __webpack_require__(/*! ../windowSizes.js */ "./src/windowSizes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return { title: state.title };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var title = this.props.title;

      var links = [];
      links.push(_react2.default.createElement(
        _reactRouterDom.NavLink,
        { key: 'link_1', exact: true, to: '/', className: 'nav-link nav-item link', activeClassName: 'active', onClick: this.closeMenu },
        "Main"
      ));
      links.push(_react2.default.createElement(
        _reactRouterDom.NavLink,
        { key: 'link_3', exact: true, to: '/stereoImage', className: 'nav-link nav-item link', activeClassName: 'active', onClick: this.closeMenu },
        "StereoImage"
      ));
      links.push(_react2.default.createElement(
        _reactRouterDom.NavLink,
        { key: 'link_5', exact: true, to: '/links', className: 'nav-link nav-item link', activeClassName: 'active', onClick: this.closeMenu },
        "Links"
      ));
      links.push(_react2.default.createElement(
        _reactRouterDom.NavLink,
        { key: 'link_6', exact: true, to: '/about', className: 'nav-link nav-item link', activeClassName: 'active', onClick: this.closeMenu },
        "About"
      ));
      links.push(_react2.default.createElement(
        _reactRouterDom.NavLink,
        { key: 'link_7', exact: true, to: '/blog', className: 'nav-link nav-item link', activeClassName: 'active', onClick: this.closeMenu },
        "Blog"
      ));

      return _react2.default.createElement(
        'div',
        { className: 'containerMain' },
        _react2.default.createElement(
          'div',
          { id: 'rootLayout', style: { display: "flex", flexDirection: "column", height: "100%", width: "100%" } },
          _react2.default.createElement(
            'header',
            { className: 'header' },
            _react2.default.createElement(
              'div',
              { className: 'headerMainButton' },
              _react2.default.createElement(
                'a',
                { href: 'https://musseffect.github.io/' },
                _react2.default.createElement('img', { style: 'width:100px;height:40px;display:block;background-color:green;' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'headerPageTitle' },
              _react2.default.createElement(
                'label',
                { className: 'headerTitleText' },
                'page title'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'headerButtonBlock' },
              _react2.default.createElement(
                'div',
                { className: 'headerButton' },
                _react2.default.createElement(
                  'a',
                  { href: 'https://github.com/Musseffect' },
                  _react2.default.createElement('i', { className: 'fab fa-github fa-lg' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'headerButton' },
                _react2.default.createElement(
                  'a',
                  { href: 'https://www.instagram.com/musseffect/' },
                  _react2.default.createElement('i', { className: 'fab fa-instagram fa-lg' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'headerButton' },
                _react2.default.createElement(
                  'a',
                  { href: 'https://www.flickr.com/photos/musseffect2/' },
                  _react2.default.createElement('i', { className: 'fab fa-flickr fa-lg' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'headerButton' },
                _react2.default.createElement(
                  'a',
                  { href: 'mailto:lazarevich356@gmail.com' },
                  _react2.default.createElement('i', { className: 'far fa-envelope fa-lg' })
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'div',
              { id: 'menu', className: 'navbar navbar-expand navbar-dark bg-primary', style: { width: "100%", display: "flex", flexDirection: "row" } },
              _react2.default.createElement(
                'div',
                { id: 'menuButtons', className: 'navbar-nav mr-auto', style: { margin: 'auto' } },
                links
              )
            ),
            _react2.default.createElement(
              'div',
              { id: 'routeContent' },
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render(props) {
                  return _react2.default.createElement(_MainPage2.default, props);
                } }),
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/posts', render: function render(props) {
                  return _react2.default.createElement(_PostsPage2.default, props);
                } }),
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/about', render: function render(props) {
                  return _react2.default.createElement(_AboutPage2.default, props);
                } }),
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/links', render: function render(props) {
                  return _react2.default.createElement(_LinksPage2.default, props);
                } }),
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/stereoImage', render: function render(props) {
                  return _react2.default.createElement(_StereoImagePage2.default, props);
                } }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/posts/:post', component: _PostPage2.default })
            )
          ),
          _react2.default.createElement('footer', { id: 'footer' })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9hcHAuanN4Il0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidGl0bGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIkFwcCIsInByb3BzIiwibGlua3MiLCJwdXNoIiwiY2xvc2VNZW51IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbiIsIlBvc3RQYWdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBZ0IsU0FBaEJBLGVBQWdCLENBQVNDLEtBQVQsRUFDdEI7QUFDRSxTQUFPLEVBQUNDLE9BQU1ELE1BQU1DLEtBQWIsRUFBUDtBQUNELENBSEQ7O0FBS0EsSUFBTUMscUJBQW1CLFNBQW5CQSxrQkFBbUIsQ0FBU0MsUUFBVCxFQUN6QjtBQUNFLFNBQVEsRUFBUjtBQUVELENBSkQ7O0lBTU1DLEc7OztBQUNKLGVBQVlDLEtBQVosRUFDQTtBQUFBOztBQUFBLHFHQUNVQSxLQURWO0FBRUM7Ozs7NkJBQ1E7QUFBQSxVQUNBSixLQURBLEdBQ08sS0FBS0ksS0FEWixDQUNBSixLQURBOztBQUVQLFVBQUlLLFFBQU0sRUFBVjtBQUNBQSxZQUFNQyxJQUFOLENBQVc7QUFBQywrQkFBRDtBQUFBLFVBQVMsS0FBSSxRQUFiLEVBQXNCLFdBQXRCLEVBQTRCLElBQUcsR0FBL0IsRUFBbUMsV0FBVSx3QkFBN0MsRUFBc0UsaUJBQWdCLFFBQXRGLEVBQStGLFNBQVMsS0FBS0MsU0FBN0c7QUFBeUg7QUFBekgsT0FBWDtBQUNBRixZQUFNQyxJQUFOLENBQVc7QUFBQywrQkFBRDtBQUFBLFVBQVMsS0FBSSxRQUFiLEVB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RUUsNENBQUMscUJBQUQsSUFBTyxXQUFQLEVBQWEsTUFBSyxRQUFsQixFQUEyQixRQUFRLGdCQUFDQSxLQUFEO0FBQUEseUJBQVMsOEJBQUMsbUJBQUQsRUFBZUEsS0FBZixDQUFUO0FBQUEsaUJBQW5DLEdBRkY7QUFHRSw0Q0FBQyxxQkFBRCxJQUFPLFdBQVAsRUFBYSxNQUFLLFFBQWxCLEVBQTJCLFFBQVEsZ0JBQUNBLEtBQUQ7QUFBQSx5QkFBUyw4QkFBQyxtQkFBRCxFQUFlQSxLQUFmLENBQVQ7QUFBQSxpQkFBbkMsR0FIRjtBQUlFLDRDQUFDLHFCQUFELElBQU8sV0FBUCxFQUFhLE1BQUssUUFBbEIsRUFBMkIsUUFBUSxnQkFBQ0EsS0FBRDtBQUFBLHlCQUFTLDhCQUFDLG1CQUFELEVBQWVBLEtBQWYsQ0FBVDtBQUFBLGlCQUFuQyxHQUpGO0FBS0UsNENBQUMscUJBQUQsSUFBTyxXQUFQLEVBQWEsTUFBSyxjQUFsQixFQUFpQyxRQUFRLGdCQUFDQSxLQUFEO0FBQUEseUJBQVMsOEJBQUMseUJBQUQsRUFBcUJBLEtBQXJCLENBQVQ7QUFBQSxpQkFBekMsR0FMRjtBQU1FLDRDQUFDLHFCQUFELElBQU8sTUFBSyxjQUFaLEVBQTJCLFdBQVdTLGtCQUF0QztBQU5GO0FBTkYsV0FqQ0Y7QUFnREUsb0RBQVEsSUFBRyxRQUFYO0FBaERGO0FBREEsT0FEQTtBQXVERDs7OztFQXJFZUMsZ0I7O2tCQXVFSCw2QkFBVyx5QkFBUWhCLGVBQVIsRUFBd0JHLGtCQUF4QixFQUE0Q0UsR0FBNUMsQ0FBWCxDIiwiZmlsZSI6ImFwcC45NjViNTA2ZjY4MzJiYWEwZjlhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgTWVkaWFRdWVyeSBmcm9tICdyZWFjdC1yZXNwb25zaXZlJztcclxuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4uL3BhZ2VzL01haW5QYWdlLmpzJztcclxuaW1wb3J0IEFib3V0UGFnZSBmcm9tICcuLi9wYWdlcy9BYm91dFBhZ2UuanMnO1xyXG5pbXBvcnQgU3RlcmVvSW1hZ2VQYWdlIGZyb20gJy4uL3BhZ2VzL1N0ZXJlb0ltYWdlUGFnZS5qcyc7XHJcbmltcG9ydCBMaW5rc1BhZ2UgZnJvbSAnLi4vcGFnZXMvTGlua3NQYWdlLmpzJztcclxuaW1wb3J0IFBvc3RzUGFnZSBmcm9tICcuLi9wYWdlcy9Qb3N0c1BhZ2UuanMnO1xyXG5pbXBvcnQgUG9zdFBhZ2UgZnJvbSAnLi4vcGFnZXMvUG9zdFBhZ2UuanMnO1xyXG5pbXBvcnQge3NtYWxsTWVkaXVtLG1lZGl1bUxhcmdlfSBmcm9tIFwiLi4vd2luZG93U2l6ZXMuanNcIjtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcz1mdW5jdGlvbihzdGF0ZSlcclxue1xyXG4gIHJldHVybiB7dGl0bGU6c3RhdGUudGl0bGV9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzPWZ1bmN0aW9uKGRpc3BhdGNoKVxyXG57XHJcbiAgcmV0dXJuICh7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKVxyXG4gIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7dGl0bGV9PXRoaXMucHJvcHM7XHJcbiAgICBsZXQgbGlua3M9W107XHJcbiAgICBsaW5rcy5wdXNoKDxOYXZMaW5rIGtleT1cImxpbmtfMVwiIGV4YWN0IHRvPScvJyBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtaXRlbSBsaW5rXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCIgb25DbGljaz17dGhpcy5jbG9zZU1lbnV9PntcIk1haW5cIn08L05hdkxpbms+KTsgXHJcbiAgICBsaW5rcy5wdXNoKDxOYXZMaW5rIGtleT1cImxpbmtfM1wiIGV4YWN0IHRvPScvc3RlcmVvSW1hZ2UnIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi1pdGVtIGxpbmtcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIiBvbkNsaWNrPXt0aGlzLmNsb3NlTWVudX0+e1wiU3RlcmVvSW1hZ2VcIn08L05hdkxpbms+KTsgICBcclxuICAgIGxpbmtzLnB1c2goPE5hdkxpbmsga2V5PVwibGlua181XCIgZXhhY3QgdG89Jy9saW5rcycgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LWl0ZW0gbGlua1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VNZW51fT57XCJMaW5rc1wifTwvTmF2TGluaz4pOyAgXHJcbiAgICBsaW5rcy5wdXNoKDxOYXZMaW5rIGtleT1cImxpbmtfNlwiIGV4YWN0IHRvPScvYWJvdXQnIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi1pdGVtIGxpbmtcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIiBvbkNsaWNrPXt0aGlzLmNsb3NlTWVudX0+e1wiQWJvdXRcIn08L05hdkxpbms+KTsgIFxyXG4gICAgbGlua3MucHVzaCg8TmF2TGluayBrZXk9XCJsaW5rXzdcIiBleGFjdCB0bz0nL2Jsb2cnIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi1pdGVtIGxpbmtcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIiBvbkNsaWNrPXt0aGlzLmNsb3NlTWVudX0+e1wiQmxvZ1wifTwvTmF2TGluaz4pOyAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXJNYWluJz5cclxuICAgIDxkaXYgaWQ9XCJyb290TGF5b3V0XCIgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIixoZWlnaHQ6XCIxMDAlXCIsd2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWUgPSBcImhlYWRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyTWFpbkJ1dHRvblwiPlxyXG4gICAgICAgICAgPGEgaHJlZiA9IFwiaHR0cHM6Ly9tdXNzZWZmZWN0LmdpdGh1Yi5pby9cIj5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOjEwMHB4O2hlaWdodDo0MHB4O2Rpc3BsYXk6YmxvY2s7YmFja2dyb3VuZC1jb2xvcjpncmVlbjtcIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyUGFnZVRpdGxlXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaGVhZGVyVGl0bGVUZXh0XCI+cGFnZSB0aXRsZTwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJCdXR0b25CbG9ja1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJCdXR0b25cIj5cclxuICAgICAgICAgICAgPGEgaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL011c3NlZmZlY3RcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1YiBmYS1sZ1wiPjwvaT5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8YSBocmVmID0gXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL211c3NlZmZlY3QvXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW0gZmEtbGdcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJCdXR0b25cIj5cclxuICAgICAgICAgICAgPGEgaHJlZiA9IFwiaHR0cHM6Ly93d3cuZmxpY2tyLmNvbS9waG90b3MvbXVzc2VmZmVjdDIvXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mbGlja3IgZmEtbGdcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJCdXR0b25cIj5cclxuICAgICAgICAgICAgPGEgaHJlZiA9IFwibWFpbHRvOmxhemFyZXZpY2gzNTZAZ21haWwuY29tXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1lbnZlbG9wZSBmYS1sZ1wiPlxyXG4gICAgICAgICAgICA8L2k+PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGlkPVwibWVudVwiIGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kIG5hdmJhci1kYXJrIGJnLXByaW1hcnlcIiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGRpc3BsYXk6XCJmbGV4XCIsZmxleERpcmVjdGlvbjpcInJvd1wifX0gPlxyXG4gICAgICAgICAgPGRpdiBpZD1cIm1lbnVCdXR0b25zXCIgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCIgc3R5bGU9e3ttYXJnaW46J2F1dG8nfX0+XHJcbiAgICAgICAgICAgIHtsaW5rc31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJyb3V0ZUNvbnRlbnRcIj5cclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyByZW5kZXI9eyhwcm9wcyk9PjxNYWluUGFnZSB7Li4ucHJvcHN9Lz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nL3Bvc3RzJyByZW5kZXI9eyhwcm9wcyk9PjxQb3N0c1BhZ2Ugey4uLnByb3BzfS8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy9hYm91dCcgcmVuZGVyPXsocHJvcHMpPT48QWJvdXRQYWdlIHsuLi5wcm9wc30vPn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvbGlua3MnIHJlbmRlcj17KHByb3BzKT0+PExpbmtzUGFnZSB7Li4ucHJvcHN9Lz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nL3N0ZXJlb0ltYWdlJyByZW5kZXI9eyhwcm9wcyk9PjxTdGVyZW9JbWFnZVBhZ2Ugey4uLnByb3BzfS8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcG9zdHMvOnBvc3RcIiBjb21wb25lbnQ9e1Bvc3RQYWdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZvb3RlciBpZD0nZm9vdGVyJz5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcCkpO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==