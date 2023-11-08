"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _signUp4Module = _interopRequireDefault(require("./sign-up4.module.css"));
var _rightSm = _interopRequireDefault(require("../assest/right-sm.png"));
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
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: _signUp4Module.default.oneLastThing
  }, "One last thing, how did you hear about us?"), /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp4Module.default.loremIpsumDolor
  }, "Lorem ipsum dolor sit amet consectetur.")), /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp4Module.default.inputWrapper
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "hearAbout",
    className: "auth-label",
    style: {
      textAlign: 'justify'
    }
  }, "How did you hear about us?"), /*#__PURE__*/_react.default.createElement("select", {
    id: "hearAbout",
    name: "hearAboutUs",
    className: "input"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "LinkedIn"
  }, "LinkedIn"), /*#__PURE__*/_react.default.createElement("option", {
    value: "twitter"
  }, "Twitter"), /*#__PURE__*/_react.default.createElement("option", {
    value: "Instagram"
  }, "Instagram"))), /*#__PURE__*/_react.default.createElement("button", {
    className: _signUp4Module.default.button
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: _signUp4Module.default.getStarted
  }, "Finish up"), /*#__PURE__*/_react.default.createElement("img", {
    className: _signUp4Module.default.arrowrightSmIcon,
    alt: "",
    src: _rightSm.default
  })))));
};
var _default = exports.default = SignUp4;