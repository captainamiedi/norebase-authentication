"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Login;
var _react = _interopRequireWildcard(require("react"));
require("./sign-up1.css");
var _flatColorIcons_google = _interopRequireDefault(require("../assest/flat-color-icons_google.png"));
var _edenLife = _interopRequireDefault(require("../assest/edenLife.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Login() {
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var handleChange = function handleChange(_ref) {
    var _ref$target = _ref.target,
      name = _ref$target.name,
      value = _ref$target.value;
    var temp = _objectSpread({}, data);
    temp[name] = value;
    setData(temp);
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log(data, 'login data');
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "sign-up-1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "question"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sign-up-on-norebase-parent"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "sign-up-on"
  }, "Login to Norebase"), /*#__PURE__*/_react.default.createElement("div", {
    className: "norebase-is-the"
  }, "Norebase is the easiest way to start, scale and operate your business like a pro lorem ipsum dolor")), /*#__PURE__*/_react.default.createElement("form", {
    className: "input-parent",
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      paddingBottom: '1rem'
    }
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "Email",
    className: "auth-label"
  }, "Email"), /*#__PURE__*/_react.default.createElement("input", {
    className: "input",
    id: "Email",
    placeholder: "Enter your email address",
    type: "text",
    required: true,
    name: "email",
    onChange: handleChange
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      paddingBottom: '1rem'
    }
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "password",
    className: "auth-label"
  }, "Password"), /*#__PURE__*/_react.default.createElement("input", {
    className: "input",
    placeholder: "Enter your password",
    type: "password",
    id: "password",
    name: "password",
    required: true,
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "forget-password-container"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "forget-password",
    role: "button"
  }, "Forgot password?"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "pcb-1"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    type: "submit"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "get-started"
  }, "Login")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "pcb-1"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "button1",
    type: "button"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "flat-color-iconsgoogle",
    alt: "",
    src: _flatColorIcons_google.default
  }), /*#__PURE__*/_react.default.createElement("h5", {
    className: "sign-up-with"
  }, "Sign up with Google"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "already-have-an-container"
  }, /*#__PURE__*/_react.default.createElement("span", null, "New to Norebase? "), /*#__PURE__*/_react.default.createElement("span", {
    className: "login-here"
  }, "Sign up here")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "testimonials"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-child"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-item"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-item"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-item"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "testimonial"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "lorem-ipsum-dolor"
  }, "Lorem ipsum dolor sit amet consectetur. Elit nulla tincidunt nam imperdiet in interdum. Pellentesque felis ac laoreet sed mi. Lorem ipsum dolor sit amet consectetur. Elit nulla tincidunt nam imperdiet in interdum. Pellentesque felis ac laoreet sed mi."), /*#__PURE__*/_react.default.createElement("div", {
    className: "frame-parent"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "john-doe-parent"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ceo-name"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "john-doe"
  }, "John Doe"), /*#__PURE__*/_react.default.createElement("p", {
    className: "ceo-eden-life"
  }, "CEO Eden Life"))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    className: "testimonial-child",
    alt: "",
    src: _edenLife.default
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-child1"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-child2"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-child1"
  }))));
}