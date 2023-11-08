"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Signup = _interopRequireDefault(require("../components/Signup"));
var _Welcome = _interopRequireDefault(require("../components/Welcome"));
var _SignupThree = _interopRequireDefault(require("../components/SignupThree"));
var _SignupFour = _interopRequireDefault(require("../components/SignupFour"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var StartSignup = function StartSignup(_ref) {
  var step = _ref.step,
    setStep = _ref.setStep;
  // const [step, setStep] = useState(1)

  var handleRenderPage = function handleRenderPage(componentStep) {
    switch (componentStep) {
      case 1:
        return /*#__PURE__*/_react.default.createElement(_Signup.default, {
          setStep: setStep
        });
      case 2:
        return /*#__PURE__*/_react.default.createElement(_Welcome.default, {
          setStep: setStep
        });
      case 3:
        return /*#__PURE__*/_react.default.createElement(_SignupThree.default, {
          setStep: setStep
        });
      case 4:
        return /*#__PURE__*/_react.default.createElement(_SignupFour.default, {
          setStep: setStep
        });
      default:
        return /*#__PURE__*/_react.default.createElement(_Signup.default, {
          setStep: setStep
        });
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, handleRenderPage(step));
};
var _default = exports.default = StartSignup;