"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StartAuthentication;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _excluded = ["component", "fallback"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var LoginStart = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/Login'));
  });
});
var StartSignup = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/StartSignup'));
  });
});
var ResetPassword = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/ChangePassword'));
  });
});
var ForgotPassword = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/ForgotPassword'));
  });
});
function StartAuthentication(_ref) {
  var fallback = _ref.fallback,
    unAuthenticatedRoutes = _ref.unAuthenticatedRoutes,
    authenticatedRoutes = _ref.authenticatedRoutes,
    _ref$routeAfterLogin = _ref.routeAfterLogin,
    routeAfterLogin = _ref$routeAfterLogin === void 0 ? '/dashboard' : _ref$routeAfterLogin,
    routeAfterSignup = _ref.routeAfterSignup;
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(LazyComponent, {
      component: LoginStart,
      fallback: fallback,
      routeAfterLogin: routeAfterLogin
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/signup",
    element: /*#__PURE__*/_react.default.createElement(LazyComponent, {
      component: StartSignup,
      fallback: fallback,
      routeAfterSignup: routeAfterSignup
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/reset-password",
    element: /*#__PURE__*/_react.default.createElement(LazyComponent, {
      component: ResetPassword,
      fallback: fallback
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/forget-password",
    element: /*#__PURE__*/_react.default.createElement(LazyComponent, {
      component: ForgotPassword,
      fallback: fallback
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    element: /*#__PURE__*/_react.default.createElement(ProtectedRoutes, null)
  }, authenticatedRoutes), unAuthenticatedRoutes));
}
var LazyComponent = function LazyComponent(_ref2) {
  var Component = _ref2.component,
    fallback = _ref2.fallback,
    restProps = _objectWithoutProperties(_ref2, _excluded);
  return /*#__PURE__*/_react.default.createElement(_react.Suspense, {
    fallback: fallback
  }, /*#__PURE__*/_react.default.createElement(Component, restProps));
};
var ProtectedRoutes = function ProtectedRoutes(_ref3) {
  var children = _ref3.children,
    _ref3$redirect = _ref3.redirect,
    redirect = _ref3$redirect === void 0 ? '/' : _ref3$redirect;
  var auth = localStorage.getItem('userToken');
  var location = (0, _reactRouterDom.useLocation)();
  if (!auth) {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Navigate, {
      to: redirect,
      state: {
        from: location
      },
      replace: true
    });
  }
  return children ? children : /*#__PURE__*/_react.default.createElement(_reactRouterDom.Outlet, null);
};