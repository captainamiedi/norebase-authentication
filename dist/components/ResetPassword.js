"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ResetPassword;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ResetPassword(_ref) {
  var handleResend = _ref.handleResend;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "sign-up-on-norebase-parent"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "sign-up-on"
  }, "Forget Password "), /*#__PURE__*/_react.default.createElement("div", {
    className: "norebase-is-the"
  }, "We have sent a confirmation link to username@email.com Use the provided link to reset your password")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "receive-email"
  }, "Didn\u2019t receive email? ", /*#__PURE__*/_react.default.createElement("span", {
    role: "button",
    onClick: handleResend
  }, "Resend"), " 04:47")));
}