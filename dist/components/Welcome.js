"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _signUp2Module = _interopRequireDefault(require("./sign-up2.module.css"));
var _rightSm = _interopRequireDefault(require("../assest/right-sm.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var SignUp2 = function SignUp2(_ref) {
  var setStep = _ref.setStep;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp2Module.default.signUp2
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp2Module.default.modal
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp2Module.default.question
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp2Module.default.welcomeOnboardWedLikeToParent
  }, /*#__PURE__*/_react.default.createElement("b", {
    className: _signUp2Module.default.welcomeOnboardWed
  }, "Welcome onboard, we\u2019d like to know your full name"), /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp2Module.default.loremIpsumDolor
  }, "Lorem ipsum dolor sit amet consectetur.")), /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp2Module.default.inputParent
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "pcb-1"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "firstName",
    className: "auth-label",
    style: {
      textAlign: 'justify'
    }
  }, "First Name"), /*#__PURE__*/_react.default.createElement("input", {
    className: "input",
    value: "First name",
    placeholder: "Enter your first name",
    type: "text",
    defaultValue: "First name",
    id: "firstName"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "pcb-1"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "lastName",
    className: "auth-label",
    style: {
      textAlign: 'justify'
    }
  }, "Last Name"), /*#__PURE__*/_react.default.createElement("input", {
    className: "input",
    value: "Last name",
    placeholder: "Enter your last name/surname",
    type: "text",
    defaultValue: "Last name",
    id: "lastName"
  }))), /*#__PURE__*/_react.default.createElement("button", {
    className: _signUp2Module.default.button,
    onClick: function onClick() {
      return setStep(3);
    }
  }, /*#__PURE__*/_react.default.createElement("b", {
    className: _signUp2Module.default.getStarted
  }, "Next"), /*#__PURE__*/_react.default.createElement("img", {
    className: _signUp2Module.default.arrowrightSmIcon,
    alt: "",
    src: _rightSm.default
  })))));
};
var _default = exports.default = SignUp2;