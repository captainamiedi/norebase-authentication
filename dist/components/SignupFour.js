"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _signUp4Module = _interopRequireDefault(require("./sign-up4.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var SignUp4 = function SignUp4() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp4Module.default.signUp4
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp4Module.default.modal
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp4Module.default.question
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp4Module.default.oneLastThingHowDidYouHeParent
  }, /*#__PURE__*/_react.default.createElement("b", {
    className: _signUp4Module.default.oneLastThing
  }, "One last thing, how did you hear about us?"), /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp4Module.default.loremIpsumDolor
  }, "Lorem ipsum dolor sit amet consectetur.")), /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp4Module.default.inputWrapper
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: _signUp4Module.default.input,
    value: "How did you hear about us?",
    placeholder: "Select an option",
    type: "text",
    defaultValue: "How did you hear about us?"
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: _signUp4Module.default.button
  }, /*#__PURE__*/_react.default.createElement("b", {
    className: _signUp4Module.default.getStarted
  }, "Finish up"), /*#__PURE__*/_react.default.createElement("img", {
    className: _signUp4Module.default.arrowrightSmIcon,
    alt: "",
    src: "/arrowrightsm.svg"
  })))));
};
var _default = exports.default = SignUp4;